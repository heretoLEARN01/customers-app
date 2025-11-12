interface GarageState {
    selectedCustomer: string | null;
    setSelectedCustomer: (name: string) => void;
    jobs: string[];
    addJob: (job: string) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}
export declare const useGarageStore: import("zustand").UseBoundStore<import("zustand").StoreApi<GarageState>>;
export {};
