import { Category } from '../types';
import {
    ListTree,
    LucideProps,
    MoreHorizontal,
    Sparkles,
    ToyBrick,
    Dumbbell,
    Laptop,
    Shirt,
    Sofa,
} from 'lucide-react';

interface CategoryRowProps {
    categories: Category[];
}

export default function CategoryRow({ categories }: CategoryRowProps) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid grid-cols-4 gap-6 sm:grid-cols-7">
                {categories.map((category) => (
                    <a
                        key={category.id}
                        href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex flex-col items-center gap-2 text-center"
                    >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F1F5F9] text-[#2563EB]">
                            <ListTree className="h-7 w-7" />
                        </span>
                        <span className="text-xs font-medium text-[#0F172A]">
                            {category.name}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
