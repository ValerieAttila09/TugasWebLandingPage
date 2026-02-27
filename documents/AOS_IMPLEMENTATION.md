# AOS (Animate On Scroll) Implementation dengan Framer Motion

## Ringkasan Perubahan

Telah berhasil mengimplementasikan animasi **Animate On Scroll (AOS)** menggunakan **Framer Motion** pada 6 section utama landing page Anda:

### 1. **Hero Section** - `Hero.tsx`
- ✅ Fade-in animation untuk seluruh section
- ✅ Staggered animations untuk headline dan subtitle
- ✅ Slide-in dari atas untuk heading
- ✅ Slide-in dari bawah untuk buttons

### 2. **About Section** - `About.tsx`
- ✅ Slide-in dari kiri untuk text content
- ✅ Slide-in dari kanan untuk right column
- ✅ Scale-up animation untuk MagicBento component
- ✅ Staggered items animation

### 3. **Pricing Section** - `PricingSection.tsx`
- ✅ Slide-in dari kiri untuk pricing description
- ✅ Slide-in dari kanan untuk pricing cards
- ✅ Hover & tap effects pada pricing cards
- ✅ Spring animation untuk selected indicator
- ✅ Staggered animations untuk list items

### 4. **Code Section** - `CodeSection.tsx`
- ✅ Slide-in animations untuk heading & description
- ✅ Staggered animations untuk integration buttons
- ✅ Slide-in dari kanan untuk CodeTabs
- ✅ Hover & tap effects pada buttons

### 5. **CTA Section** - `CTA.tsx`
- ✅ Slide-in dari kiri untuk left box
- ✅ Slide-in dari kanan untuk stats
- ✅ Staggered animations untuk content items
- ✅ Hover & tap effects pada buttons

### 6. **FAQ Section** - `FAQSection.tsx`
- ✅ Slide-in animations untuk left & right content
- ✅ Staggered animations untuk FAQ items
- ✅ Smooth rotation animation pada toggle icon
- ✅ Hover effects pada questions

## File yang Dibuat

### 1. `/lib/animations.ts`
File utility berisi preset animation variants:
- `fadeInVariants` - Simple fade in
- `slideInFromLeftVariants` - Slide from left
- `slideInFromRightVariants` - Slide from right
- `slideInFromTopVariants` - Slide from top
- `slideInFromBottomVariants` - Slide from bottom
- `scaleUpVariants` - Scale up effect
- `staggerContainerVariants` - Container untuk staggered animations
- `staggerItemVariants` - Items untuk staggered animations

### 2. `/hooks/use-scroll-animation.ts`
Custom hook untuk AOS functionality:
- `useScrollAnimation()` - Detect element dalam viewport & trigger animations
- `useParallax()` - Parallax scroll effect
- `useScrollProgress()` - Track scroll progress

## Fitur Utama

✅ **Intersection Observer API** - Efficient scroll detection
✅ **Configurable Threshold** - Adjust when animations trigger
✅ **Once Animation Option** - Play animation once or multiple times
✅ **Staggered Children** - Smooth sequential animations
✅ **Hover & Tap Effects** - Interactive animations dengan Framer Motion
✅ **Mobile Responsive** - Works seamlessly on all devices

## Cara Menggunakan

Untuk menambahkan AOS animation ke section/component lain:

```tsx
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { motion } from 'motion/react';
import { slideInFromLeftVariants } from '@/lib/animations';

const MyComponent = () => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideInFromLeftVariants}
    >
      Your content here
    </motion.div>
  );
};
```

## Dependencies

Menggunakan library yang sudah tersedia di project:
- `motion` - Framer Motion library
- `react` - React hooks untuk IntersectionObserver

Tidak perlu install dependencies tambahan! 🎉

## Next Steps (Optional)

Jika ingin menambah animasi lebih lanjut:
1. Buat variant baru di `/lib/animations.ts`
2. Gunakan `useScrollAnimation` hook untuk trigger animasi
3. Customize threshold dan easing sesuai kebutuhan
