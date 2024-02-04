import { version } from '../../package.json';

export const Legal = () => {
  return (
    <div class='legal'>
      <a href='https://neoskop.de/impressum'>Impressum</a> |
      <a href='https://neoskop.de/datenschutz'>Datenschutz</a>|
      <a href={`https://github.com/NoelBank/kaiwakaleido`}>v.{version}</a>
    </div>
  );
};
