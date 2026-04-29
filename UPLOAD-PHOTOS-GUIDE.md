# CARA UPLOAD FOTO COFFEE SHOP YANG BENAR

## Masalah
Instagram memblokir direct image embedding, jadi foto tidak bisa ditampilkan langsung dari Instagram URL.

## Solusi
Upload foto ke folder `public/images/` secara manual.

## Langkah-langkah:

### 1. Download Foto dari Instagram
- Buka 3 post Instagram:
  - https://www.instagram.com/p/DTPxgPFD_Nj/
  - https://www.instagram.com/p/DTW-H3JgNTH/
  - https://www.instagram.com/p/DO8pezbDx23/
- Screenshot atau download foto-foto tersebut
- Atau gunakan tool: https://snapinsta.app/

### 2. Rename Foto
Rename 3 foto menjadi:
```
shop-photo-1.jpg  (outdoor/exterior)
shop-photo-2.jpg  (interior/mesin kopi)
shop-photo-3.jpg  (location/signage)
```

### 3. Upload ke Folder
Copy 3 foto ke:
```
public/images/
```

### 4. Update Code
Edit file: `src/components/ShopLocationPhotos.jsx`

Ganti baris 4-24 dengan:
```javascript
const shopImages = [
  {
    id: 1,
    url: "/images/shop-photo-1.jpg",
    instagramUrl: "https://www.instagram.com/p/DTPxgPFD_Nj/",
    alt: "KE.KOPI STREET - Tampak Depan"
  },
  {
    id: 2,
    url: "/images/shop-photo-2.jpg",
    instagramUrl: "https://www.instagram.com/p/DTW-H3JgNTH/",
    alt: "KE.KOPI STREET - Interior"
  },
  {
    id: 3,
    url: "/images/shop-photo-3.jpg",
    instagramUrl: "https://www.instagram.com/p/DO8pezbDx23/",
    alt: "KE.KOPI STREET - Lokasi"
  },
];
```

### 5. Build & Deploy
```bash
npm run build
git add .
git commit -m "add: real coffee shop photos"
git push origin main
```

## Alternatif: Gunakan Image Hosting
Upload foto ke:
- ImgBB: https://imgbb.com/
- Imgur: https://imgur.com/
- Cloudinary: https://cloudinary.com/

Lalu gunakan URL yang diberikan.

## Status Saat Ini
Sementara menggunakan placeholder images dari Base44.
Foto akan muncul setelah Anda upload foto asli ke `public/images/`.
