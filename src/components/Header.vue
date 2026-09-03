<template>
  <header class="header">
    <div class="nav-shell">
      <router-link to="/" class="brand" @click.native="closeMenu" aria-label="Camilo Sanchez home">
        <span class="brand-mark" aria-hidden="true">CS</span>
        <span class="brand-copy"><strong>Camilo Sanchez</strong><small>Game developer</small></span>
      </router-link>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen ? 'true' : 'false'" aria-controls="primary-navigation" @click="menuOpen = !menuOpen">
        {{ menuOpen ? 'Close' : 'Menu' }}
      </button>
      <nav id="primary-navigation" class="nav-bar" :class="{ open: menuOpen }" aria-label="Primary navigation">
        <router-link to="/" exact @click.native="closeMenu"><span>01</span> About</router-link>
        <router-link to="/game-projects" @click.native="closeMenu"><span>02</span> Work</router-link>
        <router-link to="/resume" @click.native="closeMenu"><span>03</span> Resume</router-link>
        <router-link to="/contact" @click.native="closeMenu"><span>04</span> Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data: () => ({ menuOpen: false }),
  methods: {
    closeMenu() { this.menuOpen = false; }
  }
});
</script>

<style scoped>
.header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(41, 49, 67, .8);
  background: rgba(7, 9, 13, .88);
  backdrop-filter: blur(18px);
}

.nav-shell {
  width: min(100%, var(--max-width));
  min-height: 82px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.brand { display: inline-flex; align-items: center; gap: 12px; }

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border: 1px solid var(--cyan);
  color: var(--cyan);
  font: 600 .8rem/1 'IBM Plex Mono', monospace;
  box-shadow: 4px 4px 0 rgba(70, 224, 213, .13);
}

.brand-copy { display: grid; line-height: 1.2; }
.brand-copy strong { font-size: .92rem; }
.brand-copy small { color: var(--muted); font: 500 .68rem/1.5 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .08em; }

.nav-bar { display: flex; align-items: center; gap: 30px; }

.nav-bar a {
  position: relative;
  padding: 28px 0 24px;
  color: var(--muted);
  font: 600 .76rem/1 'IBM Plex Mono', monospace;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.nav-bar a span { margin-right: 5px; color: var(--dim); font-size: .65rem; }
.nav-bar a::after { content: ''; position: absolute; left: 0; right: 100%; bottom: 18px; height: 2px; background: var(--cyan); transition: right .18s ease; }
.nav-bar a:hover, .nav-bar a.router-link-exact-active { color: var(--ink); }
.nav-bar a:hover::after, .nav-bar a.router-link-exact-active::after { right: 0; }

.menu-toggle {
  display: none;
  min-width: 74px;
  min-height: 40px;
  border: 1px solid var(--line);
  background: var(--panel);
  color: var(--ink);
  font: 600 .74rem/1 'IBM Plex Mono', monospace;
  letter-spacing: .08em;
  text-transform: uppercase;
}

@media (max-width: 760px) {
  .nav-shell { min-height: 70px; padding: 0 18px; }
  .brand-mark { width: 38px; height: 38px; }
  .brand-copy small { display: none; }
  .menu-toggle { display: block; }
  .nav-bar {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    padding: 10px 18px 20px;
    background: rgba(7, 9, 13, .97);
    border-bottom: 1px solid var(--line);
  }
  .nav-bar.open { display: grid; }
  .nav-bar a { padding: 16px 4px; border-bottom: 1px solid rgba(41, 49, 67, .65); }
  .nav-bar a::after { bottom: 8px; }
}
</style>
