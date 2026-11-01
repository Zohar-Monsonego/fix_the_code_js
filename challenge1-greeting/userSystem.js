const users = [];

export function greetUser(name) {
  if (!users.includes(name)) {
    users.push(name);
    console.log(`Welcome, ${name}!`);
  } else {
    console.log(`Welcome back, ${name}!`);
  }
}
