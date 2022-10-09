const mongoose = require("mongoose")

mongoose.connect(
    process.envMONGODB_URI || "mongodb://localhost:3001/social-network",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;