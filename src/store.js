import { reactive, watch, computed } from 'vue';

export const store = reactive({
  language: localStorage.getItem('language') || 'uk',
  theme: localStorage.getItem('theme') || 'light',
  
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  },
  setLanguage(lang) {
    this.language = lang;
  }
});

watch(() => store.theme, (newTheme) => {
  localStorage.setItem('theme', newTheme);
  if (newTheme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}, { immediate: true });

watch(() => store.language, (newLang) => {
  localStorage.setItem('language', newLang);
});

const translationsData = {
  uk: {
    heroTitle: "Максим",
    heroText: "Студент, який поєднує аналітичний підхід до програмування з інтересом до візуального мистецтва та створення контенту.",
    projectsLink: "Перейти до проєктів",
    navHome: "Головна",
    navContacts: "Контакти",
    themeButton: "Тема",
    aboutTitle: "Про мене",
    aboutText: "Навчаюся в КПІ (розглядаю варіант з ЛНУ). Захоплююсь штучним інтелектом, біоінформатикою, а також фотографією та відеомонтажем. Вільний час проводжу в тренажерному залі, граю в баскетбол, катаюсь на роликах або організовую тематичні кіновечори для друзів.",
    projectsTitle: "Проєкти",
    shownLabel: "Показано:",
    allTag: "Усі",
    detailsButton: "Деталі",
    repoLink: "Репозиторій",
    footerText: "Портфоліо студента.",
    footerContacts: "Відкрити контакти",
    contactsTitle: "Контакти",
    contactsText: "Тут зібрані основні способи зв'язку зі мною.",
    contactsListTitle: "Основні контакти",
    backHome: "Повернутися на головну",
    projects: [
      {
        id: 1,
        title: "ШІ та Біоінформатика",
        description: "Комплексні лабораторні роботи з обробки генетичних даних.",
        details: "Проєкти включають обробку генетичних послідовностей, нормалізацію даних для моделей машинного навчання та створення Telegram-ботів.",
        tags: ["Python", "AI", "Data"]
      },
      {
        id: 2,
        title: "Фотографія",
        description: "Зйомки у різних жанрах: від портретів до репортажів.",
        details: "Досвід роботи з різними умовами освітлення, композицією та кольором. Проведення індивідуальних, студійних та вуличних фотосесій.",
        tags: ["Photo", "Art"]
      },
      {
        id: 3,
        title: "Відеомонтаж",
        description: "Створення та монтаж динамічних відеороликів.",
        details: "Робота з кольорокорекцією, звуком, додавання ефектів та переходів. Монтаж відео різної складності для соціальних мереж.",
        tags: ["Video", "Editing"]
      }
    ]
  },
  en: {
    heroTitle: "Maksym",
    heroText: "A student who combines an analytical approach to programming with an interest in visual arts and content creation.",
    projectsLink: "Go to projects",
    navHome: "Home",
    navContacts: "Contacts",
    themeButton: "Theme",
    aboutTitle: "About me",
    aboutText: "Studying at KPI (considering a transfer to LNU). I'm interested in Artificial Intelligence, Bioinformatics, as well as photography and video editing. I spend my free time at the gym, playing basketball, rollerblading, or organizing movie nights for friends.",
    projectsTitle: "Projects",
    shownLabel: "Shown:",
    allTag: "All",
    detailsButton: "Details",
    repoLink: "Repository",
    footerText: "Student portfolio.",
    footerContacts: "Open contacts",
    contactsTitle: "Contacts",
    contactsText: "Here you can find the main ways to contact me.",
    contactsListTitle: "Main contacts",
    backHome: "Back to home",
    projects: [
      {
        id: 1,
        title: "AI & Bioinformatics",
        description: "Complex lab work on genetic data processing.",
        details: "Projects include processing genetic sequences, normalizing data for machine learning models, and building Telegram bots.",
        tags: ["Python", "AI", "Data"]
      },
      {
        id: 2,
        title: "Photography",
        description: "Shooting in various genres: from portraits to reportage.",
        details: "Experience working with different lighting conditions, composition, and color. Conducting individual, studio, and street photoshoots.",
        tags: ["Photo", "Art"]
      },
      {
        id: 3,
        title: "Video Editing",
        description: "Creating and editing dynamic videos.",
        details: "Working with color grading, sound, adding effects and transitions. Editing videos of varying complexity for social media.",
        tags: ["Video", "Editing"]
      }
    ]
  }
};

export const t = computed(() => translationsData[store.language]);