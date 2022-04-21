<template>
  <div class="nav-main">
    <div class="nav-list">
      <div class="nav-item">
        
        <router-link to="/date" class="nav-block" active-class="selected">
          <span>日期时间</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {
    Options,
    Vue
  } from "vue-class-component";

  @Options({})
  export default class Nav extends Vue {}
</script>

<style lang="scss">
  a {
    text-decoration: none;
  }

  .nav-main {
    pointer-events: all;

    .nav-list {
      position: relative;

      .nav-block {
        display: block;
        width: 130px;
        height: 58px;
        margin-top: 2px;
        line-height: 62px;
        text-align: center;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(8px);
        color: #fff;
        font-weight: 700;

        span {
          backdrop-filter: unset;
        }

        &:hover {
          cursor: pointer;
          background: rgba(38, 38, 38, 0.85);
          color: #fff;
        }

        &:focus {
          outline: none;
          border: 0;
        }
      }
    }

    .selected {
      color: #ffffff !important;
      background-color: rgba(0, 165, 255, 0.43) !important;

      &:hover {
        background-color: rgba(0, 165, 255, 0.43) !important;
      }
    }
  }
</style>