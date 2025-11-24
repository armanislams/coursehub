import Image from 'next/image';
import React from 'react'
import getCourse from '../../../../lib/getCourse';

export default async function courseDetails({params}) {
    const { id } = await params;
    const course = await getCourse(id)
  return (
    <div className="container mx-auto py-10 px-4 bg-indigo-500">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Left side */}
        <div className="md:col-span-2 bg-base-100 p-6 rounded shadow">
          <Image
            src={course.image || course.imageUrl}
                      alt={course.title}
                      width={500}
                      height={800}
            className="w-full h-64 object-cover rounded"
          />
          <h1 className="text-2xl font-bold mt-4 ">
            {course.title}
          </h1>
          <p className=" mt-2">{course.description}</p>
        </div>

        {/* Right side */}
        <aside className="p-6 bg-base-100 rounded shadow mx-auto w-full flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold mt-4 text-base-content">
            Duration: {course.duration}
          </h1>
          <h1 className="text-xl font-bold mt-4 text-base-content">
            Category:  {course.category}
          </h1>
          <div className="font-semibold mt-5 text-base-content">
            Price: $ {course.price}
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            <button
              className={`w-full py-2 rounded transition btn btn-primary font-medium`}
            >
              enroll now
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
