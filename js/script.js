
let elAllBtns = Array.from(document.getElementsByClassName('calc-button'));
let elInput = document.getElementById('calc-input');

let calculate = (number)=>{
  elInput.value += number;
}

let result= () =>{
  try{
    elInput.value = eval(elInput.value);
  }catch(err){
    elInput.value = 'error'
  }
}

function clr(){
  elInput.value = '';
}
function del(){
  elInput.value = elInput.value.slice(0, -1)
}


















// elAllBtns.map(button =>{
//   button.addEventListener('click', (e)=>{
//     switch(e.target.innerText){
//       case  'C':
//         elInput.innerText == '';
//         break;
//       case  '←':
//         if(elInput.innerText){
//           elInput.innerText == elInput.innerText.slice(0, -1);
//         }
//         break;
//       case  '=':
//         try{
//           elInput.innerText == eval(elInput.innerText);
//         }catch{
//           elInput.innerText = 'Error!';
//         }
//         break;
//       default:
//         elInput.innerText += e.target.innerText;

//     }
//   });
// });
// console.log('hi');


