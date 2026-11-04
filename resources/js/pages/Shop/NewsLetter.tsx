import { useState, FormEvent } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState<string>('');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO: wire to your Laravel newsletter subscribe endpoint
    }

    return (
        <section className="mx-auto max-w-7xl px-6 py-8">
            <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-[#EFF6FF] px-8 py-8 md:flex-row">
                <div>
                    <p className="text-lg font-bold text-[#0F172A]">
                        Stay Updated
                    </p>
                    <p className="text-sm text-[#475569]">
                        Get the latest offers, new arrivals and exclusive deals.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex w-full max-w-sm gap-2"
                >
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm focus:border-[#2563EB] focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="shrink-0 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}