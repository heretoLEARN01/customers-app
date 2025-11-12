export type Customer = {
    id: number;
    name: string;
};
type GarageStore = {
    customers: Customer[];
    addCustomer: (name: string) => void;
};
export declare const useGarageStore: import("zustand").UseBoundStore<import("zustand").StoreApi<GarageStore>>;
export {};
