import { createFileRoute } from '@tanstack/react-router';
import LoginButton from '../components/LoginButton';
import styles from './Login.module.css';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>Welcome 👋</h1>
        <p className={styles.loginSubtitle}>
          Sign in to access your courses and learning materials
        </p>
        <LoginButton />
      </div>
    </div>
  );
}