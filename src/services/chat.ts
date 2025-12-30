export type MessageContent = string | { text?: string; imageUrl?: string };

export type ChatTurn = { 
  role: "user" | "assistant"; 
  content: MessageContent;
};

export async function sendChat(messages: ChatTurn[]): Promise<string> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        messages: messages.map(m => ({
          ...m,
          content: typeof m.content === 'string' ? m.content : (m.content.text || '')
        }))
      }),
    });

    if (!res.ok) {
      try {
        const data = await res.json();
        const msg = (data && (data.reply || data.error)) as string | undefined;
        return (
          msg ||
          "Xin lỗi, hiện hệ thống đang bận hoặc chưa được cấu hình khóa AI. Vui lòng thử lại sau hoặc liên hệ nhà trường."
        );
      } catch {
        return "Xin lỗi, hiện hệ thống đang bận hoặc chưa được cấu hình khóa AI. Vui lòng thử lại sau hoặc liên hệ nhà trường.";
      }
    }

    const data = (await res.json()) as { reply?: string };
    return data.reply ?? "Xin lỗi, không nhận được phản hồi từ hệ thống. Vui lòng thử lại sau.";
  } catch (error) {
    console.error('Network error:', error);
    return "Xin lỗi, có lỗi kết nối. Vui lòng kiểm tra internet và thử lại sau.";
  }
}

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      throw new Error('Upload failed');
    }

    const data = await res.json();
    return data.url;
  } catch (error) {
    console.error('Upload error:', error);
    throw new Error('Không thể tải ảnh lên. Vui lòng thử lại sau.');
  }
}


