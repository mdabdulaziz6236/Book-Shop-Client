'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaStar, FaSearch, FaFilter, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function AllBooks() {
  const [books, setBooks] = useState([]); 
  const [filteredBooks, setFilteredBooks] = useState([]); 
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  useEffect(() => {
    let tempBooks = [...books];

    // A. Search
    if (searchQuery) {
      tempBooks = tempBooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // B. Category
    if (selectedCategory !== "All") {
      tempBooks = tempBooks.filter((book) => book.category === selectedCategory);
    }

    // C. Sort
    if (sortOption === "lowToHigh") {
      tempBooks.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      tempBooks.sort((a, b) => b.price - a.price);
    }

    setFilteredBooks(tempBooks);
    setCurrentPage(1); 
  }, [searchQuery, selectedCategory, sortOption, books]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ["All", ...new Set(books.map((book) => book.category))];

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3">All Books</h1>
          <p className="opacity-70 text-sm md:text-base">Browse our complete collection of authentic knowledge.</p>
        </div>

        {/*  RESPONSIVE FILTER BAR */}
        <div className="bg-base-100 p-4 rounded-xl shadow-md mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between border border-base-200">
          
          {/* Search Box */}
          <div className="join w-full lg:w-1/3">
            <input 
              type="text" 
              placeholder="Search by book name..." 
              className="input input-bordered join-item w-full focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-primary join-item text-white px-6"><FaSearch /></button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Category Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto bg-base-200 px-3 rounded-lg">
              <FaFilter className="text-secondary" />
              <select 
                className="select select-ghost w-full sm:w-40 focus:outline-none focus:bg-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <select 
              className="select select-bordered w-full sm:w-48 focus:outline-none"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort By: Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/*  Loading State */}
        {loading && (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        {/*  BOOKS GRID */}
        {!loading && (
          <>
            <div className="mb-4 text-sm opacity-60 font-medium">
              Showing {filteredBooks.length > 0 ? indexOfFirstItem + 1 : 0} - {Math.min(indexOfLastItem, filteredBooks.length)} of {filteredBooks.length} results
            </div>

            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentBooks.map((book) => (
                  <div key={book._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 group h-full flex flex-col">
                    
                    {/*  FIX: Image Height Reduced (h-64 -> h-48) */}
                    <figure className="px-4 pt-4 bg-base-200/50 relative overflow-hidden h-48 shrink-0">
                      <Link href={`/items/${book._id}`} className="w-full flex justify-center h-full">
                        <img 
                          src={book.image} 
                          alt={book.title} 
                          className="rounded-lg h-full object-contain shadow-sm group-hover:scale-105 transition-transform duration-300" 
                        />
                      </Link>
                      <div className="absolute top-2 right-2 badge badge-secondary text-white text-xs font-bold shadow-sm">
                        {book.category}
                      </div>
                    </figure>

                    {/* Content Section */}
                    <div className="card-body items-center text-center p-4 grow"> 
                      
                      <Link href={`/items/${book._id}`}>
                        <h2 className="card-title text-lg font-bold text-base-content hover:text-primary transition-colors cursor-pointer line-clamp-2 min-h-[3rem]">
                          {book.title}
                        </h2>
                      </Link>
                      
                      <p className="text-sm opacity-70 mb-1 line-clamp-1">{book.author || "Unknown"}</p>

                      <div className="flex text-yellow-500 gap-1 text-sm mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < (book.rating || 5) ? "" : "text-gray-300"} />
                        ))}
                      </div>
                      
                      <p className="text-xl font-bold text-primary mb-3">৳{book.price}</p>
                      
                      <div className="card-actions w-full mt-auto">
                        <Link href={`/items/${book._id}`} className="w-full">
                          <button className="btn btn-primary btn-sm w-full text-white font-bold shadow-md hover:shadow-lg">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-base-100 rounded-xl border border-dashed border-base-300">
                <h3 className="text-2xl font-bold text-gray-400">No books found!</h3>
                <p className="text-gray-500 mb-4">Try changing your search criteria.</p>
                <button 
                  className="btn btn-outline btn-primary btn-sm"
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setSortOption("default"); }}
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/*  PAGINATION CONTROLS */}
            {filteredBooks.length > itemsPerPage && (
              <div className="flex justify-center mt-12">
                <div className="join shadow-md bg-base-100">
                  <button 
                    className="join-item btn hover:bg-primary hover:text-white" 
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <FaArrowLeft />
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      className={`join-item btn ${currentPage === index + 1 ? "btn-primary text-white" : "hover:bg-primary/10"}`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button 
                    className="join-item btn hover:bg-primary hover:text-white"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}