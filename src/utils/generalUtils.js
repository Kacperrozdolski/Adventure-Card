export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const genereteCardDeck = (num, deck, cards) => {
  for (let i = 0; i < num / 2; i++) {
    let rest = { value: deck[i], selected: false };
    cards.push({ id: i, ...rest }, { id: i + num / 2, ...rest });
  }
  return shuffleArray(cards);
};
