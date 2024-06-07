var posts=["2024/06/06/欢迎来到本站/","2024/06/06/加强网络安全保障，共建安全数字世界/","2024/06/06/艾梦云兮举行24年第一次例会/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };