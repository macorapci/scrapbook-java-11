---
id: chapter-003-id
title: Chapter 3
---

## Number Assingment

````java
float one = 2.1; // Does not compile!
float two = 2.1f; // Compile!
float three = 2f; // Compile!
int four = 3f; // Does not Compile!
````

:::note

`byte`, `short`, and `char` promote to int. 

````java
short a = 1;
short b = 2;
var value = a + b; // value type is equal to int!
```` 
:::

````java
long a = 3;
int b = 4;
a = a * b; // Compile!
b = a * b; // Does not compile!
b *= a;    // Compie!
````

::::note
Compound assignment operations will cast type automaticly.
::::

### Assignment Operations Return Value

````java
long a = 5;
long b = (a = 3);
System.out.println(a); // 3
System.out.println(b); // 3
````

````java
boolean value = false;
if (value = true) {
	System.out.println("It will print this!");
}
// Output is "It will print this!"
````

## Compairing Values

:::caution
Java promotes values to upper. `5 == 5.0` will return `true`.
:::

## instanceof

````java
public static void foo(Number foo) {
	if (foo instanceof String) { // Does not compile. Because Number and String incompatible!

	}
} 
````

:::note
`null` value always return false to instanceof operant.

````java
	    String a = null;
        if (a instanceof String) { // Returns false!
            System.out.println("AAAAAA");
        }
````
:::

````java
System.out.println(null instanceof null); // Does not compile!
````

## Logical Operator

### Short-ciruit

& -> &&
| -> ||

### Exclusive Or
`^` means `exclusive or`. 

val1  | val2  | val1^val2 |
:---: | :---: | :---:     |
true  | true  | false     |
false | false | false     |
true  | false | true      |
false | true  | true      |

### Ternary Operator

````java
System.out.println(boolValue ? 5 : "10"); // Compile!
````

## Focus!

### Assignment 

````java
int a = 5;
long b = a; // Compile!
double c = a; // Compile!
````

````java
int a = 5;
a = a++; // Compiles!
b = a++;
System.out.println(a + ", " + b); // Output: 7, 6
````

### Order of operator

| Operator                        | Symbols and examples                               | 
| :---:                           | :---:                                              |
| Post-unary operators            | expression++, expression--                         |
| Pre-unary operators             | ++expression, --expression                         |
| Other unary operators           | -, !, ~, +, (type)                                 |
| Multiplication/division/modulus | *, /, %                                            |
| Addition/subtraction            | +, -                                               |
| Shift operators                 | <<, >>, >>>                                        |
| Relational operators            | <, >, <=, >=, instanceof                           |
| Equal to/not equal              | ==, !=                                             |
| Logical operators               | &, ^, \|                                           |
| Short-circuit logical operators | &&, \|\|                                           |
| Ternary operators               | boolean expression ? expression1 : expression2     |
| Assignment operators            | =, +=, -=, *=, /=, %=, &=, ^=, \|=, <<=, >>=, >>>= |