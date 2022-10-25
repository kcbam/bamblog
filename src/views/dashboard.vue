<template>
  <div class="dashboard">
    <div class="dashboard-wrap">
      <div class="left-nav">
        <ul>
          <li>
            <div class="wrap-icon">
              <img class="icon-dashboard" src="../assets/grid.svg" alt="" />
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div class="wrap-icon">
              <img class="icon-dashboard" src="../assets/list.svg" alt="" />
              <span>Projects</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="content">
        <h1>Welcome to dashboard</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.dashboard {
  .dashboard-wrap {
    display: grid;
    grid-template-columns: repeat(2, 20% 80%);
    gap: 1rem;
    width: 100vw;
    overflow: hidden;
    .left-nav {
      padding-top: 1rem;
      background: rgba(0, 69, 126, 0.8);
      color: #fff;
      height: 100vh;
      min-width: 130px;
      ul {
        list-style: none;
        li {
          padding: 7px;
          .wrap-icon {
            display: flex;
            gap: 8px;
            .icon-dashboard {
              color: #fff;
              width: 15px;
              display: inline-block;
            }
          }
        }
      }
    }
    .content {
      h1 {
        padding-top: 1rem;
        font-weight: 500;
        font-size: 1.4rem;
        color: rgba(0, 69, 126, 1);
        margin-left: 1.1rem;
      }
    }
  }
}
@media (max-width: 600px) {
  .dashboard {
    .dashboard-wrap {
      .content {
        h1 {
          padding-top: 1rem;
          font-weight: 500;
          font-size: 1.2rem;
          color: rgba(0, 69, 126, 1);
          margin-left: 3rem;
        }
      }
    }
  }
}
</style>
