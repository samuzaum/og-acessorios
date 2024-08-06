document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');

    if (container && signUpButton && signInButton) {
        signUpButton.addEventListener('click', function () {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', function () {
            container.classList.remove('right-panel-active');
        });
    }

    // Script para mostrar/ocultar a senha
    const passwordField = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword');
    
    if (passwordField && togglePasswordButton) {
        togglePasswordButton.addEventListener('click', function () {
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                togglePasswordButton.textContent = 'Ocultar';
            } else {
                passwordField.type = 'password';
                togglePasswordButton.textContent = 'Mostrar';
            }
        });
    }
});

// AJAX para Login
$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault(); // Prevenir o envio padrão do formulário
        $.ajax({
            url: '/api/login.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                if (response === "admin") {
                    window.location.href = '/api/admin_dashboard.php'; // Redirecionar para admin_dashboard.php
                } else if (response === "user") {
                    window.location.href = 'home.html'; // Redirecionar para home.html
                } else {
                    alert(response); // Mostrar a resposta do PHP em um alert
                }
            },
            error: function(xhr, status, error) {
                alert('Erro ao realizar o login.'); // Mostrar mensagem de erro
            }
        });
    });

    // AJAX para Cadastro
    $('#registerForm').on('submit', function(e) {
        e.preventDefault(); // Prevenir o envio padrão do formulário
        $.ajax({
            url: '/api/register.php',
            type: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                if (response.status === 'success') {
                    alert('Cadastro realizado com sucesso!');
                    $('#registerForm')[0].reset(); // Limpar o formulário
                } else {
                    alert('Erro: ' + response.message);
                }
            },
            error: function(xhr, status, error) {
                alert('Erro ao realizar o cadastro.'); // Mostrar mensagem de erro
            }
        });
    });
});
