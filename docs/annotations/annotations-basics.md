---
id: annotations-basics-page-id
---

# Annotations Basics

## Long for short

`Annotation`s are all about metadata. You don't need to get all these metadata as `hard coded`. `Annotation`s can think like `Interface`. We are using `Annotaiton`s over `Interface` because `Annotation`s can apply for `fields`, `methods`, `expressions` and `annotations`.

:::note

Some annotations (like `@NonNull`) will give information only to developer or other tools.

:::

## Using Annotations

````java

@RestController
@RequestMapping
public class BedirhanController {
    @RequestMapping("/BedirhanController")
    public String get(){
        return "334562";
    }
}

````

These is no need for parantheses for `marker annotations`. `@RestController` and `@RRestController()` are same. You can apply different annotations at the same time.

## Creating Annotations

### Basic Annotations

````java

public @interface Foo {}

````

### Annotations with param

````java

public @interface Foo {
	int bar();
	String far() default "AAA";
}

````

We set `bar` value as required and `far` value to optional. If you won't set required param, it will not compiled. You can use annotation like `@Foo(bar = 10, far = "BBBB")`.

:::note

If created abstract method name is `value()`, then you don't need to specify the value name. `@Foo(value = "10")` and `@Foo("10")` are same but `@Foo("10", bar = 20)` won't compile.

::::

## Annotations Supported Types

* Primitive Types
* Iterative String
* Enum
* Another Annotations
* And array type of before elements

## Annotations with constants

````java

public @interface Foo {
	int bar();
	String far() default "AAA";
	String finalWord = "FinalWord";
	public static final BUILDING = "Building";
}

````

## Annotations with array

````java

public @interface Foo {
	int[] bar();
}

````

You can use annotation like `@Foo(bar = {1, 2, 3})`, `@Foo(bar = {1})`, `@Foo(bar = 1)` or `@Foo(bar = {})`.

:::note

````java

public @interface Foo {
	int[] value();
}

// @Foo({100}) VALID
// @Foo(1) VALID

````

:::

## Repeatable

````java

public @interface Foos {
	Foo[] value();
}

````

````java

@Repeatable(Foos.class)
public @interface Foo {
	int[] value();
}

````

You can call `@Foo` annotation for multiple times for the target.