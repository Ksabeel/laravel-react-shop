import DeleteButton from '@/components/ui/DeleteButton';
import EditButton from '@/components/ui/EditButton';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { formatDate } from '@/types';

interface Product {
    id: number;
    name: string;
    description: string | null;
    created_at: string;
    updated_at: string;
}

export default function ProductsShow() {
    const { product } = usePage().props;
    const prod = product as Product;
    // console.log(category);
    return (
        <>
            <Head title={prod.name} />
            <div className="mx-auto max-w-2xl p-6">
                <div className="mb-6 flex items-center gap-4">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 rounded-md text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Products
                    </Link>
                </div>
                <div className="rounded-lg bg-black p-6 shadow">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">{prod.name}</h1>
                            <p className="mt-2 text-gray-600">
                                Created: {formatDate(prod.created_at)}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <EditButton href={`/products/${prod.id}/edit`}>
                                <Edit className="h-4 w-4" />
                                Edit
                            </EditButton>
                            <DeleteButton href={`/products/${prod.id}`}>
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
                                {prod.description || 'No description provided'}
                            </p>
                        </div>
                        <div className="text-sm text-gray-500">
                            Last updated: {formatDate(prod.updated_at)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
