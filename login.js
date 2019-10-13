$(function(){
    // $(".login-info").hide();
    //$("#info").hide();
    $(".login-link").html("<a href='"+ link +"' style='text-decoration: none;color:white;'>Forgot password?</a>")

    var timer;
    var err = "<div id='err' style='width:100%;height:60px;background-color:red;border-left:solid 10px rgb(190, 6, 6);z-index:0'><b style='position:relative;top:20px;left:5%;color:white;font:16px arial;'>Wrong credentials entered at login</b></div>";
    var info = "<div id='info' style='width:100%;height:61px;background-color:orange;border-left:solid 10px #1c1e1f;'><b style='position:relative;top:20px;left:5%;font:16px arial;'>Please all fields are mandatory</b></div>";
    var img = "<img class='login-loader' src='img/progress.gif'>";
    $("#submit").click(function(){
        var username = $(".username").val();
        var password = $(".password").val();
        if(username == "" || password == ""){
            $(".login-info").show();
            $(".login-info").html(info);
            $(".login-card").css("border-top","solid 5px orange");
            status = "empty";
           setTimeout(function(){
            $(".login-info").html("");
            $(".login-info").hide();
            $(".login-card").css("border-top","solid 5px blue");
           },3000);
            return;
        }else{

         $(".login-info").show();
        $(".login-info").html(img);

        setTimeout(function(){

            $.post(logic_page,{
            username:username,
            password:password
            },function(result){

            $("#ir").hide();

            if(result == "login successful"){
               // window.location.href = "home.php";
                $(".login-card").css("border-top-color","rgb(182, 214, 174)").css("box-shadow","1px 2px 50px rgb(182, 214, 174)")
               setTimeout(function(){
                window.location.href = "home.php";
               },2000);

            }else{
                status = "wrong";
                $(".login-info").html(err);
                $(".login-info").show();
                $(".login-card").css("border-top","solid 5px red");
                timer =  setTimeout(function(){
                    $(".login-info").html("");
                    $(".login-loader").hide();
                    $(".login-card").css("border-top","solid 5px blue");
                    $(".login-info").hide();
                },3000);
            }
                
        })

        },2000);

        }

    })


    $(".login-loader").click(function(){
    $(".login-info").hide();
    $(".login-loader").hide();
   })
    

})
