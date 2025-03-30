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
    let answerOptions = [correctAnswer];
    do {
        answerOptions.push(getRandomIntInclusive(1,10));
        answerOptions = [...new Set(answerOptions)]
    } while (answerOptions.length < 3);
    return answerOptions;
  }

