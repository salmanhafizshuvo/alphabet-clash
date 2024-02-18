// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// } 

function hendelKeybordUpEvent(event){
   const playerPress = event.key;

   const currentAlphabetElememnt = document.getElementById('current-alphabet')
   const currentAlphabete = currentAlphabetElememnt.innerText;
   const ecprecetdAlphabate = currentAlphabete.toLowerCase();

   if(playerPress === ecprecetdAlphabate){
       console.log(true);
       // //score the score 
       // const currentScoreElement = document.getElementById('currentScore')
       // const currentScoreText = currentScoreElement.innerText
       // const currentScore = parseInt(currentScoreText);
       // console.log(currentScore);
       const currentScore = getTextElementValueById('currentScore')
       const newScore = currentScore + 1;
       SetTextElementValueById('currentScore' ,newScore ) 
       // currentScoreElement.innerText = newScore;
       // start a round
       removeBackgroundColorById(ecprecetdAlphabate)
       continueGame()
   }
   else{
       const currentLifes = getTextElementValueById('currentLife');
    
   // get the current life 
   // const currentLifeElement = document.getElementById('currentLife');
   // const currentlifeText = currentLifeElement.innerText;
   // const currentlife = parseInt(currentlifeText)

   //reduce life count 
   const newlife = currentLifes - 1;
   //display life 
     SetTextElementValueById('currentLife',newlife)

     if(newlife === 0){
       gameOver();
     }
   }

       



}



document.addEventListener('keyup',hendelKeybordUpEvent)

function continueGame(){
   // step -1: generate a random alphabet
   const alphabet = getARandomAlphabet();
   console.log('your random alphabet', alphabet);

   // set randomly generated alphabet to the screen (show it)
   const currentAlphabetElement = document.getElementById('current-alphabet');
   currentAlphabetElement.innerText = alphabet;

   // set background color
   setBackgroundColorById(alphabet);
}

function play(){
   hideElementById('home-screen');
   hideElementById('finalScore');
   showElementById('play-ground');
   // reste score and life
   SetTextElementValueById('currentLife' , 5  );
   SetTextElementValueById('currentScore' , 0);
   continueGame();
}

function gameOver(){
   hideElementById('play-ground')
   showElementById('finalScore')
   
   // update final score ?
   const lastScores = getTextElementValueById('currentScore');
   SetTextElementValueById('lastscore', lastScores )

   // clear the last selectet alphabet 
   const currentAlphabet = getElementTextId('current-alphabet');
   // console.log(currentAlphabet);
   removeBackgroundColorById(currentAlphabet)

}