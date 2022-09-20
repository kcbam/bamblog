<template>
  <div id="app">
    <nav>
      <div class="logo">
        <span><img src="./assets/bam.png" alt="" style="width: 40px" /></span>
        <span class="logo-text"><router-link to="/">BamBlog</router-link></span>
      </div>
      <ul>
        <li>
          <router-link to=""
            ><img
              class="icon-email"
              src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg"
              alt=""
            />
            <a href="mailto:bamkadayat@gmail.com" class="email"
              >Get in touch</a
            ></router-link
          >
        </li>
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
          display: flex;
          align-items: center;
          .icon-email {
            color: #00457e;
            width: 18px;
          }
          .email {
            display: inline-block;
            margin-left: 8px;
          }
          &:hover {
            opacity: 0.6;
            transition: 0.3s;
          }
        }
      }
    }
  }
}
</style>
