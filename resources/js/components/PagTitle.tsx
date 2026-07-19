import { Link } from '@inertiajs/react';

interface Props {
    heading?: string;
    href?: string;
    children?: React.ReactNode;
}
export default function PageTitle({ heading, href, children }: Props) {
    return (
        <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">{heading}</h1>

            <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-stone-900 hover:bg-stone-100"
            >
                {children}
            </Link>
        </div>
    );
}
