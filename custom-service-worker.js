// 這是 Workbox 專用的快取清單佔位符，這一行不能放錯
self.__WB_MANIFEST;

// 可選的：你也可以監聽一些基本事件
self.addEventListener('install', (event) => {
  console.log('✅ Service Worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('⚡ Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // 這裡如果不寫，預設就是由網路處理，不影響基本快取
});
