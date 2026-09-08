import app from "./app.js";
import { checkConnection } from "./database/connection.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await checkConnection();
    app.listen(PORT, () => {
      console.log(`⚡️ Server is running on port ${PORT}`)
    })

  } catch (error) {
    console.log("Failed to start server: ", error);
    process.exit(1);
  }
}

start();
