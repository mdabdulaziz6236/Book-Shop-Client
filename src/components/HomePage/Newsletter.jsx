import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  return (
    <div className="relative py-24 bg-cover bg-center bg-fixed" style={{backgroundImage: 'url("https://placehold.co/1200x400/047857/000?text=Book Shop")'}}>
      <div className="absolute inset-0 bg-primary/90"></div>
      
      <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
        <FaPaperPlane className="text-5xl mx-auto mb-4 text-secondary opacity-80" />
        <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
        <p className="mb-8 text-lg opacity-90">
          Subscribe to our newsletter to receive updates on new Islamic books, exclusive offers, and spiritual articles.
        </p>
        
        <div className="join w-full shadow-2xl">
          <input className="input input-bordered join-item w-full text-black focus:outline-none pl-6" placeholder="Enter your email address..." />
          <button className="btn btn-secondary join-item border-none text-white font-bold px-8">Subscribe</button>
        </div>
        <p className="mt-4 text-sm opacity-60">We respect your privacy. No spam, ever.</p>
      </div>
    </div>
  );
}