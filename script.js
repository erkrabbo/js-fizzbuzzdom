aHundred();

function aHundred(){
    for(i = 1; i < 101; i++){

        if (!(i % 3) && !(i % 5)){
            console.log("BuzzFizz");
        }
        else if(!(i%3)){
            console.log("Fizz");
        }else if(!(i%5)){
            console.log("Buzz")
        }else{
            console.log(i);
        }
    }
}
