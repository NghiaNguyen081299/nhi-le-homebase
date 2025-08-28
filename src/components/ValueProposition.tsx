const ValueProposition = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Bạn nhận được gì khi ở đây?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {/* Item 1 */}
          <div className="p-6 rounded-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pink-light text-pink-accent mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">✨ Giải Đáp Tức Thì 24/7</h3>
            <p className="text-muted-foreground">Trợ lý ảo luôn sẵn sàng trả lời các câu hỏi thường gặp về nội dung video, thiết bị, hay thông tin cá nhân của mình.</p>
          </div>
          
          {/* Item 2 */}
          <div className="p-6 rounded-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-light text-orange-accent mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">🎁 Nhận Quà Tặng Độc Quyền</h3>
            <p className="text-muted-foreground">Trở thành người đầu tiên nhận tài liệu, checklist, hoặc thông báo đặc biệt mà mình chỉ chia sẻ tại đây.</p>
          </div>
          
          {/* Item 3 */}
          <div className="p-6 rounded-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-teal-light text-teal-accent mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27 .293 3.423 .379.35 .026.67 .21 .865 .501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043 .513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">🤝 Kết Nối Gần Hơn</h3>
            <p className="text-muted-foreground">Những góp ý hay câu hỏi phức tạp sẽ được chuyển thẳng tới team mình và được phản hồi sớm nhất.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;