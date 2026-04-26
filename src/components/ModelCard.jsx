import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = () => {
    setIsSubscribed(true);

    const isFound = carts.find((item) => item.id === model.id);
    if (isFound) 
        {
            toast.error("Already subscribed");
            return;
        }
    setCarts([...carts, model]);
    toast.success("Item added to cart!");
  };

  return (
    <div className="shadow-lg rounded-2xl border border-zinc-300 overflow-hidden hover:shadow-xl transition">
      
      {/* Image */}
      <div className="flex justify-start items-center h-56 bg-zinc-100">
        <img
          className="h-32 w-32 object-contain"
          src={model.icon}
          alt={model.name}
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        
        {/* Title */}
        <h2 className="text-xl font-bold">{model.title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm">{model.description}</p>

        {/* Price */}
        <div className="text-2xl font-bold">
          ${model.price}
          <span className="text-sm text-gray-500">
            {model.billing === "monthly" ? "/mo" : "/one-time"}
          </span>
        </div>

        {/* Features ✅ FIXED */}
        <ul className="space-y-2 text-sm text-gray-600">
          {model.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              ✅ {feature}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={handleSubscription}
          className={`w-full py-2 rounded-full font-medium transition ${
            isSubscribed
              ? "bg-gray-400 text-white"
              : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          }`}
        >
          {isSubscribed ? "Subscribed" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;