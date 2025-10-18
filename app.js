// Aquí debe contener la función guardarNota(), el cuál va a contener al final un alert que diga
// que la nota fue guardada.
function guardarNota() {
    const texto = document.getElementById('nota').value;
    localStorage.setItem('nota', texto);
    alert('¡Nota guardada!');
}
// Seguidamente, vas a “cargar la nota” al iniciar tu aplicación web.
document.addEventListener('DOMContentLoaded', () => {
    const texto = localStorage.getItem('nota');
    if (texto) {
        document.getElementById('nota').value = texto;
    }
});
// Por último, vamos a “registrar” todos estos movimientos realizados en el Service Worker.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(() => console.log('Service Worker registrado'))
        .catch(error => console.error('Fallo en el registro', error));
}