<template>
  <div class="home">
    <div class="container">
      <div class="head-section"></div>
      <div class="content">
        <img src="../assets/hero.jpg" alt="" />
        <div class="description">
          <h1>Bam Kadayat</h1>
          <p>
            When I started my career as a developer / designer I always
            struggled to find the latest trends, news, and best practices in the
            web development world or at least some developers who can help with
            that.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.home {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  .container {
    overflow: hidden;
    .content {
      width: 100vw;
      height: 100vh;
      position: relative;
      img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        filter: brightness(0.4);
      }
      .description {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        background: rgba(26, 59, 75, 0.2);
        padding: 8px;
        border-radius: 5px;
        border: 1px solid rgba($color: #fff, $alpha: 0.2);

        h1 {
          font-weight: 700;
          font-size: 1.8rem;
          font-family: "poppins";
        }
        p {
          line-height: 1.5;
          font-size: 18px;
          font-family: "poppins";
          font-weight: 300;
        }
      }
    }
  }
}
</style>
