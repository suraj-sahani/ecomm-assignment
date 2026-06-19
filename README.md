# Editorial Bold: Product Directory Application

A high-performance, visually striking visual directory and catalog application built using **Next.js 16**, **React 19**, and **Tailwind CSS v4**. This application implements a cohesive "Bold Typography / High-Contrast Editorial" design system, showcasing products fetched dynamically from `dummyjson.com`.

---

## 🚀 Setup & Installation Instructions

This project is built with **pnpm** as the primary package manager and runtime. Follow these steps to set up and run the application locally:

### Prerequisites

Ensure you have [pnpm](https://pnpm.io/) installed. (npm can be used, but pnpm is recommended and configured out of the box).

### 1. Clone & Navigate to Project

```bash
cd ecomm-assignment
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development Server

```bash
pnpm run dev
```

The server will start, typically at `http://localhost:3000`.

### 4. Build for Production

To test the strict TypeScript compilation, code splitting, and production bundle:

```bash
pnpm run build
```

---

## 🎨 Design System: "Bold Typography / Editorial"

The UI features a premium, publishing-inspired look instead of generic tech SaaS templates:

- **Typography**: Focused on **Inter Tight** and strong font-weights to establish a clean, editorial hierarchy.
- **Accents**: Dominated by high-contrast **Editorial Orange (`#FF3D00`)** used purposefully for primary interactive elements, highlights, and rating scores.
- **Texture**: Custom subtle noise texture overlays on structural background sheets to replicate physical high-end paper catalogs.
- **Form Factors**: Completely sharp corners (`rounded-none`) and custom thick visual borders to provide structural contrast.

---

## 🛠️ Architectural Decisions

1. **Next.js**:
   - Utilizes a modern, server-side-ready full-stack framework.
   - Preserves state perfectly via URL Search Parameters. Returning to the product list keeps the active category, selected brands, price sliders, and pagination parameters intact.

2. **State Management via URL**:
   - The filtering, sorting, price range, and page indexing on the home page are fully mirrored in the URL (`?category=...&brands=...&min=...&max=...&page=...`). This guarantees users can bookmark, share, and refresh pages without losing context.

3. **Client-Server Hybrid Processing**:
   - High-level queries such as categories are retrieved from `dummyjson.com/products/categories`.
   - Brand list, price boundary, and subset searches are computed through efficient client-side filters on top of paginated datasets to balance network requests and interactive speed.

4. **Modern Skeleton Loading UX**:
   - Instead of jarring loading spinners, structural layout skeletons built with Tailwind CSS animations (`animate-pulse`) mimic the exact size and grid placement of loaded elements on both the sidebar filtering panels and the detail layouts.

---

## 📝 Assumptions Made

1. **Data Accuracy**:
   - Assumed product prices and ratings from `dummyjson.com` are valid numbers.
   - Assumed that rating stars are best visualized as a solid 5-star baseline (rounded to the nearest whole integer) complemented by an ultra-bold accent badge indicating the exact decimal score.

2. **Network/Runtime Environment**:
   - Optimized for modern evergreen browser environments (using Tailwind v4 native CSS @import, CSS variables, and modern flex/grid specifications).

---

## 🔮 Future Improvements

Given more time, the following enhancements would be added:

1. **Server-Side Search & Multi-Page Pagination**:
   - Currently, pagination and custom brand/price combinations are filtered client-side for immediate responsiveness. Adding comprehensive server-side searching endpoints would enhance performance for extremely large datasets (millions of records).

2. **Search Term Autocomplete / Command Menu**:
   - Implementing a real-time typeahead search or command bar (`cmdk`) to allow keyboard-first navigation and immediate product discovery.

3. **Persistent Shopping Cart & Wishlist**:
   - Adding state-management or database-backed basket mechanism, utilizing standard client-side state hooks, so users can simulate purchasing products.
