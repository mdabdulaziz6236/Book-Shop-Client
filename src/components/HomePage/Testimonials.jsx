import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
    { name: "Ahmed Raza", text: "Alhamdulillah, very fast delivery and authentic books.", location: "Dhaka" },
    { name: "Fatima Begum", text: "The packaging was beautiful. I am very happy with my purchase.", location: "Sylhet" },
    { name: "Omar Faruk", text: "Best Islamic book shop online. Highly recommended!", location: "Chittagong" },
  ];

  return (
    <div className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Reader's <span className="text-secondary">Feedback</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="card bg-base-100 p-8 shadow-md border-b-4 border-secondary relative">
              <div className="absolute top-[-15px] left-8 bg-secondary text-white p-3 rounded-full">
                <FaQuoteLeft />
              </div>
              <p className="italic mt-4 mb-6 text-base-content/70">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="avatar placeholder">
                  <div className="bg-primary/10 text-primary rounded-full w-12">
                    <span className="text-lg font-bold">{review.name[0]}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}