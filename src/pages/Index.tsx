import { useMemo, useState } from "react";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BRAND = "#F25A29";
const BRAND_HOVER = "#d84b1d";

const catalog = [
  { name: "ВВГнг(А)-LS 2х1,5",   category: "Силовой кабель",      use: "Освещение, электромонтаж, строительные объекты",                  specs: "2 жилы • 1,5 мм² • LS",      format: "Бухта 100 м" },
  { name: "ВВГнг(А)-LS 3х1,5",   category: "Силовой кабель",      use: "Освещение, розеточные группы, монтаж",                           specs: "3 жилы • 1,5 мм² • LS",      format: "Бухта 100 м" },
  { name: "ВВГнг(А)-LS 2х2,5",   category: "Силовой кабель",      use: "Розеточные группы, квартиры, коммерческие помещения",            specs: "2 жилы • 2,5 мм² • LS",      format: "Бухта 100 м" },
  { name: "ВВГнг(А)-LS 3х2,5",   category: "Силовой кабель",      use: "Розеточные линии, стройка, электромонтаж",                       specs: "3 жилы • 2,5 мм² • LS",      format: "Бухта 100 м" },
  { name: "ВВГ-Пнг(А)-LS 2х1,5", category: "Плоский кабель",      use: "Скрытая проводка, освещение, монтаж в помещениях",               specs: "2 жилы • 1,5 мм² • плоский", format: "Бухта 100 м" },
  { name: "ВВГ-Пнг(А)-LS 3х1,5", category: "Плоский кабель",      use: "Скрытая проводка, освещение, монтаж",                            specs: "3 жилы • 1,5 мм² • плоский", format: "Бухта 100 м" },
  { name: "ВВГ-Пнг(А)-LS 2х2,5", category: "Плоский кабель",      use: "Розеточные группы, строительные и ремонтные объекты",            specs: "2 жилы • 2,5 мм² • плоский", format: "Бухта 100 м" },
  { name: "ВВГ-Пнг(А)-LS 3х2,5", category: "Плоский кабель",      use: "Розетки, электромонтаж, массовые поставки",                      specs: "3 жилы • 2,5 мм² • плоский", format: "Бухта 100 м" },
  { name: "ПВС 2х1,5",            category: "Гибкий провод",       use: "Подключение бытового и промышленного оборудования",              specs: "2 жилы • 1,5 мм² • гибкий",  format: "Бухта / намотка по запросу" },
  { name: "ПВС 3х1,5",            category: "Гибкий провод",       use: "Удлинители, оборудование, временное подключение",                specs: "3 жилы • 1,5 мм² • гибкий",  format: "Бухта / намотка по запросу" },
  { name: "ПВС 3х2,5",            category: "Гибкий провод",       use: "Оборудование, силовое подключение, монтаж",                      specs: "3 жилы • 2,5 мм² • гибкий",  format: "Бухта / намотка по запросу" },
  { name: "ШВВП 2х0,75",          category: "Соединительный шнур", use: "Бытовые приборы, лёгкие подключения",                            specs: "2 жилы • 0,75 мм²",           format: "Бухта / намотка по запросу" },
  { name: "ШВВП 2х1,5",           category: "Соединительный шнур", use: "Бытовое оборудование, подключение приборов",                     specs: "2 жилы • 1,5 мм²",           format: "Бухта / намотка по запросу" },
  { name: "ПуГВ 1х1,5",           category: "Монтажный провод",    use: "Щиты, сборка электрооборудования, монтаж",                       specs: "1 жила • 1,5 мм² • гибкий",  format: "Бухта / катушка" },
  { name: "ПуГВ 1х2,5",           category: "Монтажный провод",    use: "Электрощиты, шкафы управления, монтажные работы",                specs: "1 жила • 2,5 мм² • гибкий",  format: "Бухта / катушка" },
];

const productGroups = ["ВВГнг(А)-LS", "ВВГ-Пнг(А)-LS", "ПВС", "ШВВП", "ПуГВ", "Монтажный провод"];

