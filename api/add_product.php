<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.html"); // Redireciona para a página de login se não estiver autenticado
    exit;
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adicionar Produto</title>
</head>
<body>
    <h1>Adicionar Novo Produto</h1>
    <form action="process_add_product.php" method="POST" enctype="multipart/form-data">
        <label for="name">Nome do Produto:</label>
        <input type="text" id="name" name="name" required>

        <label for="description">Descrição:</label>
        <textarea id="description" name="description" required></textarea>

        <label for="price">Preço:</label>
        <input type="number" id="price" name="price" step="0.01" required>

        <label for="image">Imagem:</label>
        <input type="file" id="image" name="image" accept="image/*" required>

        <button type="submit">Adicionar Produto</button>
    </form>

    <a href="admin_dashboard.php">Voltar ao Painel Administrativo</a>
</body>
</html>
