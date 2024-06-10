const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// adds event for before install
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block';
});

// handles click event for butinstall
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt = null;
    butInstall.style.display = 'none';
  }
});

// handles app installed event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed');
  deferredPrompt = null;
  console.log('PWA has been installed successfully!');
});
