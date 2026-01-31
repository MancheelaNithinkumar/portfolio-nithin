# Student Portfolio - React

A modern, responsive student portfolio website built with React and Vite.

## Features

- 🎨 Modern gradient design with purple/blue color scheme
- 📱 Fully responsive for all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 📊 Interactive skill progress bars
- 📝 Contact form
- 🎯 Smooth scrolling navigation
- 💼 Project showcase gallery
- 📚 Education timeline
- 🔗 Social media integration

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Your name
   - Your tagline
   - Social media links

2. **About Section** (`src/components/About.jsx`):
   - Profile picture (place in `/public/images/profile.jpg`)
   - About text
   - Statistics
   - Resume link

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust skill levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your projects
   - Project images (place in `/public/images/`)
   - Project links

5. **Education Section** (`src/components/Education.jsx`):
   - Your education details
   - Certifications

6. **Contact Section** (`src/components/Contact.jsx`):
   - Email address
   - Phone number
   - Location
   - Social media links

### Images

Place your images in the `/public/images/` directory:
- `profile.jpg` - Your profile picture
- `project1.jpg` through `project6.jpg` - Project screenshots

### Colors

To change the color scheme, edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... */
}
```

## Technologies Used

- React 18
- Vite
- React Icons
- CSS3 with CSS Variables
- Modern ES6+ JavaScript

## Project Structure

```
├── public/
│   └── images/          # Project and profile images
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   ├── App.css         # App styles
│   └── index.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT License - feel free to use this template for your own portfolio!
