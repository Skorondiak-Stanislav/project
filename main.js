const questions = [
	// перші 2 запитання про квадратне рівняння
	GenerateQuadraticEquationQuestion(),
	GenerateQuadraticEquationQuestion(),
	{
		question: "Якою мовою реалізовано сайт?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Що означає CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Що означає HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В якому році був створений JavaScript?",
		answers: ["1996", "1995", "1994", "всі відповіді неправильні"],
		correct: 2,
	},
];


// знаходимо елементи
const headerContainer = document.querySelector('#header')
const listContainer = document.querySelector('#list')
const submitBtn = document.querySelector('#submit')

// вводимо змінні вікторини
let score = 0; // кількість правильних відповідей
let questionIndex = 0; // номер запитання

clearPage()
showQuestion()
submitBtn.onclick = checkAnswer;


// функція яка очищує HTML розмітку
function clearPage(){ 
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

// функція яка відображає питання
function showQuestion(){
	console.log('showQuestion');
	
    // створюєм шаблон
	const headerTemplate = '<h2 class="title">%title%</h2>';
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])
    headerContainer.innerHTML = title;
	
	let answerNumber = 1;
	for (answerText of questions[questionIndex]['answers']){ 
		
		const questionTemplate = 
			`<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
     		</li>`

		const answerHTML = questionTemplate
								.replace('%answer%', answerText)
								.replace('%number%', answerNumber)
		
		listContainer.innerHTML += answerHTML;
		
		answerNumber++;
	}

}

function checkAnswer(){

	// знаходимо вибрану радіо кнопку
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked')
	
	// якщо варіант відповіді не вибрано то нічого не робимо, 
	// просто виходимо з функції
	if (!checkedRadio){
		submitBtn.blur();
		return
	}

	// дізнаємося номер відповіді користувача
	const userAnswer = parseInt(checkedRadio.value)

	// якщо відповідь правильна - добавляємо бали 
	if (userAnswer === questions[questionIndex]['correct']) {
		score++;
	}

	if (questionIndex !== questions.length -1){
		console.log('це не останнє питання');
		questionIndex++;
		clearPage();
		showQuestion();
	} else {
		console.log('це останнє питання');
		clearPage();
		showResults();
	}
}

// функція яка буде відображати результати
function showResults(){
	console.log('showResults started!');
	console.log(score);

	const resultsTemplate = `
			<h2 class="title">%title%</h2>
			<h3 class="summary">%message%</h3>
			<p class="result">%result%</p>
		`;

	let title, message;
	// варіанти заголовків і тексту повідомлення
	if (score === questions.length){
		title = 'Вітаю!🎉';
		message = 'Ви відповіли правильно на всі питання!😎🔥';
	} else if ((score * 100) / questions.length >= 50) {
		title = 'Непогано!😉';
		message = 'Ви відповіли правильно на більшість питань питань!👍';
	} else {
		title = 'Підготуйся краще!😐';
		message = 'Покищо в тебе менше половини правильних питань.';
	}
    
    // Результат
	let result = `${score} iз ${questions.length}`;

	// кінцева відповідь, підставляємо данні в шаблон
	const finalMessage = resultsTemplate
							.replace('%title%', title)
							.replace('%message%', message)
							.replace('%result%', result)

	headerContainer.innerHTML = finalMessage;

	// змінюємо кнопку на "грати заново"
	submitBtn.blur();
	submitBtn.innerText = 'Грати заново';
	submitBtn.onclick = function(){
		history.go()
	};
}
