export const Game = () => {
  return (
    <form
      class='game'
      method='post'
      x-data='{
      response:{
        question: "Starte das Spiel in dem du auf den Button klickst.",
      },
      async load() {
        this.response = await (await fetch(`/api/question.json`)).json()
      },
    }'
    >
      <div class='game-question'>
        <h1 class='game-title'>Deine Frage:</h1>
        <div class='game-question-text'>
          <p x-text='response.question' />
        </div>
      </div>

      <button class='game-button' x-on:click='load()' type='button'>
        Gib mir noch eine Frage
      </button>
    </form>
  );
};
