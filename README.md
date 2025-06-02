This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

# 🛍️ Managing Products in a Warehouse

Managing products in a warehouse using **Next.js**

---

## 🚀 Technologies Used

- **Next.js** – React framework with file-based routing  
- **React Hook Form** – Form management  
- **Yup** – Form validation  
- **Axios** – API communication  
- **React Toastify** – Toast notifications for success/error  
- **Lodash.debounce** – Optimized input handling in search  
- **CSS Modules** – Component-scoped styling  

---

## 📦 Project Structure

- `components/` – UI components like forms, modals, tables  
- `services/` – API request functions  
- `schema/` – Yup schemas for form validation  
- `constants/` – Dynamic form input configurations  
- `pages/` – File-based routing with Next.js

---

## 🔐 Authentication

- Register/Login functionality  
- JWT token stored in localStorage  
- Dashboard access restricted based on authentication

---

## ✅ Features

### 🔐 Authentication:

- User sign-up with strong validation (username and password)  
- Login and token storage  
- Automatic redirection to dashboard upon successful login

### 🛒 Product Management:

- Full product listing in responsive table  
- Add new product with validated form  
- Edit existing products  
- Delete product with modal confirmation  

### 📦 UI/UX:

- Real-time formatting of numbers in forms (e.g., `90,000`)  
- Display price in text format (e.g., `90 thousand Toman`)  
- Dynamic form fields based on `constants`  

### 🔍 Search:

- Live search across name, price, quantity, and ID fields  
- Debounced input using `lodash.debounce`  

### 📄 Pagination:

- Show 5 products per page  
- Navigate between pages with number buttons and next/prev  

---

## ✨ Key Highlights

➕ Add new products  
✏️ Edit product details  
🔍 Advanced search across multiple fields  
🗑️ Delete products with modal confirmation  
📝 Forms powered by React Hook Form  
✅ Yup-based input validation  
🔐 Token storage and access control  
♻️ State management with Context API + useReducer  
🎨 Reusable and modular UI components  
📁 **File-based routing with Next.js**

---

## 💡 Getting Started

```bash
npm install
npm run dev
