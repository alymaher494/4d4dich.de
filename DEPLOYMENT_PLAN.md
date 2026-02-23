# 🚀 خطة الرفع الكاملة - 4D Für Dich
# Headless WordPress + Next.js on Hostinger

## 📋 المتطلبات

- حساب Hostinger بخطة **Cloud Startup** أو أعلى (لدعم Node.js)
- دومين `4d4dish.de` مربوط بالحساب
- حساب GitHub فيه الـ repo بتاع المشروع

---

## المرحلة 1: إعداد WordPress على Subdomain (الباك إند)

### الخطوة 1.1: إنشاء الـ Subdomain
1. ادخل على **Hostinger hPanel**
2. اختار **مواقع إلكترونية** → **+ إضافة موقع**
3. اختار **"ووردبريس"**
4. لما يسألك عن الدومين:
   - اختار **"Use an existing domain"** أو **subdomain**
   - اكتب: `cms.4d4dish.de`
5. كمّل خطوات التنصيب:
   - اسم المستخدم: `admin`
   - كلمة مرور قوية
   - عنوان الموقع: `4D CMS`
   - اللغة: Deutsch أو English

### الخطوة 1.2: ربط DNS للـ Subdomain
1. في hPanel → **دومينات** → `4d4dish.de`
2. اختار **DNS / Nameservers**
3. أضف سجل **A Record**:
   ```
   Type: A
   Name: cms
   Value: [عنوان IP الخاص بالسيرفر - هتلاقيه في hPanel]
   TTL: 14400
   ```

### الخطوة 1.3: رفع الثيم
1. ادخل لوحة تحكم WordPress: `https://cms.4d4dish.de/wp-admin`
2. روح **Appearance** → **Themes** → **Add New** → **Upload Theme**
3. ارفع ملف الثيم المضغوط (هنعمله في الخطوة 1.4)
4. فعّل الثيم

### الخطوة 1.4: تجهيز ملف الثيم المضغوط
```powershell
# في PowerShell، من مجلد المشروع
cd d:\4d4dish
Compress-Archive -Path "4d4dish-wp-theme\*" -DestinationPath "4d4dish-wp-theme-headless.zip" -Force
```

### الخطوة 1.5: إعداد WordPress للعمل كـ Headless CMS
1. في WordPress Admin → **Settings** → **Permalinks**
   - اختار **Post name** (`/%postname%/`)
   - اضغط **Save**

2. تنصيب الإضافات المطلوبة:
   - **Advanced Custom Fields (ACF)** - لإدارة الحقول المخصصة
   - **ACF to REST API** - لعرض حقول ACF في الـ REST API
   - **WP REST API Menus** - لعرض القوائم في الـ API (اختياري)
   - **Application Passwords** - مدمج في WordPress 5.6+ (اختياري للأمان)

3. إضافة محتوى أساسي:
   - أنشئ الصفحات: Home, Über Uns, Kontakt, Portfolio, etc.
   - أضف Portfolio projects
   - أضف Testimonials
   - أضف Clients (logos)

### الخطوة 1.6: تحديث wp-config.php
1. في hPanel → **File Manager** أو عبر **SSH**
2. افتح ملف `wp-config.php`
3. أضف قبل السطر `/* That's all, stop editing! */`:

```php
// Next.js Frontend Integration
define('NEXTJS_FRONTEND_URL', 'https://4d4dish.de');
define('NEXTJS_REVALIDATION_SECRET', 'أنشئ-مفتاح-سري-عشوائي-هنا');
```

> ⚠️ **مهم**: الـ `REVALIDATION_SECRET` لازم يكون نفسه في WordPress و Next.js

### الخطوة 1.7: اختبار الـ REST API
افتح في المتصفح:
```
https://cms.4d4dish.de/wp-json/wp/v2/posts
https://cms.4d4dish.de/wp-json/wp/v2/pages
https://cms.4d4dish.de/wp-json/wp/v2/portfolio
```
لو ظهرت بيانات JSON = كل حاجة شغالة ✅

---

## المرحلة 2: رفع كود المشروع على GitHub

### الخطوة 2.1: تنظيف المشروع
```powershell
# تأكد إن الملفات غير المطلوبة مش هتترفع
cd d:\4d4dish

# تحقق من .gitignore
cat .gitignore

# تأكد إن الثيم المضغوط مش هيترفع
# أضف للـ .gitignore لو مش موجود:
# *.zip
# test_zip_extract/
# test_zip_extract_fixed/
# verify_zip/
```

### الخطوة 2.2: إعداد Environment Variables للإنتاج
قبل الرفع، تأكد إن `.env.local` مش هتترفع (موجودة في `.gitignore`)

