
const miArray = [{animal: 1, patas:4}, {animal: 2, patas:4}, {animal: 3, patas:4}, {animal: 4, patas:4}];

const reducir = miArray.reduce((total,item) => item.animal * item.patas,0);

console.log(reducir);