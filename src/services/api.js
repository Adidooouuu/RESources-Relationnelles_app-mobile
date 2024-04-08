const BASE_URL = 'https://cesi-rr.alwaysdata.net/api/';
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export const get = (path, params) => {
    const url = new URL(`${BASE_URL}${path}`);
    Object.keys(params).forEach(key => {
        if (params[key] === null || params[key] === undefined) {
            return;
        }
        if (Array.isArray(params[key])) {
            params[key].forEach(value => {
                url.searchParams.append(key, value);
            });
        } else {
            url.searchParams.append(key, params[key]);
        }
    });
    return fetch(url, {
        method: 'GET',
        headers: headers,
    });
};