var config = require("../../knexfile");
var env = "development";
var knex = require("knex")(config[env]);

module.exports = knex;

knex.migrate.latest([config]);

// pw - VkudZYsvPsLhFpOY
//DB connection string - postgresql://postgres:VkudZYsvPsLhFpOY@db.zpjjadnvpfnrlffzwzjh.supabase.co:5432/postgres
