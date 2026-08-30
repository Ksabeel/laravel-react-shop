import InputField from '@/components/Forms/InputField';
import SelectField from '@/components/Forms/SelectField';
import { Product, Color } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';

interface VariantProps {
    product: Pick<Product, 'id' | 'name'>;
    sizes: string[];
    colors: Color[];
}

export default function VariantCreate({
    product,
    sizes,
    colors,
}: VariantProps) {
    const { data, setData, post, processing, errors } = useForm({
        size: '',
        color_id: '',
        stock_quantity: '',
        additional_price: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(`/products/${product.id}/variants`, {
            onSuccess: () => {
                toast.success('Variant created successfully');
            },
            onError: () => {
                toast.error('Something went wrong');
            },
        });
    }

    return (
        <>
            <Head title="Create Variant" />
            <div className="mx-auto w-full max-w-2xl p-6">
                <h1 className="mb-6 text-3xl font-bold">
                    Add {product.name} Variant
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg bg-white p-6 text-stone-900 shadow"
                >
                    <InputField
                        label="Quantity in Stock"
                        type="number"
                        placeholder="Enter quantity in stock"
                        value={data.stock_quantity}
                        onChange={(e) =>
                            setData('stock_quantity', e.currentTarget.value)
                        }
                        error={errors.stock_quantity}
                    />

                    <InputField
                        label="Additional Price"
                        type="number"
                        placeholder="Enter additional price"
                        value={data.additional_price}
                        onChange={(e) =>
                            setData('additional_price', e.currentTarget.value)
                        }
                        error={errors.additional_price}
                    />

                    <SelectField
                        label="Select Color"
                        value={data.color_id}
                        onChange={(e) =>
                            setData('color_id', e.currentTarget.value)
                        }
                        options={colors}
                        error={errors.color_id}
                    />

                    <div className="mb-4">
                        <label
                            htmlFor="Size"
                            className="mb-2 block text-sm font-medium"
                        >
                            Size
                        </label>
                        <select
                            name="size"
                            id="Size"
                            className="w-full rounded-md border px-3 py-2"
                            value={data.size}
                            onChange={(e) =>
                                setData('size', e.currentTarget.value)
                            }
                        >
                            <option value="">Select Size</option>
                            {sizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {processing ? 'Creating...' : 'Create Variant'}
                        </button>
                        <a
                            href={`/products/${product.id}/variants`}
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
