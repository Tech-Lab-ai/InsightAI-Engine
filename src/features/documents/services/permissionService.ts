import { PermissionRole } from '../types/permission';

const mockRoles: PermissionRole[] = [
    {
        id: 'role_admin',
        name: 'Admin',
        description: 'Acesso total para gerenciar documentos e configurações.',
        permissions: {
            view: true,
            edit: true,
            share: true,
            delete: true,
        },
    },
    {
        id: 'role_editor',
        name: 'Editor',
        description: 'Pode criar e editar documentos.',
        permissions: {
            view: true,
            edit: true,
            share: true,
            delete: false,
        },
    },
    {
        id: 'role_viewer',
        name: 'Visualizador',
        description: 'Pode apenas visualizar documentos.',
        permissions: {
            view: true,
            edit: false,
            share: false,
            delete: false,
        },
    },
    {
        id: 'role_guest',
        name: 'Convidado',
        description: 'Acesso limitado a documentos específicos.',
        permissions: {
            view: false,
            edit: false,
            share: false,
            delete: false,
        },
    },
];

export function getMockRoles(): PermissionRole[] {
    return mockRoles;
}
