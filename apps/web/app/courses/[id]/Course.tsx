"use client";
import { use } from "react";
import styles from "./Course.module.css";

export default function Course({ 
  course, 
}: { 
  course: Promise<{ id: string; title: string; description: string; 
                    announcements: { id: string; authorId: string; title: string; content: string; postedDate: string; author: { firstName: string; lastName: string; id: string }; }[]; 
                    modules: { id: string; title: string; content: string }[]; 
                    assignments: { id: string; title: string; description: string; dueDate: string }[];}> }) {
  const data = use(course); 

  return (
    <div className={styles.courseContainer}>
      <h1 className={styles.courseTitle}>{data.title}</h1>
      <p className={styles.courseDescription}>{data.description}</p>

      <section className={styles.announcementsContainer}>
        <h2 className={styles.sectionTitle}>Announcements</h2>
        {data.announcements.length > 0 ? (
          <ul className={styles.announcementsList}>
            {data.announcements.map(a => (
              <li key={a.id} className={styles.announcementItem}>
                <h3 className={styles.announcementTitle}>{a.title}</h3>
                <p className={styles.announcementContent}>{a.content}</p>
                <p className={styles.announcementMeta}>
                By <strong>{a.author.firstName} {a.author.lastName}</strong> on {new Date(a.postedDate).toLocaleDateString()}
              </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noAnnouncements}>No announcements yet.</p>
        )}
      </section>

      <section className={styles.modulesContainer}>
        <h2 className={styles.sectionTitle}>Modules</h2>
        {data.modules.length > 0 ? (
          <ul>
            {data.modules.map(m => (
              <li key={m.id}>
                <h3>{m.title}</h3>
                <p>{m.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No modules yet.</p>
        )}
      </section>

      <section className={styles.assignmentsContainer}>
        <h2 className={styles.sectionTitle}>Assignments</h2>
        {data.assignments.length > 0 ? (
          <ul>
            {data.assignments.map(as => (
              <li key={as.id}>
                <h3>{as.title}</h3>
                <p>{as.description}</p>
                <p>Due: {new Date(as.dueDate).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No assignments yet.</p>
        )}
      </section>
    </div>
  );
}