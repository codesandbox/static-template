<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DougzybuyDesign</title>
    <link rel="stylesheet" href="/src/css/contact.css">

    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  </head>

  <body>
    
      <div class="wrapper">
        <!-- Navigation -->
        <nav class="main-nav">
          <ul>
            <li>
              <a href="/index.html">Home</a>
            </li>
            <li>
              <a href="selector.css">About</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="login.html">Login/Register</a>
            </li>
          </ul>
        </nav>

        <div id="title" class="header">
          <h1>DougzybuyDesign</h1>
          <img src="/src/images/images/showcase.jpg" style="">
          <h2>Bespoke Web Development</h2>
        </div>  
      <div class="container">
        
        <div class="contact-info">
          <div>
           <marquee direction="right"> <h1 style="color:blue">Contact Us</h1></marquee>

             
              <marquee direction="up" height="200"><h1 style=" color:purple"> for a custom quote</h1></marquee>
           </div>
            <center>
              <h4 class= "sent-notification"></h4>
            <form id="myForm">
            <h2>Send an Email</h2>
                                    <label for="fname">First Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="Your name..">
                                
                                    <label for="lname">Last Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name..">
                                

                                    <label for="lname">E-Mail</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your emmail please..">
                                

                                    <label for="service">Select our help</label>
                                    <select id="service" name="service">
                                      <option value="Web Build">Build & Deploy</option>
                                      <option value="maintenance">Upgrades or Maintenance</option>
                                      <option value="support">Advice</option>
                                    </select>
                                
                                    <label for="subject">Your requirements?</label>
                                    <textarea id="body" rows="5" placeholder="Write something.."></textarea>
                                <br><br>
                                <button type="button" onclick="sendEmail()" value="Send An Email">Submit</button>
                                  </form>
                                  </center>
                                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                                <script type="text/javavscript">
                                function sendEmail(){
                                var name = $("#name");
                                   var email = $("#email");
                                      var subject = $("#subject");
                                         var body = $("#body");
                                if (isNotEmpty(name) && isNotEmpty(email)&& isNotEmpty(subject)&& is NotEmpty(body)){
                                $.ajax({
                                url: 'senEmail.php',
                                method: 'POST' ,
                                datatype: 'json',
                                data:{
                                name: name.val(),
                                email: email.val(),
                                subject:subject.val()'
                                body: body.val()
                                }, success:function(response){
                                $('#myForm')[0].reset();
                                $('.sent-notification').text("Message sent successfully...");
                                }
                                    });
                                   }
                                }
                                function isNotEmpty(callar){
                                if(caller.val()== ""){
                                return false;
                                }
                                else
                                {
                                caller.css('border', '');
                                return true;
                                </script>

                              
                                          </div>
                                        </div>
                                      </div>
                                       <!-- Site footer -->
    
   
        <column>
        <div class="row">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">DougzybuyDesign</a>.
            </p>
          </div>
        </column>
        <column>
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </column>
</footer>
  </body>

</html>
