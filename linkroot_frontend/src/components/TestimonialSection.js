import React from 'react';

// Avatar component (simple version)
function Avatar({ image, fallback }) {
  return (
    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
      {image ? (
        <img src={image} alt={fallback} className="h-full w-full rounded-full" />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
}

// TestimonialCard component with a diagonal, subtle gradient on hover
function TestimonialCard() {
  return (
    <div
      className="p-6 border rounded-lg shadow-sm transition duration-300 bg-pink-50 max-w-md mx-auto
        hover:bg-gradient-to-br hover:from-pink-100 hover:via-purple-100 hover:to-yellow-100 hover:text-gray-800"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-3">
          <span className="text-blue-600 text-lg font-semibold">&lt;/&gt;</span>
        </div>
        <h2 className="text-2xl font-bold">Native APIs</h2>
      </div>
      <p className="text-gray-700 mb-6">
        What sets LinkRoot apart is its seamless integration with native APIs
        using our existing web codebase. By tapping into APIs like Tray and
        Notifications, we've crafted an exceptionally polished desktop user
        experience.
      </p>
      <div className="flex items-center">
        <Avatar image="/placeholder.svg?height=36&width=36&text=RP" fallback="RP" />
        <div>
          <p className="font-medium">Rick Pastoor</p>
          <p className="text-sm text-gray-500">Rise</p>
        </div>
      </div>
    </div>
  );
}

// TestimonialSection component
export default function TestimonialSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
