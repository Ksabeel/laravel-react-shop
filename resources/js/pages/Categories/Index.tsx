import { Head, Link } from '@inertiajs/react';
import type { Category } from '@/types';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { Pagination } from '@/types/pagination';
import PaginationCategory from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import PageTitle from '@/components/PagTitle';
import { Table } from '@/components/Table';
import EditButton from '@/components/ui/EditButton';
import DeleteButton from '@/components/ui/DeleteButton';

interface Props {
    categories: Pagination<Category>;
}

export default function CategoriesIndex({ categories }: Props) {
    // console.log(categories);

    return (
        <>
            <Head title="Categories" />
            <div className="p-6">
                <PageTitle heading="Categories" href="/categories/create">
                    <Plus className="h-4 w-4" />
                    Add Category
                </PageTitle>

                {categories.data.length > 0 ? (
                    <div className="overflow-x-auto rounded-lg shadow">
                        <Table
                            data={categories.data}
                            columns={[
                                {
                                    header: 'ID',
                                    render: (category) => category.id,
                                },
                                {
                                    header: 'Name',
                                    render: (category) => category.name,
                                },
                                {
                                    header: 'Description',
                                    render: (category) =>
                                        category.description
                                            ? category.description
                                            : 'No description',
                                },
                                {
                                    header: 'Actions',
                                    render: (product) => (
                                        <div className="flex gap-2">
                                            <EditButton
                                                href={`/categories/${product.id}/edit`}
                                            >
                                                <Pencil className="h-4 w-4" />{' '}
                                                Edit
                                            </EditButton>
                                            <DeleteButton
                                                href={`/products/${product.id}`}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                                Delete
                                            </DeleteButton>
                                        </div>
                                    ),
                                },
                            ]}
                        />

                        {categories.last_page > 1 && (
                            <PaginationCategory pagination={categories} />
                        )}
                    </div>
                ) : (
                    <EmptyState
                        description="No categories yet"
                        href="/categories/create"
                    >
                        <Plus className="h-4 w-4" />
                        Add Category
                    </EmptyState>
                )}
            </div>
        </>
    );
}

CategoriesIndex.layout = {
    breadcrumbs: [{ title: 'Categories', href: '/categories' }],
};
