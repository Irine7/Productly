import { Article } from './js/Article';
import { ArticleModal } from './js/ArticleModal';
import { Modal } from './js/Modal';

const data = [
	{
		 id: 1,
		 title: 'Increasing Prosperity With Positive Thinking',
		 urlToImage: './src/images/strategies/1.jpg',
		 tags: ['Art', 'Design'],
		 content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
		 date: '01.01.2020'
	},
	{
		 id: 2,
		 title: 'Motivation Is The First Step To Success',
		 urlToImage: './src/images/strategies/2.jpg',
		 tags: ['Culture'],
		 content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
		 date: '01.01.2020'
	},
	{
		 id: 3,
		 title: 'Success Steps For Your Personal Or Business Life',
		 urlToImage: './src/images/strategies/3.jpg',
		 tags: ['Culture', 'Design', 'Art'],
		 content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
		 date: '01.01.2020'
	}
];

window.onload = function() {
	console.log('Hello RS!');

	// Render Articles
	if (data) {
		renderArticlesToDom();
	}

	// Tags
	addTagsClickHandler();

	// Generate Base Modal from Modal Class
	addToolsClickHandler();
}

const addTagsClickHandler = () => {
	document.querySelector('.strategies__tags').addEventListener('click', (e) => {
		if (e.target.classList.contains('tag')) { // Если у нас есть тег
			let clickedTag = e.target;
			removeSelectedTags();
			selectClickedTag(clickedTag); // здесь мы указываем какой конкретно тег мы нажали
			if (clickedTag.innerText === 'All') {
				showAllStrategies();
			} else {
				filterStrategyBySelectedTag(clickedTag.innerText)
			}
		}
	})
}

const removeSelectedTags = () => {
	let tags =  document.querySelectorAll('.strategies__tags .tag');
	tags.forEach(tag => { // Перебираем все теги
		tag.classList.remove('tag_selected');
		tag.classList.add('tag_bordered');
	})
}

const selectClickedTag = (clickedTag) => {
	clickedTag.classList.add('tag_selected');
	clickedTag.classList.remove('tag_bordered');
}

const showAllStrategies = () => {
	let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
	strategies.forEach(strategy => { // Перебираем все элементы
	strategy.classList.remove('strategy_hidden');
})
}

const filterStrategyBySelectedTag = (selectedTag) => {
	let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
	strategies.forEach(strategy => { // Перебираем все элементы
		strategy.classList.add('strategy_hidden');
		strategy.querySelectorAll('.tag').forEach(tag => { // Выбрали все стратегии и циклом forEach перебираем все теги, в которых есть selectedTag
			if (tag.innerText === selectedTag) {
				strategy.classList.remove('strategy_hidden');
			}
		})
	})
}

const renderArticlesToDom = () => {
	let strategiesWrapper = getStrategiesWrapper(); // Возвращаем контейнер, в котором будем рендерить элементы
	generateArticles(data).forEach(article => { // Перебираем массив
		strategiesWrapper.append(article.generateArticle())
	})
	addStrategyClickHandler();
}

const getStrategiesWrapper = () => {
	const strategiesContainer = document.querySelector('.strategy-wrapper');
	strategiesContainer.innerHTML = ''; // Очищаем контент в контейнере
	return strategiesContainer;
}

// Функция, генерирующая article:
const generateArticles = (data) => {
	// Берет пустой массив:
	let articles = [];
	// Для каждого article создает новый article и возвращает:
	data.forEach(article => {
		articles.push(new Article(article));
	});
	return articles;
}

const addToolsClickHandler = () => {
	document.querySelector('.tools__button .button').addEventListener('click', () => {
		generateToolsModal();
	})
}

const generateToolsModal = () => {
	renderModalWindow('Test content for Tools Modal');
}

const renderModalWindow = (content) => {
	let modal = new Modal('tools-madal');
	modal.buildModal(content);
}

const addStrategyClickHandler = () => {
	document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {
		if (e.target.closest('.strategy')) {
			let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
			let clickedStrategyData = getClickedData(clickedStrategyId);

			renderArticleModalWindow(clickedStrategyData);
		}
	})
}

const getClickedData = (id) => {
	return data.find(article => article.id = id);
}

const renderArticleModalWindow = (article) => {
	let modal = new ArticleModal('article-madal', article);
	modal.renderModal();
}