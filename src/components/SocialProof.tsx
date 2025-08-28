const SocialProof = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Cộng đồng nói gì về kênh?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background p-6 rounded-xl text-left shadow-sm">
            <p className="text-muted-foreground mb-4">
              "Từ ngày xem kênh của chị, em đã tự tin và yêu bản thân hơn rất nhiều. Nội dung rất giá trị và gần gũi. Cảm ơn chị!"
            </p>
            <p className="font-bold text-pink-accent">- Bạn Minh Anh</p>
          </div>
          <div className="bg-background p-6 rounded-xl text-left shadow-sm">
            <p className="text-muted-foreground mb-4">
              "Video nào của chị cũng truyền cảm hứng và năng lượng tích cực. Em đã áp dụng được rất nhiều điều vào cuộc sống."
            </p>
            <p className="font-bold text-pink-accent">- Bạn Thuỳ Linh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;