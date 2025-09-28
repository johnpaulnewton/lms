/*
  Warnings:

  - Added the required column `gradeValue` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Grade" ADD COLUMN     "gradeValue" DOUBLE PRECISION NOT NULL;
