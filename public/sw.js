let cacheData = 'appV1';

this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                "/static/js/bundle.js",
                "/manifest.json",
                "/favicon.ico",
                "/logo192.png",
                "index.html",
                "/",
                "/users"
            ])
        })
    )
})

this.addEventListener('fetch',(event)=>{
    console.log(event.request.url);
    if(event.request.url === "http://localhost:3000/logo192.png"){
        event.waitUntil(
            this.registration.showNotification("notify",{
                body: 'hello from notify',
                icon: "https://w7.pngwing.com/pngs/630/871/png-transparent-heart-eyes-emoji-emoji-heart-iphone-love-emoji-smiley-sticker-emoticon-thumbnail.png"
            })
        );
    }

    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result)=>{
                if(result) return result;
            })
        )
    }
})