---
id: jdbc-page-id
---

# JDBC (Java Database Connectivity)

## What is JDBC?

`JDBC` is a standart of how to connect database with `Java`. There is a few interface for standarting this issue. This interface in `java.sql.*` package.
- [Driver](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Driver.html)
- [Connection](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Connection.html)
- [PreparedStatement](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/PreparedStatement.html)
- [CallableStatement](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/CallableStatement.html)
- [ResultSet](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/ResultSet.html)

### Driver

Creates a connetion with database. 

### Connetion

Sends commands to database.

### PreparedStatement

Executes a querry.

### CallableStatement

Executes a stored procedure.

### ResultSet

Rows of querry. 