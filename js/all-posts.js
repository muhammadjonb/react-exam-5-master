const postsCard = document.querySelector(".posts");
const searchInput = document.getElementById('search');
const malumotlarList = document.getElementById('posts').getElementsByClassName('post');

async function getPostsAPI() {
  try {
    let res = await fetch(`http://localhost:3000/posts`);
    let data = await res.json();
    pushPosts(data);
  } catch (error) {
    console.log(error);
  }
}

getPostsAPI();

function pushPosts(users) {
  let str = "";

  users.map((user) => {
    str += `
            <a href="./post.html" onclick="getPost(${user.id})" class="post">
              <div class="post_img">
                <img src="${user.image}" alt="">
              </div>
              <div class="post_text">
                <span>${user.category}</span>
                <h2>${user.title}</h2>
                <p>${user.description}</p>
                <h3>${user.author}</h3>
              </div>
            </a>
        `;
  });
  postsCard.innerHTML = str;
}

function getPost(id){
  localStorage.setItem('userId', (id));
  console.log(id);
}


function qidirish() {
  const qidirishSozi = searchInput.value.toLowerCase();

  for (let i = 0; i < malumotlarList.length; i++) {
    const malumot = malumotlarList[i].textContent.toLowerCase();

    if (malumot.indexOf(qidirishSozi) > -1) {
      malumotlarList[i].style.display = '';
    } else {
      malumotlarList[i].style.display = 'none';
    }
  }
}

searchInput.addEventListener('input', qidirish);