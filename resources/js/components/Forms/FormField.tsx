import { ReactNode, useId } from 'react';

interface FormFieldProps {
    label?: string;
    error?: string;
    children: (ids: { inputId: string; errorId?: string }) => ReactNode;
}

function FormField({ label, error, children }: FormFieldProps) {
    const inputId = useId();
    const errorId = error ? `${inputId}-error` : undefined;

    return (
        <div className="mb-4">
            {label && (
                <label
                    htmlFor={inputId}
                    className="mb-2 block text-sm font-medium"
                >
                    {label}
                </label>
            )}
            {children({ inputId, errorId })}
            {error && (
                <p
                    id={errorId}
                    role="alert"
                    className="mt-1 text-sm text-red-600"
                >
                    {error}
                </p>
            )}
        </div>
    );
}

export default FormField;
