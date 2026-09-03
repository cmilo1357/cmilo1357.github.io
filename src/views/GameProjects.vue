<template>
  <div class="page-shell projects-page">
    <header class="projects-header">
      <p class="eyebrow">Selected work · 2023—present</p>
      <h1 class="page-title">Games built from the inside out.</h1>
      <p class="lede">Four projects that show the range of my work—from large Verse architectures and complete UEFN islands to polished real-time VFX for a licensed Roblox experience.</p>
    </header>

    <section class="project-list" aria-label="Selected game projects">
      <article v-for="(project, index) in projects" :key="project.id" class="project-card" :id="project.id">
        <div class="project-media" :class="project.visualClass">
          <img v-if="project.image" :src="project.image" :alt="project.imageAlt" loading="lazy" />
          <div v-else class="generated-cover" aria-hidden="true">
            <span class="cover-code">FC//01</span>
            <span class="cover-map"></span>
            <small>Persistent city systems online</small>
          </div>
          <div class="media-label"><span>{{ projectNumber(index) }}</span>{{ project.platform }}</div>
        </div>

        <div class="project-content">
          <div class="project-topline"><span>{{ project.status }}</span><span>{{ project.role }}</span></div>
          <h2>{{ project.title }}</h2>
          <p class="project-summary">{{ project.summary }}</p>

          <dl class="project-stats">
            <div v-for="stat in project.stats" :key="stat.label"><dt>{{ stat.value }}</dt><dd>{{ stat.label }}</dd></div>
          </dl>

          <div class="project-detail-grid">
            <div>
              <h3>What I built</h3>
              <ul><li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li></ul>
            </div>
            <div>
              <h3>Toolset</h3>
              <div class="project-tags"><span v-for="item in project.stack" :key="item">{{ item }}</span></div>
            </div>
          </div>

          <a v-if="project.url" class="project-link" :href="project.url" target="_blank" rel="noopener noreferrer">{{ project.urlLabel }} <span aria-hidden="true">↗</span></a>
        </div>
      </article>
    </section>

    <section class="work-cta">
      <p class="eyebrow">Need the technical depth?</p>
      <h2>I can walk you through the architecture, code, and decisions behind each system.</h2>
      <router-link class="button" to="/contact">Start a conversation</router-link>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import projects from '@/data/GameProjectsData';

export default Vue.extend({
  name: 'GameProjects',
  data: () => ({ projects }),
  methods: {
    projectNumber(index: number): string {
      return String(index + 1).padStart(2, '0');
    }
  }
});
</script>

