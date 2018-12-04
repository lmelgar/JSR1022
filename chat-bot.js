/* set lets*/
let botButton = document.getElementById('bot-button'),
talking = document.getElementById('you-said'),
youSaid = '',
yourName = '',
itSaid = document.querySelector('#bot-talks p'),
countQuestion = 0,
name = '';

/* set consts*/
const ALTNAMES = ["Guillaume", "Max", "Marius", "Beatrice", "Pranas", "Tsuji", "Elsa", "Clement", "Yi", "Ives"],
LIKE = ["yes", "yep", "cool", "love"],
DISLIKE = ["nope", "no", "yike", "hate"],
WORDS1 = ["good", "fine", "ok", "great", "not bad", "yes", "awesome"],
WORDS2 = ["bad", "hell", "miserable", "awful", "sad", "sick", "not ok", "not well", "not good", "no", "soso", "so so"],
COLORS = ["blue", "green", "orange", "purple", "yellow"],
SWEET = ["beautiful", "nice", "elegant", "classy", "handson", "pretty", "handsome", "pleasing", "very good", "delightful", "charming", "good-looking", "ideal", "wonderful", "marvelous", "lovely", "awesome", "impresive", "sumblime", "good", "terrific", "tasteful", "cool"],
RUDE = ["awful", "ugly", "boring", "dull", "plain", "not very good", "not very nice", "not good", "bad", "not nice", "horrible", "clumsy", "awkward", "inelegant", "terrible", "agh"],
BACKGROUND = document.getElementById('bot-container'),
BUTTONBACKGROUND = document.getElementsByTagName('button')[0],
SMARTEST = `I'm not the smartest bot, I didn't understand you. Reload the page if you want to try it again.`,
COLORSP = document.getElementsByClassName('p-color'),
COLORSPFIRST = document.getElementsByClassName('p-color')[0],
FAIL = document.getElementById('fail'),
BYEDIV = document.getElementById('you-talk');


/* event listener*/
botButton.addEventListener('click', function() {
  yourAnswer();
  talkingToMe(youSaid);

});

/* this function take what the human says, store it and remove it from the screen*/
function yourAnswer() {
  youSaid = talking.value;
  const CLEAN = talking.value = '';

}

/* this function choses a number so I can select a name from the array ALTNAMES*/
function newName() {
  let numberName = Math.floor(Math.random() * 9);
  yourName = ALTNAMES[numberName];
}

function choseColors() {
  for(var i = 0; i < COLORS.length; i++) {
    itSaid.insertAdjacentHTML('afterend', `<p class="p-color" id="${COLORS[i]}">${COLORS[i]}</p>`);
  }
}

function talkingToMe(whatUSaid) {
  countQuestion++;

  function backgroundColor(whatUSaid) {

    whatUSaid = whatUSaid.toLowerCase();

    if(whatUSaid === "blue") {
      whatUSaid = "rgb(206,232,252)";
      BACKGROUND.style.backgroundColor = whatUSaid;
      BUTTONBACKGROUND.style.backgroundColor = whatUSaid;
    } else if(whatUSaid === "green") {
      whatUSaid = "rgb(192,246,206)";
      BACKGROUND.style.backgroundColor = whatUSaid;
      BUTTONBACKGROUND.style.backgroundColor = whatUSaid;
    } else if(whatUSaid === "yellow") {
      whatUSaid = "rgb(246,246,193)";
      BACKGROUND.style.backgroundColor = whatUSaid;
      BUTTONBACKGROUND.style.backgroundColor = whatUSaid;
    } else if(whatUSaid === "purple") {
      whatUSaid = "rgb(228,192,246)";
      BACKGROUND.style.backgroundColor = whatUSaid;
      BUTTONBACKGROUND.style.backgroundColor = whatUSaid;
    } else {
      whatUSaid = "rgb(247,218,192)";
      BACKGROUND.style.backgroundColor = whatUSaid;
      BUTTONBACKGROUND.style.backgroundColor = whatUSaid;
    }

    /*function background color ends here*/
  }

  function removeP() {

    for(i = 0; i < COLORSP.length; i++) {
      COLORSP[i].style.display = "none";
    }
  }

  const NOSPACE = whatUSaid.trim() !== '';

  function q1() {

    name = whatUSaid;

    newName();

    itSaid.innerText = `Oh, that's a beautiful name, ${name}. Anyway, I have decided that your name is going to be ${yourName}. Do you like it?`;

  }

  function q2() {
    whatUSaid = whatUSaid.toLowerCase();

    if(new RegExp(LIKE.join("|")).test(whatUSaid)) {
      itSaid.innerText = `I'm glad you liked it, ${yourName}. Let's move on: How are you doing today?`;

    } else if(new RegExp(DISLIKE.join("|")).test(whatUSaid)) {
      itSaid.innerText = `Ooook, I'll call you ${name}. Boring. Let's move on: How are you doing today?`;

    } else {

      itSaid.innerText = SMARTEST;
      FAIL.style.display = "block";

    }
  }

  function q3() {

    whatUSaid = whatUSaid.toLowerCase();

    if(new RegExp(WORDS1.join("|")).test(whatUSaid)) {
      itSaid.innerText = `That's awesome! Why don't you help me with something, choose a color:`

      choseColors();

    } else if(new RegExp(WORDS2.join("|")).test(whatUSaid)) {
      itSaid.innerText = `I'm sorry to read that 😔. Let's see if I can cheer you up. Choose a color:`

      choseColors();


    } else {
      itSaid.innerText = SMARTEST;
      FAIL.style.display = "block";
    }

  }

  function q4(){

    removeP();

    whatUSaid = whatUSaid.toLowerCase();

    if(new RegExp(COLORS.join("|")).test(whatUSaid)) {

      itSaid.innerText = `Well done: ${whatUSaid} is a beautiful, classy color. How do I look?`

      whatUSaid = whatUSaid.toLowerCase();

      backgroundColor(whatUSaid);


    } else {

      itSaid.innerText = SMARTEST;
      FAIL.style.display = "block";
    }

  }

  function q5() {

    whatUSaid = whatUSaid.toLowerCase();

    if(new RegExp(SWEET.join("|")).test(whatUSaid)) {
      itSaid.innerText = `That's so nice 😊. Thank you. Well, It's been a pleasure, but I'm a new bot and I'm tired. It's time to say goodbye.`;

    } else if(RegExp(RUDE.join("|")).test(whatUSaid)) {
      itSaid.innerText = `You're mean! Enough 😡. I think it's time for us to finish this conversation.`
    } else {
      itSaid.innerText = SMARTEST;
      FAIL.style.display = "block";
    }

  }


  if(NOSPACE) {

    if(countQuestion === 1) {

      q1();

    } else if(countQuestion === 2) {

      q2();

    } else if (countQuestion === 3) {

      q3();

    } else if(countQuestion === 4 /*&& mood*/) {

      q4();

    } else if(countQuestion === 5) {

      q5();

    } else if(countQuestion === 6) {
      BYEDIV.style.display="none";
      itSaid.innerText = `Take care! 👋`;
      itSaid.insertAdjacentHTML('afterend', `<div id="bye-bye" style="width:100%;height:0;padding-bottom:43%;position:relative;"><iframe src="https://giphy.com/embed/2oVfyRHk1EuRy" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`);


    }

  } else {
    itSaid.innerText = "Reload me and write something.";
    FAIL.style.display = "block";
  }

  //function talkingToMe ends here
}
