<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Simple Val Example</title>
<style>
.form-error {
	border: 1px solid red;
	background-color: rgba(123,124,98,.3);
}

.message {
	display: none;
}
</style>
</head>
<body>
 
<!-- basic form -->	
<form class="forms" action="" method="post">
	<p class="message"></p>
	<p><input type="text" name="name" placeholder="Your Name 1" class="required" /></p>
	<p><input type="tel" name="telephone" placeholder="Telephone" class="required" /></p>
	<p><input type="text" name="ccnum" placeholder="CC" class="ccnum required" /></p>
	<p><input type="text" name="ccexp" placeholder="CC" class="ccexp required" /></p>
	<p><input type="text" name="money" placeholder="CC" class="money required" /></p>
	<p><input type="email" name="email" placeholder="you@youremail.com" class="required" /></p>
	<p>
	<select name="selected" class="required">
		<option value="">-- Please select quantity of puppies</option>
		<option value="1">1 Puppy Dog</option>
	</select>
	</p>
	<p><input type="checkbox" name="testcheck" value="y" class="required" /></p>
	<p>
		<input type="radio" name="radio-1" value="3" /> 3 Weeks<br />
		<input type="radio" name="radio-1" value="5" /> 5 Weeks
	</p>
	<p><input type="submit" name="sendsubmit" value="Submit 1" /></p>
</form>
 
<!-- scripts -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
<script src="js/simpleval.js" type="text/javascript"></script>
<!-- end scripts -->

</body>
</html>