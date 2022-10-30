---
id: chapter-004-id
title: Chapter 4
---

## If

### Unreachable Statement

````java

if(value < 15) {
	System.out.println("AAAA");
} else if(value < 11) { // Compiles but this statement is unreacable!
	System.out.println("BBBB");
} else {
	System.out.println("CCCC");
}

```` 

## Switch

### Case Bitwise Opearation

````java

int value = 3;
switch (value) {
    case 1:
        System.out.println("1111");
    case 1 | 2:
        System.out.println("2222"); // 1 | 2 operations is 3 so it will print 2222!
}

````

### Switch Data Types
- byte and Byte
- short and Short
- char and Character
- int and Integer
- Enum
- String (Java 10)
- var (If resolved type is before elements)

### Default 

````java

int value = 3;
switch (value) {
	default:
		System.out.println("0000");
		break;
    case 1:
        System.out.println("1111");
        break;
    case 1 + 2: // equals to case 3
        System.out.println("2222"); // It prints "2222"
        break;
}

````

````java

int value = 10;
switch (value) {
	default:
		System.out.println("0000"); // It prints "0000"
		break;
    case 1:
        System.out.println("1111");
        break;
    case 1 + 2: // equals to case 3
        System.out.println("2222"); 
        break;
}

````

### Case

Case must be enum or final constant value.

````java

int value = 10;
final int value2 = 20;
final int value3 = getRandomInt();
switch (value) {
	default:
		System.out.println("0000"); // It prints "0000"
    case value2:  // Compiles!!
        System.out.println("1111");
    case value3:  // Does not compiles!!! 
        System.out.println("2222"); 
}

````

:::note
Final constant value means variable's value known in `compile-time`.
:::

### Promotion

````java

short a = 5;
final int foo = 10;
final int bar = 10000000;

switch(a) {
	case foo: // COMPILE
	case bar: // DOES NOT COMPILE! 
}
````

## For

### Multiple Statement

````java
var x = 0;
for (int k = 0, l = 20; k < 10 && x < 5; k++, x = x + 1) {
	// Compiles
}
````

### Infinite Loop

````java
for(;;) {

}
````

##  ForEach

````java
var value = new String[]{"A", "A", "A"};
for(String a: value) {
	System.out.println(a); // Output is "A\nA\nA\n"
}
````

:::caution
The right side of `ForEach` must be:
- Java Array
- Implements `java.lang.Iterable`
:::

## Do-While

:::caution
Do-While first runs `do block` and then checks `while statement`. You may fail when `nested loop` code blocks.
:::

## Optional Labels

You can give optional name to any code block. 

````java

int value = 10;
BOOLEAN_CHECK: if (value < 10)  // Compiles :)
BOOLEAN_CHECK_BODY: { // Compiles :) :) :) :)
    value = -1;
}

````

````java
    public static void main(String[] args) {
        System.out.println("public static void main prints: ");
        FIRST_LOOP: for (int k=0; k<5; k++) {
            SECOND_LOOP: for (int j=0; j<5; j++) {
                System.out.println(k + ", " + j);
                if (k == 0) {
                    System.out.println("continue SECOND_LOOP");
                    break SECOND_LOOP;
                }
                if (k == 1) {
                    System.out.println("break FIRST_LOOP");
                    break FIRST_LOOP;
                }
            }
        }
    }
````

````console
public static void main prints: 
0, 0
continue SECOND_LOOP
1, 0
break FIRST_LOOP
````

## Unreachable Statement

````java
if (value) {
    return;
    System.out.println("AAAA"); // DOES NOT COMPILE BECAUSE IT IS UNREACABLE!
}
````

## Focus!

### Nested If Statement without block

````java
        if (true)
            if (false)
                System.out.println("Doesn't print this one");
            else
                System.out.println("Prints this one");
        else
            System.out.println("Doesn't print this one");
````

### Warning

:::warning
Not every `Java Collection` class implements ` java.lang.Iterable`.
:::

### Switch Case Condition

Case must be `compiled-time constant`. So `efective final` can't be in case statement.

````java
int foo = 10;
final int bar = 20;
switch(value) {
    case foo: // DOES NOT COMPILE!
    case bar: // COMPILE
}
````

### Multiple Initilize

````java
final int foo = 5, bar = 10;
bar = 20; // DOES NOT COMPILE! bar is final int!
````

### Warning

:::warning
`for (int k=0; k<value.size(); k++)` and `for (int k=0; k<value.size(); ++k)` same thing. Behavior don't change!.
:::

### Assignment Operations Return Value in `while`

````java
var value = 1;
while((value = value + 1) < 5) {
    System.out.print(value);
} // Output is "234"
````

### While Statement can't Reach While Body's value

````java
do {
    int value = 10;
} while (value > 20); // DOES NOT COMPILE!
````

### Optional Label can't use outside of declerated label block

````java
var value = true;
ONE: for(;;)
    if (value) {
        break TWO; // DOES NOT COMPILE! BECAUSE OF break TWO!!
    }
    TWO: for(;;) {

    }
````

### Assignment Operations Return Value in `if`

````java
var value = false;
if (value = true) {
    // Enters this statement!
} 
````

:::warning
`if (value = true)` works like `if (true)`.
:::

