class CustomHttp {
    /**
     * @desc Loads data from the server
     * @param {string} url - API URL
     * @param {function} callback - callback function
     */
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));
    }

    /**
     * @desc Loads data from the server
     * @param {string} url - API URL
     * @param {object} data - data object
     * @param {function} callback - callback function
     */
    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}