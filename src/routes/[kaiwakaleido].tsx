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
            <strong>KaiwaKaleido</strong> ist ein einzigartiges, interaktives
            Spiel, das darauf abzielt, die Kommunikation zwischen Menschen auf
            eine kreative und bereichernde Weise zu fördern. Inspiriert von der
            japanischen Kunst der Konversation (Kaiwa) und der faszinierenden
            Vielfalt eines Kaleidoskops, bietet dieses Spiel eine Plattform, um
            die Schönheit und Tiefe menschlicher Dialoge zu erkunden. Es ist ein
            Spiel, das nicht nur unterhält, sondern auch inspiriert, verbindet
            und lehrt.
            <br />
            <br />
            Der Name <strong>KaiwaKaleido</strong> ist inspiriert von zwei
            Konzepten, die aus unterschiedlichen kulturellen und sprachlichen
            Kontexten stammen, und vereint diese zu einem einzigartigen und
            aussagekräftigen Namen für ein Gesprächsförderungsspiel.
            <br />
            <br />
            <b>Herkunft und Bedeutung:</b>
            <br />
            <strong>Kaiwa (会話)</strong>: Ein japanisches Wort, das "Gespräch"
            oder "Unterhaltung" bedeutet. Es verweist auf die Kunst der
            Kommunikation und den Austausch zwischen Menschen, ein zentrales
            Element des Spiels. Japanisch als Sprache ist bekannt für ihre
            Vielschichtigkeit und Fähigkeit, Nuancen und Respekt in der
            Kommunikation zu vermitteln, was die Qualität und Tiefe der im Spiel
            angestrebten Gespräche widerspiegelt.
            <br />
            <br />
            <strong>
              Kaleido (vom Griechischen 'kalos' für schön, 'eidos' für Form und
              'skopein' für sehen)
            </strong>
            : Verkürzt für "Kaleidoskop", ein optisches Instrument, das durch
            Spiegelung von farbigen Glasstücken faszinierende Muster erzeugt.
            Diese Metapher steht für die Vielfalt und Schönheit der
            Gesprächsthemen und -perspektiven, die das Spiel hervorbringen soll.
            Wie ein Kaleidoskop mit seinen sich ständig ändernden Mustern soll
            das Spiel die Teilnehmer dazu anregen, die Komplexität und Schönheit
            menschlicher Gedanken und Ideen zu erkunden und zu schätzen.
          </div>
        </div>
      </Content>
    </Layout>
  );
}
