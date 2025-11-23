import CourseCard from '@/components/courseCard';
import React from 'react'

export default async function courses() {
    const data = await fetch("https://learn-hub-server-nine.vercel.app/course");
    const course = await data.json()
    console.log(course);
    
  return (
    <div className='grid grid-cols-4 my-5 gap-5'>
          {
              course.map(c =>
                  <CourseCard key={c._id} c={c}></CourseCard>
              )
      }
    </div>
  )
}
