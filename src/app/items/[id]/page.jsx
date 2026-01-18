import Link from 'next/link';
import { FaStar, FaArrowLeft, FaTruck, FaShieldAlt, FaUndo } from "react-icons/fa";
import AddToCartBtn from "@/components/AddToCartBtn"; 
async function getBook(id) {
  try {
    const res = await fetch(`http://localhost:5000/items/${id}`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      return null; 
    }
    
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function BookDetails({ params }) {
  const { id } = await params; 
  const book = await getBook(id);
  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-error">Book not found!</h2>
        <Link href="/items" className="btn btn-primary btn-outline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/*  Back Button */}
        <div className="mb-6">
          <Link href="/items" className="btn btn-ghost hover:bg-base-300 gap-2 text-primary font-medium">
             <FaArrowLeft /> Back to All Books
          </Link>
        </div>

        {/*  Main Product Card */}
        <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden border border-base-200">
          
          {/* Left Side: Image */}
          <figure className="lg:w-2/5 bg-base-200/50 p-8 flex items-center justify-center relative">
            <img 
              src={book.image} 
              alt={book.title} 
              className="rounded-lg shadow-2xl w-full max-w-sm hover:scale-105 transition-transform duration-500 object-cover" 
            />
            <div className="absolute top-4 left-4 badge badge-secondary text-white font-bold p-3">
              {book.category || "Islamic"}
            </div>
          </figure>

          {/* Right Side: Details */}
          <div className="card-body lg:w-3/5 p-6 lg:p-10">
            
            {/* Title & Author */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 leading-tight">
                {book.title}
              </h1>
              <p className="text-lg font-medium opacity-70">
                Author: <span className="text-secondary font-bold">{book.author || "Unknown"}</span>
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 my-4 border-b border-base-200 pb-4">
              <div className="flex text-yellow-500 text-lg">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(book.rating || 5) ? "" : "text-gray-300"} />
                ))}
              </div>
              <span className="opacity-60 text-sm font-medium border-l border-gray-300 pl-3">
                (120 Reviews)
              </span>
              <span className="badge badge-success badge-outline text-xs">In Stock</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">৳{book.price}</span>
              <span className="text-lg text-gray-400 line-through ml-3">৳{book.price + 150}</span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2 text-base-content">Description:</h3>
              <p className="text-base-content/80 leading-relaxed text-justify">
                {book.description || "No detailed description available for this book."}
              </p>
            </div>

            {/*  Interactive Add To Cart Button */}
            <AddToCartBtn book={book} />

            {/* Extra Features (Icons) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-base-200">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <FaTruck />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Fast Delivery</p>
                  <p className="opacity-60">2-3 Days</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                  <FaShieldAlt />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Authentic</p>
                  <p className="opacity-60">100% Original</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-full text-accent">
                  <FaUndo />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Easy Return</p>
                  <p className="opacity-60">7 Days Policy</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}