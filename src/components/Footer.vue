<template>
  <footer>
    <div class="container footer-row">
      <p>{{ t.footerText }}</p>
      <RouterLink v-if="$route.path !== '/contacts'" to="/contacts">{{ t.footerContacts }}</RouterLink>
      <RouterLink v-else to="/">{{ t.backHome }}</RouterLink>
    </div>
  </footer>
</template>

<script setup>
import { t } from '../store.js';
</script>

<style scoped>
footer {
  padding: 24px 0;
  border-top: 1px solid var(--line);
  margin-top: auto;
}
.footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
a {
  padding: 8px 14px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--text);
  border-radius: 8px;
  text-decoration: none;
}
@media (max-width: 768px) {
  .footer-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>