const temps = [];

export function addTemperature(temp) {
  temps.push(temp);
  let sum = 0;

  let avg = 0;
  temps.forEach((t) => (sum += t));
  avg = sum / temps.length;
  console.log(`Average temperature: ${avg}`);
}
