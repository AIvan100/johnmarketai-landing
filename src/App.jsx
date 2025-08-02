import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  BarChart3, 
  Zap, 
  Brain, 
  MessageSquare,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Award,
  Lightbulb
} from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with webhook or amoCRM
    console.log('Form submitted:', formData)
    alert('Спасибо! Я свяжусь с вами в ближайшее время.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Рост, который можно{' '}
            <span className="text-blue-600">потрогать</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-маркетинг и автоматизация для локальных бизнесов. Персональный подход к каждому проекту.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Получить аудит бесплатно
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Варианты сотрудничества
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Выберите формат работы, который подходит именно вашему бизнесу
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Полный охват */}
            <Card className="relative overflow-hidden border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-8">
                <Badge className="w-fit mx-auto mb-4 bg-yellow-400 text-black">Популярный</Badge>
                <CardTitle className="text-2xl font-bold text-gray-900">Полный охват</CardTitle>
                <CardDescription className="text-gray-600">Комплексное решение от стратегии до результата</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-blue-600" />
                    Исследование и стратегия
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Глубокий анализ вашей ниши</li>
                    <li>• Персональная стратегия роста</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 flex items-center pt-4">
                    <Zap className="h-4 w-4 mr-2 text-blue-600" />
                    Сайт и контент
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Создание/доработка сайта</li>
                    <li>• AI-генерация контента</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 flex items-center pt-4">
                    <TrendingUp className="h-4 w-4 mr-2 text-blue-600" />
                    Реклама и продвижение
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Настройка рекламных кампаний</li>
                    <li>• AI-креативы и A/B тесты</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 flex items-center pt-4">
                    <BarChart3 className="h-4 w-4 mr-2 text-blue-600" />
                    Автоматизация
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Настройка CRM и воронок</li>
                    <li>• Чат-боты и автоответчики</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Стабильный рост узнаваемости */}
            <Card className="relative overflow-hidden border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">Стабильный рост узнаваемости</CardTitle>
                <CardDescription className="text-gray-600">Построение сильного локального бренда</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-blue-600" />
                    Анализ и позиционирование
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Исследование локального рынка</li>
                    <li>• Разработка уникального позиционирования</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 flex items-center pt-4">
                    <Zap className="h-4 w-4 mr-2 text-blue-600" />
                    Сайт и присутствие
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Лендинг с фокусом на бренд</li>
                    <li>• SEO-оптимизация под регион</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 flex items-center pt-4">
                    <TrendingUp className="h-4 w-4 mr-2 text-blue-600" />
                    Продвижение
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Таргетированная реклама</li>
                    <li>• Контент-стратегия</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 flex items-center pt-4">
                    <BarChart3 className="h-4 w-4 mr-2 text-blue-600" />
                    Аналитика
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Отслеживание узнаваемости</li>
                    <li>• Базовая автоматизация</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Шёпот в онлайне */}
            <Card className="relative overflow-hidden border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">Шёпот в онлайне</CardTitle>
                <CardDescription className="text-gray-600">Первые шаги в digital с AI-поддержкой</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-blue-600" />
                    Быстрый старт
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Экспресс-анализ возможностей</li>
                    <li>• Определение точек роста</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 flex items-center pt-4">
                    <Zap className="h-4 w-4 mr-2 text-blue-600" />
                    Минимальное присутствие
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Простой лендинг</li>
                    <li>• Базовая настройка</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 flex items-center pt-4">
                    <TrendingUp className="h-4 w-4 mr-2 text-blue-600" />
                    Первая реклама
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Запуск на одной площадке</li>
                    <li>• AI-помощь в создании объявлений</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 flex items-center pt-4">
                    <BarChart3 className="h-4 w-4 mr-2 text-blue-600" />
                    Контроль результата
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-6">
                    <li>• Простая аналитика</li>
                    <li>• Еженедельные отчёты</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Результаты моих клиентов за 30 дней
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Реальные цифры из кейсов. Каждый проект — индивидуальный подход.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">+150%</h3>
              <p className="text-gray-600">Увеличение заявок</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">+200%</h3>
              <p className="text-gray-600">Рост трафика</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">-70%</h3>
              <p className="text-gray-600">Экономия времени владельца</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Обо мне</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Я помогаю локальным бизнесам расти с помощью AI-технологий и автоматизации. 
            Работаю персонально с каждым клиентом, изучаю специфику бизнеса и создаю решения под конкретные задачи.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-экспертиза</h3>
              <p className="text-gray-600">Использую передовые AI-инструменты для создания контента и автоматизации процессов</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Персональный подход</h3>
              <p className="text-gray-600">Каждый проект уникален. Изучаю ваш бизнес и создаю индивидуальную стратегию</p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Практические решения</h3>
              <p className="text-gray-600">Фокусируюсь на результате. Внедряю только то, что реально работает для вашей ниши</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Кейсы и отзывы
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Истории успеха моих клиентов — от идеи до результата
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    А
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Анна Петрова</h4>
                    <p className="text-sm text-gray-600">Владелец кафе</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "За месяц работы заказы выросли в 2 раза. Особенно впечатлил чат-бот для записи столиков — 
                  теперь гости бронируют места сами, а я сосредоточена на кухне."
                </p>
                <div className="text-sm text-blue-600 font-semibold">
                  Результат: +120% заказов, автоматизация бронирования
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    М
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Михаил Сидоров</h4>
                    <p className="text-sm text-gray-600">Директор языковой школы</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Индивидуальный подход — это про него. Изучил специфику образовательного бизнеса, 
                  настроил воронки под разные курсы. Качество лидов выросло кардинально."
                </p>
                <div className="text-sm text-blue-600 font-semibold">
                  Результат: +180% студентов, сегментация по курсам
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    Е
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Елена Козлова</h4>
                    <p className="text-sm text-gray-600">Владелец фитнес-студии</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Профессионал своего дела! Автоматизировал запись на тренировки, настроил напоминания. 
                  Теперь студия работает как швейцарские часы, а я могу больше времени уделять клиентам."
                </p>
                <div className="text-sm text-blue-600 font-semibold">
                  Результат: автоматизация записи, +90% retention
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Получите персональный аудит вашего бизнеса
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Проанализирую ваш проект и предложу конкретные шаги для роста с помощью AI и автоматизации
          </p>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-gray-300"
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300"
                />
                <Textarea
                  name="message"
                  placeholder="Расскажите о вашем бизнесе и текущих задачах"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="border-gray-300"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg"
                >
                  Получить персональный аудит
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">AI-специалист по маркетингу</h3>
          <p className="text-gray-400 mb-6">Персональные решения для роста вашего бизнеса</p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+7 (915) 986-84-97</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>ivandegtyarev3@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

