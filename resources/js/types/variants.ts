export interface Color {
    id: number;
    name: string;
    hex: string;
}

export interface Variant {
    id: number;
    color_id: number;
    stock_quantity: number;
    additional_price: number;
}

