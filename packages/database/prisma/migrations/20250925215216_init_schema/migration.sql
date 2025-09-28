/*
  Warnings:

  - You are about to drop the column `role` on the `Enrollment` table. All the data in the column will be lost.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('STUDENT', 'INSTRUCTOR', 'ADMIN');

-- AlterTable
ALTER TABLE "public"."Enrollment" DROP COLUMN "role";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "role",
ADD COLUMN     "role" "public"."Role" NOT NULL;

-- DropEnum
DROP TYPE "public"."EnrollmentRole";

-- DropEnum
DROP TYPE "public"."UserRole";
