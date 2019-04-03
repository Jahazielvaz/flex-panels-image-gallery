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

containerOne.addEventListener('click', expandFunc, false);

let expandFunc2 = () => {
  isOne.innerHTML = "CHANGE";
  isTwo.innerHTML = "FREEDOM";
  isMain.classList.add('main-text');
  containerTwo.classList.add('container-two');

}


containerTwo.addEventListener('click', expandFunc2);
containerTwo.addEventListener('click', () => containerOne.removeEventListener('click', expandFunc, false));
