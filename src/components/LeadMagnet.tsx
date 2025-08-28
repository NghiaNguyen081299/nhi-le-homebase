import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LeadMagnet = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Send data to your Email Marketing service
    console.log('Gift Form Data:', formData);
    
    toast({
      title: "Cảm ơn bạn đã đăng ký! 🎉",
      description: "Món quà đang trên đường đến với email của bạn.",
    });
    
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Cảm ơn bạn đã đăng ký! 🎉</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Món quà đang trên đường đến với email của bạn. Hãy kiểm tra hộp thư đến (và cả mục quảng cáo/spam) nhé!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Món Quà Đặc Biệt Dành Riêng Cho Bạn!</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nhận ngay Ebook <strong>"5 Bước Xây Dựng Thói Quen Tích Cực"</strong> mà mình đã đúc kết để bắt đầu hành trình thay đổi bản thân nhé!
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Tên của bạn" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Địa chỉ email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button 
              type="submit" 
              className="gradient-button text-white font-bold py-3 px-8 rounded-full w-full md:w-auto text-lg shadow-lg transition-transform duration-300"
            >
              💌 Gửi quà cho tôi ngay!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;