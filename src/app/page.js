import Categories from "@/components/HomePage/Categories";
import ExclusiveOffer from "@/components/HomePage/ExclusiveOffer";
import Hero from "@/components/HomePage/Hero";
import Newsletter from "@/components/HomePage/Newsletter";
import PopularBooks from "@/components/HomePage/PopularBooks";
import Stats from "@/components/HomePage/Stats";
import Testimonials from "@/components/HomePage/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Banner: মেইন আকর্ষণ */}
      <Hero />
      
      {/* 2. Stats: বিশ্বাস অর্জনের জন্য সংখ্যা */}
      <Stats />
      
      {/* 3. Categories: ব্রাউজ করার অপশন */}
      <Categories />
      
      {/* 4. Popular Books: বিক্রির জন্য প্রোডাক্ট */}
      <PopularBooks />
      
      {/* 5. Exclusive Offer: স্পেশাল ডিসকাউন্ট */}
      <ExclusiveOffer />
      
      {/* 6. Testimonials: কাস্টমার রিভিউ */}
      <Testimonials />
      
      {/* 7. Newsletter: ইমেইল কালেকশন */}
      <Newsletter />
    </div>
  );
}