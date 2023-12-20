const blog = document.querySelector('.posts')

const userId = localStorage.getItem('userId')
async function fitchBlock(){
    let id = JSON.parse(localStorage.getItem('id'))
  try {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    let filteredData = data.slice(data.length - 3, data.length);
    displayTodos(filteredData);
  } catch (error) {
    console.log(error);
  }
}
fitchBlock()

console.log(userId);

function displayTodos(todos){
    let str ='';

    todos.map((todo) =>{
        str +=`
            <a href="./post.html"  onclick="getPost(${todo.id})"  class="card">
              <img src="${todo.image}" alt="">
              <span>${todo.author}</span>
              <h1>${todo.title}</h1>
              <p>${todo.description}</p>
            </a>
        `
    })
    blog.innerHTML = str;
}

function getPost(id){
  localStorage.setItem('userId', (id));
  console.log(id);
}