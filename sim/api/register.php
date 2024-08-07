<?php
// Conectar ao banco de dados
$conn = new mysqli('localhost', 'root', '', 'e_commerce');

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Pegar os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

// Hash da senha
$hashedSenha = password_hash($senha, PASSWORD_BCRYPT);

// Inserir os dados no banco de dados
$sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$hashedSenha')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => $conn->error]);
}

// Fechar a conexão
$conn->close();
?>
