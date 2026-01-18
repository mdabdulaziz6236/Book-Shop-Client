'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { FaArrowLeft, FaSave, FaBook, FaUserEdit, FaTag, FaImage, FaStar, FaalignLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function AddItemPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    category: '',
    rating: '',
    image: '',
    description: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...formData,
            price: parseFloat(formData.price),
            rating: parseFloat(formData.rating)
        }),
      });

      if (res.ok) {
        toast.success('🎉 Book Added Successfully!');
        setFormData({ title: '', author: '', price: '', category: '', rating: '', image: '', description: '' });
        setTimeout(() => router.push('/items'), 1500);
      } else {
        toast.error('Failed to add book');
      }
    } catch (error) {
      console.error(error);
      toast.error('Server Error!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4 md:px-8">
      <Toaster position="top-center" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
            <Link href="/items" className="btn btn-ghost hover:bg-base-300 gap-2 font-bold">
                <FaArrowLeft /> Back to List
            </Link>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Add New Book</h2>
        </div>

        {/*  Main Grid Layout: Desktop  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
     
          <div className="card bg-base-100 shadow-xl border border-base-300 order-2 lg:order-1">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Title */}
                <div className="form-control w-full">
                  <label className="label font-bold">Book Title</label>
                  <label className="input input-bordered flex items-center gap-2 focus-within:input-primary">
                    <FaBook className="opacity-70" />
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter book name" required className="grow" />
                  </label>
                </div>

                {/* Author */}
                <div className="form-control w-full">
                  <label className="label font-bold">Author Name</label>
                  <label className="input input-bordered flex items-center gap-2 focus-within:input-primary">
                    <FaUserEdit className="opacity-70" />
                    <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Writer name" required className="grow" />
                  </label>
                </div>

                {/* Price & Category Row */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="form-control w-full">
                        <label className="label font-bold">Price (৳)</label>
                        <label className="input input-bordered flex items-center gap-2 focus-within:input-primary">
                            <span className="font-bold opacity-70">৳</span>
                            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="250" required className="grow" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Category</label>
                        <div className="flex items-center gap-2"> 
                            <select name="category" value={formData.category} onChange={handleChange} className="select select-bordered w-full focus:select-primary" required>
                                <option value="" disabled>Select Category</option>
                                <option value="Islamic">Islamic</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Academic">Academic</option>
                                <option value="History">History</option>
                                <option value="Programming">Programming</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Image & Rating Row */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="form-control w-full">
                        <label className="label font-bold">Image URL</label>
                        <label className="input input-bordered flex items-center gap-2 focus-within:input-primary">
                            <FaImage className="opacity-70" />
                            <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="https://..." required className="grow" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Rating</label>
                        <label className="input input-bordered flex items-center gap-2 focus-within:input-primary">
                            <FaStar className="opacity-70" />
                            <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="4.5" step="0.1" max="5" min="1" required className="grow" />
                        </label>
                    </div>
                </div>

                {/* Description */}
                <div className="form-control">
                  <label className="label font-bold">Description</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} className="textarea textarea-bordered h-24 focus:textarea-primary" placeholder="Book details..." required></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full text-white font-bold text-lg mt-4 shadow-lg hover:shadow-primary/40 transition-all" disabled={loading}>
                  {loading ? <span className="loading loading-spinner"></span> : <><FaSave /> Publish Book</>}
                </button>
              </form>
            </div>
          </div>

          {/* 🖼️ ডান পাশ: Live Preview Card */}
          <div className="order-1 lg:order-2 sticky top-24">
             <div className="mockup-window border border-base-300 bg-base-300 shadow-2xl">
                <div className="flex justify-center bg-base-200 p-8">
                    {/* Preview Card Design */}
                    <div className="card w-full max-w-sm bg-base-100 shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                        <figure className="h-64 bg-gray-200 relative flex items-center justify-center">
                            {formData.image ? (
                                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" 
                                     onError={(e) => e.target.src = "https://placehold.co/400x300?text=No+Image"} />
                            ) : (
                                <div className="text-gray-400 flex flex-col items-center">
                                    <FaImage className="text-4xl mb-2" />
                                    <span>Image Preview</span>
                                </div>
                            )}
                            {formData.category && (
                                <div className="absolute top-3 right-3 badge badge-secondary font-bold shadow-sm">
                                    {formData.category}
                                </div>
                            )}
                        </figure>
                        <div className="card-body p-5">
                            <div className='flex justify-between items-center'>
                              <h2 className="card-title text-primary">
                                {formData.title || "Book Title"}
                                {formData.rating && <div className="badge badge-outline text-xs">{formData.rating} ★</div>}
                            </h2>
                             <div className="text-xl font-bold text-secondary">
                                    {formData.price ? `৳${formData.price}` : "৳00"}
                                </div>
                            </div>
                            <p className="text-sm font-medium opacity-70">
                                Author: <span className="font-bold">{formData.author || "Author Name"}</span>
                            </p>
                            <p className="text-xs text-gray-500 line-clamp-2 mt-2">
                                {formData.description || "Description will appear here..."}
                            </p>
                            <div className="card-actions justify-between items-center mt-4 pt-4 border-t border-gray-100">
                               
                               
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <div className="text-center mt-4 opacity-50 text-sm">
                * This is a live preview of your item card
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}