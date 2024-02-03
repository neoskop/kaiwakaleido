export const Game = () => {
  return (
    <form
      class='game'
      method='post'
      x-data='{
      buttonText: "Lass uns Loslegen!",
      status: "initial",
      response:{
        question: "Starte spannende Gespräch mit nur einem Klick!",
        category: ""
      },
      async load() {
        if (this.status === "loading") return

        this.status = "loading"
        this.buttonText = "Suche nach einer neuen Frage..."
        this.response = await (await fetch(`/api/question.json`)).json()
        this.status = "initial"
        this.buttonText = "Weiter mit der nächsten Frage"
      },
    }'
    >
      <div class='game-question'>
        <h1 class='game-title'>Deine Frage:</h1>
        <div class='game-question-text'>
          <div class='category'>
            <span x-text='response.category' />
          </div>
          <p x-text='response.question' />
        </div>
      </div>

      <button
        class='game-button'
        x-on:click='load()'
        type='button'
        x-text='buttonText'
      />
    </form>
  );
};
