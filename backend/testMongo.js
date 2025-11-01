const mongoose = require('mongoose');

const uri = "mongodb+srv://manikantanerella003_db_user:iJVRYr1U4PCWtZPs@cluster0.x80zbep.mongodb.net/studentdb?retryWrites=true&w=majority";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    console.log("🔄 Trying to connect to MongoDB Atlas...");
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("✅ Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("❌ Connection error:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}
run();
