export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div style={{ display: "flex", height: "100vh" }}>
          <aside
            style={{
              width: "150px",
              background: "#eee",
              padding: "1rem",
            }}
          >
            <nav>
              <a href="/profile">Profile</a><br />
              <a href="/dashboard">Dashboard</a><br />
              <a href="/courses">Courses</a><br />
              <a href="/assignments">Assignments</a><br />
              <a href="/grades-feedback">Grades & Feedback</a>
            </nav>
          </aside>
          
          <main style={{ flex: 1, padding: "1rem" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
