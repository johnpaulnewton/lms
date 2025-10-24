import { createFileRoute } from '@tanstack/react-router'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { CourseCreateIn, CourseUpdateIn, CourseOut } from '@repo/api/courses';
import { backendFetcher, mutateBackend } from '../integrations/fetcher';
import { useQuery } from '@tanstack/react-query';
import styles from './Admin.module.css';

export const Route = createFileRoute('/admin')({
    component: RouteComponent,
})

function RouteComponent() {

    const [newTitle, setNewTitle] = React.useState('');
    const [newDescription, setNewDescription] = React.useState('');
    const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
    const queryClient = useQueryClient();

    // Create new course
    const createMutation = useMutation({
        mutationFn: (newCourse: CourseCreateIn) => {
            return mutateBackend<CourseCreateIn, CourseOut>('/courses', 'POST', newCourse);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['courses'] });
        },
    });

    //Update existing course
    const updateMutation = useMutation({
        mutationFn: (updatedCourse: CourseUpdateIn) => {
            return mutateBackend<Partial<CourseOut>, CourseOut>("/courses/" + editingCourseId, "PUT", updatedCourse);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['courses'] });
            setEditingCourseId(null);
        },
    });

    //Delete existing course
    const deleteMutation = useMutation({
        mutationFn: (courseId: string) => {
            return mutateBackend<null, void>(`/courses/${courseId}`, 'DELETE');
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['courses'] });
        },
    })


    // Fetch all courses
    const { data, refetch, error, isFetching } = useQuery<CourseOut[]
    >({
        queryKey: ['courses'],
        queryFn: backendFetcher('/courses'),
        initialData: [],
    });

    if (isFetching) return <div>Loading...</div>;

    if (error) {
        return <div>Error: {(error as Error).message}</div>;
    }


    return (
        <div className={styles.container}>
            <header>
                <h1>{editingCourseId ? 'Edit Course' : 'Create a New Course'}</h1>
            </header>

            <div className={styles.inputGroup}>
                <input
                    type="text"
                    placeholder="Course Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Course Description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className={styles.input}
                />
                <div className={styles.buttonGroup}>
                    <button
                        type="button"
                        onClick={() => {
                            if (editingCourseId) {
                                updateMutation.mutate({
                                    title: newTitle,
                                    description: newDescription,
                                });
                            } else {
                                createMutation.mutate({
                                    title: newTitle,
                                    description: newDescription,
                                });
                            }
                            setNewTitle('');
                            setNewDescription('');
                        }}
                        className={styles.button}
                    >
                        {editingCourseId ? 'Save Changes' : 'Create Course'}
                    </button>
                    {editingCourseId && (
                        <button
                            type="button"
                            onClick={() => {
                                setEditingCourseId(null);
                                setNewTitle('');
                                setNewDescription('');
                            }}
                            className={`${styles.button} ${styles.cancelButton}`}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>

            <hr />

            <h2>All Courses</h2>
            <ul>
                {data.map((course) => (
                    <li key={course.id} className={styles.courseItem}>
                        <div className={styles.courseDetails}>
                            <div>
                                <strong>Title:</strong> {course.title}
                            </div>
                            <div>
                                <strong>Description:</strong> {course.description}
                            </div>
                        </div>
                        <div className={styles.buttonGroup}>
                            <button
                                type="button"
                                onClick={() => {
                                    setEditingCourseId(course.id);
                                    setNewTitle(course.title);
                                    setNewDescription(course.description);
                                }}
                                className={styles.button}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={() => deleteMutation.mutate(course.id)}
                                className={`${styles.button} ${styles.deleteButton}`}
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

