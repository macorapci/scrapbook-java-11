"use strict";(self.webpackChunkscrapbook_java_11=self.webpackChunkscrapbook_java_11||[]).push([[169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(a),d=r,S=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return a?n.createElement(S,l(l({ref:t},c),{},{components:a})):n.createElement(S,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2004:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const s={id:"statement-page-id"},l="Statement",i={unversionedId:"database/statement-page-id",id:"database/statement-page-id",title:"Statement",description:"The object used for executing a static SQL statement and returning the results it produces. Statement Javadoc PreparedStatement and CallableStatement extends Statement.",source:"@site/docs/database/statement.md",sourceDirName:"database",slug:"/database/statement-page-id",permalink:"/scrapbook-java-11/docs/database/statement-page-id",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/database/statement.md",tags:[],version:"current",frontMatter:{id:"statement-page-id"},sidebar:"java11",previous:{title:"Connect To Database",permalink:"/scrapbook-java-11/docs/database/connect-to-database-page-id"}},p={},o=[{value:"Statement",id:"statement-1",level:2},{value:"execute(String sql)",id:"executestring-sql",level:3},{value:"executeQuery(String sql)",id:"executequerystring-sql",level:3},{value:"executeUpdate(String sql)",id:"executeupdatestring-sql",level:3},{value:"Batch Statement",id:"batch-statement",level:3},{value:"ResultSet",id:"resultset",level:3},{value:"PreparedStatement",id:"preparedstatement",level:2},{value:"Updating Multiple Times",id:"updating-multiple-times",level:3},{value:"Batch Statement",id:"batch-statement-1",level:3},{value:"CallableStatement",id:"callablestatement",level:2},{value:"Read Query",id:"read-query",level:3},{value:"CUD Query",id:"cud-query",level:3},{value:"Create Procedure",id:"create-procedure",level:4},{value:"Register Out Param",id:"register-out-param",level:4}],c={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"statement"},"Statement"),(0,r.kt)("p",null,"The object used for executing a static SQL statement and returning the results it produces. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Statement.html"},"Statement Javadoc")," ",(0,r.kt)("strong",{parentName:"p"},"PreparedStatement")," and ",(0,r.kt)("strong",{parentName:"p"},"CallableStatement")," extends ",(0,r.kt)("strong",{parentName:"p"},"Statement"),"."),(0,r.kt)("h2",{id:"statement-1"},"Statement"),(0,r.kt)("p",null,"You can run ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Statement.html"},"Statement")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"executeQuery"),", your query is a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),". You can run ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Statement.html"},"Statement")," with ",(0,r.kt)("inlineCode",{parentName:"p"},".execute")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".executeUpdate"),", your query is a ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")," and, ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),".   "),(0,r.kt)("h3",{id:"executestring-sql"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/PreparedStatement.html#execute()"},"execute(String sql)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"boolean execute(String sql) throws SQLException\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," metot returns true if the first result is a ResultSet object; false if the first result is an update count or there is no result")),(0,r.kt)("h3",{id:"executequerystring-sql"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Statement.html#execute(java.lang.String)"},"executeQuery(String sql)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ResultSet executeQuery(String sql) throws SQLException\n")),(0,r.kt)("h3",{id:"executeupdatestring-sql"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/Statement.html#executeUpdate(java.lang.String)"},"executeUpdate(String sql)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int executeUpdate(String sql) throws SQLException\n")),(0,r.kt)("h3",{id:"batch-statement"},"Batch Statement"),(0,r.kt)("p",null,"Just think about you have to add 1_000_000 row in once. Can network handle this situvation? Solution is insert with 1_000 insert trips. We call these trips to batch. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"statement.addBatch")," for adding batch. You can set batch size in ",(0,r.kt)("a",{parentName:"p",href:"https://hibernate.org/"},"Hibernate"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// https://jenkov.com/tutorials/jdbc/batchupdate.html\n\ntry (Statement statement = connection.createStatement()) {\n    statement.addBatch(\"update people set firstname='John' where id=123\");\n    statement.addBatch(\"update people set firstname='Eric' where id=456\");\n    statement.addBatch(\"update people set firstname='May'  where id=789\");\n\n    int[] recordsAffected = statement.executeBatch();\n}\n\n")),(0,r.kt)("h3",{id:"resultset"},"ResultSet"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ResultSet")," is like ",(0,r.kt)("inlineCode",{parentName:"p"},"List<String, Object>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n// https://docs.oracle.com/javase/tutorial/jdbc/basics/retrieving.html\n\n  public static void viewTable(Connection con) throws SQLException {\n    String query = "select COF_NAME, SUP_ID, PRICE, SALES, TOTAL from COFFEES";\n    try (Statement stmt = con.createStatement()) {\n      ResultSet rs = stmt.executeQuery(query);\n      while (rs.next()) {\n        String coffeeName = rs.getString("COF_NAME");\n        int supplierID = rs.getInt("SUP_ID");\n        float price = rs.getFloat("PRICE");\n        int sales = rs.getInt("SALES");\n        int total = rs.getInt("TOTAL");\n        System.out.println(coffeeName + ", " + supplierID + ", " + price +\n                           ", " + sales + ", " + total);\n      }\n    } catch (SQLException e) {\n      JDBCTutorialUtilities.printSQLException(e);\n    }\n  }\n\n')),(0,r.kt)("p",null,"ResultSet has no column with ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", throws ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLException")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Column 'total' not found.")," message."),(0,r.kt)("h2",{id:"preparedstatement"},"PreparedStatement"),(0,r.kt)("p",null,"In PreparedStatement, we can prepare ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL")," before execution. This is why ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/PreparedStatement.html"},"PreparedStatement"),"'s execute methods has overloaded version without ",(0,r.kt)("inlineCode",{parentName:"p"},"String sql"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'   try (PreparedStatement pstmt = con.prepareStatement("UPDATE EMPLOYEES SET SALARY = ? WHERE ID = ?")) {\n      pstmt.setBigDecimal(1, 153833.00);\n      pstmt.setInt(2, 110592);\n      int effectedRow = psmt.executeUpdate();\n   }\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"PreparedStatement")," better than ",(0,r.kt)("strong",{parentName:"p"},"Statement"),". "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"PreparedStatement prevents SQL-injection."),(0,r.kt)("li",{parentName:"ul"},"Readable than ",(0,r.kt)("inlineCode",{parentName:"li"},"Statement"),". "))),(0,r.kt)("p",null,"You set more or less param, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.sql/java/sql/PreparedStatement.html"},"PreparedStatement")," throws exception. "),(0,r.kt)("h3",{id:"updating-multiple-times"},"Updating Multiple Times"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'   pstmt.setString(1, "AAAA");\n   pstmt.setInt(2, 3);\n   psmt.executeUpdate();\n\n   pstmt.setBigDecimal(1, "AAAA"); // Don\'t need this line.\n   pstmt.setInt(2, 4);\n   psmt.executeUpdate();\n')),(0,r.kt)("h3",{id:"batch-statement-1"},"Batch Statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// https://jenkov.com/tutorials/jdbc/batchupdate.html\n\nString sql = "update people set firstname=? , lastname=? where id=?";\n\ntry (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {\n    preparedStatement.setString(1, "Gary");\n    preparedStatement.setString(2, "Larson");\n    preparedStatement.setLong  (3, 123);\n\n    preparedStatement.addBatch();\n\n    preparedStatement.setString(1, "Stan");\n    preparedStatement.setString(2, "Lee");\n    preparedStatement.setLong  (3, 456);\n\n    preparedStatement.addBatch();\n\n    int[] affectedRecords = preparedStatement.executeBatch();\n}\n\n')),(0,r.kt)("h2",{id:"callablestatement"},"CallableStatement"),(0,r.kt)("h3",{id:"read-query"},"Read Query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n// https://docs.oracle.com/javase/tutorial/jdbc/basics/storedprocedures.html\n\ncs = this.con.prepareCall("{call SHOW_SUPPLIERS}");\nResultSet rs = cs.executeQuery();\nwhile (rs.next()) {\n   String supplier = rs.getString("SUP_NAME");\n   String coffee = rs.getString("COF_NAME");\n   System.out.println(supplier + ": " + coffee);\n}\n\n')),(0,r.kt)("h3",{id:"cud-query"},"CUD Query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n// https://docs.oracle.com/javase/tutorial/jdbc/basics/storedprocedures.html\n\ncs = this.con.prepareCall("{call RAISE_PRICE(?,?,?)}");\ncs.setString(1, coffeeNameArg);\ncs.setFloat(2, maximumPercentageArg);\ncs.registerOutParameter(3, Types.NUMERIC);\ncs.setFloat(3, newPriceArg);\n\ncs.execute();\n\n')),(0,r.kt)("h4",{id:"create-procedure"},"Create Procedure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n// https://docs.oracle.com/javase/tutorial/jdbc/basics/storedprocedures.html\n\n  public void createProcedureGetSupplierOfCoffee() throws SQLException {\n\n    String queryDrop = "DROP PROCEDURE IF EXISTS GET_SUPPLIER_OF_COFFEE";\n\n    String createProcedure =\n        "create procedure GET_SUPPLIER_OF_COFFEE(IN coffeeName varchar(32), OUT supplierName varchar(40)) " +\n          "begin " +\n            "select SUPPLIERS.SUP_NAME into supplierName " +\n              "from SUPPLIERS, COFFEES " +\n              "where SUPPLIERS.SUP_ID = COFFEES.SUP_ID " +\n              "and coffeeName = COFFEES.COF_NAME; " +\n            "select supplierName; " +\n          "end";\n\n    try (Statement stmtDrop = con.createStatement()) {\n      System.out.println("Calling DROP PROCEDURE");\n      stmtDrop.execute(queryDrop);\n    } catch (SQLException e) {\n      JDBCTutorialUtilities.printSQLException(e);\n    }\n\n    try (Statement stmt = con.createStatement()) {\n      stmt.executeUpdate(createProcedure);\n    } catch (SQLException e) {\n      JDBCTutorialUtilities.printSQLException(e);\n    }\n  }\n\n')),(0,r.kt)("h4",{id:"register-out-param"},"Register Out Param"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n// https://docs.oracle.com/javase/tutorial/jdbc/basics/storedprocedures.html\n\ncs = this.con.prepareCall("{call GET_SUPPLIER_OF_COFFEE(?, ?)}");\ncs.setString(1, coffeeNameArg);\ncs.registerOutParameter(2, Types.VARCHAR);\ncs.executeQuery();\nString supplierName = cs.getString(2);\n\n')))}m.isMDXComponent=!0}}]);