"use client";
import { use } from "react";
import styles from "./Course.module.css";

export default function Course({
  course,
}: {
  course: Promise<{
    id: string; title: string; description: string;
    announcements: { id: string; authorId: string; title: string; content: string; postedDate: string; author: { firstName: string; lastName: string; id: string }; }[];
    modules: { id: string; title: string; content: string }[];
    assignments: { id: string; title: string; description: string; dueDate: string }[];
  }>
}) {
  const data = use(course);

  return (
    <div className={styles.courseContainer}>
      <h1 className={styles.pageTitle}>{data.title}</h1>
      <p className={styles.courseDescription}>{data.description}</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📢 Announcements</h2>
        {data.announcements.length > 0 ? (
          <ul className={styles.sectionList}>
            {data.announcements.map((a) => (
              <li key={a.id} className={styles.sectionItem}>
                <div className={styles.itemTitle}>{a.title}</div>
                <div className={styles.itemMeta}>
                  Posted {new Date(a.postedDate).toLocaleDateString()} by {a.author.name}
                </div>
                <p className={styles.itemContent}>{a.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.emptyState}>No announcements yet.</p>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📚 Modules</h2>
        {data.modules.length > 0 ? (
          <ul className={styles.sectionList}>
            {data.modules.map((m) => (
              <li key={m.id} className={styles.sectionItem}>
                <div className={styles.itemTitle}>{m.title}</div>
                <p className={styles.itemContent}>{m.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.emptyState}>No modules yet.</p>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📝 Assignments</h2>
        {data.assignments.length > 0 ? (
          <ul className={styles.sectionList}>
            {data.assignments.map((as) => (
              <li key={as.id} className={styles.sectionItem}>
                <div className={styles.itemTitle}>{as.title}</div>
                <div className={styles.itemMeta}>
                  Due {new Date(as.dueDate).toLocaleDateString()}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.emptyState}>No assignments yet.</p>
        )}
      </section>
    </div>
  );
}