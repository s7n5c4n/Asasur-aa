// Datos de ejemplo para los productos (puedes reemplazarlos con tus propios datos)
const products = [
    { id: 1, name: 'Anticuchos', price: 1800, image: '../img/IMG_5178.png' },
    { id: 2, name: 'parillada', price: 22000, image: '../img/IMG_5169.png' },
    { id: 3, name: 'Abastero', price: 5980, image: '../img/abastero.png' },
    { id: 4, name: 'Asado Carnicero', price: 5980, image: '../img/Asado-carnicero.png' },
    { id: 5, name: 'Asiento', price: 7260, image: '../img/asiento.png' },
    { id: 6, name: 'Cazuela Popular', price: 1580, image: '../img/cazuela-popular.png' },
    { id: 7, name: 'Choclillo', price: 6180, image: '../img/choclillo.png' },
    { id: 8, name: 'sobrecostilla', price: 5980, image: '../img/costillar.png' },
    { id: 9, name: 'Lomo Liso', price: 7980, image: '../img/lomo-liso.png' },
    { id: 10, name: 'Pechuga Entera', price: 2790, image: '../img/pechuga-entera.png' },
    { id: 11, name: 'Posta Paleta', price: 6280, image: '../img/posta-paleta.png' },
    { id: 12, name: 'Posta Negra', price: 6780, image: '../img/postaNEgra.png' },
    { id: 13, name: 'Posta Rosada', price: 6690, image: '../img/postaRosada.png' },
    { id: 14, name: 'Prietas', price: 3500, image: '../img/Prietas.png' },
    { id: 15, name: 'Pulpa', price: 3760, image: '../img/pulpa.png' },
    { id: 16, name: 'Trutro', price: 2460, image: '../img/trutro.png' },
    { id: 17, name: 'Manteca', price: 1500, image: '../img/IMG_5159.png' },
    // Agrega más productos aquí
];

// Función para mostrar los productos en la página
function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.style.width = '100%';

        const productName = document.createElement('h2');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productsSection.appendChild(productCard);
    });
}
// Función para enviar el formulario de contacto
function handleFormSubmit(event) {
    event.preventDefault();
    const contactForm = document.getElementById('contact-form');
    const formData = new FormData(contactForm);

    // Puedes agregar aquí el código para enviar los datos a un servidor o hacer alguna otra acción

    // Mostrar notificación de envío exitoso
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
}

// Agregar el evento de envío del formulario
const form = document.getElementById('contact-form');
form.addEventListener('submit', handleFormSubmit);

// Ejecutar la función para mostrar los productos cuando la página se cargue completamente
window.addEventListener('load', displayProducts);
function guardarEnLocalStorage(clave, valor) {
    try {
        localStorage.setItem(clave, valor);
        console.log(`Se ha guardado "${valor}" en el Local Storage con la clave "${clave}".`);
    } catch (error) {
        console.error('Error al guardar en el Local Storage:', error);
    }
}   