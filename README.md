This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## AI Chat tư vấn tuyển sinh

### ⚠️ QUAN TRỌNG: Setup khi clone code về máy mới

Khi clone code về máy khác, bạn **PHẢI** tạo file `.env.local` để AI chat hoạt động:

1. **Tạo file `.env.local`** ở thư mục gốc project (cùng cấp với `package.json`)

2. **Copy nội dung sau vào file `.env.local`:**

```env
# Chọn một trong hai (hoặc cả hai, hệ thống sẽ ưu tiên Groq)

# Groq API Key (Miễn phí - KHUYẾN NGHỊ)
# Lấy tại: https://console.groq.com/keys
GROQ_API_KEY=your_groq_api_key_here

# OpenAI API Key (Có phí)
# Lấy tại: https://platform.openai.com/account/api-keys
OPENAI_API_KEY=your_openai_api_key_here
```

3. **Thay thế `your_*_api_key_here`** bằng API key thật của bạn

4. **Khởi động lại dev server:**
```bash
npm run dev
```

### 📝 Lưu ý:
- File `.env.local` **KHÔNG** được commit lên Git (đã có trong `.gitignore`)
- Nếu không có API key, hệ thống vẫn hoạt động nhưng sẽ dùng **fallback responses** (không cần AI)
- **Groq** miễn phí và có hạn mức rộng rãi, khuyến nghị dùng
- **OpenAI** có phí nhưng chất lượng tốt hơn

### 🔧 Cấu trúc code:
- API route: `src/app/api/chat/route.ts`
- Client service: `src/services/chat.ts`
- UI component: `src/components/AdmissionsChat.tsx`
- Tích hợp: trang `src/app/tuyen-sinh/page.tsx`