### الخطوة 2.3: دفع الكود لـ GitHub
```powershell
cd d:\4d4dish
git add .
git commit -m "feat: add headless WordPress integration with ISR + on-demand revalidation"
git push origin main
```

---

## المرحلة 3: إعداد Next.js على الدومين الرئيسي (الفرونت إند)

### الخطوة 3.1: إنشاء موقع Node.js على Hostinger
1. في hPanel → **مواقع إلكترونية** → **+ إضافة موقع**
2. اختار **"تطبيق ويب Node.js"**
3. لما يسألك عن الدومين → اختار: `4d4dish.de`
4. اربط حساب **GitHub**
5. اختار الـ **Repository**: `4d4dish` (أو اسم الريبو بتاعك)
6. اختار الـ **Branch**: `main`

### الخطوة 3.2: إعداد Build Settings في Hostinger
```
Build Command:     npm run build
Start Command:     npm run start
Node Version:      18 أو 20 (اختار الأحدث المتاح)
```

### الخطوة 3.3: إضافة Environment Variables في Hostinger
في إعدادات التطبيق على hPanel → **Environment Variables**:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_WORDPRESS_API_URL` | `https://cms.4d4dish.de/wp-json` |
| `REVALIDATION_SECRET` | `نفس المفتاح السري اللي في wp-config.php` |
| `NEXT_PUBLIC_SITE_URL` | `https://4d4dish.de` |
| `NODE_ENV` | `production` |

