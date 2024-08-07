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
    <title>Painel Administrativo</title>
    <link rel="stylesheet" href="adminstyles.css"> <!-- Seu CSS aqui -->
</head>
<body>
    <h1>Painel Administrativo</h1>
    <a href="add_product.php">Adicionar Novo Produto</a>
    <a href="logout.php">Sair</a>
    <!-- Conteúdo do painel administrativo -->
</body>
</html>
