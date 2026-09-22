import InputField from '@/components/Forms/InputField';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';

export default function ColorsCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        hex: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/colors', {
            onSuccess: () => {
                toast.success('Color created successfully');
            },
            onError: () => {
                toast.error('Something went wrong');
            },
        });
    }

    return (
        <>
            <Head title="Create Color" />
            <div className="mx-auto w-full max-w-2xl p-6">
                <h1 className="mb-6 text-3xl font-bold">Create Color</h1>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg bg-white p-6 text-stone-900 shadow"
                >
                    <InputField
                        label="Color Name"
                        type="text"
                        placeholder="Enter color name"
                        value={data.name}
                        onChange={(e) => setData('name', e.currentTarget.value)}
                        error={errors.name}
                    />

                    <InputField
                        label="Color Hex"
                        type="text"
                        placeholder="Enter color hex"
                        value={data.hex}
                        onChange={(e) => setData('hex', e.currentTarget.value)}
                        error={errors.hex}
                    />


                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {processing ? 'Creating...' : 'Create Color'}
                        </button>
                        <a
                            href="/colors"
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
