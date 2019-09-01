<template>
  <div class="splash">
    <div class="wrapper">
      <body>
        <div id="container">
          <div class="title">
            <img src="../assets/img/logo2.png" alt="WWA Logo" id="wwaLogo" />
            <h1 id="title">World War of Ants</h1>

            <div id="buttons">
              <b-button variant="light" v-on:click="navigateLogs()"
                >Developer Logs</b-button
              >
              <b-button variant="light" v-on:click="navigateAbout()"
                >About Us</b-button
              >
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="description">
              <p>
                World War of Ants is an open source ASCII Art TBS game with an
                emphasis on resource management that is currently in
                development. WWA is being developed by a passionate group of
                aspiring programmers, graphic designers, and the like who have
                come together to build a unique and engaging game. If you would
                like to contribute to the project and join a community of
                friendly and ardent developers, you can find links to our
                Discord and GitHub page below.
              </p>
            </div>
            <br />
            <div class="links">
              <a href="https://github.com/warofants/wwa" target="_blank"
                ><img src="../assets/img/github-512.png" alt="github-logo"
                id="githubLogo"
                v-on:click=url(`https://github.com/anthonyLuttrell/wwa`)></a
              >

              <p>
                <a href="https://github.com/warofants/wwa" id="githubLink"
                  >Github</a
                >
              </p>
              <p>
                <a href="https://discordapp.com/invite/NACP6WZ" target="_blank">
                  <img
                    src="../assets/img/discordLogo.png"
                    alt="Discord-logo"
                    id="discordLogo"
                /></a>
              </p>
              <p>
                <a id="discordLink" href="https://discordapp.com/invite/NACP6WZ">Discord</a>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </body>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Homepage",
  computed: {
    error() {
      return this.$route.query.error;
    }
  },

  methods: {
    navigateLogs() {
      router.push({ name: "DevLogs" });
    },
    navigateAbout() {
      router.push({ name: "About" });
    }
  }
};
</script>
