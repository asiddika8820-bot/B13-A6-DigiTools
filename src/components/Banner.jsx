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

      {/* Premium Tools Title */}
      <div className="text-center my-10 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold ">
          Premium Digital Tools
        </h1>
        <p className="mt-5">Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
      </div>
      <div className="flex items-center justify-center  gap-5">
         <button className="bg-[#4F39F6] hover:bg-[#756db4] transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl flex items-center gap-3 text-white">
                Products
             
              </button>

              <button className="bg-white hover:bg-gray-100 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl flex items-center gap-3 text-[#4F39F6]">
                
                Cart
              </button>
      </div>

{/* get started*/}
  <div className="text-center my-10 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold ">
         Get Started in 3 Steps
        </h1>
        <p className="mt-5">Start using premium digital tools in minutes, not hours.</p>
      </div>
{/* card*/}

   
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center relative">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            01
          </span>

          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-4">
           <img src= "/assets/user.png"/>
          </div>

          <h3 className="text-lg font-semibold text-gray-800">
            Create Account
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center relative">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            02
          </span>

          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-4">
           <img src= "/assets/package.png"/>
          </div>

          <h3 className="text-lg font-semibold text-gray-800">
            Choose Products
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center relative">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            03
          </span>

          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-4">
             <img src= "/assets/rocket.png"/>
          </div>

          <h3 className="text-lg font-semibold text-gray-800">
            Start Creating
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>




        
</div>

<div className="py-16 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold mb-2">
        Simple, Transparent Pricing
      </h1>
      <p className="text-gray-500 mb-12">
        Choose the plan that fits your needs.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

        {/* Starter */}
        <div className="p-8 rounded-2xl bg-white cursor-pointer transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-105">
          <h2 className="text-2xl font-semibold">Starter</h2>
          <h3 className="text-4xl font-bold my-4">$0/Month</h3>
          <p>Perfect for getting started</p>

  <ul className="text-left mt-4 space-y-2">
  <li><span className="text-green-500 mr-2">✓</span>Access to 10 free tools</li>
  <li><span className="text-green-500 mr-2">✓</span>Basic templates</li>
  <li><span className="text-green-500 mr-2">✓</span>Community Support</li>
  <li><span className="text-green-500 mr-2">✓</span>1 project per month</li>
</ul>

<div className="mt-5 flex justify-center">
    <button className="bg-[#4F39F6] hover:bg-[#756db4] transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl flex items-center gap-3 text-white h-10">
                
            Get started free
              </button>

</div>


        </div>

        {/* Pro */}
        <div className="p-8 rounded-2xl bg-white cursor-pointer transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-105">
          <h2 className="text-2xl font-semibold">Pro</h2>
          <h3 className="text-4xl font-bold my-4">$29/Month</h3>
          <p>Best for professionals</p>

          <ul className="text-left mt-4 space-y-2">
  <li><span className="text-green-500 mr-2">✓</span>Access to all premium tools</li>
  <li><span className="text-green-500 mr-2">✓</span>Unlimited templates</li>
  <li><span className="text-green-500 mr-2">✓</span>Priority Support</li>
  <li><span className="text-green-500 mr-2">✓</span>Unlimited Project</li>
  <li><span className="text-green-500 mr-2">✓</span>cloud Sync</li>
  <li><span className="text-green-500 mr-2">✓</span>AdvanceAnalytic</li>
</ul>


<div className="mt-5 flex justify-center">
    <button className="bg-[#4F39F6] hover:bg-[#756db4] transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl flex items-center gap-3 text-white h-10">
                
          Started Pro Trial
              </button>

</div>
        </div>

        {/* Enterprise */}
        <div className="p-8 rounded-2xl bg-white cursor-pointer transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-105">
          <h2 className="text-2xl font-semibold">Enterprise</h2>
          <h3 className="text-4xl font-bold my-4">$99/Month</h3>
          <p>For teams and businesses</p>


           <ul className="text-left mt-4 space-y-2">
  <li><span className="text-green-500 mr-2">✓</span>Everything in pro</li>
  <li><span className="text-green-500 mr-2">✓</span>Team collaboration</li>
  <li><span className="text-green-500 mr-2">✓</span> customer integration</li>
  <li><span className="text-green-500 mr-2">✓</span>Unlimited Support</li>
  <li><span className="text-green-500 mr-2">✓</span>SSLA guarantee</li>
  <li><span className="text-green-500 mr-2">✓</span>Customer Branding</li>
</ul>


<div className="mt-5 flex justify-center">
    <button className="bg-[#4F39F6] hover:bg-[#756db4] transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl flex items-center gap-3 text-white h-10">
                
       Contact Sales
              </button>

</div>
        </div>

      </div>
    </div>


    {/*Workflow */}


      <div className="mt-5 flex justify-center items-center bg-gradient-to-r from-purple-500 to-[#4F39F6] text-white py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

    {/* ✅ span full width */}
    <div className="md:col-span-3">
      <h1 className="text-4xl font-bold text-center">
        Ready to Transform Your Workflow?
      </h1>

      <p className="mt-4 text-center">
        Join thousands of professionals who are already using Digitools to work smarter.
        <br />
        Start your free trial today.
      </p>

      <div className="flex justify-center gap-5 mt-6">
        <button className="bg-[#4F39F6] hover:bg-[#756db4] px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl text-white">
          Explore Products
        </button>

        <button className="bg-white hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl text-[#4F39F6]">
          Get Started
        </button>
      </div>
    </div>

  </div>
</div>
    </div>





  );
};

export default Banner;