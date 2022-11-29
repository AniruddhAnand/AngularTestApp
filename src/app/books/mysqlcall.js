async function grabData() {
    const mysql = require("mysql");
    const con = mysql.createConnection({
      host: "bpa-db.cluster-c75er1seumuj.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "$bpa#123",
      port: 3306,
      database: "dealership",
    });
    body = await con.query("SELECT * FROM cars");
    print(body);
}
