 function playGame(PlayerMove){
            const computerMove = pickComputerMove();
    
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
            alert(`your move ${PlayerMove} the Computer move is ${computerMove} and the result is ${result}`);
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