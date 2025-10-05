import { Suspense } from "react";
import CoursesList from "./CoursesList";

async function getCourses() {
    const CURRENT_USER_ID = "cmgd1e16w000018r5gww3qebe"; //placeholder for now
    const res = await fetch("https://f25-cisc474-individual-2zzz.onrender.com/enrollments/user/cmgd1e16w000018r5gww3qebe");

    if (!res.ok) {
        throw new Error("Failed to fetch courses");
    }

    return res.json();
}

export default function Page() {
    const enrollments = getCourses();

    return (
    <div>
      <h1>My Courses</h1>
      <Suspense fallback={<p>Loading your courses...</p>}>
        <CoursesList enrollments={enrollments} />
      </Suspense>
    </div>
  );
}
