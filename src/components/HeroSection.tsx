import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
              Профессиональное
              <span className="text-yellow-400 block">Ателье</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              От эксклюзивных нарядов до ремонта одежды. Работаем с люксовыми
              брендами и любимыми вещами с равным профессионализмом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500"
              >
                <Icon name="Scissors" size={20} />
                Записаться на консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black"
              >
                <Icon name="Phone" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fbd51c2cd9c6?w=500"
                alt="Профессиональное швейное оборудование"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-6 grid grid-cols-3 gap-4 text-center text-black">
                <div>
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm">лет опыта</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm">клиентов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24ч</div>
                  <div className="text-sm">экспресс</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
