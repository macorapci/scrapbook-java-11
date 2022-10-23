---
id: chapter-002-id
title: Chapter 2
---

# Chapter 2 

## Instance Initializer Block

````java

public class Foo{
	{ // Instance Initializer Block
		System.out.println("AAAA"); 
	} 
}

````

````java

public class Foo{
	{ // Instance Initializer Block
		System.out.println(value); // Does not compile because uses value! 
	}

	public final String value = "AAAAA";
	
	{ // Instance Initializer Block
		System.out.println(value); // Compile!
	} 
}

````

## Char And Short

````java

short a = 32_680 // DOES NOT COMPILE!
char b = (short)-1 // DOES NOT COMPILE!

````

## Literals

````java

long a = 3123456789;  // DOES NOT COMPILE
long b = 3123456789L;  // DOES COMPILE

````

````java

double notAtStart = _1000.00;          // DOES NOT COMPILE
double notAtEnd = 1000.00_;            // DOES NOT COMPILE
double notByDecimal = 1000_.00;        // DOES NOT COMPILE
double annoyingButLegal = 1_00_0.0_0;  // Compiles
double reallyUgly = 1__________2;      // Compiles

````

## Identifiers Rule
- Must begin with `a letter`, `$` or `_`
- Can include `a number` but can't start with it
- `_` is not allowed identier name

## Declare Multiple Variable

````java

String a, double b; // DOES NOT COMPILE
int a, int b; // DOES NOT COMPILE
var a = 2, b = 3;  // DOES NOT COMPILE

````

## Local Variable

````java

{
	int a;
	int b;

	if (this.booleanValue) {
		a = 10;
		b = 20;
	} else {
		a = 10;
	}

	System.out.println(a);
	System.out.println(b); // DOES NOT COMPILE!
}

````

````java

public boolean foo(boolean var1) {}

{
	boolean a;
	foo(a); // DOES NOT COMPILE!
}

````

## Var Keyword

````java

class A {
	var foo = "aaa"; // DOES NOT COMPILE

	public void bar() {
		var bar = "bbb"; // COMPILE!
	}
}

````

````java

var foo = null; // DOES NOT COMPILE!
var bar = (String)null; // COMPILE!

````

````java

public class var { // DOES NOT COMPILE! var can't be referance type name!
	public static void main(String... args) {
		var var = "var"; // COMPILE!
	}
}

````

## Nested Scope

````java

public void foo() {
	int value;

	{
		value = 10; // COMPILE
		int bar = 20; // COMPILE
	}

	bar = 30; // DOES NOT COMPILE
}

````

## VARIABLE NAMES

````java

public class Foo {
	static String aaaa = "AAAAA"; // Class Variable 
	String bbbb = "BBBB"; // Intance variable
}

````

### Class Variable is static variable of class.
### Intance variable is variable of class.
### Method variable act like Local Variable.

## GC request
You can call gc with `System.gc()` but GC can igrone your request :) :)

## Referance
All referance have same size!

## Focus!

### Declera float
````java

float temp = 10.0; // DOES NOT COMPILE!
float temp2 = 10.0f; // COMPILE!

````

### GC 
````java

public class Foo {
	private Foo foo;

	bar(Foo foo) {
		this.foo = foo;
	}

	public static void main(String... args) {
		var one = new Foo(); // *1
		var two = new Foo(); // *2

		one.bar(two);
		two = null; // GC CAN NOT collect *2 because *2 object accessable in one.foo
		one = null; // GC can collect *1 (one) and *2 (one.foo) object 
	}
}

````