//导入要注册的全局组件
const modules = import.meta.glob('./**/index.vue');
import { defineAsyncComponent } from "vue";

export default function install(app) {
  Object.keys(modules).forEach(path => {
    let pathArr = path.split('/');
    let name = pathArr[pathArr.length - 2];
    app.component(name ,defineAsyncComponent(modules[path]));
  })
}