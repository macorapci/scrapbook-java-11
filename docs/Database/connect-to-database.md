---
sidebar_position: 3
---

# Connect To Database

## Set up database

You have to install `.jar` of which database to connect. If you are not using maven or something like that, you have to give `-cp` param to `java` command.

## Creating JDBC URL

JDBC URL has 3 part:
- Protocol (standart jdbc)
- Subprotocol (oracle, mssql, etc.)
- Subname (url of database)

### Some example for JDBC URL
- jdbc:postgresql://localhost/foo
- jdbc:postgresql://localhost:2020/foo
- jdbc:postgresql://127.0.0.1:2020/foo
- jdbc:postgresql://127.0.0.1:2020/foo?username=sa
- jdbc:mysql://127.0.0.1:2020/foo?username=sa

Every database vendor have their own default values. For example, if we won't set port in jdbc url, every database vendor set own default port value. 

## Get Connection in Java

```` java 
// https://docs.oracle.com/javase/tutorial/jdbc/basics/connecting.html

public Connection getConnection() throws SQLException {

    Connection conn = null;
    Properties connectionProps = new Properties();
    connectionProps.put("user", this.userName);
    connectionProps.put("password", this.password);

    if (this.dbms.equals("mysql")) {
        conn = DriverManager.getConnection(
                   "jdbc:" + this.dbms + "://" +
                   this.serverName +
                   ":" + this.portNumber + "/",
                   connectionProps);
    } else if (this.dbms.equals("derby")) {
        conn = DriverManager.getConnection(
                   "jdbc:" + this.dbms + ":" +
                   this.dbName +
                   ";create=true",
                   connectionProps);
    }
    System.out.println("Connected to database");
    return conn;
}

````

:::note

Get Connection from `DataSource` instead of `DriverManager`. `DataSource` has more feature and optimize over `DriverManager`.

:::

