import { defineConfig } from 'vite'; 

import react from '@vitejs/plugin-react'; 

export default defineConfig({ 
  base: '/', // Базовый путь для приложения, если оно размещено в подпапке

  plugins: [react()], 

  server: { 

    historyApiFallback: true, // Это важно для React Router, чтобы правильно обрабатывать маршруты 

  }, 

}); 