
export default async function getAllCourse() {
  const data = await fetch("https://learn-hub-server-nine.vercel.app/course");
  return data.json()
}
