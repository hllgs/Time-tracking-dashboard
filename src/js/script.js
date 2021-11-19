const dailyBtn = document.querySelector('#daily-btn');
const weeklyBtn = document.querySelector('#weekly-btn');
const mothlyBtn = document.querySelector('#monthly-btn');

const hours = document.querySelectorAll('.hours');
const lastTime = document.querySelectorAll('.last-time');
let data1;
let timef;
let Lasttime;

    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        data1=data;
    })


    function update(){
        data1.forEach(() => {
            hours.forEach((e,i) => {
               hours[i].innerHTML = data1[i].timeframes[timef].current + 'hrs';
               lastTime[i].innerHTML = Lasttime + ' - ' + data1[i].timeframes[timef].previous + 'hrs';
            })
        })
    }


dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.remove('text-muted')
    weeklyBtn.classList.add('text-muted')
    mothlyBtn.classList.add('text-muted')
    timef='daily';
    Lasttime='Yesterday';
    update()
})

weeklyBtn.addEventListener('click', () => {
    weeklyBtn.classList.remove('text-muted')
    mothlyBtn.classList.add('text-muted')
    dailyBtn.classList.add('text-muted')
    timef='weekly';
    Lasttime='Last Week';
    update()
})

mothlyBtn.addEventListener('click', () => {
    mothlyBtn.classList.remove('text-muted')
    dailyBtn.classList.add('text-muted')
    weeklyBtn.classList.add('text-muted')
    timef='monthly';
    Lasttime='Last Monthly';
    update()
})