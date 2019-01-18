// if (true){
//     var a = 'ff';
// }
// console.log(a);
//
// if (true){
//     let b = 'ff';
// }
// console.log(b);

const tabMachine = [
  {
    type: 'machine',
    value: 457
  },
  {
    type: 'machine',
    value: 2
  },
  {
    type:'machine2',
    value: 78
  }
];

const CALCUL = function (type){
  let tab = [];
  let res = 0;
  for (let machine of tabMachine){
    if (machine.type === type){
      tab.push(machine.value);
    }
  }
  tab.map(v => res = res +v);
  console.log(res);
};

CALCUL('machine');
