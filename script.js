let container = document.body.querySelector(`.container`);
    container.style = `display: flex; width: 100%; flex-wrap: wrap;`;

aHundred(1, 100);


function aHundred(start, end){
    for(i = start; i <= end ; i++){

        let container = document.querySelector(".container");
        let element = document.createElement('div');

        if (!(i % 3) && !(i % 5)){
            element.style=`width: 20%; height: 100px; display: flex; align-items: center; justify-content: center; background-color: blue;`;
            element.innerHTML=`<span>FizzBuzz<\span>;`;

            container.appendChild(element);
        }
        else if( !(i % 3) ){
            element.style=`width: 20%; height: 100px; display: flex; align-items: center; justify-content: center; background-color: yellow;`;
            element.innerHTML=`<span>Fizz<\span>`;

            container.appendChild(element);
        }else if( !(i % 5) ){
            element.style=`width: 20%; height: 100px; display: flex; align-items: center; justify-content: center; background-color: red;`;
            element.innerHTML=`<span>Buzz<\span>`;

            container.appendChild(element);
        }else{
            element.style=`width: 20%; height: 100px; display: flex; align-items: center; justify-content: center; background-color: lightblue;`;
            element.innerHTML=`<span>${i}<\span>`;

            container.appendChild(element);
        }
    }
}