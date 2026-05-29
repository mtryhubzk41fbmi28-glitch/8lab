<template>
  <nav class="main-nav">
    <div class="container nav-row">
      <div class="nav-logo">Portfolio</div>
      
      <button class="burger" @click="isMenuOpen = !isMenuOpen" aria-label="Меню">
        <span v-if="!isMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <div class="nav-content" :class="{ 'is-open': isMenuOpen }">
        <div class="nav-links">
          <RouterLink to="/" @click="closeMenu">{{ t.navHome }}</RouterLink>
          <RouterLink to="/contacts" @click="closeMenu">{{ t.navContacts }}</RouterLink>
        </div>
        <div class="nav-controls">
          <button :class="{ active: store.language === 'uk' }" @click="store.setLanguage('uk')">UA</button>
          <button :class="{ active: store.language === 'en' }" @click="store.setLanguage('en')">EN</button>
          <button @click="store.toggleTheme">{{ t.themeButton }}</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { store, t } from '../store.js';

const isMenuOpen = ref(false);

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<style scoped>
.main-nav {
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-logo {
  font-weight: bold;
  font-size: 1.2rem;
}
.nav-content {
  display: flex;
  gap: 16px;
  align-items: center;
}
.nav-links, .nav-controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}
a, button {
  padding: 8px 14px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--text);
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
}
.router-link-exact-active, button.active {
  background: var(--accent);
  color: var(--bg);
}

.burger {
  display: none;
  background: transparent;
  border: none;
  font-size: 24px;
  padding: 4px;
}

@media (max-width: 768px) {
  .burger {
    display: block;
  }
  .nav-content {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--bg);
    padding: 20px;
    border-bottom: 1px solid var(--line);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  .nav-content.is-open {
    display: flex;
  }
  .nav-links, .nav-controls {
    width: 100%;
    flex-direction: column;
  }
  .nav-links a, .nav-controls button {
    width: 100%;
    text-align: center;
  }
}
</style>