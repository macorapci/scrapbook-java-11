---
id: connect-to-database-page-id
---

# Connect To Database

## Set up database

You have to install `.jar` of which database to connect. If you are not using maven or something like that, you have to give `-cp` param to `java` command. Otherwise you will get error that looks like **"SQLException: No suitable driver found...."**.

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

````java 
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

### Get Connection with username and password

You can check [DriverManager.getConnection](https://docs.oracle.com/javase/8/docs/api/java/sql/DriverManager.html#getConnection-java.lang.String-java.lang.String-java.lang.String-) for a few overload exist for `DriverManager`.