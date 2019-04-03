let getElem = element => document.getElementById(element);

let containers = [
  getElem('cont1'),
  getElem('life-one'),
  getElem('life-two'),
  getElem('life-main')
]
//
let [containerOne, lifeOne, lifeTwo, lifeMain] = containers;

let expandFunc = () => {
  lifeOne.innerHTML = "MAKE";
  lifeTwo.innerHTML = "HAPPEN";
  lifeMain.classList.add('main-text');
  containerOne.classList.add('container-two');
}
