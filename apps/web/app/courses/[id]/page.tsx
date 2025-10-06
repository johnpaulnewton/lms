import { Suspense, use } from "react";
// import Announcements from "./Announcements";
// import Modules from "./Modules";
// import Assignments from "./Assignments";

async function getCourse(id: string) {
  const res = await fetch(`https://f25-cisc474-individual-2zzz.onrender.com/courses/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch course");
    }

    return res.json();
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const coursePromise = getCourse(params.id);
  const course = use(coursePromise);

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", fontFamily: "sans-serif" }}>
    <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{course.title}</h1>
    <p style={{ color: "#555", marginBottom: "1.5rem" }}>{course.description}</p>

      {/* <Suspense fallback={<p>Loading announcements...</p>}>
        <Announcements courseId={course.id} />
      </Suspense>

      <Suspense fallback={<p>Loading modules...</p>}>
        <Modules courseId={course.id} />
      </Suspense>

      <Suspense fallback={<p>Loading assignments...</p>}>
        <Assignments courseId={course.id} />
      </Suspense> */}
    </div>
  );
}
