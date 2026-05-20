import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О компании", href: "#about" },
  { label: "Продукция", href: "#products" },
  { label: "Производство", href: "#production" },
  { label: "Сертификаты", href: "#certs" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const PRODUCTS = [
  {
    title: "Силовые кабели",
    desc: "Кабели для передачи электроэнергии в промышленных и гражданских объектах. Напряжение до 35 кВ.",
    icon: "Zap",
    specs: ["0.6/1 кВ — 35 кВ", "Сечение 1,5–240 мм²", "ГОСТ 31996-2012"],
  },
  {
    title: "Контрольные кабели",
    desc: "Для контрольных цепей, вторичной коммутации и сигнализации в стационарных установках.",
    icon: "Sliders",
    specs: ["До 660 В", "4–37 жил", "ГОСТ 1508-78"],
  },
  {
    title: "Кабели связи",
    desc: "Телефонные и сигнальные кабели для магистральных и распределительных линий связи.",
    icon: "Radio",
    specs: ["HF/LF диапазон", "Экранированные", "ГОСТ 22012-82"],
  },
  {
    title: "Провода ПВС/ШВВП",
    desc: "Соединительные провода для бытовых приборов и переносного электрооборудования.",
    icon: "Cable",
    specs: ["220/380 В", "2–5 жил", "ГОСТ 7399-97"],
  },
  {
    title: "Бронированные кабели",
    desc: "Защищённые кабели для прокладки в земле, трубах и агрессивных средах.",
    icon: "Shield",
    specs: ["До 10 кВ", "Двойная броня", "ГОСТ 18410-73"],
  },
  {
    title: "Специальные кабели",
    desc: "Гибкие, огнестойкие, маслостойкие кабели для особых условий эксплуатации.",
    icon: "Flame",
    specs: ["−60°C до +250°C", "FR/FRHF", "Под заказ"],
  },
];

const STATS = [
  { value: "30+", label: "лет на рынке" },
  { value: "500+", label: "наименований продукции" },
  { value: "2000+", label: "клиентов по России" },
  { value: "12", label: "производственных линий" },
];

const CERTS = [
  { name: "ГОСТ Р 31996-2012", desc: "Кабели силовые с пластмассовой изоляцией" },
  { name: "ISO 9001:2015", desc: "Система менеджмента качества" },
  { name: "ТР ТС 004/2011", desc: "Технический регламент Таможенного союза" },
  { name: "ГОСТ IEC 60502", desc: "Кабели силовые на напряжение от 1 до 30 кВ" },
  { name: "ПОЖАРНЫЙ СЕРТИФИКАТ", desc: "Соответствие требованиям пожарной безопасности" },
  { name: "РОССТАНДАРТ", desc: "Регистрация в реестре сертификатов соответствия" },
];

const BLOG_POSTS = [
  {
    date: "12 мая 2026",
    category: "Технологии",
    title: "Новые стандарты пожаростойких кабелей 2026",
    excerpt: "Обновлённые требования ГОСТ и что они означают для проектировщиков и строителей.",
  },
  {
    date: "28 апр 2026",
    category: "Производство",
    title: "Запуск новой линии по производству кабелей до 35 кВ",
    excerpt: "Инвестиции в оборудование позволили увеличить производительность на 40% при том же качестве.",
  },
  {
    date: "10 апр 2026",
    category: "Рынок",
    title: "Импортозамещение в кабельной отрасли: итоги 2025",
    excerpt: "Российские производители заняли 87% внутреннего рынка — разбираем цифры и прогнозы.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", email: "", type: "order", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10" style={{ background: "rgba(17,17,17,0.96)", backdropFilter: "blur(8px)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: "#f60" }}>
              <span className="text-white text-sm font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>КЗ</span>
            </div>
            <span className="text-white text-lg font-semibold tracking-wider uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>КабельЗавод</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-white/70 hover:text-orange-400 text-sm tracking-wide transition-colors duration-200" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#order" className="hidden lg:block text-white text-sm font-medium px-5 py-2 tracking-wider uppercase transition-colors duration-200 hover:opacity-90" style={{ background: "#f60", fontFamily: "'Oswald', sans-serif" }}>
            Оставить заявку
          </a>

          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4" style={{ background: "#111" }}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-white/70 hover:text-orange-400 text-sm" onClick={() => setMenuOpen(false)}>{link.label}</a>
            ))}
            <a href="#order" className="text-white text-sm font-medium px-5 py-2 text-center tracking-wider uppercase" style={{ background: "#f60", fontFamily: "'Oswald', sans-serif" }} onClick={() => setMenuOpen(false)}>
              Оставить заявку
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/daf4b0d5-e0d0-48a6-94c7-248a64d027d0/files/ff8acacd-9ae2-4b5d-bb97-114957a9bed7.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0e0e0e",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.25) 100%)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "#f60" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-40 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6" style={{ animation: "fade-up 0.7s ease forwards" }}>
              <div className="w-12 h-px" style={{ background: "#f60" }} />
              <span className="text-sm tracking-[0.2em] uppercase" style={{ color: "#f90", fontFamily: "'IBM Plex Sans', sans-serif" }}>Производство с 1994 года</span>
            </div>

            <h1 className="font-bold text-white leading-none tracking-tight uppercase mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              Кабели<br />
              <span style={{ color: "#f60" }}>Мирового</span><br />
              Качества
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Производство и поставка кабельно-проводниковой продукции для промышленных, энергетических и строительных объектов по всей России.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#order" className="text-white text-sm font-medium px-8 py-4 tracking-[0.15em] uppercase transition-all duration-200 text-center hover:opacity-90" style={{ background: "#f60", fontFamily: "'Oswald', sans-serif" }}>
                Оформить заявку
              </a>
              <a href="#products" className="text-white text-sm font-medium px-8 py-4 tracking-[0.15em] uppercase transition-all duration-200 text-center border" style={{ borderColor: "rgba(255,255,255,0.35)", fontFamily: "'Oswald', sans-serif" }}>
                Каталог продукции
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 right-0 border-t" style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)", borderColor: "rgba(255,255,255,0.1)" }}>
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-3xl font-bold" style={{ color: "#f60", fontFamily: "'Oswald', sans-serif" }}>{stat.value}</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'IBM Plex Sans', sans-serif" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: "#f60" }} />
                <span className="text-sm tracking-[0.2em] uppercase" style={{ color: "#f60", fontFamily: "'IBM Plex Sans', sans-serif" }}>О компании</span>
              </div>
              <h2 className="font-bold uppercase leading-tight mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#111" }}>
                Надёжный партнёр<br />в кабельной отрасли
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#666", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                Более 30 лет мы производим кабельно-проводниковую продукцию для крупнейших энергетических, нефтегазовых и строительных компаний России. Наш завод оснащён современным европейским оборудованием и располагает собственной лабораторией контроля качества.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#666", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                Мы сертифицированы по ISO 9001:2015 и производим продукцию в соответствии с ГОСТ, МЭК и нормами Технического регламента Таможенного союза.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", text: "Сертифицированное производство" },
                  { icon: "Truck", text: "Доставка по всей России" },
                  { icon: "Clock", text: "Срок изготовления от 3 дней" },
                  { icon: "Headphones", text: "Техническая поддержка 24/7" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(255,102,0,0.1)" }}>
                      <Icon name={item.icon} size={16} className="text-orange-500" />
                    </div>
                    <span className="text-sm leading-tight" style={{ color: "#555", fontFamily: "'IBM Plex Sans', sans-serif" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/daf4b0d5-e0d0-48a6-94c7-248a64d027d0/files/fe9a9961-a363-4f4e-8ad9-1b52c31c1189.jpg"
                alt="Производство"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-4 -left-4 p-6 w-40" style={{ background: "#f60" }}>
                <div className="text-4xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>30+</div>
                <div className="text-xs uppercase tracking-wider mt-1 text-white/80" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>лет опыта</div>
              </div>
              <div className="absolute top-4 right-4 px-4 py-2" style={{ background: "#111" }}>
                <span className="text-xs tracking-wider text-white" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24" style={{ background: "#f5f4f2" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: "#f60" }} />
                <span className="text-sm tracking-[0.2em] uppercase" style={{ color: "#f60", fontFamily: "'IBM Plex Sans', sans-serif" }}>Продукция</span>
              </div>
              <h2 className="font-bold uppercase leading-tight" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#111" }}>
                Каталог кабелей
              </h2>
            </div>
            <a href="#order" className="hidden md:block text-sm px-6 py-3 uppercase tracking-wider transition-colors duration-200 border font-medium" style={{ borderColor: "#f60", color: "#f60", fontFamily: "'Oswald', sans-serif" }}>
              Запросить КП
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.title} className="bg-white border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 group" style={{ borderColor: "#e5e7eb" }}>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center mb-5 transition-colors duration-300" style={{ background: "rgba(255,102,0,0.1)" }}>
                    <Icon name={product.icon} size={20} className="text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif", color: "#111" }}>{product.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#666", fontFamily: "'IBM Plex Sans', sans-serif" }}>{product.desc}</p>
                  <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span key={spec} className="bg-gray-100 text-xs px-2 py-1" style={{ color: "#666", fontFamily: "'IBM Plex Sans', sans-serif" }}>{spec}</span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-100 px-6 py-3 flex justify-between items-center">
                  <span className="text-xs" style={{ color: "#aaa", fontFamily: "'IBM Plex Sans', sans-serif" }}>Уточнить наличие</span>
                  <Icon name="ArrowRight" size={16} className="text-orange-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION */}
      <section id="production" className="py-24 relative overflow-hidden" style={{ background: "#111" }}>
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "#f60" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "#f60" }} />
            <span className="text-sm tracking-[0.2em] uppercase" style={{ color: "#f90", fontFamily: "'IBM Plex Sans', sans-serif" }}>Производство</span>
          </div>
          <h2 className="font-bold text-white uppercase leading-tight mb-14" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Современное<br />предприятие
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://cdn.poehali.dev/projects/daf4b0d5-e0d0-48a6-94c7-248a64d027d0/files/6c7a4997-d633-4a73-8e12-1156b2a983cf.jpg"
              alt="Кабели"
              className="w-full object-cover"
              style={{ aspectRatio: "4/3" }}
            />

            <div className="space-y-8">
              {[
                { num: "01", title: "Волочение и скрутка", desc: "Современные волочильные машины обеспечивают точные размеры токопроводящих жил. Автоматизированный контроль диаметра на каждом этапе." },
                { num: "02", title: "Изоляция и оболочка", desc: "Экструзионные линии с точным дозированием сырья. Применяются ПВХ, XLPE, резина и специальные огнестойкие компаунды." },
                { num: "03", title: "Бронирование", desc: "Стальные ленты и проволока обеспечивают механическую защиту. Слой антикоррозионного покрытия для подземной прокладки." },
                { num: "04", title: "Испытания и контроль", desc: "100% продукции проходит испытания высоковольтным импульсом. Собственная аккредитованная лаборатория выдаёт паспорт качества." },
              ].map((step) => (
                <div key={step.num} className="flex gap-6 group">
                  <div className="text-4xl font-bold leading-none w-12 flex-shrink-0 transition-colors duration-300" style={{ fontFamily: "'Oswald', sans-serif", color: "rgba(255,102,0,0.3)" }}>{step.num}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'IBM Plex Sans', sans-serif" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section id="certs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "#f60" }} />
            <span className="text-sm tracking-[0.2em] uppercase" style={{ color: "#f60", fontFamily: "'IBM Plex Sans', sans-serif" }}>Сертификаты</span>
          </div>
          <h2 className="font-bold uppercase leading-tight mb-14" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#111" }}>
            Качество подтверждено
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#e5e7eb" }}>
            {CERTS.map((cert) => (
              <div key={cert.name} className="bg-white p-8 group transition-colors duration-300 cursor-default hover:bg-orange-500">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ background: "#f60" }}>
                    <Icon name="ShieldCheck" size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold uppercase tracking-wide mb-2 transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "'Oswald', sans-serif", color: "#111" }}>{cert.name}</h3>
                    <p className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/80" style={{ color: "#888", fontFamily: "'IBM Plex Sans', sans-serif" }}>{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="py-24" style={{ background: "#f5f4f2" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: "#f60" }} />
                <span className="text-sm tracking-[0.2em] uppercase" style={{ color: "#f60", fontFamily: "'IBM Plex Sans', sans-serif" }}>Заявка</span>
              </div>
              <h2 className="font-bold uppercase leading-tight mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#111" }}>
                Оформить заказ<br />или запросить КП
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: "#666", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                Заполните форму — менеджер свяжется с вами в течение 30 минут в рабочее время и подготовит коммерческое предложение.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "Phone", title: "+7 (800) 123-45-67", sub: "Бесплатно по России" },
                  { icon: "Mail", title: "sales@kabelzavod.ru", sub: "Ответим в течение часа" },
                  { icon: "MapPin", title: "г. Москва, ул. Промышленная, 42", sub: "Пн–Пт 08:00–18:00" },
                ].map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ background: "#f60" }}>
                      <Icon name={c.icon} size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium" style={{ color: "#111", fontFamily: "'IBM Plex Sans', sans-serif" }}>{c.title}</div>
                      <div className="text-sm" style={{ color: "#888", fontFamily: "'IBM Plex Sans', sans-serif" }}>{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: "#f60" }}>
                    <Icon name="Check" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif", color: "#111" }}>Заявка отправлена!</h3>
                  <p className="text-sm" style={{ color: "#888", fontFamily: "'IBM Plex Sans', sans-serif" }}>Мы свяжемся с вами в течение 30 минут в рабочее время.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-gray-300 text-gray-600 text-sm px-6 py-2 hover:border-orange-500 hover:text-orange-500 transition-colors"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: "#888", fontFamily: "'IBM Plex Sans', sans-serif" }}>Тип обращения</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { val: "order", label: "Оформить заказ" },
                        { val: "quote", label: "Запросить КП" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => setFormData({ ...formData, type: opt.val })}
                          className="py-2.5 text-sm border transition-colors"
                          style={{
                            fontFamily: "'IBM Plex Sans', sans-serif",
                            background: formData.type === opt.val ? "#f60" : "transparent",
                            borderColor: formData.type === opt.val ? "#f60" : "#d1d5db",
                            color: formData.type === opt.val ? "#fff" : "#555",
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: "#888", fontFamily: "'IBM Plex Sans', sans-serif" }}>Имя *</label>
                      <input
                        required
                        type="text"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border outline-none px-4 py-3 text-sm transition-colors"
                        style={{ borderColor: "#d1d5db", color: "#111", fontFamily: "'IBM Plex Sans', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: "#888", fontFamily: "'IBM Plex Sans', sans-serif" }}>Компания</label>
                      <input
                        type="text"
                        placeholder="ООО «Энерго»"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full border outline-none px-4 py-3 text-sm transition-colors"
                        style={{ borderColor: "#d1d5db", color: "#111", fontFamily: "'IBM Plex Sans', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: "#888", fontFamily: "'IBM Plex Sans', sans-serif" }}>Телефон *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border outline-none px-4 py-3 text-sm transition-colors"
                        style={{ borderColor: "#d1d5db", color: "#111", fontFamily: "'IBM Plex Sans', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: "#888", fontFamily: "'IBM Plex Sans', sans-serif" }}>Email</label>
                      <input
                        type="email"
                        placeholder="mail@company.ru"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border outline-none px-4 py-3 text-sm transition-colors"
                        style={{ borderColor: "#d1d5db", color: "#111", fontFamily: "'IBM Plex Sans', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider mb-2 block" style={{ color: "#888", fontFamily: "'IBM Plex Sans', sans-serif" }}>Описание заявки</label>
                    <textarea
                      rows={4}
                      placeholder="Укажите марку кабеля, сечение, метраж и срок поставки..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border outline-none px-4 py-3 text-sm transition-colors resize-none"
                      style={{ borderColor: "#d1d5db", color: "#111", fontFamily: "'IBM Plex Sans', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white font-medium tracking-[0.15em] uppercase py-4 transition-opacity duration-200 hover:opacity-90"
                    style={{ background: "#f60", fontFamily: "'Oswald', sans-serif" }}
                  >
                    Отправить заявку
                  </button>
                  <p className="text-xs text-center" style={{ color: "#aaa", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: "#f60" }} />
                <span className="text-sm tracking-[0.2em] uppercase" style={{ color: "#f60", fontFamily: "'IBM Plex Sans', sans-serif" }}>Блог</span>
              </div>
              <h2 className="font-bold uppercase leading-tight" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#111" }}>
                Статьи и новости
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="border-t-2 pt-6 cursor-pointer group transition-colors duration-300" style={{ borderColor: "#e5e7eb" }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-2 py-1 uppercase tracking-wider" style={{ background: "rgba(255,102,0,0.1)", color: "#e05500", fontFamily: "'IBM Plex Sans', sans-serif" }}>{post.category}</span>
                  <span className="text-xs" style={{ color: "#aaa", fontFamily: "'IBM Plex Sans', sans-serif" }}>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold uppercase leading-tight mb-3 group-hover:text-orange-500 transition-colors duration-300" style={{ fontFamily: "'Oswald', sans-serif", color: "#111" }}>{post.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#888", fontFamily: "'IBM Plex Sans', sans-serif" }}>{post.excerpt}</p>
                <div className="flex items-center gap-2" style={{ color: "#f60" }}>
                  <span className="text-sm" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Читать далее</span>
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative overflow-hidden" style={{ background: "#111" }}>
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "#f60" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "#f60" }} />
            <span className="text-sm tracking-[0.2em] uppercase" style={{ color: "#f90", fontFamily: "'IBM Plex Sans', sans-serif" }}>Контакты</span>
          </div>
          <h2 className="font-bold text-white uppercase leading-tight mb-14" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Свяжитесь с нами
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (800) 123-45-67", sub: "Бесплатно по России" },
              { icon: "Mail", label: "Email", value: "sales@kabelzavod.ru", sub: "Отдел продаж" },
              { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Промышленная, 42", sub: "Производство и офис" },
              { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 08:00–18:00", sub: "Сб–Вс: выходные" },
            ].map((c) => (
              <div key={c.label} className="border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name={c.icon} size={16} className="text-orange-400" />
                  <span className="text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'IBM Plex Sans', sans-serif" }}>{c.label}</span>
                </div>
                <div className="text-base font-medium text-white mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.value}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'IBM Plex Sans', sans-serif" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8" style={{ background: "#000", borderColor: "rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center" style={{ background: "#f60" }}>
              <span className="text-white font-bold text-xs" style={{ fontFamily: "'Oswald', sans-serif" }}>КЗ</span>
            </div>
            <span className="text-sm tracking-wider uppercase text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>КабельЗавод</span>
          </div>
          <span className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'IBM Plex Sans', sans-serif" }}>© 2026 КабельЗавод. Все права защищены.</span>
          <div className="flex gap-6">
            {["Политика конфиденциальности", "Реквизиты"].map((link) => (
              <a key={link} href="#" className="hover:text-orange-400 text-xs transition-colors" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'IBM Plex Sans', sans-serif" }}>{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}