import DeleteButton from '@/components/ui/DeleteButton';
import EditButton from '@/components/ui/EditButton';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { formatDate, Product } from '@/types';
import PageTitle from '@/components/PagTitle';

interface Props {
    product: Product;
}

export default function ProductsShow({ product }: Props) {
    // console.log(product);
    return (
        <>
            <Head title={product.name} />
            <div className="mx-auto max-w-2xl p-6">
                <PageTitle heading="Products" href="/products">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Products
                </PageTitle>
                <div className="rounded-lg bg-black p-6 shadow">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">
                                {product.name}
                            </h1>
                            <p className="mt-2 text-gray-600">
                                Created: {formatDate(product.created_at)}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <EditButton href={`/products/${product.id}/edit`}>
                                <Edit className="h-4 w-4" />
                                Edit
                            </EditButton>
                            <DeleteButton href={`/products/${product.id}`}>
                                <Trash2 className="h-4 w-4" />
                                Delete
                            </DeleteButton>
                        </div>
                    </div>
                    <div className="space-y-4 border-t pt-6">
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Description
                            </label>
                            <p className="mt-2 text-gray-700">
                                {product.description ||
                                    'No description provided'}
                            </p>
                        </div>
                        <div className="text-sm text-gray-500">
                            Last updated: {formatDate(product.updated_at)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
