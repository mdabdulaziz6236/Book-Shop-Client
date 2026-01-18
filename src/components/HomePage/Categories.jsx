import Link from 'next/link';

export default function Categories() {
  const categories = [
    { name: "Al Quran", img: "https://placehold.co/400x300/047857/FFF?text=Al+Quran" },
    { name: "Hadith Books", img: "https://placehold.co/400x300/d97706/FFF?text=Hadith" },
    { name: "History", img: "https://placehold.co/400x300/047857/FFF?text=History" },
    { name: "Kids Corner", img: "https://placehold.co/400x300/d97706/FFF?text=Kids" },
  ];

  return (
    <div className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Explore Categories</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} href={`/items?cat=${cat.name}`} className="group relative rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold group-hover:text-secondary transition-colors">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}