'use client';
import * as React from 'react';
import { DocumentCategoriesHeader } from '@/components/documents/categories/DocumentCategoriesHeader';
import { DocumentCategoriesList } from '@/components/documents/categories/DocumentCategoriesList';
import { DocumentCategoriesLoading } from '@/components/documents/categories/DocumentCategoriesLoading';
import { DocumentCategoriesEmptyState } from '@/components/documents/categories/DocumentCategoriesEmptyState';
import { DocumentCategoryModal } from '@/components/documents/categories/DocumentCategoryModal';
import { mockCategories, DocumentCategory } from '@/components/documents/categories/mock-data';

export default function DocumentCategoriesPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [categories, setCategories] = React.useState<DocumentCategory[]>([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setCategories(mockCategories);
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleNewCategory = () => {
        setIsModalOpen(true);
    }
    
    const renderContent = () => {
        if (isLoading) {
            return <DocumentCategoriesLoading />;
        }
        if (categories.length === 0) {
            return <DocumentCategoriesEmptyState onNewCategory={handleNewCategory} />;
        }
        return <DocumentCategoriesList categories={categories} />;
    }

    return (
        <div className="space-y-4">
            <DocumentCategoriesHeader onNewCategory={handleNewCategory} />
            {renderContent()}
            <DocumentCategoryModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
    );
}
