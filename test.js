var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('equipment.sqlite3');
for(var i = 0; i < 10; i++) {
    db.run(“INSERT INTO equipment (name, serial) VALUES (‘WiiMote’,” + i +”)”);
}
