#!/bin/bash

# Script to download company logos/favicons
# Run this from the project root: bash get-logos.sh

echo "Downloading company logos..."

# Create logos directory if it doesn't exist
mkdir -p src/assets/logos

# Download favicons/logos
echo "Downloading WhatNot..."
curl -L "https://www.google.com/s2/favicons?domain=whatnot.com&sz=256" -o src/assets/logos/whatnot.png 2>/dev/null

echo "Downloading GEICO..."
curl -L "https://www.google.com/s2/favicons?domain=geico.com&sz=256" -o src/assets/logos/geico.png 2>/dev/null

echo "Downloading Code Your Dreams..."
curl -L "https://www.google.com/s2/favicons?domain=codeyourdreams.org&sz=256" -o src/assets/logos/codeyourdreams.png 2>/dev/null

echo "Downloading OpenAQ..."
curl -L "https://www.google.com/s2/favicons?domain=openaq.org&sz=256" -o src/assets/logos/openaq.png 2>/dev/null

echo "Downloading Inclusive STEM..."
curl -L "https://www.google.com/s2/favicons?domain=inclusivestem.org&sz=256" -o src/assets/logos/inclusivestem.png 2>/dev/null

echo "Done! Logos saved to src/assets/logos/"

