const courses = [
  {
    course: "javascript",
    price: 500,
  },

  {
    course: "React js",
    price: 204,
  },

  {
    course: "Angular",
    price: 5608,
  },

  {
    course: "c++",
    price: 2700,
  },
];

function generateListt() {
  const ul = document.querySelector(".unorderedList");
    ul.innerHTML=" "
  courses.forEach((obj) => {
    
    const li = document.createElement("li");
    li.setAttribute("class", "list");
    const course = document.createTextNode(obj.course);

    const span = document.createElement("span");
    span.classList.add("spanTag");

    const price = document.createTextNode("$" + obj.price);
    
    span.appendChild(price);
    li.appendChild(course);
    li.appendChild(span);
    ul.appendChild(li);
  });
}
generateListt();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  courses.sort((a, b) => (a.price - b.price));
  console.log(courses);
  generateListt();
});