const advantages = [
  { icon: "Factory",     title: "Собственное производство", text: "Волочение, экструзия, намотка и упаковка кабельно-проводниковой продукции на производственной площадке в Туле." },
  { icon: "ShieldCheck", title: "Контроль качества",        text: "Контроль сырья, геометрии, изоляции, маркировки и соответствия продукции требованиям заказчика." },
  { icon: "Truck",       title: "Поставки по России",       text: "Работаем с оптовыми покупателями, дилерами, снабжением строительных объектов и производственными компаниями." },
  { icon: "FileCheck",   title: "Документы и сертификаты",  text: "Предоставляем закрывающие документы, паспорта качества и необходимые сопроводительные материалы." },
];

const productionSteps = [
  "Входной контроль сырья",
  "Волочение медной проволоки",
  "Экструзия изоляции",
  "Намотка и маркировка",
  "Склад и отгрузка",
];

const qualityItems = [
  "Контроль сырья: медь, пластикат, маркировочные материалы.",
  "Контроль производства: геометрия, изоляция, внешний вид, намотка.",
  "Документы: закрывающие документы, паспорта качества, сертификаты.",
];

function normalizeText(value: string) {
  return value.toLowerCase().replaceAll(" ", "").replaceAll(",", ".");
}

function TKZLogo() {
  return (
    <img
      src="https://cdn.poehali.dev/projects/daf4b0d5-e0d0-48a6-94c7-248a64d027d0/bucket/7078d90e-4ce4-40e8-be39-d18583b96837.png"
      alt="ТКЗ — Тульский Кабельный Завод"
      className="h-12 w-auto object-contain"
    />
  );
}

