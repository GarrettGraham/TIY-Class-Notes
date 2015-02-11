  <script>
             $(document).ready(function() {
               
               
               $.get("https://api.github.com/users/octocat", function( data ) {
                  $('figure').find('img').attr("src", data.avatar_url);
                  $('figcaption').find('strong').append(data.name);
                  $('figcaption').append(data.login);
                  $(".company").append(data.company);
                  $(".locations").append(data.location);
                  $(".email").find('a').append(data.email);
                  $(".blog").find('a').append(data.blog);
                  $(".created-at").append("Joined on " + data.created_at);
                  $('#followers').append(data.followers);  
                  $('#following').append(data.following);  
                  $   
                   
                                                   
            
                }, "json" );
               
           
               
                
            });  
            
           
          
        
        </script>