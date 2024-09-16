<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Camilo Sanchez</strong>, a passionate digital entertainment engineer with a strong focus on game development.<br/>
        My expertise spans technical artistry and solo game development. I have professional experience working as a technical artist at<br/>
        ON3D Studios and have successfully created three Fortnite maps using UEFN.
      </div>

      <div style="margin-top: 20px;">I have currently worked on this <router-link to="/game-projects">game projects</router-link>, 
        and this is some of my <router-link to="/other-projects">artistry work</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>always looking for new challenges </strong> that will help me grow as a game developer. 
        If you're interested in collaborating, feel free to reach out to me at <a href="mailto:cmilo1357@gmail.com">cmilo1357@gmail.com</a> 
        or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>