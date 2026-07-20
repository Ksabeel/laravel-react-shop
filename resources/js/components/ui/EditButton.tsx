import { Link } from '@inertiajs/react';

interface Props {
    href?: string;
    children?: React.ReactNode;
}

export default function EditButton({ href, children }: Props) {
    return (
        <Link
            href={href}
            className="inline-flex items-center gap-1 rounded-md bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 hover:bg-yellow-200"
        >
            {children}
        </Link>
    );
}
