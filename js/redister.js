const firstName = document.querySelector('.firstname')
const lastName = document.querySelector('.lastname')
const userName = document.querySelector('.username')
const password = document.querySelector('.password')
const confirM = document.querySelector('.confirm')
const btnSubmit = document.getElementById('btn_submit')
const btnLogin = document.getElementById('btnLogin')


btnSubmit.addEventListener("click",function (e) {
    e.preventDefault()
    if(firstName.value.length>0 && lastName.value.length>0 && userName.value.length>0 && password.value.length>0 && confirM.value.length>0){
        window.location.href="./pages/login.html"
    }else{
        alert("Fill in the input data")
    }
})

btnLogin.addEventListener("click",function (e) {
    e.preventDefault()
    if(userName.value.length>0 && password.value.length>0){
        window.location.href="./home.html"
    }else{
        alert("Fill in the input data")
    }
})