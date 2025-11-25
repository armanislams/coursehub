"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ManageProducts() {
  const [courses, setCourses] = useState([]);

  // Fetch products
  useEffect(() => {
    async function load() {
      const res = await fetch(
        "https://learn-hub-server-nine.vercel.app/course"
      );
      const data = await res.json();
      setCourses(data);
    }
    load();
  }, []);

  // Delete handler
  async function handleDelete(id) {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    await fetch(`https://learn-hub-server-nine.vercel.app/course/${id}`, {
      method: "DELETE",
    });
    setCourses(courses.filter((p) => p.id !== id));
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-semibold mb-4">Manage Products</h1>
      <p className="text-slate-600 mb-6">View and manage all products.</p>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white"
          >
            <Image
              src={course.image}
                    alt=""
                    width={500}
                    height={500}
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="font-semibold text-lg mt-3 h-15">{course.title}</h3>
            <p className="text-slate-600 text-sm line-clamp-2">
              {course.shortDescription}
            </p>

            <div className="flex justify-evenly gap-5 text-center items-center mt-4">
              <Link
                href={`/courses/${course._id}`}
                className="px-3 py-2 flex-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View
              </Link>

              <button
                onClick={() => handleDelete(course._id)}
                className="px-3 py-2 flex-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {courses.length === 0 && (
          <p className="text-center col-span-full text-slate-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
