const http = new CustomHttp();

class NewsService {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey = '08c5607f35b94a4b94e12d3d831f6657';
        this.country = '';
        this.category = '';
        this.searchText = '';
    }

    /**
     * @desc Gets news from selected category and country
     * @param {function} callback - callback function
     * @param {string} category - news category
     * @param {string} country - news country
     */
    getTopHeadlinesNews(callback, category = this.category, country = this.country) {
        http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`, callback);
    }

    /**
     * @desc Gets news with entered search text
     * @param {function} callback - callback function
     * @param {string} searchText - search text
     */
    searchNews(callback, searchText = this.searchText) {
        http.get(`${this.apiUrl}/everything?q=${searchText}&apiKey=${this.apiKey}`, callback);
    }
}