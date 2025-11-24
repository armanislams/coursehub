export default async function getCourse(id) {
  const data = await fetch(`https://learn-hub-server-nine.vercel.app/course/${id}`);
  return data.json();
}
