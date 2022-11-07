---
id: chapter-005-id
title: Chapter 5
---

## String

### String is immutable!

````java
String one = "1";
String two = one.concat("2");
two.concat("3");
System.out.println(two); 
// Outputs "12"
````

### String Methods

Return Value    | Method Name      | param1         | param2        |
:---:           | :---:            | :---:          | :---:         |
int             | indexOf          | int ch	        | -             |
int             | indexOf          | String str	    | -             |
int             | indexOf          | int ch	        | int fromIndex |
int             | indexOf          | String str	    | int fromIndex |
String          | substring        | int beginIndex | -             |
String          | substring        | int beginIndex | int endIndex  |
boolean         | equalsIgnoreCase | String str     | -             |
boolean         | startsWith       | String prefix  | -             |
boolean         | endsWith         | String suffix  | -             |
String          | strip            | -              | -             |
String          | stripLeading     | -              | -             |
String          | stripTrailing    | -              | -             |
String          | trim             | -              | -             |
String          | intern           | -              | -             |

#### indexOf

`char` values sended as `int`. You can set begining searching index with `int fromIndex`.

````java
String one = "ABCDABCDEFGH";
System.out.println(one.indexOf("A", 3)); 
// Output is "4"
System.out.println(one.indexOf("CD")); 
// Output is "2"
System.out.println(one.indexOf("CD", 3)); 
// Output is "6"
System.out.println(one.indexOf("CD", 7)); 
// Output is "-1"
````

#### substring

````java
String one = "012345";
System.out.println(one.substring(3, 4)); 
// Output is "3"
System.out.println(one.substring(3, 3)); 
// Output is ""
System.out.println(one.substring(3, 2)); 
// Throws Exception
System.out.println(one.substring(3, 6)); 
// Output is "345"
System.out.println(one.substring(3, 7)); 
// Throws Exception
````

#### equalsIgnoreCase

````java
System.out.println("abc".equals("ABC"));  
// Output is "false"
System.out.println("abc".equalsIgnoreCase("ABC"));  
// Output is "true"
````

#### startsWith and endWith

````java
System.out.println("abc".startsWith("a")); 
// Output is "true"
System.out.println("abc".endsWith("c")); 
// Output is "true"
````

#### intern

Adds string to `String Pool`.

#### strip

Returns a string whose value is this string, with all leading and trailing white space removed.

#### stripLeading

Returns a string whose value is this string, with all leading white space removed.

#### stripTrailing

Returns a string whose value is this string, with all trailing white space removed.

#### trim

Returns a string whose value is this string, with all leading and trailing space removed, where space is defined as any character whose codepoint is less than or equal to 'U+0020' (the space character).

## StringBuilder

### StringBuilder is mutable

````java
StringBuilder one = new StringBuilder("1");
one.append("2");
StringBuilder two = one.append("3");
System.out.println(one); 
// Outputs "123"
System.out.println(one == two); 
// Outputs "true"
````

### StringBuilder Methods

These methods are just work like `String`:
- charAt
- indexOf
- length
- substring

#### append

Adds given String to StringBuilder's state.

#### insert

Adds given `String` to StringBuilder's state.

````java
StringBuilder insert(int offset, String str)
```` 

````java
StringBuilder one = new StringBuilder("012345");
one.insert(6, '-');
one.insert(0, '-');
System.out.println(one.toString()); 
// Output is "-012345-"
````

#### delete

````java
StringBuilder delete(int startIndex, int endIndex)
```` 

````java
StringBuilder one = new StringBuilder("012345");
one.delete(1, 3);
System.out.println(one.toString()); 
// Output is "0345"
one.delete(1, 10000);
System.out.println(one.toString()); 
// Output is "0". Delete does not throw exception when endIndex passes lenght.
````

#### deleteCharAt

````java
StringBuilder deleteCharAt(int index)
````

````java
StringBuilder one = new StringBuilder("012345");
one.deleteCharAt(5);
System.out.println(one.toString()); 
// Output is "01234"
one.deleteCharAt(5);
// Throws Exception
````

#### replace 

:::note
Works different than `String`.
:::

````java
StringBuilder replace(int startIndex, int endIndex, String newString)
````

````java
StringBuilder one = new StringBuilder("012345");
one.replace(1, 6, "12");
System.out.println(one.toString()); 
// Output is "012"
one.replace(1, 10000, "");
System.out.println(one.toString());
// Output is "0"
````

#### Caution
:::caution
	StringBuilder does not implements `equals`. 
:::

### String Pool

````java
String one = "one" + "1";
String two = "o" + "n" + "e" + "1";
String three = "o" + "n" + "e" + new String("1");
System.out.println(one == two);
// Output is "true"
System.out.println(one == three);
// Output is "false"
System.out.println(one == three.intern());
// Output is "true"
````

## Array

### Decleration

````java
int[] one;
int [] two;
int []three;
int four[];
int five [];

// All of these are valid and behavior is same.
````

### Multiple Decleration

````java
int[] one, two, three[]; 
// one  : int[] 
// two  : int[]
// three: int[][] !!!!!!
````
### Caution

