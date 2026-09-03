<template>
  <div class="page-shell home-page">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Player 01 · Medellin, Colombia</p>
        <h1 id="hero-title" class="hero-title">I build the systems and visuals that make game worlds feel alive.</h1>
        <p class="role-line">UEFN / Verse Gameplay Developer <span>+</span> Technical Artist</p>
        <p class="hero-summary">
          I architect scalable gameplay systems, craft player-facing UI, and bring experiences to life through real-time VFX, materials, and careful optimization.
        </p>
        <div class="button-row">
          <router-link class="button" to="/game-projects">Explore my work</router-link>
          <a class="button secondary download" href="d/Camilo_Sanchez_Resume.pdf" target="_blank" rel="noopener">Download resume</a>
        </div>
      </div>

      <div class="hero-visual" aria-label="Portrait of Camilo Sanchez">
        <div class="portrait-frame">
          <span class="corner corner-a" aria-hidden="true"></span>
          <span class="corner corner-b" aria-hidden="true"></span>
          <img src="img/avatar.png" alt="Camilo Sanchez" />
          <div class="portrait-scanlines" aria-hidden="true"></div>
          <div class="portrait-caption"><span class="pulse"></span> Open to opportunities</div>
        </div>
        <div class="player-meta" aria-hidden="true"><span>LVL 05</span><span>CLASS // HYBRID</span></div>
      </div>
    </section>

    <section class="proof-strip" aria-label="Career highlights">
      <div><strong>05</strong><span>Fortnite islands shipped</span></div>
      <div><strong>03</strong><span>disciplines combined</span></div>
      <div><strong>01+</strong><span>year professional studio experience</span></div>
    </section>

    <section class="focus-section" aria-labelledby="focus-title">
      <div class="section-heading">
        <div><p class="eyebrow">Core loadout</p><h2 id="focus-title" class="section-title">Three disciplines.<br/>One complete developer.</h2></div>
        <p>I work across code, art, and design—the places where ambitious game ideas usually get complicated.</p>
      </div>
      <div class="focus-grid">
        <article>
          <span class="card-index">01</span>
          <h3>Gameplay engineering</h3>
          <p>Modular, event-driven Verse systems for multiplayer state, persistence, progression, economies, missions, and UI.</p>
          <div class="tag-row"><span>Verse</span><span>UEFN</span><span>Architecture</span></div>
        </article>
        <article>
          <span class="card-index">02</span>
          <h3>Technical art</h3>
          <p>Real-time VFX, materials, shaders, tooling, and performance work that supports gameplay instead of competing with it.</p>
          <div class="tag-row"><span>Niagara</span><span>HLSL</span><span>Materials</span></div>
        </article>
        <article>
          <span class="card-index">03</span>
          <h3>End-to-end development</h3>
          <p>From prototype to publishing: gameplay, level design, testing, UI, visual polish, optimization, and promotional content.</p>
          <div class="tag-row"><span>Game design</span><span>QA</span><span>Shipping</span></div>
        </article>
      </div>
    </section>

    <section class="featured-callout" aria-labelledby="featured-title">
      <div class="featured-art" aria-hidden="true"><span>FC</span><small>// 01</small></div>
      <div>
        <p class="eyebrow">Featured build · Fortune City</p>
        <h2 id="featured-title">A persistent 16-player city powered by interconnected Verse systems.</h2>
        <p>Economy, jobs, housing, progression, activities, shops, UI, and per-player data—designed as a modular ecosystem rather than a collection of isolated scripts.</p>
        <router-link to="/game-projects" class="text-link">See the case study <span aria-hidden="true">→</span></router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero { min-height: 620px; display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(280px, .7fr); align-items: center; gap: 72px; }
