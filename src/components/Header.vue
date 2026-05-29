<template>
  <nav class="main-nav">
    <div class="container nav-row">
      <div class="nav-links">
        <RouterLink to="/">{{ t.navHome }}</RouterLink>
        <RouterLink to="/contacts">{{ t.navContacts }}</RouterLink>
      </div>
      <div class="nav-controls">
        <button 
          :class="{ active: store.language === 'uk' }" 
          @click="store.setLanguage('uk')"
        >UA</button>
        <button 
          :class="{ active: store.language === 'en' }" 
          @click="store.setLanguage('en')"
        >EN</button>
        <button @click="store.toggleTheme">{{ t.themeButton }}</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { store, t } from '../store.js';
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
  gap: 16px;
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
@media (max-width: 768px) {
  .nav-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>