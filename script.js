let score=JSON.parse(localStorage.getItem('score')) || {
    wins :0,
    looses :0,
    ties :0
};

// if (score===null) { // if(!score) because its a falsy value or else we use OR oparator
//     score = {
//         wins :0,    // because we use OR operator
//         looses :0,
//         ties :0
//     }
// }


function playGame(PlayerMove){
            const computerMove = pickComputerMove();

            console.log();
            
    
            let result ='';
           if (PlayerMove==='scissor') {
                if(computerMove==='rock'){
                    result='loose';
                }
                else if (computerMove===`paper`) {
                    result='win';
                }
                else if (computerMove==='scissor') {
                    result='tie';
                }
           }
           else if (PlayerMove==='paper') {
                if(computerMove==='rock'){
                    result='win';
                }
                else if (computerMove===`paper`) {
                    result='tie';
                }
                else if (computerMove==='scissor') {
                    result='loose';
                }
           }
           else if (PlayerMove==='rock') {
                if(computerMove==='rock'){
                    result='tie';
                }
                else if (computerMove===`paper`) {
                    result='loose';
                }
                else if (computerMove==='scissor') {
                    result='win';
                }
           }

           if(result==='win'){
            score.wins +=1;
           }
           else if (result==='loose') {
            score.looses+=1;
           }
           else if (result==='tie') {
            score.ties +=1;
           }

           localStorage.setItem('score',JSON.stringify(score));


            alert(`your move ${PlayerMove} the Computer move is ${computerMove} and the result is ${result} \n Wins : ${score.wins}  Looses : ${score.looses}  Ties : ${score.ties}` );
}

function pickComputerMove(){
    let computerMove='';
    const randomNumber= Math.random();
    console.log(randomNumber);
        if(randomNumber>=0 && randomNumber<=1/3){
            computerMove=`rock`;
        }
        else if(randomNumber>1/3 && randomNumber<=2/3){
            computerMove=`paper`;
        }
        else if(randomNumber>2/3 && randomNumber<1){
            computerMove=`scissor`;
        }
        console.log(computerMove); 
    return computerMove;
}