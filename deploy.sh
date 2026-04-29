#!/bin/bash

echo "🚀 KE.KOPI STREET - Quick Deploy Script"
echo "========================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo ""
    echo "❓ Enter your GitHub repository URL:"
    echo "   Example: https://github.com/username/website-kekopi.git"
    read -p "URL: " repo_url
    
    git remote add origin "$repo_url"
    echo "✅ Remote added"
else
    echo "✅ Remote already configured"
fi

# Add all files
echo ""
echo "📝 Adding files..."
git add .

# Commit
echo ""
read -p "📝 Commit message (default: 'Update website'): " commit_msg
commit_msg=${commit_msg:-"Update website"}

git commit -m "$commit_msg"
echo "✅ Changes committed"

# Push
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your changes are now on GitHub."
echo ""
echo "📌 Next steps:"
echo "   1. Go to your GitHub repository"
echo "   2. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)"
echo "   3. Or deploy to Vercel (vercel.com)"
echo ""
echo "🌐 Your website will be live in 2-3 minutes!"
