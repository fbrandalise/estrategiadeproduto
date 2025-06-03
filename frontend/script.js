function scrollToSignUp() {
    document.getElementById('login').scrollIntoView({ behavior: 'smooth' });
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Bem-vindo, ${email}!`);
    // Aqui você poderia integrar com sua API de autenticação
}
