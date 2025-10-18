import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const packages = [
    {
      name: 'Базовый',
      price: '15 000 ₽',
      duration: '2 часа',
      features: [
        'Безлимитные фото',
        '2 фона на выбор',
        'Цифровая галерея',
        'Реквизит в комплекте',
        'Моментальная печать'
      ],
      color: 'bg-gradient-to-br from-orange-400 to-orange-600',
      icon: 'Camera'
    },
    {
      name: 'Стандарт',
      price: '25 000 ₽',
      duration: '4 часа',
      features: [
        'Безлимитные фото',
        '4 фона на выбор',
        'Цифровая галерея',
        'Премиум реквизит',
        'Моментальная печать',
        'Персонализированный дизайн',
        'Видео-бумеранги'
      ],
      color: 'bg-gradient-to-br from-pink-500 to-purple-600',
      icon: 'Sparkles',
      popular: true
    },
    {
      name: 'Премиум',
      price: '40 000 ₽',
      duration: '6 часов',
      features: [
        'Безлимитные фото',
        '6+ фонов на выбор',
        'Цифровая галерея HD',
        'VIP реквизит',
        'Моментальная печать премиум',
        'Персонализированный дизайн',
        'Видео-бумеранги',
        'Фотокнига в подарок',
        'Профессиональный оператор'
      ],
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      icon: 'Star'
    }
  ];

  const galleryImages = [
    { id: 1, alt: 'Праздник 1' },
    { id: 2, alt: 'Праздник 2' },
    { id: 3, alt: 'Праздник 3' },
    { id: 4, alt: 'Праздник 4' },
    { id: 5, alt: 'Праздник 5' },
    { id: 6, alt: 'Праздник 6' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Camera" size={32} className="text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              ФотоБудка
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#booking" className="hover:text-primary transition-colors">Бронирование</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
            Забронировать
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Сделай свой праздник{' '}
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  незабываемым!
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональная фотобудка для любых мероприятий. Яркие эмоции, веселье и моментальные фото для ваших гостей! 🎉
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-lg px-8">
                  Забронировать сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Посмотреть цены
                </Button>
              </div>
            </div>
            <div className="flex-1 animate-scale-in">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 flex items-center justify-center min-h-[400px]">
                  <Icon name="Camera" size={200} className="text-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Всё для идеального праздника</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Image', title: 'Безлимитные фото', desc: 'Делайте столько снимков, сколько хотите!' },
              { icon: 'Palette', title: 'Разные фоны', desc: 'Выбирайте из множества красочных фонов' },
              { icon: 'Gift', title: 'Реквизит', desc: 'Огромный выбор весёлых аксессуаров' },
              { icon: 'Download', title: 'Цифровая галерея', desc: 'Все фото в онлайн-галерее' }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Пакеты услуг</h2>
            <p className="text-xl text-gray-600">Выберите идеальный вариант для вашего мероприятия</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <Card key={idx} className={`relative overflow-hidden transition-all ${pkg.popular ? 'ring-4 ring-pink-500 shadow-2xl scale-105' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className={`${pkg.color} text-white pb-8`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={pkg.icon} size={32} />
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  </div>
                  <div className="text-4xl font-bold">{pkg.price}</div>
                  <CardDescription className="text-white/90 text-lg">{pkg.duration}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-gray-600">Посмотрите на счастливые лица наших клиентов</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.id} className="relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-orange-200 via-pink-200 to-blue-200 cursor-pointer group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-white/50 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Забронировать</h2>
              <p className="text-xl text-gray-600">Заполните форму, и мы свяжемся с вами</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Дата мероприятия</label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем мероприятии..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-lg py-6">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-white" />
                </div>
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-white" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">info@photobooth.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-gray-600">г. Москва, ул. Праздничная, 1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Camera" size={24} className="text-primary" />
            <span className="text-xl font-bold">ФотоБудка</span>
          </div>
          <p className="text-gray-400">© 2024 ФотоБудка. Делаем праздники незабываемыми!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
