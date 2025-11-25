'use client'
import ProtectedRoute from '@/components/ProtectedRoutes';
import { useAuth } from '@/context/AuthContext';
import React, { useState } from 'react'

export default function AddCourse() {
    const {user,loading} =useAuth()
    
  const [form, setForm] = useState({
    title: "",
    image: "",
    price: Number(""),
    duration: "",
    category: "",
    description: "",
    isFeatured: false,
  });

  const handleChange = (k, v) => setForm((prev) => ({ ...prev, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://backend-gilt-psi-36.vercel.app/create-course", {
        method: "post",
        body: form,
      });
      toast.success("Course added!");

      // clear or redirect
    } catch (err) {
      if (err.response && err.response.status === 409) {
        toast.warn("A course with this title already exists!");
      } else {
        toast.error("Failed to add course.");
      }
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-base-content">
          Add Course Details
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-base-100 max-w-3xl mx-auto grid md:grid-cols-2 gap-6 p-6 rounded-lg shadow-lg"
        >
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-base-content mb-2">
              Title
            </label>
            <input
              placeholder="Enter course title"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full px-4 py-2 border border-base-300 rounded-md bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Image URL
            </label>
            <input
              placeholder="Enter image URL"
              value={form.image}
              onChange={(e) => handleChange("image", e.target.value)}
              className="w-full px-4 py-2 border border-base-300 rounded-md bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Price
            </label>
            <input
              placeholder="Enter price"
              value={form.price}
              onChange={(e) => handleChange("price", e.target.value)}
              className="w-full px-4 py-2 border border-base-300 rounded-md bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-base-content mb-2">
              Duration
            </label>
            <input
              placeholder="e.g., 4 weeks, 20 hours"
              value={form.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              className="w-full px-4 py-2 border border-base-300 rounded-md bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-base-content mb-2">
              Category
            </label>
            <input
              type="text"
              placeholder="Enter category (e.g., Web Development, Design)"
              value={form.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full px-4 py-2 border border-base-300 rounded-md bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-base-content mb-2">
              Description
            </label>
            <textarea
              placeholder="Write a detailed description about the course"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full px-4 py-2 border border-base-300 rounded-md bg-base-100 text-base-content focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
          >
            Add Course
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
};