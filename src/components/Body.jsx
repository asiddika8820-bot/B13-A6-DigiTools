import React from "react";

const Body = () => {
  return (
    <div>
      {/* Premium Tools Title */}
      <div className="text-center my-10 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Premium Digital Tools
        </h1>
        <p className="mt-5">
          Choose from our curated collection of premium digital products designed
          <br />
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex items-center justify-center gap-5">
        <button className="bg-[#4F39F6] hover:bg-[#756db4] transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl text-white">
          Products
        </button>

        <button className="bg-white hover:bg-gray-100 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl text-[#4F39F6]">
          Cart
        </button>
      </div>

      {/* get started */}
      <div className="text-center my-10 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Get Started in 3 Steps
        </h1>
        <p className="mt-5">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center relative">
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            01
          </span>

          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-4">
            <img src="/assets/user.png" />
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
            <img src="/assets/package.png" />
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
            <img src="/assets/rocket.png" />
          </div>

          <h3 className="text-lg font-semibold text-gray-800">
            Start Creating
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-16 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 mb-12">
          Choose the plan that fits your needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Starter */}
          <div className="p-8 rounded-2xl bg-white hover:bg-purple-600 hover:text-white transition-all duration-300">
            <h2 className="text-2xl font-semibold">Starter</h2>
            <h3 className="text-4xl font-bold my-4">$0/Month</h3>
            <p>Perfect for getting started</p>
          </div>

          {/* Pro */}
          <div className="p-8 rounded-2xl bg-white hover:bg-purple-600 hover:text-white transition-all duration-300">
            <h2 className="text-2xl font-semibold">Pro</h2>
            <h3 className="text-4xl font-bold my-4">$29/Month</h3>
            <p>Best for professionals</p>
          </div>

          {/* Enterprise */}
          <div className="p-8 rounded-2xl bg-white hover:bg-purple-600 hover:text-white transition-all duration-300">
            <h2 className="text-2xl font-semibold">Enterprise</h2>
            <h3 className="text-4xl font-bold my-4">$99/Month</h3>
            <p>For teams and businesses</p>
          </div>
        </div>
      </div>

      {/* Workflow CTA */}
      <div className="mt-5 flex justify-center items-center bg-gradient-to-r from-purple-500 to-[#4F39F6] text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">
            Ready to Transform Your Workflow?
          </h1>

          <p className="mt-4">
            Join thousands of professionals who are already using Digitools.
          </p>

          <div className="flex justify-center gap-5 mt-6">
            <button className="bg-white text-[#4F39F6] px-8 py-4 rounded-2xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;