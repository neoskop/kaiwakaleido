import { Content } from '../components/Content';
import Layout from '../components/Layout';
import { RouteProps } from './types';

export default function Homepage({}: RouteProps) {
  return (
    <Layout
      title='Was ist KaiwaKaleido? - Neoskop GmbH'
      description='Entdecke die Kunst des Gesprächs'
    >
      <Content>
        <div class='intro'>
          <div class='heading'>
            <h1 class='title'>KaiwaKaleido</h1>
            <div class='subtitle'>Entdecke die Kunst des Gesprächs</div>
          </div>

          <div class='description'>
            KaiwaKaleido ist ein einzigartiges, interaktives Spiel, das darauf
            abzielt, die Kommunikation zwischen Menschen auf eine kreative und
            bereichernde Weise zu fördern. Inspiriert von der japanischen Kunst
            der Konversation (Kaiwa) und der faszinierenden Vielfalt eines
            Kaleidoskops, bietet dieses Spiel eine Plattform, um die Schönheit
            und Tiefe menschlicher Dialoge zu erkunden. Es ist ein Spiel, das
            nicht nur unterhält, sondern auch inspiriert, verbindet und lehrt.
          </div>
        </div>
      </Content>
    </Layout>
  );
}
