const fizzBuzzContainer = document.body.querySelector(`.container`);
const container = document.querySelector(".container");

fizzBuzzContainer.style = `display: flex; width: 100%; flex-wrap: wrap;`;

aHundred(1, 100);


function aHundred(start, end){
    for(i = start; i <= end ; i++){
        
        const element = document.createElement('div');

        if (!(i % 3) && !(i % 5)){
           
            element.setAttribute("class", "blue box");
            element.innerHTML=`<span>FizzBuzz<\span>;`;

            container.appendChild(element);
        }
        else if( !(i % 3) ){
           
            element.setAttribute("class", "yellow box");
            element.innerHTML=`<span>Fizz<\span>`;

            container.appendChild(element);
        }else if( !(i % 5) ){
           
            element.setAttribute("class", "red box");
            element.innerHTML=`<span>Buzz<\span>`;

            container.appendChild(element);
        }else{
           
            element.setAttribute("class", "lightblue box");
            element.innerHTML=`<span>${i}<\span>`;

            container.appendChild(element);
        }
    }
}