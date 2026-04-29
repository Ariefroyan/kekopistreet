# KE.KOPI STREET - Quick Deploy Script (Windows)
Write-Host "🚀 KE.KOPI STREET - Quick Deploy Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "📦 Initializing git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git already initialized" -ForegroundColor Green
}

# Check if remote exists
$remotes = git remote
if ($remotes -notcontains "origin") {
    Write-Host ""
    Write-Host "❓ Enter your GitHub repository URL:" -ForegroundColor Yellow
    Write-Host "   Example: https://github.com/username/website-kekopi.git" -ForegroundColor Gray
    $repo_url = Read-Host "URL"
    
    git remote add origin $repo_url
    Write-Host "✅ Remote added" -ForegroundColor Green
} else {
    Write-Host "✅ Remote already configured" -ForegroundColor Green
}

# Add all files
Write-Host ""
Write-Host "📝 Adding files..." -ForegroundColor Yellow
git add .

# Commit
Write-Host ""
$commit_msg = Read-Host "📝 Commit message (default: 'Update website')"
if ([string]::IsNullOrWhiteSpace($commit_msg)) {
    $commit_msg = "Update website"
}

git commit -m $commit_msg
Write-Host "✅ Changes committed" -ForegroundColor Green

# Push
Write-Host ""
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "✅ Done! Your changes are now on GitHub." -ForegroundColor Green
Write-Host ""
Write-Host "📌 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Go to your GitHub repository" -ForegroundColor White
Write-Host "   2. Enable GitHub Pages (Settings → Pages → Source: GitHub Actions)" -ForegroundColor White
Write-Host "   3. Or deploy to Vercel (vercel.com)" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Your website will be live in 2-3 minutes!" -ForegroundColor Green
