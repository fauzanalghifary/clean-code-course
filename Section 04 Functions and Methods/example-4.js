// ======================
// BAD
// ======================

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

const user = new User("Max", 31, "max@test.com");

// ======================
// GOOD
// ======================

class User {
  constructor(userData) {
    this.name = userData.name;
    this.age = userData.age;
    this.email = userData.email;
  }
}

const user2 = new User({ name: "Max", email: "max@test.com", age: 31 });

// ======================
// BAD
// ======================

function compare(a, b, comparator) {
  if (comparator === "equal") {
    return a === b;
  } else if (comparator === "not equal") {
    return a !== b;
  } else if (comparator === "greater") {
    return a > b;
  } else if (comparator === "smaller") {
    return a < b;
  }
}

const isSmaller = compare(3, 5, "smaller");
const isEqual = compare(3, 5, "equal");

// ======================
// GOOD
// ======================

function compare(comparisonData) {
  const { first, second, comparator } = comparisonData;
  if (comparator === "equal") {
    return first === second;
  } else if (comparator === "not equal") {
    return first !== second;
  } else if (comparator === "greater") {
    return first > second;
  } else if (comparator === "smaller") {
    return first < second;
  }
}

const isSmaller2 = compare({ first: 3, second: 5, comparator: "smaller" });
const isSmaller3 = compare({ comparator: "equal", first: 3, second: 5 });
