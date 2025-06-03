import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-montserrat mb-6">
              Готовы начать работу?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Свяжитесь с нами для консультации и обсуждения вашего проекта. Мы
              работаем как с индивидуальными клиентами, так и с компаниями.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <Icon name="Phone" size={24} className="text-yellow-400" />
                <span className="text-lg">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="Mail" size={24} className="text-yellow-400" />
                <span className="text-lg">info@atelier-pro.ru</span>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="MapPin" size={24} className="text-yellow-400" />
                <span className="text-lg">Москва, ул. Модная, 15</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              <Icon name="Calendar" size={20} />
              Записаться на консультацию
            </Button>
          </div>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-montserrat">
                Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Понедельник - Пятница</span>
                <span className="text-white font-medium">9:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Суббота</span>
                <span className="text-white font-medium">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Воскресенье</span>
                <span className="text-white font-medium">Выходной</span>
              </div>
              <div className="border-t border-white/20 pt-4 mt-6">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Icon name="Clock" size={16} />
                  <span className="text-sm">
                    Экспресс-услуги 24/7 по договоренности
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
