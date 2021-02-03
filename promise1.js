const n = [];

for (let i = 0; i < 10; i++) {
  n.push(
    new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(i + 1);
      }, 10000);
    })
  );
}

Promise.all(n)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
