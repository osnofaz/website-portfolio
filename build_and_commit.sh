#!/bin/bash

# Run the Build (if not already built)
npm run build  # or yarn build

# Initialize Git Repository (if not already)
git init

# Add the Build Folder Contents
for item in build/*; do
    if [ -f "$item" ] || [ -d "$item" ]; then
        git add "$item"
    fi
done

# Commit the Changes
git commit -m "Add build folder contents"

# Create and Checkout a New Branch
git checkout -b build-branch

# Push to Git Branch
git push origin build-branch

echo "Build folder contents committed and pushed to branch 'build-branch'."