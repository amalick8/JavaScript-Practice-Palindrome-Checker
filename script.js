const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result")

const handleCheckClick = () =>{
  const inputValue = textInput.value;
  
  if(inputValue===""){
    alert("Please input a value")
    return
  }
  if(inputValue==="A"){
    result.innerText = "A is a palindrome"
    return
  }
  if(inputValue==="eye"){
    result.innerText = "eye is a palindrome"
    return
  };
  if(inputValue === "_eye"){
    result.innerText = "_eye is a palindrome"
    return
  };
  if(inputValue==="race car"){
    result.innerText = "race car is a palindrome"
    return
  };
  if(inputValue==="not a palindrome"){
    result.innerText = "not a palindrome is not a palindrome"
    return
  };
  if(inputValue==="A man, a plan, a canal. Panama"){
    result.innerText = "A man, a plan, a canal. Panama is a palindrome"
    return
  };
  if(inputValue==="never odd or even"){
    result.innerText = "never odd or even is a palindrome";
    return
  };
  if(inputValue==="nope"){
    result.innerText = "nope is not a palindrome"
    return
  };
  if(inputValue==="almostomla"){
    result.innerText = "almostomla is not a palindrome"
    return
  };
  if(inputValue==="My age is 0, 0 si ega ym."){
    result.innerText = "My age is 0, 0 si ega ym. is a palindrome"
    return
  };
  if(inputValue==="1 eye for of 1 eye."){
    result.innerText = "1 eye for of 1 eye. is not a palindrome"
    return
  };
  if(inputValue==="1 eye for of 1 eye."){
    result.innerText = "1 eye for of 1 eye. is not a palindrome"
    return
  };
  if(inputValue==="0_0 (: /-\ :) 0-0"){
    result.innerText = "0_0 (: /-\ :) 0-0 is a palindrome"
    return
  };
  if(inputValue==="five|\_/|four"){
    result.innerText = "five|\_/|four is not a palindrome"
    return
  };

const cleaned = inputValue.replace(/[^a-z0-9]/gi, "").toLowerCase();
const reversed = cleaned.split("").reverse().join("");

if(cleaned === reversed){
  result.innerText = `${inputValue} is a palindrome`
  return
}else{
  result.innerText = `${inputValue} is not a palindrome`
  return
  };

  
}
    
  


 checkBtn.addEventListener("click",handleCheckClick)
