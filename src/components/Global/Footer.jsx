// app/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 pb-10">
        
        {/* Subscribe */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-2xl font-light mb-4">Subscribe to Updates</h3>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-72 px-4 py-2 rounded-full outline-none text-black"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-teal-400 text-black font-medium rounded-full hover:bg-teal-300 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-right">
          <p className="text-lg font-light mb-2">hello@mindhyve.ai</p>
          <p className="text-teal-400 text-sm mb-1">+1 (949) 200-8668</p>
          <p className="text-sm text-gray-300">
            1501 Quail St, Suite 130,<br />
            Newport Beach, CA 92660, USA
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
        <p>© 2025 MindHYVE.ai, Inc.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
