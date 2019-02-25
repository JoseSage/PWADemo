if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('js/sw.js')
        .then( registration => {
           console.log(registration)
           console.log('Service Worker registrado con éxito',
           registration.scope)
        })
        .catch( err => console.log('Falló el registro del Service Worker',
        err))
    })
}