import InputField from '@/components/Forms/InputField';
import TextareaField from '@/components/Forms/TextareaField';
import SelectField from '@/components/Forms/SelectField';
import { Category } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';

interface Props {
    categories: Category[];
}

interface Product {
    id: number;
    name: string;
    description: string | null;
    price: number;
    category_id: number;
}

export default function EditProduct({ categories }: Props) {
    const { product } = usePage().props;
    const prod = product as Product;

    const { data, setData, put, processing, errors } = useForm({
        name: prod.name,
        description: prod.description || '',
        price: prod.price.toString(),
        category_id: prod.category_id.toString(),
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(`/products/${prod.id}`);
    }

    return (
        <>
            <Head title={`Edit ${prod.name}`} />
            <div className="mx-auto max-w-2xl p-6">
                <h1 className="mb-6 text-3xl font-bold">Edit {prod.name}</h1>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg bg-white p-6 text-black shadow"
                >
                    <InputField
                        label="Product Name"
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

                    <InputField
                        label="Price"
                        type="number"
                        value={data.price}
                        onChange={(e) =>
                            setData('price', e.currentTarget.value)
                        }
                        error={errors.price}
                    />

                    <SelectField
                        label="Category"
                        options={categories}
                        value={data.category_id}
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
