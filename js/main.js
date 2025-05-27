let currentRole = '';

document.getElementById('alumnos-btn').addEventListener('click', () => {
  currentRole = 'alumno';
  showModal();
  setActive('alumnos-btn');
});

document.getElementById('docentes-btn').addEventListener('click', () => {
  currentRole = 'docente';
  showModal();
  setActive('docentes-btn');
});

function showModal() {
  document.getElementById('loginModal').style.display = 'flex';
}

function hideModal() {
  document.getElementById('loginModal').style.display = 'none';
}

function setActive(buttonId) {
  document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(buttonId).classList.add('active');
}

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (currentRole === 'alumno' && username === 'alberto.orrantia' && password === '017sv7h8') {
    window.location.href = 'alumno.html';
  } else if (currentRole === 'docente' && username === 'raul.orrantia@unies.com' && password === 'password') {
    window.location.href = 'docente.html';
  } else {
    alert('Credenciales incorrectas');
  }
}

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === 'juan.perez' && password === 'password') {
    window.location.href = 'alumno.html';
  } else if (username === 'adrian.castaneda' && password === 'password') {
    window.location.href = 'docente.html';
  } else if (username === 'jesus.castro@unies.com' && password === 'password') {
    window.location.href = 'admin.html';
  } else {
    alert('Credenciales incorrectas');
  }
}