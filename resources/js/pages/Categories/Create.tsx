import InputField from '@/components/Forms/InputField';
import TextareaField from '@/components/Forms/TextareaField';
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
                    <InputField
                        label="Category Name *"
                        type="text"
                        placeholder="Enter category name"
                        value={data.name}
                        onChange={(e) => setData('name', e.currentTarget.value)}
                        error={errors.name}
                    />

                    <TextareaField
                        label="Category Description"
                        placeholder="Enter category description"
                        rows={4}
                        value={data.description}
                        onChange={(e) =>
                            setData('description', e.currentTarget.value)
                        }
                        error={errors.description}
                    />

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
