// ======================
// GOOD
// ======================

function login(email, password) {
  // Log a user in
  // ...
}

login("max@test.com", "testpassword");

// ======================
// GOOD
// ======================

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(10, 13);

// ======================
// BAD
// ======================

function log(message, isError) {
  if (isError) {
    console.error(message);
  } else {
    console.log(message);
  }
}

log("Hi there!", false);

// ======================
// GOOD
// ======================

function log(message) {
  console.log(message);
}

function logError(errorMessage) {
  console.error(errorMessage);
}

log("Hi there!");
logError("An error!");
