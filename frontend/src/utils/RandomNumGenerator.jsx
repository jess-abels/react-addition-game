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

  export function getThreeUniqueAnswerOptions(correctAnswer){
    let answerOptions;
    do {
        answerOptions = new Set(answerOptions)
        answerOptions.add(getRandomIntInclusive(1,10));
        answerOptions.add(correctAnswer)
    } while (answerOptions.size < 3);

    return Array.from(answerOptions);
  }

  export function shuffleSet(set) {
    const array = Array.from(set);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return new Set(array);
  }