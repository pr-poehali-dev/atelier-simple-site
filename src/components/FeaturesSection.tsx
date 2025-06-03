import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Scissors",
      title: "Ключевые ресурсы",
      description: "Ткани, швейные машинки, сотрудники",
    },
    {
      icon: "Building2",
      title: "Структура издержек",
      description: "Аренда, закупка ткани, обслуживание швейных машин",
    },
    {
      icon: "FileText",
      title: "Содержание штатов",
      description: "Профессиональная команда мастеров",
    },
    {
      icon: "DollarSign",
      title: "Потоки поступления доходов",
      description: "Средства, полученные с продажи изделий/выполнения услуг",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600">
            Профессиональный подход и качество на каждом этапе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
