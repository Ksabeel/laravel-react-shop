import { Head, Link } from '@inertiajs/react';
import type { Product } from '@/types';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { Pagination } from '@/types/pagination';
import PaginationProduct from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import PageTitle from '@/components/PagTitle';
import { Table } from '@/components/Table';
import EditButton from '@/components/ui/EditButton';
import DeleteButton from '@/components/ui/DeleteButton';

interface Props {
    products: Pagination<Product>;
}

export default function ProdctsIndex({ products }: Props) {
    // console.log(products);

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
                                            <EditButton
                                                href={`/products/${product.id}/edit`}
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

ProdctsIndex.layout = {
    breadcrumbs: [{ title: 'Products', href: '/productss' }],
};
