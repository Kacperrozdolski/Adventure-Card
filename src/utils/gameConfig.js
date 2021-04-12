export const easyIcons = [
  "brownCandy",
  "chocoCandy",
  "donutCandy",
  "greenCandy",
  "pinkCandy",
  "strawCandy",
];

export const mediumIcons = [
  "snakeDesert",
  "blindDesert",
  "butterflyDesert",
  "cactusDesert",
  "coalDesert",
  "gigantDesert",
  "hoboDesert",
  "oldDesert",
  "ratDesert",
];

export const hardIcons = [
  "catDead",
  "cyclopDead",
  "flyingDead",
  "grassDead",
  "hagDead",
  "skeletonDead",
  "vampireDead",
  "wizardDead",
  "yellowDead",
];

export const levels = [
  { name: "easy", numberOfCards: 12 },
  { name: "medium", numberOfCards: 18 },
  { name: "hard", numberOfCards: 18 },
];

const createLevel = (name, icons, numberOfCards, color) => {
  return { name, icons, numberOfCards, color };
};

export const levelSettings = {
  easy: createLevel("easy", easyIcons, 8, "#F9ECFE"),
  medium: createLevel("medium", mediumIcons, 16, "#C3955C"),
  hard: createLevel("hard", hardIcons, 18, "#8F8F8F"),
};