export default function TKZLanding() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("Все");
  const [formData, setFormData] = useState({ name: "", phone: "", company: "" });
  const [submitted, setSubmitted] = useState(false);

  const catalogGroups = useMemo(
    () => ["Все", ...Array.from(new Set(catalog.map((item) => item.category)))],
    []
  );

  const filteredCatalog = useMemo(() => {
    const query = normalizeText(searchQuery.trim());
    return catalog.filter((item) => {
      const haystack = normalizeText(`${item.name} ${item.category} ${item.use} ${item.specs} ${item.format}`);
      const matchesSearch = query.length === 0 || haystack.includes(query);
      const matchesGroup = activeGroup === "Все" || item.category === activeGroup;
      return matchesSearch && matchesGroup;
    });
  }, [searchQuery, activeGroup]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-950" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* Верхняя строка */}
        <div className="border-b border-black/8 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
            <nav className="hidden items-center gap-6 text-xs text-neutral-600 md:flex">
              {[["#about","О компании"],["#production","Производство"],["#quality","Сертификаты"],["#dealers","Дилерам"]].map(([href, label]) => (
                <a key={href} href={href} className="hover:text-[#F25A29] transition-colors">{label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-5 ml-auto">
              <a href="#contacts" className="flex items-center gap-1.5 text-xs text-neutral-600 hover:text-[#F25A29] transition-colors">
                <Icon name="MapPin" size={13} className="text-[#F25A29]" />
                Тула
              </a>
              <a href="#contacts" className="text-xs font-semibold transition-colors" style={{ color: BRAND }}>
                Заказать звонок
              </a>
            </div>
          </div>
        </div>

        {/* Основная строка */}
        <div className="border-b border-black/8 bg-white">
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3">
            {/* Логотип */}
            <a href="/" className="shrink-0">
              <TKZLogo />
            </a>

            {/* Кнопка каталога */}
            <a href="#catalog">
              <Button className="flex shrink-0 items-center gap-2 rounded-none px-5 py-3 text-sm font-bold text-white uppercase tracking-wide" style={{ background: BRAND, fontFamily: "'Oswald', sans-serif" }}>
                <Icon name="Menu" size={16} />
                Каталог
              </Button>
            </a>

            {/* Поиск */}
            <div className="relative flex-1 max-w-xl">
              <input
                className="h-11 w-full border border-black/15 bg-white pl-4 pr-11 text-sm outline-none transition-colors focus:border-[#F25A29]"
                placeholder="Поиск по каталогу"
              />
              <button className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center border-l border-black/15 text-neutral-500 hover:text-[#F25A29] transition-colors">
                <Icon name="Search" size={17} />
              </button>
            </div>

            {/* Телефон и корзина */}
            <div className="ml-auto hidden shrink-0 items-center gap-5 md:flex">
              <div className="text-right">
                <div className="text-lg font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.02em" }}>
                  +7 (4872) 00-00-00
                </div>
                <a href="mailto:info@tkz-tula.ru" className="text-xs transition-colors hover:text-[#F25A29]" style={{ color: BRAND }}>
                  info@tkz-tula.ru
                </a>
              </div>
              <a href="#order" className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-neutral-600 hover:border-[#F25A29] hover:text-[#F25A29] transition-colors">
                <Icon name="ShoppingCart" size={18} />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: BRAND }}>0</span>
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя строка — категории */}
        <div className="hidden border-b border-black/8 bg-white md:block">
          <div className="mx-auto flex max-w-7xl items-center gap-0 px-6">
            {[
              "Силовые кабели",
              "Плоские кабели",
              "Гибкие провода",
              "Монтажный провод",
              "Соединительные шнуры",
              "Спецкабели",
            ].map((cat) => (
              <a
                key={cat}
                href="#catalog"
                className="flex items-center gap-1.5 border-r border-black/8 px-4 py-3 text-xs font-medium text-neutral-600 hover:bg-orange-50 hover:text-[#F25A29] transition-colors first:pl-0"
              >
                {cat}
                <Icon name="ChevronDown" size={12} className="text-neutral-400" />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-black/10 bg-white">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 20%, rgba(242,90,41,0.12) 0%, transparent 35%), radial-gradient(circle at 80% 30%, rgba(0,0,0,0.04) 0%, transparent 30%)" }} />
        <div className="absolute -right-24 top-16 h-80 w-80 rounded-full border-[28px] pointer-events-none" style={{ borderColor: "rgba(242,90,41,0.12)" }} />
        <div className="absolute -left-20 bottom-8 h-64 w-64 rounded-full border-[20px] border-black/5 pointer-events-none" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          {/* Left */}
          <div className="relative z-10 animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold" style={{ borderColor: "rgba(242,90,41,0.25)", background: "#fff7f4", color: BRAND }}>
              <Icon name="Zap" size={15} />
              Тульский Кабельный Завод • Производство кабеля
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-neutral-950 md:text-6xl lg:text-7xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Кабельное<br />производство<br />для опта<br />и объектов
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Производим кабельно-проводниковую продукцию для строительства, электромонтажа, промышленных объектов и регулярных оптовых поставок.
            </p>

            {/* Inline search */}
            <div className="mt-8 rounded-3xl border border-black/10 bg-white p-3 shadow-2xl shadow-black/8">
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="relative flex-1">
                  <Icon name="Search" size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-2xl border border-black/10 bg-orange-50 pl-11 pr-4 text-sm outline-none transition-colors focus:border-[#F25A29] focus:bg-white"
                    style={{ height: "52px" }}
                    placeholder="Поиск: ВВГ 3х2,5, ПВС, ШВВП..."
                  />
                </div>
                <a href="#catalog">
                  <Button className="w-full rounded-2xl px-6 text-sm text-white md:w-auto" style={{ height: "52px", background: BRAND }}>
                    Найти в каталоге
                  </Button>
                </a>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 px-1">
                {["ВВГ 3х2,5", "ПВС 3х1,5", "ШВВП", "ПуГВ"].map((hint) => (
                  <button
                    key={hint}
                    onClick={() => setSearchQuery(hint)}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-neutral-600 transition-colors hover:border-[#F25A29] hover:text-[#F25A29]"
                  >
                    {hint}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl px-7 text-base text-white" style={{ height: "52px", background: BRAND, fontFamily: "'Oswald', sans-serif" }}>
                Получить прайс <Icon name="ArrowRight" size={17} className="ml-2" />
              </Button>
              <Button variant="outline" className="rounded-2xl border-black/15 px-7 text-base text-neutral-950 hover:bg-orange-50" style={{ height: "52px", fontFamily: "'Oswald', sans-serif" }}>
                Стать дилером
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-center">
              {[["ГОСТ/ТУ","документы"],["B2B","опт и дилеры"],["Тула","производство"]].map(([title, sub]) => (
                <div key={title} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                  <div className="text-xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>{title}</div>
                  <div className="text-xs text-neutral-500">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: production steps card */}
          <div className="relative z-10 flex items-center animate-scale-in delay-200">
            <div className="relative w-full rounded-[2rem] border border-black/10 bg-gradient-to-br from-white to-orange-50 p-6 shadow-2xl shadow-black/10">
              <div className="absolute -right-4 -top-4 rounded-full px-5 py-3 text-sm font-bold text-white shadow-xl" style={{ background: BRAND, fontFamily: "'Oswald', sans-serif" }}>
                ООО «ТКЗ»
              </div>
              <div className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-lg">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-neutral-500">Производственный цикл</div>
                    <div className="text-2xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>От меди до бухты</div>
                  </div>
                  <Icon name="Gauge" size={32} className="text-[#F25A29]" />
                </div>
                <div className="space-y-3">
                  {productionSteps.map((step, i) => (
                    <div key={step} className="flex items-center gap-4 rounded-2xl border border-black/5 bg-orange-50 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: BRAND, fontFamily: "'Oswald', sans-serif" }}>
                        {i + 1}
                      </div>
                      <div className="font-medium text-neutral-800 text-sm">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ПРОДУКЦИЯ ── */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>Продукция</h2>
            <p className="mt-3 max-w-2xl text-neutral-600">
              Основные группы продукции для оптовых поставок, строительных объектов, электромонтажных организаций и дилеров.
            </p>
          </div>
          <Button variant="outline" className="rounded-2xl border-black/15 text-neutral-950 hover:bg-orange-50">
            Скачать каталог
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productGroups.map((pg) => (
            <Card key={pg} className="rounded-3xl border-black/10 bg-white shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
              <CardContent className="p-6">
                <Icon name="Cable" size={32} className="mb-5 text-[#F25A29]" />
                <h3 className="text-2xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>{pg}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Разные сечения, количество жил, бухты и поставки под потребности заказчика.
                </p>
                <a href="#catalog" className="mt-5 inline-flex items-center gap-2 text-sm font-bold" style={{ color: BRAND }}>
                  Смотреть позиции <Icon name="ArrowRight" size={14} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── КАТАЛОГ ── */}
      <section id="catalog" className="border-y border-black/10 bg-neutral-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm" style={{ color: BRAND }}>
                <Icon name="SlidersHorizontal" size={14} /> Каталог продукции
              </div>
              <h2 className="text-4xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>Найдите нужный кабель</h2>
              <p className="mt-3 max-w-2xl text-neutral-600">
                Поиск работает по названию, сечению, категории и назначению. Например: «ВВГ 3х2,5», «ПВС», «розетки».
              </p>
            </div>
            <div className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-neutral-700 shadow-sm">
              Найдено: <span style={{ color: BRAND }}>{filteredCatalog.length}</span>
            </div>
          </div>

          <div className="mb-6 flex flex-col gap-3 rounded-3xl border border-black/10 bg-white p-4 shadow-lg shadow-black/5 md:flex-row">
            <div className="relative flex-1">
              <Icon name="Search" size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 w-full rounded-2xl border border-black/10 bg-white pl-11 pr-4 text-base outline-none transition-colors focus:border-[#F25A29]"
                placeholder="Введите марку, сечение или назначение"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => { setSearchQuery(""); setActiveGroup("Все"); }}
              className="h-14 rounded-2xl border-black/15 px-7 text-neutral-950 hover:bg-orange-50"
            >
              Сбросить
            </Button>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {catalogGroups.map((group) => (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className="rounded-full px-4 py-2 text-sm font-bold transition-all border"
                style={
                  activeGroup === group
                    ? { background: BRAND, color: "#fff", borderColor: BRAND }
                    : { background: "#fff", color: "#525252", borderColor: "rgba(0,0,0,0.1)" }
                }
              >
                {group}
              </button>
            ))}
          </div>

          {filteredCatalog.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredCatalog.map((item) => (
                <Card key={item.name} className="rounded-3xl border-black/10 bg-white shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <Icon name="Cable" size={28} className="text-[#F25A29] shrink-0" />
                      <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold" style={{ color: BRAND }}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.name}</h3>
                    <div className="mt-2 text-sm font-semibold text-neutral-700">{item.specs}</div>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{item.use}</p>
                    <div className="mt-4 rounded-2xl bg-neutral-50 p-3 text-sm font-semibold text-neutral-600">
                      Формат: {item.format}
                    </div>
                    <Button className="mt-5 w-full rounded-2xl text-white" style={{ background: BRAND }}>
                      Запросить цену
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-black/10 bg-white p-10 text-center shadow-lg shadow-black/5">
              <div className="text-2xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>Ничего не найдено</div>
              <p className="mt-3 text-neutral-600">Попробуйте ввести другое сечение или марку кабеля.</p>
              <Button onClick={() => { setSearchQuery(""); setActiveGroup("Все"); }} className="mt-6 rounded-2xl text-white" style={{ background: BRAND }}>
                Показать весь каталог
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ── ПРОИЗВОДСТВО / ПРЕИМУЩЕСТВА ── */}
      <section id="production" className="border-b border-black/10 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv) => (
            <div key={adv.title} className="rounded-3xl border border-black/10 bg-white p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <Icon name={adv.icon} size={36} className="mb-5 text-[#F25A29]" />
              <h3 className="text-xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>{adv.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{adv.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── КАЧЕСТВО ── */}
      <section id="quality" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>Качество, которому доверяют закупки</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Для крупных заказчиков важны стабильность, документы, сроки и понятная коммуникация. Мы строим работу так, чтобы снабжение получало не просто кабель, а управляемую поставку.
            </p>
          </div>
          <div className="grid gap-4">
            {qualityItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl border border-black/10 bg-white p-6 shadow-lg shadow-black/5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-black text-white" style={{ background: BRAND }}>✓</span>
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ДИЛЕРАМ ── */}
      <section id="dealers" className="bg-orange-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>Приглашаем дилеров и оптовых партнёров</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Обсудим регулярные поставки, ассортимент, условия сотрудничества, логистику и индивидуальные цены под объём.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-2xl shadow-black/10">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full mb-4" style={{ background: BRAND }}>
                  <Icon name="Check" size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>Заявка отправлена!</h3>
                <p className="mt-2 text-neutral-500 text-sm">Мы свяжемся с вами в ближайшее время.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm underline" style={{ color: BRAND }}>
                  Отправить ещё одну
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="mb-5 text-2xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>Оставить заявку</h3>
                <div className="space-y-3">
                  <input
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#F25A29]"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#F25A29]"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <input
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition-colors focus:border-[#F25A29]"
                    placeholder="Компания"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                  <Button type="submit" className="w-full rounded-2xl py-6 text-white" style={{ background: BRAND, fontFamily: "'Oswald', sans-serif" }}>
                    Отправить заявку
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <footer id="contacts" className="border-t border-black/10 bg-white px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <div className="text-2xl font-black text-neutral-950" style={{ fontFamily: "'Oswald', sans-serif" }}>ООО «Тульский Кабельный Завод»</div>
            <p className="mt-3 text-neutral-500 text-sm">Производство кабельно-проводниковой продукции.</p>
          </div>
          <div className="flex items-start gap-3 text-neutral-600">
            <Icon name="Warehouse" size={18} className="text-[#F25A29] shrink-0 mt-0.5" />
            <div>п. Иншинский, г. Тула</div>
          </div>
          <div className="flex items-start gap-3 text-neutral-600">
            <Icon name="Phone" size={18} className="text-[#F25A29] shrink-0 mt-0.5" />
            <div>Телефон / WhatsApp / Telegram</div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-black/5 pt-6 text-center text-xs text-neutral-400">
          © 2026 ООО «Тульский Кабельный Завод» • Все права защищены
        </div>
      </footer>

    </div>
  );
}