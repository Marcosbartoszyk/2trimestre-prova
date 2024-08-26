const quizData = [
    {
        question: "O que terminou em 1945?",
        a: "Copa do Mundo de 1992",
        b: "Segunda Guerra",
        c: "Alemanha",
        d: "1944",
        correct: "d",
    },
    {
        question: "Quando pelé morreu?",
        a: "2026",
        b: "1893",
        c: "95 A.C.",
        d: "2022",
        correct: "b",
    },
    {
        question: "Que dia será amanhã?",
        a: "22",
        b: "14",
        c: "34",
        d: "indefinido",
        correct: "a",
    },
    {
        question: "Qual o melhor jogo do mundo?",
        a: "minecraft",
        b: "terraria",
        c: "fortbosta",
        d: "vida real",
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