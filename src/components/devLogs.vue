<template>
<div class="devLogs">
  <div class="wrapper">
    <body>
      <div class="title">
        <img src="../assets/img/logo2.png" alt="WWA Logo" id="wwaLogo" />
        <h1>Developer Logs</h1>

        <div id="buttons">
          <b-button variant="light" v-on:click="navigateHome()">Homepage</b-button>
          <b-button variant="light" v-on:click="navigateAbout()">About Us</b-button>
        </div>
      </div>
      <div id="links">
      <div id="linkBox">
        <h3 id="linkTitle">Jump To:</h3>
        
        <div id="linkBoxLinks">
          <router-link to="devLogs#logTitle">Introduction</router-link>
          <br />
          <router-link to="devLogs#gettingStarted">Getting started</router-link>
          <br />
          <router-link to="devLogs#Coding">Coding</router-link>
          <br />
          <router-link to="devLogs#styleGuide">Style Guide</router-link>
          <br />
          <router-link to="devLogs#art">Art</router-link>
          <br />
          <router-link to="devLogs#gameDesign">Game Design</router-link>
          <br />
          <router-link to="devLogs#management">Management</router-link>
          <br />
          <router-link to="devLogs#roles">Roles</router-link>
          <br />
          <router-link to="devLogs#message">Message of the <br> Day</router-link>
          <br />
        </div>
      </div>
      </div>

      <div id="devLogsWrapper">
        <div id="devLogs">
          <h1>Developer Log, August 13 2019</h1>
          <p></p>
          <h2 id="logTitle">THIS IS THE FIRST LOG</h2>
          <p>
            In order to make this easier, please ping @ZweiEuro if something important has happened in order for me to take note,
            <br />I might not be able to catch everything otherwise.
          </p>

          <br />

          <h3 id="gettingStarted">Getting started</h3>

          <p>A guide is WIP on how to set up a development IDE and access and navigate github/the code. (By @ZweiEuro, any ideas what you want answered in the guide, please send me a pm)</p>

          <br />

          <h3 id="coding">Coding</h3>

          <p>
            No real milestones or stuff so far, we have decided on a style guide that for the sake of this project and clarity, please try to follow. If you have no idea what this means, go to FAQ (Or ask a team leader if it is still unclear.).
            <br />
          </p>
          <h3 id="styleGuide">Style guide</h3>

          <p>https://google.github.io/styleguide/javaguide.html At the moment #game-design is trying to figure out what to do and how to split tasks, we will update when we know more.</p>

          <br />

          <h3 id="art">Art</h3>

          <p>Base game will be kept exclusively text based for now, later we may implement 2d/3d but no guarantees. All in all fanart or designers are welcome, but for now we are focusing game logic and game design.</p>

          <br />

          <h3 id="gameDesign">Game design</h3>
          <p>Nothing definite yet (or at least we couldn't find it) please ping @ZweiEuro if something worth note gets decided.</p>

          <br />

          <h3 id="management">Management</h3>

          <p>
            This has made a lot of progress.
            @freekykat has created a survey, in order to become a team member or team leader you must fill out the form and afterwards maybe ping @freekykat if he hasn't noticed.
            Teams in general will be wildly mixed, and we will try to balance pro/newbie.
            We try to make it so someone will always be able to help you. Not, and let me make this clear, spoon feed you answers. Team leaders will be asked to help you learn, not use their knowledge to bridge stuff.
            So if you are asked to look somewhere, then please have a look at X please do so. If you are genually confused and after reading the help given to you by the TL(team leader) they will try and help you out to get you back on the track of learning. We will also have a few general managers to pick up slack on the server and between areas.
            Roles may overlap.
            By all means do not spam managers, they won't like it and admins will take note.
          </p>

          <br />

          <h3 id="roles">Roles</h3>

          <p>Community manager: server side and general</p>

          <p>Group/team managers: where do new members go? Which team needs help?</p>

          <p>Team leaders: as described above</p>

          <br />

          <h3 id="message">Message of the day</h3>
It's not about speed it's about learning. @Pasix
          <br />
          <br />
          <br />
        </div>
      </div>
    </body>
  </div>
</div>
</template>

<script>
import router from "../router";

export default {
  name: "DevLogs",
  computed: {
    error() {
      return this.$route.query.error;
    }
  },

  methods: {
    navigateHome() {
      router.push({ name: "splash" });
    },
    navigateAbout() {
      router.push({ name: "About" });
    }
  }
};
</script>