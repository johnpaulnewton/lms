"use client";
import { use } from "react";
import styles from "./Announcements.module.css";

async function getCourse(courseId: string) {
  const res = await fetch(`https://f25-cisc474-individual-2zzz.onrender.com/courses/${courseId}`);

    if (!res.ok) {
        throw new Error("Failed to fetch course");
    }

    return res.json();
}

export default function Announcements({ courseId }: { courseId: string }) {
    const course = use(getCourse(courseId));
    const announcements = course.announcements || [];
  
    return (
      <section className={styles.announcementsContainer}>
        <h2 className={styles.sectionTitle}>Announcements</h2>
  
        {announcements.length > 0 ? (
          <ul className={styles.announcementsList}>
            {announcements.map((a: any) => (
              <li key={a.id} className={styles.announcementItem}>
                <h3 className={styles.announcementTitle}>{a.title}</h3>
                <p className={styles.announcementContent}>{a.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noAnnouncements}>No announcements yet.</p>
        )}
      </section>
    );
  }
  