<style scoped>
.projects-header { padding: 46px 0 92px; }
.project-list { display: grid; gap: 82px; }
.project-card { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr); border: 1px solid var(--line); background: rgba(13,17,25,.88); }
.project-card:nth-child(even) .project-media { order: 2; }
.project-media { position: relative; min-height: 580px; overflow: hidden; background: #0b1017; }
.project-media img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform .5s ease; }
.project-card:hover .project-media img { transform: scale(1.025); }
.media-label { position: absolute; left: 0; right: 0; bottom: 0; display: flex; justify-content: space-between; align-items: center; padding: 15px 18px; background: rgba(7,9,13,.84); backdrop-filter: blur(9px); color: #d9dce4; font: 600 .68rem/1.2 'IBM Plex Mono', monospace; letter-spacing: .06em; text-transform: uppercase; }
.media-label span { color: var(--cyan); }
.fortune-visual { background: radial-gradient(circle at 74% 20%, rgba(255,189,82,.28), transparent 20%), linear-gradient(145deg, #193a38 0%, #0c171c 58%, #2b1713 100%); }
.generated-cover { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: space-between; padding: 46px; overflow: hidden; }
.generated-cover::before { content: ''; position: absolute; inset: 0; opacity: .32; background: linear-gradient(rgba(70,224,213,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(70,224,213,.14) 1px, transparent 1px); background-size: 34px 34px; transform: perspective(500px) rotateX(58deg) scale(1.55) translateY(22%); }
.cover-code { position: relative; z-index: 1; color: var(--cyan); font: 600 clamp(4.8rem, 9vw, 8.4rem)/.8 'IBM Plex Mono', monospace; letter-spacing: -.12em; }
.cover-map { position: absolute; width: 190px; height: 190px; right: 11%; top: 36%; border: 1px solid rgba(255,189,82,.5); transform: rotate(45deg); box-shadow: 0 0 70px rgba(255,189,82,.1), inset 0 0 55px rgba(255,189,82,.06); }
.cover-map::before, .cover-map::after { content: ''; position: absolute; background: var(--amber); }
.cover-map::before { width: 1px; height: 140%; left: 50%; top: -20%; }
.cover-map::after { height: 1px; width: 140%; top: 50%; left: -20%; }
.generated-cover small { position: relative; z-index: 1; color: var(--amber); font: 600 .72rem/1.4 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .08em; }
.project-content { padding: 40px; }
.project-topline { display: flex; justify-content: space-between; gap: 18px; margin-bottom: 30px; color: var(--dim); font: 600 .65rem/1.4 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .06em; }
.project-topline span:first-child { color: var(--cyan); }
.project-topline span:last-child { text-align: right; }
.project-content h2 { margin: 0; font-size: clamp(2.4rem, 4.2vw, 4rem); letter-spacing: -.055em; line-height: .95; }
.project-summary { margin: 22px 0 0; color: #bfc5d2; font-size: 1.02rem; line-height: 1.7; }
.project-stats { display: grid; grid-template-columns: repeat(3, 1fr); margin: 30px 0; padding: 20px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.project-stats div { padding: 0 14px; border-right: 1px solid var(--line); }
.project-stats div:first-child { padding-left: 0; }
.project-stats div:last-child { border-right: 0; }
.project-stats dt { color: var(--amber); font: 600 1.25rem/1.2 'IBM Plex Mono', monospace; }
.project-stats dd { margin: 7px 0 0; color: var(--dim); font-size: .7rem; line-height: 1.3; text-transform: uppercase; letter-spacing: .05em; }
.project-detail-grid { display: grid; grid-template-columns: 1.45fr .55fr; gap: 28px; }
.project-detail-grid h3 { margin: 0 0 12px; color: var(--ink); font: 600 .7rem/1.4 'IBM Plex Mono', monospace; letter-spacing: .08em; text-transform: uppercase; }
.project-detail-grid ul { margin: 0; padding: 0; list-style: none; }
.project-detail-grid li { position: relative; margin-bottom: 9px; padding-left: 16px; color: var(--muted); font-size: .87rem; line-height: 1.55; }
.project-detail-grid li::before { content: '›'; position: absolute; left: 0; color: var(--cyan); }
.project-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.project-tags span { padding: 5px 7px; border: 1px solid var(--line); color: var(--muted); font: 500 .63rem/1 'IBM Plex Mono', monospace; text-transform: uppercase; }
.project-link { display: inline-block; margin-top: 28px; padding-bottom: 4px; border-bottom: 1px solid var(--cyan); color: var(--cyan); font: 600 .7rem/1.4 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .06em; }
.work-cta { max-width: 900px; margin: 130px 0 20px auto; padding: 48px; border-left: 3px solid var(--amber); background: var(--panel); }
.work-cta h2 { margin: 0; font-size: clamp(2rem, 4.5vw, 3.5rem); letter-spacing: -.05em; line-height: 1.05; }
@media (max-width: 980px) {
  .project-card { grid-template-columns: 1fr; }
  .project-card:nth-child(even) .project-media { order: initial; }
  .project-media { min-height: 430px; }
}
@media (max-width: 620px) {
  .projects-header { padding: 24px 0 64px; }
  .project-list { gap: 38px; }
  .project-media { min-height: 310px; }
  .project-content { padding: 26px 20px 30px; }
  .project-topline { display: grid; margin-bottom: 24px; }
  .project-topline span:last-child { text-align: left; }
  .project-stats div { padding: 0 9px; }
  .project-stats dt { font-size: 1rem; }
  .project-detail-grid { grid-template-columns: 1fr; }
  .generated-cover { padding: 28px; }
  .cover-map { width: 130px; height: 130px; }
  .work-cta { margin-top: 80px; padding: 30px 22px; }
}
</style>