### الخطوة 3.4: ربط DNS للدومين الرئيسي
لو الدومين مش متربط:
1. في hPanel → **دومينات** → `4d4dish.de`
2. تأكد إن الـ **A Record** بيشاور على IP السيرفر بتاع Node.js app
3. فعّل **SSL Certificate** (Let's Encrypt - مجاني من Hostinger)

### الخطوة 3.5: أول Deploy
1. بعد إعداد كل حاجة، اضغط **Deploy** في Hostinger
2. استنى البناء يخلص (ممكن ياخد 2-5 دقايق)
3. لو فيه أخطاء، تابع الـ **Build Logs**

---

## المرحلة 4: اختبار النظام الكامل

### الخطوة 4.1: اختبار الفرونت إند
1. افتح `https://4d4dish.de` → لازم الموقع يظهر
2. اتصفح كل الصفحات واتأكد إنهم شغالين

### الخطوة 4.2: اختبار Health Check
افتح في المتصفح:
```
https://4d4dish.de/api/health
```
لازم يظهر JSON فيه:
```json
{
  "status": "ok",
  "wordpress": {
    "status": "connected"
  }
}
```

### الخطوة 4.3: اختبار الـ Revalidation
1. ادخل WordPress Admin: `https://cms.4d4dish.de/wp-admin`
2. أنشئ **Post جديد** واضغط **Publish**
3. افتح `https://4d4dish.de/blog` → لازم المقال الجديد يظهر **فوراً** ✅
4. عدّل المقال واحفظ → التحديث يظهر فوراً ✅

### الخطوة 4.4: اختبار الـ Revalidation API
```powershell
# اختبار يدوي (من PowerShell)
Invoke-RestMethod -Uri "https://4d4dish.de/api/revalidate" -Method GET
```

---

## المرحلة 5: إعدادات SSL و التأمين

### الخطوة 5.1: SSL للـ Subdomain
1. في hPanel → `cms.4d4dish.de` → **SSL**
2. فعّل **Let's Encrypt SSL** (مجاني)
3. فعّل **Force HTTPS**

### الخطوة 5.2: SSL للدومين الرئيسي
1. في hPanel → `4d4dish.de` → **SSL**
2. فعّل **Let's Encrypt SSL**
3. فعّل **Force HTTPS**

### الخطوة 5.3: تأمين WordPress
1. غيّر الـ `REVALIDATION_SECRET` لمفتاح سري قوي:
   ```powershell
   # أنشئ مفتاح عشوائي
   [System.Guid]::NewGuid().ToString() + "-" + [System.Guid]::NewGuid().ToString()
   ```
2. نفس المفتاح يكون في:
   - `wp-config.php` على WordPress
   - Environment Variables في Hostinger لتطبيق Next.js

---

## 📁 ملخص الملفات الجديدة/المعدّلة

### ملفات Next.js (الفرونت إند):
```
✅ src/lib/wordpress.ts              ← WordPress REST API Client
✅ src/app/api/revalidate/route.ts   ← On-Demand Revalidation Webhook
✅ src/app/api/health/route.ts       ← Health Check Endpoint
✅ .env.example                       ← قالب Environment Variables
✅ .env.local                         ← Environment Variables (لا يُرفع لـ Git)
✅ next.config.ts                     ← تم إضافة دومين WordPress للصور
```

### ملفات WordPress (الباك إند):
```
✅ 4d4dish-wp-theme/functions.php    ← تم إضافة:
   - Revalidation webhook (save/delete/customize)
   - REST API support for CPTs
   - CORS headers for Next.js
✅ WP_CONFIG_CONSTANTS.js            ← مرجع لإعدادات wp-config.php
```

---

## 🔄 كيف يعمل النظام؟

```
┌─────────────────────┐         ┌─────────────────────┐
│   WordPress CMS     │         │   Next.js Frontend   │
│  cms.4d4dish.de     │         │   4d4dish.de         │
│                     │         │                      │
│  ┌───────────────┐  │         │  ┌────────────────┐  │
│  │ Admin Panel   │  │         │  │  Static Pages  │  │
│  │ (wp-admin)    │  │         │  │  (ISR cached)  │  │
│  └──────┬────────┘  │         │  └───────▲────────┘  │
│         │           │         │          │           │
│    Save/Publish     │  POST   │   Revalidate Path   │
│         │           │ ──────► │          │           │
│  ┌──────▼────────┐  │ webhook │  ┌───────┴────────┐  │
│  │ functions.php │  │         │  │ /api/revalidate│  │
│  │ (webhook)     │  │         │  │ (API Route)    │  │
│  └──────┬────────┘  │         │  └────────────────┘  │
│         │           │         │                      │
│  ┌──────▼────────┐  │  GET    │  ┌────────────────┐  │
│  │  REST API     │ ◄│ ─────── │  │ wordpress.ts   │  │
│  │  /wp-json/    │  │  fetch  │  │ (API Client)   │  │
│  └───────────────┘  │         │  └────────────────┘  │
└─────────────────────┘         └──────────────────────┘
```

### السيناريو:
1. **المستخدم** يدخل `https://4d4dish.de` ← يحصل على صفحة سريعة (cached)
2. **الأدمن** يعدّل مقال في WordPress
3. WordPress **يبعت webhook** تلقائياً لـ Next.js
4. Next.js **يجدد الصفحة المتأثرة** فوراً
5. **أي زائر جديد** يشوف المحتوى المحدّث ← شغال! ✅

---

## 🛠 استكشاف الأخطاء

### المشكلة: التحديثات مش بتظهر فوراً
**الحل:**
1. اتأكد إن الـ `REVALIDATION_SECRET` نفسه في WordPress و Next.js
2. اتأكد إن WordPress يقدر يوصل لـ `https://4d4dish.de/api/revalidate`
3. تابع WordPress debug.log:
   ```php
   // أضف في wp-config.php
   define('WP_DEBUG', true);
   define('WP_DEBUG_LOG', true);
   ```

### المشكلة: صور WordPress مش بتظهر
**الحل:**
1. اتأكد إن `cms.4d4dish.de` موجود في `next.config.ts` → `remotePatterns`
2. اتأكد إن SSL شغال على الـ subdomain

### المشكلة: CORS خطأ
**الحل:**
1. اتأكد إن `NEXTJS_FRONTEND_URL` صح في `wp-config.php`
2. اتأكد إن الكود في `functions.php` بتاع CORS شغال

### المشكلة: Build بيفشل على Hostinger
**الحل:**
1. تابع الـ Build Logs
2. اتأكد إن Node.js version 18+
3. اتأكد إن كل الـ Environment Variables متضافين
4. جرب تعمل `npm run build` محلياً الأول

---

## 📝 ملاحظات إضافية

1. **التحديثات التلقائية**: بفضل نظام ISR + On-Demand Revalidation:
   - الصفحات سريعة جداً (static/cached)
   - التحديثات تظهر فوراً بعد الحفظ في WordPress
   - لو الـ webhook فشل، ISR هيجدد الصفحة كل 60 ثانية كـ fallback

2. **اسم الـ Subdomain**: يمكن تغييره من `cms.4d4dish.de` لأي اسم تاني:
   - `wp.4d4dish.de`
   - `api.4d4dish.de`
   - `backend.4d4dish.de`
   بس لازم تحدّث الـ Environment Variables والـ DNS

3. **التطوير المحلي**: 
   - شغل Next.js: `npm run dev`
   - وجّه `NEXT_PUBLIC_WORDPRESS_API_URL` في `.env.local` للـ WordPress الحقيقي أو local WordPress
