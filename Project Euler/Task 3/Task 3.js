// function primeFactors(number){
//     let primeNumbers=[];
//     for(i=2; i<=100; i++){
//        if (i%1===0 && i)
//     }
// }

function primeFactors(number) {
    const factors = [];
    let divisor = 2;
  
    while (number > 1) {
      while (number % divisor === 0) {
        factors.push(divisor);
        console.log(factors);
        number /= divisor;
      }
      divisor++;
    }
  
    return factors;
  }
  
  // Example: Finding prime factors of 13195
  const targetNumber = 600851475143;
  const result = primeFactors(targetNumber);
  
  console.log(`Prime factors of ${targetNumber}: ${result.join(', ')}`);