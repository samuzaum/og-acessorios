<?php
// Credenciais do Banco de Dados Supabase
$host = 'aws-0-sa-east-1.pooler.supabase.com';
$port = '6543';
$dbname = 'postgres';
$user = 'postgres.zbxacixcsuymskeircge';
$password = 'samuzaumog!'; // Substitua pela sua senha

try {
    // Criar a conexão PDO
    $dsn = "pgsql:host=$host;port=$port;dbname=$dbname";
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Pegar os dados do formulário
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Buscar o usuário no banco de dados
    $stmt = $pdo->prepare("SELECT id, senha, is_admin FROM usuarios WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        // Verificar a senha
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

} catch (PDOException $e) {
    echo 'Erro de conexão: ' . $e->getMessage();
}
?>
