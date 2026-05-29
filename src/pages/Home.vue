<template>
  <main>
    <header class="hero">
      <div class="container">
        <p class="hero__label">ПРАКТИЧНА РОБОТА №8</p>
        <h1>{{ t.heroTitle }}</h1>
        <p>{{ t.heroText }}</p>
        <div class="hero__actions">
          <a class="btn-link" href="#projects">{{ t.projectsLink }}</a>
        </div>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <h2>{{ t.aboutTitle }}</h2>
        <p>{{ t.aboutText }}</p>
      </div>
    </section>

    <section class="section section--alt" id="projects">
      <div class="container">
        <h2>{{ t.projectsTitle }}</h2>
        
        <div class="controls">
          <p><span>{{ t.shownLabel }}</span> <span>{{ filteredProjects.length }} / {{ t.projects.length }}</span></p>
          <div class="tag-list">
            <button 
              v-for="tag in allTags" 
              :key="tag"
              class="tag-button"
              :class="{ active: selectedTag === tag }"
              @click="selectedTag = tag"
            >
              {{ tag === 'all' ? t.allTag : tag }}
            </button>
          </div>
        </div>

        <div class="project-grid">
          <ProjectCard 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :project="project"
            :detailsButtonText="t.detailsButton"
            @open-details="openModal"
          />
        </div>
      </div>
    </section>

    <div class="modal" :class="{ open: isModalOpen }" @click.self="closeModal">
      <div class="modal__content">
        <button class="modal__close" @click="closeModal">×</button>
        <template v-if="activeProject">
          <h3>{{ activeProject.title }}</h3>
          <p>{{ activeProject.description }}</p>
          <p>{{ activeProject.details }}</p>
          <p><a href="https://github.com/maksym" target="_blank" rel="noopener noreferrer">{{ t.repoLink }}</a></p>
        </template>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { t } from '../store.js';
import ProjectCard from '../components/ProjectCard.vue';

const selectedTag = ref('all');
const isModalOpen = ref(false);
const activeProject = ref(null);

const allTags = computed(() => {
  const tags = new Set(['all']);
  t.value.projects.forEach(p => p.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags);
});

const filteredProjects = computed(() => {
  if (selectedTag.value === 'all') return t.value.projects;
  return t.value.projects.filter(p => p.tags.includes(selectedTag.value));
});

function openModal(project) {
  activeProject.value = project;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  isModalOpen.value = false;
  setTimeout(() => activeProject.value = null, 300);
  document.body.style.overflow = '';
}
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
.hero__actions {
  margin-top: 20px;
}
.btn-link {
  display: inline-block;
  padding: 8px 14px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--text);
  border-radius: 8px;
  text-decoration: none;
}
.section {
  padding: 36px 0;
}
.section--alt {
  background: var(--bg-alt);
}
.controls {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}
.tag-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.tag-button {
  padding: 8px 14px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--text);
  border-radius: 8px;
  cursor: pointer;
}
.tag-button.active {
  background: var(--accent);
  color: var(--bg);
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  padding: 20px;
  z-index: 1000;
}
.modal.open {
  display: block;
}
.modal__content {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  max-width: 520px;
  margin: 80px auto 0;
  padding: 20px;
  position: relative;
}
.modal__close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text);
  cursor: pointer;
}
@media (max-width: 768px) {
  .project-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .hero h1 { font-size: 30px; }
  .project-grid { grid-template-columns: 1fr; }
}
</style>