"use client";
import { use } from "react";
import "./Enrollments.module.css";

export default function Enrollments({
  enrollments,
}: {
  enrollments: Promise<{ term: string; course: { id: number; title: string;} }[]>;
}) {
  const data = use(enrollments);

  return (
    <div className="enrollments-container">
      <div className="enrollments-header">
        <span>Course</span>
        <span>Term</span>
      </div>
      <ul className="enrollments-list">
        {data.map((enrollment) => (
          <li key={enrollment.course.id} className="enrollment-item">
          <a href={`/courses/${enrollment.course.id}`} className="course-link">
            {enrollment.course.title}
          </a>
          <span className="term">{enrollment.term}</span>
        </li>
        
        ))}
      </ul>
    </div>

  );
}