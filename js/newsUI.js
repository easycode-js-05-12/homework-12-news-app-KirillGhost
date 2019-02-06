const newsCont = document.querySelector('.news-wrap .row');

class NewsUI {
    /**
     * @desc Adds news to the page
     * @param {object} news - selected news
     */        
    addNews(news) {
        NewsUI.newsDOMTemplate(news);

//        const template = NewsUI.newsTemplate(news);
//        newsCont.insertAdjacentHTML("afterbegin", template);
    }

    /**
     * @desc Deletes all news from the page
     */
    clearContainer() {
        let first = newsCont.firstElementChild;
        while (first) {
            newsCont.removeChild(first);
            first = newsCont.firstElementChild;
        }
    }

    /**
     * @desc Markup template for adding news
     * @param {object} news - selected news
     */
    static newsTemplate(news) {
        return `
        <div class="col-6 s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${news.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${news.title || ''}</span>

                    <p>${news.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${news.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }

    /**
     * @desc Markup template for adding news (using DOM)
     * @param {object} news - selected news
     */    
    static newsDOMTemplate(news) {
        let colDiv = document.createElement('div');
        colDiv.classList.add('col-6', 's12', 'm6');
        newsCont.appendChild(colDiv);

        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        colDiv.appendChild(cardDiv);

        let div = document.createElement('div');
        div.classList.add('card-image');
        cardDiv.appendChild(div);

        let innerEl = document.createElement('img');
        innerEl.src = `${news.urlToImage}`;
        div.appendChild(innerEl);

        div = document.createElement('div');
        div.classList.add('card-content');
        cardDiv.appendChild(div);

        innerEl = document.createElement('span');
        innerEl.classList.add('card-title');
        innerEl.textContent = `${news.title || ''}`;
        div.appendChild(innerEl);

        innerEl = document.createElement('p');
        innerEl.textContent = `${news.description || ''}`;
        div.appendChild(innerEl);

        div = document.createElement('div');
        div.classList.add('card-action');
        cardDiv.appendChild(div);
        
        innerEl = document.createElement('a');
        innerEl.href = `${news.url}`;
        innerEl.target = '_blank';
        innerEl.textContent = 'Read More';
        div.appendChild(innerEl);
    }
}