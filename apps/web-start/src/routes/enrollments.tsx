import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { backendFetcher } from '../integrations/fetcher';
import styles from './Enrollments.module.css';

const CURRENT_USER_ID = 'cmgecorz0000018c7lw0sxk90'; // placeholder

export const Route = createFileRoute('/enrollments')({
  component: EnrollmentsRouteComponent,
});

function EnrollmentsRouteComponent() {
  const { data, refetch, error, isFetching } = useQuery<
    { 
      term: string; 
      course: { id: string; title: string }; 
    }[]
  >({
    queryKey: ['enrollments', CURRENT_USER_ID],
    queryFn: backendFetcher('/enrollments/user/' + CURRENT_USER_ID),
    initialData: [],
  });

  if (isFetching) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
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
