- Avoid deep nesting
- Using factory functions and Polymorphism
- Prefer positive checks
- Utilize errors

## Use Guard and FAIL FAST

```js
if (!email.includes("@")) {
  return;
}
// Do stuff
```

## Embrace Errors & Error Handling

- if something is an error, make it an error!
