export interface Feature {
    title: string; 
    description: string;
    route: string;
    icon: string;
    color: string;
}

export interface IRow {
    make: string;
    model: string;
    price: number;
    electric: boolean;
}