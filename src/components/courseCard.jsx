import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ c }) {
  return (
    <article className="bg-white rounded border overflow-hidden shadow hover:shadow-lg transition">
      <Image
        src={c.image}
        alt=""
        width={500}
        height={500}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold h-12">{c.title}</h3>
        <p className="text-sm text-ellipsis line-clamp-2 text-slate-600 truncate-2">
          {c.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold">${c.price}</div>
          <Link href={`/courses/${c._id}`} className="px-3 py-1 border rounded">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
