import { Content } from '../components/Content';
import Layout from '../components/Layout';
import { RouteProps } from '../types/types';

export default function ResourceNotFoundPage({}: RouteProps) {
  return (
    <Layout
      title='404 - Seite nicht gefunden'
      description='Hier gibt es nichts zu sehen.'
    >
      <Content>
        <div class='intro'>
          <div class='heading'>
            <h1 class='title'>Error 404</h1>
            <div class='subtitle'>Hier gibt es nichts zu sehen.</div>
          </div>

          <div class='description'>
            <a href='/'>Zur Startseite</a>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
