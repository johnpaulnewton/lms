import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { backendFetcher } from '../integrations/fetcher';

export const Route = createFileRoute('/courses')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, refetch } = useQuery({
    queryKey: ['courses'],
    queryFn: backendFetcher('/courses'),
    initialData: [],
  });

  return <div>Courses: {JSON.stringify(data)}</div>;
}
