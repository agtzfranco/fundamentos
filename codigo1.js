const listaUsuarios = [
    { 
        username: "admin",
        password: "admin.123",
        nivel: 1  
    },
    { 
        username: "supervisor",
        password: "super.123",
        nivel: 2  
    },
    { 
        username: "captura",
        password: "cap.123",
        nivel: 3  
    }
];

localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function logo() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const mensajeError = document.getElementById('mensaje-error');

    if (!username || !password) {
        mensajeError.textContent = "Por favor, complete todos los campos";
        mensajeError.style.display = 'block';
        return;
    }

    const usuarioValido = usuarios.find(user => 
        user.username === username && user.password === password
    );

    if (!usuarioValido) {
        mensajeError.textContent = "Usuario y/o contraseña incorrectos";
        mensajeError.style.display = 'block';
        return;
    }

    switch(usuarioValido.nivel) {
        case 1:
            window.location.href = "admin.html";
            break;
        case 2:
            window.location.href = "supervisor.html";
            break;
        case 3:
            window.location.href = "capturadedatos.html";
            break;
        default:
            mensajeError.textContent = "Nivel de acceso no válido";
            mensajeError.style.display = 'block';
    }
}

document.getElementById('username').addEventListener('input', () => {
    document.getElementById('mensaje-error').style.display = 'none';
});

document.getElementById('password').addEventListener('input', () => {
    document.getElementById('mensaje-error').style.display = 'none';
});

