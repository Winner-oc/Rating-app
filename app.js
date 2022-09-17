const trialBtn = document.querySelector("#triall");
const submitBtn = document.querySelector("#submith");
//collecting each buttons
const btOne = document.querySelector("#button1");
const btTwo = document.querySelector("#button2");
const btThree = document.querySelector("#button3");
const btFour = document.querySelector("#button4");
const btFive = document.querySelector("#button5");

const hideContainer = document.querySelector("#hide-container");
const hideFirstContainer = document.querySelector("#hide-first-container")

submitBtn.addEventListener("click", ()=>{
      if(submitBtn){
        hideFirstContainer.classList.add("hide-first-container")
        hideContainer.classList.remove("hide-container")
      }else{
        console.log("none clicked")
      }
})

//collecting select display div

const select = document.querySelector("#select")



    const para = document.createElement("p");
    


    btOne.addEventListener("click", ()=> {
        if(btOne){
            para.textContent = "You selected 1 out of 5"
            para.classList.add("select")
            select.appendChild(para) 
        }else{
            console.log("none clicked")
        }
    })

    btTwo.addEventListener("click", ()=> {
        if(btTwo){
            para.textContent = "You selected 2 out of 5"
            para.classList.add("select")
            btTwo.style.backgroundColor = 'green';

            select.appendChild(para) 
        }else{
            console.log("none clicked")
        }
    })

    btThree.addEventListener("click", ()=> {
        if(btThree){
            para.textContent = "You selected 3 out of 5"
            para.classList.add("select")
            btThree.style.backgroundColor = 'green';
            select.appendChild(para) 
        }else{
            console.log("none clicked")
        }
    })

    btFour.addEventListener("click", ()=> {
        if(btFour){
            para.textContent = "You selected 4 out of 5"
            para.classList.add("select")
            select.appendChild(para) 
        }else{
            console.log("none clicked")
        }
    })

    btFive.addEventListener("click", ()=> {
        if(btFive){
            para.textContent = "You selected 5 out of 5"
            para.classList.add("select")
            select.appendChild(para) 
        }else{
            console.log("none clicked")
        }
    })
    


