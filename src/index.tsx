import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />)

// 如果启动webpack热更新，则会执行一下代码
if (typeof module !== 'undefined') {
  (module as any).hot.accept()
}