import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={styles.layoutContainer}>
    <aside className={styles.sidebar}>
      <nav>
        <h2>Menu</h2>
        <a href="/profile" className={styles.navLink}>👤 Profile</a>
        <a href="/dashboard" className={styles.navLink}>📊 Dashboard</a>
        <a href="/courses" className={styles.navLink}>📘 Courses</a>
        <a href="/assignments" className={styles.navLink}>📝 Assignments</a>
        <a href="/grades-feedback" className={styles.navLink}>📈 Grades & Feedback</a>
      </nav>
    </aside>

    <main className={styles.mainContent}>{children}</main>
  </body>
</html>
  )
}
