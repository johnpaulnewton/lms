import { createFileRoute } from '@tanstack/react-router'
import React, { useState, useRef } from 'react';
import { CourseCreateIn, CourseUpdateIn, CourseOut } from '@repo/api/courses';
import { useApiMutation } from '../../../integrations/api';
import { backendFetcher } from '../../../integrations/fetcher';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../../hooks/useAuth';
import styles from './Courses.module.css';

export const Route = createFileRoute('/_app/admin/courses')({
    component: RouteComponent,
})

function RouteComponent() {
    const formRef = useRef<HTMLDivElement>(null);

    // Check if user is admin
    const { user, isLoading } = useAuth();

    if (isLoading) return <div style={{ marginLeft: '250px', padding: '2rem' }}>
        Loading...
    </div>;

    if (!user) {
        return <div style={{ marginLeft: '250px', padding: '2rem' }}>
            No user found
        </div>;
    }

    if (user.role !== 'ADMIN') {
        return <div style={{ marginLeft: '250px', padding: '2rem' }}>
            Unauthorized
        </div>;
    }

    const [newTitle, setNewTitle] = React.useState('');
    const [newDescription, setNewDescription] = React.useState('');
    const [editingCourseId, setEditingCourseId] = useState<string | null>(null);

    // Create new course
    const createCourse = useApiMutation<CourseCreateIn, CourseOut>({
        endpoint: (variable) => ({
            path: '/courses',
            method: 'POST',
        }),
        invalidateKeys: [['courses']],
    })


    //Update existing course
    const updateCourse = useApiMutation<CourseUpdateIn & { id: string }, CourseOut>({
        endpoint: (variable) => ({
            path: `/courses/${variable.id}`,
            method: 'PATCH',
        }),
        invalidateKeys: [['courses']],
    })

    //Delete existing course
    const deleteCourse = useApiMutation<{ id: string }, void>({
        endpoint: (variable) => ({
            path: `/courses/${variable.id}`,
            method: 'DELETE',
        }),
        invalidateKeys: [['courses']],
    })


    // Fetch all courses
    const { data, refetch, error, isFetching } = useQuery<CourseOut[]
    >({
        queryKey: ['courses'],
        queryFn: backendFetcher('/courses'),
        initialData: [],
    });

    if (isFetching) return <div style={{ marginLeft: '250px', padding: '2rem' }}>
        Loading...
    </div>;

    if (error) {
        return <div style={{ marginLeft: '250px', padding: '2rem' }}>
            Error: {(error as Error).message}
        </div>;
    }

    return (
        <div ref={formRef} className={styles.adminContainer}>
            <header className={styles.adminHeader}>
                <h1 className={styles.adminTitle}>
                    {editingCourseId ? 'Edit Course' : 'Create a New Course'}
                </h1>
            </header>

            <div className={styles.formContainer}>
                <input
                    type="text"
                    placeholder="Course Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className={styles.formInput}
                />
                <input
                    type="text"
                    placeholder="Course Description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className={styles.formInput}
                />
                <div className={styles.formActions}>
                    <button
                        type="button"
                        className={styles.btnPrimary}
                        onClick={async () => {
                            if (editingCourseId) {
                                try {
                                    await updateCourse.mutateAsync({
                                        id: editingCourseId,
                                        title: newTitle,
                                        description: newDescription,
                                    });
                                    setEditingCourseId(null);
                                } catch (err) {
                                    console.error(err);
                                    alert('Failed to update course');
                                }
                            } else {
                                try {
                                    await createCourse.mutateAsync({
                                        title: newTitle,
                                        description: newDescription,
                                    });
                                } catch (err) {
                                    console.error(err);
                                    alert('Failed to create course');
                                }
                            }
                            setNewTitle('');
                            setNewDescription('');
                        }}
                    >
                        {editingCourseId ? 'Save Changes' : 'Create Course'}
                    </button>

                    {editingCourseId && (
                        <button
                            type="button"
                            className={styles.btnSecondary}
                            onClick={() => {
                                setEditingCourseId(null);
                                setNewTitle('');
                                setNewDescription('');
                            }}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>

            <hr className={styles.divider} />

            <h2 className={styles.sectionTitle}>All Courses</h2>
            <ul className={styles.coursesList}>
                {data.map((course) => (
                    <li key={course.id} className={styles.courseItem}>
                        <div className={styles.courseInfo}>
                            <div className={styles.courseInfoRow}>
                                <span className={styles.courseInfoLabel}>Title:</span>
                                <span className={styles.courseInfoValue}>{course.title}</span>
                            </div>
                            <div className={styles.courseInfoRow}>
                                <span className={styles.courseInfoLabel}>Description:</span>
                                <span className={styles.courseInfoValue}>{course.description}</span>
                            </div>
                        </div>

                        <div className={styles.courseActions}>
                            <button
                                type="button"
                                className={styles.btnEdit}
                                onClick={() => {
                                    setEditingCourseId(course.id);
                                    setNewTitle(course.title);
                                    setNewDescription(course.description);

                                    // Scroll to form
                                    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                
                                }}
                            >
                                Edit
                            </button>

                            <button
                                type="button"
                                className={styles.btnDelete}
                                onClick={async () => {
                                    try {
                                        await deleteCourse.mutateAsync({ id: course.id });
                                    } catch (err) {
                                        console.error(err);
                                        alert('Failed to delete course');
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}

