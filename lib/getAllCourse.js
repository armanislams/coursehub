
export default async function getAllCourse() {
  const data = await fetch("https://backend-gilt-psi-36.vercel.app/course");
  return data.json()
}
