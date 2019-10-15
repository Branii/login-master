# login-master
A simple login form for your web platform. Very easy to use. try it out

/*
* Created by Nii Armar Adjaidoo
* 13 October, 2019
*
*
*/




#--- Example HTML ---#

<!DOCTYPE html>
<!--suppress ALL -->
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="login master js">
    <meta name="author" content="#">

    <title>Example login page</title>

    <link href="css/login.css" rel="stylesheet">
</head>

<body class="body">
<div id="content">


<div class="login-card">



<input type="text" class="login-field username" placeholder="Username">
<input type="password" class="login-field password" placeholder="Password">

<button id="submit" class="login-btn">Login</button>
<img class='cls' src='img/close.png' width='25' height='25' style='position:relative;left:27%;top:30px;cursor:pointer;display:none'>
<div class="login-info"></div>     
</div>
<div class="login-footer">
    <kwame class="login-link"></kwame>
</div>  
</div>

<script>
var logic_page = "login-validation-page.file"; // type your logic page url here eg. txt ,  php , xml  etc
var link       = "forget-password-page.file"; // your password reset page eg. txt ,  php , xml  etc
</script>
<script src="js/jquery.js"></script>
 <script src="js/login.js"></script>    

</body>
</html>

