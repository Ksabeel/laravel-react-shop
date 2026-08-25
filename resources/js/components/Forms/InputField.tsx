import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import FormField from './FormField';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function InputField({
    label,
    error,
    ...props
}: InputFieldProps) {
    return (
        <FormField label={label} error={error}>
            {({ inputId, errorId }) => (
                <input
                    {...props}
                    id={inputId}
                    aria-invalid={!!error}
                    aria-describedby={errorId}
                    className={cn('w-full rounded-md border px-3 py-2', {
                        'border-red-500 bg-red-50': error,
                        'border-gray-300': !error,
                    })}
                />
            )}
        </FormField>
    );
}
