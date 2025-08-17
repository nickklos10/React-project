# Nicholas Klos - Forward Deployed Engineer Portfolio

A professional portfolio website for Nicholas Klos, Forward Deployed Engineer specializing in Palantir Technologies, featuring an interactive WebGL terminal background using React, TypeScript, and Tailwind CSS.

## Features

🌐 **WebGL Terminal Background**: Animated matrix-style terminal effect using OGL
🎮 **Interactive**: Mouse movement creates ripple effects on the terminal
✨ **Professional Portfolio**: Comprehensive FDE career showcase
🔵 **Palantir-Focused**: Specialized content for Foundry, Gotham, and Apollo platforms
📱 **Responsive Design**: Works on desktop and mobile devices
⚡ **Modern Stack**: React 18 + TypeScript + Vite + Tailwind CSS
🚀 **Smooth Navigation**: Single-page application with smooth scrolling sections
💼 **Professional Theme**: Blue color scheme and technical terminology

## Terminal Effects

- **Scanlines**: Retro CRT monitor effect
- **Glitch**: Digital distortion and displacement
- **Mouse Interaction**: Cursor creates ripples in the terminal matrix
- **Chromatic Aberration**: Color separation effect
- **Curvature**: Simulates curved CRT screen
- **Noise & Flicker**: Authentic terminal imperfections

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to the local development URL (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customizing the Terminal

The `FaultyTerminal` component accepts many props for customization:

```typescript
<FaultyTerminal 
  tint="#00ff41"           // Terminal color
  brightness={0.8}         // Overall brightness
  scale={2}               // Zoom level
  gridMul={[3, 2]}        // Grid density
  glitchAmount={1.2}      // Glitch intensity
  scanlineIntensity={0.4} // Scanline visibility
  mouseReact={true}       // Enable mouse interaction
  mouseStrength={0.3}     // Mouse effect strength
  curvature={0.2}         // Screen curvature
  pageLoadAnimation={true} // Progressive reveal
/>
```

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **OGL** - Lightweight WebGL library
- **Custom Shaders** - GLSL fragment and vertex shaders

## Browser Support

This website uses WebGL, which is supported by all modern browsers. For the best experience, use:
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## License

MIT License - feel free to use this for your own projects!
