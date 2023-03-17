import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', submitForm)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
  
};




function submitForm (event){
  event.preventDefault();

 let firstDelay = Number(formEl.delay.value);

 for(let i = 1; i <= formEl.amount.value; i +=1 ){
  createPromise(i, firstDelay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  firstDelay += Number(formEl.step.value);
 }



}
