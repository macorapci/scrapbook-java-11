---
id: statement-page-id
---

# Statement

The object used for executing a static SQL statement and returning the results it produces. [Statement Javadoc](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Statement.html) **PreparedStatement** and **CallableStatement** extends **Statement**.

## Statement

You can run [Statement](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Statement.html) with `execute` and `executeQuery`, your query is a `SELECT`. You can run [Statement](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Statement.html) with `.execute` and `.executeUpdate`, your query is a `INSERT`, `UPDATE` and, `DELETE`.   

### [execute(String sql)](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/PreparedStatement.html#execute())

````java
boolean execute(String sql) throws SQLException
````

:::note
`execute()` metot returns true if the first result is a ResultSet object; false if the first result is an update count or there is no result
:::

### [executeQuery(String sql)](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Statement.html#execute(java.lang.String))

````java
ResultSet executeQuery(String sql) throws SQLException
````

### [executeUpdate(String sql)](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String))

````java
int executeUpdate(String sql) throws SQLException
````

### Batch Statement

Just think about you have to add 1_000_000 row in once. Can network handle this situvation? Solution is insert with 1_000 insert trips. We call these trips to batch. You can use `statement.addBatch` for adding batch. You can set batch size in [Hibernate](https://hibernate.org/).

````java
// https://jenkov.com/tutorials/jdbc/batchupdate.html

try (Statement statement = connection.createStatement()) {
    statement.addBatch("update people set firstname='John' where id=123");
    statement.addBatch("update people set firstname='Eric' where id=456");
    statement.addBatch("update people set firstname='May'  where id=789");

    int[] recordsAffected = statement.executeBatch();
}

```` 

### ResultSet

`ResultSet` is like `List<String, Object>`.

````java 

// https://docs.oracle.com/javase/tutorial/jdbc/basics/retrieving.html

  public static void viewTable(Connection con) throws SQLException {
    String query = "select COF_NAME, SUP_ID, PRICE, SALES, TOTAL from COFFEES";
    try (Statement stmt = con.createStatement()) {
      ResultSet rs = stmt.executeQuery(query);
      while (rs.next()) {
        String coffeeName = rs.getString("COF_NAME");
        int supplierID = rs.getInt("SUP_ID");
        float price = rs.getFloat("PRICE");
        int sales = rs.getInt("SALES");
        int total = rs.getInt("TOTAL");
        System.out.println(coffeeName + ", " + supplierID + ", " + price +
                           ", " + sales + ", " + total);
      }
    } catch (SQLException e) {
      JDBCTutorialUtilities.printSQLException(e);
    }
  }

````

ResultSet has no column with `String`, throws `SQLException` with `Column 'total' not found.` message.

## PreparedStatement

In PreparedStatement, we can prepare `SQL` before execution. This is why [PreparedStatement](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/PreparedStatement.html)'s execute methods has overloaded version without `String sql`.

````java
   try (PreparedStatement pstmt = con.prepareStatement("UPDATE EMPLOYEES SET SALARY = ? WHERE ID = ?")) {
      pstmt.setBigDecimal(1, 153833.00);
      pstmt.setInt(2, 110592);
      int effectedRow = psmt.executeUpdate();
   }
````

:::note

**PreparedStatement** better than **Statement**. 
- PreparedStatement prevents SQL-injection.
- Readable than `Statement`. 

:::

You set more or less param, [PreparedStatement](https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/PreparedStatement.html) throws exception. 

### Updating Multiple Times

````java 
   pstmt.setString(1, "AAAA");
   pstmt.setInt(2, 3);
   psmt.executeUpdate();

   pstmt.setBigDecimal(1, "AAAA"); // Don't need this line.
   pstmt.setInt(2, 4);
   psmt.executeUpdate();
````

### Batch Statement

````java
// https://jenkov.com/tutorials/jdbc/batchupdate.html

String sql = "update people set firstname=? , lastname=? where id=?";

try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
    preparedStatement.setString(1, "Gary");
    preparedStatement.setString(2, "Larson");
    preparedStatement.setLong  (3, 123);

    preparedStatement.addBatch();

    preparedStatement.setString(1, "Stan");
    preparedStatement.setString(2, "Lee");
    preparedStatement.setLong  (3, 456);

    preparedStatement.addBatch();

    int[] affectedRecords = preparedStatement.executeBatch();
}

````

## CallableStatement

### Read Query

````java

// https://docs.oracle.com/javase/tutorial/jdbc/basics/storedprocedures.html

cs = this.con.prepareCall("{call SHOW_SUPPLIERS}");
ResultSet rs = cs.executeQuery();
while (rs.next()) {
   String supplier = rs.getString("SUP_NAME");
   String coffee = rs.getString("COF_NAME");
   System.out.println(supplier + ": " + coffee);
}

````

### CUD Query

````java

// https://docs.oracle.com/javase/tutorial/jdbc/basics/storedprocedures.html

cs = this.con.prepareCall("{call RAISE_PRICE(?,?,?)}");
cs.setString(1, coffeeNameArg);
cs.setFloat(2, maximumPercentageArg);
cs.registerOutParameter(3, Types.NUMERIC);
cs.setFloat(3, newPriceArg);

cs.execute();

````

#### Create Procedure

````java

// https://docs.oracle.com/javase/tutorial/jdbc/basics/storedprocedures.html

  public void createProcedureGetSupplierOfCoffee() throws SQLException {

    String queryDrop = "DROP PROCEDURE IF EXISTS GET_SUPPLIER_OF_COFFEE";

    String createProcedure =
        "create procedure GET_SUPPLIER_OF_COFFEE(IN coffeeName varchar(32), OUT supplierName varchar(40)) " +
          "begin " +
            "select SUPPLIERS.SUP_NAME into supplierName " +
              "from SUPPLIERS, COFFEES " +
              "where SUPPLIERS.SUP_ID = COFFEES.SUP_ID " +
              "and coffeeName = COFFEES.COF_NAME; " +
            "select supplierName; " +
          "end";

    try (Statement stmtDrop = con.createStatement()) {
      System.out.println("Calling DROP PROCEDURE");
      stmtDrop.execute(queryDrop);
    } catch (SQLException e) {
      JDBCTutorialUtilities.printSQLException(e);
    }

    try (Statement stmt = con.createStatement()) {
      stmt.executeUpdate(createProcedure);
    } catch (SQLException e) {
      JDBCTutorialUtilities.printSQLException(e);
    }
  }

````

#### Register Out Param

````java

// https://docs.oracle.com/javase/tutorial/jdbc/basics/storedprocedures.html

cs = this.con.prepareCall("{call GET_SUPPLIER_OF_COFFEE(?, ?)}");
cs.setString(1, coffeeNameArg);
cs.registerOutParameter(2, Types.VARCHAR);
cs.executeQuery();
String supplierName = cs.getString(2);

````

