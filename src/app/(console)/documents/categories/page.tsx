'use client';
import * as React from 'react';
import { DocumentCategoriesHeader } from '@/features/documents/components/categories/DocumentCategoriesHeader';
import { DocumentCategoriesList } from '@/features/documents/components/categories/DocumentCategoriesList';
import { DocumentCategoriesLoading } from '@/features/documents/components/categories/DocumentCategoriesLoading';
import { DocumentCategoriesEmptyState } from '@/features/documents/components/categories/DocumentCategoriesEmptyState';
import { DocumentCategoryModal } from '@/features/documents/components/categories/DocumentCategoryModal';
import { getMockCategories, DocumentCategory } from '@/features/documents/services/categoryService';

export default function DocumentCategoriesPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [categories, setCategories] = React.useState<DocumentCategory[]>([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setCategories(getMockCategories());
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
