import { Head } from '@inertiajs/react';
import { Eye, Pencil, Plus, Trash2 } from 'lucide-react';
import type { Product, Pagination } from '@/types';
import PaginationProduct from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import PageTitle from '@/components/PagTitle';
import { Table } from '@/components/Table';
import EditButton from '@/components/ui/ActionButtons/EditButton';
import DeleteButton from '@/components/ui/ActionButtons/DeleteButton';
import ViewButton from '@/components/ui/ActionButtons/ViewBuuton';

interface ProductsIndexProps {
    products: Pagination<Product>;
}

export default function ProductsIndex({ products }: ProductsIndexProps) {
    return (
        <>
            <Head title="Products" />
            <div className="p-6">
                <PageTitle heading="Products" href="/products/create">
                    <Plus className="h-4 w-4" />
                    Add Products
                </PageTitle>

                {products.data.length > 0 ? (
                    <div className="overflow-x-auto rounded-lg shadow">
                        <Table
                            data={products.data}
                            columns={[
                                {
                                    header: 'ID',
                                    render: (product) => product.id,
                                },
                                {
                                    header: 'Name',
                                    render: (product) => product.name,
                                },
                                {
                                    header: 'Description',
                                    render: (product) =>
                                        product.description
                                            ? product.description.substring(
                                                  0,
                                                  50,
                                              ) + '...'
                                            : 'No description',
                                },
                                {
                                    header: 'Price',
                                    render: (product) => product.price,
                                },
                                {
                                    header: 'Category',
                                    render: (product) => product.category.name,
                                },

                                {
                                    header: 'Actions',
                                    render: (product) => (
                                        <div className="flex gap-2">
                                            <ViewButton
                                                href={`/products/${product.id}`}
                                            >
                                                <Eye className="h-4 w-4" />
                                            </ViewButton>
                                            <EditButton
                                                href={`/products/${product.id}/edit`}
                                            >
                                                <Pencil className="h-4 w-4" />{' '}
                                            </EditButton>
                                            <DeleteButton
                                                href={`/products/${product.id}`}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </DeleteButton>
                                        </div>
                                    ),
                                },
                            ]}
                        />

                        {products.last_page > 1 && (
                            <PaginationProduct pagination={products} />
                        )}
                    </div>
                ) : (
                    <EmptyState
                        description="No prodcuts yet"
                        href="/products/create"
                    >
                        <Plus className="h-4 w-4" />
                        Add Product
                    </EmptyState>
                )}
            </div>
        </>
    );
}

ProductsIndex.layout = {
    breadcrumbs: [{ title: 'Products', href: '/products' }],
};
