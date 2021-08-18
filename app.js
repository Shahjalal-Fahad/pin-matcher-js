function pinNumber(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;
    }
    else{
        return pinNumber();
    }
}

function generatePin(){
    const pin=pinNumber();
    // console.log(pin);
    document.getElementById('generate-number').value=pin;
    
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const calc=event.target.innerText;
    const calcInput= document.getElementById('number');
    if(isNaN(calc)){
        if(calc=='C'){
            calcInput.value='';
        }
    }
    else{
        const previousCalc=calcInput.value;
        const currentCalc=previousCalc+calc;
        calcInput.value=currentCalc;
    }

})

function submitButton(){
    const pin=document.getElementById('generate-number').value;
    const number=document.getElementById('number').value;
    if(pin==number){
        document.getElementById('success-message').style.display='block';
        document.getElementById('error-message').style.display='none';
    }
    else{
        document.getElementById('error-message').style.display='block';
        document.getElementById('success-message').style.display='none';
    }
}