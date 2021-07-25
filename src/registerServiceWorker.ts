/* tslint:disable:no-console */

import { register } from 'register-service-worker';
import { version } from 'vue/types/umd';

const VERSION = 1;

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB',
      );
      if ((!localStorage.getItem('version')) || Number(localStorage.getItem('version')) < Number(VERSION)) {
        caches.keys().then((names) => {
          for (const name of names) {
            caches.delete(name);
          }
        });
        console.log('cache deleted!');
      }
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updated() {
      if ((!localStorage.getItem('version')) || Number(localStorage.getItem('version')) < VERSION) {
        localStorage.setItem('version', String(VERSION));
        location.reload();
        console.log('New version added!');
      }
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
