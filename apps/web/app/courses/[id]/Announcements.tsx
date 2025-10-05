// app/courses/[id]/Announcements.tsx
import { use } from "react";

async function getAnnouncements(courseId: string) {
  const res = await fetch(`https://f25-cisc474-individual-2zzz.onrender.com/courses/${courseId}/announcements`, {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

export default function Announcements({ courseId }: { courseId: string }) {
  const announcements = use(getAnnouncements(courseId));

  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: "0.5rem" }}>
        Announcements
      </h2>

      {announcements.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
          {announcements.map((a: any) => (
            <li key={a.id} style={{ border: "1px solid #ddd", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.5rem" }}>
              <h3 style={{ margin: 0 }}>{a.title}</h3>
              <p style={{ margin: "0.25rem 0", color: "#555" }}>{a.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "#777" }}>No announcements yet.</p>
      )}
    </section>
  );
}
