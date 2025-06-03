import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesGrid = () => {
  const services = [
    {
      icon: "Shirt",
      title: "Шить одежду",
      subtitle: "Продавать различные материалы",
      description:
        "Создание уникальных нарядов, работа с тканями премиум-класса",
      brands: [
        "BALENCIAGA",
        "RICK OWENS",
        "ERL",
        "KANYE WEST",
        "GOSHA РУБЧИНСКИЙ",
      ],
    },
    {
      icon: "Users",
      title: "Ценностные предложения",
      subtitle: "Специалист наравне с молодёжью",
      description:
        "Работа с любимыми материалами, креативность, работа по видеосвязи",
    },
    {
      icon: "Gift",
      title: "Взаимоотношения с клиентами",
      subtitle: "Качественная работа коммуникативность",
      description: "Индивидуальный подход к каждому клиенту",
    },
    {
      icon: "Radio",
      title: "Каналы сбыта",
      subtitle: "Сарафанное радио флаеры теги Назборах",
      description: "Многоканальное продвижение услуг",
    },
    {
      icon: "Users2",
      title: "Потребительские сегменты",
      subtitle: "Костюмеры, фурри, косплейщики, шоумены, бизнесмены",
      description: "Работаем с различными целевыми группами",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр швейных услуг от создания эксклюзивных нарядов до
            ремонта любимых вещей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-gray-900"
                  />
                </div>
                <CardTitle className="text-xl font-montserrat text-gray-900">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-yellow-600 font-medium">
                  {service.subtitle}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.brands && (
                  <div className="space-y-1">
                    {service.brands.map((brand, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-gray-500 font-medium"
                      >
                        {brand}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
