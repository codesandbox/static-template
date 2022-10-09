let pid = 0

setTimeout(function() {
  if (!(userID == null)) {
    fetch(`https://photop.exotek.co/user?id=${userID}`).then((response) => response.text()).then((text) => {
     let userdata = JSON.parse(text)
     let username = userdata.User
      setInterval(function() {
        fetch("https://photop.exotek.co/posts").then((response) => response.text()).then((text) => {
          posts = JSON.parse(text).posts;
          if (posts[0].Text.includes(`@${userID}(${username}`)) {
            if (!(pid == posts[0]._id)) {
              pid = posts[0]._id;
              showPopUp("Notification", "Someone mentioned you!", [["Thanks!","#17ff9e",refreshPage()]])
            }
          }
        });
      }, 5000)})
  }
}, 5000)
