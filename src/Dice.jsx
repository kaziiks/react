function Dice() {
    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log("Kauliņš izmests uz: " + randomNumber);
      }
      rollDice();
    return 
    <article>
    <h2>Metamais kauliņš</h2>;
    <button onClick={rollDice}>Mest</button>
    </article>
  }
  export default Dice;
