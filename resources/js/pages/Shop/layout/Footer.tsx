import { ShoppingCart } from "lucide-react";


interface FooterColumn {
    title: string;
    links: string[];
}
export default function Footer() {
    const columns: FooterColumn[] = [
        {
            title: 'Shop',
            links: ['All Products', 'New Arrivals', 'Best Sellers', 'Deals'],
        },
        {
            title: 'Help',
            links: [
                'Track Order',
                'Returns & Refunds',
                'Shipping Info',
                'FAQs',
            ],
        },
        {
            title: 'About',
            links: [
                'Our Story',
                'Careers',
                'Terms & Conditions',
                'Privacy Policy',
            ],
        },
    ];
    return (
        <footer className="bg-[#0F172A] text-[#CBD5E1]">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
                <div>
                    <div className="flex items-center gap-2">
                        <ShoppingCart
                            className="h-6 w-6 text-white"
                            strokeWidth={2.2}
                        />
                        <span className="text-lg font-bold text-white">
                            ShopKart
                        </span>
                    </div>
                    <p className="mt-2 text-sm">Shop Smarter, Live Better.</p>
                    <div className="mt-4 flex gap-3">
                        {['FB', 'IG', 'YT', 'IN'].map((s) => (
                            <span
                                key={s}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px]"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
                {columns.map((col) => (
                    <div key={col.title}>
                        <p className="text-sm font-semibold text-white">
                            {col.title}
                        </p>
                        <ul className="mt-3 space-y-2 text-sm">
                            {col.links.map((l) => (
                                <li key={l}>
                                    <a href="#" className="hover:text-white">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="border-t border-white/10 px-6 py-5 text-center text-xs">
                © {new Date().getFullYear()} ShopKart. All rights reserved.
            </div>
        </footer>
    );
}