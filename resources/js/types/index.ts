export type * from './auth';
export type * from './navigation';
export type * from './ui';
export * from './pagination';

export function formatDate(date: string) {
    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).format(new Date(date));
}

export interface Category {
    id: number;
    name: string;
    description: string | null;
}

export interface Product {
    id: number;
    name: string;
    description: string | null;
    price: number;
    category: Category;
}

export interface CategoryShow {
    id: number;
    name: string;
    description: string | null;
    created_at: Date;
    updated_at: Date;
}
