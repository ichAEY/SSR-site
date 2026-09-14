const menu = [
['Первые блюда','Харчо','350 г','450 ₽'],['Первые блюда','Борщ','350 г','450 ₽'],['Первые блюда','Шурпа','350 г','450 ₽'],['Первые блюда','Лагман','350 г','450 ₽'],
['Вторые блюда','Жульен','100 г','350 ₽'],['Вторые блюда','Долма','150 г','400 ₽'],['Вторые блюда','Хинкали классические','1 шт.','100 ₽'],['Вторые блюда','Хинкали из баранины','1 шт.','100 ₽'],['Вторые блюда','Хинкали с сыром','1 шт.','100 ₽'],['Вторые блюда','Плов','250 г','350 ₽'],['Вторые блюда','Поджарка по-домашнему','250 г','500 ₽'],['Вторые блюда','Гуляш говяжий','250 г','600 ₽'],['Вторые блюда','Мясо по-царски','200 г','600 ₽'],['Вторые блюда','Блинчики с мясом','1 шт.','100 ₽'],['Вторые блюда','Цыплёнок табака','1 шт.','700 ₽'],['Вторые блюда','Чкмерули','300 г','800 ₽'],['Вторые блюда','Жареные грибы с сыром в кеце','200 г','500 ₽'],['Вторые блюда','Спагетти с сыром и ветчиной','200 г','400 ₽'],
['Шашлык на углях','Стейк из лосося','200 г','1000 ₽'],['Шашлык на углях','Морской окунь','200 г','650 ₽'],['Шашлык на углях','Шашлык куриный','200 г','450 ₽'],['Шашлык на углях','Шашлык из свиной шейки','200 г','500 ₽'],['Шашлык на углях','Шашлык из свиной корейки на кости','200 г','450 ₽'],['Шашлык на углях','Шашлык из свиных рёбрышек','200 г','450 ₽'],['Шашлык на углях','Шашлык из баранины','200 г','900 ₽'],['Шашлык на углях','Шашлык ассорти от ССР','1500 г','3500 ₽'],['Шашлык на углях','Люля-кебаб из телятины','200 г','550 ₽'],['Шашлык на углях','Люля-кебаб из курицы','200 г','400 ₽'],['Шашлык на углях','Дорадо','350 г','900 ₽'],['Шашлык на углях','Овощи гриль','300 г','550 ₽'],['Шашлык на углях','Картофель','200 г','350 ₽'],['Шашлык на углях','Шампиньоны','150 г','350 ₽'],
['Пицца','Маргарита','33 см','700 ₽'],['Пицца','Четыре сыра','33 см','850 ₽'],['Пицца','Пепперони','33 см','800 ₽'],['Пицца','ССР','33 см','900 ₽'],['Пицца','Салями, ветчина и грибы','33 см','750 ₽'],['Пицца','Цезарь с курицей','33 см','750 ₽'],
['Холодные закуски','Баклажаны с чесноком и орехами','100 г','450 ₽'],['Холодные закуски','Сырное ассорти','200 г','450 ₽'],['Холодные закуски','Разносол','200 г','450 ₽'],['Холодные закуски','Овощная нарезка','200 г','350 ₽'],['Холодные закуски','Маслины и оливки','180 г','300 ₽'],['Холодные закуски','Мясное ассорти','200 г','500 ₽'],['Холодные закуски','Рыбная тарелка','200 г','800 ₽'],['Холодные закуски','Язык с хреном','150 г','700 ₽'],['Холодные закуски','Сельдь по-купечески','150 г','400 ₽'],['Холодные закуски','Баклажаны по-армянски','200 г','400 ₽'],['Холодные закуски','Рулетики с ветчиной','170 г','400 ₽'],['Холодные закуски','Маринованные шампиньоны','200 г','350 ₽'],
['Салаты','Салат «Мангал»','180 г','450 ₽'],['Салаты','Салат «Бургер»','200 г','700 ₽'],['Салаты','Салат «Светофор»','200 г','700 ₽'],['Салаты','Овощной','200 г','400 ₽'],['Салаты','Оливье','200 г','400 ₽'],['Салаты','Грибной','200 г','400 ₽'],['Салаты','Цезарь с курицей','200 г','550 ₽'],['Салаты','Цезарь с креветками','200 г','650 ₽'],['Салаты','Салат «ССР»','150 г','450 ₽'],['Салаты','Салат «Нежный»','150 г','450 ₽'],['Салаты','Салат «Дамский»','150 г','450 ₽'],['Салаты','Греческий','200 г','450 ₽'],
['Гарниры','Картофель фри','150 г','250 ₽'],['Гарниры','Картофель по-деревенски','150 г','250 ₽'],['Гарниры','Наггетсы с сырным соусом','150 г','300 ₽'],['Гарниры','Сырные шарики','220 г','250 ₽'],
['Хачапури','Хачапури по-имеретински','1 шт.','800 ₽'],['Хачапури','Хачапури по-аджарски','1 шт.','600 ₽'],['Хачапури','Хачапури по-мегрельски','1 шт.','850 ₽'],
['Соусы','Шашлычный','','100 ₽'],['Соусы','Чесночный','','100 ₽'],['Соусы','Сырный','','100 ₽'],['Соусы','Аджика','','100 ₽'],['Соусы','Лаваш тонкий','','80 ₽'],['Соусы','Лепёшка','','100 ₽'],
['Десерты','Чизкейк','1 шт.','250 ₽'],['Десерты','Фруктовая нарезка','300 г','400 ₽'],['Десерты','Мороженое','','200 ₽'],['Десерты','Шоколад','','150 ₽'],
['Напитки','Латте','','250 ₽'],['Напитки','Капучино','','250 ₽'],['Напитки','Эспрессо','','200 ₽'],['Напитки','Американо','','200 ₽'],['Напитки','Чай в ассортименте','','50 ₽'],['Напитки','Чайник чая в ассортименте','','300 ₽'],['Напитки','Соки натуральные','1 л','300 ₽'],['Напитки','Лимонад','0.5 л','200 ₽'],['Напитки','Coca-Cola','0.5 л','200 ₽'],['Напитки','Вода без газа','0.5 л','200 ₽'],['Напитки','Минеральная вода','0.5 л','250 ₽'],['Напитки','Армянский компот','1 л','400 ₽'],
['Пиво','Stella Artois','0.45 л','300 ₽'],['Пиво','Kozel светлое / тёмное','0.45 л','250 ₽'],['Пиво','Bud','0.45 л','250 ₽'],['Пиво','Amsterdam','0.45 л','300 ₽'],['Пиво','Kilkia','0.45 л','300 ₽'],['Пиво','Пробковый сбор','0.4 л','350 ₽'],['Пиво','Бой посуды','','500 ₽'],
['Закуски к пиву','Креветки королевские','200 г','550 ₽'],['Закуски к пиву','Гренки с чесноком и соусом','100 г','300 ₽'],['Закуски к пиву','Луковые кольца','150 г','350 ₽'],['Закуски к пиву','Пивная тарелка','','1500 ₽'],['Закуски к пиву','Фисташки','','200 ₽'],['Закуски к пиву','Арахис','','200 ₽'],['Закуски к пиву','Чипсы','','300 ₽']
];
const order=['Все','Первые блюда','Вторые блюда','Шашлык на углях','Пицца','Холодные закуски','Салаты','Гарниры','Хачапури','Соусы','Десерты','Напитки','Пиво','Закуски к пиву'];
const tabs=document.querySelector('.category-tabs'),list=document.querySelector('.menu-list');
const descriptions = {
	'Разносол': 'черемша, помидоры, чеснок, огурец',
	'Рыбная тарелка': 'масляная рыба, сёмга слабосолёная',
	'Сельдь по-купечески': 'филе сельди, лук, картофель, масло',
	'Баклажаны по-армянски': 'баклажаны, кинза, чеснок',

	'Салат «Мангал»': 'баклажаны, помидоры, перец болгарский, специи',
	'Салат «Бургер»': 'говядина, салат айсберг, помидор, соус бургер, лук, огурец маринованный',
	'Салат «Светофор»': 'говядина, свежий перец, майонез, грецкий орех',
	'Овощной': 'помидоры, огурцы, растительное масло, маслины, лук',
	'Оливье': 'курица, картофель, яйца, солёные огурцы, зелёный горошек, майонез',
	'Грибной': 'шампиньоны, куриное филе, сыр, огурцы, майонез',
	'Цезарь с креветками': 'креветки, сухарики, салат айсберг, соус «Цезарь», сыр',
	'Салат «ССР»': 'огурцы, помидоры, куриное филе, грецкий орех, зелень, майонез',
	'Салат «Нежный»': 'куриное филе, апельсин, грецкий орех, майонез, сыр',
	'Салат «Дамский»': 'куриное филе, ананас, грецкий орех, майонез, сыр',
	'Греческий': 'помидоры, огурцы, маслины, сыр, оливковое масло',

	'Жульен': 'шампиньоны, сливки, сыр',
	'Долма': 'виноградные листья, говядина, рис',
	'Хинкали классические': 'говядина и свинина',
	'Поджарка по-домашнему': 'свинина, лук, картофель, перец, помидоры, зелень',
	'Гуляш говяжий': 'говяжья вырезка, картофель, лук, перец, помидоры, зелень',
	'Мясо по-царски': 'карбонат свиной, помидоры, сыр, шампиньоны, майонез',
	'Чкмерули': 'курица, сливки, чеснок, специи, зелень',

	'Шашлык из бараньих рёбрышек': 'корейка на кости',
	'Шашлык из баранины': 'корейка на кости',
	'Овощи гриль': 'баклажаны, помидоры, перец болгарский',

	'Kozel': 'светлое / тёмное',
	'Пивная тарелка': 'гренки, сырные шарики, луковые кольца, куриные крылышки с чесночным соусом',
	'Чай': 'в ассортименте',
	'Чайник чая': 'в ассортименте'
};
let currentCategory='Все';
const collapseWrapper=document.querySelector('.menu-collapse-wrapper');
const collapseFade=document.querySelector('.menu-collapse-fade');
const collapseToggle=document.querySelector('.menu-collapse-toggle');
function isMobileMenuView(){return window.matchMedia('(max-width:820px)').matches;}
function computeCollapsedHeight(){
	const groups=Array.from(list.querySelectorAll('.menu-group'));
	const target=groups.find(g=>g.querySelector('h3')?.textContent==='Салаты');
	if(!target||!collapseWrapper)return 0;
	const wrapperTop=collapseWrapper.getBoundingClientRect().top;
	const targetBottom=target.getBoundingClientRect().bottom;
	return Math.ceil(targetBottom - wrapperTop + 12);
}
function setCollapseState(open){
	if(!collapseWrapper||!collapseFade||!collapseToggle)return;
	if(open){
		collapseWrapper.style.maxHeight='none';
		collapseFade.style.display='none';
		collapseToggle.innerHTML='Свернуть меню <span class="menu-collapse-arrow">↑</span>';
		collapseToggle.setAttribute('aria-expanded','true');
	}else{
		const height=computeCollapsedHeight();
		collapseWrapper.style.maxHeight=`${height}px`;
		collapseFade.style.display='block';
		collapseToggle.innerHTML='Продолжить просмотр меню <span class="menu-collapse-arrow">↓</span>';
		collapseToggle.setAttribute('aria-expanded','false');
	}
}
function updateMenuCollapse(){
	if(!collapseWrapper||!collapseFade||!collapseToggle)return;
	if(!isMobileMenuView()||currentCategory!=='Все'){
		collapseWrapper.style.maxHeight='none';
		collapseFade.style.display='none';
		collapseToggle.style.display='none';
		collapseToggle.setAttribute('aria-expanded','false');
		return;
	}
	collapseToggle.style.display='inline-flex';
	if(collapseToggle.getAttribute('aria-expanded')==='true'){
		setCollapseState(true);
	}else{
		setCollapseState(false);
	}
}
function render(category){
	currentCategory=category;
	const selected=category==='Все'?menu:menu.filter(x=>x[0]===category);
	const groups=category==='Все'?order.slice(1):[category];
	list.innerHTML=groups.map(group=>{
		const rows=selected.filter(x=>x[0]===group).map(([,name,weight,price])=>{
			const desc = descriptions[name] ? `<div class="menu-desc">${descriptions[name]}</div>` : '';
			const rowClasses=['menu-row'];
			if(name==='Лаваш тонкий'||name==='Пробковый сбор')rowClasses.push('menu-row-separated');
			if(name==='Пробковый сбор')rowClasses.push('menu-row-accent');
			return `<div class="${rowClasses.join(' ')}"><div class="menu-name">${name}${desc}</div><div class="menu-price"><small>${weight}</small>${price}</div></div>`
		}).join('');
		return `<section class="menu-group"><h3>${group}</h3>${rows}</section>`
	}).join('');
	document.querySelectorAll('.category-tabs button').forEach(b=>b.classList.toggle('is-active',b.dataset.category===category));
	updateMenuCollapse();
}
order.forEach(category=>{const button=document.createElement('button');button.type='button';button.role='tab';button.dataset.category=category;button.textContent=category;button.addEventListener('click',()=>render(category));tabs.append(button)});render('Все');
const toggle=document.querySelector('.menu-toggle'),mobile=document.querySelector('.mobile-nav');
if(collapseToggle){
	collapseToggle.addEventListener('click',()=>{
		const open=collapseToggle.getAttribute('aria-expanded')==='false';
		setCollapseState(open);
		if(!open){
			setTimeout(()=>collapseToggle.scrollIntoView({behavior:'smooth',block:'center'}),300);
		}
	});
	window.addEventListener('resize',()=>updateMenuCollapse());
}
toggle.addEventListener('click',()=>{const open=toggle.classList.toggle('is-open');mobile.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',open)});
mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.classList.remove('is-open');mobile.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')}));

const aboutSlider=document.querySelector('.about-slider');
if(aboutSlider){
	const track=aboutSlider.querySelector('.about-slider-track');
	const slides=Array.from(aboutSlider.querySelectorAll('.about-slide'));
	const prev=aboutSlider.querySelector('.about-slider-prev');
	const next=aboutSlider.querySelector('.about-slider-next');
	const dotsWrap=aboutSlider.querySelector('.about-slider-dots');
	let slideIndex=0;
	let autoTimer;
	let touchStartX=0;
	const dots=slides.map((_,index)=>{
		const dot=document.createElement('button');
		dot.type='button';
		dot.className='about-slider-dot';
		dot.setAttribute('aria-label',`Фото ${index+1}`);
		dot.addEventListener('click',()=>{goToSlide(index);restartAuto()});
		dotsWrap.append(dot);
		return dot;
	});
	function goToSlide(index){
		slideIndex=(index+slides.length)%slides.length;
		track.style.transform=`translateX(-${slideIndex*100}%)`;
		dots.forEach((dot,i)=>dot.classList.toggle('is-active',i===slideIndex));
	}
	function restartAuto(){
		clearInterval(autoTimer);
		autoTimer=setInterval(()=>goToSlide(slideIndex+1),5500);
	}
	prev.addEventListener('click',()=>{goToSlide(slideIndex-1);restartAuto()});
	next.addEventListener('click',()=>{goToSlide(slideIndex+1);restartAuto()});
	aboutSlider.addEventListener('touchstart',event=>{touchStartX=event.touches[0].clientX},{passive:true});
	aboutSlider.addEventListener('touchend',event=>{
		const delta=event.changedTouches[0].clientX-touchStartX;
		if(Math.abs(delta)>45){goToSlide(slideIndex+(delta<0?1:-1));restartAuto()}
	},{passive:true});
	aboutSlider.addEventListener('mouseenter',()=>clearInterval(autoTimer));
	aboutSlider.addEventListener('mouseleave',restartAuto);
	goToSlide(0);
	restartAuto();
}
