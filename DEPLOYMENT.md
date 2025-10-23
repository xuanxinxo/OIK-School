# Hướng dẫn Deploy và Cấu hình Chat AI

## Vấn đề hiện tại
Khi deploy lên domain, chat hiển thị thông báo: "Xin chào! Hiện tại hệ thống chưa cấu hình khoá AI..."

## Nguyên nhân
- Không có API key được cấu hình trong environment variables
- Hệ thống fallback về chế độ tĩnh khi thiếu API key

## Giải pháp

### 1. Cấu hình Environment Variables

#### Option 1: Sử dụng OpenAI API
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

#### Option 2: Sử dụng Groq API (Miễn phí, nhanh hơn)
```bash
GROQ_API_KEY=your_groq_api_key_here
```

### 2. Cách lấy API Key

#### OpenAI API Key:
1. Truy cập: https://platform.openai.com/api-keys
2. Đăng nhập/đăng ký tài khoản
3. Tạo API key mới
4. Copy key và thêm vào environment variables

#### Groq API Key (Khuyến nghị):
1. Truy cập: https://console.groq.com/keys
2. Đăng ký tài khoản miễn phí
3. Tạo API key
4. Copy key và thêm vào environment variables

### 3. Cấu hình trên các platform deploy

#### Vercel:
1. Vào project settings
2. Chọn "Environment Variables"
3. Thêm `OPENAI_API_KEY` hoặc `GROQ_API_KEY`
4. Redeploy

#### Netlify:
1. Vào Site settings
2. Chọn "Environment variables"
3. Thêm biến môi trường
4. Redeploy

#### Railway/Render:
1. Vào project settings
2. Chọn "Environment"
3. Thêm biến môi trường
4. Redeploy

### 4. Fallback thông minh
Nếu không cấu hình API key, hệ thống sẽ:
- Phân tích câu hỏi của người dùng
- Đưa ra thông tin cơ bản về trường
- Gợi ý liên hệ để được tư vấn chi tiết

### 5. Test sau khi cấu hình
1. Deploy lại ứng dụng
2. Mở chat và hỏi: "Tôi muốn biết về ngành học"
3. Kiểm tra xem có nhận được câu trả lời AI hay không

## Lưu ý
- Groq API miễn phí và nhanh hơn OpenAI
- Nên sử dụng Groq cho production
- Luôn giữ bí mật API key
