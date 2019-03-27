function updateValue() {
    valuesArray = [];
    let ranges = document.querySelectorAll('.range');
    for(range of ranges){
        valuesArray.push(range.value);
    }
   let valuesBox = document.querySelectorAll('.show-value');
   for( let i = 0; i < valuesBox.length; i++) {
       valuesBox[i].innerHTML = valuesArray[i];
   };
    
    //// NEW FUNCTION LATER
    
    let body = document.querySelector('body');
    body.style.backgroundColor = `rgb(${Number(valuesArray[0])},${Number(valuesArray[1])},${Number(valuesArray[2])})`;
    let wrappers = document.querySelectorAll('.slider-wrapper')
    for(let i = 0; i <= wrappers.length; i++) {
        if(i == 0){
            wrappers[i].style.backgroundColor =`rgb(${Number(valuesArray[0])},${0},${0})`;
            wrappers[i].style.color =`rgb(${Number(valuesArray[0])},${0},${0})`;
        } else if( i == 1){
            wrappers[i].style.backgroundColor =`rgb(${0},${Number(valuesArray[1])},${0})`;
            wrappers[i].style.color =`rgb(${0},${Number(valuesArray[1])},${0})`;
        } else if (i == 2){
            wrappers[i].style.backgroundColor =`rgb(${0},${Number(0)},${Number(valuesArray[2])})`;
            wrappers[i].style.color =`rgb(${0},${Number(0)},${Number(valuesArray[2])})`;
        }
    }
    console.log(`rgb(${0},${Number(0)},${Number(valuesArray[2])})`)
    console.log(valuesArray)
}