import { FaBook, FaUsers, FaSmile, FaGlobeAmericas } from "react-icons/fa";

export default function Stats() {
  const stats = [
    { icon: <FaBook />, count: "1,500+", label: "Books Available" },
    { icon: <FaUsers />, count: "50k+", label: "Community Members" },
    { icon: <FaSmile />, count: "20k+", label: "Happy Readers" },
    { icon: <FaGlobeAmericas />, count: "64", label: "Districts Covered" },
  ];

  return (
    <div className="bg-primary text-primary-content py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 group">
            <div className="text-4xl text-secondary group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-3xl font-bold">{item.count}</h3>
            <p className="opacity-80 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}