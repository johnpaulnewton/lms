import { PrismaClient } from "../generated/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Users
  const usersData = [
    { email: "twilson@udel.edu", firstName: "Tyler", lastName: "Wilson", role: "STUDENT", passwordHash: "password" },
    { email: "jchristof@udel.edu", firstName: "Josh", lastName: "Christof", role: "STUDENT", passwordHash: "password" },
    { email: "jmarlow@udel.edu", firstName: "Josh", lastName: "Marlow", role: "STUDENT", passwordHash: "password" },
    { email: "kmalice@udel.edu", firstName: "Kyle", lastName: "Malice", role: "ADMIN", passwordHash: "password" },
    { email: "pclark@udel.edu", firstName: "Prince", lastName: "Clark", role: "INSTRUCTOR", passwordHash: "password" },
  ];

  const createdUsers = [];
  for (const user of usersData) {
    createdUsers.push(await prisma.user.create({ data: user }));
  }

  // Courses
  const coursesData = [
    { title: "Intro to Programming", description: "Learn basic programming concepts." },
    { title: "Web Development", description: "HTML, CSS, JavaScript, and more." },
  ];

  const createdCourses = [];
  for (const course of coursesData) {
    createdCourses.push(await prisma.course.create({ data: course }));
  }

  // Modules
  const modulesData = [
    { courseId: createdCourses[0]!.id, title: "Variables and Types", content: "Introduction to variables, types, and expressions." },
    { courseId: createdCourses[0]!.id, title: "Control Flow", content: "If statements, loops, and logical expressions." },
    { courseId: createdCourses[1]!.id, title: "HTML Basics", content: "Elements, tags, and document structure." },
    { courseId: createdCourses[1]!.id, title: "CSS Styling", content: "Selectors, properties, and layouts." },
  ];

  for (const module of modulesData) {
    await prisma.module.create({ data: module });
  }

  // Enrollments
  const enrollmentsData = [
    { courseId: createdCourses[0]!.id, userId: createdUsers[0]!.id, term: "Fall 2025" },
    { courseId: createdCourses[0]!.id, userId: createdUsers[2]!.id, term: "Fall 2025" },
    { courseId: createdCourses[0]!.id, userId: createdUsers[3]!.id, term: "Fall 2025" },
    { courseId: createdCourses[1]!.id, userId: createdUsers[1]!.id, term: "Fall 2025" },
    { courseId: createdCourses[1]!.id, userId: createdUsers[2]!.id, term: "Fall 2025" },
    { courseId: createdCourses[1]!.id, userId: createdUsers[4]!.id, term: "Fall 2025" },
  ];

  for (const enrollment of enrollmentsData) {
    await prisma.enrollment.create({ data: enrollment });
  }

  // Assignments
  const assignmentsData = [
    { courseId: createdCourses[0]!.id, title: "Variables Assignment", description: "Solve problems using variables.", dueDate: new Date("2025-10-01") },
    { courseId: createdCourses[0]!.id, title: "Loops Assignment", description: "Practice loops and conditionals.", dueDate: new Date("2025-10-15") },
    { courseId: createdCourses[1]!.id, title: "HTML Project", description: "Build a basic web page.", dueDate: new Date("2025-10-10") },
  ];

  const createdAssignments = [];
  for (const assignment of assignmentsData) {
    createdAssignments.push(await prisma.assignment.create({ data: assignment }));
  }

  // Submissions
  const submissionsData = [
    { assignmentId: createdAssignments[0]!.id, studentId: createdUsers[2]!.id, submissionDate: new Date("2025-09-30"), content: "let x = 5; console.log(x);" },
    { assignmentId: createdAssignments[0]!.id, studentId: createdUsers[3]!.id, submissionDate: new Date("2025-09-30"), content: "var y = 10; console.log(y);" },
    { assignmentId: createdAssignments[2]!.id, studentId: createdUsers[2]!.id, submissionDate: new Date("2025-10-09"), content: "<!DOCTYPE html><html><body>Hello World</body></html>" },
  ];

  const createdSubmissions = [];
  for (const submission of submissionsData) {
    createdSubmissions.push(await prisma.submission.create({ data: submission }));
  }

  // Grades
  const gradesData = [
    { submissionId: createdSubmissions[0]!.id, graderId: createdUsers[4]!.id, gradeValue: 95, feedback: "Good job!", gradedDate: new Date("2025-10-01") },
    { submissionId: createdSubmissions[1]!.id, graderId: createdUsers[4]!.id, gradeValue: 90, feedback: "Correct solution.", gradedDate: new Date("2025-10-01") },
    { submissionId: createdSubmissions[2]!.id, graderId: createdUsers[3]!.id, gradeValue: 100, feedback: "Well done on HTML.", gradedDate: new Date("2025-10-10") },
  ];

  for (const grade of gradesData) {
    await prisma.grade.create({ data: grade });
  }

  // Announcements
  const announcementsData = [
    { courseId: createdCourses[0]!.id, authorId: createdUsers[4]!.id, title: "Welcome!", content: "Welcome to Intro to Programming.", postedDate: new Date("2025-09-01") },
    { courseId: createdCourses[1]!.id, authorId: createdUsers[4]!.id, title: "Project Reminder", content: "Submit your HTML project on time.", postedDate: new Date("2025-09-05") },
  ];

  for (const announcement of announcementsData) {
    await prisma.announcement.create({ data: announcement });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
