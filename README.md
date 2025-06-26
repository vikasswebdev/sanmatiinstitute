# E-Learning Platform

A modern e-learning platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 GitHub Pages Deployment

This project is configured for deployment on GitHub Pages. Follow these steps to deploy:

### Prerequisites

1. Make sure you have a GitHub account
2. Create a new repository on GitHub
3. Push your code to the repository

### Deployment Steps

1. **Update the homepage URL** in `package.json`:
   ```json
   "homepage": "https://[your-github-username].github.io/E-learning-1.0.0"
   ```
   Replace `[your-github-username]` with your actual GitHub username.

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set Source to "GitHub Actions"

3. **Push your code**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

4. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - You can monitor the deployment in the Actions tab of your repository
   - Your site will be available at: `https://[your-github-username].github.io/E-learning-1.0.0`

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js 13+ app directory
│   ├── components/          # React components
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── markdown/               # Blog posts (MDX)
└── .github/workflows/      # GitHub Actions
```

## 🎨 Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- 🌙 Dark/Light theme toggle
- 📝 Blog with MDX support
- 🔍 SEO optimized
- 🚀 Static export for GitHub Pages

## 📝 License

This project is licensed under the MIT License. 