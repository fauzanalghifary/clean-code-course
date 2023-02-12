// ======================
// GOOD
// ======================

function createUser(email, password) {
  if (!userDataIsValid(email, password)) {
    showValidationErrorMessage();
    return;
  }

  const user = buildUser(email, password);

  saveUserToDatabase(user);
}

function userDataIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
  return email && email.includes("@");
}

function passwordIsValid(password) {
  return password && password.trim() !== "";
}

function showValidationErrorMessage() {
  console.log("Invalid input!");
}

function buildUser(email, password) {
  return {
    email: email,
    password: password,
  };
}

function saveUserToDatabase(user) {
  database.insert(user);
}

// ======================
// BETTER
// ======================

function handleCreateUserRequest(request) {
  try {
    createUser("test@test.com", "testers");
  } catch (error) {
    showErrorMessage(error.message);
  }
}

function createUser(email, password) {
  validateInput(email, password);

  saveUser(email, password);
}

function validateInput(email, password) {
  if (!inputIsValid(email, password)) {
    throw new Error("Invalid input!");
  }
}

function inputIsValid(email, password) {
  return email && email.includes("@") && password && password.trim() !== "";
}

function showErrorMessage(message) {
  console.log(message);
}

function saveUser(email, password) {
  const user = {
    email: email,
    password: password,
  };

  database.insert(user);
}

// ======================
//
// ======================

function createUser(email, password) {
  if (!email || !password) {
    console.log("Both email and password must be provided!");
    return;
  }
  if (
    !email.includes("@") ||
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/.test(
      password
    ) ||
    password.length < 7
  ) {
    console.log("Email or password is invalid!");
    return;
  }

  const user = {
    email: email,
    password: password,
  };
  const query =
    "INSERT INTO users VALUES (" + user.email + ", " + user.password + ")";
  database.runQuery(query);
}

// ======================
//
// ======================

function createUser(email, password) {
  try {
    setupUser(email, password);
  } catch (error) {
    handleError(error);
  }
}

function setupUser(email, password) {
  validateUserData(email, password);

  const user = buildUser(email, password);

  saveUserToDatabase(user);
}

function validateUserData(email, password) {
  if (!userDataIsValid(email, password)) {
    throw new Error("Invalid input!");
  }
}

function userDataIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
  return email && email.includes("@");
}

function passwordIsValid(password) {
  return password && password.trim() !== "";
}

function buildUser(email, password) {
  return {
    email: email,
    password: password,
  };
}

function saveUserToDatabase(user) {
  database.insert(user);
}

function handleError(error) {
  console.log(error.message);
}
