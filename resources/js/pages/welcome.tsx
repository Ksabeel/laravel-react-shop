import { Head, Link, usePage } from '@inertiajs/react';
import { useState, FormEvent, ComponentType } from "react";
// import { dashboard } from '@/routes/admin';
// import { login } from '@/routes';
// import { register } from '@/routes';

import {
  Search,
  Heart,
  ShoppingBag,
  ShoppingCart,
  User,
  ChevronDown,
  Star,
  Laptop,
  Shirt,
  Sofa,
  Sparkles,
  Dumbbell,
  ToyBrick,
  MoreHorizontal,
  LucideProps,
} from "lucide-react";
 
const CURRENCY = "$"; // change to "₹", "Rs", etc.
 
// ---- Types ----
interface Category {
  id: number;
  name: string;
  icon: ComponentType<LucideProps>;
}
 
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
}
 
interface FooterColumn {
  title: string;
  links: string[];
}
 
// ---- Placeholder data — replace with your API response ----
const CATEGORIES: Category[] = [
  { id: 1, name: "Electronics", icon: Laptop },
  { id: 2, name: "Fashion", icon: Shirt },
  { id: 3, name: "Home & Living", icon: Sofa },
  { id: 4, name: "Beauty", icon: Sparkles },
  { id: 5, name: "Sports", icon: Dumbbell },
  { id: 6, name: "Toys", icon: ToyBrick },
  { id: 7, name: "More", icon: MoreHorizontal },
];
 
const NAV_CATEGORIES: string[] = ["Electronics", "Fashion", "Home & Living", "Beauty", "Sports", "Toys", "Deals"];
 
const PRODUCTS: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 29.99, originalPrice: 49.99, rating: 4.5, reviews: 120 },
  { id: 2, name: "Running Shoes", price: 18.99, originalPrice: 29.99, rating: 4.6, reviews: 98 },
  { id: 3, name: "Smart Watch", price: 34.99, originalPrice: 59.99, rating: 4.4, reviews: 210 },
  { id: 4, name: "Travel Backpack", price: 12.99, originalPrice: 24.99, rating: 4.3, reviews: 86 },
];
 
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[#F5A623]">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className="h-3.5 w-3.5" fill={n <= Math.round(rating) ? "currentColor" : "#E2E8F0"} stroke="none" />
      ))}
    </div>
  );
}
 
