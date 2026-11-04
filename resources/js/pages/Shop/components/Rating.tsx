import { Star } from 'lucide-react';

export default function Rating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5 text-[#F5A623]">
            {[1, 2, 3, 4, 5].map((n) => (
                <Star
                    key={n}
                    className="h-3.5 w-3.5"
                    fill={n <= Math.round(rating) ? 'currentColor' : '#E2E8F0'}
                    stroke="none"
                />
            ))}
        </div>
    );
}