.hero-title { max-width: 800px; margin: 0; font-size: clamp(3rem, 6.7vw, 6rem); font-weight: 600; letter-spacing: -.07em; line-height: .95; }
.role-line { margin: 28px 0 0; color: var(--amber); font: 600 clamp(.82rem, 1.5vw, 1rem)/1.5 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .035em; }
.role-line span { padding: 0 7px; color: var(--cyan); }
.hero-summary { max-width: 680px; margin: 22px 0 0; color: #bec5d4; font-size: 1.13rem; line-height: 1.7; }
.portrait-frame { position: relative; max-width: 340px; margin: 0 auto; padding: 16px; border: 1px solid var(--line); background: var(--panel); box-shadow: 14px 14px 0 rgba(70, 224, 213, .07); }
.portrait-frame::before { content: 'CAM_FEED_01'; display: block; margin: 0 0 10px; color: var(--dim); font: 600 .65rem/1 'IBM Plex Mono', monospace; letter-spacing: .12em; }
.portrait-frame img { display: block; width: 100%; aspect-ratio: 1; object-fit: cover; filter: grayscale(1) contrast(1.06); }
.portrait-scanlines { position: absolute; inset: 39px 16px 51px; pointer-events: none; background: repeating-linear-gradient(to bottom, transparent 0, transparent 4px, rgba(7, 9, 13, .16) 5px); }
.portrait-caption { display: flex; align-items: center; gap: 9px; padding-top: 13px; color: var(--cyan); font: 600 .7rem/1 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .06em; }
.pulse { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 12px var(--cyan); }
.corner { position: absolute; width: 24px; height: 24px; border-color: var(--amber); z-index: 2; }
.corner-a { top: -6px; left: -6px; border-top: 2px solid; border-left: 2px solid; }
.corner-b { right: -6px; bottom: -6px; border-right: 2px solid; border-bottom: 2px solid; }
.player-meta { max-width: 340px; margin: 18px auto 0; display: flex; justify-content: space-between; color: var(--dim); font: 600 .64rem/1 'IBM Plex Mono', monospace; letter-spacing: .08em; }
.proof-strip { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 32px; border: 1px solid var(--line); background: rgba(13, 17, 25, .72); }
.proof-strip div { min-height: 116px; display: flex; align-items: center; gap: 16px; padding: 24px; border-right: 1px solid var(--line); }
.proof-strip div:last-child { border-right: 0; }
.proof-strip strong { color: var(--cyan); font: 600 2rem/1 'IBM Plex Mono', monospace; }
.proof-strip span { color: var(--muted); font-size: .82rem; line-height: 1.4; text-transform: uppercase; letter-spacing: .05em; }
.focus-section { padding: 140px 0 110px; }
.section-heading { display: grid; grid-template-columns: 1.4fr .8fr; align-items: end; gap: 60px; margin-bottom: 46px; }
.section-heading > p { max-width: 460px; margin: 0; color: var(--muted); font-size: 1.03rem; }
.focus-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.focus-grid article { min-height: 330px; display: flex; flex-direction: column; padding: 28px; border: 1px solid var(--line); background: linear-gradient(145deg, rgba(18,24,36,.94), rgba(10,13,20,.94)); transition: border-color .2s ease, transform .2s ease; }
.focus-grid article:hover { transform: translateY(-4px); border-color: var(--cyan); }
.card-index { color: var(--cyan); font: 600 .72rem/1 'IBM Plex Mono', monospace; }
.focus-grid h3 { margin: auto 0 12px; font-size: 1.45rem; letter-spacing: -.03em; }
.focus-grid p { margin: 0; color: var(--muted); font-size: .95rem; }
.tag-row { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 24px; }
.tag-row span { padding: 5px 8px; border: 1px solid var(--line); color: #b6bdcc; font: 500 .66rem/1 'IBM Plex Mono', monospace; text-transform: uppercase; }
.featured-callout { display: grid; grid-template-columns: minmax(230px, .65fr) 1.35fr; gap: 54px; align-items: center; padding: 50px; border: 1px solid var(--line); background: var(--panel); }
.featured-art { min-height: 280px; display: flex; align-items: flex-end; justify-content: space-between; padding: 24px; overflow: hidden; border: 1px solid #265953; background: radial-gradient(circle at 80% 20%, rgba(255,189,82,.35), transparent 22%), linear-gradient(135deg, #173b38, #0c171b 58%, #2a1b15); color: var(--cyan); }
.featured-art span { font: 600 clamp(5rem, 12vw, 9rem)/.75 'IBM Plex Mono', monospace; letter-spacing: -.12em; }
.featured-art small { color: var(--amber); font: 600 .72rem/1 'IBM Plex Mono', monospace; }
.featured-callout h2 { max-width: 650px; margin: 0; font-size: clamp(2rem, 4vw, 3.2rem); letter-spacing: -.045em; line-height: 1.05; }
.featured-callout p:not(.eyebrow) { max-width: 660px; margin: 22px 0; color: var(--muted); }
.text-link { display: inline-block; padding-bottom: 4px; border-bottom: 1px solid var(--cyan); color: var(--cyan); font: 600 .76rem/1.5 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .06em; }
.text-link span { padding-left: 8px; }
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; gap: 50px; padding-top: 34px; }
  .hero-visual { max-width: 380px; }
  .focus-grid { grid-template-columns: 1fr; }
  .focus-grid article { min-height: 250px; }
}
@media (max-width: 700px) {
  .hero { min-height: auto; }
  .hero-title { font-size: clamp(2.75rem, 14vw, 4.3rem); }
  .proof-strip { grid-template-columns: 1fr; }
  .proof-strip div { min-height: 90px; border-right: 0; border-bottom: 1px solid var(--line); }
  .proof-strip div:last-child { border-bottom: 0; }
  .focus-section { padding: 100px 0 80px; }
  .section-heading, .featured-callout { grid-template-columns: 1fr; gap: 30px; }
  .featured-callout { padding: 20px; }
  .featured-art { min-height: 220px; }
}
</style>
