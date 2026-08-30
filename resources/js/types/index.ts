export type * from './auth';
export type * from './navigation';
export type * from './ui';
export type * from './pagination';
export type * from './category';
export type * from './product';
export type * from './variants';

export function formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).format(new Date(date));
}
