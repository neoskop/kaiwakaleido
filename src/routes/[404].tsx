import Layout from '../components/Layout';
import { RouteProps } from './types';

export default function ResourceNotFoundPage({}: RouteProps) {
  return (
    <Layout
      title='404 - Seite nicht gefunden'
      description='Hier gibt es nichts zu sehen.'
    ></Layout>
  );
}
