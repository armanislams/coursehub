import Link from 'next/link';
import React from 'react'

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto px-4 w-full bg-indigo-600 py-20 text-center rounded-md">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 t">
        Learn Without Limits 🚀
      </h1>
      <p className="text-lg md:text-xl mb-8 opacity-90 text-white">
        Explore courses, gain skills, and achieve your dreams — all in one
        platform.
      </p>
      <Link
        href={"/all-course"}
        className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        Explore Courses
      </Link>
    </div>
  );
}
