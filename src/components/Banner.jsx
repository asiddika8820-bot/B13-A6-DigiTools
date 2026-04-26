const Banner = () => {
  return (
    <div className="relative overflow-hidden">

      {/* Main Section */}
      <div className="min-h-[650px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#c4bfe9] text-[#4F39F6] text-sm font-medium px-5 py-2 rounded-full">
              ✨ New: AI-Powered Tools Available
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-black">
              Supercharge Your <br />
              Digital Workflow
            </h1>

            <p className="text-lg text-zinc-700 max-w-lg">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#4F39F6] hover:bg-[#756db4] transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl flex items-center gap-3 text-white">
                Explore Products
                <span className="transition transform hover:translate-x-1">→</span>
              </button>

              <button className="bg-white hover:bg-gray-100 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl flex items-center gap-3 text-[#4F39F6]">
                <img src="/assets/Play.png" alt="Play" className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              className="h-[400px] lg:h-[500px] object-contain drop-shadow-2xl rounded-3xl"
              src="/assets/banner.png"
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="bg-gradient-to-r from-purple-500 to-[#4F39F6] text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div>
            <h1 className="text-4xl font-bold">50k+</h1>
            <p>Active Users</p>
          </div>

          <div>
            <h1 className="text-4xl font-bold">200+</h1>
            <p>Premium Tools</p>
          </div>

          <div>
            <h1 className="text-4xl font-bold">4.9</h1>
            <p>Rating</p>
          </div>

        </div>
      </div>

</div>

  );
};

export default Banner;