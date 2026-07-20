import { Link } from '@inertiajs/react';

interface Props {
    href: string;
    children?: React.ReactNode;
}

export default function DeleteButton({ href, children }: Props) {
    return (
        <Link
            href={href}
            method="delete"
            as="button"
            className="inline-flex items-center gap-1 rounded-md bg-red-100 px-3 py-1 text-sm font-medium text-red-800 hover:bg-red-200"
            onClick={(e) => {
                if (!confirm('Are you sure?')) {
                    e.preventDefault();
                }
            }}
        >
            {children}
        </Link>
    );
}
