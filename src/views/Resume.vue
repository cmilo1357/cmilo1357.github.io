<template>
  <div class="page-shell resume-page">
    <header class="resume-header">
      <div>
        <p class="eyebrow">Character sheet · Updated 2026</p>
        <h1 class="page-title">Built for gameplay.<br/>Tuned for performance.</h1>
        <p class="lede">A hybrid developer who can own systems, communicate with artists, and carry an experience from prototype through launch.</p>
      </div>
      <a class="button download" href="d/Camilo_Sanchez_Resume.pdf" target="_blank" rel="noopener">Download PDF</a>
    </header>

    <section class="profile-panel" aria-labelledby="profile-heading">
      <p class="panel-code" aria-hidden="true">PROFILE.LOG</p>
      <h2 id="profile-heading">UEFN / Verse Gameplay Developer <span>+</span> Technical Artist</h2>
      <p>Hands-on experience independently developing and shipping five Fortnite islands from concept to release. I build modular, event-driven Verse systems spanning progression, economy, jobs, housing, quests, UI, and persistence, then support them with technical art, debugging, and optimization.</p>
    </section>

    <section class="resume-grid">
      <div class="experience-column">
        <div class="section-kicker"><span>01</span><h2>Experience</h2></div>
        <article class="timeline-item">
          <div class="timeline-mark"></div>
          <div class="timeline-meta"><span>Jan 2024 — Present</span><span>Independent</span></div>
          <h3>UEFN / Verse Game Developer</h3>
          <ul>
            <li>Released five Fortnite islands while owning gameplay programming, level design, QA, UI, VFX, 3D art, publishing, and promotional content.</li>
            <li>Designed per-player runtimes and event-driven managers for economy, jobs, modifiers, input, UI, audio, and persistent profile data.</li>
            <li>Built reusable systems for contracts, housing upgrades, quests, shops, banking, inventories, and player-facing feedback.</li>
            <li>Profiled and optimized gameplay, materials, Niagara VFX, streaming, and data layers within UEFN constraints.</li>
          </ul>
        </article>
        <article class="timeline-item">
          <div class="timeline-mark"></div>
          <div class="timeline-meta"><span>Jun 2023 — Jun 2024</span><span>ON3D Studios</span></div>
          <h3>Technical Artist</h3>
          <p class="subrole">Junior Technical Artist · Dec 2023—Jun 2024<br/>Technical Artist Intern · Jun—Nov 2023</p>
          <ul>
            <li>Owned the ideation and production of real-time VFX designed to communicate gameplay clearly.</li>
            <li>Collaborated with developers to integrate effects, iterate on mechanics, and solve technical issues.</li>
            <li>Created tools and workflows for the art team and validated effects against performance requirements.</li>
          </ul>
        </article>
      </div>

      <aside class="skills-column">
        <div class="section-kicker"><span>02</span><h2>Core expertise</h2></div>
        <div class="skill-group"><h3>Verse & UEFN</h3><p>Gameplay architecture, event-driven systems, per-player state, persistence, async flows, reusable devices, debugging, memory, and optimization.</p></div>
        <div class="skill-group"><h3>Gameplay & UI</h3><p>Progression, economy, jobs, quests, multiplayer systems, UMG, Verse UI, banking, shops, inventories, and feedback.</p></div>
        <div class="skill-group"><h3>Technical art & tools</h3><p>Unreal Engine 4/5, Niagara, materials, shaders, HLSL, Blender, Maya, Substance Designer, Photoshop, After Effects, C#, and Lua.</p></div>
        <div class="education-card">
          <p class="panel-code">EDUCATION</p>
          <h3>B.Eng. in Digital Entertainment Design</h3>
          <p>Universidad Pontificia Bolivariana<br/>2019—2024</p>
          <h3>VFX Apprentice</h3>
          <p>Stylized 2D/3D Visual FX<br/>2023—2024</p>
        </div>
      </aside>
    </section>
  </div>
</template>

<style scoped>
.resume-header { display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 40px; padding: 46px 0 84px; }
.resume-header .button { margin-bottom: 6px; }
.profile-panel { position: relative; margin-bottom: 90px; padding: 42px 46px; overflow: hidden; border: 1px solid var(--line); border-left: 3px solid var(--cyan); background: var(--panel); }
.profile-panel::after { content: '01'; position: absolute; right: 22px; bottom: -32px; color: rgba(70,224,213,.045); font: 600 9rem/1 'IBM Plex Mono', monospace; }
.panel-code { margin: 0 0 14px; color: var(--cyan); font: 600 .68rem/1 'IBM Plex Mono', monospace; letter-spacing: .12em; }
.profile-panel h2 { max-width: 820px; margin: 0; font-size: clamp(1.8rem, 4vw, 3rem); line-height: 1.1; letter-spacing: -.04em; }
.profile-panel h2 span { color: var(--amber); }
.profile-panel > p:last-child { max-width: 900px; margin: 22px 0 0; color: var(--muted); font-size: 1.02rem; }
.resume-grid { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(300px, .65fr); gap: 86px; }
.section-kicker { display: flex; align-items: center; gap: 14px; margin-bottom: 40px; }
.section-kicker span { color: var(--cyan); font: 600 .68rem/1 'IBM Plex Mono', monospace; }
.section-kicker h2 { margin: 0; font-size: 1.7rem; letter-spacing: -.035em; }
.timeline-item { position: relative; margin-left: 8px; padding: 0 0 62px 36px; border-left: 1px solid var(--line); }
.timeline-mark { position: absolute; width: 11px; height: 11px; top: 5px; left: -6px; background: var(--night); border: 2px solid var(--cyan); box-shadow: 0 0 10px rgba(70,224,213,.35); }
.timeline-meta { display: flex; justify-content: space-between; gap: 20px; color: var(--muted); font: 600 .68rem/1.4 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .05em; }
.timeline-meta span:last-child { color: var(--amber); text-align: right; }
.timeline-item h3 { margin: 12px 0 13px; font-size: 1.55rem; letter-spacing: -.03em; }
.timeline-item ul { margin: 20px 0 0; padding: 0; list-style: none; }
.timeline-item li { position: relative; margin-bottom: 10px; padding-left: 18px; color: var(--muted); font-size: .95rem; }
.timeline-item li::before { content: '›'; position: absolute; left: 0; color: var(--cyan); }
.subrole { color: var(--muted); font: 500 .72rem/1.7 'IBM Plex Mono', monospace; }
.skill-group { margin-bottom: 35px; padding-bottom: 30px; border-bottom: 1px solid var(--line); }
.skill-group h3 { margin: 0 0 10px; color: var(--cyan); font: 600 .75rem/1.4 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .07em; }
.skill-group p { margin: 0; color: var(--muted); font-size: .9rem; }
.education-card { margin-top: 52px; padding: 28px; border: 1px solid var(--line); background: var(--panel); }
.education-card h3 { margin: 22px 0 5px; font-size: 1rem; }
.education-card p { margin: 0; color: var(--muted); font-size: .82rem; }
@media (max-width: 850px) {
  .resume-header, .resume-grid { grid-template-columns: 1fr; }
  .resume-header .button { width: fit-content; }
  .resume-grid { gap: 40px; }
}
@media (max-width: 620px) {
  .resume-header { padding: 24px 0 64px; }
  .resume-header .button { width: 100%; }
  .profile-panel { padding: 30px 22px; margin-bottom: 68px; }
  .timeline-meta { display: grid; gap: 6px; }
  .timeline-meta span:last-child { text-align: left; }
}
</style>
