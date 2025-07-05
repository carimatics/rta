# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Pokémon Legends: Arceus (PLA) task simulation application built with Next.js 15.3.4, React 19, TypeScript, and Tailwind CSS v4, using the modern App Router architecture with the `src/app` directory structure.

## Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests with Vitest
- `npm run storybook` - Start Storybook dev server on port 6006
- `npm run build-storybook` - Build Storybook for production

## Architecture

### Directory Structure
- `src/app/` - App Router directory with layout.tsx and globals.css
- `src/app/layout.tsx` - Root layout with Geist font configuration
- `src/app/pokemon/la/tasks-simulator/` - Main Tasks Simulator application page
- `src/lib/components/` - Shared UI components (Button, SearchInput)
- `src/lib/pokemon/la/` - Pokémon Legends: Arceus specific logic and components
- `src/lib/pokemon/la/tasks-simulator/` - Task simulator components and business logic
- `src/lib/pokemon/la/fixtures/` - Data fixtures including Pokédex, moves, tasks, etc.
- `src/lib/pokemon/la/dictionaries/` - Internationalization (i18n) support for English and Japanese
- `src/stories/` - Storybook stories for component documentation and testing
- `src/test/` - Test files and setup
- `public/pokemon/la/images/pokemon/` - Pokémon image assets (242 Pokémon images)

### Key Configuration
- **Node.js**: Version 22.17.0 (specified in `.node-version`)
- **TypeScript**: Strict mode enabled with `@/*` path alias pointing to `./src/*`
- **Fonts**: Geist Sans and Mono from Google Fonts, optimized with `next/font`
- **Styling**: Tailwind CSS v4 with custom CSS variables and dark mode support
- **State Management**: Jotai with Immer for immutable state updates
- **Testing**: Vitest with React Testing Library and Playwright browser testing
- **UI Documentation**: Storybook with Vite integration and accessibility testing

### Key Dependencies
- **State Management**: `jotai`, `jotai-immer`, `immer`
- **Styling**: `tailwindcss`, `tailwind-merge`, `tailwind-variants`
- **Testing**: `vitest`, `@testing-library/react`, `playwright`
- **Storybook**: `storybook`, `@storybook/nextjs-vite` with various addons

### Features
The application includes a comprehensive Pokémon Legends: Arceus task simulator with:
- Interactive task management system
- Pokémon filtering and search functionality
- Progress tracking and target point calculation
- Segment-based task organization
- Bilingual support (English/Japanese)
- Responsive UI components with Storybook documentation

### CSS Variables
The project uses Material 3 Design color scheme CSS custom properties defined in `src/app/globals.css`:
- Material 3 color tokens including `--color-primary`, `--color-secondary`, `--color-tertiary`
- Surface colors like `--color-surface`, `--color-surface-container` and variants
- Semantic colors such as `--color-error`, `--color-outline`
- Special Pokémon LA theme variant available via `[data-theme='pokemon-la']`

### Font Setup
Geist fonts are configured in `src/app/layout.tsx` with CSS variables:
- `--font-geist-sans` and `--font-geist-mono` are applied to the body element
- These variables are referenced in the Tailwind theme configuration

## Development Notes

- Follow the App Router patterns for new pages and layouts
- Use Tailwind CSS classes with tailwind-merge and tailwind-variants for component styling
- State management follows Jotai patterns with Immer for immutable updates
- All components should have corresponding Storybook stories
- Tests are written using Vitest with React Testing Library
- Maintain TypeScript strict mode practices
- The project includes extensive Pokémon data fixtures for PLA research tasks
