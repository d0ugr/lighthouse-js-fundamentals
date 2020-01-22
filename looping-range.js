


function range(start, stop, step)
{
  const result = [];

  if (start <= stop && step >= 0) {
    for (let i = start; i <= stop; i += step) {
      result.push(i);
    }
  }

  return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));



