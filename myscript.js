var name;
var email;
var image;
var userID;

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  name = profile.getName();
  email = profile.getEmail();
  image = profile.getImageUrl();
  userID = profile.getId();
  window.open("welcome.html");
}
