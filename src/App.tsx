import { useEffect, useRef, useState } from "react";

const practices = [
  [
    "Корпоративные вопросы",
    "Правовая структура отношений внутри бизнеса.",
    "Корпоративные соглашения, отношения между участниками, подготовка и правовой анализ документов. Отдельное внимание — интересам сторон и возможным последствиям решений.",
  ],
  [
    "Разрешение споров",
    "От оценки ситуации до судебного представительства.",
    "Анализ обстоятельств и доказательств, досудебная переписка, переговоры и представительство в арбитражных судах. Способ действий определяется после изучения материалов.",
  ],
  [
    "Имущество и сделки",
    "Внимание к деталям, которые имеют значение.",
    "Проверка договорных условий, сопровождение сделок с недвижимостью и вопросы исполнения обязательств. Объём работы зависит от предмета сделки и состава документов.",
  ],
  [
    "Защита по уголовным делам",
    "Правовая помощь на разных стадиях производства.",
    "Консультирование по вопросам уголовного права, защита в ходе предварительного расследования и в суде. Возможность принятия поручения оценивается индивидуально.",
  ],
];
const questions = [
  [
    "С чего начинается взаимодействие?",
    "С определения предмета обращения и проверки возможности принять поручение, в том числе отсутствия конфликта интересов. Затем обсуждаются необходимые документы, формат и условия работы.",
  ],
  [
    "Можно ли оценить перспективы заранее?",
    "Предварительная оценка возможна после изучения обстоятельств и документов. Она включает правовые риски и возможные сценарии, но не является гарантией результата.",
  ],
  [
    "Как определяется стоимость?",
    "Объём помощи, вознаграждение и порядок оплаты согласуются индивидуально и фиксируются в соглашении. В этом концепте цены и коммерческие условия не представлены.",
  ],
  [
    "Можно ли отправить документы через сайт?",
    "В демонстрационной версии загрузки документов нет. На реальном сайте порядок передачи материалов согласуется с адвокатом с учётом конфиденциальности и требований к персональным данным.",
  ],
];
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
function Architecture() {
  return (
    <svg
      className="architecture"
      viewBox="0 0 640 670"
      fill="none"
      role="img"
      aria-label="Авторская архитектурная композиция из объёмных геометрических элементов"
    >
      <path d="m48 536 289-157 272 142-282 159Z" fill="#12201e" />
      <path d="M93 558 340 422 572 545" stroke="#6d7f73" strokeWidth=".6" />
      <path d="m147 557 51-28V197l-51 28Z" fill="#8c9b8e" />
      <path d="m198 529 63 34V231l-63-34Z" fill="#3e5148" />
      <path d="m147 225 51-28 63 34-51 28Z" fill="#d2d6bf" />
      <path d="m365 552 56-31V190l-56 31Z" fill="#839487" />
      <path d="m421 521 62 34V224l-62-34Z" fill="#33473e" />
      <path d="m365 221 56-31 62 34-56 31Z" fill="#cdd2b9" />
      <path d="m92 252 285-155 170 92-284 156Z" fill="#dce0c7" />
      <path d="M92 252v83l171 93v-83Z" fill="#9fae99" />
      <path d="m263 345 284-156v83L263 428Z" fill="#647a67" />
      <path d="m119 359 283-155" stroke="#e0e3cd" strokeOpacity=".35" />
      <path d="m92 335 171 93 284-156" stroke="#cbd6b8" strokeOpacity=".4" />
      <path d="m287 601 44-24V407l-44 24Z" fill="#b8c3a7" />
      <path d="m331 577 45 25V431l-45-24Z" fill="#5b715d" />
      <path d="m287 431 44-24 45 24-44 25Z" fill="#e0e4cd" />
      <path
        d="M45 585h89m345-93h112M344 54v48"
        stroke="#9eb18f"
        strokeWidth=".7"
      />
      <circle cx="344" cy="54" r="3" fill="#cfdbb6" />
      <path
        d="M90 145V82h88M557 419v58h-41"
        stroke="#8c9d8d"
        strokeOpacity=".5"
      />
      <text
        x="73"
        y="627"
        fill="#a4b29f"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="2"
      >
        FIG. 01 / СТРУКТУРА ПОЗИЦИИ
      </text>
    </svg>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        menuButton.current?.focus();
      }
    };
    if (menu) document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menu]);
  const links = [
    ["#practices", "Практики"],
    ["#approach", "Подход"],
    ["#team", "Команда"],
    ["#contact", "Контакты"],
  ];
  return (
    <>
      <a className="skip" href="#main">
        Перейти к содержанию
      </a>
      <div className="demo-bar">
        <span>
          Демонстрационный концепт · юридическая помощь не оказывается
        </span>
        <span className="edition">Портфолио / 01</span>
      </div>
      <header className="header wrap">
        <a href="#" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            ОСНОВА<small>Адвокатское бюро · концепт</small>
          </span>
        </a>
        <nav aria-label="Основная навигация" className="desktop-nav">
          {links.map(([url, text]) => (
            <a key={url} href={url}>
              {text}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Обсудить задачу <Arrow diagonal />
        </a>
        <button
          className="menu-toggle"
          ref={menuButton}
          aria-expanded={menu}
          aria-controls="mobile-menu"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "Закрыть" : "Меню"}
          <span aria-hidden="true">{menu ? "−" : "+"}</span>
        </button>
      </header>
      {menu && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Мобильная навигация"
        >
          {links.map(([url, text], i) => (
            <a href={url} key={url} onClick={() => setMenu(false)}>
              <span>0{i + 1}</span>
              {text}
              <Arrow />
            </a>
          ))}
        </nav>
      )}
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" /> Частные и корпоративные практики
            </p>
            <h1 id="hero-title">
              Право требует
              <br />
              ясной <span>позиции.</span>
            </h1>
            <p className="hero-description">
              Обстоятельства. Аргументы. Последовательность действий.
              <br className="desktop-break" /> Правовая работа начинается с
              понимания вашей задачи.
            </p>
            <a href="#practices" className="button accent">
              Направления практики <Arrow />
            </a>
            <span className="hero-note">
              Вымышленное бюро. Реальный подход к дизайну.
            </span>
          </div>
          <div className="hero-art">
            <div className="art-top">
              <span>О / С / Н / О / В / А</span>
              <span>ПРАВО КАК СИСТЕМА</span>
            </div>
            <Architecture />
          </div>
          <div className="hero-foot">
            <span>Независимость суждений</span>
            <span>Внимание к обстоятельствам</span>
            <a href="#approach">
              Знакомство с подходом <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section id="practices" className="practices light section">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">01 / Направления практики</p>
              <h2>
                Каждая задача —<br />
                <span className="muted">свой контекст.</span>
              </h2>
              <p className="section-intro">
                Пример структуры практик бюро.
                <br />
                Выберите направление, чтобы узнать больше.
              </p>
            </div>
            <div className="practice-list">
              {practices.map(([title, desc, content], i) => (
                <details className="practice" key={title} open={i === 0}>
                  <summary>
                    <span className="index">0{i + 1}</span>
                    <span className="practice-name">
                      {title}
                      <small>{desc}</small>
                    </span>
                    <span className="plus" aria-hidden="true" />
                  </summary>
                  <div className="practice-content">
                    <p>{content}</p>
                    <a href="#contact" className="text-link">
                      Перейти к обращению <Arrow />
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="approach" className="section approach wrap">
          <p className="eyebrow">02 / Принципы работы</p>
          <div className="approach-grid">
            <h2>
              Сначала —<br />
              контекст.
              <br />
              <span>
                Затем —<br />
                позиция.
              </span>
            </h2>
            <div className="approach-text">
              <p className="lead">
                В основе правового решения —<br />
                не предположения, а обстоятельства.
              </p>
              <p>
                Изучить документы, отделить существенное от второстепенного,
                обсудить ограничения. Такой порядок помогает сформировать
                предметный разговор о возможных действиях.
              </p>
              <div className="principle">
                <span>01</span>
                <div>
                  <h3>Содержание прежде формы</h3>
                  <p>Понять цель обращения и правовую природу вопроса.</p>
                </div>
              </div>
              <div className="principle">
                <span>02</span>
                <div>
                  <h3>Открытый разговор о рисках</h3>
                  <p>
                    Обсудить возможные сценарии без обещаний определённого
                    исхода.
                  </p>
                </div>
              </div>
              <div className="principle">
                <span>03</span>
                <div>
                  <h3>Определённость в процессе</h3>
                  <p>
                    Согласовать объём помощи, этапы и порядок взаимодействия.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="team section">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">03 / Команда</p>
              <h2>
                За позицией —<br />
                совместная работа.
              </h2>
              <p className="section-intro">
                Демонстрационная схема ролей.
                <br />
                Здесь нет профилей действующих адвокатов.
              </p>
            </div>
            <div className="team-grid">
              {[
                [
                  "Ведение поручения",
                  "Стратегия и взаимодействие",
                  "Определение правовой позиции и обсуждение ключевых решений с доверителем.",
                ],
                [
                  "Правовой анализ",
                  "Обстоятельства и аргументы",
                  "Исследование применимых норм и материалов, работа с доказательствами.",
                ],
                [
                  "Подготовка документов",
                  "Точность и последовательность",
                  "Подготовка правовых документов и организация материалов поручения.",
                ],
              ].map(([title, sub, text], i) => (
                <article className="team-role" key={title}>
                  <div className={"role-art role-" + i} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p className="eyebrow">Роль / 0{i + 1}</p>
                  <h3>{title}</h3>
                  <p className="role-sub">{sub}</p>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="process" className="section light process">
          <div className="wrap">
            <div className="section-heading">
              <p className="eyebrow">04 / Порядок взаимодействия</p>
              <h2>
                От первого вопроса
                <br />к плану действий.
              </h2>
            </div>
            <ol className="steps">
              {[
                [
                  "Знакомство",
                  "Определяем предмет обращения и возможность принять поручение.",
                ],
                [
                  "Изучение",
                  "Анализируем документы, обстоятельства и правовые риски.",
                ],
                [
                  "Соглашение",
                  "Фиксируем объём юридической помощи и условия её оказания.",
                ],
                [
                  "Работа по поручению",
                  "Действуем в согласованных рамках, обсуждаем изменения и следующие шаги.",
                ],
              ].map(([title, text], i) => (
                <li key={title}>
                  <span>
                    0{i + 1}
                    <Arrow />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="section faq wrap" id="faq">
          <div>
            <p className="eyebrow">05 / Вопросы и ответы</p>
            <h2>
              До начала
              <br />
              разговора.
            </h2>
            <p className="faq-note">
              Общая информация о формате работы.
              <br />
              Не является юридической консультацией.
            </p>
          </div>
          <div className="faq-list">
            {questions.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span className="plus" aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="contact" className="contact section">
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow">06 / Следующий шаг</p>
              <h2>
                Начнём
                <br />с вашей <span>задачи.</span>
              </h2>
              <p className="contact-copy">
                В реальном проекте здесь начинается обращение в бюро. Сейчас
                можно посмотреть, как устроен первый шаг.
              </p>
              <div className="contact-placeholder">
                <span>Контакты бюро</span>
                <p>
                  Будут указаны после адаптации
                  <br />
                  под действующее адвокатское образование.
                </p>
              </div>
            </div>
            <form
              className="demo-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="form-heading">
                <h3>Первое обращение</h3>
                <span className="badge">Деморежим</span>
              </div>
              <p>
                Выберите примерные параметры. Форма не принимает персональные
                данные и ничего не отправляет.
              </p>
              <label htmlFor="practice-select">Тема обращения</label>
              <select id="practice-select" onChange={() => setSent(false)}>
                <option>Корпоративные вопросы</option>
                <option>Разрешение споров</option>
                <option>Имущество и сделки</option>
                <option>Уголовное право</option>
                <option>Нужна помощь с выбором</option>
              </select>
              <label htmlFor="format-select">Предпочтительный формат</label>
              <select id="format-select" onChange={() => setSent(false)}>
                <option>Онлайн-встреча</option>
                <option>Личная встреча</option>
              </select>
              <button className="button accent" type="submit">
                Посмотреть следующий шаг <Arrow />
              </button>
              <div className="form-status" role="status">
                {sent
                  ? "Демонстрация завершена. В реальном проекте следующим шагом будет согласование встречи. Ничего не отправлено и не сохранено."
                  : "Без регистрации, ввода контактов и загрузки документов."}
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <div className="footer-main">
          <a className="footer-logo" href="#">
            ОСНОВА<span>Адвокатское бюро · концепт</span>
          </a>
          <p>
            Демонстрационный проект веб-студии.
            <br />
            Не представляет действующее адвокатское образование.
            <br />
            Юридическая помощь не оказывается.
          </p>
          <button
            onClick={() => dialog.current?.showModal()}
            className="legal-button"
          >
            Информация о концепте <Arrow diagonal />
          </button>
        </div>
        <div className="footer-bottom">
          <span>© 2026 · Дизайн-концепт «Основа»</span>
          <a href="#">Наверх ↑</a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        aria-labelledby="legal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-inner">
          <p className="eyebrow">О проекте</p>
          <h2 id="legal-title">Демонстрационный концепт</h2>
          <p>
            «Основа» — вымышленное название для портфолио веб-студии. Сайт не
            связан с действующими адвокатами или адвокатскими образованиями и не
            предлагает юридическую помощь.
          </p>
          <p>
            Описание практик и ролей иллюстрирует структуру будущего сайта.
            Здесь нет реальных адресов, реестровых сведений, результатов дел или
            отзывов. Материалы не являются юридической консультацией.
          </p>
          <p>
            Демоформа работает только в памяти текущей страницы. Она не собирает
            контакты, не сохраняет выбор и не передаёт данные. Аналитика и файлы
            cookie не используются. Хостинг может обрабатывать технические
            журналы запросов по собственным правилам.
          </p>
          <button
            className="button accent"
            onClick={() => dialog.current?.close()}
          >
            Закрыть пояснение <span aria-hidden="true">×</span>
          </button>
        </div>
      </dialog>
    </>
  );
}
