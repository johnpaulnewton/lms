import { prisma } from "./client";

const users = [
  { id: "user1", email: "alice@example.com", firstName: "Alice", lastName: "Wonderland", role: "USER", passwordHash: "hashed_pw1" },
  { id: "user2", email: "bob@example.com", firstName: "Bob", lastName: "Builder", role: "ADMIN", passwordHash: "hashed_pw2" },
  { id: "user3", email: "carol@example.com", firstName: "Carol", lastName: "Danvers", role: "USER", passwordHash: "hashed_pw3" },
  { id: "user4", email: "dave@example.com", firstName: "Dave", lastName: "Grohl", role: "USER", passwordHash: "hashed_pw4" },
];

const courses = [
  { id: "course1", title: "Intro to CS", description: "Learn the basics of programming" },
  { id: "course2", title: "Advanced Databases", description: "Explore relational and NoSQL systems" },
  { id: "course3", title: "Web Development", description: "Frontend and backend web development" },
];

const modules = [
  { id: "module1", courseId: "course1", title: "Variables & Types", content: "Intro to variables, types, and operators." },
  { id: "module2", courseId: "course1", title: "Control Flow", content: "If statements, loops, and functions." },
  { id: "module3", courseId: "course2", title: "Indexes & Performance", content: "Database indexing strategies." },
  { id: "module4", courseId: "course3", title: "HTML & CSS", content: "Basics of HTML structure and styling." },
  { id: "module5", courseId: "course3", title: "Node.js Backend", content: "Building server-side applications." },
];

const enrollments = [
  { id: "enroll1", courseId: "course1", userId: "user1", term: "Fall 2025", role: "STUDENT" },
  { id: "enroll2", courseId: "course1", userId: "user3", term: "Fall 2025", role: "STUDENT" },
  { id: "enroll3", courseId: "course2", userId: "user2", term: "Fall 2025", role: "INSTRUCTOR" },
  { id: "enroll4", courseId: "course3", userId: "user4", term: "Fall 2025", role: "STUDENT" },
  { id: "enroll5", courseId: "course3", userId: "user2", term: "Fall 2025", role: "INSTRUCTOR" },
];

const assignments = [
  { id: "assign1", courseId: "course1", title: "Hello World Program", description: "Write your first program", dueDate: new Date("2025-10-01") },
  { id: "assign2", courseId: "course1", title: "Loops Practice", description: "Write programs using loops", dueDate: new Date("2025-10-10") },
  { id: "assign3", courseId: "course2", title: "Database Project", description: "Design a schema for a sample app", dueDate: new Date("2025-11-15") },
  { id: "assign4", courseId: "course3", title: "Build a Webpage", description: "Create a simple HTML/CSS page", dueDate: new Date("2025-10-20") },
];

const submissions = [
  { id: "sub1", assignmentId: "assign1", userId: "user1", submissionDate: new Date("2025-09-15"), content: "console.log('Hello World');" },
  { id: "sub2", assignmentId: "assign1", userId: "user3", submissionDate: new Date("2025-09-16"), content: "print('Hello World')" },
  { id: "sub3", assignmentId: "assign2", userId: "user1", submissionDate: new Date("2025-10-08"), content: "for i in range(5): print(i)" },
  { id: "sub4", assignmentId: "assign4", userId: "user4", submissionDate: new Date("2025-10-18"), content: "<h1>My Webpage</h1>" },
];

const grades = [
  { id: "grade1", submissionId: "sub1", graderId: "user2", feedback: "Well done!", gradedDate: new Date("2025-09-20") },
  { id: "grade2", submissionId: "sub2", graderId: "user2", feedback: "Good effort, minor issues", gradedDate: new Date("2025-09-21") },
  { id: "grade3", submissionId: "sub4", graderId: "user2", feedback: "Nice layout!", gradedDate: new Date("2025-10-19") },
];

const announcements = [
  { id: "ann1", courseId: "course1", authorId: "user2", title: "Welcome!", content: "Excited to start the course.", postedDate: new Date("2025-09-01") },
  { id: "ann2", courseId: "course3", authorId: "user2", title: "Project Reminder", content: "Webpage project due soon.", postedDate: new Date("2025-10-10") },
];

async function main() {
  await Promise.all(users.map(u => prisma.user.upsert({ where: { email: u.email }, update: u, create: u })));
  await Promise.all(courses.map(c => prisma.course.upsert({ where: { id: c.id }, update: c, create: c })));
  await Promise.all(modules.map(m => prisma.module.upsert({ where: { id: m.id }, update: m, create: m })));
  await Promise.all(enrollments.map(e => prisma.enrollment.upsert({ where: { id: e.id }, update: e, create: e })));
  await Promise.all(assignments.map(a => prisma.assignment.upsert({ where: { id: a.id }, update: a, create: a })));
  await Promise.all(submissions.map(s => prisma.submission.upsert({ where: { id: s.id }, update: s, create: s })));
  await Promise.all(grades.map(g => prisma.grade.upsert({ where: { id: g.id }, update: g, create: g })));
  await Promise.all(announcements.map(a => prisma.announcement.upsert({ where: { id: a.id }, update: a, create: a })));

  console.log("database seeded with more realistic data!");
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });

