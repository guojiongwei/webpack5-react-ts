import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />)

if (process.env.NODE_ENV === 'development' && typeof module !== 'undefined') {
  // 当App.tsx内部依赖代码变化，就重新渲染App.tsx 
  (module as any).hot.accept("./App.tsx", () => {
    root.render(<App />)
  })
}