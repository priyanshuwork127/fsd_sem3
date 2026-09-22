const fsdq = [
    {
        question: "Which HTML tag is used to define an independent, self-contained piece of content that makes sense on its own, like a blog post or news story?",
        options: ["<section>", "<div>", "<article>", "<span>"],
        answer: 2
    },
    {
        question: "Which keyword is used in modern JavaScript to declare a variable whose value cannot be reassigned after its initial assignment?",
        options: ["var", "let", "int", "const"],
        answer: 3
    },
    {
        question: "What is the primary purpose of Node.js in full stack development?",
        options: [
            "To run and style user interfaces inside web browsers",
            "To run JavaScript code on the server-side",
            "To manage relational database table schemas automatically",
            "To compile HTML documents into efficient CSS files"
        ],
        answer: 1
    },
    {
        question: "Which HTTP method is typically used by a client to request and retrieve data from a server?",
        options: ["POST", "DELETE", "GET", "PUT"],
        answer: 2
    },
    {
        question: "Which of the following is a popular NoSQL database that stores data as flexible, JSON-like documents?",
        options: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
        answer: 3
    }
];

let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let radio4 = document.getElementById("radio4");

let ques = document.getElementById("quest");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let qno = document.getElementById("Qno");

let i = -1;
let score = 0;

function next() {
    let selectedOption = -1;

    if (radio1.checked) {
        selectedOption = 0;
    }
    else if (radio2.checked) {
        selectedOption = 1;
    }
    else if (radio3.checked) {
        selectedOption = 2;
    }
    else if (radio4.checked) {
        selectedOption = 3;
    }

    if (i >= 0) {
        if (selectedOption === fsdq[i].answer) {
            score++;
        }
    }

    if (i + 1 < fsdq.length) {
        i++;

        qno.textContent = `Question no: ${i + 1}`;
        ques.textContent = fsdq[i].question;

        option1.textContent = fsdq[i].options[0];
        option2.textContent = fsdq[i].options[1];
        option3.textContent = fsdq[i].options[2];
        option4.textContent = fsdq[i].options[3];

        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
    }
    else {
        alert(`Quiz finished! Your score is ${score}/${fsdq.length}`);
    }
}