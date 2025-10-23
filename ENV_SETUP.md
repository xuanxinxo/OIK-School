# Cấu hình Environment Variables

## Tạo file .env.local

Tạo file `.env.local` trong thư mục gốc của project với nội dung:

```bash
# Chọn một trong hai options:

# Option 1: OpenAI API (Trả phí, chất lượng cao)
OPENAI_API_KEY=your_openai_api_key_here

# Option 2: Groq API (Miễn phí, nhanh hơn) - Khuyến nghị
GROQ_API_KEY=your_groq_api_key_here
```

## Cách lấy API Key

### Groq API (Khuyến nghị - Miễn phí)
1. Truy cập: https://console.groq.com/keys
2. Đăng ký tài khoản miễn phí
3. Tạo API key mới
4. Copy key và thay thế `your_groq_api_key_here`

### OpenAI API
1. Truy cập: https://platform.openai.com/api-keys
2. Đăng nhập/đăng ký tài khoản
3. Tạo API key mới
4. Copy key và thay thế `your_openai_api_key_here`

## Deploy lên Production

Khi deploy lên Vercel/Netlify/Railway, thêm environment variables trong settings của platform đó.

## Test

Sau khi cấu hình, test bằng cách:
1. Chạy `npm run dev`
2. Mở chat và hỏi: "Tôi muốn biết về ngành học"
3. Nếu có API key: Sẽ nhận được câu trả lời AI
4. Nếu không có API key: Sẽ nhận được fallback response thông minh
