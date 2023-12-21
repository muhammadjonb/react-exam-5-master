const userName = document.querySelector('.username')
const password = document.querySelector('.password')
const btnLogin = document.getElementById('btnLogin')



btnLogin.addEventListener("click",function (e) {
    e.preventDefault()
    if(userName.value.length>0 && password.value.length>0){
        window.location.href="../pages/home.html"
    }else{
        alert("Fill in the input data")
    }
})