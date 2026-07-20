import InputField from '@/components/Forms/InputField';
import TextareaField from '@/components/Forms/TextareaField';
import { Head, useForm, usePage } from '@inertiajs/react';

interface Category {
    id: number;
    name: string;
    description: string | null;
}

export default function EditCategory() {
    const { category } = usePage().props;
    const cat = category as Category;

    const { data, setData, put, processing, errors } = useForm({
        name: cat.name,
        description: cat.description || '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(`/categories/${cat.id}`);
    }

    return (
        <>
            <Head title={`Edit ${cat.name}`} />
            <div className="mx-auto max-w-2xl p-6">
                <h1 className="mb-6 text-3xl font-bold">Edit Category</h1>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg bg-white p-6 text-black shadow"
                >
                    <InputField
                        label="Category Name *"
                        value={data.name}
                        onChange={(e) => setData('name', e.currentTarget.value)}
                        error={errors.name}
                    />

                    <TextareaField
                        label="Description"
                        value={data.description}
                        rows={4}
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
                            {processing ? 'Updating...' : 'Update Category'}
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
