# KE.KOPI STREET Website

Website premium untuk coffee shop KE.KOPI STREET di Mataram, NTB.

## 🚀 Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Base44 SDK
- **Routing**: React Router DOM

## 📦 Installation

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```

3. Konfigurasi environment variables di `.env.local`:
   ```
   VITE_BASE44_APP_ID=your_app_id_here
   VITE_BASE44_APP_BASE_URL=your_backend_url_here
   VITE_BASE44_FUNCTIONS_VERSION=prod
   ```

4. Jalankan development server:
   ```bash
   npm run dev
   ```

5. Buka browser di `http://localhost:5173`

## 🎨 Features

### ✅ Implemented
- **Hero Section** - Fullscreen hero dengan background image dan CTA buttons
- **Featured Beans** - Grid showcase untuk menu unggulan
- **About Section** - Split layout dengan image dan stats
- **Gallery Section** - Masonry grid dengan hover zoom dan lightbox
- **Testimonials** - Customer reviews dengan slider dan rating stars
- **Location & Contact** - Google Maps embed dengan contact info
- **Menu Page** - List menu items dengan category filter
- **Beans Page** - Grid showcase untuk coffee beans
- **Bean Detail Page** - Detail page untuk single bean
- **Mobile Bottom Navigation** - Icon-only navigation untuk mobile
- **Loading Animation** - Coffee cup animation saat loading
- **Responsive Design** - Mobile-first, fully responsive

### 🎯 Design Features
- Modern minimalist cafe aesthetic
- Dark theme dengan accent color caramel (#C8A27C)
- Smooth animations dengan Framer Motion
- Technical overlays dan precision design elements
- Custom scrollbar
- Sticky navbar dengan blur effect

## 📁 Project Structure

```
src/
├── api/
│   └── base44Client.js       # Base44 SDK client
├── components/
│   ├── AboutSection.jsx       # About section
│   ├── BeanCard.jsx           # Bean card component
│   ├── FeaturedBeans.jsx      # Featured beans section
│   ├── FooterSection.jsx      # Footer
│   ├── GallerySection.jsx     # Gallery with lightbox
│   ├── HeroSection.jsx        # Hero section
│   ├── Layout.jsx             # Main layout wrapper
│   ├── LoadingAnimation.jsx   # Loading screen
│   ├── LocationSection.jsx    # Location & contact
│   ├── MenuCard.jsx           # Menu item card
│   ├── MobileBottomNav.jsx    # Mobile navigation
│   ├── Navbar.jsx             # Top navigation
│   └── TestimonialsSection.jsx # Testimonials slider
├── lib/
│   ├── app-params.js          # App parameters utility
│   ├── query-client.js        # React Query client
│   └── utils.js               # Utility functions
├── pages/
│   ├── BeanDetail.jsx         # Bean detail page
│   ├── Beans.jsx              # Beans listing page
│   ├── Home.jsx               # Home page
│   └── Menu.jsx               # Menu page
├── App.jsx                    # Main app component
├── index.css                  # Global styles
└── main.jsx                   # Entry point
```

## 🎨 Color Palette

- **Primary**: #C8A27C (Caramel)
- **Background**: #0F0F0F (Dark)
- **Card**: #141414 (Slightly lighter dark)
- **Foreground**: #F5F5F5 (Light text)
- **Muted**: #525252 (Muted text)
- **Border**: #2E2E2E (Subtle borders)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

### Base44 Entities

Project ini menggunakan 2 entities di Base44:

1. **CoffeeBean**
   - name, origin, region, altitude
   - varietal, processing, roast_level
   - flavor_notes, description, farmer_narrative
   - price, image_url

2. **MenuItem**
   - name, description, price
   - category (Espresso, Signature, Pour Over, Cold Brew, Non-Coffee)
   - flavor_notes, temperature, image_url

## 📝 Notes

- Pastikan Base44 app sudah dikonfigurasi dengan benar
- Untuk production, update environment variables di `.env.local`
- Google Maps embed menggunakan koordinat dummy, update dengan koordinat sebenarnya
- Images menggunakan placeholder dari Base44 media, ganti dengan images asli

## 🚀 Deployment ke GitHub Pages

### Langkah-langkah Deploy:

#### 1. **Persiapan Repository**

```bash
# Initialize git (jika belum)
git init

# Add semua file
git add .

# Commit pertama
git commit -m "Initial commit: KE.KOPI STREET website"

# Buat repository baru di GitHub (via web)
# Kemudian connect ke remote
git remote add origin https://github.com/username/website-kekopi.git

# Push ke GitHub
git push -u origin main
```

#### 2. **Setup GitHub Secrets**

Di GitHub repository kamu:
1. Pergi ke **Settings** → **Secrets and variables** → **Actions**
2. Klik **New repository secret**
3. Tambahkan secrets berikut:
   - `VITE_BASE44_APP_ID` = App ID dari Base44
   - `VITE_BASE44_APP_BASE_URL` = Backend URL dari Base44

#### 3. **Enable GitHub Pages**

1. Pergi ke **Settings** → **Pages**
2. Di **Source**, pilih **GitHub Actions**
3. Save

#### 4. **Update Base Path di vite.config.js**

Ganti `'/website-kekopi/'` dengan nama repository kamu:

```javascript
base: process.env.NODE_ENV === 'production' ? '/nama-repo-kamu/' : '/',
```

#### 5. **Deploy Otomatis**

Setiap kali kamu push ke branch `main`, GitHub Actions akan otomatis:
- Install dependencies
- Build project
- Deploy ke GitHub Pages

Website akan tersedia di: `https://username.github.io/nama-repo/`

### 🔄 Update Website

Untuk update website, cukup:

```bash
git add .
git commit -m "Update: deskripsi perubahan"
git push
```

GitHub Actions akan otomatis deploy perubahan!

---

## 🌐 Alternative: Deploy ke Vercel (Lebih Mudah)

### Cara Deploy ke Vercel:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Pergi ke [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Klik **New Project**
   - Import repository GitHub kamu
   - Set environment variables:
     - `VITE_BASE44_APP_ID`
     - `VITE_BASE44_APP_BASE_URL`
     - `VITE_BASE44_FUNCTIONS_VERSION` = `prod`
   - Klik **Deploy**

3. **Atau via CLI**:
   ```bash
   vercel
   ```

**Keuntungan Vercel:**
- ✅ Tidak perlu setup base path
- ✅ Auto-deploy setiap push
- ✅ Custom domain gratis
- ✅ Preview deployment untuk setiap PR
- ✅ Lebih cepat dan mudah

---

## 📝 Checklist Sebelum Deploy

- [ ] Update `.env.local` dengan credentials yang benar
- [ ] Test build production: `npm run build`
- [ ] Test preview: `npm run preview`
- [ ] Update base path di `vite.config.js` (untuk GitHub Pages)
- [ ] Commit semua perubahan
- [ ] Setup GitHub Secrets (untuk GitHub Pages)
- [ ] Push ke GitHub
- [ ] Enable GitHub Pages atau connect ke Vercel

## 📞 Contact

- **Location**: Jl. Selaparang No.60, Cakranegara, Mataram, NTB
- **Phone**: 0877-6565-5654
- **Email**: kekopistreet@gmail.com
- **Instagram**: @kekopi_street
- **TikTok**: @kekopi.street

---

Built with ❤️ using React + Vite + Tailwind CSS
