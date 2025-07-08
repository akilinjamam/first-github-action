import app from "./app";
import config from "./app/config";

const PORT = config.port || 5000; // Default to 5000 if PORT is not set

app.listen(PORT, () => {
  console.log(`Server is running first on http://localhost:${PORT}`);
});
