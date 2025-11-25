export default async function getCourse(id) {
  const data = await fetch(
    `https://backend-gilt-psi-36.vercel.app/course/${id}`
  );
  return data.json();
}
