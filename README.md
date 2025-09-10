# Sanket Nadkarni - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live site: [sanket1815.github.io](https://sanket1815.github.io)

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
project/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # UI components
│   ├── Navigation.tsx    # Navigation component
│   └── Footer.tsx        # Footer component
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sanket1815/sanket1815.github.io.git
cd sanket1815.github.io
```

2. Install dependencies:
```bash
cd project
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
cd project
npm run build
```

2. The static files will be generated in the `out` directory.

3. Deploy the `out` directory to GitHub Pages.

### Automatic Deployment

The project uses GitHub Actions for automatic deployment. Every push to the `main` branch will trigger a deployment.

## 📝 Features

- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- ♿ **Accessible**: Built with accessibility in mind
- 🔍 **SEO Optimized**: Meta tags and structured data for better search visibility
- 🌙 **Dark Theme**: Beautiful dark theme with custom color palette

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  navy: {
    // Navy color palette
  },
  green: {
    // Green accent colors
  },
  slate: {
    // Text colors
  }
}
```

### Content

Update the content in the respective component files:
- `components/sections/Hero.tsx` - Hero section
- `components/sections/About.tsx` - About section
- `components/sections/Experience.tsx` - Experience section
- `components/sections/Projects.tsx` - Projects section

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sanket1815/sanket1815.github.io/issues).

## 📧 Contact

Sanket Nadkarni - [@sanket1815](https://github.com/sanket1815)

Project Link: [https://github.com/sanket1815/sanket1815.github.io](https://github.com/sanket1815/sanket1815.github.io)
