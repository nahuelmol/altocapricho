const showCatalog = () => {
	var nos = document.getElementById('nosotros-content')
	var promos = document.getElementById('promos-content')
	var home = document.getElementById('home-content')
	var contacto = document.getElementById('contacto')

	nos.classList.add('to_null');
	promos.classList.add('to_null');
	home.classList.add('to_null');
	contacot.classList.add('to_null');
}

document.getElementById('catalog').addEventListener(showCatalog)