u=null;
        p=null;
        function login(){
            username=document.getElementById("username").value;
            password=document.getElementById("password").value;
            if(u==username && p==password)
                alert("Welcome ",username);
            else{
                alert("Invalid Username/Password");
            }
        }
        function f2(){
            document.getElementById("p1").style.display="none";
            document.getElementById("p2").style.display="flex";
        }
        function f3(){
            document.getElementById("p1").style.display="flex";
            document.getElementById("p2").style.display="none";
        }
        function f4(){
            
            username=document.getElementById("susername").value;
            password1=document.getElementById("spassword").value;
            password2=document.getElementById("confirm-password").value;
            if(username==null || password1==null ||password2==null)
            {
                alter("Please fill information");
                
            }
            if(password1==password2)
            {
                u=username;
                p=password1;
            }
            
        }
