import { Head, Link } from '@inertiajs/react';
import type { Category } from '@/types';
import { Pencil, Plus, Trash } from 'lucide-react';

interface Props {
    categories: Category[];
}

export default function CategoriesIndex({ categories }: Props) {
    // console.log(categories);

    return (
        <>
            <Head title="Categories" />
            <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Categories</h1>

                    <Link
                        href="/categories/create"
                        className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-stone-900 hover:bg-stone-100"
                    >
                        <Plus className="h-4 w-4" />
                        Add Category
                    </Link>
                </div>

                {categories.length > 0 ? (
                    <div className="overflow-x-auto rounded-lg shadow">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Description
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {categories.map((category) => (
                                    <tr key={category.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {category.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {category.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {category.description
                                                ? category.description.substring(
                                                      0,
                                                      50,
                                                  ) + '...'
                                                : 'No description'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Link
                                                    href={`/categories/${category.id}/edit`}
                                                    className="inline-flex items-center gap-1 rounded-md bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 hover:bg-yellow-200"
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={`/categories/${category.id}`}
                                                    method="delete"
                                                    as="button"
                                                    onClick={(e) => {
                                                        if (
                                                            !confirm(
                                                                'Are you sure?',
                                                            )
                                                        ) {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    className="inline-flex items-center gap-1 rounded-md bg-red-100 px-3 py-1 text-sm font-medium text-red-800 hover:bg-red-200"
                                                >
                                                    <Trash className="h-4 w-4" />
                                                    Delete
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="rounded-lg bg-black p-6 text-center">
                        <p className="mb-4 text-gray-500">
                            No categories found.
                        </p>
                        <Link
                            href="/categories/create"
                            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-stone-900 hover:bg-stone-100"
                        >
                            <Plus className="h-4 w-4" />
                            Add Category
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

CategoriesIndex.layout = {
    breadcrumbs: [{ title: 'Categories', href: '/categories' }],
};
