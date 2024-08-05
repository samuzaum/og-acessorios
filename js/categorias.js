$(document).ready(function() {
    $('#categorias').on('change', function() {
        var selectedCategory = $(this).val();
        console.log("Categoria selecionada: " + selectedCategory);

        $('.product').each(function() {
            var productCategory = $(this).data('category');
            console.log("Categoria do produto: " + productCategory);

            // Mostrar ou ocultar o produto com base na categoria selecionada
            if (selectedCategory === "" || selectedCategory === "all" || productCategory === selectedCategory) {
                $(this).show();
                console.log("Mostrando produto: " + productCategory);
            } else {
                $(this).hide();
                console.log("Ocultando produto: " + productCategory);
            }
        });
    });

    // Inicialmente, mostrar todos os produtos
    $('.product').show();
});
