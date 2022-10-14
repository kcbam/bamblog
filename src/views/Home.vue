<template>
  <div class="home">
    <div class="container">
      <div class="content">
        <div class="description">
          <h1>Hey, I am Bam Kadayat</h1>
          <p>
            I enjoy designing websites and mobile apps. When I started my career
            as a developer and designer I always struggled to find the latest
            trends, and good practices on the web development world or at least
            some developers who can assists with that<span class="dot">.</span>
          </p>
          <button class="btn">
            <a href="mailto:bamkadayat@gmail.com">Get in touch</a>
          </button>
        </div>
        <div class="hero-img"><img src="./../assets/hero.svg" alt="" /></div>
      </div>
      <div>
        <contact></contact>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "../components/contact.vue";
export default {
  components: {
    Contact,
  },
};
</script>
<style lang="scss">
.home {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 10px;
    .content {
      margin-top: 2rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding-left: 5px;
      .description {
        h1 {
          margin-top: 0px;
          margin-bottom: 20px;
          color: #1c2445;
          font-size: 21px;
          line-height: 1.333em;
          font-weight: 600;
          letter-spacing: 2px;
        }
        p {
          font-size: 16px;
          line-height: 1.9;
          font-weight: 400;
          color: #1c2445;
          margin-bottom: 20px;

          .dot {
            font-weight: 900;
            color: #551a8b;
          }
        }
      }
      .hero-img {
        img {
          width: 100%;
          margin-top: 2rem;
        }
      }
      .btn {
        width: 200px;
        border-radius: 35px;
        padding: 15px;
        background-color: #00457e;
        color: #fff;
        font-size: 14px;
        border: none;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: 0.4s;
        a {
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
        }
        &:hover {
          opacity: 0.8;
          transition: 0.4s;
        }
      }
    }
  }
}
@media (max-width: 800px) {
  .home {
    .container {
      .content {
        display: block;
      }
    }
  }
}
</style>
