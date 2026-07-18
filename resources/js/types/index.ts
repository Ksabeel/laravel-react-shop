export type * from './auth';
export type * from './navigation';
export type * from './ui';

export interface Category {
    id: number;
    name: string;
    description: string | null;
}

export interface CategoryShow {
    id: number;
    name: string;
    description: string | null;
    created_at: Date;
    updated_at: Date;
}
