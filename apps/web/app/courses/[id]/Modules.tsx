// // app/courses/[id]/Modules.tsx
// import { use } from "react";

// async function getModules(courseId: string) {
//   const res = await fetch(`https://f25-cisc474-individual-2zzz.onrender.com/courses/${courseId}/modules`, {
//     cache: "no-store",
//   });
//   if (!res.ok) return [];
//   return res.json();
// }

// export default function Modules({ courseId }: { courseId: string }) {
//   const modules = use(getModules(courseId));

//   return (
//     <section style={{ marginBottom: "2rem" }}>
//       <h2 style={{ fontSize: "1.5rem", borderBottom: "1px solid #ccc", paddingBottom: "0.5rem" }}>
//         Modules
//       </h2>

//       {modules.length > 0 ? (
//         <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
//           {modules.map((m: any) => (
//             <li key={m.id} style={{ border: "1px solid #ddd", padding: "0.75rem", borderRadius: "6px", marginBottom: "0.5rem" }}>
//               <h3 style={{ margin: 0 }}>{m.title}</h3>
//               <p style={{ margin: "0.25rem 0", color: "#555" }}>{m.content}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p style={{ color: "#777" }}>No modules available.</p>
//       )}
//     </section>
//   );
// }
