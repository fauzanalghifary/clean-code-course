## What makes up a function ?

```js
function add(n1, n2) {
  return n1 + n2;
}

add(5, 7);
```

- working with the function should be easy/readable
  - the length of the function body matters
- calling the function should be readable
  - the number and order of arguments matter

## Minimize the number of parameters

- none (e.g: `user.save()`)
  - best possible option
- 1 (e.g: `log(message)`)
  - very good possible option
- 2 (e.g: `Point(10, 20)`)
  - use with caution
- 3 (e.g: `calcs(5, 10, 'add')`)
  - avoid if possible
- more than 3 (e.g: `coords(10, 3, 9, 12)`)
  - ALWAYS AVOID

## Abstraction

- Functions should do work that's one level of abstraction below their name

```js
function emailIsValid(email) {
  return email.includes("@");
}
```

- Try Not To Mix Level of Abstractions

bad example:

```js
if (!email.includes("@")) {
  console.log("Invalid Email");
} else {
  const user = new User(email);
  user.save();
}
```

good example:

```js
if (!isEmail(email)) {
  showError("Invalid email");
} else {
  saveNewUser(email);
}
```

## Keeping Functions Short

- Extract code that works on the same functionality
- Extract code that requires more interpretation than the surrounding code

## DRY (Don't Repeat Yourself)

- Don't write the same code more than once
- BUT, being as granular as possible won't automatically improve readibility

## Pure Functions

- Same input, same output.
- No side effect
- Unexpected side effects should be avoided
- NAMING MATTERS! name should signal or imply that a side effects likely to occur
  - `saveUser()` => expected
  - `isValid()` => not expected
  - `showMessage()` => expected
  - `createUser()` => not necessarily expected

## Testing

- Can you easily test a function?
