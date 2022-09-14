---
id: annotations-limiting-page-id
---

# Annotations Limiting

## Limitting Target

You can limit annotation's access with [Target](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/annotation/Target.html). [Target](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/annotation/Target.html)'s param name is `value` (for shorthand setting :) ) and param's type is `[Element Type](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/annotation/ElementType.html)[]`.

 ````java

@Target(ElementType.CONSTRUCTOR)
public @interface Foo {
	int[] value();
}

 ````

Now `@Foo` annotation can use only constructor.

## Limitting File

You can limit action's of compailer to annotation. You can use [Retention](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/annotation/Retention.html) and [RetentionPolicy](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/annotation/RetentionPolicy.html).