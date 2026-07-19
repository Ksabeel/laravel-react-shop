import { Link } from '@inertiajs/react';

export default function Pagination({ pagination }: { pagination: any }) {
    return (
        <div className="mt-4 flex justify-center gap-2">
            {pagination.links.map((link: any, i: number) =>
                link.url ? (
                    <Link
                        key={i}
                        href={link.url}
                        className={`rounded-md border px-3 py-1 ${link.active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                        dangerouslySetInnerHTML={{
                            __html: link.label,
                        }}
                    />
                ) : (
                    <span
                        key={i}
                        className="rounded px-3 py-1.5 text-sm opacity-40"
                        dangerouslySetInnerHTML={{
                            __html: link.label,
                        }}
                    />
                ),
            )}
        </div>
    );
}
