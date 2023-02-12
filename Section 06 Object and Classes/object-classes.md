## Object vs Data Structure

- Object
  - private internals/properties, public API (methods)
  - contain your business logic (in OOP)
  - abstractions over concretions
- Data Structure/Data Containers
  - public internals/properties, almost no API (methods)
  - store and transport data
  - concretions only

## Polymorphism

- The ability of an object to take on many forms

## Classes should be small

- prefer many small classes over a few large classes
- Classes should have a single responsibility (SRP)

## Cohesion

- How much your class methods using the class properties
  - maximum cohesion (a highly cohesive object)
  - no cohesion (data container with utility methods)
- Goals => highly cohesive classes

## The Law of "Demeter" ==> "Tell", not "Ask"

- Principle of Least Knowledge: Don't depend on internals strangers (other object you don't directly know)

```js
this.customer.lastPurchase.date;
```

- only access direct internals of
  - the object it belongs to
  - object that are stored in properties of that object
  - object which are received as method parameters
  - object which are created in the method

## SOLID Principles

- Single Responsibility Principle
- Open-Closed Principle
  - open for extension, but close for modification
  - this will ensure small class and can help to stay DRY
- Liskov Substitution Principle
  - Objects should be replaceable with instances of their subclasses without altering their behaviour
- Interface Segregation Principle
  - many client-specific are better than one general purpose interface
- Dependency Inversion Principle
  - you should depend upon abstractions, not concretions
