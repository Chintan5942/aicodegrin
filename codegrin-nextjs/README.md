# CodeGrin - Next.js SaaS Platform

A modern, responsive SaaS platform built with Next.js, TypeScript, and Bootstrap. This project is a conversion of an HTML template into a fully functional Next.js application.

## Features

- 🚀 **Next.js 14** with App Router
- 📱 **Responsive Design** with Bootstrap 5
- 🎨 **Modern UI/UX** with custom animations
- 🌙 **Dark/Light Theme** support
- 🔒 **Authentication Pages** (Sign In/Sign Up)
- 📊 **Dashboard Components**
- 🎯 **SEO Optimized**
- ⚡ **Performance Optimized**
- 🛠️ **TypeScript** for type safety
- 🎭 **GSAP Animations** ready
- 📦 **Component-based Architecture**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd codegrin-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── sign-in/          # Sign in page
│   ├── sign-up/          # Sign up page
│   └── styles/           # Custom CSS modules
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── ui/              # UI components
│   └── providers/        # Context providers
└── public/               # Static assets
```

## Key Components

### Layout Components
- **Header**: Navigation with theme toggle
- **Footer**: Links and social media

### Section Components
- **Hero**: Landing page hero section
- **Features**: Feature showcase
- **About**: About section with stats
- **Testimonials**: Customer testimonials
- **Pricing**: Pricing plans
- **CTA**: Call-to-action section

### UI Components
- **Preloader**: Loading animation
- **ThemeProvider**: Dark/light theme management

## Styling

The project uses a combination of:
- **Bootstrap 5** for layout and components
- **Custom CSS** for unique styling
- **CSS Variables** for theming
- **Responsive Design** principles

## Theme System

The application supports both light and dark themes:
- Automatic detection of user preference
- Manual theme toggle
- Persistent theme selection
- Bootstrap theme integration

## Performance Features

- **Image Optimization** with Next.js Image component
- **Font Optimization** with Next.js Font optimization
- **Code Splitting** with dynamic imports
- **SEO Optimization** with metadata API
- **Responsive Images** for different screen sizes

## Animation System

Ready for GSAP animations with:
- Scroll-triggered animations
- Intersection Observer for performance
- CSS-based fallbacks
- Reduced motion support

## Deployment

The project is ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Export your component as default

### Adding New Components
1. Create component in appropriate folder
2. Follow the existing naming convention
3. Export from index file if needed

### Styling Customization
- Modify CSS variables in `globals.css`
- Update Bootstrap variables in `bootstrap-custom.css`
- Add component-specific styles in `components.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

Built with ❤️ by the CodeGrin team