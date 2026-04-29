# 🚀 Quick Start - Deploy ke GitHub

## Cara Tercepat (3 Langkah)

### 1. Jalankan Deploy Script

**Windows (PowerShell):**
```powershell
.\deploy.ps1
```

**Mac/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### 2. Setup di GitHub

1. Buka repository di GitHub
2. Klik **Settings** → **Secrets and variables** → **Actions**
3. Tambahkan secrets:
   - `VITE_BASE44_APP_ID`
   - `VITE_BASE44_APP_BASE_URL`

### 3. Enable GitHub Pages

1. **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Save

**Done!** Website live di: `https://username.github.io/repo-name/`

---

## Atau Deploy ke Vercel (Lebih Mudah!)

1. Push ke GitHub (pakai script di atas)
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Set environment variables
5. Deploy!

**Done!** Website live di: `https://project-name.vercel.app`

---

## 📖 Dokumentasi Lengkap

Lihat [DEPLOYMENT.md](./DEPLOYMENT.md) untuk panduan lengkap.

---

## ⚡ Update Website

Setelah deploy pertama, untuk update cukup:

```bash
git add .
git commit -m "Update: deskripsi"
git push
```

Auto-deploy! ✨
