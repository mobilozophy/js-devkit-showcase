# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Vue.js 3 showcase application demonstrating the integration and capabilities of Mobilozophy's JavaScript SDK. It serves as both documentation and live examples for developers integrating Mobilozophy's customer engagement tools into their websites.

## Tech Stack

- **Frontend Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **Routing**: Vue Router 4 (using hash-based routing)
- **State Management**: Vuex 4
- **Styling**: TailwindCSS 3.x with custom theme
- **UI Components**: Headless UI Vue, Heroicons
- **Code Highlighting**: PrismJS with vue-prism-component
- **Tour/Onboarding**: Intro.js

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Application Architecture

### Core Configuration
The application integrates with Mobilozophy's platform through a global configuration object (`window.mzcapiConfig`) that can be dynamically configured through the Settings modal. Configuration includes:
- Domain UUID for the Mobilozophy account
- API URL endpoint
- Verbose logging toggle
- Form-specific UUIDs and styling options

### State Management (Vuex Store)
- **mzcapiConfig**: Mobilozophy API configuration (domain, api_url, verboseLogging)
- **formConfig**: Form-specific settings (account_uuid, form_uuid, form_style)
- Configuration persists to localStorage and can be modified at runtime

### Routing Structure
Uses Vue Router with hash-based routing (`createWebHashHistory`) for GitHub Pages compatibility:
- `/` - Home page with overview
- `/getting-started` - Setup instructions
- `/about` - About Mobilozophy
- `/features/*` - Feature demonstrations (Forms, SMS, Coupons, Loyalty, Analytics, Events)
- `/use-cases/*` - Real-world use case examples (Hospitality Demo)

### Navigation System
- Responsive navigation with mobile hamburger menu
- Dropdown menus for Features and Use Cases sections
- Active route highlighting with visual indicators
- Modal-based settings configuration

## Mobilozophy Integration Patterns

### Script Loading
The application dynamically loads the Mobilozophy embed script:
```javascript
const script = document.createElement('script')
script.src = 'https://js-dev.mzcapi.com/embed.js'
document.head.appendChild(script)
```

### Event Handling
PostMessage-based communication system for embedded apps:
- Listens for `mz-embedded-app-event` message types
- Handles events: `mz-sample-event`, `mz-app-mounted`, `mz-form-submitted`, `mz-form-error`
- Extensive console logging with color-coded messages for debugging

### Form Integration
Forms are embedded using custom HTML attributes:
```html
<div class="mzcapi-form" 
     data-mz-account="account_uuid" 
     data-mz-form="form_uuid"
     data-mz-form-style="default">
</div>
```

### Page Refresh Handling
Router integration calls `window.mzcapi?.triggerPageRefresh()` after route changes to reinitialize Mobilozophy components.

## Styling and Design System

### TailwindCSS Configuration
Custom color palette:
- **Primary**: #F7941D (Orange)
- **Secondary**: #78278B (Purple) 
- **Accent**: #CBDB2A (Green)
- **Base**: #333333 (Dark Gray)

### Typography
- **Serif**: Playfair Display (headings)
- **Sans-serif**: Roboto (body text)

### Component Patterns
- Uses Headless UI for accessible components (Disclosure, Modal)
- Consistent hover states and focus management
- Responsive design with mobile-first approach

## Key Development Considerations

### Environment Variables
The application uses Vite environment variables with fallbacks:
- `VITE_MZCAPI_DOMAIN` - Mobilozophy domain UUID
- `VITE_MZCAPI_API_URL` - API endpoint URL
- `VITE_MZCAPI_VERBOSE_LOGGING` - Enable debug logging
- `VITE_FORM_ACCOUNT_UUID` - Default account UUID for forms
- `VITE_FORM_UUID` - Default form UUID
- `VITE_FORM_STYLE` - Default form styling

### Vue.js Patterns
- Uses Vue 3 Composition API with `<script setup>` syntax
- Computed properties for reactive Vuex state
- Watchers for configuration changes that trigger re-initialization
- Proper lifecycle management with `onMounted`

### Development vs Production
- Development includes conditional script loading based on hostname
- Production uses the standard Mobilozophy CDN embed script
- Extensive debug logging helps track integration issues

## Feature Demonstration Structure

Each feature view follows a consistent pattern:
1. **Overview**: Explains the feature's value proposition
2. **Requirements**: Lists technical prerequisites
3. **Basic Integration**: Shows HTML implementation
4. **Live Demo**: Functional example with current configuration
5. **Advanced Options**: Additional customization possibilities
6. **Code Examples**: Syntax-highlighted implementation code

## Testing and Debugging

The application includes comprehensive console logging with color-coded messages to track:
- Script loading success/failure
- Configuration updates
- Event handling from embedded components
- Router navigation and component reinitialization

### Common Debug Patterns
- `%c[Parent Page]` - Application-level events
- `%c[Parent App]` - Mobilozophy integration events
- Color coding: Green (success), Red (errors), Blue (info), Yellow (warnings)