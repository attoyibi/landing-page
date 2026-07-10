# English Breakfast Madiun - Landing Page Design Structure

## Overview
A modern, responsive landing page for English Breakfast Madiun business with multi-language support (English, German, Indonesian).

## Page Structure

### Header
- **Logo/Name**: "English Breakfast Madiun"
- **Navigation Links**: Home, Menu, Location, Contact
- **Language Switcher**: English, Deutsch, Indonesia
- **Style**: Fixed sticky header with backdrop blur effect
- **Mobile**: Hamburger menu for devices under 768px

### Hero Section
- **Main Title**: "Enjoy the Best English Breakfast in Madiun"
- **Subtitle**: "Authentic English breakfast flavors at affordable prices. Prepared by experienced chefs with quality ingredients."
- **Key Features**: 
  - Opening hours: 06:30 - 11:00
  - Starting price: Rp 15,000
  - Location: Lapangan Gulun
- **Call-to-Action Buttons**: 
  - View Menu (scrolls to menu section)
  - Order Now (links to WhatsApp)
- **Hero Image**: Featured food photo with floating card highlighting favorite menu item
- **Effects**: Parallax scrolling on background image
- **Color Scheme**: Purple gradient background with white text

### Menu Section
- **Title**: "Our Special Menu"
- **Subtitle**: "Enjoy various English breakfast options with authentic flavors"
- **Menu Grid**: 4-column responsive grid (1 column on mobile)
- **Menu Items**:
  1. **Complete Omelette** - Rp 15,000 (Fresh, Healthy)
  2. **Vegetable Salad** - Rp 15,000 (Organic, Nutritious)
  3. **Egg Sandwich** - Rp 15,000 (Warm, Popular)
  4. **Complete Package** - Rp 15,000 (Complete, Best)
- **Card Elements**:
  - Food image
  - Price overlay badge
  - Dish name
  - Description
  - Feature tags with icons
- **Interactions**: Hover effects with scale and lift animations
- **Color Scheme**: White background with blue accents

### About Us Section
- **Title**: "About Us"
- **Content**: 
  - Founder story (Dwi Suprapto)
  - Years of experience
  - Company values
- **Statistics** (Animated counters):
  - 5+ Years Experience
  - 25 Eggs Per Day
  - 100+ Daily Customers
- **Image**: Founder/chef photo
- **Layout**: 2-column grid (1 column on mobile)
- **Animations**: Counter animations triggered on scroll

### Location Section
- **Title**: "Location & Opening Hours"
- **Subtitle**: "Find us in a strategic location in the center of Madiun city"
- **Info Cards** (3-column layout):
  1. **Address**
     - Icon: Map marker
     - Text: Lapangan Gulun, Madiun City, East Java
  2. **Opening Hours**
     - Icon: Clock
     - Text: Every Day 06:30 - 11:00 WIB
  3. **Contact**
     - Icon: Phone
     - Text: WhatsApp 085743360490
- **Location Map**: Placeholder map area
- **Responsive**: Stacks vertically on mobile

### Contact Section
- **Title**: "Contact Us"
- **Subtitle**: "Ready to serve your orders and questions"
- **Contact Methods** (2 options):
  1. **WhatsApp**: 085743360490 (clickable link)
  2. **Instagram**: @sarapan_ala_bule_official (clickable link)
- **Call-to-Action Box**:
  - Text: "Order Now! Don't miss out! Limited menu daily."
  - Button: "Order via WhatsApp"
- **Interactions**: Ripple effect on method cards
- **Color Scheme**: Blue background with white text

### Footer
- **Content Sections** (3-column grid):
  1. **Business Info**
     - Business name and description
  2. **Contact Details**
     - Address, phone, hours
  3. **Follow Us**
     - Social media icons (Instagram, WhatsApp)
- **Bottom**: Copyright notice
- **Text**: "© 2025 English Breakfast Madiun. All rights reserved."
- **Responsive**: Single column on mobile

## Design System

### Color Palette
- **Primary Blue**: #2563eb (buttons, accents, active states)
- **Primary Gold**: #f59e0b (logo accent)
- **Background**: #ffffff (white)
- **Text Dark**: #333333 (primary text)
- **Text Light**: #666666 (secondary text)
- **Border**: #ddd / #ccc (light borders)
- **Purple Gradient**: #667eea to #764ba2 (hero section background)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Font Weights**: 300 (light), 400 (regular), 600 (semibold), 700 (bold)
- **Text Hierarchy**:
  - H1: 3.5rem (hero title)
  - H2: 2.5rem (section titles)
  - H3: 1.5rem (card titles)
  - Body: 1rem (regular text)
  - Small: 0.85rem (captions, labels)

### Spacing
- **Header Height**: 60px
- **Section Padding**: 60px vertical
- **Container Max Width**: 1200px
- **Grid Gap**: 2rem
- **Horizontal Padding**: 20px

### Animations
- **Scroll Animations**: Elements fade in and slide up as they enter viewport
- **Parallax**: Hero image moves slower than scroll speed
- **Counter**: Numbers animate from 0 to target value
- **Hover Effects**: Menu items scale and lift, buttons change color
- **Ripple Effect**: Contact method cards show ripple animation
- **Transitions**: 0.3s - 0.6s ease timing

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted spacing, 2-column grids)
- **Mobile**: Below 768px (hamburger menu, 1-column layout)
- **Small Mobile**: 480px (reduced font sizes)

## Internationalization (i18n)

### Multi-Language Support
- **English** (default) - en
- **German** (Deutsch) - de
- **Indonesian** (Bahasa Indonesia) - id

### Implementation
- **Translation Files**: `i18n.js` contains all 42 translation keys
- **HTML Attributes**: `data-i18n="key"` marks translatable elements
- **Language Manager**: `I18nManager` class handles language switching
- **Storage**: User's language preference saved in localStorage
- **Fallback**: English used if translation missing

### Language Switcher UI
- **Location**: Navigation header, right side
- **Buttons**: Three language buttons (English, Deutsch, Indonesia)
- **Active State**: Highlighted button shows current language
- **Mobile**: Moves to hamburger menu on devices under 768px

## User Interactions

### Navigation
- Smooth scroll to sections (0.3s duration)
- Active link indication
- Mobile hamburger menu toggle
- Auto-close menu when link clicked

### Language Switching
- Click language button to change language
- All content updates instantly
- Preference saved to localStorage
- Active button highlights current language

### Animations on Scroll
- Menu items fade in and slide up
- Info cards appear with delay
- Statistics counters start animating when visible

### Button Interactions
- Hover state changes background color
- Active state shows pressed effect
- Ripple effect on click (contact methods)
- Smooth transitions (0.3s)

### Mobile Experience
- Touch-friendly button sizes (50px minimum)
- Hamburger menu for navigation
- Stacked layout for better readability
- Simplified hero section layout

## Performance Considerations
- Lazy loading for images (IntersectionObserver)
- Debounced scroll events
- CSS transitions instead of animations where possible
- Minimal external dependencies (only Font Awesome CDN)
- ~10KB translation file loaded in memory

## Browser Support
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Files and Resources
- `index.html` - Main HTML with i18n attributes
- `style.css` - All styling and responsive design
- `script.js` - Interactive features and animation controllers
- `i18n.js` - Translation data and language manager
- `i18n-documentation.md` - Detailed i18n documentation
- `design_structure.md` - This file (design documentation)

---

**Version**: 2.0 (Multi-Language Enabled)  
**Last Updated**: 2025  
**Created for**: English Breakfast Madiun


