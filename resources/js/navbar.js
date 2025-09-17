function loadNavbar() {
    const container = document.getElementById('navbar-container');

    // Create nav element
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark'; // match your Bootstrap theme

    const divContainer = document.createElement('div');
    divContainer.className = 'container';

    // Navbar brand
    const brand = document.createElement('a');
    brand.className = 'navbar-brand';
    brand.href = 'index.html';
    brand.textContent = 'My Site';

    // Navbar toggler (for mobile menu)
    const button = document.createElement('button');
    button.className = 'navbar-toggler';
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', '#navbarsMain');
    button.setAttribute('aria-controls', 'navbarsMain');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Toggle navigation');

    const span = document.createElement('span');
    span.className = 'navbar-toggler-icon';
    button.appendChild(span);

    // Collapsible menu
    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarsMain';

    const ul = document.createElement('ul');
    ul.className = 'navbar-nav ms-auto mb-2 mb-lg-0';

    // Nav items
    const navItems = [
        { text: 'Home', href: 'index.html' },
        { text: 'Fav Athletes', href: 'favathletes.html' }
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = item.href;
        a.textContent = item.text;

        li.appendChild(a);
        ul.appendChild(li);
    });

    collapseDiv.appendChild(ul);
    divContainer.appendChild(brand);
    divContainer.appendChild(button);
    divContainer.appendChild(collapseDiv);
    nav.appendChild(divContainer);

    container.appendChild(nav);
}