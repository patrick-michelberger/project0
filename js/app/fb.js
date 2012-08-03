// Load the SDK Asynchronously
      (function(d){
         var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement('script'); js.id = id; js.async = true;
         js.src = "//connect.facebook.net/en_US/all.js";
         ref.parentNode.insertBefore(js, ref);
       }(document));

      // Init the SDK upon load
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '414926935220073', // App ID
          channelUrl : '//'+window.location.hostname+'/fb/channel', // Path to your Channel File
          status     : true, // check login status
          cookie     : true, // enable cookies to allow the server to access the session
          xfbml      : true  // parse XFBML
        });
        
        // listen for and handle auth.statusChange events
        FB.Event.subscribe('auth.statusChange', function(response) {
        	if (response.authResponse) {
        		// user has auth'd your app and is logged into Facebook
	            FB.api('/me', function(me){
	                document.getElementById('user_name').innerHTML = me.name;
	                var url = "http://graph.facebook.com/"+me.id+"/picture";
	                document.getElementById('user_pic').setAttribute('src',url);
	             
	              document.getElementById('auth-login').style.display = 'none';
            	  document.getElementById('auth-logout').style.display = 'block';
	        	});
	        } else {
	       		// user has not auth'd your app, or is not logged into Facebook
            	document.getElementById('auth-logout').style.display = 'none';
            	document.getElementById('auth-login').style.display = 'block';
	        }
        });
        
        // respond to clicks on the login and logout links
        document.getElementById('auth-login').addEventListener('click', function(){
          FB.login();
        });
        document.getElementById('auth-logout').addEventListener('click', function(){
          FB.logout();
          
          document.getElementById('auth-logout').style.display = 'none';
          document.getElementById('auth-login').style.display = 'block';
          document.getElementById('user_name').innerHTML = "";
          document.getElementById('user_pic').removeAttribute('src');
        }); 
      } 