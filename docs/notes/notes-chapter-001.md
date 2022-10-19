---
id: chapter-001-id
title: Chapter 1
---

# Chapter 1

## JDK includes
* javac
* jar
* javadoc
* jlink

## Import
* Java class imports `java.lang.*` by default. Java class no need imports for same package.
* You can import only one wildcard. Wildcard search for only files, not for folders.
* You can't import same fully package. `import a.b.c.Main; import d.e.f.Main;` same time. You can use `import a.b.c.Main; import d.e.f.*;`, java will choose `a.b.c.Main` when u using `Main`. You can check the example code for using same class name in same class.

:::Warning
Check for import! Don't forget!
:::

````java

import a.b.c.Main;

public class Foo{
	Main main;
	d.e.f.Main main2;
}

````

## Javac Args

### javac: -d
You can collect target files. Target folder is `classes` in `javac -d classes a/A.java b/B.java`. Output is `./classes/a/A.class` and `./classes/b/B.class`.

### java and javac: -cp, -classpath, --class-path
Location of classes needed to compile the program.
- `java -cp classes b.B`
- `java -cp ".:/d/e:/f/g.jar" a.b.c.Main`. You can import jar file with this arg.

### jar: -cvf, --create --verbose --file
- -c = --create
- -v = --verbose
- -f = --file

### jar: -C
Directory containing files for create JAR
