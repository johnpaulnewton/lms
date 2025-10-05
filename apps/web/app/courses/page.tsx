import { Suspense } from "react";
import Enrollments from "./Enrollments";
import styles from "./page.module.css";

async function getEnrollments() {
    const CURRENT_USER_ID = "cmgd1e16w000018r5gww3qebe"; //placeholder for now
    const res = await fetch("https://f25-cisc474-individual-2zzz.onrender.com/enrollments/user/cmgd1e16w000018r5gww3qebe");

    if (!res.ok) {
        throw new Error("Failed to fetch enrollments");
    }

    return res.json();
}

export default function Page() {
    const enrollments = getEnrollments();

    return (
    <div>
      <h1 className={styles.pageTitle}>My Courses</h1>
      <Suspense fallback={<p>Loading your courses...</p>}>
        <Enrollments enrollments={enrollments} />
      </Suspense>
    </div>
  );
}
