import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LivestreamQuestion = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConsentError, setShowConsentError] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setShowConsentError(true);
      return;
    }
    
    setShowConsentError(false);
    
    // TODO: Send this data to your backend/Google Sheets
    console.log('Livestream Question Data:', formData);
    
    toast({
      title: "Đã gửi câu hỏi thành công! ✅",
      description: "Nhi sẽ xem qua và chọn những câu hỏi hay nhất cho buổi livestream sắp tới.",
    });
    
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-20 bg-pink-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Đã gửi câu hỏi thành công! ✅</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cảm ơn bạn rất nhiều! Nhi sẽ xem qua và chọn những câu hỏi hay nhất cho buổi livestream sắp tới. Hẹn gặp lại bạn nhé!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-pink-light">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Đặt Câu Hỏi Livestream Cho Nhi Lê</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Có điều gì bạn luôn muốn hỏi Nhi trong buổi livestream sắp tới? Hãy để lại câu hỏi ở đây. Những câu hỏi hay nhất sẽ được chọn để trả lời trực tiếp!
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left">
            <div className="mb-4">
              <label htmlFor="ls_name" className="block text-foreground font-medium mb-2">Họ và tên</label>
              <input 
                type="text" 
                id="ls_name" 
                name="name" 
                placeholder="Nguyễn Văn A" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ls_email" className="block text-foreground font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="ls_email" 
                name="email" 
                placeholder="bancua@email.com" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ls_phone" className="block text-foreground font-medium mb-2">Số điện thoại</label>
              <input 
                type="tel" 
                id="ls_phone" 
                name="phone" 
                placeholder="090..." 
                required 
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ls_question" className="block text-foreground font-medium mb-2">Câu hỏi của bạn</label>
              <textarea 
                id="ls_question" 
                name="question" 
                rows={4} 
                placeholder="Chị Nhi ơi, cho em hỏi..." 
                required 
                value={formData.question}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-lg border-2 border-border focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-6 flex items-start">
              <input 
                type="checkbox" 
                id="ls_consent" 
                name="consent" 
                required 
                checked={formData.consent}
                onChange={handleChange}
                className="h-5 w-5 mt-1 rounded border-border text-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="ls_consent" className="ml-3 text-sm text-muted-foreground">
                Tôi đồng ý nhận thông tin, tin tức và các ưu đãi từ team Nhi Lê qua email và SĐT đã cung cấp.
              </label>
            </div>
            {showConsentError && (
              <div className="text-destructive text-sm mb-4 text-center">
                Bạn cần đồng ý với điều khoản để tiếp tục.
              </div>
            )}
            <button 
              type="submit" 
              className="gradient-button text-white font-bold py-3 px-8 rounded-full w-full text-lg shadow-lg transition-transform duration-300 text-center"
            >
              Gửi câu hỏi ngay
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LivestreamQuestion;