import ProductCard  from './ProductCard';
import { Product } from '../types';

interface AllProductsProps {
    products: Product[];
}

export default function AllProducts({ products }: AllProductsProps) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-10">
            <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-bold text-[#0F172A]">
                    All Products
                </h2>
                <a
                    href="/shop"
                    className="text-sm font-semibold text-[#2563EB]"
                >
                    View All &rarr;
                </a>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
