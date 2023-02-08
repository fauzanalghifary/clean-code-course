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
