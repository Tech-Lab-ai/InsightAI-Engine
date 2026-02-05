export type PermissionRole = {
    id: string;
    name: string;
    description: string;
    permissions: {
        view: boolean;
        edit: boolean;
        share: boolean;
        delete: boolean;
    };
};
