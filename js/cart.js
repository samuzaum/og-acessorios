// Array para armazenar produtos no carrinho
let cart = [];

// Função para adicionar produto ao carrinho
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    saveCart();
}

// Função para atualizar o conteúdo do carrinho
function updateCart() {
    const cartItemsList = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cartItemsList) {
        cartItemsList.innerHTML = ''; // Limpa a lista existente
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} x ${item.quantity}`;
            
            // Adiciona botão de remover
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => removeFromCart(item.id));
            li.appendChild(removeButton);

            cartItemsList.appendChild(li);

            // Atualiza o total
            total += parseFloat(item.price.slice(1)) * item.quantity; // Remove o símbolo $ e converte para float
        });

        // Atualiza o total no modal
        if (cartTotal) {
            cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        }
    }
}

// Função para remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCart();
}

// Função para salvar o carrinho no localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Função para carregar o carrinho do localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Função para mostrar o modal do carrinho
function showCartModal() {
    document.getElementById('cartModal').style.display = 'block';
}

// Função para esconder o modal do carrinho
function hideCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

// Adicionar eventos
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar evento ao botão de adicionar ao carrinho
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const productSection = this.closest('.product');
            const product = {
                id: productSection.getAttribute('data-id'),
                name: productSection.querySelector('h2').textContent,
                price: productSection.querySelector('.price').textContent
            };
            addToCart(product);
        });
    });

    // Adicionar evento ao botão de fechar do modal
    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', hideCartModal);
    }

    // Adicionar evento ao botão do carrinho para mostrar o modal
    const cartButton = document.getElementById('cartButton');
    if (cartButton) {
        cartButton.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            showCartModal();
        });
    }

    // Carregar o carrinho ao carregar a página
    loadCart();
    // Adicionar evento ao botão de checkout para redirecionar para a página de checkout
document.getElementById('checkout').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    
    // Redireciona para a página de checkout
    window.location.href = 'checkout.html';
});
});
