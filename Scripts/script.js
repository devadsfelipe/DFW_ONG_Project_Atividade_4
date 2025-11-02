const appContainer = document.getElementById('app-container');
const navList = document.getElementById('main-nav-list'); 

function loadContent(route) {
    const template = (typeof Templates !== 'undefined' && Templates[route]) ? Templates[route] : null;

    if (template) {
        appContainer.innerHTML = template;
        
        history.pushState({ route }, '', `#${route}`);
        
        updateActiveLink(route);

        if (route === 'cadastro') {
            attachFormValidation();
        }
    } else {
        appContainer.innerHTML = '<main><h2>Página não encontrada!</h2></main>';
    }
}

function updateActiveLink(currentRoute) {
    const links = navList.querySelectorAll('a[data-route]');
    links.forEach(link => {
        if (link.dataset.route === currentRoute) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('click', (event) => {
    const targetLink = event.target.closest('a[data-route]');
    
    if (targetLink) {
        event.preventDefault();
        const route = targetLink.dataset.route;
        loadContent(route);
    }
});


window.addEventListener('popstate', (event) => {
    if (event.state && event.state.route) {
        loadContent(event.state.route);
    }
});

const validationRules = {
    required: value => value.trim() !== '',
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    cpf: value => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value), 
    cep: value => /^\d{5}-\d{3}$/.test(value) 
};

function attachFormValidation() {
    const form = document.getElementById('cadastro-form');
    if (!form) return; 

    let validationMessage = document.getElementById('validation-message');
    if (!validationMessage) {
        const alertHtml = `
            <div class="alert alert-error" id="validation-message" style="display:none;">
                **Aviso:** Por favor, corrija os erros nos campos marcados antes de enviar.
            </div>
        `;
        form.insertAdjacentHTML('beforebegin', alertHtml);
        validationMessage = document.getElementById('validation-message');
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const inputs = form.querySelectorAll('input[data-validation]');
        let isFormValid = true;

        inputs.forEach(input => {
            if (!validateInput(input)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            validationMessage.style.display = 'none';
            alert('✅ Cadastro enviado com sucesso! (Simulação)'); 
            form.reset();
        } else {
            validationMessage.style.display = 'block';
            validationMessage.scrollIntoView({ behavior: 'smooth' }); 
        }
    });
    
    form.addEventListener('blur', function(event) {
        if (event.target.matches('input[data-validation]')) {
            validateInput(event.target);
        }
    }, true);
}

function validateInput(input) {
    const validationAttr = input.dataset.validation || (input.required ? 'required' : '');
    
    if (!validationAttr) return true; 

    const rules = validationAttr.split(/\s*,\s*/);
    let isValid = true;

    rules.forEach(rule => {
        if (validationRules[rule] && !validationRules[rule](input.value)) {
            isValid = false;
        }
    });

    if (isValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }

    return isValid;
}

function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }

    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDark.matches) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    toggleButton.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
}

function initializeSPA() {
    setupThemeToggle();
    
    const initialRoute = window.location.hash.substring(1) || 'inicio';
    loadContent(initialRoute);
}

document.addEventListener('DOMContentLoaded', initializeSPA);