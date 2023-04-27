//випадкове число
function GenerateRandomIntNumber(minValue = 1, maxValue = 10) {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}
// перетасовуэмо масив
function ShuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// генеруємо об'єкт запитання
function GenerateQuadraticEquationQuestion() {
    //текст запитання
    let x1 = GenerateRandomIntNumber();
    let x2 = GenerateRandomIntNumber();
    let question = `<p>Розв'яжіть квадратне рівняння:</p>
    <p>${createQuadraticEquationUsingVietasFormula(x1, x2)}</p>`;
    //выдповіді містять правильну
    let correctAnswer = `x1=${x1}, x2=${x2}`;
    let answers = [correctAnswer];
    //додаємо ще 3 неправильні відповіді щоб всього їх було 4
    while (answers.length < 4) {
        let x1 = GenerateRandomIntNumber();
        let x2 = GenerateRandomIntNumber();
        let wrongAnswer = `x1=${x1}, x2=${x2}`;
        // якщо неправильна відповідь рівна правильній, то пропускаємо її
        if (wrongAnswer == correctAnswer)
            continue;
        //додаємо неправильні в масив відповідей
        answers.push(wrongAnswer);
    }
    //тасуємо відповіді
    answers = ShuffleArray(answers);
    //знаходимо індекс правильної відповіді
    let correct = answers.indexOf(correctAnswer);

    return {
        question,
        answers,
        correct
    }
}