## Names should be meaningful

- ### Bad Names

```js
if (login) {
    ...
}
```

- ### Good name

```js
if (isLoggedIn) {
    ...
}
```

## Name Casing

- snake_case
- camelCase
- PascalCase
- kebab-case

## Naming Variables and Constant

- Value is an Object
  - describe the value
  - e.g. = `user`, `database`, `authenticatedUser`, `sqlDatabase`
- Value is number or string
  - describe the value
  - e.g. = `name`, `age`, `firstName`
- Value is boolean

  - answer a true/false question
  - e.g. = `isActive`, `isLoggedIn`

- variable that store user object
  - bad: `u`, `data`
  - okay: `userData` (redundant), `person`
  - good: `user`, `customer`
- variable that store user input result (true/false)
  - bad: `v`, `val`
  - okay: `correct`, `validatedInput`
  - good: `isCorrect`, `isValid`

## Naming Functions and Methods

- Function performs an operation
  - describe the operation
  - e.g. = `getUser()`, `response.send()`, `getUserByEmail()`
- Function computes a boolean

  - answer a true/false question
  - e.g. = `isValid()`, `purchase.isPaid()`, `emailIsValid()`

- function that save user data to a databse
  - bad: `process()`, `handle()`
  - okay: `save()`, `storeData()`
  - good: `saveUser()`, `user.store()`
- function that validate user input
  - bad: `process()`, `save()`
  - okay: `validateSave()`, `check()`
  - good: `validate()`, `isValid`

## Naming Class

- Describe the Object

  - `User`, `Product`, `Customer`, `Course`

- Class that described a user
  - bad: `UEntity`, `ObjA`
  - okay: `UserObj`, `AppUser`
  - good: `User`, `Admin`
- Class that described a database
  - bad: `Data`, `DataStorage`
  - okay: `Db`
  - good: `Database`, `SQLDatabase`

## Exception

## Common Pitfalls

- Don't include redundant information in names
  - bad = `userWithNameAndAge`
  - good = `user`, `newUser`, `loggedInUser`
- Avoid slang, unclear abbreviations, and disinformation
  - bad = `product.diePlease()`, `user.facePalm()`, `ymdt()`
  - good: `product.remove()`, `user.sendErrorMessage()`, `dateWithTimezone`
- Chose distinctive names!
  - bad
    - `analytics.getDailyData(day)`
    - `analytics.getDayData()`
    - `analytics.getRawDailyData(day)`
    - `analytics.getParsedDailyData(day)`
  - good
    - `analytics.getDailyReport(day)`
    - `analytics.getDataForToday()`
    - `analytics.getRawDailyData(day)`
    - `analytics.getParsedDailyData(day)`
- Be Consistent!
