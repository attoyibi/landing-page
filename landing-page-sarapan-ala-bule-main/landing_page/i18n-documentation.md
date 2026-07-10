# Internationalization (i18n) Documentation

## Overview

This project uses a custom internationalization (i18n) and localization (l10n) system that allows the website to display content in multiple languages: English (default), German (Deutsch), and Indonesian (Bahasa Indonesia).

## How the i18n System Works

### 1. **Translation Files** (`i18n.js`)

The `i18n.js` file contains all translations organized by language code:

```javascript
const translations = {
    en: { /* English translations */ },
    de: { /* German translations */ },
    id: { /* Indonesian translations */ }
};
```

Each translation object contains key-value pairs:
```javascript
{
    nav_home: 'Home',
    hero_title: 'Enjoy the Best English Breakfast in Madiun',
    // ... more keys
}
```

### 2. **HTML Markup** (Using `data-i18n` Attributes)

Content in HTML files is marked with `data-i18n` attributes instead of hardcoded text:

```html
<!-- Instead of: <h1>Enjoy the Best English Breakfast in Madiun</h1> -->
<!-- Use: -->
<h1 data-i18n="hero_title">Enjoy the Best English Breakfast in Madiun</h1>
```

The second parameter is a fallback text that shows if JavaScript is disabled.

### 3. **i18n Manager Class**

The `I18nManager` class handles all language management:

```javascript
class I18nManager {
    constructor() {
        // Initializes with stored language or default 'en'
        this.currentLanguage = localStorage.getItem('language') || 'en';
    }
    
    setLanguage(lang) {
        // Changes the language and triggers update
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.dispatchEvent(new Event('languageChange'));
    }
    
    getTranslation(key) {
        // Returns translation for current language
        return translations[this.currentLanguage][key];
    }
    
    applyTranslations() {
        // Updates all [data-i18n] elements on the page
    }
}
```

### 4. **Language Switcher Buttons**

In the navigation, language buttons are placed:

```html
<div class="language-switcher">
    <button class="lang-btn" data-lang="en">English</button>
    <button class="lang-btn" data-lang="de">Deutsch</button>
    <button class="lang-btn" data-lang="id">Indonesia</button>
</div>
```

When clicked, these buttons call `i18n.setLanguage(lang)` to switch languages.

### 5. **Script Integration** (`script.js`)

The `script.js` file contains event listeners for language buttons:

```javascript
document.querySelector('.lang-btn[data-lang="en"]').addEventListener('click', function() {
    i18n.setLanguage('en');
});
```

## How to Add a New Translation

### Step 1: Add the Translation Key to `i18n.js`

Open `i18n.js` and add your key to all three language objects:

```javascript
const translations = {
    en: {
        // ... existing keys
        new_feature: 'New Feature',
    },
    de: {
        // ... existing keys
        new_feature: 'Neue Funktion',
    },
    id: {
        // ... existing keys
        new_feature: 'Fitur Baru',
    }
};
```

### Step 2: Use the Key in HTML

In your HTML file, use the `data-i18n` attribute:

```html
<h3 data-i18n="new_feature">New Feature</h3>
```

## Supported Data Attributes

### `data-i18n`
Updates the `textContent` of the element:
```html
<h1 data-i18n="title">Title</h1>
```

### `data-i18n-placeholder`
Updates the `placeholder` attribute (for input fields):
```html
<input type="text" data-i18n-placeholder="email_placeholder" placeholder="Enter your email">
```

### `data-i18n-title`
Updates the `title` attribute (for tooltips):
```html
<button data-i18n-title="help_tooltip" title="Help">?</button>
```

## Language Storage

The user's language preference is saved in browser localStorage:

```javascript
localStorage.setItem('language', 'en'); // or 'de', 'id'
```

This means:
- The user's language preference persists across sessions
- No language reset when closing the browser
- Each device/browser has its own preference

## Current Supported Languages

| Code | Language | Default |
|------|----------|---------|
| en | English | ✓ Yes |
| de | Deutsch (German) | No |
| id | Bahasa Indonesia | No |

## Translation Statistics

- **English**: 42 translation keys
- **German (Deutsch)**: 42 translation keys  
- **Indonesian (Bahasa Indonesia)**: 42 translation keys

All languages have complete translations for all UI elements.

