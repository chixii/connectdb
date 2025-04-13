// 官方建議模板
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
  );
  
  export function register() {
    if ('serviceWorker' in navigator) {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
      if (isLocalhost) {
        // 本地：檢查 service worker 是否存在
        checkValidServiceWorker(swUrl);
      } else {
        // 線上：直接註冊
        registerValidSW(swUrl);
      }
    }
  }
  
  function registerValidSW(swUrl: string) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('✅ Service worker registered:', registration);
      })
      .catch((error) => {
        console.error('❌ Error during service worker registration:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl: string) {
    fetch(swUrl)
      .then((response) => {
        if (response.status === 404 || response.headers.get('content-type')?.indexOf('javascript') === -1) {
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          registerValidSW(swUrl);
        }
      })
      .catch(() => {
        console.log('🌐 No internet connection. App is running in offline mode.');
      });
  }
  