// ---- Header ----
function Header() {
  const [query, setQuery] = useState<string>("");
  const cartCount = 3;
 
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <ShoppingCart className="h-7 w-7 text-[#2563EB]" strokeWidth={2.2} />
          <span className="text-xl font-bold text-[#0F172A]">ShopKart</span>
        </a>
 
        <div className="relative hidden flex-1 max-w-xl md:block">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            className="w-full rounded-lg border border-[#E2E8F0] bg-white py-2.5 pl-4 pr-11 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
          />
          <button
            aria-label="Search"
            className="absolute right-1 top-1/2 flex h-8 w-9 -translate-y-1/2 items-center justify-center rounded-md bg-[#2563EB] text-white"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
 
        <nav className="ml-auto flex items-center gap-6 text-[#0F172A]">
          <a href="/account" className="hidden flex-col items-center gap-1 text-xs sm:flex">
            <User className="h-5 w-5" />
            Account
          </a>
          <a href="/wishlist" className="hidden flex-col items-center gap-1 text-xs sm:flex">
            <Heart className="h-5 w-5" />
            Wishlist
          </a>
          <a href="/cart" className="relative flex flex-col items-center gap-1 text-xs">
            <span className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4.5 `min-w-[18px]` items-center justify-center rounded-full bg-[#EF4444] px-1 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </span>
            Cart
          </a>
        </nav>
      </div>
 
      {/* mobile search */}
      <div className="px-6 pb-3 md:hidden">
        <div className="relative">
          <input
            placeholder="Search for products..."
            className="w-full rounded-lg border border-[#E2E8F0] py-2 pl-4 pr-11 text-sm placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
          />
          <button className="absolute right-1 top-1/2 flex h-7 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-[#2563EB] text-white">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
 
// ---- Navbar (categories) ----
function Navbar() {
  const [openAll, setOpenAll] = useState<boolean>(false);
 
  return (
    <div className="relative border-y border-[#E2E8F0] bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-7 px-6 text-sm">
        <button onClick={() => setOpenAll((v) => !v)} className="flex items-center gap-1.5 py-3 font-medium text-[#0F172A]">
          All Categories
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openAll ? "rotate-180" : ""}`} />
        </button>
 
        <div className="hidden items-center gap-6 overflow-x-auto py-3 text-[#475569] md:flex">
          {NAV_CATEGORIES.map((c) => (
            <a key={c} href={`/category/${c.toLowerCase().replace(/\s+/g, "-")}`} className="whitespace-nowrap hover:text-[#2563EB]">
              {c}
            </a>
          ))}
        </div>
      </div>
 
      {openAll && (
        <div className="absolute left-0 top-full z-20 w-64 border border-[#E2E8F0] bg-white p-2 shadow-lg">
          {NAV_CATEGORIES.map((c) => (
            <a key={c} href={`/category/${c.toLowerCase().replace(/\s+/g, "-")}`} className="block rounded px-3 py-2 text-sm text-[#0F172A] hover:bg-[#F1F5F9]">
              {c}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
 
// ---- Hero ----
function Hero() {
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
 
// ---- Category icons row ----
function CategoryRow() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-4 gap-6 sm:grid-cols-7">
        {CATEGORIES.map((c) => {
          const Icon = c.icon;
          return (
            <a key={c.id} href={`/category/${c.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F1F5F9] text-[#2563EB]">
                <Icon className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <span className="text-xs font-medium text-[#0F172A]">{c.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
 
// ---- Product card ----
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
      <div className="relative flex aspect-square items-center justify-center rounded-lg bg-[#F1F5F9] text-xs text-[#94A3B8]">
        Product image
        <button className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow" aria-label="Add to wishlist">
          <Heart className="h-3.5 w-3.5 text-[#0F172A]" />
        </button>
      </div>
      <p className="mt-3 text-sm font-medium text-[#0F172A]">{product.name}</p>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-base font-bold text-[#0F172A]">{CURRENCY}{product.price.toFixed(2)}</span>
        {product.originalPrice !== null && (
          <span className="text-xs text-[#94A3B8] line-through">{CURRENCY}{product.originalPrice.toFixed(2)}</span>
        )}
      </div>
      <div className="mt-1 flex items-center gap-1.5">
        <Stars rating={product.rating} />
        <span className="text-xs text-[#94A3B8]">({product.reviews})</span>
      </div>
      <button className="mt-3 w-full rounded-lg bg-[#2563EB] py-2 text-sm font-semibold text-white hover:bg-[#1D4ED8]">
        Add to Cart
      </button>
    </div>
  );
}
 
function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-bold text-[#0F172A]">Featured Products</h2>
        <a href="/shop" className="text-sm font-semibold text-[#2563EB]">
          View All &rarr;
        </a>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
 
// ---- Promo banners ----
function PromoBanners() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex items-center justify-between rounded-xl bg-[#D1FAE5] px-8 py-10">
          <div>
            <h3 className="text-2xl font-extrabold text-[#065F46]">Summer Sale</h3>
            <p className="mt-1 text-lg font-semibold text-[#065F46]">Up to 50% OFF</p>
            <a href="/deals" className="mt-4 inline-block rounded-lg bg-white px-5 py-2 text-sm font-semibold text-[#065F46]">
              Shop Now
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-[#FFEDD5] px-8 py-10">
          <div>
            <h3 className="text-2xl font-extrabold text-[#9A3412]">Top Brands</h3>
            <p className="mt-1 text-lg font-semibold text-[#9A3412]">Best Deals</p>
            <a href="/brands" className="mt-4 inline-block rounded-lg bg-white px-5 py-2 text-sm font-semibold text-[#9A3412]">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
 
// ---- Newsletter ----
function Newsletter() {
  const [email, setEmail] = useState<string>("");
 
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to your Laravel newsletter subscribe endpoint
  }
 
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl bg-[#EFF6FF] px-8 py-8 md:flex-row">
        <div>
          <p className="text-lg font-bold text-[#0F172A]">Stay Updated</p>
          <p className="text-sm text-[#475569]">Get the latest offers, new arrivals and exclusive deals.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm focus:border-[#2563EB] focus:outline-none"
          />
          <button type="submit" className="shrink-0 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
 
// ---- Footer ----
function Footer() {
  const columns: FooterColumn[] = [
    { title: "Shop", links: ["All Products", "New Arrivals", "Best Sellers", "Deals"] },
    { title: "Help", links: ["Track Order", "Returns & Refunds", "Shipping Info", "FAQs"] },
    { title: "About", links: ["Our Story", "Careers", "Terms & Conditions", "Privacy Policy"] },
  ];
  return (
    <footer className="bg-[#0F172A] text-[#CBD5E1]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-white" strokeWidth={2.2} />
            <span className="text-lg font-bold text-white">ShopKart</span>
          </div>
          <p className="mt-2 text-sm">Shop Smarter, Live Better.</p>
          <div className="mt-4 flex gap-3">
            {["FB", "IG", "YT", "IN"].map((s) => (
              <span key={s} className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px]">
                {s}
              </span>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-white">{col.title}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">{l}</a>
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
 
// ---- Page ----
export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0F172A]">
      <Header />
      <Navbar />
      <Hero />
      <CategoryRow />
      <FeaturedProducts />
      <PromoBanners />
      <Newsletter />
      <Footer />
    </div>
  );
}
