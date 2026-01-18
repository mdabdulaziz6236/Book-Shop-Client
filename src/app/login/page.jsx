'use client';

import { loginUser } from "@/app/actions/auth"; 
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    
    try {
        const res = await loginUser(formData);
        if (res?.error) {
            setError(res.error);
            setLoading(false);
        }
    } catch (e) {
    
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-6 border border-primary/20">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">Please Login</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Email */}
          <div className="form-control">
            <label className="label"><span className="label-text font-bold">Email</span></label>
            <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                className="input input-bordered focus:border-primary" 
                required 
            />
          </div>

          {/* Password */}
          <div className="form-control">
             <label className="label"><span className="label-text font-bold">Password</span></label>
             <input 
                type="password" 
                name="password" 
                placeholder="Enter your password" 
                className="input input-bordered focus:border-primary" 
                required 
            />
          </div>

          {/* Error Message */}
          {error && <div className="alert alert-error text-sm py-2 rounded-lg text-white font-bold">{error}</div>}

          {/* Submit Button */}
          <button disabled={loading} type="submit" className="btn btn-primary text-white font-bold text-lg mt-4">
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </form>

        <div className="mt-4 text-center text-xs opacity-60">
          <p>Demo Email: <strong>admin@gmail.com</strong></p>
          <p>Demo Pass: <strong>1234</strong></p>
        </div>
      </div>
    </div>
  );
}