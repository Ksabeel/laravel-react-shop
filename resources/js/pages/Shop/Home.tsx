import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './Hero';
import NewsLetter from './NewsLetter';
import PromoBanner from './PromoBanner';
import CategoryRow from './components/CategoryRow';
import AllProducts from './products/products';
import { Product, Category } from './types';

interface HomeProps {
    products: Product[];
    categories: Category[];
}

// ---- Page ----
export default function Home({ products, categories }: HomeProps) {
    // console.log('Home products:', products);
    // console.log('Is array:', Array.isArray(products));
    return (
        <div className="min-h-screen bg-white font-sans text-[#0F172A]">
            <Header />
            <Navbar categories={categories} />
            <Hero />
            <CategoryRow categories={categories} />
            <AllProducts products={products} />
            <PromoBanner />
            <NewsLetter />
            <Footer />
        </div>
    );
}
