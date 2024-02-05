import getRandomQuestion from '../helpers/getRandomQuestion';

export const Game = () => {
  const { category, question } = getRandomQuestion();

  return (
    <form class='game' method='post'>
      <div class='game-question'>
        <h1 class='game-title'>Deine Frage:</h1>
        <div class='game-question-text'>
          <div class='category'>
            <span>{category}</span>
          </div>
          <p>{question}</p>
        </div>
      </div>

      <button class='game-button' type='submit'>
        Weiter mit der nächsten Frage
      </button>
    </form>
  );
};
