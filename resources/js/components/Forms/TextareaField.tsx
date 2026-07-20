import { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export default function TextareaField({ label, error, ...props }: Props) {
    return (
        <div className="mb-4">
            <label className="mb-2 block text-sm font-medium">{label}</label>
            <textarea
                {...props}
                className={`w-full rounded-md border px-3 py-2 ${
                    error ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}
