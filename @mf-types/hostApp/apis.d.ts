
    export type RemoteKeys = 'hostApp/store' | 'hostApp/eventBus';
    type PackageType<T> = T extends 'hostApp/eventBus' ? typeof import('hostApp/eventBus') :T extends 'hostApp/store' ? typeof import('hostApp/store') :any;