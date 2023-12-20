const blog = document.querySelector('.cards')

const userId = localStorage.getItem('userId')
async function fitchBlock(){
  try {
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    let filteredData = data.filter((td) => td.id == userId);
    displayTodos(filteredData);
  } catch (error) {
    console.log(error);
  }
}
fitchBlock()


function displayTodos(todos){
    let str ='';

    todos.map((todo) =>{
        str +=`
            <div class="card">
              <img src="${todo.image}" alt="">
              <div class="card_text">
              <h3>${todo.author}</h3>
              <span>${todo.date}</span>
              <h1>${todo.title}</h1>
              <h4>${todo.category}</h4>
              <p>${todo.description}Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
              <p>${todo.description}Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
              </div>
            </div>
        `
    })
    blog.innerHTML = str;
}
