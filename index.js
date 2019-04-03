let getElem = element => document.getElementById(element);

let containers = [
  getElem('cont1'),
  getElem('life-one'),
  getElem('life-two'),
  getElem('life-main'),
  getElem('cont2'),
  getElem('is-one'),
  getElem('is-two'),
  getElem('is-main')
]
//
let [containerOne, lifeOne, lifeTwo, lifeMain, containerTwo, isOne, isTwo, isMain] = containers;



let expandFunc = () => {
  lifeOne.innerHTML = "MAKE";
  lifeTwo.innerHTML = "HAPPEN";
  lifeMain.classList.add('main-text');
  containerOne.classList.add('container-two');


}

let expandFunc2 = () => {
  isOne.innerHTML = "CHANGE";
  isTwo.innerHTML = "FREEDOM";
  isMain.classList.add('main-text');
  containerTwo.classList.add('container-two');
}

containerOne.addEventListener('click', expandFunc);
containerOne.removeEventListener('click', expandFunc);
containerTwo.addEventListener('click', expandFunc2);

let eventRemover = () => {
  if(expandFunc){
    containerTwo.removeEventListener('', expandFunc2);
  }
}

eventRemover();
