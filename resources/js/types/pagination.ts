export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Pagination<T> {
    data: T[];
    current_page: number;
    last_page: number;
    links: PaginationLink[];
}
