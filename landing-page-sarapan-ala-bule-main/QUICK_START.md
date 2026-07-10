# Quick Start Guide - English Breakfast Madiun

## 🌍 Welcome to the Multi-Language Website!

Your website now supports **3 languages**: 🇬🇧 English, 🇩🇪 German, and 🇮🇩 Indonesian.

## 🚀 Quick Start

### For Users/Visitors

1. **View the Website**
   - Open `index.html` in your browser
   - Website loads in **English by default**

2. **Switch Languages**
   - Look for language buttons in the header: **English | Deutsch | Indonesia**
   - Click any button to instantly switch languages
   - Your choice is saved automatically!

3. **That's It!**
   - Navigate the site - everything updates to your chosen language
   - Come back anytime - your language preference is remembered

### For Business Owners

- **Update Business Info**: Search "085743360490" or "Lapangan Gulun" in files
- **Add Social Links**: Update WhatsApp number or Instagram handle
- **Change Hours**: Look for "06:30 - 11:00" in i18n.js
- **Update Menu Items**: Edit prices and descriptions in translation files

## 📁 File Structure

```
landing_page/
├── index.html              ← Main page with language support
├── style.css               ← Styling (includes language switcher)
├── script.js               ← Interactive features
├── i18n.js                 ← All translations (42 keys × 3 languages)
├── i18n-documentation.md   ← Technical i18n guide
└── images/                 ← Food photos
```

## 🗣️ Supported Languages

| 🇬🇧 English | 🇩🇪 Deutsch (German) | 🇮🇩 Indonesia |
|-----------|-------------------|--------------|
| Default | Full Support | Full Support |
| 42 keys | 42 keys | 42 keys |
| Complete | Complete | Complete |

## 💡 Key Features

✓ **One-Click Language Switch** - Buttons in header  
✓ **Automatic Persistence** - Your language is remembered  
✓ **No Page Reload** - Instant language updates  
✓ **Mobile Friendly** - Works perfectly on phones  
✓ **Complete Coverage** - All text translated  

## 🔧 How the System Works

### What is i18n?
i18n (Internationalization) = System to support multiple languages

### How It Works:
1. **Translations stored** in `i18n.js`
2. **HTML marked** with `data-i18n="key"` attributes
3. **JavaScript** updates text when language changes
4. **Browser storage** remembers your choice

### Example:
```html
<!-- In index.html -->
<h1 data-i18n="hero_title">Enjoy the Best English Breakfast in Madiun</h1>

<!-- In i18n.js -->
{
  en: { hero_title: 'Enjoy the Best English Breakfast in Madiun' },
  de: { hero_title: 'Genießen Sie das beste englische Frühstück in Madiun' },
  id: { hero_title: 'Nikmati Sarapan Ala Bule Terbaik di Madiun' }
}

<!-- Result -->
Click 'English' → Shows English text
Click 'Deutsch' → Shows German text
Click 'Indonesia' → Shows Indonesian text
```

## 📝 Adding a New Translation

### Simple 3-Step Process

**Step 1**: Open `i18n.js`

**Step 2**: Find the translations object and add your key:
```javascript
const translations = {
    en: {
        // ... existing keys
        my_new_key: 'English Text Here'
    },
    de: {
        // ... existing keys
        my_new_key: 'German Text Here'
    },
    id: {
        // ... existing keys
        my_new_key: 'Indonesian Text Here'
    }
};
```

**Step 3**: Use in HTML:
```html
<p data-i18n="my_new_key">English Text Here</p>
```

Done! 🎉

## 🌐 Translation Keys Reference

### Navigation
- `nav_home` - Home
- `nav_menu` - Menu
- `nav_location` - Location
- `nav_contact` - Contact

### Hero Section
- `hero_title` - Main title
- `hero_subtitle` - Subtitle
- `hero_opening` - Opening hours
- `hero_price` - Price info
- `hero_location` - Location

### Menu
- `menu_title` - Menu heading
- `menu_omelette` - Omelette name
- `menu_salad` - Salad name
- `menu_sandwich` - Sandwich name
- `menu_package` - Package name

