function calculate() {
    setTimeout(() => console.log('calculating ...'), 2000);
}




function start() {
    console.log('App start');
    calculate();
    console.log('App End');
}


start();


// Event loop ref...
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif