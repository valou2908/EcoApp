// Ce fichier permet d'afficher les notifications sur le panel Android/iOS
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    // Quand on clique sur la notif, ça ouvre le site
    event.waitUntil(
        clients.openWindow('forum.html')
    );
});
