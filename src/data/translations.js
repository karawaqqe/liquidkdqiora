const email = 'andr2010mac@gmail.com'

export const translations = {
  pl: {
    nav: ['O mnie', 'Umiejętności', 'Projekty', 'Workflow', 'Kontakt'],
    hero: {
      eyebrow: 'Frontend Developer / UI-minded builder',
      title: 'Tworzę szybkie strony i aplikacje webowe',
      subtitle: 'Frontend Developer • React • Vite • Next.js • Node.js',
      description:
        'Projektuję nowoczesne strony, responsywne interfejsy i premium user experience, łącząc estetykę, wydajność i świadome użycie AI w workflow.',
      primary: 'Zobacz projekty',
      secondary: 'Napisz do mnie',
      cardLabel: 'Dostępny dla wybranych projektów',
      cardTitle: 'Frontend tworzony ze smakiem, ruchem i wydajnością.',
      cardMeta: 'React / UX / workflow wspierany AI',
      cardFooterLeft: '2026',
      cardFooterRight: 'Zdalnie / EU',
    },
    about: {
      eyebrow: 'O mnie',
      title: 'Młody frontend developer z wyczuciem produktu, estetyki i tempa.',
      body:
        'Tworzę realne projekty, uczę się szybko i świadomie łączę kod z projektowaniem doświadczeń. Najbardziej interesują mnie interfejsy, które wyglądają spokojnie, działają płynnie i pomagają użytkownikowi bez zbędnego hałasu.',
      bodyTwo:
        'Dbam o responsywność, strukturę komponentów, mikrointerakcje i performance. Lubię dopracowany UI, czystą typografię i detale, które sprawiają, że strona wydaje się bardziej premium już od pierwszego scrolla.',
      ai:
        'Wykorzystuję nowoczesne narzędzia AI oraz agentów AI do researchu, prototypowania, nauki, optymalizacji i generowania kierunków kreatywnych. To przyspiesza workflow i pozwala szybciej testować idee, ale decyzje projektowe i finalne wykonanie pozostają świadome, dopracowane i autorskie.',
      stats: [
        ['01', 'Frontend z wyczuciem designu'],
        ['02', 'Responsywny UI produkcyjny'],
        ['03', 'Research wspierany AI'],
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Technologie, które pozwalają budować szybko, czysto i z charakterem.',
    },
    projects: {
      eyebrow: 'Realne projekty',
      title: 'Projekty, które pokazują pracę z marką/trening.',
      cta: 'Otwórz projekt',
      sourceCta: 'Kod',
      items: [
        {
          key: 'luxecoat',
          title: 'LuxeCoat Wrocław',
          description:
            'Premium studio detailingu we Wrocławiu. Ciemny, elegancki web presence dla usługi, w której liczy się prestiż, zaufanie i pierwszy wizualny kontakt.',
          technologies: ['React', 'Vite', 'UI/UX', 'Responsive'],
          metrics: ['Detailing', 'Wrocław', 'Premium'],
          url: 'https://www.luxecoat.wroclaw.pl/',
          sourceUrl: 'https://www.luxecoat.wroclaw.pl/',
        },
        {
          key: 'marshmallows',
          title: 'Marshmallows',
          description:
            'Lekki projekt frontendowy z własnym layoutem, wizualnym rytmem i clean strukturą. Dobry przykład pracy z prezentacyjną stroną i detalem UI.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
          metrics: ['Lekki UI', 'GitHub', 'Clean'],
          url: 'https://github.com/karawaqqe/-marshmallows',
          sourceUrl: 'https://github.com/karawaqqe/-marshmallows',
        },
        {
          key: 'icecream',
          title: 'Ice Cream Team Project',
          description:
            'Team project zbudowany na Vite: landing dla marki ice cream z sekcjami, animacjami, responsywnością i pracą w strukturze zespołowej.',
          technologies: ['Vite', 'JavaScript', 'Swiper', 'Teamwork'],
          metrics: ['Zespół', 'Vite', 'Landing'],
          url: 'https://github.com/AntonKashshay0310/ice-cream_team_project',
          sourceUrl: 'https://github.com/AntonKashshay0310/ice-cream_team_project',
        },
      ],
    },
    workflow: {
      eyebrow: 'Workflow',
      title: 'Proces oparty na szybkim odkrywaniu, mocnym prototypie i dopracowanym wdrożeniu.',
      featureLabel: 'Pipeline',
      featureTitle: 'Od sygnału do dopracowanego interfejsu',
      items: {
        idea: 'Idea',
        research: 'Research',
        prototyping: 'Prototyping',
        design: 'Design',
        development: 'Development',
        optimization: 'Optimization',
        deployment: 'Deployment',
      },
      stageLabels: {
        define: 'Definicja',
        shape: 'Forma',
        build: 'Budowa',
        launch: 'Start',
      },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Masz markę, projekt albo pomysł, który zasługuje na mocny web presence?',
      description:
        'Napisz, a przygotuję kierunek wizualny, strukturę i frontend, który wygląda dojrzale od pierwszego wejścia.',
      email,
      button: 'Napisz do mnie',
    },
    contactModal: {
      eyebrow: 'Zapytanie o projekt',
      title: 'Opowiedz mi o projekcie.',
      description:
        'Krótko, konkretnie, bez formalności. Wiadomość trafi na mój adres, a jeśli EmailJS nie jest jeszcze skonfigurowany, formularz otworzy gotowy e-mail.',
      name: 'Imię',
      email: 'Twój email',
      projectType: 'Typ projektu',
      message: 'Wiadomość',
      submit: 'Wyślij wiadomość',
      sending: 'Wysyłanie...',
      close: 'Zamknij',
      success: 'Wiadomość została wysłana',
      fallback:
        'EmailJS nie jest jeszcze skonfigurowany, dlatego otworzyłem gotową wiadomość e-mail w Twoim kliencie pocztowym.',
      error: 'Błąd podczas wysyłania',
      options: ['Portfolio / landing', 'Strona biznesowa', 'Aplikacja frontendowa', 'Odświeżenie UI'],
      directEmail: email,
    },
    footer: {
      signature: 'Zaprojektowane i zbudowane w React, z ruchem i wyczuciem.',
      location: 'Polska / Zdalnie',
    },
  },
  ru: {
    nav: ['Обо мне', 'Навыки', 'Проекты', 'Workflow', 'Контакты'],
    hero: {
      eyebrow: 'Frontend-разработчик / UI-minded builder',
      title: 'Создаю быстрые сайты и web-приложения',
      subtitle: 'Frontend Developer • React • Vite • Next.js • Node.js',
      description:
        'Разрабатываю современные сайты, адаптивные интерфейсы и premium user experience, соединяя эстетику, скорость и осознанное использование AI в workflow.',
      primary: 'Смотреть проекты',
      secondary: 'Написать мне',
      cardLabel: 'Доступен для выбранных проектов',
      cardTitle: 'Frontend со вкусом, движением и производительностью.',
      cardMeta: 'React / UX / workflow с поддержкой AI',
      cardFooterLeft: '2026',
      cardFooterRight: 'Удаленно / EU',
    },
    about: {
      eyebrow: 'Обо мне',
      title: 'Молодой frontend разработчик с вниманием к продукту, эстетике и скорости.',
      body:
        'Я создаю реальные проекты, быстро учусь и осознанно соединяю код с проектированием опыта. Мне интересны интерфейсы, которые выглядят спокойно, работают плавно и помогают пользователю без лишнего шума.',
      bodyTwo:
        'Уделяю внимание адаптивности, структуре компонентов, микроанимациям и производительности. Люблю выверенный UI, чистую типографику и детали, которые делают сайт визуально дороже уже с первого экрана.',
      ai:
        'Использую современные AI-инструменты и AI-агентов для research, прототипирования, обучения, оптимизации и генерации идей. Это ускоряет workflow и помогает быстрее тестировать направления, но проектные решения и финальная реализация остаются осознанными, аккуратными и авторскими.',
      stats: [
        ['01', 'Frontend с чувством дизайна'],
        ['02', 'Адаптивный production UI'],
        ['03', 'Research с поддержкой AI'],
      ],
    },
    skills: {
      eyebrow: 'Stack',
      title: 'Технологии, с которыми можно строить быстро, чисто и характерно.',
    },
    projects: {
      eyebrow: 'Реальные проекты',
      title: 'Мои проекты: брендинг, frontend, адаптив и аккуратная визуальная подача.',
      cta: 'Открыть проект',
      sourceCta: 'Код',
      items: [
        {
          key: 'luxecoat',
          title: 'LuxeCoat Wrocław',
          description:
            'Premium detailing studio во Вроцлаве. Темный, уверенный web presence для сервиса, где важны престиж, доверие и сильный первый контакт.',
          technologies: ['React', 'Vite', 'UI/UX', 'Responsive'],
          metrics: ['Detailing', 'Вроцлав', 'Premium'],
          url: 'https://www.luxecoat.wroclaw.pl/',
          sourceUrl: 'https://www.luxecoat.wroclaw.pl/',
        },
        {
          key: 'marshmallows',
          title: 'Marshmallows',
          description:
            'Легкий frontend-проект с собственным layout, визуальным ритмом и clean-структурой. Хороший пример работы с презентационной страницей и UI-деталями.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Git'],
          metrics: ['Легкий UI', 'GitHub', 'Clean'],
          url: 'https://github.com/karawaqqe/-marshmallows',
          sourceUrl: 'https://github.com/karawaqqe/-marshmallows',
        },
        {
          key: 'icecream',
          title: 'Ice Cream Team Project',
          description:
            'Командный проект на Vite: landing для ice cream бренда с секциями, анимациями, адаптивностью и опытом работы в team workflow.',
          technologies: ['Vite', 'JavaScript', 'Swiper', 'Teamwork'],
          metrics: ['Команда', 'Vite', 'Landing'],
          url: 'https://github.com/AntonKashshay0310/ice-cream_team_project',
          sourceUrl: 'https://github.com/AntonKashshay0310/ice-cream_team_project',
        },
      ],
    },
    workflow: {
      eyebrow: 'Workflow',
      title: 'Процесс построен на быстром исследовании, сильном прототипе и аккуратном запуске.',
      featureLabel: 'Pipeline',
      featureTitle: 'От идеи до готового интерфейса',
      items: {
        idea: 'Идея',
        research: 'Исследование',
        prototyping: 'Прототип',
        design: 'Дизайн',
        development: 'Разработка',
        optimization: 'Оптимизация',
        deployment: 'Запуск',
      },
      stageLabels: {
        define: 'Определение',
        shape: 'Форма',
        build: 'Сборка',
        launch: 'Запуск',
      },
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Есть бренд, проект или идея, которым нужен сильный web presence?',
      description:
        'Напишите, и я подготовлю визуальное направление, структуру и frontend, который выглядит зрелым с первого входа.',
      email,
      button: 'Написать мне',
    },
    contactModal: {
      eyebrow: 'Запрос проекта',
      title: 'Расскажите мне о проекте.',
      description:
        'Коротко, конкретно, без лишней бюрократии. Сообщение уйдет на мою почту, а если EmailJS еще не настроен, форма откроет готовый e-mail.',
      name: 'Имя',
      email: 'Ваш email',
      projectType: 'Тип проекта',
      message: 'Сообщение',
      submit: 'Отправить сообщение',
      sending: 'Отправка...',
      close: 'Закрыть',
      success: 'Сообщение готово. Я отвечу так быстро, как смогу.',
      fallback:
        'EmailJS еще не настроен, поэтому я открыл готовое письмо в вашем почтовом клиенте.',
      error: 'Не получилось отправить через EmailJS. Попробуйте еще раз или напишите напрямую на почту.',
      options: ['Портфолио / landing', 'Бизнес-сайт', 'Frontend-приложение', 'Обновление UI'],
      directEmail: email,
    },
    footer: {
      signature: 'Спроектировано и собрано на React, с движением и вкусом.',
      location: 'Польша / Удаленно',
    },
  },
}
