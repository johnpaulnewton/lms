import { notFound } from "next/navigation";

interface CoursePageProps {
  params: { id: string };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = params;

  const res = await fetch(
    `https://f25-cisc474-individual-2zzz.onrender.com/courses/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  const course = await res.json();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p><strong>Term:</strong> {course.term}</p>
    </div>
  );
}
