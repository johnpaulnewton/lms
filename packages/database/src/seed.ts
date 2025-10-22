import { PrismaClient, Role, Prisma } from '../generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Users
  const usersData = [
    { email: "twilson@udel.edu", name: "Tyler Wilson", role: Role.STUDENT },
    { email: "jchristof@udel.edu", name: "Josh Christof", role: Role.STUDENT },
    { email: "jmarlow@udel.edu", name: "Josh Marlow", role: Role.STUDENT },
    { email: "mboyer@udel.edu", name: "Michael Boyer", role: Role.STUDENT },
    { email: "rfagioli@udel.edu", name: "Richard Fagioli", role: Role.STUDENT },
    { email: "bnewton@udel.edu", name: "Brandon Newton", role: Role.STUDENT },
    { email: "kmalice@udel.edu", name: "Kyle Malice", role: Role.INSTRUCTOR },
    { email: "pclark@udel.edu", name: "Prince Clark", role: Role.INSTRUCTOR },
    { email: "nlorang@udel.edu", name: "Nick Lorang", role: Role.ADMIN },
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

  // Authentications
  const authenticationsData = [
    { userId: createdUsers[0]!.id, provider: "google", providerId: "google-12345" },
    { userId: createdUsers[1]!.id, provider: "github", providerId: "github-67890" },
    { userId: createdUsers[2]!.id, provider: "google", providerId: "google-23456" },
    { userId: createdUsers[3]!.id, provider: "facebook", providerId: "facebook-34567" },
    { userId: createdUsers[4]!.id, provider: "google", providerId: "google-45678" },
    { userId: createdUsers[5]!.id, provider: "github", providerId: "github-56789" },
    { userId: createdUsers[6]!.id, provider: "google", providerId: "google-67890" },
    { userId: createdUsers[7]!.id, provider: "facebook", providerId: "facebook-78901" },
    { userId: createdUsers[8]!.id, provider: "google", providerId: "google-89012" }
  ];

  for (const auth of authenticationsData) {
    await prisma.authentication.create({ data: auth });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());