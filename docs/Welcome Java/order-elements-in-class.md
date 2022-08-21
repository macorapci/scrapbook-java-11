---
sidebar_position: 2
---

# Order Elements In Class

## Package Declaration

If package declaration is exist it has to be in top of class file. It isn't required for all java classes.

## Import Declaration

It has to be after the package declaration (if exist). It isn't required for all java classes.

## Public Class Declaration

It has to be after the import declaration (if exist).

## Example 

````java
package my.dir;

import java.util.*;

public class MyClass {
	public String one;

	public void two() {

	}

	public String three() {
		return null;
	}

	public String four;

	public String five() {
		return null;
	}
}
````

:::note

You can have multiple class in one `.java` file. One public class name should match with `.java` file extention.

:::