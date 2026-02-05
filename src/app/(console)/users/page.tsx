'use client';
import * as React from 'react';
import { UsersHeader } from '@/features/users/components/UsersHeader';
import { UsersFilters } from '@/features/users/components/UsersFilters';
import { UsersTable } from '@/features/users/components/UsersTable';
import { UsersLoading } from '@/features/users/components/UsersLoading';
import { UsersEmptyState } from '@/features/users/components/UsersEmptyState';
import { UserInviteModal } from '@/features/users/components/UserInviteModal';
import { getMockUsers } from '@/features/users/services/userService';
import { User } from '@/features/users/types/user';

export default function UsersPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [users, setUsers] = React.useState<User[]>([]);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setUsers(getMockUsers());
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
