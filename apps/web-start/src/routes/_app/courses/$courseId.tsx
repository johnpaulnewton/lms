import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { backendFetcher } from '../../../integrations/fetcher';
import styles from './Courses.module.css';
import { CourseOut } from '@repo/api';

export const Route = createFileRoute('/_app/courses/$courseId')({
  component: CourseRouteComponent,
});

function CourseRouteComponent() {
  const { courseId } = Route.useParams();

  const { data, refetch, error, isFetching } = useQuery<CourseOut>({
    queryKey: ['courses', courseId],
    queryFn: backendFetcher('/courses/' + courseId),
    initialData: { id: '', title: '', description: '', announcements: [], modules: [], assignments: [] },
  });

  if (isFetching) return <div style={{ marginLeft: '250px', padding: '2rem' }}>
    Loading...
  </div>;

  if (error) return <div style={{ marginLeft: '250px', padding: '2rem' }}>
    Error: {(error as Error).message}
  </div>;

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
