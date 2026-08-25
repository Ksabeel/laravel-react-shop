import { TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import FormField from './FormField';

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export default function TextareaField({
    label,
    error,
    ...props
}: TextareaFieldProps) {
    return (
        <FormField label={label} error={error}>
            {({ inputId, errorId }) => (
                <textarea
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
