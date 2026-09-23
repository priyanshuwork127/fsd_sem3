
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

let i = -1;
let score = 0;
let selectedOption = -1;

const ques = document.getElementById("quest");
const qno = document.getElementById("Qno");

const options = [
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4")
];

const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");

function showQuestion() {

    i++;

    if (i < fsdq.length) {

        qno.textContent = `Question no: ${i + 1}`;

        ques.textContent = fsdq[i].question;

        options.forEach((option, index) => {

            option.textContent =
                `${index + 1}. ${fsdq[i].options[index]}`;

            option.classList.remove("selected");

        });

        selectedOption = -1;
    }
}

options.forEach((option, index) => {

    option.addEventListener("click", function () {

        selectedOption = index;

        options.forEach(option => {
            option.classList.remove("selected");
        });

        option.classList.add("selected");
    });

});

document.addEventListener("keydown", function (event) {

    if (event.key === "1") {
        options[0].click();
    }

    else if (event.key === "2") {
        options[1].click();
    }

    else if (event.key === "3") {
        options[2].click();
    }

    else if (event.key === "4") {
        options[3].click();
    }

    else if (event.key === "Enter") {
        nextButton.click();
    }

});

nextButton.addEventListener("click", function () {

    if (i >= 0 && selectedOption === -1) {

        alert("Please select an option.");

        return;
    }

    if (i >= 0 && selectedOption === fsdq[i].answer) {
        score++;
    }

    if (i + 1 < fsdq.length) {

        showQuestion();

    }
    else {

        alert(`Quiz finished! Your score is ${score}/${fsdq.length}`);

    }

});

submitButton.addEventListener("click", function () {

    if (i >= 0 && selectedOption === fsdq[i].answer) {
        score++;
    }

    alert(`Your score is ${score}/${fsdq.length}`);

});

showQuestion();
