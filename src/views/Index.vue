<template>
  <a-layout class="layout" style="min-height: 100%">
    <a-layout-header style="background: #fff;">
      <a-row>
        <a-col :span="2">
          <img alt="logo" src="../assets/150logo.png">
        </a-col>
        <a-col :span="2"></a-col>
        <a-col :span="12">
          <a-menu
          theme="white"
          mode="horizontal"
          v-model:selectedKeys="selectedKeys"
          :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="1">主页</a-menu-item>
            <a-menu-item key="2">社团</a-menu-item>
            <a-menu-item key="3">博客</a-menu-item>
          </a-menu>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px; min-height: 100%;">
      <a-breadcrumb style="margin: 16px 20px;text-align: left">
        <a-breadcrumb-item>Index</a-breadcrumb-item>
        <a-breadcrumb-item>Team T1des</a-breadcrumb-item>
        <a-breadcrumb-item>App Preview</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '760px' }">
        <img alt="logo" src="../assets/T1deS-LOGO-c.png">
        <h1>Welcome to Team T1deS</h1>
        <p>
          网站开发维护中，暂时无法访问。
        </p>
        <p>
          The Application is being maintenanced
        </p>
        <h3>You will soon meet us in About October 2021</h3>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Team T1deS ©2018-2021 Powered by Ant Design Vue
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['2']),
    };
  },
});
</script>

<style>
.header {
  background: #fff;
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='white'] .site-layout-content {
  background: #ffffff;
}
</style>