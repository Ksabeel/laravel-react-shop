export default function PromoBanners() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-6">
            <div className="grid gap-5 md:grid-cols-2">
                <div className="flex items-center justify-between rounded-xl bg-[#D1FAE5] px-8 py-10">
                    <div>
                        <h3 className="text-2xl font-extrabold text-[#065F46]">
                            Summer Sale
                        </h3>
                        <p className="mt-1 text-lg font-semibold text-[#065F46]">
                            Up to 50% OFF
                        </p>
                        <a
                            href="/deals"
                            className="mt-4 inline-block rounded-lg bg-white px-5 py-2 text-sm font-semibold text-[#065F46]"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-[#FFEDD5] px-8 py-10">
                    <div>
                        <h3 className="text-2xl font-extrabold text-[#9A3412]">
                            Top Brands
                        </h3>
                        <p className="mt-1 text-lg font-semibold text-[#9A3412]">
                            Best Deals
                        </p>
                        <a
                            href="/brands"
                            className="mt-4 inline-block rounded-lg bg-white px-5 py-2 text-sm font-semibold text-[#9A3412]"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}