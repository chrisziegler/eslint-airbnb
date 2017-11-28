const bar = 10;
const foo = bar + 20;

const myObj = {
  name: 'Chris',
  age: 50
};

const work = new Promise((resolve, reject) => {
  resolve('Some data');
});
work.then((data) => {
  console.log(data);
});

myObj.age = 51;

document.write(foo);
