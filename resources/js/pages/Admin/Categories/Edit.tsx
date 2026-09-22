import InputField from '@/components/Forms/InputField';
import TextareaField from '@/components/Forms/TextareaField';
import { Category } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';

interface CategoryEditProps {
    category: Pick<Category, 'id' | 'name' | 'description'>;
}

export default function CategoryEdit({ category }: CategoryEditProps) {
    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
        description: category.description || '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(`/categories/${category.id}`, {
             onSuccess: () => {
                toast.success('Category updated successfully');
            },
            onError: () => {
                toast.error('Something went wrong');
            },
        });
    }

    return (
        <>
            <Head title={`Edit ${category.name}`} />
            <div className="mx-auto w-full max-w-2xl p-6">
                <h1 className="mb-6 text-3xl font-bold">
                    Edit {category.name}
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg bg-white p-6 text-black shadow"
                >
                    <InputField
                        label="Category Name"
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