:::caution
`int` is primive. `int[]` is object. 
:::

:::note
````java
String[] value = {"1", "2," "3", "4", "5"};
System.out.println(value);
// Output starts with "[Ljava.lang.String"

// import java.util.Arrays;
System.out.println(Arrays.toString(value));
// Output is ["1", "2", "3", "4", "5"]
````
:::

:::caution

````java
String[] value = {"1", "2,", "3", "4", "5"};
Object[] objects = value;
objects[0] = new StringBuilder("aa");
// Throws exception. (Exception in thread "main" java.lang.ArrayStoreException: java.lang.StringBuilder)
````
:::

### Sort

````java
int[] numbers = { 60, 9, 1 };

// import java.util.Arrays;
Arrays.sort(numbers);
String output = Arrays.toString(numbers);
System.out.println(output);
// Output is [1, 9, 60]
````

:::caution
String sorting rule is "Numbers sort before letters, uppercase sorts before lowercase and lowercase sort before `null`".
:::

````java
String[] values = {"9", "10", "1"};

// import java.util.Arrays;
Arrays.sort(values);
String output = Arrays.toString(values);
System.out.println(output);
// Output is [1, 10, 9]!!! 
````

### Search

````java
int[] values = {2, 7, 9};

// import java.util.Arrays;
int index1 = Arrays.binarySearch(values, 2);
System.out.println(index1);
// Output is "0"

// import java.util.Arrays;
int index2 = Arrays.binarySearch(values, 9);
System.out.println(index2);
// Output is "2"
````

:::caution
If searched element not on the list, then returns "minus of element should be in list" minus "one".
````java
// import java.util.Arrays;

int[] values = {2, 7, 9};
int index1 = Arrays.binarySearch(values, 0);
System.out.println(index1);
// Output is "-1". -(0)-1
int index2 = Arrays.binarySearch(values, 5);
System.out.println(index2);
// Output is "-2". -(1)-1
int index3 = Arrays.binarySearch(values, 36);
System.out.println(index3);
// Output is "-4". -(3)-1
````
:::

:::caution
If array is not sorted then `Arrays.binarySearch` won't work right!
:::

### Compare

#### compare

- If first element that differs is larger in `first array` , return `positive number`. 
````java
// import java.util.Arrays;

System.out.println(Arrays.compare(
        new int[]{5, 7, 9},
        new int[]{2, 7, 9, 0, 2})
);
// Output is "1"
````

- If same length and same values, returns `0`.
````java
// import java.util.Arrays;
System.out.println(Arrays.compare(
        new int[]{2, 7, 9},
        new int[]{2, 7, 9})
);
// Output is "0"
````

- If exist all values equal but first array size bigger, returns `positive number`.
````java
// import java.util.Arrays;

System.out.println(Arrays.compare(
        new int[]{2, 7, 9, 0},
        new int[]{2, 7, 9})
);
// Output is "1"
````

:::caution
````java
// import java.util.Arrays;

System.out.println(Arrays.compare(
        new int[] {1},
        new String[] {"a"})
);
// Does not compile!!!
````
:::

#### mismatch

- If two array is equal, returns `-1`.
````java
// import java.util.Arrays;

System.out.println(Arrays.mismatch(
        new int[]{2, 7, 9},
        new int[]{2, 7, 9})
);
// Output is "-1"
````

- Otherwise returns first differ index.
````java
// import java.util.Arrays;

System.out.println(Arrays.mismatch(
        new int[]{6, 7},
        new int[]{2, 7, 9})
);
// Output is "0"

System.out.println(Arrays.mismatch(
        new int[]{2, 7},
        new int[]{2, 7, 9})
);
// Output is "2"
````

### Asymmetric Multidimention Array

````java
// import java.util.Arrays;

int[][] values = {
	{1},
	{1, 2}
};
System.out.println(Arrays.toString(values));
//Output is "[[I@5674cd4d, [I@63961c42]"
System.out.println(Arrays.deepToString(values));
//Output is "[[1], [1, 2]]"

int [][] values2 = new int[3][];
values2[0] = new int[2];
values2[1] = new int[3];
System.out.println(Arrays.deepToString(values2));
//Output is "[[0, 0], [0, 0, 0], null]"
````

## ArrayList

### Constructor with Number

````java
// import java.util.List;
// import import java.util.ArrayList;
List<String> value = new ArrayList<>(1);
System.out.println(value.size() + ", " + value);
// Output is "0, []"
value.add("AAAA");
value.add("BBBB");
System.out.println(value.size() + ", " + value);
// Output is "2, [AAAA, BBBB]"
````

### add

````java
// import java.util.List;
// import import java.util.ArrayList;
List<String> value = new ArrayList<>(1);
value.add("AAAA");
value.add(0, "BBBB");
value.add(1, "CCCC");
System.out.println(value.size() + ", " + value);
// Output is "3, [BBBB, CCCC, AAAA]"
````

### remove

