<template>
  <div class="dashboard">
    <div class="dashboard-wrap">
      <div class="left-nav">
        <ul>
          <li>
            <img class="icon-dashboard" src="../assets/dashboard.svg" alt="" />
            Dashboard
          </li>
          <li>Projects</li>
        </ul>
      </div>
      <div class="content">
        <h1>Dashboard</h1>
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
    .left-nav {
      background: rgba(0, 69, 126, 0.8);
      color: #fff;
      height: 100vh;
      ul {
        list-style: none;
        margin-top: 20px;
        li {
          padding: 7px;
          .icon-dashboard {
            color: #fff;
            width: 15px;
          }
        }
      }
    }
    .content {
      h1 {
        font-weight: 500;
        font-size: 1.4rem;
        margin-top: 1rem;
        color: rgba(0, 69, 126, 1);
      }
    }
  }
}
</style>
