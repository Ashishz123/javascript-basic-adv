<script>
    /*MIMI(multipurpose internet mail extensions):-mime type is used for using  diffferent type of extension used like jpg,jpeg,png,gif,txt,html,css,js,etc.*/
    /* legacy of the browser in js:-the legacy of the browser in related how to brower support in js .
    the legacy has influened how to maintain and write the code today.*/
    /*What are the issue with js as language :-
    1)NO type checking:-js doesn't support type checking. it is use the VAR,CONST & LET. but dont why are you using this data type.
    2)concanate  string problem:-when you have cocante different type of data type in js. the both response have given different type:
    ex:-1.var a =10;
    var b=20;
    console.log(a+b); //20
    var c =10;
    var d="20";
    console.log(c+d); //1010;
    Q:-without oop concept what is the problem face in js ?
    Ans:-1.Code Reusability:-if you have to write the same code again and again in same project. the problem face in js.
    2.Difficult to maintain:-if you have to maintain the code in same project. the problem face in js.
    3.no data encapsulation:-if You have higher chances to unintended data modification. the problem face in js.
    4.difficult to Real world Entities: harder to represent the relatinship between real world entities.
    *ex (with loop)
    // User 1
let user1Name = "Alice";
let user1Email = "alice@example.com";

function showUser1Details() {
  console.log("Name:", user1Name);
  console.log("Email:", user1Email);
}

// User 2
let user2Name = "Bob";
let user2Email = "bob@example.com";

function showUser2Details() {
  console.log("Name:", user2Name);
  console.log("Email:", user2Email);
}

showUser1Details();
showUser2Details();

ex:-without loop
// User 1
let user1Name = "Alice";
let user1Email = "alice@example.com";

function showUser1Details() {
  console.log("Name:", user1Name);
  console.log("Email:", user1Email);
}

// User 2
let user2Name = "Bob";
let user2Email = "bob@example.com";

function showUser2Details() {
  console.log("Name:", user2Name);
  console.log("Email:", user2Email);
}

showUser1Details();
showUser2Details();

Ques:-Java is Strongly type or not?
Ans:-Java is not strongly type.it is loosely(dynamically typed) type.you cannot mix incompatible types without explicit type conversion.
You don’t need to declare variable types.
Variables can change types at runtime.
ex:-
ex:1 give type console.error
let age: number = 25;
let name: string = "Alice";
let result = age + name; // Error: Cannot add 'number' and 'string'
ex:2
let age = 25;
let name = "Alice";
let result = age + name; // Result: 25Alice
*/
</script>