//导入要注册的全局组件
// const modules = import.meta.glob('./**/index.vue');
// console.log('+++', modules);

// import { defineAsyncComponent } from "vue";

// export default function install(app) {
//   Object.keys(modules).forEach(path => {
//     let pathArr = path.split('/');
//     let name = pathArr[pathArr.length - 2];
//     app.component(name ,defineAsyncComponent(modules[path]));
//   })
// }

//导入要注册的全局组件
const importModules = import.meta.globEager('./**/index.vue')
export default function install(app) {
  Object.keys(importModules).forEach(path => {
    let name = path.substring(path.indexOf('/') + 1, path.lastIndexOf('/'))
    importModules[name] = importModules[path].default
    delete importModules[path]
    app.component(name, importModules[name])
  })
}
