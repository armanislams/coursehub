import React from 'react'
import getAllCourse from '../../lib/getAllCourse'
import CourseCard from './courseCard';

export default async function FeaturedCourse() {
    const courses = await getAllCourse()
    const featured = courses.filter(courses => courses.isFeatured)
    
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-center py-5">Popular Courses</h1>
      <div className="grid grid-cols-4 gap-5 ">
        {featured.map((c) => (
          <CourseCard key={c._id} c={c}></CourseCard>
        ))}
      </div>
    </div>
  );
}
