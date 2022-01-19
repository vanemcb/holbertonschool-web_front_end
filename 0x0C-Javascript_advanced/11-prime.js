function countPrimeNumbers() {
  function isPrime(num) {
    let prime = true;
    for (let x = 2; x < num; x++) {
      if (num % x == 0) {
        prime = false;
        break;
      }
    }
    return prime
  }

  let cont = 0;
  for (i = 2; i <= 100; i++) {
    if (isPrime(i) == true) {
      cont++;
    }
  }
  console.log(cont);

}

const t0 = performance.now();

setTimeout(() => {
  for (let j = 1; j <= 100; j++) {
    countPrimeNumbers();
  }
}, 0);
const t1 = performance.now();
console.log('Execution time of calculating prime numbers 100 times was ' + (t1 - t0) + ' milliseconds.');
