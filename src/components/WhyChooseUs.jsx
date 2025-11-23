import React from 'react'

export default function WhyChooseUs() {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-base-content">
        Why Choose Us
      </h2>
      <p className="text-base-content/70 mb-10 max-w-2xl mx-auto">
        Our platform provides an easy-to-use interface, expert instructors, and
        affordable courses for learners of all levels.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["Expert Mentors", "Flexible Learning", "Global Community"].map(
          (item, i) => (
            <div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                {item}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Learn from the best with resources that fit your schedule.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
