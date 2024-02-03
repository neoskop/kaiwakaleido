import { Content } from '../components/Content';
import { Game } from '../components/Game/Game';
import { Hint } from '../components/Hint';
import Layout from '../components/Layout';
import { RouteProps } from './types';

export default function Homepage({}: RouteProps) {
  return (
    <Layout
      title='KaiwaKaleido - Neoskop GmbH'
      description='Entdecke die Kunst des Gesprächs'
    >
      <Content>
        <Game />
        <Hint />
      </Content>
    </Layout>
  );
}
