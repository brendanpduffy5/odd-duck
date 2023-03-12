'use strict';

// >>>>>>>>>>> GLOBAL VARIABLES

let voteCount = 25;

// single source of truth for data that can change w our application state
const state = {
  allProductsArray: [],
};

// DOM References:

let imgContainer = document.getElementById('grid-element-three');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsButton = document.getElementById('results-button');
let resultsList = document.getElementById('results-list');

// >>>>>>>>>>> CONSTRUCTOR FUNCTOIN:

function Product(name, fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExtension}`;
  state.allProductsArray.push(this);
}

let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product ('boots');
let breakfast = new Product ('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogduck = new Product ('dog-duck');
let dragon = new Product ('dragon');
let pen = new Product('pen');
let petsweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product ('shark');
let sweep2 = new Product ('sweep2');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let watercan = new Product('water-can');
let wineglass = new Product ('wine-glass');

console.log(state.allProductsArray);

function getRandomIndex(){
  return Math.floor(Math.random()*state.allProductsArray.length);
}
// console.log(getRandomIndex());
// random number works.

function renderImgs(){
  let indexOne = getRandomIndex();
  let indexTwo = getRandomIndex();
  let indexThree = getRandomIndex();

  while(indexOne === indexTwo){
    indexTwo = getRandomIndex();
    while(indexTwo === indexThree){
      indexThree = getRandomIndex();
    }
  }
  imgOne.src = state.allProductsArray[indexOne].photo;
  imgOne.alt = state.allProductsArray[indexOne].name;
  state.allProductsArray[indexOne].views++
  console.log(state.allProductsArray[indexOne.views++]);

  imgTwo.src = state.allProductsArray[indexTwo].photo;
  imgTwo.alt = state.allProductsArray[indexTwo].name;
  state.allProductsArray[indexTwo].views++
  console.log(state.allProductsArray[indexTwo.views++]);

  imgThree.src = state.allProductsArray[indexThree].photo;
  imgThree.alt = state.allProductsArray[indexThree].name;
  state.allProductsArray[indexThree].views++;
  console.log(state.allProductsArray[indexThree.views++]);
}
renderImgs();

function handleClick(event){
  voteCount--;
  let imgClicked = event.target.alt;
  for(let i = 0; i < state.allProductsArray.length; i++){
    if(imgClicked === state.allProductsArray[i].name){
      state.allProductsArray[i].votes++;
      console.log(imgClicked, state.allGoatsArray[i].votes);
    }
  }
  renderImgs();

  //   STOP VOTES AFTER 25
  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
  console.log(voteCount);
}

function handleShowResults(){
  if (voteCount === 0){
      for (let i =0; i < state.allProductsArray.length; i++){
        let liElem = document.createElement('li');
        liElem.textContent= `${state.allProductsArray[i].name} was shown ${state.allProductsArray[i].views} and had ${state.allProductsArray[i].votes} votes`; resultsList.append(liElem);
      }
    }
  }

  imgContainer.addEventListener('click', handleClick);
  resultsButton.addEventListener('click', handleShowResults);





