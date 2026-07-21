import { SelectHTMLAttributes } from 'react';

interface selectOptions {
    id: number;
    name: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: selectOptions[];
}

export default function SelectField({
    label,
    error,
    options,
    ...props
}: Props) {
    return (
        <div className="mb-4">
            <label className="mb-2 block text-sm font-medium">{label} *</label>
            <select
                {...props}
                className={`w-full rounded-md border px-3 py-2 ${
                    error ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
            >
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
