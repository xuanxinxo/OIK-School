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

Để bật Chat AI (sử dụng OpenAI Chat Completions):

1. Tạo file `.env.local` ở project root với nội dung:

```
OPENAI_API_KEY=your_openai_api_key_here
```

2. Khởi động lại dev server nếu đang chạy.

- API route: `src/app/api/chat/route.ts`
- Client service: `src/services/chat.ts`
- UI component: `src/components/AdmissionsChat.tsx`
- Tích hợp: trang `src/app/tuyen-sinh/page.tsx` (hiển thị sau khi có kết quả test)

Nếu không thiết lập `OPENAI_API_KEY`, API sẽ trả về câu trả lời fallback thông báo chưa cấu hình khóa.

### Dùng miễn phí với Groq (khuyến nghị)
Bạn có thể dùng Groq free tier thay cho OpenAI:

1. Tạo tài khoản và API key tại `https://console.groq.com/keys`
2. Thêm vào `.env.local`:

```
GROQ_API_KEY=your_groq_api_key_here
```

- Hệ thống sẽ tự ưu tiên Groq nếu có `GROQ_API_KEY`; nếu không có, sẽ dùng `OPENAI_API_KEY`; nếu đều thiếu sẽ fallback thông báo tĩnh.
