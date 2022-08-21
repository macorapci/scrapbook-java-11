---
sidebar_position: 1
---

# Compile Java

## Basic Run Command

You can compile java with 2 ways:
- `javac` + `java`
- `java` 

If your source is single-file, you can run with 

````console
$ java Main.java
````

Otherwise you have to use `javac` + `java` combination.

````console
$ javac Main.java
$ java Main
````

## Run Multiple Java Files

Lets assume we have two files in diffrent package, you have to run both and `Main.java` has `public static void main(String... args)` in it. 

````console
$ javac packageone/Main.java packagetwo/Main2.java
````

After this command you have to see `packageone/Main.class` and `packagetwo/Main2.class` files.

You can also compile with wildcards with this:

````console
$ javac packageone/*.java packagetwo/*.java
````

After compiled files, you can run java files like this:

````console
$ java packageone.Main
````

### Change Target Folder

You can do it with `-d` param. 

````console
$ javac -d thisismytargetfolder packageone/Main.java packagetwo/Main2.java
````

if we run this command then `Main.class` will be in `./thisismytargetfolder/packageone/Main.class`.

### Change Classpath

You can do it with `-cp`, `-classpath` and, `--class-path` params. 

````console
$ java -cp thisismytargetfolder packageone.Main
````

### Compile with Jar Files

You can use `.jar` file instead of `.class` file. You can think `.jar` file is `.zip` format for `.class` files. 

````console
$ java -cp "/home/myjars/*" packageone.Main
````

:::caution

If /home/myjars/foo/bar.jar won't load with upper command.

:::

## Create A JAR File

````console
$ jar -cvf myNewJarFile.jar .
````

````console
$ jar --create --verbose --file myNewJarFile.jar .
````


This 2 command do the same thing.

| Short             | Long                 | Description           |
| :---              | :----:               | :---                  |
| -c                | --create             | Create New Jar File   |
| -v                | --verbose            | Print debug           |
| -f \<filename\>   | --file \<filename\>  | Jar filename          |
| -C \<dir\>        |                      | Jar out dir           |


:::note

`-C`'s default value is `./`.

:::