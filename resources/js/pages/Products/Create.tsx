import InputField from '@/components/Forms/InputField';
import SelectField from '@/components/Forms/SelectField';
import TextareaField from '@/components/Forms/TextareaField';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';

interface Props {
    categories: { id: number; name: string }[];
}

export default function ProductsCreate({ categories }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: '',
        category_id: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/products', {
            onSuccess: () => {
                toast.success('Product created successfully');
            },
            onError: () => {
                toast.error('Something went wrong');
            },
        });
    }

    return (
        <>
            <Head title="Create Product" />
            <div className="mx-auto w-full max-w-2xl p-6">
                <h1 className="mb-6 text-3xl font-bold">Create Product</h1>
                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg bg-white p-6 text-stone-900 shadow"
                >
                    <InputField
                        label="Product Name"
                        type="text"
                        placeholder="Enter product name"
                        value={data.name}
                        onChange={(e) => setData('name', e.currentTarget.value)}
                        error={errors.name}
                    />

                    <TextareaField
                        label="Product Description"
                        placeholder="Enter product description"
                        rows={4}
                        value={data.description}
                        onChange={(e) =>
                            setData('description', e.currentTarget.value)
                        }
                        error={errors.description}
                    />

                    <InputField
                        label="Product Price"
                        type="number"
                        step="0.01"
                        placeholder="Enter product price"
                        value={data.price}
                        onChange={(e) =>
                            setData('price', e.currentTarget.value)
                        }
                        error={errors.price}
                    />

                    <SelectField
                        label="Category"
                        value={data.category_id}
                        options={categories}
                        onChange={(e) =>
                            setData('category_id', e.currentTarget.value)
                        }
                        error={errors.category_id}
                    />

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {processing ? 'Creating...' : 'Create Product'}
                        </button>
                        <a
                            href="/products"
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
