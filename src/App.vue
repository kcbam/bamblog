<template>
  <div id="app">
    <nav>
      <div class="logo">
        <span><img src="./assets/bam.png" alt="" style="width: 40px" /></span>
        <span class="logo-text"><router-link to="/">BamBlog</router-link></span>
      </div>
      <ul>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>
<style lang="scss">
#app {
  font-family: "poppins", Arial, sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  nav {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: middle;
    padding: 0 10px;
    .logo {
      display: flex;
      align-items: center;
      .logo-text {
        margin-left: 5px;
        a {
          text-decoration: none;
          color: #00457e;
          font-weight: 500;
        }
      }
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      align-items: middle;
      li {
        padding: 0 1rem;
        a {
          text-decoration: none;
          font-size: 1rem;
          color: #00457e;
          transition: 0.3s;
          position: relative;
          font-weight: 500;
          &:hover {
            opacity: 0.6;
            transition: 0.3s;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              height: 1px;
              width: 100%; /* or 100px */
              border-bottom: 2px solid #00457e;
              transition: 0.3s;
            }
          }
        }
      }
    }
  }
}
</style>
