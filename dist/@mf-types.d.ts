
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Customers';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Customers' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Customers') :any;