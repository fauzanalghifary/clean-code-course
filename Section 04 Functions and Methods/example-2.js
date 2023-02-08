// =================
// This is better
// =================

function log(message) {
  console.log(message);
}

log("Hi there!");

// =================
// Not a fan
// =================

class Message {
  constructor(message) {
    this.message = message;
  }

  log() {
    console.log(this.message);
  }
}

const msg = new Message("Hi!");
msg.log();

// =================
// good
// =================

function square(number) {
  return number * number;
}

const result = square(3);

// =================
// good
// =================

function emailIsValid(email) {
  return email.includes("@");
}

const isValid = emailIsValid("max@test.com");
