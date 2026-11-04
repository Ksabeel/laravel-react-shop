import { useState } from "react";

export default function Hero() {
  const [active, setActive] = useState<number>(0);
  return (
    <section className="`bg-gradient-to-r from-[#DBEAFE] to-[#EFF6FF]`">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-[#0F172A] md:text-5xl">
            Upgrade Your Everyday
          </h1>
          <p className="mt-4 max-w-md text-[#475569]">Top brands. Great prices. Better you.</p>
          <a
            href="/shop"
            className="mt-7 inline-block rounded-lg bg-[#2563EB] px-7 py-3 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
          >
            Shop Now
          </a>
        </div>
        <div className="relative flex justify-center">
          <div className="flex h-64 w-full max-w-sm items-center justify-center rounded-xl bg-white/70 text-sm text-[#94A3B8] md:h-72">
            Featured product image
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 pb-6">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 w-2 rounded-full ${active === i ? "bg-[#2563EB]" : "bg-[#BFDBFE]"}`}
          />
        ))}
      </div>
    </section>
  );
}