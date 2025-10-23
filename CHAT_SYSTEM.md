# Hệ thống Chat Tư vấn Tuyển sinh

## 🚀 Tính năng đã hoàn thiện

### 1. **Fallback thông minh**
- Tự động phân tích câu hỏi của người dùng
- Đưa ra thông tin phù hợp dựa trên từ khóa
- Hoạt động ngay cả khi không có API key

### 2. **Xử lý từ khóa thông minh**
Hệ thống nhận diện và phản hồi cho các chủ đề:

#### 📚 **Ngành học & Môn học**
- Từ khóa: `ngành`, `học`, `chuyên`, `môn`
- Phản hồi: Thông tin về các ngành Khoa học tự nhiên, Khoa học xã hội, Ngoại ngữ

#### 📊 **Điểm chuẩn & Thi cử**
- Từ khóa: `điểm`, `chuẩn`, `đầu vào`, `thi`
- Phản hồi: Điểm chuẩn năm 2024 cho từng ngành

#### 💰 **Học phí & Chi phí**
- Từ khóa: `học phí`, `phí`, `tiền`, `chi phí`
- Phản hồi: Thông tin học phí 2.500.000đ/tháng

#### 📄 **Hồ sơ & Đăng ký**
- Từ khóa: `hồ sơ`, `đăng ký`, `nộp`, `giấy tờ`
- Phản hồi: Danh sách hồ sơ cần thiết

#### 📍 **Địa chỉ & Vị trí**
- Từ khóa: `địa chỉ`, `ở đâu`, `vị trí`, `địa điểm`
- Phản hồi: Thông tin vị trí trường tại Đà Nẵng

#### 📞 **Liên hệ**
- Từ khóa: `liên hệ`, `số điện thoại`, `phone`, `gọi`
- Phản hồi: Thông tin liên hệ nhà trường

#### ⏰ **Thời gian tuyển sinh**
- Từ khóa: `thời gian`, `khi nào`, `tuyển sinh`
- Phản hồi: Thời gian tuyển sinh tháng 6-7

#### 🏫 **Cơ sở vật chất**
- Từ khóa: `cơ sở`, `trang thiết bị`, `phòng học`
- Phản hồi: Thông tin cơ sở vật chất hiện đại

#### 👨‍🏫 **Giáo viên**
- Từ khóa: `giáo viên`, `thầy cô`, `giảng dạy`
- Phản hồi: Thông tin đội ngũ giáo viên

#### 🎭 **Hoạt động ngoại khóa**
- Từ khóa: `hoạt động`, `năng khiếu`, `câu lạc bộ`
- Phản hồi: Thông tin hoạt động ngoại khóa

### 3. **Xử lý lỗi nâng cao**
- Xử lý lỗi mạng
- Xử lý lỗi API
- Thông báo lỗi thân thiện
- Gợi ý liên hệ trực tiếp

### 4. **UI/UX cải thiện**
- Indicator hệ thống thông minh
- Loading animation mượt mà
- Error handling tốt hơn
- Responsive design

## 🔧 Cấu hình nâng cao

### Sử dụng AI thật (Tùy chọn)
```bash
# Thêm vào .env.local
GROQ_API_KEY=your_groq_api_key_here
# hoặc
OPENAI_API_KEY=your_openai_api_key_here
```

### Không cần API key
Hệ thống hoạt động hoàn hảo với fallback thông minh!

## 📱 Cách sử dụng

1. **Mở chat** - Click vào icon chat ở góc phải
2. **Đặt câu hỏi** - Hỏi về bất kỳ chủ đề nào liên quan tuyển sinh
3. **Nhận phản hồi** - Hệ thống tự động phân tích và trả lời phù hợp

## 🎯 Ví dụ câu hỏi

- "Tôi muốn biết về ngành học"
- "Điểm chuẩn năm nay như thế nào?"
- "Học phí bao nhiêu?"
- "Cần hồ sơ gì để đăng ký?"
- "Trường ở đâu?"
- "Làm sao để liên hệ?"

## ✨ Lợi ích

- **Hoạt động 24/7** - Không cần cấu hình API
- **Thông minh** - Tự động phân tích câu hỏi
- **Thân thiện** - Giao diện đẹp, dễ sử dụng
- **Đầy đủ thông tin** - Phản hồi chi tiết về trường
- **Linh hoạt** - Dễ dàng thêm từ khóa mới
