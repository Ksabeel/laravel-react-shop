import { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import FormField from './FormField';

interface selectOptions {
    id: number;
    name: string;
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: selectOptions[];
}

export default function SelectField({
    label,
    error,
    options,
    ...props
}: SelectFieldProps) {
    return (
        <FormField label={label} error={error}>
            {({ inputId, errorId }) => (
                <select
                    {...props}
                    id={inputId}
                    aria-invalid={!!error}
                    aria-describedby={errorId}
                    className={cn('w-full rounded-md border px-3 py-2', {
                        'border-red-500 bg-red-50': error,
                        'border-gray-300': !error,
                    })}
                >
                    <option value="">Select an option</option>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
            )}
        </FormField>
    );
}
