import mitt from 'mitt';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      mitt: mitt()
    }
  };
});
