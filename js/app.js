const newsService = new NewsService();
const newsUI = new NewsUI();
const alert = new Alert();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const searchField = form['search'];

/**
 * @desc Works on selected country or category changes
 * @param {object} e - event
 */
function onSelectChange(e) {
    const country = countrySelect.value;
    const category = categorySelect.value;
    
    if (!country || !category) return console.log('Выберите страну и категорию');

    newsService.getTopHeadlinesNews((response) => {
        newsFilter(response);
    }, category, country);
}

/**
 * @desc Works on text input in search field
 * @param {object} e - event
 */
function onInputText(e) {
    const searchText = searchField.value;

    if (searchText.length > 2) {
        newsService.searchNews((response) => {
            newsFilter(response);
        }, searchText);
    }
}

/**
 * @desc Adds selected news to articles object
 * @param {object} response - news object
 */
function newsFilter(response) {
    newsUI.clearContainer();

    if (!response.totalResults) return alert.alertMessage('alert-info', 'Новости не найдены');

    const { articles } = response;        
    articles.forEach((news) => newsUI.addNews(news));
}

// Event listeners
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
searchField.addEventListener('input', onInputText);