const datafetch = async()=>             //arrow function
{
    const d= document.getElementById("unlist"); // Moved this inside to ensure it runs after the DOM is loaded
    console.log(d);
    const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json());
    console.log("respose:",response);
if (response) {
    console.log("Data fetch successful");
    const li = document.getElementById("li");
    li.innerHTML = `<span>${response.title}</span> `;
  }
  d.appendChild(li);
};

