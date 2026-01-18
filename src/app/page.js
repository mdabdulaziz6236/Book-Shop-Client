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
      <Hero />

      <Stats />

      <Categories />

      <PopularBooks />

      <ExclusiveOffer />

      <Testimonials />

      <Newsletter />
    </div>
  );
}
