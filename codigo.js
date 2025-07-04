lista=[{ 
      username:"fernando",
      password:"fer.123",
      nivel:1  
    },
    {
      username:"raquel",
      password:"raq.123",
      nivel:2  
      }
  ]
localStorage.setItem("datos",JSON.stringify(lista));
usuarios=JSON.parse(localStorage.getItem("datos"));
console.log(typeof(usuarios));


function logo() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const validUser = usuarios.find(user => user.username === username && user.password === password);
  
  if (!validUser) {
    return alert('Usuario y/o contraseña incorrectos!');
  }
  

  switch(validUser.nivel) {
    case 1:
      window.location.href = "admin.html";
      break;
    case 2:
      window.location.href = "usuario.html"; 
      break;
    default:
      window.location.href = "portal_default.html"; // Portal por defecto
  }
}

