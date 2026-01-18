import Link from 'next/link';
import { FaTags } from "react-icons/fa";

export default function ExclusiveOffer() {
  return (
    <div className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="hero bg-primary rounded-3xl text-primary-content overflow-hidden shadow-2xl">
          <div className="hero-content flex-col lg:flex-row p-0">
            <img 
              src="https://placehold.co/600x400/064e3b/FFF?text=Ramadan+Special" 
              className="w-full lg:w-1/2 object-cover h-80" 
            />
            <div className="p-10 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 text-secondary font-bold">
                <FaTags /> LIMITED TIME OFFER
              </div>
              <h2 className="text-4xl font-bold mb-4">Complete Tafsir Set</h2>
              <p className="mb-6 opacity-90 text-lg">
                Get the full set of Tafsir Ibn Kathir with a massive <span className="text-secondary font-bold text-2xl">40% Discount</span>. 
                Perfect for your home library.
              </p>
              <Link href="/offer" className="btn btn-secondary text-white font-bold px-8 border-none hover:bg-yellow-600">
                Grab The Deal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}