<div align="center">
  <img alt="Logo" src="https://github.com/sanket1815/sanket1815.github.io/blob/main/app/favicon.ico" width="100" />
</div>
<h1 align="center">
  Sanket Nadkarni - Portfolio Website
</h1>
<p align="center">
  A modern, responsive portfolio website built with <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, and <a href="https://www.framer.com/motion/" target="_blank">Framer Motion</a>
</p>

<div align="center">
  <img alt="Demo" src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" />
  <img alt="Demo" src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" />
  <img alt="Demo" src="https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss" />
  <img alt="Demo" src="https://img.shields.io/badge/Framer_Motion-10-ff69b4?style=for-the-badge&logo=framer" />
</div>

## 🚀 Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🎨 **Tailwind CSS** for modern, responsive design
- ✨ **Framer Motion** for smooth animations and transitions
- 📱 **Fully Responsive** design that works on all devices
- 🌙 **Dark Theme** with navy blue color scheme
- 🎯 **SEO Optimized** with proper meta tags and structured data
- ⚡ **Fast Loading** with optimized images and code splitting
- 🔧 **TypeScript** for type safety and better development experience

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Icons:** Lucide React
- **Deployment:** Netlify
- **Development:** ESLint, Prettier

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sanket1815/sanket1815.github.io.git
   cd sanket1815.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3002](http://localhost:3002)

## 🚀 Building for Production

1. **Create a production build**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── Navigation.tsx    # Navigation component
│   └── Footer.tsx        # Footer component
├── lib/                  # Utility functions
│   ├── config.ts         # Site configuration
│   └── utils.ts          # Helper utilities
├── public/               # Static assets
└── tailwind.config.js    # Tailwind configuration
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Navy:** Primary background color
- **Green:** Accent color (#64ffda)
- **Slate:** Text colors in various shades

### Content
Update your personal information in:
- `lib/config.ts` - Contact info, social links, navigation
- `components/sections/` - Individual section content

### Styling
- Global styles: `app/globals.css`
- Component styles: Tailwind classes in components
- Custom animations: Framer Motion configurations

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out` (if using static export)
4. Deploy automatically on push to main branch

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run export  # For static export
```

## 📊 Performance

- **Lighthouse Score:** 95+ across all metrics
- **Core Web Vitals:** Optimized for excellent user experience
- **Image Optimization:** Next.js automatic image optimization
- **Code Splitting:** Automatic route-based code splitting

## 🎯 SEO Features

- Meta tags optimization
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Sitemap generation
- Robots.txt configuration

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Code Quality

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking
- **Husky** for git hooks (if configured)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sanket Nadkarni**
- Website: [sanket1815.github.io](https://sanket1815.github.io)
- LinkedIn: [sanket-nadkarni](https://www.linkedin.com/in/sanket-nadkarni-ba1bb9151)
- GitHub: [Sanket1815](https://github.com/Sanket1815)
- Email: snadkarn@odu.edu

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Lucide](https://lucide.dev/)
- Images from [Pexels](https://www.pexels.com/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  <p>Made with ❤️ by Sanket Nadkarni</p>
  <p>© 2024 All rights reserved</p>
</div>