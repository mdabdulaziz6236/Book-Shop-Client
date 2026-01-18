import Link from 'next/link';
import { FaStar } from "react-icons/fa";


async function getBooks() {
  try {
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

export default async function PopularBooks() {

  const books = await getBooks();


  if (!books || books.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-error">No books found. Please make sure your backend server is running on port 5000.</p>
      </div>
    );
  }

 
  const displayBooks = books.slice(0, 8); 

  return (
    <div className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Trending <span className="text-secondary">Now</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
          {displayBooks.map((book) => (
            <div key={book._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 group">
              
          
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

                
         
                <div className="flex text-secondary gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < (book.rating || 5) ? "text-yellow-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
                

                <p className="text-xl font-bold text-primary">৳{book.price}</p>
                
         
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