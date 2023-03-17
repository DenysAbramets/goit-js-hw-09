import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';


const inputFlatpick =document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondEl = document.querySelector('[data-seconds]');


const timer = {
           
  dateValidation(){
        if (timer.data >= new Date()) {
            startBtn.disabled = false;
            console.log(new Date())
            console.log(timer.data)
        }
        else{
            Notiflix.Report.warning('Please choose a date in the future');
            console.log(new Date())
            console.log(timer.data)

        };
       },

    onStartTimer (){
        const timerId = setInterval(() => {
            const  timeDifference =  this.data - new Date();
        console.log(timeDifference);
        if (timeDifference >= 0) {
            const { days, hours, minutes, seconds } = convertMs(timeDifference);
            daysEl.textContent = addLeadingZero(days);
            hoursEl.textContent = addLeadingZero(hours);
            minutesEl.textContent = addLeadingZero(minutes);
            secondEl.textContent = addLeadingZero(seconds);
          } else {
            clearInterval(timerId);
            secondEl.textContent = '00';
            Notiflix.Notify.success('Time end');

          }

        } ,1000);
        startBtn.disabled = true;
        inputFlatpick.disabled = true;
       
       },
       
}
 
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates);
    timer.dateValidation.call(timer); 
    timer.data = selectedDates;
      
      
    },
    
  };

flatpickr(inputFlatpick, options);

startBtn.addEventListener('click', timer.onStartTimer.bind(timer) );


 

















function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  };
  function addLeadingZero(value){
    return String(value).padStart(2, '0');
  }