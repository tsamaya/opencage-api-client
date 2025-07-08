import { version } from "./version.js";
import { checkFetchStatus, parseJSON } from "./helpers/geocodeHelpers.js";
const USER_AGENT = `OpenCageData Geocoding NodeJS API Client/${version}`;
async function fetchUrl(url, resolve, reject) {
    fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': USER_AGENT,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    }).then(checkFetchStatus).then(parseJSON).then((data)=>{
        resolve(data);
    }).catch((error)=>{
        reject(error);
    });
}
export { fetchUrl };

//# sourceMappingURL=fetch.js.map