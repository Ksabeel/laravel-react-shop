import { Category } from './category';

export interface Product {
    id: number;
    name: string;
    description: string | null;
    price: number;
    category_id: number;
    created_at: string;
    updated_at: string;
    category: Category;
}
