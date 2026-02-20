let input = document.getElementById("input");
let result = document.getElementById("result");

let btn = document.querySelectorAll(".btn");
// console.log(btn)


// input.focus();

let funbtn = document.querySelectorAll(".funbtn");

btn.forEach((btns) => {
  btns.addEventListener("click", () => {
    btns.style.transform = "scale(0.9)";
    setTimeout(() => {
      btns.style.transform = "scale(1)";
    }, 200);

      input.value += btns.innerText;


    // if (input.value == "00") {
    //   input.value = " ";
    //   input.value += btns.innerText;
    // } else {
    //   input.value += btns.innerText;
    // }
  });
});

funbtn.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.transform = "scale(0.9)";
    setTimeout(() => {
      e.style.transform = "scale(1)";
    }, 200);
  });
});

// for(let btt of btn){
//     btt.style.transform ='scale(1)'

// }

function equal() {
  if (input.value != "") {
    result.value = eval(input.value);
  }
}

const half = () => {
  result.value = input.value / 2;
};

let backspace = () => {
    input.value = input.value.slice(0, -1);
    result.value = "";

  // if (input.value == input.value.slice(0, -1)) {
  //   input.value = "";
  // }
  // } else {
  //   input.value = input.value.slice(0, -1);
  // }
};

function allclear() {
  input.value = "";
  result.value = "";

  // console.log('hyyyyy')
}

// ==================

// history

let showhistory = document.querySelector(".showhistory");

let data = [];

function savehistory() {
  const obj = {
    input: input.value,
    result: result.value,
  };

  data.push(obj);
  showhistory.innerHTML = "";

  data.forEach((obj) => {
    showhistory.innerHTML += `
        <div class="box">
            <h6>${obj.input}</h6>
            <h6>= ${obj.result}</h6>
        </div>
        `;
  });
}

function deleteHistory() {
  showhistory.innerHTML = "";
  data = [];
}

//! ======================

let hsy = document.querySelector('#hsy')

function historylist(){

  // console.log('hhhhhhhh')
  hsy.style.disply ='flex'

  // if(history.style.disply =='none'){
  //   history.style.disply ='flex'
  // }
  // else{
  //   history.style.disply ='none'
  // }

}



// ===========================================

document.addEventListener('keydown', (e)=>{
  e.code =='Enter' && equal();
  e.code == 'Enter'&& savehistory()
  e.code =='Backspace' && backspace();
  e.code =='Escape' && allclear();
  e.code == 'Delete' && deleteHistory()
  // console.log(e)
})