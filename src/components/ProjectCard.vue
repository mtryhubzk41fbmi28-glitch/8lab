<template>
  <article class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <div class="project-tags">
      <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
    </div>
    <div class="project-actions">
      <button @click="$emit('open-details', project)">{{ detailsButtonText }}</button>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: Object,
  detailsButtonText: String
});
</script>

<style scoped>
.project-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 18px;
}
.project-card h3 {
  margin-top: 0;
}
.project-tags {
  margin: 12px 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.project-tag {
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--bg-alt);
  border: 1px solid var(--line);
  font-size: 14px;
}
.project-actions {
  margin-top: 16px;
}
button {
  padding: 8px 14px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--text);
  border-radius: 8px;
  cursor: pointer;
}
</style>