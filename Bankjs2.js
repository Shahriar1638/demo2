//step-1 get the input of depo
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2 store the value of depo in const
    const num = document.getElementById('depo-num');   
    const depo = num.value  //step 3- got the depo input
    const getdepoval = document.getElementById('show-depo')
    const prevdepoval = getdepoval.innerText
    getdepoval.innerText = depo
    // step 4 changed the depo value in box
    const gettototalval = document.getElementById('show-total')
    //step5 - prev in depo + crnt depo = total balance
    const total = parseInt(depo) + parseInt(prevdepoval)
    //step-6 update the total balance
    gettototalval.innerText = total
})
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const num2 = document.getElementById('wthd-num');   
    const wthd = num2.value 
    const getwthdval = document.getElementById('show-wthd')
    getwthdval.innerText = wthd
    const gettototalval = document.getElementById('show-total')
    const total = parseInt(gettototalval.innerText) - parseInt(wthd)
    gettototalval.innerText = total
})