#!/bin/bash

# Find all library page files
FILES=$(find src/app/library -type f -name "page.tsx")

# For each file, update the date contrast class
for file in $FILES; do
  # Replace text-accent-foreground with text-foreground font-medium for date tags
  sed -i '' 's/text-xs bg-accent\/10 text-accent-foreground px-3 py-1 rounded-full/text-xs bg-accent\/10 text-foreground font-medium px-3 py-1 rounded-full/g' "$file"
  echo "Updated $file"
done

echo "All library page files updated with improved date contrast" 