import { Link } from '@tanstack/react-router';
import LogoutButton from './LogoutButton';
import styles from './Sidebar.module.css';

interface SidebarProps {
  role?: 'ADMIN' | 'INSTRUCTOR' | 'STUDENT';
}

export default function Sidebar({ role }: SidebarProps) {
  if (role === 'ADMIN') {
    return (
      <aside className={styles.sidebar}>
        <nav>
          <h2>Admin Menu</h2>
          <Link to="/admin/users" className={styles.navLink}>
            Manage Users
          </Link>
          <Link to="/admin/courses" className={styles.navLink}>
            Manage Courses
          </Link>
        </nav>
        <LogoutButton />
      </aside>
    );
  }

  return (
    <aside className={styles.sidebar}>
      <nav>
        <h2>Menu</h2>
        <Link to="/profile" className={styles.navLink}>
          👤 Profile
        </Link>
        <Link to="/dashboard" className={styles.navLink}>
          📊 Dashboard
        </Link>
        <Link to="/enrollments" className={styles.navLink}>
          📚 Courses
        </Link>
        <Link to="/assignments" className={styles.navLink}>
          📝 Assignments
        </Link>
        <Link to="/grades" className={styles.navLink}>
          📈 Grades & Feedback
        </Link>
      </nav>
      <LogoutButton />
    </aside>
  );
}