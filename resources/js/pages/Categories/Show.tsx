import PageTitle from '@/components/PagTitle';
import DeleteButton from '@/components/ui/ActionButtons/DeleteButton';
import EditButton from '@/components/ui/ActionButtons/EditButton';
import { Category, formatDate } from '@/types';
import { Head } from '@inertiajs/react';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';

interface Props {
    category: Category;
}

export default function CategoriesShow({ category }: Props) {
    // console.log(category);
    return (
        <>
            <Head title={category.name} />
            <div className="mx-auto max-w-2xl p-6">
                <PageTitle heading={category.name} href="/categories">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Categories
                </PageTitle>

                <div className="rounded-lg bg-black p-6 shadow">
                    <div className="mb-6 flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">
                                {category.name}
                            </h1>
                            <p className="mt-2 text-gray-600">
                                Created: {formatDate(category.created_at)}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <EditButton
                                href={`/categories/${category.id}/edit`}
                            >
                                <Edit className="h-4 w-4" />
                                Edit
                            </EditButton>
                            <DeleteButton href={`/categories/${category.id}`}>
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
                                {category.description ||
                                    'No description provided'}
                            </p>
                        </div>
                        <div className="text-sm text-gray-500">
                            Last updated: {formatDate(category.updated_at)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
