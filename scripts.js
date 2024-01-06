//establish global vars
let result = '';
let possibles = [
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'I1',
  'I2',
  'I3',
  'I4',
  'I5',
  'N1',
  'N2',
  'N3',
  'N4',
  'N5',
  'G1',
  'G2',
  'G3',
  'G4',
  'G5',
  'O1',
  'O2',
  'O3',
  'O4',
  'O5',
];
let answerDiv = document.getElementById('resultNumber');

const picker = (max) => {
  let answer = Math.floor(Math.random() * max);
  if (possibles.length > 0) {
    answerDiv.innerText = possibles[answer];
    possibles.splice(possibles[answer].indexOf, 1);
  } else {
    answerDiv.innerText = "It's over!";
  }
  console.log(possibles);
};

console.log('hello you sexy world!');
