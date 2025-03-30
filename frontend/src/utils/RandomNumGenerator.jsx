export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum =  Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
  }

  export function getRandomNumsEqualLessThanOrEqualToTen() {
    const firstNumber = Math.floor(Math.random() * 10); // Generates a random integer between 0 and 10
    const secondNumber = Math.floor(Math.random() * (10 - firstNumber)); // Generates a random integer between 0 and (10 - firstNumber)
    return [firstNumber, secondNumber];
  }