import { useState } from "react";
import { Heart, Search, ShoppingBag, ShoppingCart, User } from "lucide-react";

export default function Header() {
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