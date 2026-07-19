import { Link } from '@inertiajs/react';

interface Props {
    description: string | null;
    href?: string;
    children?: React.ReactNode;
}
export default function EmptyState({ description, href, children }: Props) {
    return (
        <div className="rounded-lg bg-black p-6 text-center">
            <p className="mb-4 text-gray-500">{description}</p>
            <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-stone-900 hover:bg-stone-100"
            >
                {children}
            </Link>
        </div>
    );
}
