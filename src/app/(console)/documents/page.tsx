'use client';
import * as React from 'react';

import { DocumentsHeader } from '@/features/documents/components/DocumentsHeader';
import { DocumentsActionsBar } from '@/features/documents/components/DocumentsActionsBar';
import { DocumentsFilters } from '@/features/documents/components/DocumentsFilters';
import { DocumentsList } from '@/features/documents/components/DocumentsList';
import { DocumentsGrid } from '@/features/documents/components/DocumentsGrid';
import { DocumentsLoading } from '@/features/documents/components/DocumentsLoading';
import { DocumentsEmptyState } from '@/features/documents/components/DocumentsEmptyState';
import { DocumentDetailsPanel } from '@/features/documents/components/DocumentDetailsPanel';

import { getMockDocuments, Document } from '@/features/documents/services/documentService';

export default function DocumentsPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [documents, setDocuments] = React.useState<Document[]>([]);
    const [view, setView] = React.useState<'list' | 'grid'>('list');
    const [selectedDocument, setSelectedDocument] = React.useState<Document | null>(null);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDocuments(getMockDocuments());
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleSelectDocument = (doc: Document) => {
        setSelectedDocument(doc);
    };

    const handleClosePanel = () => {
        setSelectedDocument(null);
    }

    const renderContent = () => {
        if (isLoading) {
            return <DocumentsLoading />;
        }
        if (documents.length === 0) {
            return <DocumentsEmptyState />;
        }
        if (view === 'grid') {
            return <DocumentsGrid documents={documents} onSelectDocument={handleSelectDocument} />;
        }
        return <DocumentsList documents={documents} onSelectDocument={handleSelectDocument} />;
    };

    return (
        <div className="space-y-4">
            <DocumentsHeader />
            <DocumentsActionsBar />
            <DocumentsFilters view={view} setView={setView} />
            {renderContent()}
            <DocumentDetailsPanel document={selectedDocument} isOpen={!!selectedDocument} onClose={handleClosePanel} />
        </div>
    );
}
