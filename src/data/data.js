export const data = {
  0: {
    titulo: "1. What's the output?",
    codigo:
      "function sayHi() { console.log(name); console.log(age); var name = 'Lydia'; let age = 21; } sayHi();",
    option: [
      "A: Lydia and undefined",
      "B: Lydia and ReferenceError",
      "C: ReferenceError and 21",
      "D: undefined and ReferenceError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d">Answer: D</h4><p>Within the function, we first declare the <code>name</code> variable with the <code>var</code> keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of <code>undefined</code>, until we actually get to the line where we define the variable. We haven\'t defined the variable yet on the line where we try to log the <code>name</code> variable, so it still holds the value of <code>undefined</code>.</p><p>Variables with the <code>let</code> keyword (and <code>const</code>) are hoisted, but unlike <code>var</code>, don\'t get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a <code>ReferenceError</code>.</p><p></p>',
    correct: "D",
  },
  1: {
    titulo: "2. What's the output?",
    codigo:
      "for (var i = 0; i &lt; 3; i++) {\n  setTimeout(() =&gt; console.log(i), 1);\n}\n\nfor (let i = 0; i &lt; 3; i++) {\n  setTimeout(() =&gt; console.log(i), 1);\n}\n",
    option: ["A: 0 1 2 and 0 1 2", "B: 0 1 2 and 3 3 3", "C: 3 3 3 and 0 1 2"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c">Answer: C</h4><p>Because of the event queue in JavaScript, the <code>setTimeout</code> callback function is called <em>after</em> the loop has been executed. Since the variable <code>i</code> in the first loop was declared using the <code>var</code> keyword, this value was global. During the loop, we incremented the value of <code>i</code> by <code>1</code> each time, using the unary operator <code>++</code>. By the time the <code>setTimeout</code> callback function was invoked, <code>i</code> was equal to <code>3</code> in the first example.</p><p>In the second loop, the variable <code>i</code> was declared using the <code>let</code> keyword: variables declared with the <code>let</code> (and <code>const</code>) keyword are block-scoped (a block is anything between <code>{ }</code>). During each iteration, <code>i</code> will have a new value, and each value is scoped inside the loop.</p><p></p>',
    correct: "C",
  },
  2: {
    titulo: "3. What's the output?",
    codigo:
      "const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () =&gt; 2 * Math.PI * this.radius,\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());\n",
    option: [
      "A: 20 and 62.83185307179586",
      "B: 20 and NaN",
      "C: 20 and 63",
      "D: NaN and 63",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b">Answer: B</h4><p>Note that the value of <code>diameter</code> is a regular function, whereas the value of <code>perimeter</code> is an arrow function.</p><p>With arrow functions, the <code>this</code> keyword refers to its current surrounding scope, unlike regular functions! This means that when we call <code>perimeter</code>, it doesn\'t refer to the shape object, but to its surrounding scope (window for example).</p><p>There is no value <code>radius</code> on that object, which returns <code>NaN</code>.</p><p></p>',
    correct: "B",
  },
  3: {
    titulo: "4. What's the output?",
    codigo: "+true;\n!'Lydia';\n",
    option: ["A: 1 and false", "B: false and NaN", "C: false and false"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a">Answer: A</h4><p>The unary plus tries to convert an operand to a number. <code>true</code> is <code>1</code>, and <code>false</code> is <code>0</code>.</p><p>The string <code>\'Lydia\'</code> is a truthy value. What we\'re actually asking, is "is this truthy value falsy?". This returns <code>false</code>.</p><p></p>',
    correct: "A",
  },
  4: {
    titulo: "5. Which one is true?",
    codigo:
      "const bird = {\n  size: 'small',\n};\n\nconst mouse = {\n  name: 'Mickey',\n  small: true,\n};\n",
    option: [
      "A: mouse.bird.size is not valid",
      "B: mouse[bird.size] is not valid",
      'C: mouse[bird["size"]] is not valid',
      "D: All of them are valid",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-1">Answer: A</h4><p>In JavaScript, all object keys are strings (unless it\'s a Symbol). Even though we might not <em>type</em> them as strings, they are always converted into strings under the hood.</p><p>JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket <code>[</code> and keeps going until it finds the closing bracket <code>]</code>. Only then, it will evaluate the statement.</p><p><code>mouse[bird.size]</code>: First it evaluates <code>bird.size</code>, which is <code>"small"</code>. <code>mouse["small"]</code> returns <code>true</code></p><p>However, with dot notation, this doesn\'t happen. <code>mouse</code> does not have a key called <code>bird</code>, which means that <code>mouse.bird</code> is <code>undefined</code>. Then, we ask for the <code>size</code> using dot notation: <code>mouse.bird.size</code>. Since <code>mouse.bird</code> is <code>undefined</code>, we\'re actually asking <code>undefined.size</code>. This isn\'t valid, and will throw an error similar to <code>Cannot read property "size" of undefined</code>.</p><p></p>',
    correct: "A",
  },
  5: {
    titulo: "6. What's the output?",
    codigo:
      "let c = { greeting: 'Hey!' };\nlet d;\n\nd = c;\nc.greeting = 'Hello';\nconsole.log(d.greeting);\n",
    option: [
      "A: Hello",
      "B: Hey!",
      "C: undefined",
      "D: ReferenceError",
      "E: TypeError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-2">Answer: A</h4><p>In JavaScript, all objects interact by <em>reference</em> when setting them equal to each other.</p><p>First, variable <code>c</code> holds a value to an object. Later, we assign <code>d</code> with the same reference that <code>c</code> has to the object.</p><img src="https://i.imgur.com/ko5k0fs.png" width="200"><p>When you change one object, you change all of them.</p><p></p>',
    correct: "A",
  },
  6: {
    titulo: "7. What's the output?",
    codigo:
      "let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);\n",
    option: [
      "A: true false true",
      "B: false false true",
      "C: true false false",
      "D: false true true",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-c-1\">Answer: C</h4><p><code>new Number()</code> is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.</p><p>When we use the <code>==</code> operator, it only checks whether it has the same <em>value</em>. They both have the value of <code>3</code>, so it returns <code>true</code>.</p><p>However, when we use the <code>===</code> operator, both value <em>and</em> type should be the same. It's not: <code>new Number()</code> is not a number, it's an <strong>object</strong>. Both return <code>false.</code></p><p></p>",
    correct: "C",
  },
  7: {
    titulo: "8. What's the output?",
    codigo:
      "class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = 'green' } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: 'purple' });\nconsole.log(freddie.colorChange('orange'));\n",
    option: ["A: orange", "B: purple", "C: green", "D: TypeError"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-1">Answer: D</h4><p>The <code>colorChange</code> function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since <code>freddie</code> is an instance of class Chameleon, the function cannot be called upon it. A <code>TypeError</code> is thrown.</p><p></p>',
    correct: "D",
  },
  8: {
    titulo: "9. What's the output?",
    codigo: "let greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);\n",
    option: [
      "A: {}",
      "B: ReferenceError: greetign is not defined",
      "C: undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-3">Answer: A</h4><p>It logs the object, because we just created an empty object on the global object! When we mistyped <code>greeting</code> as <code>greetign</code>, the JS interpreter actually saw this as <code>global.greetign = {}</code> (or <code>window.greetign = {}</code> in a browser).</p><p>In order to avoid this, we can use <code>"use strict"</code>. This makes sure that you have declared a variable before setting it equal to anything.</p><p></p>',
    correct: "A",
  },
  9: {
    titulo: "10. What happens when we do this?",
    codigo:
      "function bark() {\n  console.log('Woof!');\n}\n\nbark.animal = 'dog';\n",
    option: [
      "A: Nothing, this is totally fine!",
      "B: SyntaxError. You cannot add properties to a function this way.",
      'C: "Woof" gets logged.',
      "D: ReferenceError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-4">Answer: A</h4><p>This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)</p><p>A function is a special type of object. The code you write yourself isn\'t the actual function. The function is an object with properties. This property is invocable.</p><p></p>',
    correct: "A",
  },
  10: {
    titulo: "11. What's the output?",
    codigo:
      "function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst member = new Person('Lydia', 'Hallie');\nPerson.getFullName = function() {\n  return `${this.firstName} ${this.lastName}`;\n};\n\nconsole.log(member.getFullName());\n",
    option: [
      "A: TypeError",
      "B: SyntaxError",
      "C: Lydia Hallie",
      "D: undefined undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-5">Answer: A</h4><p>In JavaScript, functions are objects, and therefore, the method <code>getFullName</code> gets added to the constructor function object itself. For that reason, we can call <code>Person.getFullName()</code>, but <code>member.getFullName</code> throws a <code>TypeError</code>. </p><p>If you want a method to be available to all object instances, you have to add it to the prototype property:</p><pre><code class="language-js">Person.prototype.getFullName = function() {  return `${this.firstName} ${this.lastName}`;};</code></pre><p></p>',
    correct: "A",
  },
  11: {
    titulo: "12. What's the output?",
    codigo:
      "function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst lydia = new Person('Lydia', 'Hallie');\nconst sarah = Person('Sarah', 'Smith');\n\nconsole.log(lydia);\nconsole.log(sarah);\n",
    option: [
      'A: Person {firstName: "Lydia", lastName: "Hallie"} and undefined',
      'B: Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}',
      'C: Person {firstName: "Lydia", lastName: "Hallie"} and {}',
      'D: Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError',
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-a-6\">Answer: A</h4><p>For <code>sarah</code>, we didn't use the <code>new</code> keyword. When using <code>new</code>, <code>this</code> refers to the new empty object we create. However, if you don't add <code>new</code>, <code>this</code> refers to the <strong>global object</strong>!</p><p>We said that <code>this.firstName</code> equals <code>\"Sarah\"</code> and <code>this.lastName</code> equals <code>\"Smith\"</code>. What we actually did, is defining <code>global.firstName = 'Sarah'</code> and <code>global.lastName = 'Smith'</code>. <code>sarah</code> itself is left <code>undefined</code>, since we don't return a value from the <code>Person</code> function.</p><p></p>",
    correct: "A",
  },
  12: {
    titulo: "13. What are the three phases of event propagation?",
    codigo: null,
    option: [
      "A: Target > Capturing > Bubbling",
      "B: Bubbling > Target > Capturing",
      "C: Target > Bubbling > Capturing",
      "D: Capturing > Target > Bubbling",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-2">Answer: D</h4><p>During the <strong>capturing</strong> phase, the event goes through the ancestor elements down to the target element. It then reaches the <strong>target</strong> element, and <strong>bubbling</strong> begins.</p><img src="https://i.imgur.com/N18oRgd.png" width="200"><p></p>',
    correct: "D",
  },
  13: {
    titulo: "14. All object have prototypes.",
    codigo: null,
    option: ["A: true", "B: false"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-1">Answer: B</h4><p>All objects have prototypes, except for the <strong>base object</strong>. The base object is the object created by the user, or an object that is created using the <code>new</code> keyword. The base object has access to some methods and properties, such as <code>.toString</code>. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can\'t find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.</p><p></p>',
    correct: "B",
  },
  14: {
    titulo: "15. What's the output?",
    codigo: "function sum(a, b) {\n  return a + b;\n}\n\nsum(1, '2');\n",
    option: ["A: NaN", "B: TypeError", 'C: "12"', "D: 3"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-2">Answer: C</h4><p>JavaScript is a <strong>dynamically typed language</strong>: we don\'t specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called <em>implicit type coercion</em>. <strong>Coercion</strong> is converting from one type into another.</p><p>In this example, JavaScript converts the number <code>1</code> into a string, in order for the function to make sense and return a value. During the addition of a numeric type (<code>1</code>) and a string type (<code>\'2\'</code>), the number is treated as a string. We can concatenate strings like <code>"Hello" + "World"</code>, so what\'s happening here is <code>"1" + "2"</code> which returns <code>"12"</code>.</p><p></p>',
    correct: "C",
  },
  15: {
    titulo: "16. What's the output?",
    codigo:
      "let number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);\n",
    option: ["A: 1 1 2", "B: 1 2 2", "C: 0 2 2", "D: 0 1 2"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-3">Answer: C</h4><p>The <strong>postfix</strong> unary operator <code>++</code>:</p><ol><li>Returns the value (this returns <code>0</code>)</li><li>Increments the value (number is now <code>1</code>)</li></ol><p>The <strong>prefix</strong> unary operator <code>++</code>:</p><ol><li>Increments the value (number is now <code>2</code>)</li><li>Returns the value (this returns <code>2</code>)</li></ol><p>This returns <code>0 2 2</code>.</p><p></p>',
    correct: "C",
  },
  16: {
    titulo: "17. What's the output?",
    codigo:
      "function getPersonInfo(one, two, three) {\n  console.log(one);\n  console.log(two);\n  console.log(three);\n}\n\nconst person = 'Lydia';\nconst age = 21;\n\ngetPersonInfo`${person} is ${age} years old`;\n",
    option: [
      'A: "Lydia" 21 ["", " is ", " years old"]',
      'B: ["", " is ", " years old"] "Lydia" 21',
      'C: "Lydia" ["", " is ", " years old"] 21',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-2">Answer: B</h4><p>If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!</p><p></p>',
    correct: "B",
  },
  17: {
    titulo: "18. What's the output?",
    codigo:
      "function checkAge(data) {\n  if (data === { age: 18 }) {\n    console.log('You are an adult!');\n  } else if (data == { age: 18 }) {\n    console.log('You are still an adult.');\n  } else {\n    console.log(`Hmm.. You don't have an age I guess`);\n  }\n}\n\ncheckAge({ age: 18 });\n",
    option: [
      "A: You are an adult!",
      "B: You are still an adult.",
      "C: Hmm.. You don't have an age I guess",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-4">Answer: C</h4><p>When testing equality, primitives are compared by their <em>value</em>, while objects are compared by their <em>reference</em>. JavaScript checks if the objects have a reference to the same location in memory.</p><p>The two objects that we are comparing don\'t have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.</p><p>This is why both <code>{ age: 18 } === { age: 18 }</code> and <code>{ age: 18 } == { age: 18 }</code> return <code>false</code>.</p><p></p>',
    correct: "C",
  },
  18: {
    titulo: "19. What's the output?",
    codigo:
      "function getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);\n",
    option: ['A: "number"', 'B: "array"', 'C: "object"', 'D: "NaN"'],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-5">Answer: C</h4><p>The rest parameter (<code>...args</code>) lets us "collect" all remaining arguments into an array. An array is an object, so <code>typeof args</code> returns <code>"object"</code></p><p></p>',
    correct: "C",
  },
  19: {
    titulo: "20. What's the output?",
    codigo:
      "function getAge() {\n  'use strict';\n  age = 21;\n  console.log(age);\n}\n\ngetAge();\n",
    option: ["A: 21", "B: undefined", "C: ReferenceError", "D: TypeError"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-6">Answer: C</h4><p>With <code>"use strict"</code>, you can make sure that you don\'t accidentally declare global variables. We never declared the variable <code>age</code>, and since we use <code>"use strict"</code>, it will throw a reference error. If we didn\'t use <code>"use strict"</code>, it would have worked, since the property <code>age</code> would have gotten added to the global object.</p><p></p>',
    correct: "C",
  },
  20: {
    titulo: "21. What's the value of sum?",
    codigo: "const sum = eval('10*10+5');\n",
    option: ["A: 105", 'B: "105"', "C: TypeError", 'D: "10*10+5"'],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-a-7\">Answer: A</h4><p><code>eval</code> evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is <code>10 * 10 + 5</code>. This returns the number <code>105</code>.</p><p></p>",
    correct: "A",
  },
  21: {
    titulo: "22. How long is cool_secret accessible?",
    codigo: "sessionStorage.setItem('cool_secret', 123);\n",
    option: [
      "A: Forever, the data doesn't get lost.",
      "B: When the user closes the tab.",
      "C: When the user closes the entire browser, not only the tab.",
      "D: When the user shuts off their computer.",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-3">Answer: B</h4><p>The data stored in <code>sessionStorage</code> is removed after closing the <em>tab</em>.</p><p>If you used <code>localStorage</code>, the data would\'ve been there forever, unless for example <code>localStorage.clear()</code> is invoked.</p><p></p>',
    correct: "B",
  },
  22: {
    titulo: "23. What's the output?",
    codigo: "var num = 8;\nvar num = 10;\n\nconsole.log(num);\n",
    option: ["A: 8", "B: 10", "C: SyntaxError", "D: ReferenceError"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-4">Answer: B</h4><p>With the <code>var</code> keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.</p><p>You cannot do this with <code>let</code> or <code>const</code> since they\'re block-scoped.</p><p></p>',
    correct: "B",
  },
  23: {
    titulo: "24. What's the output?",
    codigo:
      "const obj = { 1: 'a', 2: 'b', 3: 'c' };\nconst set = new Set([1, 2, 3, 4, 5]);\n\nobj.hasOwnProperty('1');\nobj.hasOwnProperty(1);\nset.has('1');\nset.has(1);\n",
    option: [
      "A: false true false true",
      "B: false true true true",
      "C: true true false true",
      "D: true true true true",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-c-7\">Answer: C</h4><p>All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why <code>obj.hasOwnProperty('1')</code> also returns true.</p><p>It doesn't work that way for a set. There is no <code>'1'</code> in our set: <code>set.has('1')</code> returns <code>false</code>. It has the numeric type <code>1</code>, <code>set.has(1)</code> returns <code>true</code>.</p><p></p>",
    correct: "C",
  },
  24: {
    titulo: "25. What's the output?",
    codigo:
      "const obj = { a: 'one', b: 'two', a: 'three' };\nconsole.log(obj);\n",
    option: [
      'A: { a: "one", b: "two" }',
      'B: { b: "two", a: "three" }',
      'C: { a: "three", b: "two" }',
      "D: SyntaxError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-8">Answer: C</h4><p>If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.</p><p></p>',
    correct: "C",
  },
  25: {
    titulo:
      '26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.',
    codigo: null,
    option: ["A: true", "B: false", "C: it depends"],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-a-8\">Answer: A</h4><p>The base execution context is the global execution context: it's what's accessible everywhere in your code.</p><p></p>",
    correct: "A",
  },
  26: {
    titulo: "27. What's the output?",
    codigo:
      "for (let i = 1; i &lt; 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}\n",
    option: ["A: 1 2", "B: 1 2 3", "C: 1 2 4", "D: 1 3 4"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-9">Answer: C</h4><p>The <code>continue</code> statement skips an iteration if a certain condition returns <code>true</code>.</p><p></p>',
    correct: "C",
  },
  27: {
    titulo: "28. What's the output?",
    codigo:
      "String.prototype.giveLydiaPizza = () =&gt; {\n  return 'Just give Lydia pizza already!';\n};\n\nconst name = 'Lydia';\n\nconsole.log(name.giveLydiaPizza())\n",
    option: [
      'A: "Just give Lydia pizza already!"',
      "B: TypeError: not a function",
      "C: SyntaxError",
      "D: undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-9">Answer: A</h4><p><code>String</code> is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!</p><p></p>',
    correct: "A",
  },
  28: {
    titulo: "29. What's the output?",
    codigo:
      "const a = {};\nconst b = { key: 'b' };\nconst c = { key: 'c' };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);\n",
    option: ["A: 123", "B: 456", "C: undefined", "D: ReferenceError"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-5">Answer: B</h4><p>Object keys are automatically converted into strings. We are trying to set an object as a key to object <code>a</code>, with the value of <code>123</code>.</p><p>However, when we stringify an object, it becomes <code>"[object Object]"</code>. So what we are saying here, is that <code>a["[object Object]"] = 123</code>. Then, we can try to do the same again. <code>c</code> is another object that we are implicitly stringifying. So then, <code>a["[object Object]"] = 456</code>.</p><p>Then, we log <code>a[b]</code>, which is actually <code>a["[object Object]"]</code>. We just set that to <code>456</code>, so it returns <code>456</code>.</p><p></p>',
    correct: "B",
  },
  29: {
    titulo: "30. What's the output?",
    codigo:
      "const foo = () =&gt; console.log('First');\nconst bar = () =&gt; setTimeout(() =&gt; console.log('Second'));\nconst baz = () =&gt; console.log('Third');\n\nbar();\nfoo();\nbaz();\n",
    option: [
      "A: First Second Third",
      "B: First Third Second",
      "C: Second First Third",
      "D: Second Third First",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-6">Answer: B</h4><p>We have a <code>setTimeout</code> function and invoked it first. Yet, it was logged last.</p><p>This is because in browsers, we don\'t just have the runtime engine, we also have something called a <code>WebAPI</code>. The <code>WebAPI</code> gives us the <code>setTimeout</code> function to start with, and for example the DOM.</p><p>After the <em>callback</em> is pushed to the WebAPI, the <code>setTimeout</code> function itself (but not the callback!) is popped off the stack.</p><img src="https://i.imgur.com/X5wsHOg.png" width="200"><p>Now, <code>foo</code> gets invoked, and <code>"First"</code> is being logged.</p><img src="https://i.imgur.com/Pvc0dGq.png" width="200"><p><code>foo</code> is popped off the stack, and <code>baz</code> gets invoked. <code>"Third"</code> gets logged.</p><img src="https://i.imgur.com/WhA2bCP.png" width="200"><p>The WebAPI can\'t just add stuff to the stack whenever it\'s ready. Instead, it pushes the callback function to something called the <em>queue</em>.</p><img src="https://i.imgur.com/NSnDZmU.png" width="200"><p>This is where an event loop starts to work. An <strong>event loop</strong> looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.</p><img src="https://i.imgur.com/uyiScAI.png" width="200"><p><code>bar</code> gets invoked, <code>"Second"</code> gets logged, and it\'s popped off the stack.</p><p></p>',
    correct: "B",
  },
  30: {
    titulo: "31. What is the event.target when clicking the button?",
    codigo:
      "&lt;div onclick=\"console.log('first div')\"&gt;\n  &lt;div onclick=\"console.log('second div')\"&gt;\n    &lt;button onclick=\"console.log('button')\"&gt;\n      Click!\n    &lt;/button&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n",
    option: [
      "A: Outer div",
      "B: Inner div",
      "C: button",
      "D: An array of all nested elements.",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-10">Answer: C</h4><p>The deepest nested element that caused the event is the target of the event. You can stop bubbling by <code>event.stopPropagation</code></p><p></p>',
    correct: "C",
  },
  31: {
    titulo: "32. When you click the paragraph, what's the logged output?",
    codigo:
      "&lt;div onclick=\"console.log('div')\"&gt;\n  &lt;p onclick=\"console.log('p')\"&gt;\n    Click here!\n  &lt;/p&gt;\n&lt;/div&gt;\n",
    option: ["A: p div", "B: div p", "C: p", "D: div"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-10">Answer: A</h4><p>If we click <code>p</code>, we see two logs: <code>p</code> and <code>div</code>. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set <code>useCapture</code> to <code>true</code>). It goes from the deepest nested element outwards.</p><p></p>',
    correct: "A",
  },
  32: {
    titulo: "33. What's the output?",
    codigo:
      "const person = { name: 'Lydia' };\n\nfunction sayHi(age) {\n  return `${this.name} is ${age}`;\n}\n\nconsole.log(sayHi.call(person, 21));\nconsole.log(sayHi.bind(person, 21));\n",
    option: [
      "A: undefined is 21 Lydia is 21",
      "B: function function",
      "C: Lydia is 21 Lydia is 21",
      "D: Lydia is 21 function",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-3">Answer: D</h4><p>With both, we can pass the object to which we want the <code>this</code> keyword to refer to. However, <code>.call</code> is also <em>executed immediately</em>!</p><p><code>.bind.</code> returns a <em>copy</em> of the function, but with a bound context! It is not executed immediately.</p><p></p>',
    correct: "D",
  },
  33: {
    titulo: "34. What's the output?",
    codigo:
      "function sayHi() {\n  return (() =&gt; 0)();\n}\n\nconsole.log(typeof sayHi());\n",
    option: ['A: "object"', 'B: "number"', 'C: "function"', 'D: "undefined"'],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-7">Answer: B</h4><p>The <code>sayHi</code> function returns the returned value of the immediately invoked function expression (IIFE). This function returned <code>0</code>, which is type <code>"number"</code>.</p><p>FYI: <code>typeof</code> can return the following list of values: <code>undefined</code>, <code>boolean</code>, <code>number</code>, <code>bigint</code>, <code>string</code>, <code>symbol</code>, <code>function</code> and <code>object</code>. Note that <code>typeof null</code> returns <code>"object"</code>.</p><p></p>',
    correct: "B",
  },
  34: {
    titulo: "35. Which of these values are falsy?",
    codigo:
      "0;\nnew Number(0);\n('');\n(' ');\nnew Boolean(false);\nundefined;\n",
    option: [
      "A: 0, '', undefined",
      "B: 0, new Number(0), '', new Boolean(false), undefined",
      "C: 0, '', new Boolean(false), undefined",
      "D: All of them are falsy",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-a-11\">Answer: A</h4><p>There are 8 falsy values:</p><ul><li><code>undefined</code></li><li><code>null</code></li><li><code>NaN</code></li><li><code>false</code></li><li><code>''</code> (empty string)</li><li><code>0</code></li><li><code>-0</code></li><li><code>0n</code> (BigInt(0))</li></ul><p>Function constructors, like <code>new Number</code> and <code>new Boolean</code> are truthy.</p><p></p>",
    correct: "A",
  },
  35: {
    titulo: "36. What's the output?",
    codigo: "console.log(typeof typeof 1);\n",
    option: ['A: "number"', 'B: "string"', 'C: "object"', 'D: "undefined"'],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-8">Answer: B</h4><p><code>typeof 1</code> returns <code>"number"</code>.<code>typeof "number"</code> returns <code>"string"</code></p><p></p>',
    correct: "B",
  },
  36: {
    titulo: "37. What's the output?",
    codigo:
      "const numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);\n",
    option: [
      "A: [1, 2, 3, null x 7, 11]",
      "B: [1, 2, 3, 11]",
      "C: [1, 2, 3, empty x 7, 11]",
      "D: SyntaxError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-11">Answer: C</h4><p>When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of <code>undefined</code>, but you will see something like:</p><p><code>[1, 2, 3, empty x 7, 11]</code></p><p>depending on where you run it (it\'s different for every browser, node, etc.)</p><p></p>',
    correct: "C",
  },
  37: {
    titulo: "38. What's the output?",
    codigo:
      "(() =&gt; {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();\n",
    option: [
      "A: 1 undefined 2",
      "B: undefined undefined undefined",
      "C: 1 1 2",
      "D: 1 undefined undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-12">Answer: A</h4><p>The <code>catch</code> block receives the argument <code>x</code>. This is not the same <code>x</code> as the variable when we pass arguments. This variable <code>x</code> is block-scoped.</p><p>Later, we set this block-scoped variable equal to <code>1</code>, and set the value of the variable <code>y</code>. Now, we log the block-scoped variable <code>x</code>, which is equal to <code>1</code>.</p><p>Outside of the <code>catch</code> block, <code>x</code> is still <code>undefined</code>, and <code>y</code> is <code>2</code>. When we want to <code>console.log(x)</code> outside of the <code>catch</code> block, it returns <code>undefined</code>, and <code>y</code> returns <code>2</code>.</p><p></p>',
    correct: "A",
  },
  38: {
    titulo: "39. Everything in JavaScript is either a...",
    codigo: null,
    option: [
      "A: primitive or object",
      "B: function or object",
      "C: trick question! only objects",
      "D: number or object",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-a-13\">Answer: A</h4><p>JavaScript only has primitive types and objects.</p><p>Primitive types are <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>bigint</code>, <code>number</code>, <code>string</code>, and <code>symbol</code>.</p><p>What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that <code>'foo'.toUpperCase()</code> evaluates to <code>'FOO'</code> and does not result in a <code>TypeError</code>. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. <code>String</code>, and then immediately discard the wrapper after the expression evaluates. All primitives except for <code>null</code> and <code>undefined</code> exhibit this behaviour.</p><p></p>",
    correct: "A",
  },
  39: {
    titulo: "40. What's the output?",
    codigo:
      "[[0, 1], [2, 3]].reduce(\n  (acc, cur) =&gt; {\n    return acc.concat(cur);\n  },\n  [1, 2],\n);\n",
    option: [
      "A: [0, 1, 2, 3, 1, 2]",
      "B: [6, 1, 2]",
      "C: [1, 2, 0, 1, 2, 3]",
      "D: [1, 2, 6]",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-12">Answer: C</h4><p><code>[1, 2]</code> is our initial value. This is the value we start with, and the value of the very first <code>acc</code>. During the first round, <code>acc</code> is <code>[1,2]</code>, and <code>cur</code> is <code>[0, 1]</code>. We concatenate them, which results in <code>[1, 2, 0, 1]</code>.</p><p>Then, <code>[1, 2, 0, 1]</code> is <code>acc</code> and <code>[2, 3]</code> is <code>cur</code>. We concatenate them, and get <code>[1, 2, 0, 1, 2, 3]</code></p><p></p>',
    correct: "C",
  },
  40: {
    titulo: "41. What's the output?",
    codigo: "!!null;\n!!'';\n!!1;\n",
    option: [
      "A: false true false",
      "B: false false true",
      "C: false true true",
      "D: true true false",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-9">Answer: B</h4><p><code>null</code> is falsy. <code>!null</code> returns <code>true</code>. <code>!true</code> returns <code>false</code>.</p><p><code>""</code> is falsy. <code>!""</code> returns <code>true</code>. <code>!true</code> returns <code>false</code>.</p><p><code>1</code> is truthy. <code>!1</code> returns <code>false</code>. <code>!false</code> returns <code>true</code>.</p><p></p>',
    correct: "B",
  },
  41: {
    titulo: "42. What does the setInterval method return in the browser?",
    codigo: "setInterval(() =&gt; console.log('Hi'), 1000);\n",
    option: [
      "A: a unique id",
      "B: the amount of milliseconds specified",
      "C: the passed function",
      "D: undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-14">Answer: A</h4><p>It returns a unique id. This id can be used to clear that interval with the <code>clearInterval()</code> function.</p><p></p>',
    correct: "A",
  },
  42: {
    titulo: "43. What does this return?",
    codigo: "[...'Lydia'];\n",
    option: [
      'A: ["L", "y", "d", "i", "a"]',
      'B: ["Lydia"]',
      'C: [[], "Lydia"]',
      'D: [["L", "y", "d", "i", "a"]]',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-15">Answer: A</h4><p>A string is an iterable. The spread operator maps every character of an iterable to one element.</p><p></p>',
    correct: "A",
  },
  43: {
    titulo: "44. What's the output?",
    codigo:
      "function* generator(i) {\n  yield i;\n  yield i * 2;\n}\n\nconst gen = generator(10);\n\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\n",
    option: [
      "A: [0, 10], [10, 20]",
      "B: 20, 20",
      "C: 10, 20",
      "D: 0, 10 and 10, 20",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-13">Answer: C</h4><p>Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a <code>yield</code> keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t <em>return</em> the value, it <em>yields</em> the value.</p><p>First, we initialize the generator function with <code>i</code> equal to <code>10</code>. We invoke the generator function using the <code>next()</code> method. The first time we invoke the generator function, <code>i</code> is equal to <code>10</code>. It encounters the first <code>yield</code> keyword: it yields the value of <code>i</code>. The generator is now "paused", and <code>10</code> gets logged.</p><p>Then, we invoke the function again with the <code>next()</code> method. It starts to continue where it stopped previously, still with <code>i</code> equal to <code>10</code>. Now, it encounters the next <code>yield</code> keyword, and yields <code>i * 2</code>. <code>i</code> is equal to <code>10</code>, so it returns <code>10 * 2</code>, which is <code>20</code>. This results in <code>10, 20</code>.</p><p></p>',
    correct: "C",
  },
  44: {
    titulo: "45. What does this return?",
    codigo:
      "const firstPromise = new Promise((res, rej) =&gt; {\n  setTimeout(res, 500, 'one');\n});\n\nconst secondPromise = new Promise((res, rej) =&gt; {\n  setTimeout(res, 100, 'two');\n});\n\nPromise.race([firstPromise, secondPromise]).then(res =&gt; console.log(res));\n",
    option: ['A: "one"', 'B: "two"', 'C: "two" "one"', 'D: "one" "two"'],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-b-10\">Answer: B</h4><p>When we pass multiple promises to the <code>Promise.race</code> method, it resolves/rejects the <em>first</em> promise that resolves/rejects. To the <code>setTimeout</code> method, we pass a timer: 500ms for the first promise (<code>firstPromise</code>), and 100ms for the second promise (<code>secondPromise</code>). This means that the <code>secondPromise</code> resolves first with the value of <code>'two'</code>. <code>res</code> now holds the value of <code>'two'</code>, which gets logged.</p><p></p>",
    correct: "B",
  },
  45: {
    titulo: "46. What's the output?",
    codigo:
      "let person = { name: 'Lydia' };\nconst members = [person];\nperson = null;\n\nconsole.log(members);\n",
    option: ["A: null", "B: [null]", "C: [{}]", 'D: [{ name: "Lydia" }]'],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-4">Answer: D</h4><p>First, we declare a variable <code>person</code> with the value of an object that has a <code>name</code> property.</p><img src="https://i.imgur.com/TML1MbS.png" width="200"><p>Then, we declare a variable called <code>members</code>. We set the first element of that array equal to the value of the <code>person</code> variable. Objects interact by <em>reference</em> when setting them equal to each other. When you assign a reference from one variable to another, you make a <em>copy</em> of that reference. (note that they don\'t have the <em>same</em> reference!)</p><img src="https://i.imgur.com/FSG5K3F.png" width="300"><p>Then, we set the variable <code>person</code> equal to <code>null</code>.</p><img src="https://i.imgur.com/sYjcsMT.png" width="300"><p>We are only modifying the value of the <code>person</code> variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in <code>members</code> still holds its reference to the original object. When we log the <code>members</code> array, the first element still holds the value of the object, which gets logged.</p><p></p>',
    correct: "D",
  },
  46: {
    titulo: "47. What's the output?",
    codigo:
      "const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nfor (const item in person) {\n  console.log(item);\n}\n",
    option: [
      'A: { name: "Lydia" }, { age: 21 }',
      'B: "name", "age"',
      'C: "Lydia", 21',
      'D: ["name", "Lydia"], ["age", 21]',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-11">Answer: B</h4><p>With a <code>for-in</code> loop, we can iterate through object keys, in this case <code>name</code> and <code>age</code>. Under the hood, object keys are strings (if they\'re not a Symbol). On every loop, we set the value of <code>item</code> equal to the current key it’s iterating over. First, <code>item</code> is equal to <code>name</code>, and gets logged. Then, <code>item</code> is equal to <code>age</code>, which gets logged.</p><p></p>',
    correct: "B",
  },
  47: {
    titulo: "48. What's the output?",
    codigo: "console.log(3 + 4 + '5');\n",
    option: ['A: "345"', 'B: "75"', "C: 12", 'D: "12"'],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-12">Answer: B</h4><p>Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the <em>same</em> precedence. We only have one type of operator: <code>+</code>. For addition, the associativity is left-to-right.</p><p><code>3 + 4</code> gets evaluated first. This results in the number <code>7</code>.</p><p><code>7 + \'5\'</code> results in <code>"75"</code> because of coercion. JavaScript converts the number <code>7</code> into a string, see question 15. We can concatenate two strings using the <code>+</code>operator. <code>"7" + "5"</code> results in <code>"75"</code>.</p><p></p>',
    correct: "B",
  },
  48: {
    titulo: "49. What's the value of num?",
    codigo: "const num = parseInt('7*6', 10);\n",
    option: ["A: 42", 'B: "42"', "C: 7", "D: NaN"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-14">Answer: C</h4><p>Only the first numbers in the string is returned. Based on the <em>radix</em> (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the <code>parseInt</code> checks whether the characters in the string are valid. Once it encounters a character that isn\'t a valid number in the radix, it stops parsing and ignores the following characters.</p><p><code>*</code> is not a valid number. It only parses <code>"7"</code> into the decimal <code>7</code>. <code>num</code> now holds the value of <code>7</code>.</p><p></p>',
    correct: "C",
  },
  49: {
    titulo: "50. What's the output?",
    codigo:
      "[1, 2, 3].map(num =&gt; {\n  if (typeof num === 'number') return;\n  return num * 2;\n});\n",
    option: [
      "A: []",
      "B: [null, null, null]",
      "C: [undefined, undefined, undefined]",
      "D: [ 3 x empty ]",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-15">Answer: C</h4><p>When mapping over the array, the value of <code>num</code> is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement <code>typeof num === "number"</code> returns <code>true</code>. The map function creates a new array and inserts the values returned from the function.</p><p>However, we don’t return a value. When we don’t return a value from the function, the function returns <code>undefined</code>. For every element in the array, the function block gets called, so for each element we return <code>undefined</code>.</p><p></p>',
    correct: "C",
  },
  50: {
    titulo: "51. What's the output?",
    codigo:
      "function getInfo(member, year) {\n  member.name = 'Lydia';\n  year = '1998';\n}\n\nconst person = { name: 'Sarah' };\nconst birthYear = '1997';\n\ngetInfo(person, birthYear);\n\nconsole.log(person, birthYear);\n",
    option: [
      'A: { name: "Lydia" }, "1997"',
      'B: { name: "Sarah" }, "1998"',
      'C: { name: "Lydia" }, "1998"',
      'D: { name: "Sarah" }, "1997"',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-16">Answer: A</h4><p>Arguments are passed by <em>value</em>, unless their value is an object, then they\'re passed by <em>reference</em>. <code>birthYear</code> is passed by value, since it\'s a string, not an object. When we pass arguments by value, a <em>copy</em> of that value is created (see question 46).</p><p>The variable <code>birthYear</code> has a reference to the value <code>"1997"</code>. The argument <code>year</code> also has a reference to the value <code>"1997"</code>, but it\'s not the same value as <code>birthYear</code> has a reference to. When we update the value of <code>year</code> by setting <code>year</code> equal to <code>"1998"</code>, we are only updating the value of <code>year</code>. <code>birthYear</code> is still equal to <code>"1997"</code>.</p><p>The value of <code>person</code> is an object. The argument <code>member</code> has a (copied) reference to the <em>same</em> object. When we modify a property of the object <code>member</code> has a reference to, the value of <code>person</code> will also be modified, since they both have a reference to the same object. <code>person</code>\'s <code>name</code> property is now equal to the value <code>"Lydia"</code></p><p></p>',
    correct: "A",
  },
  51: {
    titulo: "52. What's the output?",
    codigo:
      "function greeting() {\n  throw 'Hello world!';\n}\n\nfunction sayHi() {\n  try {\n    const data = greeting();\n    console.log('It worked!', data);\n  } catch (e) {\n    console.log('Oh no an error:', e);\n  }\n}\n\nsayHi();\n",
    option: [
      "A: It worked! Hello world!",
      "B: Oh no an error: undefined",
      "C: SyntaxError: can only throw Error objects",
      "D: Oh no an error: Hello world!",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-d-5\">Answer: D</h4><p>With the <code>throw</code> statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string <code>'Hello world!'</code>.</p><p>With the <code>catch</code> statement, we can specify what to do if an exception is thrown in the <code>try</code> block. An exception is thrown: the string <code>'Hello world!'</code>. <code>e</code> is now equal to that string, which we log. This results in <code>'Oh an error: Hello world!'</code>.</p><p></p>",
    correct: "D",
  },
  52: {
    titulo: "53. What's the output?",
    codigo:
      "function Car() {\n  this.make = 'Lamborghini';\n  return { make: 'Maserati' };\n}\n\nconst myCar = new Car();\nconsole.log(myCar.make);\n",
    option: [
      'A: "Lamborghini"',
      'B: "Maserati"',
      "C: ReferenceError",
      "D: TypeError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-13">Answer: B</h4><p>When you return a property, the value of the property is equal to the <em>returned</em> value, not the value set in the constructor function. We return the string <code>"Maserati"</code>, so <code>myCar.make</code> is equal to <code>"Maserati"</code>.</p><p></p>',
    correct: "B",
  },
  53: {
    titulo: "54. What's the output?",
    codigo:
      "(() =&gt; {\n  let x = (y = 10);\n})();\n\nconsole.log(typeof x);\nconsole.log(typeof y);\n",
    option: [
      'A: "undefined", "number"',
      'B: "number", "number"',
      'C: "object", "number"',
      'D: "number", "undefined"',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-17">Answer: A</h4><p><code>let x = (y = 10);</code> is actually shorthand for:</p><pre><code class="language-javascript">y = 10;let x = y;</code></pre><p>When we set <code>y</code> equal to <code>10</code>, we actually add a property <code>y</code> to the global object (<code>window</code> in browser, <code>global</code> in Node). In a browser, <code>window.y</code> is now equal to <code>10</code>.</p><p>Then, we declare a variable <code>x</code> with the value of <code>y</code>, which is <code>10</code>. Variables declared with the <code>let</code> keyword are <em>block scoped</em>, they are only defined within the block they\'re declared in; the immediately invoked function expression (IIFE) in this case. When we use the <code>typeof</code> operator, the operand <code>x</code> is not defined: we are trying to access <code>x</code> outside of the block it\'s declared in. This means that <code>x</code> is not defined. Values who haven\'t been assigned a value or declared are of type <code>"undefined"</code>. <code>console.log(typeof x)</code> returns <code>"undefined"</code>.</p><p>However, we created a global variable <code>y</code> when setting <code>y</code> equal to <code>10</code>. This value is accessible anywhere in our code. <code>y</code> is defined, and holds a value of type <code>"number"</code>. <code>console.log(typeof y)</code> returns <code>"number"</code>.</p><p></p>',
    correct: "A",
  },
  54: {
    titulo: "55. What's the output?",
    codigo:
      "class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nDog.prototype.bark = function() {\n  console.log(`Woof I am ${this.name}`);\n};\n\nconst pet = new Dog('Mara');\n\npet.bark();\n\ndelete Dog.prototype.bark;\n\npet.bark();\n",
    option: [
      'A: "Woof I am Mara", TypeError',
      'B: "Woof I am Mara", "Woof I am Mara"',
      'C: "Woof I am Mara", undefined',
      "D: TypeError, TypeError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-18">Answer: A</h4><p>We can delete properties from objects using the <code>delete</code> keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the <code>bark</code> function is not available anymore on the prototype after <code>delete Dog.prototype.bark</code>, yet we still try to access it.</p><p>When we try to invoke something that is not a function, a <code>TypeError</code> is thrown. In this case <code>TypeError: pet.bark is not a function</code>, since <code>pet.bark</code> is <code>undefined</code>.</p><p></p>',
    correct: "A",
  },
  55: {
    titulo: "56. What's the output?",
    codigo: "const set = new Set([1, 1, 2, 3, 4]);\n\nconsole.log(set);\n",
    option: [
      "A: [1, 1, 2, 3, 4]",
      "B: [1, 2, 3, 4]",
      "C: {1, 1, 2, 3, 4}",
      "D: {1, 2, 3, 4}",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-6">Answer: D</h4><p>The <code>Set</code> object is a collection of <em>unique</em> values: a value can only occur once in a set.</p><p>We passed the iterable <code>[1, 1, 2, 3, 4]</code> with a duplicate value <code>1</code>. Since we cannot have two of the same values in a set, one of them is removed. This results in <code>{1, 2, 3, 4}</code>.</p><p></p>',
    correct: "D",
  },
  56: {
    titulo: "57. What's the output?",
    codigo: "// counter.js\nlet counter = 10;\nexport default counter;\n",
    option: [],
    correct: "",
  },
  57: {
    titulo: "58. What's the output?",
    codigo:
      "const name = 'Lydia';\nage = 21;\n\nconsole.log(delete name);\nconsole.log(delete age);\n",
    option: [
      "A: false, true",
      'B: "Lydia", 21',
      "C: true, true",
      "D: undefined, undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-19">Answer: A</h4><p>The <code>delete</code> operator returns a boolean value: <code>true</code> on a successful deletion, else it\'ll return <code>false</code>. However, variables declared with the <code>var</code>, <code>const</code> or <code>let</code> keyword cannot be deleted using the <code>delete</code> operator.</p><p>The <code>name</code> variable was declared with a <code>const</code> keyword, so its deletion is not successful: <code>false</code> is returned. When we set <code>age</code> equal to <code>21</code>, we actually added a property called <code>age</code> to the global object. You can successfully delete properties from objects this way, also the global object, so <code>delete age</code> returns <code>true</code>.</p><p></p>',
    correct: "A",
  },
  58: {
    titulo: "59. What's the output?",
    codigo:
      "const numbers = [1, 2, 3, 4, 5];\nconst [y] = numbers;\n\nconsole.log(y);\n",
    option: ["A: [[1, 2, 3, 4, 5]]", "B: [1, 2, 3, 4, 5]", "C: 1", "D: [1]"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-17">Answer: C</h4><p>We can unpack values from arrays or properties from objects through destructuring. For example:</p><pre><code class="language-javascript">[a, b] = [1, 2];</code></pre><img src="https://i.imgur.com/ADFpVop.png" width="200"><p>The value of <code>a</code> is now <code>1</code>, and the value of <code>b</code> is now <code>2</code>. What we actually did in the question, is:</p><pre><code class="language-javascript">[y] = [1, 2, 3, 4, 5];</code></pre><img src="https://i.imgur.com/NzGkMNk.png" width="200"><p>This means that the value of <code>y</code> is equal to the first value in the array, which is the number <code>1</code>. When we log <code>y</code>, <code>1</code> is returned.</p><p></p>',
    correct: "C",
  },
  59: {
    titulo: "60. What's the output?",
    codigo:
      "const user = { name: 'Lydia', age: 21 };\nconst admin = { admin: true, ...user };\n\nconsole.log(admin);\n",
    option: [
      'A: { admin: true, user: { name: "Lydia", age: 21 } }',
      'B: { admin: true, name: "Lydia", age: 21 }',
      'C: { admin: true, user: ["Lydia", 21] }',
      "D: { admin: true }",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-14">Answer: B</h4><p>It\'s possible to combine objects using the spread operator <code>...</code>. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the <code>user</code> object, and add them to the <code>admin</code> object. The <code>admin</code> object now contains the copied key/value pairs, which results in <code>{ admin: true, name: "Lydia", age: 21 }</code>.</p><p></p>',
    correct: "B",
  },
  60: {
    titulo: "61. What's the output?",
    codigo:
      "const person = { name: 'Lydia' };\n\nObject.defineProperty(person, 'age', { value: 21 });\n\nconsole.log(person);\nconsole.log(Object.keys(person));\n",
    option: [
      'A: { name: "Lydia", age: 21 }, ["name", "age"]',
      'B: { name: "Lydia", age: 21 }, ["name"]',
      'C: { name: "Lydia"}, ["name", "age"]',
      'D: { name: "Lydia"}, ["age"]',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-15">Answer: B</h4><p>With the <code>defineProperty</code> method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the <code>defineProperty</code> method, they are by default <em>not enumerable</em>. The <code>Object.keys</code> method returns all <em>enumerable</em> property names from an object, in this case only <code>"name"</code>.</p><p>Properties added using the <code>defineProperty</code> method are immutable by default. You can override this behavior using the <code>writable</code>, <code>configurable</code> and <code>enumerable</code> properties. This way, the <code>defineProperty</code> method gives you a lot more control over the properties you\'re adding to an object.</p><p></p>',
    correct: "B",
  },
  61: {
    titulo: "62. What's the output?",
    codigo:
      "const settings = {\n  username: 'lydiahallie',\n  level: 19,\n  health: 90,\n};\n\nconst data = JSON.stringify(settings, ['level', 'health']);\nconsole.log(data);\n",
    option: [
      'A: "{"level":19, "health":90}"',
      'B: "{"username": "lydiahallie"}"',
      'C: "["level", "health"]"',
      'D: "{"username": "lydiahallie", "level":19, "health":90}"',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-20">Answer: A</h4><p>The second argument of <code>JSON.stringify</code> is the <em>replacer</em>. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.</p><p>If the replacer is an <em>array</em>, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names <code>"level"</code> and <code>"health"</code> are included, <code>"username"</code> is excluded. <code>data</code> is now equal to <code>"{"level":19, "health":90}"</code>.</p><p>If the replacer is a <em>function</em>, this function gets called on every property in the object you\'re stringifying. The value returned from this function will be the value of the property when it\'s added to the JSON string. If the value is <code>undefined</code>, this property is excluded from the JSON string.</p><p></p>',
    correct: "A",
  },
  62: {
    titulo: "63. What's the output?",
    codigo:
      "let num = 10;\n\nconst increaseNumber = () =&gt; num++;\nconst increasePassedNumber = number =&gt; number++;\n\nconst num1 = increaseNumber();\nconst num2 = increasePassedNumber(num1);\n\nconsole.log(num1);\nconsole.log(num2);\n",
    option: ["A: 10, 10", "B: 10, 11", "C: 11, 11", "D: 11, 12"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-21">Answer: A</h4><p>The unary operator <code>++</code> <em>first returns</em> the value of the operand, <em>then increments</em> the value of the operand. The value of <code>num1</code> is <code>10</code>, since the <code>increaseNumber</code> function first returns the value of <code>num</code>, which is <code>10</code>, and only increments the value of <code>num</code> afterwards.</p><p><code>num2</code> is <code>10</code>, since we passed <code>num1</code> to the <code>increasePassedNumber</code>. <code>number</code> is equal to <code>10</code>(the value of <code>num1</code>. Again, the unary operator <code>++</code> <em>first returns</em> the value of the operand, <em>then increments</em> the value of the operand. The value of <code>number</code> is <code>10</code>, so <code>num2</code> is equal to <code>10</code>.</p><p></p>',
    correct: "A",
  },
  63: {
    titulo: "64. What's the output?",
    codigo:
      "const value = { number: 10 };\n\nconst multiply = (x = { ...value }) =&gt; {\n  console.log((x.number *= 2));\n};\n\nmultiply();\nmultiply();\nmultiply(value);\nmultiply(value);\n",
    option: [
      "A: 20, 40, 80, 160",
      "B: 20, 40, 20, 40",
      "C: 20, 20, 20, 40",
      "D: NaN, NaN, 20, 40",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-18">Answer: C</h4><p>In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is <code>"undefined"</code>. In this case, we spread the properties of the <code>value</code> object into a new object, so <code>x</code> has the default value of <code>{ number: 10 }</code>.</p><p>The default argument is evaluated at <em>call time</em>! Every time we call the function, a <em>new</em> object is created. We invoke the <code>multiply</code> function the first two times without passing a value: <code>x</code> has the default value of <code>{ number: 10 }</code>. We then log the multiplied value of that number, which is <code>20</code>.</p><p>The third time we invoke multiply, we do pass an argument: the object called <code>value</code>. The <code>*=</code> operator is actually shorthand for <code>x.number = x.number * 2</code>: we modify the value of <code>x.number</code>, and log the multiplied value <code>20</code>.</p><p>The fourth time, we pass the <code>value</code> object again. <code>x.number</code> was previously modified to <code>20</code>, so <code>x.number *= 2</code> logs <code>40</code>.</p><p></p>',
    correct: "C",
  },
  64: {
    titulo: "65. What's the output?",
    codigo: "[1, 2, 3, 4].reduce((x, y) =&gt; console.log(x, y));\n",
    option: [
      "A: 1 2 and 3 3 and 6 4",
      "B: 1 2 and 2 3 and 3 4",
      "C: 1 undefined and 2 undefined and 3 undefined and 4 undefined",
      "D: 1 2 and undefined 3 and undefined 4",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-d-7\">Answer: D</h4><p>The first argument that the <code>reduce</code> method receives is the <em>accumulator</em>, <code>x</code> in this case. The second argument is the <em>current value</em>, <code>y</code>. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.</p><p>In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.</p><p>The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional <code>initialValue</code> argument to the <code>reduce</code> method, the accumulator is equal to the first element on the first call.</p><p>On the first call, the accumulator (<code>x</code>) is <code>1</code>, and the current value (<code>y</code>) is <code>2</code>. We don't return from the callback function, we log the accumulator and current value: <code>1</code> and <code>2</code> get logged.</p><p>If you don't return a value from a function, it returns <code>undefined</code>. On the next call, the accumulator is <code>undefined</code>, and the current value is <code>3</code>. <code>undefined</code> and <code>3</code> get logged.</p><p>On the fourth call, we again don't return from the callback function. The accumulator is again <code>undefined</code>, and the current value is <code>4</code>. <code>undefined</code> and <code>4</code> get logged.</p><p></p>",
    correct: "D",
  },
  65: {
    titulo:
      "66. With which constructor can we successfully extend the Dog class?",
    codigo:
      "class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n};\n\nclass Labrador extends Dog {\n  // 1\n  constructor(name, size) {\n    this.size = size;\n  }\n  // 2\n  constructor(name, size) {\n    super(name);\n    this.size = size;\n  }\n  // 3\n  constructor(size) {\n    super(name);\n    this.size = size;\n  }\n  // 4\n  constructor(name, size) {\n    this.name = name;\n    this.size = size;\n  }\n\n};\n",
    option: ["A: 1", "B: 2", "C: 3", "D: 4"],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-b-16\">Answer: B</h4><p>In a derived class, you cannot access the <code>this</code> keyword before calling <code>super</code>. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.</p><p>With the <code>super</code> keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the <code>name</code> argument, so we need to pass <code>name</code> to <code>super</code>.</p><p>The <code>Labrador</code> class receives two arguments, <code>name</code> since it extends <code>Dog</code>, and <code>size</code> as an extra property on the <code>Labrador</code> class. They both need to be passed to the constructor function on <code>Labrador</code>, which is done correctly using constructor 2.</p><p></p>",
    correct: "B",
  },
  66: {
    titulo: "67. What's the output?",
    codigo:
      "// index.js\nconsole.log('running index.js');\nimport { sum } from './sum.js';\nconsole.log(sum(1, 2));\n\n// sum.js\nconsole.log('running sum.js');\nexport const sum = (a, b) =&gt; a + b;\n",
    option: [
      "A: running index.js, running sum.js, 3",
      "B: running sum.js, running index.js, 3",
      "C: running sum.js, 3, running index.js",
      "D: running index.js, undefined, running sum.js",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-17">Answer: B</h4><p>With the <code>import</code> keyword, all imported modules are <em>pre-parsed</em>. This means that the imported modules get run <em>first</em>, the code in the file which imports the module gets executed <em>after</em>.</p><p>This is a difference between <code>require()</code> in CommonJS and <code>import</code>! With <code>require()</code>, you can load dependencies on demand while the code is being run. If we would have used <code>require</code> instead of <code>import</code>, <code>running index.js</code>, <code>running sum.js</code>, <code>3</code> would have been logged to the console.</p><p></p>',
    correct: "B",
  },
  67: {
    titulo: "68. What's the output?",
    codigo:
      "console.log(Number(2) === Number(2));\nconsole.log(Boolean(false) === Boolean(false));\nconsole.log(Symbol('foo') === Symbol('foo'));\n",
    option: [
      "A: true, true, false",
      "B: false, true, false",
      "C: true, false, true",
      "D: true, true, true",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-a-22\">Answer: A</h4><p>Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first <code>Symbol('foo')</code>, and the second <code>Symbol('foo')</code>. These two values are unique and not equal to each other, <code>Symbol('foo') === Symbol('foo')</code> returns <code>false</code>.</p><p></p>",
    correct: "A",
  },
  68: {
    titulo: "69. What's the output?",
    codigo:
      "const name = 'Lydia Hallie';\nconsole.log(name.padStart(13));\nconsole.log(name.padStart(2));\n",
    option: [
      'A: "Lydia Hallie", "Lydia Hallie"',
      'B: " Lydia Hallie", " Lydia Hallie" ("[13x whitespace]Lydia Hallie", "[2x whitespace]Lydia Hallie")',
      'C: " Lydia Hallie", "Lydia Hallie" ("[1x whitespace]Lydia Hallie", "Lydia Hallie")',
      'D: "Lydia Hallie", "Lyd",',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-19">Answer: C</h4><p>With the <code>padStart</code> method, we can add padding to the beginning of a string. The value passed to this method is the <em>total</em> length of the string together with the padding. The string <code>"Lydia Hallie"</code> has a length of <code>12</code>. <code>name.padStart(13)</code> inserts 1 space at the start of the string, because 12 + 1 is 13.</p><p>If the argument passed to the <code>padStart</code> method is smaller than the length of the array, no padding will be added.</p><p></p>',
    correct: "C",
  },
  69: {
    titulo: "70. What's the output?",
    codigo: "console.log('🥑' + '💻');\n",
    option: [
      'A: "🥑💻"',
      "B: 257548",
      "C: A string containing their code points",
      "D: Error",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-23">Answer: A</h4><p>With the <code>+</code> operator, you can concatenate strings. In this case, we are concatenating the string <code>"🥑"</code> with the string <code>"💻"</code>, resulting in <code>"🥑💻"</code>.</p><p></p>',
    correct: "A",
  },
  70: {
    titulo:
      "71. How can we log the values that are commented out after the console.log statement?",
    codigo:
      "function* startGame() {\n  const answer = yield 'Do you love JavaScript?';\n  if (answer !== 'Yes') {\n    return \"Oh wow... Guess we're done here\";\n  }\n  return 'JavaScript loves you back ❤️';\n}\n\nconst game = startGame();\nconsole.log(/* 1 */); // Do you love JavaScript?\nconsole.log(/* 2 */); // JavaScript loves you back ❤️\n",
    option: [
      'A: game.next("Yes").value and game.next().value',
      'B: game.next.value("Yes") and game.next.value()',
      'C: game.next().value and game.next("Yes").value',
      'D: game.next.value() and game.next.value("Yes")',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-20">Answer: C</h4><p>A generator function "pauses" its execution when it sees the <code>yield</code> keyword. First, we have to let the function yield the string "Do you love JavaScript?", which can be done by calling <code>game.next().value</code>.</p><p>Every line is executed, until it finds the first <code>yield</code> keyword. There is a <code>yield</code> keyword on the first line within the function: the execution stops with the first yield! <em>This means that the variable <code>answer</code> is not defined yet!</em></p><p>When we call <code>game.next("Yes").value</code>, the previous <code>yield</code> is replaced with the value of the parameters passed to the <code>next()</code> function, <code>"Yes"</code> in this case. The value of the variable <code>answer</code> is now equal to <code>"Yes"</code>. The condition of the if-statement returns <code>false</code>, and <code>JavaScript loves you back ❤️</code> gets logged.</p><p></p>',
    correct: "C",
  },
  71: {
    titulo: "72. What's the output?",
    codigo: "console.log(String.raw`Hello\\nworld`);\n",
    option: [
      "A: Hello world!",
      "B: Hello      world",
      "C: Hello\\nworld",
      "D: Hello\\n       world",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-21">Answer: C</h4><p><code>String.raw</code> returns a string where the escapes (<code>\\n</code>, <code>\\v</code>, <code>\\t</code> etc.) are ignored! Backslashes can be an issue since you could end up with something like:</p><p><code>const path = `C:\\Documents\\Projects\\table.html`</code></p><p>Which would result in:</p><p><code>"C:DocumentsProjects able.html"</code></p><p>With <code>String.raw</code>, it would simply ignore the escape and print:</p><p><code>C:\\Documents\\Projects\\table.html</code></p><p>In this case, the string is <code>Hello\\nworld</code>, which gets logged.</p><p></p>',
    correct: "C",
  },
  72: {
    titulo: "73. What's the output?",
    codigo:
      "async function getData() {\n  return await Promise.resolve('I made it!');\n}\n\nconst data = getData();\nconsole.log(data);\n",
    option: [
      'A: "I made it!"',
      'B: Promise {<resolved>: "I made it!"}',
      "C: Promise {<pending>}",
      "D: undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-22">Answer: C</h4><p>An async function always returns a promise. The <code>await</code> still has to wait for the promise to resolve: a pending promise gets returned when we call <code>getData()</code> in order to set <code>data</code> equal to it.</p><p>If we wanted to get access to the resolved value <code>"I made it"</code>, we could have used the <code>.then()</code> method on <code>data</code>:</p><p><code>data.then(res =&gt; console.log(res))</code></p><p>This would\'ve logged <code>"I made it!"</code></p><p></p>',
    correct: "C",
  },
  73: {
    titulo: "74. What's the output?",
    codigo:
      "function addToList(item, list) {\n  return list.push(item);\n}\n\nconst result = addToList('apple', ['banana']);\nconsole.log(result);\n",
    option: ["A: ['apple', 'banana']", "B: 2", "C: true", "D: undefined"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-18">Answer: B</h4><p>The <code>.push()</code> method returns the <em>length</em> of the new array! Previously, the array contained one element (the string <code>"banana"</code>) and had a length of <code>1</code>. After adding the string <code>"apple"</code> to the array, the array contains two elements, and has a length of <code>2</code>. This gets returned from the <code>addToList</code> function.</p><p>The <code>push</code> method modifies the original array. If you wanted to return the <em>array</em> from the function rather than the <em>length of the array</em>, you should have returned <code>list</code> after pushing <code>item</code> to it.</p><p></p>',
    correct: "B",
  },
  74: {
    titulo: "75. What's the output?",
    codigo:
      "const box = { x: 10, y: 20 };\n\nObject.freeze(box);\n\nconst shape = box;\nshape.x = 100;\n\nconsole.log(shape);\n",
    option: [
      "A: { x: 100, y: 20 }",
      "B: { x: 10, y: 20 }",
      "C: { x: 100 }",
      "D: ReferenceError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-19">Answer: B</h4><p><code>Object.freeze</code> makes it impossible to add, remove, or modify properties of an object (unless the property\'s value is another object).</p><p>When we create the variable <code>shape</code> and set it equal to the frozen object <code>box</code>, <code>shape</code> also refers to a frozen object. You can check whether an object is frozen by using <code>Object.isFrozen</code>. In this case, <code>Object.isFrozen(shape)</code> would return true, since the variable <code>shape</code> has a reference to a frozen object.</p><p>Since <code>shape</code> is frozen, and since the value of <code>x</code> is not an object, we cannot modify the property <code>x</code>. <code>x</code> is still equal to <code>10</code>, and <code>{ x: 10, y: 20 }</code> gets logged.</p><p></p>',
    correct: "B",
  },
  75: {
    titulo: "76. What's the output?",
    codigo:
      "const { name: myName } = { name: 'Lydia' };\n\nconsole.log(name);\n",
    option: ['A: "Lydia"', 'B: "myName"', "C: undefined", "D: ReferenceError"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-23">Answer: C</h4><p>When we unpack the property <code>name</code> from the object on the right-hand side, we assign its value <code>"Lydia"</code> to a variable with the name <code>myName</code>.</p><p>With <code>{ name: myName }</code>, we tell JavaScript that we want to create a new variable called <code>myName</code> with the value of the <code>name</code> property on the right-hand side.</p><p>Since we try to log <code>name</code>, a variable that is not defined, <code>undefined</code> is returned on the left side assignment. Later, the value of <code>Lydia</code> is stored through the destructuring  assignment. </p><p></p>',
    correct: "C",
  },
  76: {
    titulo: "77. Is this a pure function?",
    codigo: "function sum(a, b) {\n  return a + b;\n}\n",
    option: ["A: Yes", "B: No"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-24">Answer: A</h4><p>A pure function is a function that <em>always</em> returns the same result, if the same arguments are passed.</p><p>The <code>sum</code> function always returns the same result. If we pass <code>1</code> and <code>2</code>, it will <em>always</em> return <code>3</code> without side effects. If we pass <code>5</code> and <code>10</code>, it will <em>always</em> return <code>15</code>, and so on. This is the definition of a pure function.</p><p></p>',
    correct: "A",
  },
  77: {
    titulo: "78. What is the output?",
    codigo:
      "const add = () =&gt; {\n  const cache = {};\n  return num =&gt; {\n    if (num in cache) {\n      return `From cache! ${cache[num]}`;\n    } else {\n      const result = num + 10;\n      cache[num] = result;\n      return `Calculated! ${result}`;\n    }\n  };\n};\n\nconst addFunction = add();\nconsole.log(addFunction(10));\nconsole.log(addFunction(10));\nconsole.log(addFunction(5 * 2));\n",
    option: [
      "A: Calculated! 20 Calculated! 20 Calculated! 20",
      "B: Calculated! 20 From cache! 20 Calculated! 20",
      "C: Calculated! 20 From cache! 20 From cache! 20",
      "D: Calculated! 20 From cache! 20 Error",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-c-24\">Answer: C</h4><p>The <code>add</code> function is a <em>memoized</em> function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a <code>cache</code> object that stores the previously returned values.</p><p>If we call the <code>addFunction</code> function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards.</p><p>We call the <code>addFunction</code> function three times with the same value: on the first invocation, the value of the function when <code>num</code> is equal to <code>10</code> isn't cached yet. The condition of the if-statement <code>num in cache</code> returns <code>false</code>, and the else block gets executed: <code>Calculated! 20</code> gets logged, and the value of the result gets added to the cache object. <code>cache</code> now looks like <code>{ 10: 20 }</code>.</p><p>The second time, the <code>cache</code> object contains the value that gets returned for <code>10</code>. The condition of the if-statement <code>num in cache</code> returns <code>true</code>, and <code>'From cache! 20'</code> gets logged.</p><p>The third time, we pass <code>5 * 2</code> to the function which gets evaluated to <code>10</code>. The <code>cache</code> object contains the value that gets returned for <code>10</code>. The condition of the if-statement <code>num in cache</code> returns <code>true</code>, and <code>'From cache! 20'</code> gets logged.</p><p></p>",
    correct: "C",
  },
  78: {
    titulo: "79. What is the output?",
    codigo:
      "const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];\n\nfor (let item in myLifeSummedUp) {\n  console.log(item);\n}\n\nfor (let item of myLifeSummedUp) {\n  console.log(item);\n}\n",
    option: [
      'A: 0 1 2 3 and "☕" "💻" "🍷" "🍫"',
      'B: "☕" "💻" "🍷" "🍫" and "☕" "💻" "🍷" "🍫"',
      'C: "☕" "💻" "🍷" "🍫" and 0 1 2 3',
      'D: 0 1 2 3 and {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-25">Answer: A</h4><p>With a <em>for-in</em> loop, we can iterate over <strong>enumerable</strong> properties. In an array, the enumerable properties are the "keys" of array elements, which are actually their indexes. You could see an array as:</p><p><code>{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}</code></p><p>Where the keys are the enumerable properties. <code>0</code> <code>1</code> <code>2</code> <code>3</code> get logged.</p><p>With a <em>for-of</em> loop, we can iterate over <strong>iterables</strong>. An array is an iterable. When we iterate over the array, the variable "item" is equal to the element it\'s currently iterating over, <code>"☕"</code> <code>"💻"</code> <code>"🍷"</code> <code>"🍫"</code> get logged.</p><p></p>',
    correct: "A",
  },
  79: {
    titulo: "80. What is the output?",
    codigo: "const list = [1 + 2, 1 * 2, 1 / 2];\nconsole.log(list);\n",
    option: [
      'A: ["1 + 2", "1 * 2", "1 / 2"]',
      'B: ["12", 2, 0.5]',
      "C: [3, 2, 0.5]",
      "D: [1, 1, 1]",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-25">Answer: C</h4><p>Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.</p><p>The element will be equal to the returned value. <code>1 + 2</code> returns <code>3</code>, <code>1 * 2</code> returns <code>2</code>, and <code>1 / 2</code> returns <code>0.5</code>.</p><p></p>',
    correct: "C",
  },
  80: {
    titulo: "81. What is the output?",
    codigo:
      "function sayHi(name) {\n  return `Hi there, ${name}`;\n}\n\nconsole.log(sayHi());\n",
    option: [
      "A: Hi there,",
      "B: Hi there, undefined",
      "C: Hi there, null",
      "D: ReferenceError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-20">Answer: B</h4><p>By default, arguments have the value of <code>undefined</code>, unless a value has been passed to the function. In this case, we didn\'t pass a value for the <code>name</code> argument. <code>name</code> is equal to <code>undefined</code> which gets logged.</p><p>In ES6, we can overwrite this default <code>undefined</code> value with default parameters. For example:</p><p><code>function sayHi(name = "Lydia") { ... }</code></p><p>In this case, if we didn\'t pass a value or if we passed <code>undefined</code>, <code>name</code> would always be equal to the string <code>Lydia</code></p><p></p>',
    correct: "B",
  },
  81: {
    titulo: "82. What is the output?",
    codigo:
      "var status = '😎';\n\nsetTimeout(() =&gt; {\n  const status = '😍';\n\n  const data = {\n    status: '🥑',\n    getStatus() {\n      return this.status;\n    },\n  };\n\n  console.log(data.getStatus());\n  console.log(data.getStatus.call(this));\n}, 0);\n",
    option: [
      'A: "🥑" and "😍"',
      'B: "🥑" and "😎"',
      'C: "😍" and "😎"',
      'D: "😎" and "😎"',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-21">Answer: B</h4><p>The value of the <code>this</code> keyword is dependent on where you use it. In a <strong>method</strong>, like the <code>getStatus</code> method, the <code>this</code> keyword refers to <em>the object that the method belongs to</em>. The method belongs to the <code>data</code> object, so <code>this</code> refers to the <code>data</code> object. When we log <code>this.status</code>, the <code>status</code> property on the <code>data</code> object gets logged, which is <code>"🥑"</code>.</p><p>With the <code>call</code> method, we can change the object to which the <code>this</code> keyword refers. In <strong>functions</strong>, the <code>this</code> keyword refers to the <em>the object that the function belongs to</em>. We declared the <code>setTimeout</code> function on the <em>global object</em>, so within the <code>setTimeout</code> function, the <code>this</code> keyword refers to the <em>global object</em>. On the global object, there is a variable called <em>status</em> with the value of <code>"😎"</code>. When logging <code>this.status</code>, <code>"😎"</code> gets logged.</p><p></p>',
    correct: "B",
  },
  82: {
    titulo: "83. What is the output?",
    codigo:
      "const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nlet city = person.city;\ncity = 'Amsterdam';\n\nconsole.log(person);\n",
    option: [
      'A: { name: "Lydia", age: 21 }',
      'B: { name: "Lydia", age: 21, city: "Amsterdam" }',
      'C: { name: "Lydia", age: 21, city: undefined }',
      'D: "Amsterdam"',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-26">Answer: A</h4><p>We set the variable <code>city</code> equal to the value of the property called <code>city</code> on the <code>person</code> object. There is no property on this object called <code>city</code>, so the variable <code>city</code> has the value of <code>undefined</code>.</p><p>Note that we are <em>not</em> referencing the <code>person</code> object itself! We simply set the variable <code>city</code> equal to the current value of the <code>city</code> property on the <code>person</code> object.</p><p>Then, we set <code>city</code> equal to the string <code>"Amsterdam"</code>. This doesn\'t change the person object: there is no reference to that object.</p><p>When logging the <code>person</code> object, the unmodified object gets returned.</p><p></p>',
    correct: "A",
  },
  83: {
    titulo: "84. What is the output?",
    codigo:
      'function checkAge(age) {\n  if (age &lt; 18) {\n    const message = "Sorry, you\'re too young.";\n  } else {\n    const message = "Yay! You\'re old enough!";\n  }\n\n  return message;\n}\n\nconsole.log(checkAge(21));\n',
    option: [
      'A: "Sorry, you\'re too young."',
      'B: "Yay! You\'re old enough!"',
      "C: ReferenceError",
      "D: undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-26">Answer: C</h4><p>Variables with the <code>const</code> and <code>let</code> keyword are <em>block-scoped</em>. A block is anything between curly brackets (<code>{ }</code>). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it\'s declared in, a ReferenceError gets thrown.</p><p></p>',
    correct: "C",
  },
  84: {
    titulo: "85. What kind of information would get logged?",
    codigo:
      "fetch('https://www.website.com/api/user/1')\n  .then(res =&gt; res.json())\n  .then(res =&gt; console.log(res));\n",
    option: [
      "A: The result of the fetch method.",
      "B: The result of the second invocation of the fetch method.",
      "C: The result of the callback in the previous .then().",
      "D: It would always be undefined.",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-27">Answer: C</h4><p>The value of <code>res</code> in the second <code>.then</code> is equal to the returned value of the previous <code>.then</code>. You can keep chaining <code>.then</code>s like this, where the value is passed to the next handler.</p><p></p>',
    correct: "C",
  },
  85: {
    titulo:
      "86. Which option is a way to set hasName equal to true, provided you cannot pass true as an argument?",
    codigo: "function getName(name) {\n  const hasName = //\n}\n",
    option: ["A: !!name", "B: name", "C: new Boolean(name)", "D: name.length"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-27">Answer: A</h4><p>With <code>!!name</code>, we determine whether the value of <code>name</code> is truthy or falsy. If name is truthy, which we want to test for, <code>!name</code> returns <code>false</code>. <code>!false</code> (which is what <code>!!name</code> practically is) returns <code>true</code>.</p><p>By setting <code>hasName</code> equal to <code>name</code>, you set <code>hasName</code> equal to whatever value you passed to the <code>getName</code> function, not the boolean value <code>true</code>.</p><p><code>new Boolean(true)</code> returns an object wrapper, not the boolean value itself.</p><p><code>name.length</code> returns the length of the passed argument, not whether it\'s <code>true</code>.</p><p></p>',
    correct: "A",
  },
  86: {
    titulo: "87. What's the output?",
    codigo: "console.log('I want pizza'[0]);\n",
    option: ['A: """', 'B: "I"', "C: SyntaxError", "D: undefined"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-22">Answer: B</h4><p>In order to get a character at a specific index of a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case, we want to get the element with index 0, the character <code>"I\'</code>, which gets logged.</p><p>Note that this method is not supported in IE7 and below. In that case, use <code>.charAt()</code>.</p><p></p>',
    correct: "B",
  },
  87: {
    titulo: "88. What's the output?",
    codigo:
      "function sum(num1, num2 = num1) {\n  console.log(num1 + num2);\n}\n\nsum(10);\n",
    option: ["A: NaN", "B: 20", "C: ReferenceError", "D: undefined"],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-b-23\">Answer: B</h4><p>You can set a default parameter's value equal to another parameter of the function, as long as they've been defined <em>before</em> the default parameter. We pass the value <code>10</code> to the <code>sum</code> function. If the <code>sum</code> function only receives 1 argument, it means that the value for <code>num2</code> is not passed, and the value of <code>num1</code> is equal to the passed value <code>10</code> in this case. The default value of <code>num2</code> is the value of <code>num1</code>, which is <code>10</code>. <code>num1 + num2</code> returns <code>20</code>.</p><p>If you're trying to set a default parameter's value equal to a parameter which is defined <em>after</em> (to the right), the parameter's value hasn't been initialized yet, which will throw an error.</p><p></p>",
    correct: "B",
  },
  88: {
    titulo: "89. What's the output?",
    codigo:
      "// module.js\nexport default () =&gt; 'Hello world';\nexport const name = 'Lydia';\n\n// index.js\nimport * as data from './module';\n\nconsole.log(data);\n",
    option: [
      'A: { default: function default(), name: "Lydia" }',
      "B: { default: function default() }",
      'C: { default: "Hello world", name: "Lydia" }',
      "D: Global object of module.js",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-28">Answer: A</h4><p>With the <code>import * as name</code> syntax, we import <em>all exports</em> from the <code>module.js</code> file into the <code>index.js</code> file as a new object called <code>data</code> is created. In the <code>module.js</code> file, there are two exports: the default export, and a named export. The default export is a function which returns the string <code>"Hello World"</code>, and the named export is a variable called <code>name</code> which has the value of the string <code>"Lydia"</code>.</p><p>The <code>data</code> object has a <code>default</code> property for the default export, other properties have the names of the named exports and their corresponding values.</p><p></p>',
    correct: "A",
  },
  89: {
    titulo: "90. What's the output?",
    codigo:
      "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nconst member = new Person('John');\nconsole.log(typeof member);\n",
    option: ['A: "class"', 'B: "function"', 'C: "object"', 'D: "string"'],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-28">Answer: C</h4><p>Classes are syntactical sugar for function constructors. The equivalent of the <code>Person</code> class as a function constructor would be:</p><pre><code class="language-javascript">function Person(name) {  this.name = name;}</code></pre><p>Calling a function constructor with <code>new</code> results in the creation of an instance of <code>Person</code>, <code>typeof</code> keyword returns <code>"object"</code> for an instance. <code>typeof member</code> returns <code>"object"</code>.</p><p></p>',
    correct: "C",
  },
  90: {
    titulo: "91. What's the output?",
    codigo:
      "let newList = [1, 2, 3].push(4);\n\nconsole.log(newList.push(5));\n",
    option: [
      "A: [1, 2, 3, 4, 5]",
      "B: [1, 2, 3, 5]",
      "C: [1, 2, 3, 4]",
      "D: Error",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-8">Answer: D</h4><p>The <code>.push</code> method returns the <em>new length</em> of the array, not the array itself! By setting <code>newList</code> equal to <code>[1, 2, 3].push(4)</code>, we set <code>newList</code> equal to the new length of the array: <code>4</code>.</p><p>Then, we try to use the <code>.push</code> method on <code>newList</code>. Since <code>newList</code> is the numerical value <code>4</code>, we cannot use the <code>.push</code> method: a TypeError is thrown.</p><p></p>',
    correct: "D",
  },
  91: {
    titulo: "92. What's the output?",
    codigo:
      "function giveLydiaPizza() {\n  return 'Here is pizza!';\n}\n\nconst giveLydiaChocolate = () =&gt;\n  \"Here's chocolate... now go hit the gym already.\";\n\nconsole.log(giveLydiaPizza.prototype);\nconsole.log(giveLydiaChocolate.prototype);\n",
    option: [
      "A: { constructor: ...} { constructor: ...}",
      "B: {} { constructor: ...}",
      "C: { constructor: ...} {}",
      "D: { constructor: ...} undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-9">Answer: D</h4><p>Regular functions, such as the <code>giveLydiaPizza</code> function, have a <code>prototype</code> property, which is an object (prototype object) with a <code>constructor</code> property. Arrow functions however, such as the <code>giveLydiaChocolate</code> function, do not have this <code>prototype</code> property. <code>undefined</code> gets returned when trying to access the <code>prototype</code> property using <code>giveLydiaChocolate.prototype</code>.</p><p></p>',
    correct: "D",
  },
  92: {
    titulo: "93. What's the output?",
    codigo:
      "const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nfor (const [x, y] of Object.entries(person)) {\n  console.log(x, y);\n}\n",
    option: [
      "A: name Lydia and age 21",
      'B: ["name", "Lydia"] and ["age", 21]',
      'C: ["name", "age"] and undefined',
      "D: Error",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-29">Answer: A</h4><p><code>Object.entries(person)</code> returns an array of nested arrays, containing the keys and objects:</p><p><code>[ [ \'name\', \'Lydia\' ], [ \'age\', 21 ] ]</code></p><p>Using the <code>for-of</code> loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using <code>const [x, y]</code>. <code>x</code> is equal to the first element in the subarray, <code>y</code> is equal to the second element in the subarray.</p><p>The first subarray is <code>[ "name", "Lydia" ]</code>, with <code>x</code> equal to <code>"name"</code>, and <code>y</code> equal to <code>"Lydia"</code>, which get logged.The second subarray is <code>[ "age", 21 ]</code>, with <code>x</code> equal to <code>"age"</code>, and <code>y</code> equal to <code>21</code>, which get logged.</p><p></p>',
    correct: "A",
  },
  93: {
    titulo: "94. What's the output?",
    codigo:
      'function getItems(fruitList, ...args, favoriteFruit) {\n  return [...fruitList, ...args, favoriteFruit]\n}\n\ngetItems(["banana", "apple"], "pear", "orange")\n',
    option: [
      'A: ["banana", "apple", "pear", "orange"]',
      'B: [["banana", "apple"], "pear", "orange"]',
      'C: ["banana", "apple", ["pear"], "orange"]',
      "D: SyntaxError",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-d-10\">Answer: D</h4><p><code>...args</code> is a rest parameter. The rest parameter's value is an array containing all remaining arguments, <strong>and can only be the last parameter</strong>! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.</p><pre><code class=\"language-javascript\">function getItems(fruitList, favoriteFruit, ...args) {  return [...fruitList, ...args, favoriteFruit];}getItems(['banana', 'apple'], 'pear', 'orange');</code></pre><p>The above example works. This returns the array <code>[ 'banana', 'apple', 'orange', 'pear' ]</code></p><p></p>",
    correct: "D",
  },
  94: {
    titulo: "95. What's the output?",
    codigo:
      "function nums(a, b) {\n  if (a &gt; b) console.log('a is bigger');\n  else console.log('b is bigger');\n  return\n  a + b;\n}\n\nconsole.log(nums(4, 2));\nconsole.log(nums(1, 2));\n",
    option: [
      "A: a is bigger, 6 and b is bigger, 3",
      "B: a is bigger, undefined and b is bigger, undefined",
      "C: undefined and undefined",
      "D: SyntaxError",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-b-24\">Answer: B</h4><p>In JavaScript, we don't <em>have</em> to write the semicolon (<code>;</code>) explicitly, however the JavaScript engine still adds them after statements. This is called <strong>Automatic Semicolon Insertion</strong>. A statement can for example be variables, or keywords like <code>throw</code>, <code>return</code>, <code>break</code>, etc.</p><p>Here, we wrote a <code>return</code> statement, and another value <code>a + b</code> on a <em>new line</em>. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after <code>return</code>. You could see this as:</p><pre><code class=\"language-javascript\">return;a + b;</code></pre><p>This means that <code>a + b</code> is never reached, since a function stops running after the <code>return</code> keyword. If no value gets returned, like here, the function returns <code>undefined</code>. Note that there is no automatic insertion after <code>if/else</code> statements!</p><p></p>",
    correct: "B",
  },
  95: {
    titulo: "96. What's the output?",
    codigo:
      "class Person {\n  constructor() {\n    this.name = 'Lydia';\n  }\n}\n\nPerson = class AnotherPerson {\n  constructor() {\n    this.name = 'Sarah';\n  }\n};\n\nconst member = new Person();\nconsole.log(member.name);\n",
    option: [
      'A: "Lydia"',
      'B: "Sarah"',
      "C: Error: cannot redeclare Person",
      "D: SyntaxError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-25">Answer: B</h4><p>We can set classes equal to other classes/function constructors. In this case, we set <code>Person</code> equal to <code>AnotherPerson</code>. The name on this constructor is <code>Sarah</code>, so the name property on the new <code>Person</code> instance <code>member</code> is <code>"Sarah"</code>.</p><p></p>',
    correct: "B",
  },
  96: {
    titulo: "97. What's the output?",
    codigo:
      "const info = {\n  [Symbol('a')]: 'b',\n};\n\nconsole.log(info);\nconsole.log(Object.keys(info));\n",
    option: [
      "A: {Symbol('a'): 'b'} and [\"{Symbol('a')\"]",
      "B: {} and []",
      'C: { a: "b" } and ["a"]',
      "D: {Symbol('a'): 'b'} and []",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-11">Answer: D</h4><p>A Symbol is not <em>enumerable</em>. The Object.keys method returns all <em>enumerable</em> key properties on an object. The Symbol won\'t be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.</p><p>This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also "hide" properties on objects this way (although not entirely. You can still access symbols using the <code>Object.getOwnPropertySymbols()</code> method).</p><p></p>',
    correct: "D",
  },
  97: {
    titulo: "98. What's the output?",
    codigo:
      'const getList = ([x, ...y]) =&gt; [x, y]\nconst getUser = user =&gt; { name: user.name, age: user.age }\n\nconst list = [1, 2, 3, 4]\nconst user = { name: "Lydia", age: 21 }\n\nconsole.log(getList(list))\nconsole.log(getUser(user))\n',
    option: [
      "A: [1, [2, 3, 4]] and SyntaxError",
      'B: [1, [2, 3, 4]] and { name: "Lydia", age: 21 }',
      'C: [1, 2, 3, 4] and { name: "Lydia", age: 21 }',
      'D: Error and { name: "Lydia", age: 21 }',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-30">Answer: A</h4><p>The <code>getList</code> function receives an array as its argument. Between the parentheses of the <code>getList</code> function, we destructure this array right away. You could see this as:</p><p><code>[x, ...y] = [1, 2, 3, 4]</code></p><p>With the rest parameter <code>...y</code>, we put all "remaining" arguments in an array. The remaining arguments are <code>2</code>, <code>3</code> and <code>4</code> in this case. The value of <code>y</code> is an array, containing all the rest parameters. The value of <code>x</code> is equal to <code>1</code> in this case, so when we log <code>[x, y]</code>, <code>[1, [2, 3, 4]]</code> gets logged.</p><p>The <code>getUser</code> function receives an object. With arrow functions, we don\'t <em>have</em> to write curly brackets if we just return one value. However, if you want to instantly return an <em>object</em> from an arrow function, you have to write it between parentheses, otherwise everything between the two braces will be interpreted as a block statement. In this case the code between the braces is not a valid JavaScript code, so a <code>SyntaxError</code> gets thrown. </p><p>The following function would have returned an object:</p><p><code>const getUser = user =&gt; ({ name: user.name, age: user.age })</code></p><p></p>',
    correct: "A",
  },
  98: {
    titulo: "99. What's the output?",
    codigo: "const name = 'Lydia';\n\nconsole.log(name());\n",
    option: [
      "A: SyntaxError",
      "B: ReferenceError",
      "C: TypeError",
      "D: undefined",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-c-29\">Answer: C</h4><p>The variable <code>name</code> holds the value of a string, which is not a function, thus cannot invoke.</p><p>TypeErrors get thrown when a value is not of the expected type. JavaScript expected <code>name</code> to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!</p><p>SyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word <code>return</code> as <code>retrun</code>.ReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.</p><p></p>",
    correct: "C",
  },
  99: {
    titulo: "100. What's the value of output?",
    codigo:
      "// 🎉✨ This is my 100th question! ✨🎉\n\nconst output = `${[] &amp;&amp; 'Im'}possible!\nYou should${'' &amp;&amp; `n't`} see a therapist after so much JavaScript lol`;\n",
    option: [
      "A: possible! You should see a therapist after so much JavaScript lol",
      "B: Impossible! You should see a therapist after so much JavaScript lol",
      "C: possible! You shouldn't see a therapist after so much JavaScript lol",
      "D: Impossible! You shouldn't see a therapist after so much JavaScript lol",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-26">Answer: B</h4><p><code>[]</code> is a truthy value. With the <code>&amp;&amp;</code> operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value <code>[]</code> is a truthy value, so <code>"Im\'</code> gets returned.</p><p><code>""</code> is a falsy value. If the left-hand value is falsy, nothing gets returned. <code>n\'t</code> doesn\'t get returned.</p><p></p>',
    correct: "B",
  },
  100: {
    titulo: "101. What's the value of output?",
    codigo:
      "const one = false || {} || null;\nconst two = null || false || '';\nconst three = [] || 0 || true;\n\nconsole.log(one, two, three);\n",
    option: [
      "A: false null []",
      'B: null "" true',
      'C: {} "" []',
      "D: null null true",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-30">Answer: C</h4><p>With the <code>||</code> operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.</p><p><code>(false || {} || null)</code>: the empty object <code>{}</code> is a truthy value. This is the first (and only) truthy value, which gets returned. <code>one</code> is equal to <code>{}</code>.</p><p><code>(null || false || "")</code>: all operands are falsy values. This means that the last operand, <code>""</code> gets returned. <code>two</code> is equal to <code>""</code>.</p><p><code>([] || 0 || "")</code>: the empty array<code>[]</code> is a truthy value. This is the first truthy value, which gets returned. <code>three</code> is equal to <code>[]</code>.</p><p></p>',
    correct: "C",
  },
  101: {
    titulo: "102. What's the value of output?",
    codigo:
      "const myPromise = () =&gt; Promise.resolve('I have resolved!');\n\nfunction firstFunction() {\n  myPromise().then(res =&gt; console.log(res));\n  console.log('second');\n}\n\nasync function secondFunction() {\n  console.log(await myPromise());\n  console.log('second');\n}\n\nfirstFunction();\nsecondFunction();\n",
    option: [
      "A: I have resolved!, second and I have resolved!, second",
      "B: second, I have resolved! and second, I have resolved!",
      "C: I have resolved!, second and second, I have resolved!",
      "D: second, I have resolved! and I have resolved!, second",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-d-12\">Answer: D</h4><p>With a promise, we basically say <em>I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value.</em></p><p>We can get this value with both <code>.then</code> and the <code>await</code> keyword in an <code>async</code> function. Although we can get a promise's value with both <code>.then</code> and <code>await</code>, they work a bit differently.</p><p>In the <code>firstFunction</code>, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is <code>console.log('second')</code> in this case. Then, the function resolved with the string <code>I have resolved</code>, which then got logged after it saw that the callstack was empty.</p><p>With the await keyword in <code>secondFunction</code>, we literally pause the execution of an async function until the value has been resolved before moving to the next line.</p><p>This means that it waited for the <code>myPromise</code> to resolve with the value <code>I have resolved</code>, and only once that happened, we moved to the next line: <code>second</code> got logged.</p><p></p>",
    correct: "D",
  },
  102: {
    titulo: "103. What's the value of output?",
    codigo:
      "const set = new Set();\n\nset.add(1);\nset.add('Lydia');\nset.add({ name: 'Lydia' });\n\nfor (let item of set) {\n  console.log(item + 2);\n}\n",
    option: [
      "A: 3, NaN, NaN",
      "B: 3, 7, NaN",
      "C: 3, Lydia2, [object Object]2",
      'D: "12", Lydia2, [object Object]2',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-31">Answer: C</h4><p>The <code>+</code> operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.</p><p>The first one is <code>1</code>, which is a numerical value. <code>1 + 2</code> returns the number 3.</p><p>However, the second one is a string <code>"Lydia"</code>. <code>"Lydia"</code> is a string and <code>2</code> is a number: <code>2</code> gets coerced into a string. <code>"Lydia"</code> and <code>"2"</code> get concatenated, which results in the string <code>"Lydia2"</code>.</p><p><code>{ name: "Lydia" }</code> is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes <code>"[object Object]"</code>. <code>"[object Object]"</code> concatenated with <code>"2"</code> becomes <code>"[object Object]2"</code>.</p><p></p>',
    correct: "C",
  },
  103: {
    titulo: "104. What's its value?",
    codigo: "Promise.resolve(5);\n",
    option: [
      "A: 5",
      "B: Promise {<pending>: 5}",
      "C: Promise {<fulfilled>: 5}",
      "D: Error",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-c-32\">Answer: C</h4><p>We can pass any type of value we want to <code>Promise.resolve</code>, either a promise or a non-promise. The method itself returns a promise with the resolved value (<code>&lt;fulfilled&gt;</code>). If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.</p><p>In this case, we just passed the numerical value <code>5</code>. It returns a resolved promise with the value <code>5</code>.</p><p></p>",
    correct: "C",
  },
  104: {
    titulo: "105. What's its value?",
    codigo:
      "function compareMembers(person1, person2 = person) {\n  if (person1 !== person2) {\n    console.log('Not the same!');\n  } else {\n    console.log('They are the same!');\n  }\n}\n\nconst person = { name: 'Lydia' };\n\ncompareMembers(person);\n",
    option: [
      "A: Not the same!",
      "B: They are the same!",
      "C: ReferenceError",
      "D: SyntaxError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-27">Answer: B</h4><p>Objects are passed by reference. When we check objects for strict equality (<code>===</code>), we\'re comparing their references.</p><p>We set the default value for <code>person2</code> equal to the <code>person</code> object, and passed the <code>person</code> object as the value for <code>person1</code>.</p><p>This means that both values have a reference to the same spot in memory, thus they are equal.</p><p>The code block in the <code>else</code> statement gets run, and <code>They are the same!</code> gets logged.</p><p></p>',
    correct: "B",
  },
  105: {
    titulo: "106. What's its value?",
    codigo:
      "const colorConfig = {\n  red: true,\n  blue: false,\n  green: true,\n  black: true,\n  yellow: false,\n};\n\nconst colors = ['pink', 'red', 'blue'];\n\nconsole.log(colorConfig.colors[1]);\n",
    option: ["A: true", "B: false", "C: undefined", "D: TypeError"],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-d-13\">Answer: D</h4><p>In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (<code>colorConfig.colors</code>) instead of bracket notation (<code>colorConfig[\"colors\"]</code>).</p><p>With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called <code>colors</code> on the <code>colorConfig</code> object. There is no property called <code>colors</code>, so this returns <code>undefined</code>. Then, we try to access the value of the first element by using <code>[1]</code>. We cannot do this on a value that's <code>undefined</code>, so it throws a <code>TypeError</code>: <code>Cannot read property '1' of undefined</code>.</p><p>JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket <code>[</code> and keeps going until it finds the closing bracket <code>]</code>. Only then, it will evaluate the statement. If we would've used <code>colorConfig[colors[1]]</code>, it would have returned the value of the <code>red</code> property on the <code>colorConfig</code> object.</p><p></p>",
    correct: "D",
  },
  106: {
    titulo: "107. What's its value?",
    codigo: "console.log('❤️' === '❤️');\n",
    option: ["A: true", "B: false"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-31">Answer: A</h4><p>Under the hood, emojis are unicodes. The unicodes for the heart emoji is <code>"U+2764 U+FE0F"</code>. These are always the same for the same emojis, so we\'re comparing two equal strings to each other, which returns true.</p><p></p>',
    correct: "A",
  },
  107: {
    titulo: "108. Which of these methods modifies the original array?",
    codigo:
      "const emojis = ['✨', '🥑', '😍'];\n\nemojis.map(x =&gt; x + '✨');\nemojis.filter(x =&gt; x !== '🥑');\nemojis.find(x =&gt; x !== '🥑');\nemojis.reduce((acc, cur) =&gt; acc + '✨');\nemojis.slice(1, 2, '✨');\nemojis.splice(1, 2, '✨');\n",
    option: [
      "A: All of them",
      "B: map reduce slice splice",
      "C: map slice splice",
      "D: splice",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-d-14\">Answer: D</h4><p>With <code>splice</code> method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed <code>'🥑'</code> and <code>'😍'</code>) and added the ✨ emoji instead.</p><p><code>map</code>, <code>filter</code> and <code>slice</code> return a new array, <code>find</code> returns an element, and <code>reduce</code> returns a reduced value.</p><p></p>",
    correct: "D",
  },
  108: {
    titulo: "109. What's the output?",
    codigo:
      "const food = ['🍕', '🍫', '🥑', '🍔'];\nconst info = { favoriteFood: food[0] };\n\ninfo.favoriteFood = '🍝';\n\nconsole.log(food);\n",
    option: [
      "A: ['🍕', '🍫', '🥑', '🍔']",
      "B: ['🍝', '🍫', '🥑', '🍔']",
      "C: ['🍝', '🍕', '🍫', '🥑', '🍔']",
      "D: ReferenceError",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-a-32\">Answer: A</h4><p>We set the value of the <code>favoriteFood</code> property on the <code>info</code> object equal to the string with the pizza emoji, <code>'🍕'</code>. A string is a primitive data type. In JavaScript, primitive data types don't interact by reference.</p><p>In JavaScript, primitive data types (everything that's not an object) interact by <em>value</em>. In this case, we set the value of the <code>favoriteFood</code> property on the <code>info</code> object equal to the value of the first element in the <code>food</code> array, the string with the pizza emoji in this case (<code>'🍕'</code>). A string is a primitive data type, and interact by value (see my <a href=\"https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference\">blogpost</a> if you're interested in learning more)</p><p>Then, we change the value of the <code>favoriteFood</code> property on the <code>info</code> object. The <code>food</code> array hasn't changed, since the value of <code>favoriteFood</code> was merely a <em>copy</em> of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on <code>food[0]</code>. When we log food, it's still the original array, <code>['🍕', '🍫', '🥑', '🍔']</code>.</p><p></p>",
    correct: "A",
  },
  109: {
    titulo: "110. What does this method do?",
    codigo: "JSON.parse();\n",
    option: [
      "A: Parses JSON to a JavaScript value",
      "B: Parses a JavaScript object to JSON",
      "C: Parses any JavaScript value to JSON",
      "D: Parses JSON to a JavaScript object only",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-a-33\">Answer: A</h4><p>With the <code>JSON.parse()</code> method, we can parse JSON string to a JavaScript value.</p><pre><code class=\"language-javascript\">// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:const jsonNumber = JSON.stringify(4); // '4'JSON.parse(jsonNumber); // 4// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:const jsonArray = JSON.stringify([1, 2, 3]); // '[1, 2, 3]'JSON.parse(jsonArray); // [1, 2, 3]// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:const jsonArray = JSON.stringify({ name: 'Lydia' }); // '{\"name\":\"Lydia\"}'JSON.parse(jsonArray); // { name: 'Lydia' }</code></pre><p></p>",
    correct: "A",
  },
  110: {
    titulo: "111. What's the output?",
    codigo:
      "let name = 'Lydia';\n\nfunction getName() {\n  console.log(name);\n  let name = 'Sarah';\n}\n\ngetName();\n",
    option: ["A: Lydia", "B: Sarah", "C: undefined", "D: ReferenceError"],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-d-15\">Answer: D</h4><p>Each function has its own <em>execution context</em> (or <em>scope</em>). The <code>getName</code> function first looks within its own context (scope) to see if it contains the variable <code>name</code> we're trying to access. In this case, the <code>getName</code> function contains its own <code>name</code> variable: we declare the variable <code>name</code> with the <code>let</code> keyword, and with the value of <code>'Sarah'</code>.</p><p>Variables with the <code>let</code> keyword (and <code>const</code>) are hoisted, but unlike <code>var</code>, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a <code>ReferenceError</code>.</p><p>If we wouldn't have declared the <code>name</code> variable within the <code>getName</code> function, the javascript engine would've looked down the <em>scope chain</em>. The outer scope has a variable called <code>name</code> with the value of <code>Lydia</code>. In that case, it would've logged <code>Lydia</code>.</p><pre><code class=\"language-javascript\">let name = 'Lydia';function getName() {  console.log(name);}getName(); // Lydia</code></pre><p></p>",
    correct: "D",
  },
  111: {
    titulo: "112. What's the output?",
    codigo:
      "function* generatorOne() {\n  yield ['a', 'b', 'c'];\n}\n\nfunction* generatorTwo() {\n  yield* ['a', 'b', 'c'];\n}\n\nconst one = generatorOne();\nconst two = generatorTwo();\n\nconsole.log(one.next().value);\nconsole.log(two.next().value);\n",
    option: [
      "A: a and a",
      "B: a and undefined",
      "C: ['a', 'b', 'c'] and a",
      "D: a and ['a', 'b', 'c']",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-c-33\">Answer: C</h4><p>With the <code>yield</code> keyword, we <code>yield</code> values in a generator function. With the <code>yield*</code> keyword, we can yield values from another generator function, or iterable object (for example an array).</p><p>In <code>generatorOne</code>, we yield the entire array <code>['a', 'b', 'c']</code> using the <code>yield</code> keyword. The value of <code>value</code> property on the object returned by the <code>next</code> method on <code>one</code> (<code>one.next().value</code>) is equal to the entire array <code>['a', 'b', 'c']</code>.</p><pre><code class=\"language-javascript\">console.log(one.next().value); // ['a', 'b', 'c']console.log(one.next().value); // undefined</code></pre><p>In <code>generatorTwo</code>, we use the <code>yield*</code> keyword. This means that the first yielded value of <code>two</code>, is equal to the first yielded value in the iterator. The iterator is the array <code>['a', 'b', 'c']</code>. The first yielded value is <code>a</code>, so the first time we call <code>two.next().value</code>, <code>a</code> is returned.</p><pre><code class=\"language-javascript\">console.log(two.next().value); // 'a'console.log(two.next().value); // 'b'console.log(two.next().value); // 'c'console.log(two.next().value); // undefined</code></pre><p></p>",
    correct: "C",
  },
  112: {
    titulo: "113. What's the output?",
    codigo: "console.log(`${(x =&gt; x)('I love')} to program`);\n",
    option: [
      "A: I love to program",
      "B: undefined to program",
      "C: ${(x => x)('I love') to program",
      "D: TypeError",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-a-34\">Answer: A</h4><p>Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function <code>(x =&gt; x)('I love')</code> in this case. We pass the value <code>'I love'</code> as an argument to the <code>x =&gt; x</code> arrow function. <code>x</code> is equal to <code>'I love'</code>, which gets returned. This results in <code>I love to program</code>.</p><p></p>",
    correct: "A",
  },
  113: {
    titulo: "114. What will happen?",
    codigo:
      "let config = {\n  alert: setInterval(() =&gt; {\n    console.log('Alert!');\n  }, 1000),\n};\n\nconfig = null;\n",
    option: [
      "A: The setInterval callback won't be invoked",
      "B: The setInterval callback gets invoked once",
      "C: The setInterval callback will still be called every second",
      "D: We never invoked config.alert(), config is null",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-c-34\">Answer: C</h4><p>Normally when we set objects equal to <code>null</code>, those objects get <em>garbage collected</em> as there is no reference anymore to that object. However, since the callback function within <code>setInterval</code> is an arrow function (thus bound to the <code>config</code> object), the callback function still holds a reference to the <code>config</code> object. As long as there is a reference, the object won't get garbage collected. Since this is an interval, setting <code>config</code> to <code>null</code> or <code>delete</code>-ing <code>config.alert</code> won't garbage-collect the interval, so the interval will still be called. It should be cleared with <code>clearInterval(config.alert)</code> to remove it from memory.Since it was not cleared, the <code>setInterval</code> callback function will still get invoked every 1000ms (1s).</p><p></p>",
    correct: "C",
  },
  114: {
    titulo: "115. Which method(s) will return the value 'Hello world!'?",
    codigo:
      "const myMap = new Map();\nconst myFunc = () =&gt; 'greeting';\n\nmyMap.set(myFunc, 'Hello world!');\n\n//1\nmyMap.get('greeting');\n//2\nmyMap.get(myFunc);\n//3\nmyMap.get(() =&gt; 'greeting');\n",
    option: ["A: 1", "B: 2", "C: 2 and 3", "D: All of them"],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-b-28\">Answer: B</h4><p>When adding a key/value pair using the <code>set</code> method, the key will be the value of the first argument passed to the <code>set</code> function, and the value will be the second argument passed to the <code>set</code> function. The key is the <em>function</em> <code>() =&gt; 'greeting'</code> in this case, and the value <code>'Hello world'</code>. <code>myMap</code> is now <code>{ () =&gt; 'greeting' =&gt; 'Hello world!' }</code>.</p><p>1 is wrong, since the key is not <code>'greeting'</code> but <code>() =&gt; 'greeting'</code>.3 is wrong, since we're creating a new function by passing it as a parameter to the <code>get</code> method. Object interact by <em>reference</em>. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.</p><p></p>",
    correct: "B",
  },
  115: {
    titulo: "116. What's the output?",
    codigo:
      "const person = {\n  name: 'Lydia',\n  age: 21,\n};\n\nconst changeAge = (x = { ...person }) =&gt; (x.age += 1);\nconst changeAgeAndName = (x = { ...person }) =&gt; {\n  x.age += 1;\n  x.name = 'Sarah';\n};\n\nchangeAge(person);\nchangeAgeAndName();\n\nconsole.log(person);\n",
    option: [
      'A: {name: "Sarah", age: 22}',
      'B: {name: "Sarah", age: 23}',
      'C: {name: "Lydia", age: 22}',
      'D: {name: "Lydia", age: 23}',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-35">Answer: C</h4><p>Both the <code>changeAge</code> and <code>changeAgeAndName</code> functions have a default parameter, namely a <em>newly</em> created object <code>{ ...person }</code>. This object has copies of all the key/values in the <code>person</code> object.</p><p>First, we invoke the <code>changeAge</code> function and pass the <code>person</code> object as its argument. This function increases the value of the <code>age</code> property by 1. <code>person</code> is now <code>{ name: "Lydia", age: 22 }</code>.</p><p>Then, we invoke the <code>changeAgeAndName</code> function, however we don\'t pass a parameter. Instead, the value of <code>x</code> is equal to a <em>new</em> object: <code>{ ...person }</code>. Since it\'s a new object, it doesn\'t affect the values of the properties on the <code>person</code> object. <code>person</code> is still equal to <code>{ name: "Lydia", age: 22 }</code>.</p><p></p>',
    correct: "C",
  },
  116: {
    titulo: "117. Which of the following options will return 6?",
    codigo: "function sumValues(x, y, z) {\n  return x + y + z;\n}\n",
    option: [
      "A: sumValues([...1, 2, 3])",
      "B: sumValues([...[1, 2, 3]])",
      "C: sumValues(...[1, 2, 3])",
      "D: sumValues([1, 2, 3])",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-36">Answer: C</h4><p>With the spread operator <code>...</code>, we can <em>spread</em> iterables to individual elements. The <code>sumValues</code> function receives three arguments: <code>x</code>, <code>y</code> and <code>z</code>. <code>...[1, 2, 3]</code> will result in <code>1, 2, 3</code>, which we pass to the <code>sumValues</code> function.</p><p></p>',
    correct: "C",
  },
  117: {
    titulo: "118. What's the output?",
    codigo:
      "let num = 1;\nconst list = ['🥳', '🤠', '🥰', '🤪'];\n\nconsole.log(list[(num += 1)]);\n",
    option: ["A: 🤠", "B: 🥰", "C: SyntaxError", "D: ReferenceError"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-29">Answer: B</h4><p>With the <code>+=</code> operand, we\'re incrementing the value of <code>num</code> by <code>1</code>. <code>num</code> had the initial value <code>1</code>, so <code>1 + 1</code> is <code>2</code>. The item on the second index in the <code>list</code> array is 🥰, <code>console.log(list[2])</code> prints 🥰.</p><p></p>',
    correct: "B",
  },
  118: {
    titulo: "119. What's the output?",
    codigo:
      "const person = {\n  firstName: 'Lydia',\n  lastName: 'Hallie',\n  pet: {\n    name: 'Mara',\n    breed: 'Dutch Tulip Hound',\n  },\n  getFullName() {\n    return `${this.firstName} ${this.lastName}`;\n  },\n};\n\nconsole.log(person.pet?.name);\nconsole.log(person.pet?.family?.name);\nconsole.log(person.getFullName?.());\nconsole.log(member.getLastName?.());\n",
    option: [
      "A: undefined undefined undefined undefined",
      "B: Mara undefined Lydia Hallie ReferenceError",
      "C: Mara null Lydia Hallie null",
      "D: null ReferenceError null ReferenceError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-30">Answer: B</h4><p>With the optional chaining operator <code>?.</code>, we no longer have to explicitly check whether the deeper nested values are valid or not. If we\'re trying to access a property on an <code>undefined</code> or <code>null</code> value (<em>nullish</em>), the expression short-circuits and returns <code>undefined</code>.</p><p><code>person.pet?.name</code>: <code>person</code> has a property named <code>pet</code>: <code>person.pet</code> is not nullish. It has a property called <code>name</code>, and returns <code>Mara</code>.<code>person.pet?.family?.name</code>: <code>person</code> has a property named <code>pet</code>: <code>person.pet</code> is not nullish. <code>pet</code> does <em>not</em> have a property called <code>family</code>, <code>person.pet.family</code> is nullish. The expression returns <code>undefined</code>.<code>person.getFullName?.()</code>: <code>person</code> has a property named <code>getFullName</code>: <code>person.getFullName()</code> is not nullish and can get invoked, which returns <code>Lydia Hallie</code>.<code>member.getLastName?.()</code>: variable <code>member</code> is non existent therefore a <code>ReferenceError</code> gets thrown!</p><p></p>',
    correct: "B",
  },
  119: {
    titulo: "120. What's the output?",
    codigo:
      "const groceries = ['banana', 'apple', 'peanuts'];\n\nif (groceries.indexOf('banana')) {\n  console.log('We have to buy bananas!');\n} else {\n  console.log(`We don't have to buy bananas!`);\n}\n",
    option: [
      "A: We have to buy bananas!",
      "B: We don't have to buy bananas",
      "C: undefined",
      "D: 1",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-31">Answer: B</h4><p>We passed the condition <code>groceries.indexOf("banana")</code> to the if-statement. <code>groceries.indexOf("banana")</code> returns <code>0</code>, which is a falsy value. Since the condition in the if-statement is falsy, the code in the <code>else</code> block runs, and <code>We don\'t have to buy bananas!</code> gets logged.</p><p></p>',
    correct: "B",
  },
  120: {
    titulo: "121. What's the output?",
    codigo:
      "const config = {\n  languages: [],\n  set language(lang) {\n    return this.languages.push(lang);\n  },\n};\n\nconsole.log(config.language);\n",
    option: [
      "A: function language(lang) { this.languages.push(lang }",
      "B: 0",
      "C: []",
      "D: undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-16">Answer: D</h4><p>The <code>language</code> method is a <code>setter</code>. Setters don\'t hold an actual value, their purpose is to <em>modify</em> properties. When calling a <code>setter</code> method, <code>undefined</code> gets returned.</p><p></p>',
    correct: "D",
  },
  121: {
    titulo: "122. What's the output?",
    codigo:
      "const name = 'Lydia Hallie';\n\nconsole.log(!typeof name === 'object');\nconsole.log(!typeof name === 'string');\n",
    option: [
      "A: false true",
      "B: true false",
      "C: false false",
      "D: true true",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-37">Answer: C</h4><p><code>typeof name</code> returns <code>"string"</code>. The string <code>"string"</code> is a truthy value, so <code>!typeof name</code> returns the boolean value <code>false</code>. <code>false === "object"</code> and <code>false === "string"</code> both return<code>false</code>.</p><p>(If we wanted to check whether the type was (un)equal to a certain type, we should\'ve written <code>!==</code> instead of <code>!typeof</code>)</p><p></p>',
    correct: "C",
  },
  122: {
    titulo: "123. What's the output?",
    codigo:
      "const add = x =&gt; y =&gt; z =&gt; {\n  console.log(x, y, z);\n  return x + y + z;\n};\n\nadd(4)(5)(6);\n",
    option: [
      "A: 4 5 6",
      "B: 6 5 4",
      "C: 4 function function",
      "D: undefined undefined 6",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-35">Answer: A</h4><p>The <code>add</code> function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument <code>x</code> with the value of <code>4</code>. We invoke the second function, which receives an argument <code>y</code> with the value <code>5</code>. Then we invoke the third function, which receives an argument <code>z</code> with the value <code>6</code>. When we\'re trying to access the value <code>x</code>, <code>y</code> and <code>z</code> within the last arrow function, the JS engine goes up the scope chain in order to find the values for <code>x</code> and <code>y</code> accordingly. This returns <code>4</code> <code>5</code> <code>6</code>.</p><p></p>',
    correct: "A",
  },
  123: {
    titulo: "124. What's the output?",
    codigo:
      "async function* range(start, end) {\n  for (let i = start; i &lt;= end; i++) {\n    yield Promise.resolve(i);\n  }\n}\n\n(async () =&gt; {\n  const gen = range(1, 3);\n  for await (const item of gen) {\n    console.log(item);\n  }\n})();\n",
    option: [
      "A: Promise {1} Promise {2} Promise {3}",
      "B: Promise {<pending>} Promise {<pending>} Promise {<pending>}",
      "C: 1 2 3",
      "D: undefined undefined undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-38">Answer: C</h4><p>The generator function <code>range</code> returns an async object with promises for each item in the range we pass: <code>Promise{1}</code>, <code>Promise{2}</code>, <code>Promise{3}</code>. We set the variable <code>gen</code> equal to the async object, after which we loop over it using a <code>for await ... of</code> loop. We set the variable <code>item</code> equal to the returned Promise values: first <code>Promise{1}</code>, then <code>Promise{2}</code>, then <code>Promise{3}</code>. Since we\'re <em>awaiting</em> the value of <code>item</code>, the resolved promise, the resolved <em>values</em> of the promises get returned: <code>1</code>, <code>2</code>, then <code>3</code>.</p><p></p>',
    correct: "C",
  },
  124: {
    titulo: "125. What's the output?",
    codigo:
      "const myFunc = ({ x, y, z }) =&gt; {\n  console.log(x, y, z);\n};\n\nmyFunc(1, 2, 3);\n",
    option: [
      "A: 1 2 3",
      "B: {1: 1} {2: 2} {3: 3}",
      "C: { 1: undefined } undefined undefined",
      "D: undefined undefined undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-17">Answer: D</h4><p><code>myFunc</code> expects an object with properties <code>x</code>, <code>y</code> and <code>z</code> as its argument. Since we\'re only passing three separate numeric values (1, 2, 3) instead of one object with properties <code>x</code>, <code>y</code> and <code>z</code> ({x: 1, y: 2, z: 3}), <code>x</code>, <code>y</code> and <code>z</code> have their default value of <code>undefined</code>.</p><p></p>',
    correct: "D",
  },
  125: {
    titulo: "126. What's the output?",
    codigo:
      "function getFine(speed, amount) {\n  const formattedSpeed = new Intl.NumberFormat('en-US', {\n    style: 'unit',\n    unit: 'mile-per-hour'\n  }).format(speed);\n\n  const formattedAmount = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD'\n  }).format(amount);\n\n  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;\n}\n\nconsole.log(getFine(130, 300))\n",
    option: [
      "A: The driver drove 130 and has to pay 300",
      "B: The driver drove 130 mph and has to pay $300.00",
      "C: The driver drove undefined and has to pay undefined",
      "D: The driver drove 130.00 and has to pay 300.00",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-32">Answer: B</h4><p>With the <code>Intl.NumberFormat</code> method, we can format numeric values to any locale. We format the numeric value <code>130</code> to the <code>en-US</code> locale as a <code>unit</code> in <code>mile-per-hour</code>, which results in <code>130 mph</code>. The numeric value <code>300</code> to the <code>en-US</code> locale as a <code>currency</code> in <code>USD</code> results in <code>$300.00</code>.</p><p></p>',
    correct: "B",
  },
  126: {
    titulo: "127. What's the output?",
    codigo:
      "const spookyItems = ['👻', '🎃', '🕸'];\n({ item: spookyItems[3] } = { item: '💀' });\n\nconsole.log(spookyItems);\n",
    option: [
      'A: ["👻", "🎃", "🕸"]',
      'B: ["👻", "🎃", "🕸", "💀"]',
      'C: ["👻", "🎃", "🕸", { item: "💀" }]',
      'D: ["👻", "🎃", "🕸", "[object Object]"]',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-33">Answer: B</h4><p>By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we\'re assigning the value "💀" to <code>spookyItems[3]</code>. This means that we\'re modifying the <code>spookyItems</code> array, we\'re adding the "💀" to it. When logging <code>spookyItems</code>, <code>["👻", "🎃", "🕸", "💀"]</code> gets logged.</p><p></p>',
    correct: "B",
  },
  127: {
    titulo: "128. What's the output?",
    codigo:
      "const name = 'Lydia Hallie';\nconst age = 21;\n\nconsole.log(Number.isNaN(name));\nconsole.log(Number.isNaN(age));\n\nconsole.log(isNaN(name));\nconsole.log(isNaN(age));\n",
    option: [
      "A: true false true false",
      "B: true false false false",
      "C: false false true false",
      "D: false true false true",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-39">Answer: C</h4><p>With the <code>Number.isNaN</code> method, you can check if the value you pass is a <em>numeric value</em> and equal to <code>NaN</code>. <code>name</code> is not a numeric value, so <code>Number.isNaN(name)</code> returns <code>false</code>. <code>age</code> is a numeric value, but is not equal to <code>NaN</code>, so <code>Number.isNaN(age)</code> returns <code>false</code>.</p><p>With the <code>isNaN</code> method, you can check if the value you pass is not a number. <code>name</code> is not a number, so <code>isNaN(name)</code> returns true. <code>age</code> is a number, so <code>isNaN(age)</code> returns <code>false</code>.</p><p></p>',
    correct: "C",
  },
  128: {
    titulo: "129. What's the output?",
    codigo:
      "const randomValue = 21;\n\nfunction getInfo() {\n  console.log(typeof randomValue);\n  const randomValue = 'Lydia Hallie';\n}\n\ngetInfo();\n",
    option: ['A: "number"', 'B: "string"', "C: undefined", "D: ReferenceError"],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-d-18\">Answer: D</h4><p>Variables declared with the <code>const</code> keyword are not referenceable before their initialization: this is called the <em>temporal dead zone</em>. In the <code>getInfo</code> function, the variable <code>randomValue</code> is scoped in the functional scope of <code>getInfo</code>. On the line where we want to log the value of <code>typeof randomValue</code>, the variable <code>randomValue</code> isn't initialized yet: a <code>ReferenceError</code> gets thrown! The engine didn't go down the scope chain since we declared the variable <code>randomValue</code> in the <code>getInfo</code> function.</p><p></p>",
    correct: "D",
  },
  129: {
    titulo: "130. What's the output?",
    codigo:
      "const myPromise = Promise.resolve('Woah some cool data');\n\n(async () =&gt; {\n  try {\n    console.log(await myPromise);\n  } catch {\n    throw new Error(`Oops didn't work`);\n  } finally {\n    console.log('Oh finally!');\n  }\n})();\n",
    option: [
      "A: Woah some cool data",
      "B: Oh finally!",
      "C: Woah some cool data Oh finally!",
      "D: Oops didn't work Oh finally!",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-40">Answer: C</h4><p>In the <code>try</code> block, we\'re logging the awaited value of the <code>myPromise</code> variable: <code>"Woah some cool data"</code>. Since no errors were thrown in the <code>try</code> block, the code in the <code>catch</code> block doesn\'t run. The code in the <code>finally</code> block <em>always</em> runs, <code>"Oh finally!"</code> gets logged.</p><p></p>',
    correct: "C",
  },
  130: {
    titulo: "131. What's the output?",
    codigo:
      "const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];\n\nconsole.log(emojis.flat(1));\n",
    option: [
      "A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]",
      "B: ['🥑', '✨', '✨', ['🍕', '🍕']]",
      "C: ['🥑', ['✨', '✨', '🍕', '🍕']]",
      "D: ['🥑', '✨', '✨', '🍕', '🍕']",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-b-34\">Answer: B</h4><p>With the <code>flat</code> method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value <code>1</code> (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. <code>['🥑']</code> and <code>['✨', '✨', ['🍕', '🍕']]</code> in this case. Concatenating these two arrays results in <code>['🥑', '✨', '✨', ['🍕', '🍕']]</code>.</p><p></p>",
    correct: "B",
  },
  131: {
    titulo: "132. What's the output?",
    codigo:
      "class Counter {\n  constructor() {\n    this.count = 0;\n  }\n\n  increment() {\n    this.count++;\n  }\n}\n\nconst counterOne = new Counter();\ncounterOne.increment();\ncounterOne.increment();\n\nconst counterTwo = counterOne;\ncounterTwo.increment();\n\nconsole.log(counterOne.count);\n",
    option: ["A: 0", "B: 1", "C: 2", "D: 3"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-19">Answer: D</h4><p><code>counterOne</code> is an instance of the <code>Counter</code> class. The counter class contains a <code>count</code> property on its constructor, and an <code>increment</code> method. First, we invoked the <code>increment</code> method twice by calling <code>counterOne.increment()</code>. Currently, <code>counterOne.count</code> is <code>2</code>.</p><img src="https://i.imgur.com/KxLlTm9.png" width="400"><p>Then, we create a new variable <code>counterTwo</code>, and set it equal to <code>counterOne</code>. Since objects interact by reference, we\'re just creating a new reference to the same spot in memory that <code>counterOne</code> points to. Since it has the same spot in memory, any changes made to the object that <code>counterTwo</code> has a reference to, also apply to <code>counterOne</code>. Currently, <code>counterTwo.count</code> is <code>2</code>.</p><p>We invoke <code>counterTwo.increment()</code>, which sets <code>count</code> to <code>3</code>. Then, we log the count on <code>counterOne</code>, which logs <code>3</code>.</p><img src="https://i.imgur.com/BNBHXmc.png" width="400"><p></p>',
    correct: "D",
  },
  132: {
    titulo: "133. What's the output?",
    codigo:
      "const myPromise = Promise.resolve(Promise.resolve('Promise'));\n\nfunction funcOne() {\n  setTimeout(() =&gt; console.log('Timeout 1!'), 0);\n  myPromise.then(res =&gt; res).then(res =&gt; console.log(`${res} 1!`));\n  console.log('Last line 1!');\n}\n\nasync function funcTwo() {\n  const res = await myPromise;\n  console.log(`${res} 2!`)\n  setTimeout(() =&gt; console.log('Timeout 2!'), 0);\n  console.log('Last line 2!');\n}\n\nfuncOne();\nfuncTwo();\n",
    option: [
      "A: Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!",
      "B: Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2! ",
      "C: Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!",
      "D: Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-41">Answer: C</h4><p>First, we invoke <code>funcOne</code>. On the first line of <code>funcOne</code>, we call the <em>asynchronous</em> <code>setTimeout</code> function, from which the callback is sent to the Web API. (see my article on the event loop <a href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif">here</a>.)</p><p>Then we call the <code>myPromise</code> promise, which is an <em>asynchronous</em> operation.</p><p>Both the promise and the timeout are asynchronous operations, the function keeps on running while it\'s busy completing the promise and handling the <code>setTimeout</code> callback. This means that <code>Last line 1!</code> gets logged first, since this is not an asynchonous operation. </p><p>Since the callstack is not empty yet, the <code>setTimeout</code> function and promise in <code>funcOne</code> cannot get added to the callstack yet.</p><p>In <code>funcTwo</code>, the variable <code>res</code> gets <code>Promise</code> because <code>Promise.resolve(Promise.resolve(\'Promise\'))</code> is equivalent to <code>Promise.resolve(\'Promise\')</code> since resolving a promise just resolves it\'s value. The <code>await</code> in this line stops the execution of the function until it receives the resolution of the promise and then keeps on running synchronously until completion, so <code>Promise 2!</code> and then <code>Last line 2!</code> are logged and the <code>setTimeout</code> is sent to the Web API.</p><p>Then the call stack is empty. Promises are <em>microtasks</em> so they are resolved first when the call stack is empty so <code>Promise 1!</code> gets to be logged.</p><p>Now, since <code>funcTwo</code> popped off the call stack, the call stack is empty. The callbacks waiting in the queue (<code>() =&gt; console.log("Timeout 1!")</code> from <code>funcOne</code>, and <code>() =&gt; console.log("Timeout 2!")</code> from <code>funcTwo</code>) get added to the call stack one by one. The first callback logs <code>Timeout 1!</code>, and gets popped off the stack. Then, the second callback logs <code>Timeout 2!</code>, and gets popped off the stack.</p><p></p>',
    correct: "C",
  },
  133: {
    titulo: "134. How can we invoke sum in sum.js from index.js?",
    codigo:
      "// sum.js\nexport default function sum(x) {\n  return x + x;\n}\n\n// index.js\nimport * as sum from './sum';\n",
    option: [
      "A: sum(4)",
      "B: sum.sum(4)",
      "C: sum.default(4)",
      "D: Default aren't imported with *, only named exports",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-42">Answer: C</h4><p>With the asterisk <code>*</code>, we import all exported values from that file, both default and named. If we had the following file:</p><pre><code class="language-javascript">// info.jsexport const name = \'Lydia\';export const age = 21;export default \'I love JavaScript\';// index.jsimport * as info from \'./info\';console.log(info);</code></pre><p>The following would get logged:</p><pre><code class="language-javascript">{  default: "I love JavaScript",  name: "Lydia",  age: 21}</code></pre><p>For the <code>sum</code> example, it means that the imported value <code>sum</code> looks like this:</p><pre><code class="language-javascript">{ default: function sum(x) { return x + x } }</code></pre><p>We can invoke this function, by calling <code>sum.default</code></p><p></p>',
    correct: "C",
  },
  134: {
    titulo: "135. What's the output?",
    codigo:
      "const handler = {\n  set: () =&gt; console.log('Added a new property!'),\n  get: () =&gt; console.log('Accessed a property!'),\n};\n\nconst person = new Proxy({}, handler);\n\nperson.name = 'Lydia';\nperson.name;\n",
    option: [
      "A: Added a new property!",
      "B: Accessed a property!",
      "C: Added a new property! Accessed a property!",
      "D: Nothing gets logged",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-43">Answer: C</h4><p>With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In this case, we pass the <code>handler</code> object which contained two properties: <code>set</code> and <code>get</code>. <code>set</code> gets invoked whenever we <em>set</em> property values, <code>get</code> gets invoked whenever we <em>get</em> (access) property values.</p><p>The first argument is an empty object <code>{}</code>, which is the value of <code>person</code>. To this object, the custom behavior specified in the <code>handler</code> object gets added. If we add a property to the <code>person</code> object, <code>set</code> will get invoked. If we access a property on the <code>person</code> object, <code>get</code> gets invoked.</p><p>First, we added a new property <code>name</code> to the proxy object (<code>person.name = "Lydia"</code>). <code>set</code> gets invoked, and logs <code>"Added a new property!"</code>.</p><p>Then, we access a property value on the proxy object, the <code>get</code> property on the handler object got invoked. <code>"Accessed a property!"</code> gets logged.</p><p></p>',
    correct: "C",
  },
  135: {
    titulo: "136. Which of the following will modify the person object?",
    codigo:
      "const person = { name: 'Lydia Hallie' };\n\nObject.seal(person);\n",
    option: [
      'A: person.name = "Evan Bacon"',
      "B: person.age = 21",
      "C: delete person.name",
      "D: Object.assign(person, { age: 21 })",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-36">Answer: A</h4><p>With <code>Object.seal</code> we can prevent new properties from being <em>added</em>, or existing properties to be <em>removed</em>.</p><p>However, you can still modify the value of existing properties.</p><p></p>',
    correct: "A",
  },
  136: {
    titulo: "137. Which of the following will modify the person object?",
    codigo:
      "const person = {\n  name: 'Lydia Hallie',\n  address: {\n    street: '100 Main St',\n  },\n};\n\nObject.freeze(person);\n",
    option: [
      'A: person.name = "Evan Bacon"',
      "B: delete person.address",
      'C: person.address.street = "101 Main St"',
      'D: person.pet = { name: "Mara" }',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-44">Answer: C</h4><p>The <code>Object.freeze</code> method <em>freezes</em> an object. No properties can be added, modified, or removed.</p><p>However, it only <em>shallowly</em> freezes the object, meaning that only <em>direct</em> properties on the object are frozen. If the property is another object, like <code>address</code> in this case, the properties on that object aren\'t frozen, and can be modified.</p><p></p>',
    correct: "C",
  },
  137: {
    titulo: "138. What's the output?",
    codigo:
      "const add = x =&gt; x + x;\n\nfunction myFunc(num = 2, value = add(num)) {\n  console.log(num, value);\n}\n\nmyFunc();\nmyFunc(3);\n",
    option: [
      "A: 2 4 and 3 6",
      "B: 2 NaN and 3 NaN",
      "C: 2 Error and 3 6",
      "D: 2 4 and 3 Error",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-a-37\">Answer: A</h4><p>First, we invoked <code>myFunc()</code> without passing any arguments. Since we didn't pass arguments, <code>num</code> and <code>value</code> got their default values: num is <code>2</code>, and <code>value</code> the returned value of the function <code>add</code>. To the <code>add</code> function, we pass <code>num</code> as an argument, which had the value of <code>2</code>. <code>add</code> returns <code>4</code>, which is the value of <code>value</code>.</p><p>Then, we invoked <code>myFunc(3)</code> and passed the value <code>3</code> as the value for the argument <code>num</code>. We didn't pass an argument for <code>value</code>. Since we didn't pass a value for the <code>value</code> argument, it got the default value: the returned value of the <code>add</code> function. To <code>add</code>, we pass <code>num</code>, which has the value of <code>3</code>. <code>add</code> returns <code>6</code>, which is the value of <code>value</code>.</p><p></p>",
    correct: "A",
  },
  138: {
    titulo: "139. What's the output?",
    codigo:
      "class Counter {\n  #number = 10\n\n  increment() {\n    this.#number++\n  }\n\n  getNum() {\n    return this.#number\n  }\n}\n\nconst counter = new Counter()\ncounter.increment()\n\nconsole.log(counter.#number)\n",
    option: ["A: 10", "B: 11", "C: undefined", "D: SyntaxError"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-20">Answer: D</h4><p>In ES2020, we can add private variables in classes by using the <code>#</code>. We cannot access these variables outside of the class. When we try to log <code>counter.#number</code>, a SyntaxError gets thrown: we cannot acccess it outside the <code>Counter</code> class!</p><p></p>',
    correct: "D",
  },
  139: {
    titulo: "140. What's missing?",
    codigo:
      "const teams = [\n  { name: 'Team 1', members: ['Paul', 'Lisa'] },\n  { name: 'Team 2', members: ['Laura', 'Tim'] },\n];\n\nfunction* getMembers(members) {\n  for (let i = 0; i &lt; members.length; i++) {\n    yield members[i];\n  }\n}\n\nfunction* getTeams(teams) {\n  for (let i = 0; i &lt; teams.length; i++) {\n    // ✨ SOMETHING IS MISSING HERE ✨\n  }\n}\n\nconst obj = getTeams(teams);\nobj.next(); // { value: \"Paul\", done: false }\nobj.next(); // { value: \"Lisa\", done: false }\n",
    option: [
      "A: yield getMembers(teams[i].members)",
      "B: yield* getMembers(teams[i].members)",
      "C: return getMembers(teams[i].members)",
      "D: return yield getMembers(teams[i].members)",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-b-35\">Answer: B</h4><p>In order to iterate over the <code>members</code> in each element in the <code>teams</code> array, we need to pass <code>teams[i].members</code> to the <code>getMembers</code> generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use <code>yield*</code>.</p><p>If we would've written <code>yield</code>, <code>return yield</code>, or <code>return</code>, the entire generator function would've gotten returned the first time we called the <code>next</code> method.</p><p></p>",
    correct: "B",
  },
  140: {
    titulo: "141. What's the output?",
    codigo:
      "const person = {\n  name: 'Lydia Hallie',\n  hobbies: ['coding'],\n};\n\nfunction addHobby(hobby, hobbies = person.hobbies) {\n  hobbies.push(hobby);\n  return hobbies;\n}\n\naddHobby('running', []);\naddHobby('dancing');\naddHobby('baking', person.hobbies);\n\nconsole.log(person.hobbies);\n",
    option: [
      'A: ["coding"]',
      'B: ["coding", "dancing"]',
      'C: ["coding", "dancing", "baking"]',
      'D: ["coding", "running", "dancing", "baking"]',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-45">Answer: C</h4><p>The <code>addHobby</code> function receives two arguments, <code>hobby</code> and <code>hobbies</code> with the default value of the <code>hobbies</code> array on the <code>person</code> object.</p><p>First, we invoke the <code>addHobby</code> function, and pass <code>"running"</code> as the value for <code>hobby</code> and an empty array as the value for <code>hobbies</code>. Since we pass an empty array as the value for <code>hobbies</code>, <code>"running"</code> gets added to this empty array.</p><p>Then, we invoke the <code>addHobby</code> function, and pass <code>"dancing"</code> as the value for <code>hobby</code>. We didn\'t pass a value for <code>hobbies</code>, so it gets the default value, the <code>hobbies</code> property on the <code>person</code> object. We push the hobby <code>dancing</code> to the <code>person.hobbies</code> array.</p><p>Last, we invoke the <code>addHobby</code> function, and pass <code>"baking"</code> as the value for <code>hobby</code>, and the <code>person.hobbies</code> array as the value for <code>hobbies</code>. We push the hobby <code>baking</code> to the <code>person.hobbies</code> array.</p><p>After pushing <code>dancing</code> and <code>baking</code>, the value of <code>person.hobbies</code> is <code>["coding", "dancing", "baking"]</code></p><p></p>',
    correct: "C",
  },
  141: {
    titulo: "142. What's the output?",
    codigo:
      'class Bird {\n  constructor() {\n    console.log("I\'m a bird. 🦢");\n  }\n}\n\nclass Flamingo extends Bird {\n  constructor() {\n    console.log("I\'m pink. 🌸");\n    super();\n  }\n}\n\nconst pet = new Flamingo();\n',
    option: [
      "A: I'm pink. 🌸",
      "B: I'm pink. 🌸 I'm a bird. 🦢",
      "C: I'm a bird. 🦢 I'm pink. 🌸",
      "D: Nothing, we didn't call any method",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-36">Answer: B</h4><p>We create the variable <code>pet</code> which is an instance of the <code>Flamingo</code> class. When we instantiate this instance, the <code>constructor</code> on <code>Flamingo</code> gets called. First, <code>"I\'m pink. 🌸"</code> gets logged, after which we call <code>super()</code>. <code>super()</code> calls the constructor of the parent class, <code>Bird</code>. The constructor in <code>Bird</code> gets called, and logs <code>"I\'m a bird. 🦢"</code>.</p><p></p>',
    correct: "B",
  },
  142: {
    titulo: "143. Which of the options result(s) in an error?",
    codigo:
      "const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];\n\n/* 1 */ emojis.push('🦌');\n/* 2 */ emojis.splice(0, 2);\n/* 3 */ emojis = [...emojis, '🥂'];\n/* 4 */ emojis.length = 0;\n",
    option: ["A: 1", "B: 1 and 2", "C: 3 and 4", "D: 3"],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-d-21\">Answer: D</h4><p>The <code>const</code> keyword simply means we cannot <em>redeclare</em> the value of that variable, it's <em>read-only</em>. However, the value itself isn't immutable. The properties on the <code>emojis</code> array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0.</p><p></p>",
    correct: "D",
  },
  143: {
    titulo:
      '144. What do we need to add to the person object to get ["Lydia Hallie", 21] as the output of [...person]?',
    codigo:
      'const person = {\n  name: "Lydia Hallie",\n  age: 21\n}\n\n[...person] // ["Lydia Hallie", 21]\n',
    option: [
      "A: Nothing, object are iterable by default",
      "B: *[Symbol.iterator]() { for (let x in this) yield* this[x] }",
      "C: *[Symbol.iterator]() { yield* Object.values(this) }",
      "D: *[Symbol.iterator]() { for (let x in this) yield this }",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-46">Answer: C</h4><p>Objects aren\'t iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol <code>[Symbol.iterator]</code>, which has to return a generator object, for example by making it a generator function <code>*[Symbol.iterator]() {}</code>. This generator function has to yield the <code>Object.values</code> of the <code>person</code> object if we want it to return the array <code>["Lydia Hallie", 21]</code>: <code>yield* Object.values(this)</code>.</p><p></p>',
    correct: "C",
  },
  144: {
    titulo: "145. What's the output?",
    codigo:
      "let count = 0;\nconst nums = [0, 1, 2, 3];\n\nnums.forEach(num =&gt; {\n    if (num) count += 1\n})\n\nconsole.log(count)\n",
    option: ["A: 1", "B: 2", "C: 3", "D: 4"],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-c-47\">Answer: C</h4><p>The <code>if</code> condition within the <code>forEach</code> loop checks whether the value of <code>num</code> is truthy or falsy. Since the first number in the <code>nums</code> array is <code>0</code>, a falsy value, the <code>if</code> statement's code block won't be executed. <code>count</code> only gets incremented for the other 3 numbers in the <code>nums</code> array, <code>1</code>, <code>2</code> and <code>3</code>. Since <code>count</code> gets incremented by <code>1</code> 3 times, the value of <code>count</code> is <code>3</code>.</p><p></p>",
    correct: "C",
  },
  145: {
    titulo: "146. What's the output?",
    codigo:
      "function getFruit(fruits) {\n    console.log(fruits?.[1]?.[1])\n}\n\ngetFruit([['🍊', '🍌'], ['🍍']])\ngetFruit()\ngetFruit([['🍍'], ['🍊', '🍌']])\n",
    option: [
      "A: null, undefined, 🍌",
      "B: [], null, 🍌",
      "C: [], [], 🍌",
      "D: undefined, undefined, 🍌",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-d-22\">Answer: D</h4><p>The <code>?</code> allows us to optionally access deeper nested properties within objects. We're trying to log the item on index <code>1</code> within the subarray that's on index <code>1</code> of the <code>fruits</code> array. If the subarray on index <code>1</code> in the <code>fruits</code> array doesn't exist, it'll simply return <code>undefined</code>. If the subarray on index <code>1</code> in the <code>fruits</code> array exists, but this subarray doesn't have an item on its <code>1</code> index, it'll also return <code>undefined</code>. </p><p>First, we're trying to log the second item in the <code>['🍍']</code> subarray of <code>[['🍊', '🍌'], ['🍍']]</code>. This subarray only contains one item, which means there is no item on index <code>1</code>, and returns <code>undefined</code>.</p><p>Then, we're invoking the <code>getFruits</code> function without passing a value as an argument, which means that <code>fruits</code> has a value of <code>undefined</code> by default. Since we're conditionally chaining the item on index <code>1</code> of<code>fruits</code>, it returns <code>undefined</code> since this item on index <code>1</code> does not exist. </p><p>Lastly, we're trying to log the second item in the <code>['🍊', '🍌']</code> subarray of <code>['🍍'], ['🍊', '🍌']</code>. The item on index <code>1</code> within this subarray is <code>🍌</code>, which gets logged.</p><p></p>",
    correct: "D",
  },
  146: {
    titulo: "147. What's the output?",
    codigo:
      "class Calc {\n    constructor() {\n        this.count = 0 \n    }\n\n    increase() {\n        this.count ++\n    }\n}\n\nconst calc = new Calc()\nnew Calc().increase()\n\nconsole.log(calc.count)\n",
    option: ["A: 0", "B: 1", "C: undefined", "D: ReferenceError"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-38">Answer: A</h4><p>We set the variable <code>calc</code> equal to a new instance of the <code>Calc</code> class. Then, we instantiate a new instance of <code>Calc</code>, and invoke the <code>increase</code> method on this instance. Since the count property is within the constructor of the <code>Calc</code> class, the count property is not shared on the prototype of <code>Calc</code>. This means that the value of count has not been updated for the instance calc points to, count is still <code>0</code>.</p><p></p>',
    correct: "A",
  },
  147: {
    titulo: "148. What's the output?",
    codigo:
      'const user = {\n    email: "e@mail.com",\n    password: "12345"\n}\n\nconst updateUser = ({ email, password }) =&gt; {\n    if (email) {\n        Object.assign(user, { email })\n    }\n\n    if (password) {\n        user.password = password\n    }\n\n    return user\n}\n\nconst updatedUser = updateUser({ email: "new@email.com" })\n\nconsole.log(updatedUser === user)\n',
    option: ["A: false", "B: true", "C: TypeError", "D: ReferenceError"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-37">Answer: B</h4><p>The <code>updateUser</code> function updates the values of the <code>email</code> and <code>password</code> properties on user, if their values are passed to the function, after which the function returns the <code>user</code> object. The returned value of the <code>updateUser</code> function is the <code>user</code> object, which means that the value of updatedUser is a reference to the same <code>user</code> object that <code>user</code> points to. <code>updatedUser === user</code> equals <code>true</code>.</p><p></p>',
    correct: "B",
  },
  148: {
    titulo: "149. What's the output?",
    codigo:
      "const fruit = ['🍌', '🍊', '🍎']\n\nfruit.slice(0, 1)\nfruit.splice(0, 1)\nfruit.unshift('🍇')\n\nconsole.log(fruit)\n",
    option: [
      "A: ['🍌', '🍊', '🍎']",
      "B: ['🍊', '🍎']",
      "C: ['🍇', '🍊', '🍎']",
      "D: ['🍇', '🍌', '🍊', '🍎']",
    ],
    awnser:
      "<summary><b>Answer</b></summary><p></p><h4 id=\"answer-c-48\">Answer: C</h4><p>First, we invoke the <code>slice</code> method on the fruit array. The slice method does not modify the original array, but returns the value that it sliced off the array: the banana emoji.Then, we invoke the <code>splice</code> method on the fruit array. The splice method does modify the original array, which means that the fruit array now consists of <code>['🍊', '🍎']</code>.At last, we invoke the <code>unshift</code> method on the <code>fruit</code> array, which modifies the original array by adding the provided value, ‘🍇’ in this case,  as the first element in the array.  The fruit array now consists of <code>['🍇', '🍊', '🍎']</code>.</p><p></p>",
    correct: "C",
  },
  149: {
    titulo: "150. What's the output?",
    codigo:
      "const animals = {};\nlet dog = { emoji: '🐶' }\nlet cat = { emoji: '🐈' }\n\nanimals[dog] = { ...dog, name: \"Mara\" }\nanimals[cat] = { ...cat, name: \"Sara\" }\n\nconsole.log(animals[dog])\n",
    option: [
      'A: { emoji: "🐶", name: "Mara" }',
      'B: { emoji: "🐈", name: "Sara" }',
      "C: undefined",
      "D: ReferenceError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-38">Answer: B</h4><p>Object keys are converted to strings. </p><p>Since the value of  <code>dog</code> is an object,  <code>animals[dog]</code> actually means that we’re creating a new property called <code>"object Object"</code> equal to the new object. <code>animals["object Object"]</code> is now equal to <code>{ emoji: "🐶", name: "Mara"}</code>.</p><p><code>cat</code> is also an object, which means that <code>animals[cat]</code> actually means that we’re overwriting the value of  <code>animals["object Object"]</code> with the new cat properties. </p><p>Logging <code>animals[dog]</code>, or actually <code>animals["object Object"]</code> since converting the <code>dog</code> object to a string results <code>"object Object"</code>, returns the <code>{ emoji: "🐈", name: "Sara" }</code>.</p><p></p>',
    correct: "B",
  },
  150: {
    titulo: "151. What's the output?",
    codigo:
      'const user = {\n    email: "my@email.com",\n    updateEmail: email =&gt; {\n        this.email = email\n    }\n}\n\nuser.updateEmail("new@email.com")\nconsole.log(user.email)\n',
    option: [
      "A: my@email.com",
      "B: new@email.com",
      "C: undefined",
      "D: ReferenceError",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-a-39">Answer: A</h4><p>The <code>updateEmail</code> function is an arrow function, and is not bound to the <code>user</code> object. This means that the <code>this</code> keyword is not referring to the <code>user</code> object, but refers to  the global scope in this case. The value of <code>email</code> within the <code>user</code> object does not get updated. When logging the value of <code>user.email</code>, the original value of <code>my@email.com</code> gets returned. </p><p></p>',
    correct: "A",
  },
  151: {
    titulo: "152. What's the output?",
    codigo:
      "const promise1 = Promise.resolve('First')\nconst promise2 = Promise.resolve('Second')\nconst promise3 = Promise.reject('Third')\nconst promise4 = Promise.resolve('Fourth')\n\nconst runPromises = async () =&gt; {\n    const res1 = await Promise.all([promise1, promise2])\n    const res2  = await Promise.all([promise3, promise4])\n    return [res1, res2]\n}\n\nrunPromises()\n    .then(res =&gt; console.log(res))\n    .catch(err =&gt; console.log(err))\n",
    option: [
      "A: [['First', 'Second'], ['Fourth']]",
      "B: [['First', 'Second'], ['Third', 'Fourth']]",
      "C: [['First', 'Second']]",
      "D: 'Third'",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-d-23">Answer: D</h4><p>The <code>Promise.all</code> method runs the passed promises in parallel. If one promise fails, the <code>Promise.all</code> method <em>rejects</em> with the value of the rejected promise. In this case, <code>promise3</code> rejected with the value <code>"Third"</code>. We’re catching the rejected value in the chained <code>catch</code> method on the <code>runPromises</code> invocation to catch any errors  within the <code>runPromises</code> function. Only <code>"Third"</code> gets logged, since <code>promise3</code> rejected with this value.</p><p></p>',
    correct: "D",
  },
  152: {
    titulo:
      '153. What should the value of method be to log { name: "Lydia", age: 22 }?',
    codigo:
      'const keys = ["name", "age"]\nconst values = ["Lydia", 22]\n\nconst method = /* ?? */\nObject[method](keys.map((_, i) =&gt; {\n    return [keys[i], values[i]]\n})) // { name: "Lydia", age: 22 }\n',
    option: ["A: entries", "B: values", "C: fromEntries", "D: forEach"],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-49">Answer: C</h4><p>The <code>fromEntries</code> method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value. In this case, we’re mapping over the <code>keys</code> array, which returns an array which first element is the item on the key array on the current index, and the second element is the item of the values array on the current index. </p><p>This creates an array of subarrays containing the correct keys and values, which results in <code>{ name: "Lydia", age: 22 }</code></p><p></p>',
    correct: "C",
  },
  153: {
    titulo: "154. What's the output?",
    codigo:
      'const createMember = ({ email, address = {}}) =&gt; {\n    const validEmail = /.+\\@.+\\..+/.test(email)\n    if (!validEmail) throw new Error("Valid email pls")\n\n    return {\n        email,\n        address: address ? address : null\n    }\n}\n\nconst member = createMember({ email: "my@email.com" })\nconsole.log(member)\n',
    option: [
      'A: { email: "my@email.com", address: null }',
      'B: { email: "my@email.com" }',
      'C: { email: "my@email.com", address: {} }',
      'D: { email: "my@email.com", address: undefined }',
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-c-50">Answer: C</h4><p>The default value of <code>address</code> is an empty object <code>{}</code>. When we set the variable <code>member</code> equal to the object returned by the <code>createMember</code> function, we didn\'t pass a value for address, which means that the value of address is the default empty object <code>{}</code>. An empty object is a truthy value, which means that the condition of the <code>address ? address : null</code> conditional returns <code>true</code>. The value of address is the empty object <code>{}</code>.</p><p></p>',
    correct: "C",
  },
  154: {
    titulo: "155. What's the output?",
    codigo:
      'let randomValue = { name: "Lydia" }\nrandomValue = 23\n\nif (!typeof randomValue === "string") {\n    console.log("It\'s not a string!")\n} else {\n    console.log("Yay it\'s a string!")\n}\n',
    option: [
      "A: It's not a string!",
      "B: Yay it's a string!",
      "C: TypeError",
      "D: undefined",
    ],
    awnser:
      '<summary><b>Answer</b></summary><p></p><h4 id="answer-b-39">Answer: B</h4><p>The condition within the <code>if</code> statement checks whether the value of <code>!typeof randomValue</code> is equal to <code>"string"</code>. The <code>!</code> operator converts the value to a boolean value. If the value is truthy, the returned value will be <code>false</code>, if the value is falsy, the returned value will be <code>true</code>. In this case, the returned value of <code>typeof randomValue</code> is the truthy value <code>"number"</code>, meaning that the value of <code>!typeof randomValue</code> is the boolean value <code>false</code>.</p><p><code>!typeof randomValue === "string"</code> always returns false, since we\'re actually checking <code>false === "string"</code>. Since the condition returned <code>false</code>, the code block of the <code>else</code> statement gets run, and <code>Yay it\'s a string!</code> gets logged.</p><p></p>',
    correct: "B",
  },
};
