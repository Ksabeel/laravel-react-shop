import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';

export default function CategoriesCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/categories', {
            onSuccess: () => {
                toast.success('Category created successfully');
            },
            onError: () => {
                toast.error('Something went wrong');
            },
        });
    }

    return (
        <>
            <Head title="Create Category" />
            <div className="mx-auto max-w-2xl p-6">
                <h1 className="mb-6 text-3xl font-bold">Create Category</h1>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg bg-white p-6 text-stone-900 shadow"
                >
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                            Category Name *
                        </label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData('name', e.currentTarget.value)
                            }
                            placeholder="Enter category name"
                            className={`w-full rounded-md border px-3 py-2 ${
                                errors.name
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-gray-300'
                            }`}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-medium">
                            Category Description
                        </label>
                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.currentTarget.value)
                            }
                            placeholder="Enter category description"
                            rows={4}
                            className={`w-full rounded-md border px-3 py-2 ${
                                errors.description
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-gray-300'
                            }`}
                        />
                        {errors.description && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.description}
                            </p>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {processing ? 'Creating...' : 'Create Category'}
                        </button>
                        <a
                            href="/categories"
                            className="rounded-md border border-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        </>
    );
}
