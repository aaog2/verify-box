
// Start Material Form
const label = document.querySelector(".phonelabel");

// console.log(label.innerText.split(""));

label.innerHTML = label.innerText
    .split('')
    .map((letter,index)=>
        `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
    .join("");

// End Material Form

// Start Verify Box
const codes = document.querySelectorAll(".code");
codes[0].focus();

codes.forEach((code,index)=>{
    code.addEventListener("keydown",(e)=>{
        if(e.key >= 0 && e.key <= 9){
            codes[index].value = "";

           if(index !== 5){
               setTimeout(()=> codes[index+1].focus(),10);
           }
        }else if(e.key === "Backspace"){
            if(index !== 0){
                setTimeout(()=> codes[index-1].focus(),10);
            }
        }
    })
})
// End Verify Box