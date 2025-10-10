import { Link } from "@tanstack/react-router";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <h2>Menu</h2>
        <Link to="/profile" className={styles.navLink}>👤 Profile</Link>
        <Link to="/dashboard" className={styles.navLink}>📊 Dashboard</Link>
        <Link to="/enrollments" className={styles.navLink}>📘 Courses</Link>
        <Link to="/assignments" className={styles.navLink}>📝 Assignments</Link>
        <Link to="/grades" className={styles.navLink}>📈 Grades & Feedback</Link>
      </nav>
    </aside>
  );
}