import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import bgImage from '@/assets/peakpx.jpg'

// Set the background image
const root = document.documentElement;
root.style.setProperty('--bg-image', `url(${bgImage})`);

createRoot(document.getElementById("root")!).render(<App />);
