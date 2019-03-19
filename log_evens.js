const log_evens=(number) => {

for (i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
return "even numbers";
}
log_evens(30);
