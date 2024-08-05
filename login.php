<?php
// Conectar ao banco de dados
$conn = new mysqli('localhost', 'root', '', 'stock');

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Pegar os dados do formulário
$email = $_POST['email'];
$senha = $_POST['senha'];

// Buscar o usuário no banco de dados
$sql = "SELECT id, senha, is_admin FROM usuarios WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Verificar a senha
    $row = $result->fetch_assoc();
    if (password_verify($senha, $row['senha'])) {
        // Iniciar a sessão
        session_start();
        $_SESSION['logged_in'] = true;

        // Verificar se o usuário é um administrador
        if ($row['is_admin'] == 1) {
            $_SESSION['admin_logged_in'] = true;
            echo "admin"; // Indica que é um admin
        } else {
            $_SESSION['admin_logged_in'] = false;
            echo "user"; // Indica que é um usuário normal
        }
    } else {
        echo "Senha incorreta.";
    }
} else {
    echo "Nenhum usuário encontrado com este email.";
}

// Fechar a conexão
$conn->close();
?>