````java
// import java.util.List;
// import import java.util.ArrayList;
List<String> value = new ArrayList<>(1);
value.add("AAAA");
value.add(0, "BBBB");
value.add(1, "CCCC");
System.out.println(value.size() + ", " + value);
// Output is "3, [BBBB, CCCC, AAAA]"
value.remove(2);
System.out.println(value.size() + ", " + value);
// Output is "2, [BBBB, CCCC]"
value.remove("BBBB");
System.out.println(value.size() + ", " + value);
// Output is "1, [CCCC]"
value.remove("DDDDDD");
// Does don't anything!
System.out.println(value.size() + ", " + value);
// Output is "1, [CCCC]"
value.remove(10);
// Throws "Exception in thread "main" java.lang.IndexOutOfBoundsException: Index 10 out of bounds for length 1"
````

### contains

````java
boolean contains(Object object)
````

````java
// import java.util.List;
// import import java.util.ArrayList;
List<String> value = new ArrayList<>(1);
value.add("AAAA");
value.add(0, "BBBB");
value.add(1, "CCCC");
System.out.println(value.contains("AAAA"));
// Output is "true"
````

### Equals

:::caution
ArrayList override `equals`.
:::

````java
// import java.util.List;
// import import java.util.ArrayList;
List<String> value = new ArrayList<>(1);
value.add("AAAA");
var value2 = new ArrayList<String>();
System.out.println(value.equals(value2));
// Output is "false"
value2.add("AAAA");
System.out.println(value.equals(value2));
// Output is "true"
````

### Other methods

````java
E set(int index, E newElement)
````

````java
void clear()
````

### Convert List To Array

````java
// import java.util.List;
// import import java.util.ArrayList;
List<String> value = new ArrayList<>(1);
value.add("AAAA");
Object[] objects = value.toArray();
String[] strings = value.toArray(new String[0]);
value.add("BBBB");
System.out.println(value);
// Output is "[AAAA, BBBB]"
System.out.println(java.util.Arrays.toString(strings));
// Output is "[AAAA]"
````

:::caution
If sended array size enought for List size then toArray fills that array.

````java
// import java.util.List;
// import import java.util.ArrayList;
List<String> value = new ArrayList<>(1);
value.add("AAAA");
String[] sentArray = new String[3];
String[] result = value.toArray(sentArray);
System.out.println(sentArray == result);
// Output is "true"
System.out.println(java.util.Arrays.toString(sentArray));
// Output is "[AAAA, null, null]"
````
:::

````java
var array = new String[] {"1", "2", "3"};
List<String> list = java.util.Arrays.asList(array);
System.out.println(list);
// Output is "[1, 2, 3]"
list.set(0, "0");
System.out.println(list);
// Output is "[0, 2, 3]"
System.out.println(java.util.Arrays.toString(array));
// Output is "[0, 2, 3]". array is changed!!!
list.remove(0);
// Throws "Exception in thread "main" java.lang.UnsupportedOperationException"
````

````java
var array = new String[] {"1", "2", "3"};
List<String> list = List.of(array);
System.out.println(list);
// Output is "[1, 2, 3]"
list.set(0, "0");
// Throws "Exception in thread "main" java.lang.UnsupportedOperationException"
````

### Sort

````java
// import java.util.List;
// import import java.util.ArrayList;
List<String> value = new ArrayList<>(3);
value.add("BBBB");
value.add("CCCC");
value.add("AAAA");
System.out.println(value);
// Output is "[BBBB, CCCC, AAAA]"
java.util.Collections.sort(value);
System.out.println(value);
// Output is "[AAAA, BBBB, CCCC]"
````

## Math

````java
double min(double a, double b)
float min(float a, float b)
int min(int a, int b)
long min(long a, long b)
long round(double num)
int round(float num)
double pow(double number, double exponent)
double random()
````

## Notes

:::warning
Memorize `TABLE 5.6 Array and list conversions`.
:::

:::warning
````java
new String("aaa") == new StringBuilder("aaa");
// Does not Compile!
````
:::

:::warning
````java
var value = "aaa".equals(new StringBuilder("aaa"));
System.out.println(value);
// Output is "false"
````
:::

:::warning
````java
new String("aaaa").length
// Does not compile! .length()
````
:::

:::warning
````java
String a = "AAAA";
a += "BBB";
System.out.println(a);
// Output is "AAAA". Strings are IMMUTABLE!
````
:::

:::warning
`delete(int, int)` and `insert(int, String)` are methods of `StringBuilder`.

````java
var builder = new StringBuilder("012345");
builder.delete(1, 4);
builder.insert(1, "AA");
System.out.println(builder);
// Output is "0AA45"
builder.deleteCharAt(1);
System.out.println(builder);
// Output is "0A45"
````
:::

:::warning
You can create array with zero element size.

````java
String[] value = new String[0];
// This is legal!
````
:::

:::warning
`parseInt` returns `int`.

````java
int parseInt(String s) throws NumberFormatException
````
:::
`valueOf` returns `Integer`.

:::warning
````java
Integer valueOf(String s) throws NumberFormatException
````
:::