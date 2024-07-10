import { app } from "./app";
import config from "./App/config";

app.listen(config.port, () => {
    console.log(`Server is Fire at http://localhost:${config.port}`);
});