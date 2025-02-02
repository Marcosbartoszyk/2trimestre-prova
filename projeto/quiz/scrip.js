const quizData = [
    {
        question: "Qual a sigla para JavaScript?",
        a: "CSS",
        b: "HTML",
        c: "PHP",
        d: "JS",
        correct: "d",
    },
    {
        question: "Como criar uma classe?",
        a: "Com ,",
        b: "Com .",
        c: "Com #",
        d: "Não tem como",
        correct: "b",
    },
    {
        question: "Quais os elementos da tríade?",
        a: "CSS, HTML, JavaScript",
        b: "C++, TypeScript, HTML",
        c: "Front End e Back End",
        d: "C++, PHP, PYTHON",
        correct: "a",
    },
    {
        question: "Como criar um documento HTML?",
        a: "Usando bloco de notas",
        b: "Criando um documento com .html",
        c: "Buscando no chrome",
        d: "Criando um documento com .thml",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score}/${quizData.length} perguntas</h2>

                <button onclick="location.reload()">Refazer</button>
            `
        }
    }
})