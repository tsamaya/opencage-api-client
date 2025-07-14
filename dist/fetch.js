import { GeocodeError } from "./errors/GeocodeError.js";
import { version } from "./version.js";
const USER_AGENT = `OpenCageData Geocoding NodeJS API Client/${version}`;
function checkFetchStatus(response) {
    if (response.status >= 200 && response.status < 300) return response;
    const message = response.statusText || `HTTP error ${response.status}`;
    const error = new GeocodeError(message);
    error.status = {
        code: response.status,
        message
    };
    error.response = response;
    throw error;
}
function parseJSON(response) {
    return response.json();
}
async function fetchUrl(url, resolve, reject, signal) {
    fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': USER_AGENT,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        signal
    }).then(checkFetchStatus).then(parseJSON).then((data)=>{
        resolve(data);
    }).catch((error)=>{
        reject(error);
    });
}
export { checkFetchStatus, fetchUrl, parseJSON };

//# sourceMappingURL=fetch.js.map