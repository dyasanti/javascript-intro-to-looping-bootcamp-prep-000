function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      console.log (`I am ${i} strange loops.`)
    }
  }
}

function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
    } while (array.length > 0 && maybeTrue());
    return array
}

