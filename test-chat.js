// Script test chat API
const testChat = async () => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'user', content: 'cagho' }
        ]
      })
    });

    const data = await response.json();
    console.log('Response:', data);
    
    if (data.reply && data.reply.includes('trợ lý tư vấn tuyển sinh')) {
      console.log('✅ Fallback mode hoạt động đúng');
    } else {
      console.log('❌ Fallback mode chưa hoạt động');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

// Chạy test
testChat();
