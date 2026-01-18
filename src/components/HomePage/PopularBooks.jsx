import Link from 'next/link';
import { FaStar } from "react-icons/fa";

// 1. ডাটা ফেচ করার ফাংশন
async function getBooks() {
  try {
    // আপনার ব্যাকএন্ড সার্ভার (Port 5000) থেকে ডাটা আনা হচ্ছে
    const res = await fetch("http://localhost:5000/items", {
      cache: "no-store", // ডাটা যেন সবসময় ফ্রেশ থাকে
    });

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return []; // এরর হলে খালি অ্যারে রিটার্ন করবে
  }
}

export default async function PopularBooks() {
  // 2. ডাটা কল করা হচ্ছে
  const books = await getBooks();

  // 3. যদি ডাটা না থাকে বা সার্ভার অফ থাকে
  if (!books || books.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-error">No books found. Please make sure your backend server is running on port 5000.</p>
      </div>
    );
  }

  // আমরা চাই হোমপেজে মাত্র ৪টি বা ৮টি বই দেখাতে, তাই slice করছি
  const displayBooks = books.slice(0, 8); 

  return (
    <div className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Trending <span className="text-secondary">Now</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 4. ডাটাবেস থেকে আসা ডাটার ওপর লুপ চালানো হচ্ছে */}
          {displayBooks.map((book) => (
            <div key={book._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 group">
              
              {/* ইমেজে ক্লিক করলে ডিটেইলস পেজে যাবে */}
              <figure className="px-6 pt-6 bg-base-200/50 relative overflow-hidden">
                <Link href={`/items/${book._id}`} className="w-full flex justify-center">
                   <img 
                    src={book.image} 
                    alt={book.title} 
                    className="rounded-lg w-full h-40 object-cover shadow-md group-hover:scale-105 transition-transform duration-300" 
                  />
                </Link>
              </figure>

              <div className="card-body items-center text-center p-6">
                
                  <h2 className="card-title text-lg font-bold text-base-content">
                    {book.title}
                  </h2>

                
                {/* রেটিং */}
                <div className="flex text-secondary gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < (book.rating || 5) ? "text-yellow-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
                
                {/* প্রাইস */}
                <p className="text-xl font-bold text-primary">৳{book.price}</p>
                
                {/* অ্যাকশন বাটন */}
                <div className="card-actions mt-3 w-full">
                  <Link href={`/items/${book._id}`} className="w-full">
                    <button className="btn btn-primary btn-sm w-full text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}