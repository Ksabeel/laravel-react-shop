import { Head } from '@inertiajs/react';
import { Category, Pagination } from '@/types';
import { Pencil, Plus, Trash2, Eye } from 'lucide-react';
import PaginationCategory from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import PageTitle from '@/components/PagTitle';
import { Table } from '@/components/Table';
import EditButton from '@/components/ui/ActionButtons/EditButton';
import DeleteButton from '@/components/ui/ActionButtons/DeleteButton';
import ViewButton from '@/components/ui/ActionButtons/ViewBuuton';

interface CategoriesIndexProps {
    categories: Pagination<Category>;
}

export default function CategoriesIndex({ categories }: CategoriesIndexProps) {
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
                                            ? category.description.substring(
                                                  0,
                                                  50,
                                              ) + '...'
                                            : 'No description',
                                },
                                {
                                    header: 'Actions',
                                    render: (category) => (
                                        <div className="flex gap-2">
                                            <ViewButton
                                                href={`/categories/${category.id}`}
                                            >
                                                <Eye className="h-4 w-4" />
                                            </ViewButton>
                                            <EditButton
                                                href={`/categories/${category.id}/edit`}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </EditButton>
                                            <DeleteButton
                                                href={`/categories/${category.id}`}
                                            >
                                                <Trash2 className="h-4 w-4" />
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
