export default async function CoursePage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://f25-cisc474-individual-2zzz.onrender.com/courses/${params.id}`, {
    cache: 'no-store', // or 'force-cache' if you want caching
  });

  if (!res.ok) throw new Error('Failed to fetch course');
  const course = await res.json();

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}