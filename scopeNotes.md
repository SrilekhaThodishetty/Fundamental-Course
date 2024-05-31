# Not defined vs Defined

- not defined - is an error in javascript
- undefined - when we declare the variable but not assign the value.

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
        // let& const -block scope {}
      {
        var x1 = 10;
        let x2 = 20;
      }
      console.log(x1);
      console.log(x2); //not defined

    </script>
  </body>
</html>
```

## Implicit coercion

```js
var x1 = 3;
var x2 = "5";
console.log(x1 + x2); //35
console.log(x1 - x2); //-2
```

## Explicit coercion

```js
var x1 = 3;
var x2 = "5";
to convert x2 into number
console.log(x1 + parseInt(x2)); //8
console.log(x1 + +x2); //8
```

# == vs ===

- == Allows coercion,it is slower,
- === Does not allow coersion,it is faster

## Types of Functions

- Normal function
- Arrow function //const double =(n)=>n\*2;
-
-

## 5 pillars of code quality

1.Readability - 75%

2.Maintainability - Code Debt

3.Extensibility

4.Testability

5.Performance

## Types of for loop

for loop
for of

### for loop

```js
const marks = [80, 90, 100, 60, 70];
for (let i = 0; i < marks.length; i++) {
  console.log("Index:", i, "Mark:", marks[i]);
}
```

### for in

```js
//used for index pased program
for (let idx in marks) {
  console.log("Index:", i, "Mark:", marks[idx]);
}
```

### for of

```js
//when index is not required
for (let mark of marks) {
  console.log("Mark:", mark);
}
```
