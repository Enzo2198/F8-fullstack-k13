import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  }
  base: process.env.TODO_LIST || "/F8-fullstack-k13/tree/main/4.Homework-React"
})
