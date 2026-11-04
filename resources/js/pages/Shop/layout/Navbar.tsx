import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Category } from '../types';

interface NavbarProps {
    categories: Category[];
}

export default function Navbar({ categories }: NavbarProps) {
    const [openAll, setOpenAll] = useState<boolean>(false);

    return (
        <div className="relative border-y border-[#E2E8F0] bg-white">
            <div className="mx-auto flex max-w-7xl items-center gap-7 px-6 text-sm">
                <button
                    onClick={() => setOpenAll((v) => !v)}
                    className="flex items-center gap-1.5 py-3 font-medium text-[#0F172A]"
                >
                    All Categories
                    <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${openAll ? 'rotate-180' : ''}`}
                    />
                </button>

                <div className="hidden items-center gap-6 overflow-x-auto py-3 text-[#475569] md:flex">
                    {categories.map((category) => (
                        <a
                            key={category.id}
                            href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="whitespace-nowrap hover:text-[#2563EB]"
                        >
                            {category.name}
                        </a>
                    ))}
                </div>
            </div>

            {openAll && (
                <div className="absolute top-full left-0 z-20 w-64 border border-[#E2E8F0] bg-white p-2 shadow-lg">
                    {categories.map((category) => (
                        <a
                            key={category.id}
                            href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block rounded px-3 py-2 text-sm text-[#0F172A] hover:bg-[#F1F5F9]"
                        >
                            {category.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
