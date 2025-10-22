import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { backendFetcher } from '../../integrations/fetcher';
import styles from './Courses.module.css';
import { CourseOut } from '@repo/api';

export const Route = createFileRoute('/courses/$courseId')({
  component: CourseRouteComponent,
});

function CourseRouteComponent() {
  const { courseId } = Route.useParams();

  const { data, refetch, error, isFetching } = useQuery<CourseOut>({
    queryKey: ['courses', courseId],
    queryFn: backendFetcher('/courses/' + courseId),
    initialData: { id: '', title: '', description: '', announcements: [], modules: [], assignments: [] },
  });

  if (isFetching) return <div>Loading...</div>;

  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className={styles.courseContainer}>
      <h1 className={styles.courseTitle}>{data.title}</h1>
      <p className={styles.courseDescription}>{data.description}</p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📢 Announcements</h2>
        {data.announcements.length > 0 ? (
          <ul className={styles.list}>
            {data.announcements.map((a) => (
              <li key={a.id} className={styles.item}>
                <div className={styles.itemHeader}>
                  <strong>{a.title}</strong>
                  <span className={styles.meta}>
                    Posted {new Date(a.postedDate).toLocaleDateString()} by {a.author.firstName}{' '}
                    {a.author.lastName}
                  </span>
                </div>
                <p className={styles.itemContent}>{a.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No announcements yet.</p>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📘 Modules</h2>
        {data.modules.length > 0 ? (
          <ul className={styles.list}>
            {data.modules.map((m) => (
              <li key={m.id} className={styles.item}>
                <strong>{m.title}</strong>
                <p className={styles.itemContent}>{m.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No modules yet.</p>
        )}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📝 Assignments</h2>
        {data.assignments.length > 0 ? (
          <ul className={styles.list}>
            {data.assignments.map((as) => (
              <li key={as.id} className={styles.item}>
                <strong>{as.title}</strong>
                <p className={styles.meta}>
                  Due {new Date(as.dueDate).toLocaleDateString()}
                </p>
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
