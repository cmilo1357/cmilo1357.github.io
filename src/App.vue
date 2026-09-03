<template>
  <div id="app">
    <Header />
    <main class="main" id="main-content">
      <transition name="route-fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});
</script>

<style lang="less">

:root {
  --ink: #f4f2e9;
  --muted: #9ba3b7;
  --dim: #687084;
  --night: #07090d;
  --panel: #0d1119;
  --panel-2: #121824;
  --line: #293143;
  --cyan: #46e0d5;
  --amber: #ffbd52;
  --danger: #ff6f61;
  --max-width: 1180px;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-width: 320px;
  background: var(--night);
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at 82% 2%, rgba(70, 224, 213, .09), transparent 31rem),
    linear-gradient(rgba(70, 224, 213, .025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(70, 224, 213, .025) 1px, transparent 1px);
  background-size: auto, 42px 42px, 42px 42px;
}

button, a { -webkit-tap-highlight-color: transparent; }

button, input, textarea { font: inherit; }

#app {
  min-height: 100vh;
  color: var(--ink);
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus-visible, button:focus-visible {
  outline: 2px solid var(--amber);
  outline-offset: 4px;
}

.main {
  width: min(100%, var(--max-width));
  min-height: calc(100vh - 180px);
  margin: 0 auto;
  padding: 56px 24px 96px;
}

.page-shell { animation: page-in .45s ease both; }

.eyebrow {
  margin: 0 0 18px;
  color: var(--cyan);
  font: 600 .78rem/1.4 'IBM Plex Mono', monospace;
  letter-spacing: .13em;
  text-transform: uppercase;
}

.page-title {
  max-width: 900px;
  margin: 0;
  font-size: clamp(2.8rem, 8vw, 6.6rem);
  font-weight: 600;
  letter-spacing: -.065em;
  line-height: .95;
}

.section-title {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.7rem);
  font-weight: 600;
  letter-spacing: -.045em;
  line-height: 1;
}

.lede {
  max-width: 760px;
  margin: 28px 0 0;
  color: #c9cedb;
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  line-height: 1.65;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  border: 1px solid var(--cyan);
  background: var(--cyan);
  color: #06110f;
  font: 600 .78rem/1 'IBM Plex Mono', monospace;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: transform .18s ease, background .18s ease, color .18s ease;
}

.button::after { content: '→'; font-size: 1rem; }
.button:hover { transform: translateY(-2px); background: #72eee5; }

.button.secondary {
  background: transparent;
  color: var(--ink);
  border-color: var(--line);
}

.button.secondary:hover { border-color: var(--cyan); color: var(--cyan); }
.button.download::after { content: '↓'; }

.route-fade-enter-active, .route-fade-leave-active { transition: opacity .18s ease, transform .18s ease; }
.route-fade-enter, .route-fade-leave-to { opacity: 0; transform: translateY(8px); }

@keyframes page-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .main { padding: 36px 18px 72px; }
  .button-row { display: grid; }
  .button { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
}

</style>
