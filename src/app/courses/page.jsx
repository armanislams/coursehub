'use client'
import CourseCard from '@/components/courseCard';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from 'react';

export default function courses() {
   const [course, setCourse] =useState([])
    const [query, setQuery] = useState("");
    const filtered = course.filter((c) =>
        c.title.toLowerCase().includes(query.toLowerCase())
    );
    useEffect(() => {
        async function load() {
             const data = await fetch(
               "https://learn-hub-server-nine.vercel.app/course"
             );
            const course = await data.json();
            setCourse(course)
        }
        load()
    },[])
return (
  <div>
    <div className="mt-4 flex justify-center items-center">
      <div className='relative'>
        <input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded w-full max-w-md"
        />
        <FaMagnifyingGlass className="absolute top-3 right-1" />
      </div>
    </div>
    <div className="grid grid-cols-4 my-5 gap-5">
      {filtered.map((c) => (
        <CourseCard key={c._id} c={c}></CourseCard>
      ))}
    </div>
  </div>
);
}

