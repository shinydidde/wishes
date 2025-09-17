# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML-based wishes/greeting card website project that creates interactive birthday cards and portfolio pages. The project consists of:

- Interactive birthday cards with 3D flip animations
- Portfolio/resume pages
- Custom animations, confetti effects, and background music
- Responsive design for mobile and desktop

## Architecture

### File Structure
- **index.html** - Main birthday card page for Vishnu with 3D card flip animation, confetti effects, slideshow, and background music
- **sindhu.html** - Professional portfolio/resume page for Sindhuri Alugolu (soft skills trainer)
- **stylesheet.css** - Shared CSS styles for card animations, responsive design, and heart falling effects
- **effect.js** - JavaScript for card flip animations and heart falling effects
- **images/** - Contains profile photos and card images (PNG format)
- **Audio files** - bdy.mp3 (birthday music), friends.mp3 (alternative audio)
- **Fonts** - Custom fonts: Hearth Stone.ttf, FontleroyBrownNF.ttf

### Key Components

1. **3D Card Animation System** (`index.html` + `stylesheet.css` + `effect.js`)
   - Uses CSS transforms and transitions for 3D flip effects
   - Card states: closed → open-half → open-fully
   - Timer-based animations with 1-second delays

2. **Visual Effects**
   - Canvas-based confetti animation using confetti.js library
   - Falling hearts animation with random sizing and positioning
   - Floating heart GIF animation
   - Background slideshow with auto-advance and manual navigation

3. **Responsive Design**
   - Mobile-first approach with specific breakpoints at 768px and 480px
   - Adaptive font sizes, spacing, and layout adjustments
   - Touch-friendly interface elements

## Development Workflow

### Local Development
This is a static website - simply open HTML files in a web browser:
```bash
# Open main birthday card
open index.html

# Open portfolio page
open sindhu.html
```

### File Serving (Optional)
For testing features that require a web server (like audio autoplay):
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server .
```

### Git Workflow
The project uses standard git operations:
```bash
git add .
git commit -m "message"
git push origin master
```

## Known Issues & Limitations

1. **effect.js:20** - Typo: `clearTimerout` should be `clearTimeout`
2. **Audio autoplay** - Requires user interaction on modern browsers
3. **jQuery dependency** - effect.js uses jQuery syntax (`$()`) but no jQuery library is loaded
4. **Mobile optimization** - Some animations may perform poorly on older mobile devices

## Asset Management

- **Images**: All photos should be optimized for web (PNG format preferred)
- **Audio**: MP3 format, keep file sizes reasonable for web loading
- **Fonts**: Custom TTF fonts are locally hosted
- **External dependencies**: Minimal use (only confetti.js CDN)

## Future Enhancement Considerations

- Replace jQuery-dependent code in effect.js with vanilla JavaScript
- Add lazy loading for images
- Implement proper error handling for audio playback
- Consider adding image optimization pipeline
- Add proper TypeScript or JSDoc documentation