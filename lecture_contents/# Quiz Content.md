# 🎨 Quiz Content

## Day1. Quiz code

```javascript
class ObjectUtilities {
  static mergeObjects(objA, objB) {
    const user = Object.assign({}, objA, objB);
    return user;
  }
  static removePassword(user) {
    const user2 = Object.assign({}, user);
    delete user2.password;
    return user2;
  }
  static freezeObj(cleanUser) {
    Object.freeze(cleanUser);
    return cleanUser;
  }
  static getOnlyValues(frozenUser) {
    return Object.values(frozenUser);
  }
  static getOnlyProperties(frozenUser) {
    return Object.getOwnPropertyNames(frozenUser);
  }
  /* Your magic here */
}

const objA = {
  name: "Nicolas",
  favFood: "Kimchi",
};

const objB = {
  password: "12345",
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!"; // This should show an error
```

## Day1. Quiz code Answer

```javascript
class ObjectUtilities {
  static mergeObjects = (objectA, objectB) => ({ ...objectA, ...objectB });
  static removePassword = ({ password, ...rest }) => rest;
  static getOnlyProperties = (obj) => Object.keys(obj);
  static getOnlyValues = (obj) => Object.values(obj);
  static freezeObj = (obj) => Object.freeze(obj);
}
```

## Day2. Quiz code

```javascript
class ArrayUtilities {
  static addZeros = (numbers) => numbers.map((number) => `${number}` + 0);
  static moreThanFifty = (numbers) => numbers.filter((number) => number > 50);
  static removeFirst = (numbers) => numbers.slice(1);
  static sumAll = (numbers) => {
    const array = numbers.map((number) => parseInt(number));
    return array.reduce((a, b) => a + b);
  };
  static divide = (number) => number.toString().split("");
  /* Your magic here */
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
```

## Day2. Quiz code answer

```javascript
class ArrayUtilities {
  static addZeros = (arr) => arr.map((n) => n * 10);
  static moreThanFifty = (arr) => arr.filter((n) => n > 50);
  static removeFirst = (arr) => {
    const [, ...rest] = arr;
    return rest;
  };
  static sumAll = (arr) => arr.reduce((a, b) => a + b, 0);
  static divide = (payload) => `${payload}`.split("");
}
```

...을 잘 이용하면 좋습니다!

## Day3. Quiz code

해당 링크: [Go to Link](https://codesandbox.io/s/day-three-blueprint-7cdv1?file=/src/Components/App.js)

> react simple router

## Day3. Quiz code answer

해당 링크: [Go to Link](https://codesandbox.io/s/day-three-solution-o4vol?file=/src/Components/Header.js)

## Day4. Quiz code

해당 제출 링크: [Go to Link](https://codesandbox.io/s/day-four-boilerplate-ew5n2?file=/src/Components/Header.js), [Go to Link](https://codesandbox.io/s/day-four-boilerplate-idhk5?file=/src/Components/Header.js)

> react simple router + styled-components

## Day4. Quiz code answer

해당 제출 링크: [Go to Link](https://codesandbox.io/s/day-four-solution-3j7gi?file=/src/Components/Header.js)

# Day5~6. Quiz code

제출 코드 : [Go to Link](https://codesandbox.io/s/day-five-blueprint-forked-mdbym)  
정답 코드 : [Go to Link](https://codesandbox.io/s/day-five-solution-xoocs?file=/src/Screens/Coins/CoinsPresenter.js)

> react router + api control

## Day9. Quiz code

제출 코드 : [Go to Link](https://codesandbox.io/s/day-five-solution-forked-2ifk8)  
정답 코드 : [Go to Link](https://codesandbox.io/s/day-six-solution-6n2q7?file=/src/Screens/CoinExchanges/CoinExchangesPresenter.js)

> react router + api control + detail

## Day9. Quiz code

제출 코드 : [Go to Link](https://codesandbox.io/s/day-six-solution-forked-7uzq3)

> react router + api control + detail + href

### ✈ Day10. Quiz code

제출 코드 : [Go to Link](https://codesandbox.io/s/day-seven-blueprint-forked-gwox0)

> reactHook

### ✈ Day11. Quiz code

제출 코드 : [Go to Link](https://codesandbox.io/s/day-seven-blueprint-forked-qh05z?file=/src/index.js:0-1382)

> Infinite Scroll

## Day12. Quiz code

제출 코드 : [Go to Link](https://codesandbox.io/s/day-eight-solution-forked-tf7fu)

> react router + api control + reactHook
