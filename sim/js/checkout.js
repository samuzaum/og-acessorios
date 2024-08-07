document.addEventListener('DOMContentLoaded', () => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsList = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');
    
    function updateOrderSummary() {
        orderItemsList.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement('li');
            
            // Adiciona a imagem
            const img = document.createElement('img');
            img.src = `images/product${item.id}.jpg`; // Ajuste o caminho da imagem aqui
            img.alt = `Imagem do ${item.name}`;
            img.style.width = '100px'; // Ajuste o tamanho da imagem conforme necessário
            img.style.height = 'auto';

            const itemInfo = document.createElement('div');
            itemInfo.classList.add('item-info');
            itemInfo.textContent = `${item.name} - ${item.price} x ${item.quantity}`;

            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-button');
            removeButton.textContent = 'Remover';
            removeButton.dataset.id = item.id;
            removeButton.addEventListener('click', () => removeItem(item.id));

            li.appendChild(img);
            li.appendChild(itemInfo);
            li.appendChild(removeButton);
            orderItemsList.appendChild(li);

            const price = parseFloat(item.price.replace('$', '').replace(',', ''));
            const quantity = parseInt(item.quantity, 10);

            total += price * quantity;
            console.log(`Item: ${item.name}, Price: ${price}, Quantity: ${quantity}, Subtotal: ${price * quantity}`);
        });

        console.log(`Total: ${total}`);
        orderTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    function removeItem(id) {
        cartItems = cartItems.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateOrderSummary();
    }

    updateOrderSummary();
});
