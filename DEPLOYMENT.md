# 🚀 Panduan Deploy KE.KOPI STREET Website

## Pilihan 1: Deploy ke GitHub Pages (Gratis)

### Langkah-langkah:

#### 1. Persiapan Awal

```bash
# Stop development server jika masih running (Ctrl+C)

# Initialize git repository
git init

# Add semua file
git add .

# Commit pertama
git commit -m "Initial commit: KE.KOPI STREET website"
```

#### 2. Buat Repository di GitHub

1. Buka [github.com](https://github.com)
2. Klik tombol **+** → **New repository**
3. Nama repository: `website-kekopi` (atau nama lain)
4. Pilih **Public**
5. **JANGAN** centang "Initialize with README"
6. Klik **Create repository**

#### 3. Connect ke GitHub

```bash
# Ganti 'username' dengan username GitHub kamu
git remote add origin https://github.com/username/website-kekopi.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

#### 4. Setup GitHub Secrets

1. Di repository GitHub, klik **Settings**
2. Klik **Secrets and variables** → **Actions**
3. Klik **New repository secret**
4. Tambahkan 2 secrets:

   **Secret 1:**
   - Name: `VITE_BASE44_APP_ID`
   - Value: (App ID dari Base44)

   **Secret 2:**
   - Name: `VITE_BASE44_APP_BASE_URL`
   - Value: (Backend URL dari Base44)

#### 5. Update Base Path

Edit file `vite.config.js`, ganti `'/website-kekopi/'` dengan nama repository kamu:

```javascript
base: process.env.NODE_ENV === 'production' ? '/nama-repo-kamu/' : '/',
```

Commit perubahan:

```bash
git add vite.config.js
git commit -m "Update base path"
git push
```

#### 6. Enable GitHub Pages

1. Di repository, klik **Settings**
2. Klik **Pages** (di sidebar kiri)
3. Di **Source**, pilih **GitHub Actions**
4. Klik **Save**

#### 7. Deploy!

GitHub Actions akan otomatis build dan deploy. Tunggu 2-3 menit, lalu buka:

```
https://username.github.io/nama-repo/
```

### Update Website

Setiap kali mau update:

```bash
# Edit file yang mau diubah
# Kemudian:

git add .
git commit -m "Update: deskripsi perubahan"
git push
```

GitHub Actions akan otomatis deploy!

---

## Pilihan 2: Deploy ke Vercel (RECOMMENDED - Lebih Mudah!)

### Kenapa Vercel?

- ✅ Tidak perlu setup base path
- ✅ Auto-deploy setiap push
- ✅ Custom domain gratis
- ✅ Preview deployment untuk setiap PR
- ✅ Lebih cepat (CDN global)

### Langkah-langkah:

#### 1. Push ke GitHub (sama seperti di atas)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/website-kekopi.git
git push -u origin main
```

#### 2. Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com)
2. Klik **Sign Up** → Login dengan GitHub
3. Klik **Add New** → **Project**
4. Import repository `website-kekopi`
5. Di **Environment Variables**, tambahkan:
   - `VITE_BASE44_APP_ID` = (App ID)
   - `VITE_BASE44_APP_BASE_URL` = (Backend URL)
   - `VITE_BASE44_FUNCTIONS_VERSION` = `prod`
6. Klik **Deploy**

Selesai! Website akan tersedia di:
```
https://website-kekopi.vercel.app
```

### Update Website

Cukup push ke GitHub:

```bash
git add .
git commit -m "Update"
git push
```

Vercel akan otomatis deploy!

---

## 📝 Checklist Sebelum Deploy

- [ ] Sudah test di local (`npm run dev`)
- [ ] Update `.env.local` dengan credentials yang benar
- [ ] Commit semua perubahan
- [ ] Push ke GitHub
- [ ] Setup secrets/environment variables
- [ ] Enable GitHub Pages atau connect ke Vercel

---

## 🐛 Troubleshooting

### Build Error

Jika build gagal, cek:

1. **Environment variables** sudah benar?
2. **Base path** di `vite.config.js` sudah sesuai nama repo?
3. Coba build di local dulu: `npm run build`

### Website Blank/404

1. **GitHub Pages**: Pastikan base path benar
2. **Vercel**: Tidak perlu base path, hapus atau set ke `'/'`

### Images Tidak Muncul

1. Pastikan Base44 credentials benar
2. Cek console browser untuk error

---

## 📞 Butuh Bantuan?

Jika ada masalah, cek:
1. GitHub Actions logs (tab **Actions** di repository)
2. Vercel deployment logs (di dashboard Vercel)
3. Browser console (F12)

---

**Good luck! 🚀**
