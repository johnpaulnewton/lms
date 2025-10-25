import { createFileRoute, Link } from '@tanstack/react-router';
import { useApiQuery } from '../../integrations/api';
import { EnrollmentOut } from '@repo/api/enrollments';
import styles from './Enrollments.module.css';

export const Route = createFileRoute('/_app/enrollments')({
  component: EnrollmentsRouteComponent,
});

function EnrollmentsRouteComponent() {
  const query = useApiQuery<Array<EnrollmentOut>>(['enrollments', 'me'], '/enrollments/me');

  const { data, refetch, error, showLoading } = query;

  if (showLoading) return <div style={{ marginLeft: '250px', padding: '2rem' }}>
    Loading...
  </div>;

  if (error) {
    return <div style={{ marginLeft: '250px', padding: '2rem' }}>
      Error: {(error as Error).message}
    </div>;
  }

  if (!data || data.length === 0) {
    return <div style={{ marginLeft: '250px', padding: '2rem' }}>
      No enrollments found.
    </div>;
  }

  return (
    <div className={styles.enrollmentsContainer}>
      <h1 className={styles.pageTitle}>My Courses</h1>

      <div className={styles.enrollmentsHeader}>
        <span>Course</span>
        <span>Term</span>
      </div>

      <ul className={styles.enrollmentsList}>
        {data.map((e) => (
          <li key={e.course.id} className={styles.enrollmentItem}>
            <Link
              to="/courses/$courseId"
              params={{ courseId: e.course.id.toString() }}
              className={styles.courseLink}
            >
              {e.course.title}
            </Link>
            <span>{e.term}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
