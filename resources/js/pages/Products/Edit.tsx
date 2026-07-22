import InputField from '@/components/Forms/InputField';
import TextareaField from '@/components/Forms/TextareaField';
import SelectField from '@/components/Forms/SelectField';
import { Category, Product } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Props {
    product: Product;
    categories: Category[];
}

export default function EditProduct({ product, categories }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        description: product.description || '',
        price: product.price,
        category_id: product.category_id,
    });

    const imageForm = useForm({
        images: [] as File[],
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(`/products/${product.id}`);
    }

    function uploadImage() {
        imageForm.post(`/products/${product.id}/image`, {
            onSuccess: () => {
                toast.success('Image uploaded successfully');
            },
            onError: () => {
                toast.error('Something went wrong');
            },
        });
    }

    return (
        <>
            <Head title={`Edit ${product.name}`} />
            <div className="mx-auto w-full max-w-3xl p-6">
                <div className="mb-3 flex items-center justify-between">
                    <h1 className="mb-6 text-3xl font-bold">
                        Edit {product.name}
                    </h1>
                    <div className="flex items-center gap-2">
                        <InputField
                            type="file"
                            multiple
                            onChange={(e) =>
                                imageForm.setData(
                                    'images',
                                    Array.from(e.target.files ?? []),
                                )
                            }
                            error={imageForm.errors.images}
                        />
                        <Button onClick={uploadImage}>Upload Image</Button>
                    </div>
                </div>

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
                            setData('price', Number(e.currentTarget.value))
                        }
                        error={errors.price}
                    />

                    <SelectField
                        label="Category"
                        options={categories}
                        value={data.category_id}
                        onChange={(e) =>
                            setData(
                                'category_id',
                                Number(e.currentTarget.value),
                            )
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