## Common Translation Keys

### Navigation
- `nav_home` - Home
- `nav_menu` - Menu
- `nav_location` - Location
- `nav_contact` - Contact

### Hero Section
- `hero_title` - Main heading
- `hero_subtitle` - Subheading
- `hero_opening` - Opening hours
- `hero_price` - Price information
- `hero_location` - Location info

### Menu
- `menu_title` - Menu section title
- `menu_omelette` - Omelette dish name
- `menu_salad` - Salad dish name
- `menu_sandwich` - Sandwich dish name
- `menu_package` - Package meal name

### About
- `about_title` - About Us title
- `about_intro` - Introduction text
- `about_experience` - Experience label
- `about_eggs` - Eggs consumption label
- `about_customers` - Customer label

### Contact
- `contact_title` - Contact Us title
- `contact_whatsapp` - WhatsApp label
- `contact_instagram` - Instagram label

### Footer
- `footer_description` - Footer description
- `footer_contact` - Contact label
- `footer_follow` - Follow Us label
- `footer_copyright` - Copyright text

## Performance Considerations

1. **Translation Loading**: All translations are loaded in memory on page load (small ~10KB file)
2. **DOM Updates**: Only elements with `data-i18n` attributes are updated (efficient)
3. **Caching**: Language preference is cached in localStorage
4. **No Network Calls**: All translations are bundled, no external API calls needed

## Browser Compatibility

The i18n system works on:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)
- IE11 and below: Requires polyfill for `localStorage`

## Troubleshooting

### Translations Not Updating
Make sure:
1. The `data-i18n` attribute is present on the element
2. The translation key exists in `i18n.js`
3. The `i18n.js` script is loaded before other scripts
4. Browser console has no JavaScript errors

### Language Preference Not Saving
Check if:
1. localStorage is enabled in the browser
2. No browser privacy mode restrictions
3. The domain is not in a cross-origin iFrame

### Missing Translations
If a translation key is missing:
1. The system falls back to the English translation
2. If English translation also missing, the key name is displayed
3. Check console for error messages

## Adding a New Language

To add a new language (e.g., Spanish/es):

### 1. Add to translations object in `i18n.js`:
```javascript
const translations = {
    // ... existing languages
    es: {
        nav_home: 'Inicio',
        hero_title: 'Disfruta del mejor desayuno inglés en Madiun',
        // ... all other keys
    }
};
```

### 2. Add button to language switcher in `index.html`:
```html
<div class="language-switcher">
    <button class="lang-btn" data-lang="en">English</button>
    <button class="lang-btn" data-lang="de">Deutsch</button>
    <button class="lang-btn" data-lang="id">Indonesia</button>
    <button class="lang-btn" data-lang="es">Español</button>
</div>
```

### 3. (Optional) Update CSS in `style.css`:
Add styling if needed for the new button.

## Best Practices

1. **Key Naming**: Use descriptive, lowercase snake_case names
   - ✓ Good: `hero_title`, `menu_omelette_desc`
   - ✗ Bad: `title1`, `item_desc_1`

2. **Complete Translations**: Always translate all keys in all languages
   - No partial translations
   - No placeholder text left

3. **Consistency**: Maintain consistent terminology across languages
   - Example: Always use same term for "Complete Omelette"

4. **Keep Fallback Text Updated**: The text in `data-i18n="key"` should be the English translation
   - Helps with SEO if JS disabled
   - Better user experience if translations fail

5. **Avoid Excessive HTML in Keys**: Keep translation keys simple
   - Don't put HTML tags in translation values
   - Use data attributes instead

## Future Enhancements

Potential improvements to the i18n system:

- [ ] RTL language support (Arabic, Hebrew)
- [ ] Date/time localization
- [ ] Number formatting per language
- [ ] Currency localization
- [ ] Pluralization rules
- [ ] Language auto-detection based on browser locale
- [ ] Server-side rendering with language support
- [ ] Translation management UI/CMS integration

## References

- [MDN: Internationalization (i18n)](https://developer.mozilla.org/en-US/docs/Glossary/i18n)
- [Web i18n Best Practices](https://www.w3.org/International/)
- [HTML lang attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)

---

**Last Updated**: 2025
**Maintained by**: English Breakfast Madiun Development Team
