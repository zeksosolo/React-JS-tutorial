import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        components: 'components.html',
        contactlatihan: 'contactlatihan.html',
        task: 'task.html',
        counter: 'counter.html',
        note: 'note.html',
        profile: 'profile.html',
        timer : 'timer.html',
        guestbook : 'guestbook.html',
        product : 'product.html',
        product2 : 'product2.html',
        online : 'online.html'
      },
    },
  },
})
