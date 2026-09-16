const fsdq = [
  {
    question: "Which HTML tag is used to define an independent, self-contained piece of content that makes sense on its own, like a blog post or news story?",
    options: ["<section>", "<div>", "<article>", "<span>"]
  },
  {
    question: "Which keyword is used in modern JavaScript to declare a variable whose value cannot be reassigned after its initial assignment?",
    options: ["var", "let", "int", "const"]
  },
  {
    question: "What is the primary purpose of Node.js in full stack development?",
    options: [
      "To run and style user interfaces inside web browsers",
      "To run JavaScript code on the server-side",
      "To manage relational database table schemas automatically",
      "To compile HTML documents into efficient CSS files"
    ]
  },
  {
    question: "Which HTTP method is typically used by a client to request and retrieve data from a server?",
    options: ["POST", "DELETE", "GET", "PUT"]
  },
  {
    question: "Which of the following is a popular NoSQL database that stores data as flexible, JSON-like documents?",
    options: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"]
  }
];

var i = -1;
let ques = document.getElementById("quest");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let qno=document.getElementById("Qno");
function next() {
    if (i + 1 < fsdq.length) {
        i = i + 1;
        
        qno.textContent = `Question no: ${i + 1}`; 
        
        ques.textContent = fsdq[i].question;
        option1.textContent = fsdq[i].options[0];
        option2.textContent = fsdq[i].options[1];
        option3.textContent = fsdq[i].options[2];
        option4.textContent = fsdq[i].options[3];
    } else {
        alert("You have reached the final question!");
    }
}


