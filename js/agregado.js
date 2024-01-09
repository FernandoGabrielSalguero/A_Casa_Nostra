const referencias ={
    navItems: '.nav-item',
}

const itemsNav = document.querySelectorAll(referencias.navItems);

itemsNav.forEach(elem => {
    elem.addEventListener('click', (event) => {
        // Remover la clase 'active' de todos los elementos
        itemsNav.forEach(element => element.classList.remove('active'));
        
        // Agregar la clase 'active' al elemento li actual
        elem.classList.add('active');
    });
});