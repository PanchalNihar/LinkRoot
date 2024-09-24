import React from 'react';
import Image from './clickup.png'; // Adjust the filename and extension

function ClickUpTestimonial() {
  return (
    <div className="bg-white p-8 max-w-7xl mx-auto shadow-md rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side content */}
        <div>
          <div className="flex items-center mb-6">
            <img
              src="/placeholder.svg?height=40&width=40&text=CU"
              alt="ClickUp Logo"
              className="w-12 h-12 mr-4"
            />
            <h2 className="text-3xl font-bold">ClickUp</h2>
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            ClickUp used LinkRoot to get their desktop app in front of customers in days instead of months.
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Chromeless UI", "Native spellcheck", "Task time in menubar", "Notification count in the dock", "Global hotkey to create task"].map((feature, index) => (
              <span key={index} className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full border border-yellow-200">
                ✓ {feature}
              </span>
            ))}
          </div>
          <blockquote className="text-gray-600 italic mb-6 text-lg">
            "LinkRoot provided us with a polished desktop app in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app."
          </blockquote>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
            <div>
              <p className="font-semibold text-lg">Zeb Evans</p>
              <p className="text-sm text-gray-500">Founder & CEO, ClickUp</p>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div>
          <img
            src={Image}
            alt="Custom"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ClickUpTestimonial;
