import { Link, InertiaLinkProps } from '@inertiajs/react';
import { cn } from '@/lib/utils';

const variants = {
    yellow: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    red: 'bg-red-100 text-red-800 hover:bg-red-200',
    green: 'bg-green-100 text-green-800 hover:bg-green-200',
    blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
} as const;

interface ActionLinkProps extends Omit<InertiaLinkProps, 'className'> {
    variant: keyof typeof variants;
    confirmMessage?: string;
}

function ActionLink({
    variant,
    confirmMessage,
    onClick,
    ...props
}: ActionLinkProps) {
    return (
        <Link
            {...props}
            className={cn(
                `inline-flex items-center gap-1 rounded-md px-3 py-1 text-sm font-medium`,
                variants[variant],
            )}
            onClick={(e) => {
                if (confirmMessage && !confirm(confirmMessage)) {
                    e.preventDefault();
                    return;
                }
                onClick?.(e);
            }}
        />
    );
}

export default ActionLink;
