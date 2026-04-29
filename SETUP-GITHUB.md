# ✅ CODE SUDAH DI GITHUB!

Repository: https://github.com/Ariefroyan/kekopistreet

---

## 🚀 LANGKAH SELANJUTNYA (WAJIB!)

### 1. Setup GitHub Secrets (PENTING!)

Tanpa ini, website tidak akan bisa connect ke Base44.

**Langkah-langkah:**

1. **Buka repository di GitHub:**
   ```
   https://github.com/Ariefroyan/kekopistreet
   ```

2. **Klik tab "Settings"** (di bagian atas)

3. **Di sidebar kiri, klik:**
   - **Secrets and variables** → **Actions**

4. **Klik tombol "New repository secret"**

5. **Tambahkan Secret Pertama:**
   - Name: `VITE_BASE44_APP_ID`
   - Secret: (Paste App ID dari Base44 kamu)
   - Klik **Add secret**

6. **Tambahkan Secret Kedua:**
   - Klik **New repository secret** lagi
   - Name: `VITE_BASE44_APP_BASE_URL`
   - Secret: (Paste Backend URL dari Base44 kamu)
   - Klik **Add secret**

**Contoh:**
```
VITE_BASE44_APP_ID = cbef744a8545c389ef439ea6
VITE_BASE44_APP_BASE_URL = https://my-app-81bfaad7.base44.app
```

---

### 2. Enable GitHub Pages

1. **Masih di Settings**, scroll ke bawah atau cari **"Pages"** di sidebar kiri

2. **Di bagian "Source":**
   - Pilih: **GitHub Actions**
   - (Bukan "Deploy from a branch")

3. **Klik "Save"** (jika ada)

---

### 3. Trigger Deployment

Setelah setup secrets dan enable Pages:

1. **Pergi ke tab "Actions"** di repository

2. **Klik workflow "Deploy to GitHub Pages"**

3. **Klik "Run workflow"** → **Run workflow**

Atau cukup push perubahan apapun:

```bash
# Di terminal/PowerShell
git commit --allow-empty -m "Trigger deployment"
git push
```

---

### 4. Tunggu Deployment Selesai

1. **Di tab "Actions"**, kamu akan lihat workflow running (icon kuning berputar)

2. **Tunggu 2-3 menit** sampai icon berubah jadi centang hijau ✅

3. **Jika ada error (X merah):**
   - Klik workflow yang error
   - Lihat log untuk detail error
   - Biasanya karena secrets belum di-set

---

### 5. Buka Website!

Setelah deployment berhasil (centang hijau), website kamu live di:

```
https://ariefroyan.github.io/kekopistreet/
```

🎉 **SELAMAT! Website sudah online!**

---

## 📝 Update Website Nanti

Setiap kali mau update website:

```bash
# Edit file yang mau diubah
# Kemudian:

git add .
git commit -m "Update: deskripsi perubahan"
git push
```

GitHub Actions akan otomatis deploy! ✨

---

## 🐛 Troubleshooting

### Website Blank / 404

**Penyebab:** Base path salah atau GitHub Pages belum enabled

**Solusi:**
1. Pastikan di `vite.config.js` base path adalah `/kekopistreet/`
2. Pastikan GitHub Pages sudah enabled (Settings → Pages → Source: GitHub Actions)

### Build Failed di Actions

**Penyebab:** Secrets belum di-set atau salah

**Solusi:**
1. Cek di Settings → Secrets and variables → Actions
2. Pastikan ada 2 secrets: `VITE_BASE44_APP_ID` dan `VITE_BASE44_APP_BASE_URL`
3. Pastikan value-nya benar (tidak ada spasi di awal/akhir)

### Data Tidak Muncul (Menu/Beans Kosong)

**Penyebab:** Belum ada data di Base44 atau credentials salah

**Solusi:**
1. Login ke Base44
2. Buat entities: `CoffeeBean` dan `MenuItem`
3. Tambahkan data dummy
4. Pastikan App ID dan Base URL benar

---

## 📞 Butuh Bantuan?

Jika ada masalah:
1. Cek tab **Actions** di GitHub untuk error logs
2. Buka browser console (F12) untuk error di frontend
3. Pastikan semua secrets sudah benar

---

**Repository:** https://github.com/Ariefroyan/kekopistreet
**Website:** https://ariefroyan.github.io/kekopistreet/

**Good luck! 🚀**
