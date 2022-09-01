---
id: import-naming-conflict-page-id
title: Import Naming Conflict
---

# Import Naming Conflict

## Both without wildcard

````java
import java.util.Date;
import java.sql.Date;
````

If our java file has two import like this. When we call `Date`, java doesn't know which `Date` we are talking about.

## One wildcard, other one not

````java
import java.util.*;
import java.sql.Date;
````

If our java file has two import like this. When we call `Date`, java goes with `java.sql.Date`.

## Both with wildcard

````java
import java.util.*;
import java.sql.*;
````

If our java file has two import like this. When we call `Date`, java doesn't know which `Date` we are talking about.