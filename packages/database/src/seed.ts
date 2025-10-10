// <<<<<<< HEAD
import { PrismaClient } from "../generated/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Users
  const usersData = [
    { email: "twilson@udel.edu", firstName: "Tyler", lastName: "Wilson", role: "STUDENT", passwordHash: "password" },
    { email: "jchristof@udel.edu", firstName: "Josh", lastName: "Christof", role: "STUDENT", passwordHash: "password" },
    { email: "jmarlow@udel.edu", firstName: "Josh", lastName: "Marlow", role: "STUDENT", passwordHash: "password" },
    { email: "mboyer@udel.edu", firstName: "Michael", lastName: "Boyer", role: "STUDENT", passwordHash: "password" },
    { email: "rfagioli@udel.edu", firstName: "Richard", lastName: "Fagioli", role: "STUDENT", passwordHash: "password" },
    { email: "bnewton@udel.edu", firstName: "Brandon", lastName: "Newton", role: "STUDENT", passwordHash: "password" },
    { email: "kmalice@udel.edu", firstName: "Kyle", lastName: "Malice", role: "INSTRUCTOR", passwordHash: "password" },
    { email: "pclark@udel.edu", firstName: "Prince", lastName: "Clark", role: "INSTRUCTOR", passwordHash: "password" },
    { email: "nlorang@udel.edu", firstName: "Nick", lastName: "Lorang", role: "ADMIN", passwordHash: "password" }
  ];

  const createdUsers = [];
  for (const user of usersData) {
    createdUsers.push(await prisma.user.create({ data: user }));
  }

  // Courses
  const coursesData = [
    { title: "Intro to Programming", description: "Learn programming fundamentals using Python, including loops, conditionals, and functions." },
    { title: "Web Development", description: "Learn to build interactive websites using HTML, CSS, and JavaScript." },
    { title: "Data Structures & Algorithms", description: "Study how to efficiently organize data and design algorithms to solve complex problems." },
    { title: "Computer Architecture", description: "Explore the design and function of computer systems, including CPUs and memory." },
    { title: "Databases", description: "Understand relational databases, SQL, and data modeling concepts." },
    { title: "Operating Systems", description: "Study OS concepts such as processes, memory management, and file systems." }
  ];

  const createdCourses = [];
  for (const course of coursesData) {
    createdCourses.push(await prisma.course.create({ data: course }));
  }

  // Modules
  const modulesData = [
    { courseId: createdCourses[0]!.id, title: "Variables & Expressions", content: "Learn about variables, data types, and basic expressions in Python." },
    { courseId: createdCourses[0]!.id, title: "Functions & Loops", content: "Understand function definitions, parameters, loops, and control flow." },
    { courseId: createdCourses[1]!.id, title: "HTML Structure", content: "Learn HTML elements, tags, and creating a basic webpage structure." },
    { courseId: createdCourses[1]!.id, title: "CSS Design", content: "Style web pages with CSS, including selectors, layouts, and colors." },
    { courseId: createdCourses[2]!.id, title: "Arrays & Linked Lists", content: "Study basic data structures like arrays and linked lists, their operations and use cases." },
    { courseId: createdCourses[2]!.id, title: "Sorting & Searching Algorithms", content: "Learn common algorithms like bubble sort, merge sort, and binary search." },
    { courseId: createdCourses[3]!.id, title: "CPU & Memory", content: "Understand how the CPU processes instructions and how memory is organized." },
    { courseId: createdCourses[3]!.id, title: "Input/Output & Storage", content: "Learn about I/O devices, storage systems, and basic system performance concepts." },
    { courseId: createdCourses[4]!.id, title: "SQL Basics", content: "Learn to query databases using SELECT, INSERT, UPDATE, and DELETE statements." },
    { courseId: createdCourses[4]!.id, title: "Data Modeling", content: "Understand relational database design, tables, keys, and relationships." },
    { courseId: createdCourses[5]!.id, title: "Processes & Threads", content: "Learn how operating systems manage processes, threads, and scheduling." },
    { courseId: createdCourses[5]!.id, title: "Memory Management", content: "Understand virtual memory, paging, and memory allocation techniques." },
  ];

  for (const module of modulesData) {
    await prisma.module.create({ data: module });
  }

  // Enrollments
  const enrollmentsData = [
    { courseId: createdCourses[0]!.id, userId: createdUsers[0]!.id, term: "Fall 2025" },
    { courseId: createdCourses[0]!.id, userId: createdUsers[1]!.id, term: "Fall 2025" },
    { courseId: createdCourses[0]!.id, userId: createdUsers[2]!.id, term: "Fall 2025" },
    { courseId: createdCourses[0]!.id, userId: createdUsers[6]!.id, term: "Fall 2025" },
    { courseId: createdCourses[1]!.id, userId: createdUsers[0]!.id, term: "Fall 2025" },
    { courseId: createdCourses[1]!.id, userId: createdUsers[1]!.id, term: "Fall 2025" },
    { courseId: createdCourses[1]!.id, userId: createdUsers[2]!.id, term: "Fall 2025" },
    { courseId: createdCourses[1]!.id, userId: createdUsers[6]!.id, term: "Fall 2025" }, 
    { courseId: createdCourses[2]!.id, userId: createdUsers[0]!.id, term: "Fall 2025" },
    { courseId: createdCourses[2]!.id, userId: createdUsers[1]!.id, term: "Fall 2025" },
    { courseId: createdCourses[2]!.id, userId: createdUsers[2]!.id, term: "Fall 2025" },
    { courseId: createdCourses[2]!.id, userId: createdUsers[6]!.id, term: "Fall 2025" },
    { courseId: createdCourses[3]!.id, userId: createdUsers[3]!.id, term: "Fall 2025" },
    { courseId: createdCourses[3]!.id, userId: createdUsers[4]!.id, term: "Fall 2025" },
    { courseId: createdCourses[3]!.id, userId: createdUsers[5]!.id, term: "Fall 2025" },
    { courseId: createdCourses[3]!.id, userId: createdUsers[7]!.id, term: "Fall 2025" },
    { courseId: createdCourses[4]!.id, userId: createdUsers[3]!.id, term: "Fall 2025" },
    { courseId: createdCourses[4]!.id, userId: createdUsers[4]!.id, term: "Fall 2025" },
    { courseId: createdCourses[4]!.id, userId: createdUsers[5]!.id, term: "Fall 2025" },
    { courseId: createdCourses[4]!.id, userId: createdUsers[7]!.id, term: "Fall 2025" },
    { courseId: createdCourses[5]!.id, userId: createdUsers[3]!.id, term: "Fall 2025" },
    { courseId: createdCourses[5]!.id, userId: createdUsers[4]!.id, term: "Fall 2025" },
    { courseId: createdCourses[5]!.id, userId: createdUsers[5]!.id, term: "Fall 2025" },
    { courseId: createdCourses[5]!.id, userId: createdUsers[7]!.id, term: "Fall 2025" },
  ];

  for (const enrollment of enrollmentsData) {
    await prisma.enrollment.create({ data: enrollment });
  }

  // Assignments
  const assignmentsData = [
    { courseId: createdCourses[0]!.id, title: "Variables Assignment", description: "Solve exercises using variables and data types.", dueDate: new Date("2025-10-05") },
    { courseId: createdCourses[0]!.id, title: "Functions & Loops Assignment", description: "Practice writing functions and loops in Python.", dueDate: new Date("2025-10-12") },
    { courseId: createdCourses[1]!.id, title: "HTML Project", description: "Create a basic multi-page website using HTML.", dueDate: new Date("2025-10-07") },
    { courseId: createdCourses[1]!.id, title: "CSS Styling Project", description: "Style your website with CSS, focusing on layout and design.", dueDate: new Date("2025-10-14") },
    { courseId: createdCourses[2]!.id, title: "Linked Lists & Arrays Assignment", description: "Implement basic operations on arrays and linked lists.", dueDate: new Date("2025-10-10") },
    { courseId: createdCourses[2]!.id, title: "Sorting & Searching Assignment", description: "Implement sorting and searching algorithms in Python.", dueDate: new Date("2025-10-17") },
    { courseId: createdCourses[3]!.id, title: "CPU & Memory Assignment", description: "Explain CPU components and memory organization.", dueDate: new Date("2025-10-08") },
    { courseId: createdCourses[3]!.id, title: "I/O & Storage Assignment", description: "Simulate basic input/output and storage processes.", dueDate: new Date("2025-10-15") },
    { courseId: createdCourses[4]!.id, title: "SQL Queries Assignment", description: "Write SQL queries to retrieve, insert, and update data.", dueDate: new Date("2025-10-09") },
    { courseId: createdCourses[4]!.id, title: "Database Design Assignment", description: "Design a relational database schema with tables and relationships.", dueDate: new Date("2025-10-16") },
    { courseId: createdCourses[5]!.id, title: "Processes & Threads Assignment", description: "Simulate process and thread management tasks.", dueDate: new Date("2025-10-11") },
    { courseId: createdCourses[5]!.id, title: "Memory Management Assignment", description: "Explain virtual memory, paging, and memory allocation techniques.", dueDate: new Date("2025-10-18") },
];
  

  const createdAssignments = [];
  for (const assignment of assignmentsData) {
    createdAssignments.push(await prisma.assignment.create({ data: assignment }));
  }

  // Submissions
  const submissionsData = [
    { assignmentId: createdAssignments[0]!.id, studentId: createdUsers[0]!.id, submissionDate: new Date("2025-10-04"), content: "x = 10\nprint(x)" },
    { assignmentId: createdAssignments[0]!.id, studentId: createdUsers[1]!.id, submissionDate: new Date("2025-10-04"), content: "num = 5\nprint(num)" },
    { assignmentId: createdAssignments[1]!.id, studentId: createdUsers[0]!.id, submissionDate: new Date("2025-10-11"), content: "for i in range(5): print(i)" },
    { assignmentId: createdAssignments[1]!.id, studentId: createdUsers[2]!.id, submissionDate: new Date("2025-10-11"), content: "def greet():\n  print('Hello')\ngreet()" },
    { assignmentId: createdAssignments[2]!.id, studentId: createdUsers[0]!.id, submissionDate: new Date("2025-10-06"), content: "<!DOCTYPE html><html><body>Page 1</body></html>" },
    { assignmentId: createdAssignments[2]!.id, studentId: createdUsers[1]!.id, submissionDate: new Date("2025-10-06"), content: "<!DOCTYPE html><html><body>My Site</body></html>" },
    { assignmentId: createdAssignments[3]!.id, studentId: createdUsers[1]!.id, submissionDate: new Date("2025-10-13"), content: "body { background-color: lightblue; }" },
    { assignmentId: createdAssignments[3]!.id, studentId: createdUsers[2]!.id, submissionDate: new Date("2025-10-13"), content: "h1 { color: red; }" },
    { assignmentId: createdAssignments[4]!.id, studentId: createdUsers[0]!.id, submissionDate: new Date("2025-10-09"), content: "arr = [1,2,3]\nlinked_list = Node(1)" },
    { assignmentId: createdAssignments[4]!.id, studentId: createdUsers[2]!.id, submissionDate: new Date("2025-10-09"), content: "my_list = [10,20,30]" },
    { assignmentId: createdAssignments[5]!.id, studentId: createdUsers[1]!.id, submissionDate: new Date("2025-10-16"), content: "def bubble_sort(arr): pass" },
    { assignmentId: createdAssignments[5]!.id, studentId: createdUsers[2]!.id, submissionDate: new Date("2025-10-16"), content: "def binary_search(arr, x): pass" },
    { assignmentId: createdAssignments[6]!.id, studentId: createdUsers[3]!.id, submissionDate: new Date("2025-10-07"), content: "CPU has ALU, registers, and control unit." },
    { assignmentId: createdAssignments[6]!.id, studentId: createdUsers[4]!.id, submissionDate: new Date("2025-10-07"), content: "Memory types: RAM, ROM, cache." },
    { assignmentId: createdAssignments[7]!.id, studentId: createdUsers[3]!.id, submissionDate: new Date("2025-10-14"), content: "I/O devices include keyboard, mouse, and printer." },
    { assignmentId: createdAssignments[7]!.id, studentId: createdUsers[5]!.id, submissionDate: new Date("2025-10-14"), content: "Storage includes HDD and SSD." },
    { assignmentId: createdAssignments[8]!.id, studentId: createdUsers[4]!.id, submissionDate: new Date("2025-10-08"), content: "SELECT * FROM users;" },
    { assignmentId: createdAssignments[8]!.id, studentId: createdUsers[5]!.id, submissionDate: new Date("2025-10-08"), content: "INSERT INTO courses VALUES (1,'CS101');" },
    { assignmentId: createdAssignments[9]!.id, studentId: createdUsers[4]!.id, submissionDate: new Date("2025-10-15"), content: "CREATE TABLE students (id INT, name VARCHAR(50));" },
    { assignmentId: createdAssignments[9]!.id, studentId: createdUsers[5]!.id, submissionDate: new Date("2025-10-15"), content: "PRIMARY KEY(id);" },
    { assignmentId: createdAssignments[10]!.id, studentId: createdUsers[3]!.id, submissionDate: new Date("2025-10-10"), content: "Process A runs, Process B waits." },
    { assignmentId: createdAssignments[10]!.id, studentId: createdUsers[4]!.id, submissionDate: new Date("2025-10-10"), content: "Thread 1 executes, Thread 2 sleeps." },
    { assignmentId: createdAssignments[11]!.id, studentId: createdUsers[3]!.id, submissionDate: new Date("2025-10-17"), content: "Paging allows virtual memory management." },
    { assignmentId: createdAssignments[11]!.id, studentId: createdUsers[5]!.id, submissionDate: new Date("2025-10-17"), content: "Memory allocation uses dynamic allocation techniques." },
];


  const createdSubmissions = [];
  for (const submission of submissionsData) {
    createdSubmissions.push(await prisma.submission.create({ data: submission }));
  }

  // Grades
  const gradesData = [
    { submissionId: createdSubmissions[0]!.id, graderId: createdUsers[6]!.id, gradeValue: 95, feedback: "Good job!", gradedDate: new Date("2025-10-01") },
    { submissionId: createdSubmissions[1]!.id, graderId: createdUsers[6]!.id, gradeValue: 90, feedback: "Correct solution.", gradedDate: new Date("2025-10-01") },
    { submissionId: createdSubmissions[2]!.id, graderId: createdUsers[6]!.id, gradeValue: 100, feedback: "Well done on HTML.", gradedDate: new Date("2025-10-10") },
    { submissionId: createdSubmissions[3]!.id, graderId: createdUsers[6]!.id, gradeValue: 88, feedback: "Functions look good.", gradedDate: new Date("2025-10-12") },
    { submissionId: createdSubmissions[4]!.id, graderId: createdUsers[6]!.id, gradeValue: 92, feedback: "Nice HTML structure.", gradedDate: new Date("2025-10-07") },
    { submissionId: createdSubmissions[5]!.id, graderId: createdUsers[6]!.id, gradeValue: 85, feedback: "CSS needs minor fixes.", gradedDate: new Date("2025-10-14") },
    { submissionId: createdSubmissions[6]!.id, graderId: createdUsers[7]!.id, gradeValue: 90, feedback: "Good use of arrays.", gradedDate: new Date("2025-10-09") },
    { submissionId: createdSubmissions[7]!.id, graderId: createdUsers[7]!.id, gradeValue: 87, feedback: "Sorting implementation works.", gradedDate: new Date("2025-10-16") },
    { submissionId: createdSubmissions[8]!.id, graderId: createdUsers[7]!.id, gradeValue: 93, feedback: "CPU explanation clear.", gradedDate: new Date("2025-10-08") },
    { submissionId: createdSubmissions[9]!.id, graderId: createdUsers[7]!.id, gradeValue: 89, feedback: "Storage simulation okay.", gradedDate: new Date("2025-10-15") },
];

  for (const grade of gradesData) {
    await prisma.grade.create({ data: grade });
  }

  // Announcements
  const announcementsData = [
    { courseId: createdCourses[0]!.id, authorId: createdUsers[6]!.id, title: "Welcome!", content: "Welcome to Intro to Programming. Get ready to code!", postedDate: new Date("2025-09-01") },
    { courseId: createdCourses[0]!.id, authorId: createdUsers[6]!.id, title: "First Assignment", content: "Variables Assignment is now available. Submit by the due date.", postedDate: new Date("2025-09-03") },
    { courseId: createdCourses[1]!.id, authorId: createdUsers[6]!.id, title: "Project Reminder", content: "Submit your HTML project on time.", postedDate: new Date("2025-09-05") },
    { courseId: createdCourses[1]!.id, authorId: createdUsers[6]!.id, title: "CSS Assignment Released", content: "CSS Styling Project is now open. Check the modules for instructions.", postedDate: new Date("2025-09-08") },
    { courseId: createdCourses[2]!.id, authorId: createdUsers[6]!.id, title: "Data Structures Overview", content: "Introduction to arrays and linked lists posted in modules.", postedDate: new Date("2025-09-10") },
    { courseId: createdCourses[2]!.id, authorId: createdUsers[6]!.id, title: "Algorithms Assignment", content: "Sorting & Searching Assignment is available. Submit by due date.", postedDate: new Date("2025-09-12") },
    { courseId: createdCourses[3]!.id, authorId: createdUsers[7]!.id, title: "Welcome to Computer Architecture", content: "Explore CPU and memory basics through modules.", postedDate: new Date("2025-09-01") },
    { courseId: createdCourses[3]!.id, authorId: createdUsers[7]!.id, title: "I/O & Storage Assignment", content: "Assignment on I/O and storage is posted. Submit on time.", postedDate: new Date("2025-09-05") },
    { courseId: createdCourses[4]!.id, authorId: createdUsers[7]!.id, title: "Databases Course Kickoff", content: "Learn SQL basics and data modeling. Check modules for exercises.", postedDate: new Date("2025-09-02") },
    { courseId: createdCourses[4]!.id, authorId: createdUsers[7]!.id, title: "Database Design Assignment", content: "Project is now open. Design your schema carefully.", postedDate: new Date("2025-09-07") },
    { courseId: createdCourses[5]!.id, authorId: createdUsers[7]!.id, title: "Operating Systems Introduction", content: "Modules on processes and memory management are available.", postedDate: new Date("2025-09-01") },
    { courseId: createdCourses[5]!.id, authorId: createdUsers[7]!.id, title: "OS Assignments Released", content: "Submit Processes & Threads and Memory Management assignments on time.", postedDate: new Date("2025-09-06") },
];

  for (const announcement of announcementsData) {
    await prisma.announcement.create({ data: announcement });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
// =======
// // seed.ts — Fake data generator for your Prisma schema
// // Run with: npx ts-node seed.ts (after building the Prisma Client)
// // Requires: npm i @faker-js/faker ts-node typescript

// import { faker } from '@faker-js/faker';
// import { prisma } from './client';
// import { PrismaClient, RoleType, Prisma } from '../generated/client';

// /** Options to control how much data to generate */
// export type SeedOptions = {
//   users: number;
//   instructors: number; // number of instructors to mark among users
//   coursesPerInstructor: number;
//   studentsPerCourse: number;
//   tasPerCourse: number;
//   groupsPerCourse: number;
//   assignmentsPerCourse: number;
//   submissionsPerStudentPerAssignment: number; // usually 1
//   seed?: number;
// };

// /** Default settings */
// export const defaultOptions: SeedOptions = {
//   users: 60,
//   instructors: 8,
//   coursesPerInstructor: 2,
//   studentsPerCourse: 20,
//   tasPerCourse: 2,
//   groupsPerCourse: 3,
//   assignmentsPerCourse: 5,
//   submissionsPerStudentPerAssignment: 1,
//   seed: 42,
// };

// const PROVIDERS = ['google', 'github', 'passwordless'] as const;

// type Created = {
//   users: Prisma.UserGetPayload<{}>[];
//   instructors: Prisma.UserGetPayload<{}>[];
//   students: Prisma.UserGetPayload<{}>[];
//   tas: Prisma.UserGetPayload<{}>[];
//   courses: Prisma.CourseGetPayload<{}>[];
//   groups: Prisma.AssignmentGroupGetPayload<{}>[];
//   assignments: Prisma.AssignmentGetPayload<{}>[];
// };

// /** Utility helpers */
// function pickMany<T>(arr: T[], n: number): T[] {
//   if (n <= 0) return [];
//   const copy = [...arr];
//   faker.helpers.shuffle(copy);
//   return copy.slice(0, Math.min(n, copy.length));
// }

// function takeUniqueEmails(count: number) {
//   const emails = new Set<string>();
//   const out: string[] = [];
//   while (out.length < count) {
//     const e = faker.internet
//       .email({
//         firstName: faker.person.firstName().toLowerCase(),
//         lastName: faker.person.lastName().toLowerCase(),
//         provider: 'example.com',
//       })
//       .toLowerCase();
//     if (!emails.has(e)) {
//       emails.add(e);
//       out.push(e);
//     }
//   }
//   return out;
// }

// /** Reset tables (idempotent) */
// export async function resetDatabase() {
//   await prisma.$transaction([
//     prisma.submission.deleteMany({}),
//     prisma.role.deleteMany({}),
//     prisma.authentication.deleteMany({}),
//     prisma.assignmentGroup.deleteMany({}),
//     prisma.assignment.deleteMany({}),
//     prisma.course.deleteMany({}),
//     prisma.user.deleteMany({}),
//   ]);
// }

// /** Create Users + optional authentications */
// export async function createUsers(count: number) {
//   const emails = takeUniqueEmails(count);
//   const users = await Promise.all(
//     emails.map((email, i) =>
//       prisma.user.create({
//         data: {
//           name: faker.person.fullName(),
//           email: faker.datatype.boolean(0.9) ? email : null, // keep some null to respect optional + unique
//           emailVerified: faker.datatype.boolean(0.6)
//             ? faker.date.recent({ days: 90 })
//             : null,
//         },
//       }),
//     ),
//   );

//   // add 0–2 authentications per user
//   await Promise.all(
//     users.flatMap((u) => {
//       const n = faker.number.int({ min: 0, max: 2 });
//       return Array.from({ length: n }).map(() =>
//         prisma.authentication.create({
//           data: {
//             userId: u.id,
//             provider: faker.helpers.arrayElement(PROVIDERS),
//             providerId: faker.string.uuid(),
//           },
//         }),
//       );
//     }),
//   );

//   return users;
// }

// /** Create Courses owned by instructors */
// export async function createCourses(
//   instructors: Prisma.UserGetPayload<{}>[],
//   coursesPerInstructor: number,
// ) {
//   const courses: Prisma.CourseGetPayload<{}>[] = [];
//   for (const owner of instructors) {
//     for (let i = 0; i < coursesPerInstructor; i++) {
//       const course = await prisma.course.create({
//         data: {
//           ownerId: owner.id,
//           name: `${faker.company.catchPhrase()} ${faker.number.int({ min: 100, max: 499 })}`,
//           description: faker.lorem.sentence(),
//           // give owner an instructor role in their own course
//           roles: {
//             create: {
//               userId: owner.id,
//               role: RoleType.INSTRUCTOR,
//             },
//           },
//         },
//       });
//       courses.push(course);
//     }
//   }
//   return courses;
// }

// /** Enroll users into courses via Role records */
// export async function addCourseMemberships(params: {
//   courses: Prisma.CourseGetPayload<{}>[];
//   students: Prisma.UserGetPayload<{}>[];
//   tas: Prisma.UserGetPayload<{}>[];
//   studentsPerCourse: number;
//   tasPerCourse: number;
// }) {
//   const memberships: Prisma.RoleGetPayload<{}>[] = [];
//   for (const course of params.courses) {
//     const pickedStudents = pickMany(params.students, params.studentsPerCourse);
//     const pickedTAs = pickMany(params.tas, params.tasPerCourse);

//     await prisma.$transaction([
//       // students
//       prisma.role.createMany({
//         data: pickedStudents.map((u) => ({
//           userId: u.id,
//           courseId: course.id,
//           role: RoleType.STUDENT,
//         })),
//         skipDuplicates: true,
//       }),
//       // TAs
//       prisma.role.createMany({
//         data: pickedTAs.map((u) => ({
//           userId: u.id,
//           courseId: course.id,
//           role: RoleType.TA,
//         })),
//         skipDuplicates: true,
//       }),
//     ]);
//   }
//   return memberships;
// }

// /** Create Assignment Groups per course */
// export async function createAssignmentGroups(
//   courses: Prisma.CourseGetPayload<{}>[],
//   groupsPerCourse: number,
// ) {
//   const groups: Prisma.AssignmentGroupGetPayload<{}>[] = [];
//   for (const c of courses) {
//     for (let i = 0; i < groupsPerCourse; i++) {
//       const g = await prisma.assignmentGroup.create({
//         data: {
//           ownerId: c.ownerId,
//           courseId: c.id,
//           name: `${faker.helpers.arrayElement(['Homework', 'Projects', 'Labs', 'Quizzes'])} ${i + 1}`,
//           description: faker.lorem.sentence(),
//         },
//       });
//       groups.push(g);
//     }
//   }
//   return groups;
// }

// /** Create Assignments per course and randomly connect to groups */
// export async function createAssignments(
//   courses: Prisma.CourseGetPayload<{}>[],
//   groupsByCourse: Map<string, Prisma.AssignmentGroupGetPayload<{}>[]>,
//   assignmentsPerCourse: number,
// ) {
//   const assignments: Prisma.AssignmentGetPayload<{}>[] = [];
//   for (const c of courses) {
//     for (let i = 0; i < assignmentsPerCourse; i++) {
//       const a = await prisma.assignment.create({
//         data: {
//           ownerId: c.ownerId,
//           courseId: c.id,
//           title: `${faker.hacker.verb()} ${faker.hacker.noun()} #${i + 1}`,
//           description: faker.lorem.paragraph(),
//         },
//       });
//       assignments.push(a);

//       // randomly connect the assignment to 1–2 groups within the same course
//       const courseGroups = groupsByCourse.get(c.id) ?? [];
//       const selected = pickMany(
//         courseGroups,
//         faker.number.int({
//           min: 1,
//           max: Math.min(2, courseGroups.length || 1),
//         }),
//       );
//       if (selected.length) {
//         await prisma.assignment.update({
//           where: { id: a.id },
//           data: {
//             groups: {
//               connect: selected.map((g) => ({ id: g.id })),
//             },
//           },
//         });
//       }
//     }
//   }
//   return assignments;
// }

// /** Create Submissions for each student on each assignment within a course */
// export async function createSubmissions(params: {
//   assignments: Prisma.AssignmentGetPayload<{}>[];
//   courses: Prisma.CourseGetPayload<{}>[];
//   submissionsPerStudentPerAssignment: number;
// }) {
//   // Build course->student roster from Role table
//   const roles = await prisma.role.findMany({
//     where: { role: RoleType.STUDENT },
//   });
//   const studentsByCourse = new Map<string, string[]>(); // courseId -> userIds
//   for (const r of roles) {
//     const arr = studentsByCourse.get(r.courseId) || [];
//     arr.push(r.userId);
//     studentsByCourse.set(r.courseId, arr);
//   }

//   for (const a of params.assignments) {
//     const roster = studentsByCourse.get(a.courseId) || [];
//     for (const studentId of roster) {
//       for (let s = 0; s < params.submissionsPerStudentPerAssignment; s++) {
//         await prisma.submission.create({
//           data: {
//             assignmentId: a.id,
//             userId: studentId,
//             courseId: a.courseId,
//             content: faker.lorem.paragraphs({ min: 1, max: 3 }),
//             grade: faker.helpers.arrayElement([
//               'A',
//               'A-',
//               'B+',
//               'B',
//               'B-',
//               'C+',
//               'C',
//               'IP',
//             ]),
//           },
//         });
//       }
//     }
//   }
// }

// /** Top-level orchestrator */
// export async function generateFakeData(opts: Partial<SeedOptions> = {}) {
//   const options = { ...defaultOptions, ...opts };
//   if (options.seed !== undefined) faker.seed(options.seed);

//   // 1) Users
//   const users = await createUsers(options.users);
//   console.log(`Created ${users.length} users`);

//   // choose instructors, TAs, students partitions
//   const instructors = pickMany(users, options.instructors);
//   const remaining = users.filter(
//     (u) => !instructors.some((i) => i.id === u.id),
//   );
//   const tas = pickMany(
//     remaining,
//     Math.max(5, Math.floor(remaining.length * 0.15)),
//   );
//   const students = remaining.filter((u) => !tas.some((t) => t.id === u.id));

//   // 2) Courses (owned by instructors)
//   const courses = await createCourses(
//     instructors,
//     options.coursesPerInstructor,
//   );
//   console.log(`Created ${courses.length} courses`);

//   // 3) Memberships (students & TAs per course)
//   await addCourseMemberships({
//     courses,
//     students,
//     tas,
//     studentsPerCourse: options.studentsPerCourse,
//     tasPerCourse: options.tasPerCourse,
//   });
//   console.log(`Enrolled students and TAs into courses`);

//   // 4) Assignment Groups per course
//   const groups = await createAssignmentGroups(courses, options.groupsPerCourse);
//   const groupsByCourse = new Map<
//     string,
//     Prisma.AssignmentGroupGetPayload<{}>[]
//   >();
//   for (const g of groups) {
//     const arr = groupsByCourse.get(g.courseId) || [];
//     arr.push(g);
//     groupsByCourse.set(g.courseId, arr);
//   }
//   console.log(`Created ${groups.length} assignment groups`);

//   // 5) Assignments per course (+ connect to groups)
//   const assignments = await createAssignments(
//     courses,
//     groupsByCourse,
//     options.assignmentsPerCourse,
//   );
//   console.log(`Created ${assignments.length} assignments`);

//   // 6) Submissions for each student per assignment
//   await createSubmissions({
//     assignments,
//     courses,
//     submissionsPerStudentPerAssignment:
//       options.submissionsPerStudentPerAssignment,
//   });
//   console.log(`Created submissions for students on assignments`);

//   const summary: Created = {
//     users,
//     instructors,
//     students,
//     tas,
//     courses,
//     groups,
//     assignments,
//   };

//   return summary;
// }

// /** If run directly, reset DB and generate with defaults */
// if (require.main === module) {
//   (async () => {
//     console.time('seed');
//     try {
//       await resetDatabase();
//       const result = await generateFakeData();
//       console.log('Created users:', result.users.length);
//       console.log('Courses:', result.courses.length);
//       console.log('Assignments:', result.assignments.length);
//       console.log('Groups:', result.groups.length);
//     } catch (err) {
//       console.error(err);
//       process.exitCode = 1;
//     } finally {
//       await prisma.$disconnect();
//       console.timeEnd('seed');
//     }
//   })();
// }
// >>>>>>> upstream/main
