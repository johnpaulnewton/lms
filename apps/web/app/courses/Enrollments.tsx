"use client";
import { use } from "react";
import styles from "./Enrollments.module.css";

export default function Enrollments({
  enrollments,
}: {
  enrollments: Promise<{ term: string; course: { id: number; title: string;} }[]>;
}) {
  const data = use(enrollments);

  return (
    <div className={styles.enrollmentsContainer}>
      <div className={styles.enrollmentsHeader}>
        <span>Course</span>
        <span>Term</span>
      </div>
      <ul className={styles.enrollmentsList}>
        {data.map((e) => (
          <li key={e.course.id} className={styles.enrollmentItem}>
            <a href={`/courses/${e.course.id}`} className={styles.courseLink}>
              {e.course.title}
            </a>
            <span>{e.term}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}