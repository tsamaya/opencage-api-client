import { config } from "dotenv";
import { geocode } from "./geocode.js";
config();
const opencage = {
    geocode: geocode
};
const src = opencage;
export { src as default, geocode };

//# sourceMappingURL=index.js.map