### Contact
- `contact_title` - Contact heading
- `contact_whatsapp` - WhatsApp label
- `contact_instagram` - Instagram label

[See full list in `i18n-documentation.md`]

## 🎨 Customization

### Change Default Language
Edit `i18n.js`, line 290:
```javascript
this.currentLanguage = localStorage.getItem('language') || 'en'; // Change 'en' to 'de' or 'id'
```

### Change Language Button Colors
Edit `style.css`:
```css
.lang-btn.active {
    background: #2563eb; /* Change this color */
}
```

### Add a New Language (e.g., Spanish)
1. Add to `i18n.js`:
```javascript
es: { nav_home: 'Inicio', /* ...all 42 keys... */ }
```

2. Add button in `index.html`:
```html
<button class="lang-btn" data-lang="es">Español</button>
```

## 🐛 Troubleshooting

### Translations Not Showing?
- Refresh the page (Ctrl+R or Cmd+R)
- Check browser console for errors
- Ensure `i18n.js` is loaded before `script.js`

### Language Not Saving?
- Check if localStorage is enabled
- Try a different browser
- Clear browser cache and cookies

### Missing Translation?
- The system falls back to English
- Check `i18n.js` for missing key
- Add the translation following the steps above

## 📱 Mobile Usage

**On Phones:**
- Language buttons are in the hamburger menu (☰)
- Tap menu icon → tap language button
- Site switches language instantly
- No app installation needed!

## 🚀 Deployment

1. **Test Locally**:
   - Open `index.html` in browser
   - Test all 3 languages
   - Test on mobile device/screen

2. **Upload to Server**:
   - Upload all files in `landing_page/` folder
   - Ensure file structure is maintained
   - All image paths should work correctly

3. **Test Live**:
   - Open website from server
   - Verify language switching works
   - Test on different devices

## 📊 Translation Statistics

| Language | Keys | Status |
|----------|------|--------|
| English | 42 | ✓ Complete |
| German | 42 | ✓ Complete |
| Indonesian | 42 | ✓ Complete |

## 💬 Key Sections Translated

- ✓ Navigation Menu
- ✓ Hero Section
- ✓ Menu Items (4 dishes)
- ✓ About Section
- ✓ Location Details
- ✓ Contact Information
- ✓ Footer Content
- ✓ All Buttons & Labels

## 🔐 Data Privacy

- **Language preference** stored locally in browser
- **No data sent** to external servers
- **No tracking** of language choices
- **Completely private** - users control their data

## 📚 Documentation

For more detailed information:
- **README.MD** - Project overview
- **i18n-documentation.md** - Technical guide
- **design_structure.md** - Design details
- **IMPLEMENTATION_SUMMARY.md** - What was changed

## ✨ Pro Tips

1. **Keyboard Shortcut**: No keyboard shortcut yet, but you can add one!
2. **Auto-Detect**: Website could auto-detect browser language (future feature)
3. **RTL Support**: Can add support for Arabic/Hebrew later
4. **More Languages**: Easy to add French, Spanish, Chinese, etc.

## 🎯 Next Steps

- [ ] Test all 3 languages on desktop
- [ ] Test all 3 languages on mobile
- [ ] Verify all links still work
- [ ] Check responsive design
- [ ] Upload to server
- [ ] Share with international audience!

## 📞 Support

If you need help:
1. Read the relevant documentation file
2. Check the code comments
3. Review the examples in i18n.js
4. Test the language switcher in header

## 🎉 You're All Set!

Your website is now ready to serve customers worldwide in **English, German, and Indonesian**!

Enjoy! 🌍

---

**Quick Reference:**
- 🇬🇧 English - Default language
- 🇩🇪 Deutsch - German translation
- 🇮🇩 Bahasa Indonesia - Indonesian translation
- ⚙️ Settings → Hamburger menu on mobile
- 💾 Preference → Saved automatically in browser

**Version**: 2.0  
**Last Updated**: 2025-07-10  
**Status**: ✅ Production Ready
