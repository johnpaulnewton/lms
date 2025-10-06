import { Suspense } from "react";
import Course from "./Course";
export const dynamic = "force-dynamic";

async function getCourse(id: string) {
  const res = await fetch(`https://f25-cisc474-individual-2zzz.onrender.com/courses/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch course");
    }

    return res.json();
}

export default function CoursePage({ params }: { params: { id: string } }) {
  
  const course = getCourse(params.id);

  return (
    <Suspense fallback={<p>Loading course...</p>}>
      <Course course={course} />
    </Suspense>
  );
}

