import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';
// import { CategoryShow } from '@/types';

interface Category {
    id: number;
    name: string;
    description: string | null;
    formatted_created_at: string;
    formatted_updated_at: string;
    // category: CategoryShow[];
}

export default function CategoriesShow() {
    const { category } = usePage().props;
    const cat = category as Category;
    // console.log(category);
    return (
        <>
            <Head title={cat.name} />
            <div className="mx-auto max-w-2xl p-6">
                <div className="mb-6 flex items-center gap-4">
                    <Link
                        href="/categories"
                        className="inline-flex items-center gap-2 rounded-md text-gray-600 hover:text-gray-900"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Categories
                    </Link>
                </div>
                <div className="rounded-lg bg-black p-6 shadow">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">{cat.name}</h1>
                            <p className="mt-2 text-gray-600">
                                Created: {cat.formatted_created_at}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Link
                                href={`/categories/${cat.id}/edit`}
                                className="inline-flex items-center gap-2 rounded-md bg-yellow-100 px-4 py-2 text-yellow-800 hover:bg-yellow-200"
                            >
                                <Edit className="h-4 w-4" />
                                Edit
                            </Link>
                            <Link
                                href={`/categories/${cat.id}`}
                                method="delete"
                                as="button"
                                className="inline-flex items-center gap-2 rounded-md bg-red-100 px-4 py-2 text-red-800 hover:bg-red-200"
                                onClick={(e) => {
                                    if (!confirm('Are you sure?')) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                <Trash2 className="h-4 w-4" />
                                Delete
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4 border-t pt-6">
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Description
                            </label>
                            <p className="mt-2 text-gray-700">
                                {cat.description || 'No description provided'}
                            </p>
                        </div>
                        <div className="text-sm text-gray-500">
                            Last updated: {cat.formatted_updated_at}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
