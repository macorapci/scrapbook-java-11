---
sidebar_position: 1
---

# Basic Database Notes

Database required for storing same values. When Java app close, all datas will gone. For prevent this, we can use database.

## Operations

`CRUD` is basic database operations:
- `C`reate, adds new row to the table, **INSERT**
- `R`ead, gets data from table, **SELECT**
- `U`pdate, changes zero or more row's data, **UPDATE**
- `D`elete, removes zero or more row, **DELETE**

### Example SQL Querries

````sql
INSERT INTO countries VALUES (1, 'Turkey', 'Turkish', 81.2); // Create new row to table
````

````sql
SELECT * FROM countries WHERE ID = 1; // Gets all column of rows which rows id equals to 1.
````

````sql
SELECT NAME FROM countries WHERE ID = 1; // Gets only NAME column of rows which rows id equals to 1. 
````

````sql
SELECT COUNT(*) FROM countries WHERE ID = 1; // Gets count of rows which rows id equals to 1. 
````

````sql
UPDATE countries SET POPULATION_COUNT = POPULATION_COUNT + 20 WHERE ID = 1; // Changes POPULATION_COUNT of rows which rows id equals to 1. 
````

## Stored Procedure

Stored Procedure is querries stored in `database`. We call `procedure` like calling method in `java`. You should business in code, not in database so you don't need to use procedure in your code. For me, idea of change business without deploying is hurting all the good things.

### Create Stored Procedure

````sql
CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM Customers
GO;
````

### Execute Stored Procedure

````sql
EXEC SelectAllCustomers;
````

### [For more detail about stored procedure](https://www.w3schools.com/sql/sql_stored_procedures.asp)