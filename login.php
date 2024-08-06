<?php
// Credenciais do Supabase
$supabaseUrl = 'https://zbxacixcsuymskeircge.supabase.co'; // Substitua pelo seu Supabase URL
$supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpieGFjaXhjc3V5bXNrZWlyY2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4ODc0NDQsImV4cCI6MjAzODQ2MzQ0NH0._ETAS49Pr4Q_TSykIcNtv-NSdO5ROzHZ00NbkzCtLJk'; // Substitua pela sua chave de API

// Pegar os dados do formulário
$email = $_POST['email'];
$senha = $_POST['senha'];

// Configurar a requisição cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://zbxacixcsuymskeircge.supabase.co/rest/v1/usuarios?email=eq.$email");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "apikey: $supabaseKey",
    "Authorization: Bearer $supabaseKey",
    "Content-Type: application/json"
]);

// Executar a requisição e pegar a resposta
$response = curl_exec($ch);
curl_close($ch);

// Converter a resposta JSON em array PHP
$result = json_decode($response, true);

if (count($result) > 0) {
    $row = $result[0]; // Assume que o email é único e pegamos o primeiro resultado

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
?>
