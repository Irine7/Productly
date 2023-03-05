export class Article {
	constructor ({ id, title, urlToImage, tags, ...rest }) {
		 this.id = id;
		 this.title = title;
		 this.urlToImage = urlToImage;
		 this.tags = tags;
	}

// Article generator
generateArticle() {
	let template = '';
	let article = document.createElement('article');
	article.className = 'strategy block-shadowed';
	article.setAttribute('data-id', this.id);

	this.urlToImage &&
	(template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`)

	if (this.title || this.tags) { //Если в article есть название или тег
		template += `<div class="strategy__content">` // вставляем див

		this.title &&
		(template += `<h3 class="strategy__name">${this.title}</h3>`)

		if (this.tags) { // Проверяем на наличие тегов
			template += `<div class="strategy__tags tags">`

			this.tags.map(tag => {
				template += `<span class="tag tag_colored">${tag}</span>`
			})

			template += `</div>`
		}

		template += `</div>`
	}

	article.innerHTML = template;
	return article;
}