type Callback = (payload: any) => void;
export declare const eventBus: {
    on: (event: string, cb: Callback) => void;
    emit: (event: string, payload: any) => void;
};
export {};
