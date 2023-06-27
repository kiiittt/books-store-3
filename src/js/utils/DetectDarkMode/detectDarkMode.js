class ThemeToggle {
  constructor() {
    this.themeToggleBtn = document.querySelector('.theme-toggle-button');
    this.themeOnDevice = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    this.initialTheme = localStorage.getItem('theme') || this.themeOnDevice;

    this.setupTheme();
    this.setupEventListeners();
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('theme');
    const isChecked = this.themeToggleBtn.checked;

    if (currentTheme === 'dark' && !isChecked) {
      document.documentElement.setAttribute('theme', 'light');
      localStorage.setItem('theme', 'light');
    } else if (currentTheme === 'light' && isChecked) {
      document.documentElement.setAttribute('theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  setupTheme() {
    document.documentElement.setAttribute('theme', this.initialTheme);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('theme', savedTheme);
      this.themeToggleBtn.checked = savedTheme === 'dark';
    } else {
      this.themeToggleBtn.checked = this.initialTheme === 'dark';
    }

    const savedCheckboxState = localStorage.getItem('checkboxState');
    if (savedCheckboxState === 'checked') {
      this.themeToggleBtn.checked = true;
    }
  }

  setupEventListeners() {
    this.themeToggleBtn.addEventListener('change', this.toggleTheme.bind(this));

    this.themeToggleBtn.addEventListener('change', () => {
      const checkboxState = this.themeToggleBtn.checked ? 'checked' : 'unchecked';
      localStorage.setItem('checkboxState', checkboxState);
    });
  }
}

export default ThemeToggle;
