const mongoose = require("mongoose")

mongoose.connect(
    process.envMONGODB_URI || "mongodb://localhost:27017/challenge18-SocialNetwork",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;