// Bilingual: saved choice in localStorage, else system language (ru → Russian, else English)
const LANG_KEY = 'psymap-lang';

function getStoredLang() {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored === 'ru' || stored === 'en') return stored;
  const nav = navigator.language || navigator.userLanguage || 'en';
  return nav.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

let LANG = getStoredLang();

function setLang(lang) {
  if (lang !== 'ru' && lang !== 'en') return;
  localStorage.setItem(LANG_KEY, lang);
  LANG = lang;
  document.documentElement.lang = LANG;
  applyTranslations();
  updateLangSwitcher();
  window.dispatchEvent(new CustomEvent('psymap:langchange', { detail: { lang } }));
}

function updateLangSwitcher() {
  document.querySelectorAll('.lang-switcher [data-lang]').forEach(el => {
    const isActive = el.getAttribute('data-lang') === LANG;
    el.classList.toggle('active', isActive);
    el.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

const T = {
  // --- Nav ---
  navHome:     { ru: 'Главная', en: 'Home' },
  navSupport:  { ru: 'Поддержка', en: 'Support' },
  navPrivacy:  { ru: 'Конфиденциальность', en: 'Privacy' },
  navEvidence: { ru: 'Источники', en: 'Sources' },

  // --- Landing ---
  heroTitle:    { ru: 'PsyMap', en: 'PsyMap' },
  heroSubtitle: {
    ru: 'Учебный навигатор для студентов-психологов и начинающих практиков',
    en: 'Study navigator for psychology students and beginning practitioners'
  },
  heroCta:      { ru: 'Скачать в App Store', en: 'Download on the App Store' },
  heroOffline:  { ru: 'Работает офлайн — без аккаунта', en: 'Works offline — no account needed' },

  featTitle:    { ru: 'Возможности', en: 'Features' },
  feat1Title:   { ru: 'Запросы клиентов', en: 'Client Requests' },
  feat1Desc:    {
    ru: '20 типичных тем для изучения: формулировки, подготовка к сессиям, супервизия, связанные книги.',
    en: '20 typical themes to study: formulations, session prep, supervision prompts, linked books.'
  },
  feat2Title:   { ru: 'Модальности', en: 'Modalities' },
  feat2Desc:    {
    ru: 'КПТ, психоанализ, гештальт, системная, экзистенциальная, ТА — подтемы, книги и статьи.',
    en: 'CBT, Psychoanalysis, Gestalt, Systemic, Existential, TA — subtopics, books, and articles.'
  },
  feat3Title:   { ru: 'Общие темы', en: 'General Topics' },
  feat3Desc:    {
    ru: '20 универсальных тем с книгами, статьями и ментальными картами.',
    en: '20 universal themes with books, articles, and mind maps.'
  },
  feat4Title:   { ru: 'Брифы книг', en: 'Book Briefs' },
  feat4Desc:    {
    ru: '50+ книг с выжимками: ключевые идеи, техники, ошибки, вопросы для рефлексии.',
    en: '50+ books with briefs: key ideas, techniques, common mistakes, reflection questions.'
  },
  feat5Title:   { ru: 'Избранное', en: 'Favorites' },
  feat5Desc:    {
    ru: 'Личный список чтения на устройстве. Без аккаунта, без синхронизации.',
    en: 'Personal reading list on device. No account, no sync.'
  },
  feat6Title:   { ru: 'Офлайн', en: 'Offline' },
  feat6Desc:    {
    ru: 'Весь контент внутри приложения. Работает без интернета.',
    en: 'All content bundled. Works without internet.'
  },

  screenshotsTitle:   { ru: 'Как устроено приложение', en: 'How the app works' },
  screenshotsStory:   {
    ru: 'Краткая история по экранам: от главной до избранного.',
    en: 'A short walk through the app: from home to your reading list.'
  },
  screenshot1Caption: { ru: 'Главная — три каталога и быстрый старт', en: 'Home — three catalogs and quick access' },
  screenshot2Caption: { ru: 'Запросы клиентов — 20 типичных тем', en: 'Client requests — 20 typical themes' },
  screenshot3Caption: { ru: 'Карточка запроса — навигатор по теме', en: 'Request card — navigator for the theme' },
  screenshot4Caption: { ru: 'Модальности — подходы и подтемы', en: 'Modalities — approaches and subtopics' },
  screenshot5Caption: { ru: 'Общие темы — книги и статьи', en: 'General topics — books and articles' },
  screenshot6Caption: { ru: 'Бриф книги — идеи, техники, избранное', en: 'Book brief — ideas, techniques, favorites' },
  screenshot7Caption: { ru: 'Избранное — ваш список для чтения', en: 'Favorites — your reading list' },

  whoTitle:     { ru: 'Для кого', en: 'Who is it for' },
  whoStudents:  { ru: 'Студенты-психологи', en: 'Psychology students' },
  whoBeginners: { ru: 'Начинающие практики (0–3 года)', en: 'Beginning practitioners (0–3 years)' },
  whoRetrain:   { ru: 'Психологи в переподготовке', en: 'Psychologists in retraining' },
  whoSuper:     { ru: 'Супервизоры и преподаватели', en: 'Supervisors and teachers' },

  disclaimerTitle: { ru: 'Важно', en: 'Important' },
  disclaimerText:  {
    ru: 'PsyMap — образовательный справочник. Не является медицинским изделием, не предназначен для диагностики, лечения или принятия решений о пациентах. В случае риска обращайтесь к супервизору и соответствующим службам.',
    en: 'PsyMap is an educational reference tool. It is not a medical device and is not intended for diagnosis, treatment, or clinical decision-making. In situations of risk, always rely on supervision and appropriate services.'
  },

  footerCopy: {
    ru: '© 2026 PsyMap. Образовательный справочник.',
    en: '© 2026 PsyMap. Educational reference tool.'
  },

  // --- Support ---
  supportTitle:     { ru: 'Поддержка', en: 'Support' },
  supportIntro:     {
    ru: 'Если у вас есть вопросы, предложения или проблема с приложением — напишите нам.',
    en: 'If you have questions, suggestions, or issues with the app — contact us.'
  },
  supportEmail:     { ru: 'Email для связи', en: 'Contact email' },
  supportEmailAddr: { ru: 'support@psymap.app', en: 'support@psymap.app' },

  faqTitle:   { ru: 'Частые вопросы', en: 'FAQ' },
  faq1Q:      { ru: 'Приложение работает без интернета?', en: 'Does the app work offline?' },
  faq1A:      { ru: 'Да. Весь контент внутри приложения, интернет не нужен.', en: 'Yes. All content is bundled. No internet required.' },
  faq2Q:      { ru: 'Нужен ли аккаунт?', en: 'Do I need an account?' },
  faq2A:      { ru: 'Нет. Данные (избранное) хранятся только на вашем устройстве.', en: 'No. Data (favorites) is stored only on your device.' },
  faq3Q:      { ru: 'Можно ли использовать для диагностики?', en: 'Can I use it for diagnosis?' },
  faq3A:      {
    ru: 'Нет. Приложение — учебный справочник. Не предназначено для диагностики, лечения или работы с пациентами.',
    en: 'No. The app is a study reference. It is not intended for diagnosis, treatment, or patient care.'
  },
  faq4Q:      { ru: 'Как восстановить подписку?', en: 'How do I restore my subscription?' },
  faq4A:      {
    ru: 'Откройте «Настройки» → «Подписка» → «Восстановить покупки». Используйте тот же Apple ID.',
    en: 'Open Settings → Subscription → Restore Purchases. Use the same Apple ID.'
  },
  faq5Q:      { ru: 'На каких устройствах работает?', en: 'What devices are supported?' },
  faq5A:      { ru: 'iPhone и iPad с iOS 17 и новее.', en: 'iPhone and iPad running iOS 17 or later.' },

  // --- Privacy ---
  privacyTitle:     { ru: 'Политика конфиденциальности', en: 'Privacy Policy' },
  privacyUpdated:   { ru: 'Последнее обновление: 7 февраля 2026', en: 'Last updated: February 7, 2026' },
  privacyIntro:     {
    ru: 'Настоящая Политика конфиденциальности описывает, как PsyMap («Приложение», «мы») обрабатывает информацию.',
    en: 'This Privacy Policy describes how PsyMap ("the App," "we") handles information.'
  },
  priv1Title: { ru: '1. Сбор данных', en: '1. Data Collection' },
  priv1Text:  {
    ru: 'PsyMap НЕ собирает, не передаёт и не хранит на серверах какие-либо персональные данные. Приложение работает полностью офлайн. У нас нет аккаунтов, регистрации и серверной части.',
    en: 'PsyMap does NOT collect, transmit, or store any personal data on servers. The app works fully offline. There are no accounts, no registration, and no backend.'
  },
  priv2Title: { ru: '2. Данные на устройстве', en: '2. On-Device Data' },
  priv2Text:  {
    ru: 'Приложение хранит на вашем устройстве только: список избранных книг и настройки языка. Эти данные не покидают устройство и не синхронизируются.',
    en: 'The app stores on your device only: your list of favorite books and language settings. This data never leaves the device and is not synced.'
  },
  priv3Title: { ru: '3. Покупки в приложении', en: '3. In-App Purchases' },
  priv3Text:  {
    ru: 'Подписки обрабатываются Apple через App Store. Мы не имеем доступа к вашим платёжным данным. Детали — в политике Apple: https://www.apple.com/legal/privacy/',
    en: 'Subscriptions are processed by Apple via the App Store. We have no access to your payment data. See Apple\'s privacy policy: https://www.apple.com/legal/privacy/'
  },
  priv4Title: { ru: '4. Аналитика', en: '4. Analytics' },
  priv4Text:  {
    ru: 'Мы не используем сторонние SDK аналитики. Мы не отслеживаем вашу активность.',
    en: 'We do not use third-party analytics SDKs. We do not track your activity.'
  },
  priv5Title: { ru: '5. Дети', en: '5. Children' },
  priv5Text:  {
    ru: 'Приложение не направлено на детей и не собирает данные детей. Рейтинг: 4+.',
    en: 'The app is not directed at children and does not collect data from children. Rating: 4+.'
  },
  priv6Title: { ru: '6. Изменения', en: '6. Changes' },
  priv6Text:  {
    ru: 'Мы можем обновлять эту политику. Актуальная версия всегда доступна на этой странице.',
    en: 'We may update this policy. The current version is always available on this page.'
  },
  priv7Title: { ru: '7. Контакт', en: '7. Contact' },
  priv7Text:  {
    ru: 'По вопросам конфиденциальности: support@psymap.app',
    en: 'For privacy questions: support@psymap.app'
  },

  // --- Evidence ---
  evidenceTitle:    { ru: 'Источники и литература', en: 'Sources & Literature' },
  evidenceIntro:    {
    ru: 'Структурированный список источников, на которых основан образовательный контент приложения. Эти материалы использованы для создания учебных ресурсов, а не для диагностики или лечения.',
    en: 'Structured list of sources grounding the app\'s educational content. These materials were used to create study resources, not for diagnosis or treatment.'
  },
  evidenceDisclaimer: {
    ru: 'Это библиография к образовательным материалам. Приложение не предоставляет диагностику, лечение или медицинские рекомендации.',
    en: 'This is bibliography for the educational materials. The app does not provide diagnosis, treatment, or medical recommendations.'
  },
  catGuidelines:  { ru: 'Профессиональные гайдлайны и справочники', en: 'Professional Guidelines & References' },
  catMeta:        { ru: 'Мета-анализы и систематические обзоры', en: 'Meta-Analyses & Systematic Reviews' },
  catBooks:       { ru: 'Ключевые книги', en: 'Key Books' },
  catArticles:    { ru: 'Научные статьи (исследования)', en: 'Scientific Articles (Research Studies)' },
};

function t(key) {
  const entry = T[key];
  if (!entry) return key;
  return entry[LANG] || entry.en || key;
}

// Apply translations to elements with data-i18n attribute
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });
  document.documentElement.lang = LANG;
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangSwitcher();
  // Language switcher clicks
  document.querySelectorAll('.lang-switcher [data-lang]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      setLang(el.getAttribute('data-lang'));
    });
  });
});
