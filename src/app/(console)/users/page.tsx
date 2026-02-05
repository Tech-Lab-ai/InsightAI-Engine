'use client';
import * as React from 'react';
import { UsersHeader } from '@/components/users/UsersHeader';
import { UsersFilters } from '@/components/users/UsersFilters';
import { UsersTable } from '@/components/users/UsersTable';
import { UsersLoading } from '@/components/users/UsersLoading';
import { UsersEmptyState } from '@/components/users/UsersEmptyState';
import { UserInviteModal } from '@/components/users/UserInviteModal';
import { mockUsers, User } from '@/components/users/mock-data';

export default function UsersPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [users, setUsers] = React.useState<User[]>([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setUsers(mockUsers);
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleInviteUser = () => {
        setIsModalOpen(true);
    };

    const renderContent = () => {
        if (isLoading) {
            return <UsersLoading />;
        }
        if (users.length === 0) {
            return <UsersEmptyState onInviteUser={handleInviteUser} />;
        }
        return <UsersTable users={users} />;
    };

    return (
        <div className="space-y-8">
            <UsersHeader onInviteUser={handleInviteUser} />
            <UsersFilters />
            {renderContent()}
            <UserInviteModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
    );
}
