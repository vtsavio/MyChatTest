# Chat Interface with Dify Integration

## Development Environment Setup for Windows 11

### Prerequisites

1. **Install Node.js**
   - Download Node.js LTS (18.x or later) from [nodejs.org](https://nodejs.org)
   - Run the installer and follow the installation wizard
   - Verify installation by opening Command Prompt and running:
     ```bash
     node --version
     npm --version
     ```

2. **Install Git**
   - Download Git from [git-scm.com](https://git-scm.com/download/win)
   - Run the installer with default options
   - Verify installation:
     ```bash
     git --version
     ```

3. **Install Visual Studio Code (Recommended)**
   - Download from [code.visualstudio.com](https://code.visualstudio.com)
   - Run the installer
   - Recommended extensions:
     - ESLint
     - Prettier
     - TypeScript and JavaScript Language Features

### Project Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Copy the `.env.example` file to `.env`:
     ```bash
     copy .env.example .env
     ```
   - Open `.env` and update the following variables:
     ```
     VITE_DIFY_BASE_URL=https://api.dify.ai/v1
     VITE_DIFY_API_KEY=your_api_key_here
     ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Project Structure

```
src/
├── components/     # React components
│   ├── chat/       # Chat interface components
│   ├── theme/      # Theme components
│   └── ui/         # UI components (shadcn/ui)
├── lib/           # Utility functions
└── types/         # TypeScript type definitions
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Troubleshooting

1. **Port Already in Use**
   - Open Command Prompt as Administrator
   - Find the process:
     ```bash
     netstat -ano | findstr :5173
     ```
   - Kill the process:
     ```bash
     taskkill /PID <PID> /F
     ```

2. **Node Modules Issues**
   - Delete node_modules and package-lock.json:
     ```bash
     rmdir /s /q node_modules
     del package-lock.json
     ```
   - Reinstall dependencies:
     ```bash
     npm install
     ```

3. **Environment Variables Not Loading**
   - Ensure `.env` file is in project root
   - Restart development server
   - Verify variable names start with `VITE_`

### Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
