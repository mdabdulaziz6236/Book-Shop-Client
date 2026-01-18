import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero min-h-[85vh] bg-base-200 relative overflow-hidden">
      {/* Background Decorative Circle */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="hero-content flex-col lg:flex-row-reverse gap-12 px-6">
        {/* Hero Image */}
        <img
          src="https://placehold.co/500x600/059669/FFF?text=Islamic+Books"
          className="max-w-sm lg:max-w-md rounded-2xl shadow-2xl border-4 border-base-100 rotate-3 hover:rotate-0 transition-transform duration-500"
          alt="Book Shop Hero"
        />
        
        {/* Text Content */}
        <div className="text-center lg:text-left z-10">
          <div className="badge badge-secondary text-white mb-4 p-3">Bismillahir Rahmanir Rahim</div>
          <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
            Enlighten Your <br />
            <span className="text-secondary">Heart & Soul</span>
          </h1>
          <p className="py-6 text-lg opacity-80 max-w-lg mx-auto lg:mx-0">
            Discover a curated collection of authentic Quran, Hadith, and Islamic history books to guide your path to Jannah.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link href="/items" className="btn btn-primary text-white font-bold px-8 shadow-lg hover:shadow-green-500/30">
              Shop Now
            </Link>
            <Link href="/about" className="btn btn-outline btn-primary font-bold px-8">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}