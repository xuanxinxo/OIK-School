# 🚀 Hướng dẫn Setup Project

## Bước 1: Clone và cài đặt dependencies

```bash
git clone <repository-url>
cd fe
npm install
```

## Bước 2: Tạo file `.env.local`

**QUAN TRỌNG:** File này cần thiết để AI chat hoạt động!

1. Tạo file `.env.local` ở thư mục gốc (cùng cấp với `package.json`)

2. Copy nội dung sau:

```env
# Groq API Key (Miễn phí - KHUYẾN NGHỊ)
GROQ_API_KEY=your_groq_api_key_here

# Hoặc OpenAI API Key (Có phí)
OPENAI_API_KEY=your_openai_api_key_here
```

3. Lấy API key:
   - **Groq (Miễn phí):** https://console.groq.com/keys
   - **OpenAI (Có phí):** https://platform.openai.com/account/api-keys

4. Thay thế `your_*_api_key_here` bằng key thật

## Bước 3: Chạy project

```bash
npm run dev
```

Mở trình duyệt tại: http://localhost:3000

## ✅ Checklist khi clone về máy mới

- [ ] Đã chạy `npm install`
- [ ] Đã tạo file `.env.local`
- [ ] Đã thêm API key vào `.env.local`
- [ ] Đã restart dev server sau khi thêm `.env.local`
- [ ] Đã test AI chat tại trang `/tuyen-sinh`

## 🔍 Troubleshooting

### AI không trả lời?
1. Kiểm tra file `.env.local` có tồn tại không
2. Kiểm tra API key có đúng format không (bắt đầu với `gsk_` cho Groq hoặc `sk-` cho OpenAI)
3. Kiểm tra console browser có lỗi gì không
4. Kiểm tra terminal có log lỗi từ API route không

### Lỗi import?
- Đảm bảo dùng import path: `@/components/...` (không phải `@/src/components/...`)
- Chạy `npm run build` để kiểm tra lỗi TypeScript

### Port đã được sử dụng?
```bash
# Thay đổi port
npm run dev -- -p 3001
```

## 📝 Lưu ý

- File `.env.local` **KHÔNG** được commit lên Git
- Nếu không có API key, hệ thống vẫn chạy nhưng dùng fallback responses
- Groq free tier có hạn mức 14,400 requests/ngày

