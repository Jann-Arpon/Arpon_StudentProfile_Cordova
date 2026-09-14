document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Cordova is ready.');
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.innerText = new Date().getFullYear();
    }
}
