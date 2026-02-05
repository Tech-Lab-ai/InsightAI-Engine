'use client';
import * as React from 'react';

import { DocumentsHeader } from '@/components/documents/DocumentsHeader';
import { DocumentsActionsBar } from '@/components/documents/DocumentsActionsBar';
import { DocumentsFilters } from '@/components/documents/DocumentsFilters';
import { DocumentsList } from '@/components/documents/DocumentsList';
import { DocumentsGrid } from '@/components/documents/DocumentsGrid';
import { DocumentsLoading } from '@/components/documents/DocumentsLoading';
import { DocumentsEmptyState } from '@/components/documents/DocumentsEmptyState';
import { DocumentDetailsPanel } from '@/components/documents/DocumentDetailsPanel';

import { mockDocuments, Document } from '@/components/documents/mock-data';

export default function DocumentsPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [documents, setDocuments] = React.useState<Document[]>([]);
    const [view, setView] = React.useState<'list' | 'grid'>('list');
    const [selectedDocument, setSelectedDocument] = React.useState<Document | null>(null);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDocuments(mockDocuments);
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