<template>
  <main>
    <header class="hero">
      <div class="container">
        <p class="hero__label">ПРАКТИЧНА РОБОТА №8</p>
        <h1>{{ t.contactsTitle }}</h1>
        <p>{{ t.contactsText }}</p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="card">
          <h2>{{ t.contactsListTitle }}</h2>
          <p><strong>Email:</strong> <a href="mailto:makstrigyb950@gmail.com">makstrigyb950@gmail.com</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/mtryhubzk41fbmi28-glitch" target="_blank" rel="noopener noreferrer">github.com/mtryhubzk41fbmi28-glitch</a></p>
          <p><strong>Telegram:</strong> <a href="https://t.me/trtgl" target="_blank" rel="noopener noreferrer">@trtgl</a></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { t } from '../store.js';
</script>

<style scoped>
.hero {
  padding: 48px 0 24px;
  border-bottom: 1px solid var(--line);
}
.hero__label {
  margin: 0 0 8px;
  color: #666666;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 13px;
}
.hero h1 {
  margin: 0 0 12px;
  font-size: 40px;
}
.hero p {
  max-width: 720px;
  margin: 0;
}
.section {
  padding: 36px 0;
}
.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 20px;
}
</style>