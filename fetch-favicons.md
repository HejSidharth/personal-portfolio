# How to Get Company Logos/Favicons

Here are the direct URLs to get favicons/logos from the websites:

## Quick Method - Direct Favicon URLs

You can download these directly in your browser:

1. **WhatNot**: https://www.whatnot.com/favicon.ico
   - Or try: https://www.whatnot.com/apple-touch-icon.png

2. **GEICO**: https://www.geico.com/favicon.ico
   - Or try: https://www.geico.com/assets/favicon.ico

3. **Code Your Dreams**: https://codeyourdreams.org/favicon.ico

4. **OpenAQ**: https://openaq.org/favicon.ico
   - Or try: https://openaq.org/apple-touch-icon.png

5. **Inclusive STEM**: https://www.inclusivestem.org/favicon.ico

## Method 1: Download via Browser

1. Open the website in your browser
2. Right-click on the page and select "View Page Source"
3. Search for "favicon" or "icon" in the HTML
4. Look for tags like: `<link rel="icon" href="...">` or `<link rel="apple-touch-icon" href="...">`
5. Copy the URL and open it in a new tab
6. Right-click the image and "Save image as..."

## Method 2: Use Online Favicon Grabber

Visit: https://www.google.com/s2/favicons?domain=whatnot.com&sz=128

Replace `whatnot.com` with:
- `geico.com`
- `codeyourdreams.org`
- `openaq.org`
- `inclusivestem.org`

## Method 3: Browser DevTools

1. Open the website
2. Open DevTools (F12)
3. Go to Network tab
4. Filter by "Img" or search for "favicon"
5. Reload the page
6. Look for favicon requests and copy the URL

## Method 4: Command Line (if you have curl/wget)

```bash
# WhatNot
curl -o whatnot.ico https://www.whatnot.com/favicon.ico

# GEICO
curl -o geico.ico https://www.geico.com/favicon.ico

# Code Your Dreams
curl -o codeyourdreams.ico https://codeyourdreams.org/favicon.ico

# OpenAQ
curl -o openaq.ico https://openaq.org/favicon.ico

# Inclusive STEM
curl -o inclusivestem.ico https://www.inclusivestem.org/favicon.ico
```

Then convert ICO to PNG if needed using an online converter or ImageMagick.

