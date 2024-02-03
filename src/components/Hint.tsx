import { Legal } from './Legal';

export const Hint = () => {
  return (
    <div class='hint-base'>
      <div class='hint' x-data='{ open: false }'>
        <button class='hint-header hint-button' x-on:click='open = !open'>
          <div class='hint-title'>Spiel hilfe:</div>
          <svg
            version='1.1'
            viewBox='0 0 1200 1200'
            class='hint-chevron'
            x-bind:class="open && 'open'"
          >
            <path
              d='m810.3 749.7c16.402 16.402 42.996 16.402 59.398 0 16.402-16.402 16.402-42.996 0-59.398l-240-240c-16.402-16.402-42.996-16.402-59.398 0l-240 240c-16.402 16.402-16.402 42.996 0 59.398 16.402 16.402 42.996 16.402 59.398 0l210.41-210.42z'
              fill='#50BEF0'
              fill-rule='evenodd'
            />
          </svg>
        </button>

        <div x-show='open' class='hints'>
          <p>
            Ich empfehle, dass ihr euch Zeit für die Beantwortung nehmt und euch
            die Fragen gegenseitig steilt. Habt Mut zum Abschweifen!
          </p>

          <p>
            <strong>Meine liebste Zwischenfrage ist</strong>:<br />
            KANNST DU MIR EIN BEISPIEL NENNEN?
          </p>

          <p>
            <strong>Meine liebste Gegenfrage</strong>:<br />
            WIE IST DAS BEI DIR?
          </p>
        </div>
      </div>
      <Legal />
    </div>
  );
};
