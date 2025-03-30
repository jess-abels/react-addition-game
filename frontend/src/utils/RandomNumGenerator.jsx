export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum =  Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
  }

  export function getRandomNumsEqualLessThanOrEqualToTen() {
    const firstNumber = getRandomIntInclusive(1,10);
    const secondNumber = getRandomIntInclusive(1, 10 - firstNumber)
    return [firstNumber, secondNumber];
  }