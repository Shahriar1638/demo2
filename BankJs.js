document.getElementById('btn-submit').addEventListener('click',function(){
    const emailF = document.getElementById('email');
    const passF = document.getElementById('password');
    const email = emailF.value
    const pass = passF.value
    console.log(email , pass)
    if (email === 'admin' && pass === 'admin'){
        window.location.href = 'BankMainPage.html'
    }
    else{
        alert('invalid user')
    }
})