// index.html 主页样式

$(function() {
   $(".btn").on("click", function() {
      $(".home-container").toggleClass("home-page-bgchange");
   });
   console.log("somethon");

   const getJSON = function(url) {
      const promise = new Promise(function(resolve, reject) {
         // 创建请求对象
         const xhr = new XMLHttpRequest();
         // 建立与服务器链接
         xhr.open("GET", url);
         // 发送请求
         xhr.send();
         // 接受服务器响应
         xhr.onreadystatechange = function() {
            if (this.readyState !== 4) {
               return;
            }

            if (this.status === 200) {
               resolve(this.response);
            } else {
               reject(new Error(this.statusText));
            }
         };
      });

      return promise;
   };
   async function getAll() {
      const json = await getJSON("../libs/a.json").then(res => JSON.parse(res));

      return json;
   }

   getAll()
      .then(res => console.log(res))
      .catch(err => console.log(err));
});
