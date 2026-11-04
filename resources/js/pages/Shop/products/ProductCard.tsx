import { Heart } from 'lucide-react';
import { Product } from '../types';
import Rating from '../components/Rating';

const CURRENCY = '$'; // change to "₹", "Rs", etc.

interface ProductCardProps {
    product: Product;
}

// ---- Product card ----
export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
            <div className="relative flex aspect-square items-center justify-center rounded-lg bg-[#F1F5F9] text-xs text-[#94A3B8]">
                <a href="/" className="absolute inset-0 flex items-center justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt={product.name}
                        className="h-full w-full rounded-md object-cover"
                    />
                </a>
                <button
                    className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow"
                    aria-label="Add to wishlist"
                >
                    <Heart className="h-3.5 w-3.5 text-[#0F172A]" />
                </button>
            </div>
            <p className="mt-3 text-sm font-medium text-[#0F172A]">
                {product.name}
            </p>
            <div className="mt-1 flex items-center gap-2">
                <span className="text-base font-bold text-[#0F172A]">
                    {CURRENCY}
                    {product.price.toFixed(2)}
                </span>
                {product.price !== null && (
                    <span className="text-xs text-[#94A3B8] line-through">
                        {CURRENCY}
                        {product.price.toFixed(2)}
                    </span>
                )}
            </div>
            <div className="mt-1 flex items-center gap-1.5">
                <Rating rating={2} />
                <span className="text-xs text-[#94A3B8]">({2}) Reviews</span>
            </div>
            <button className="mt-3 w-full rounded-lg bg-[#2563EB] py-2 text-sm font-semibold text-white hover:bg-[#1D4ED8]">
                Add to Cart
            </button>
        </div>
    );
}
