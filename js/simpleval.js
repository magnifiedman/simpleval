$( document ).ready(function() {




	// INIT AND CONFIG
	

	$('input[type="tel"]').attr('data-value','');
	$('input[type="tel"]').attr('placeholder','XXX-XXX-XXXX');
	$('.ccnum').attr('data-value','');
	$('.ccnum').attr('placeholder','XXXX-XXXX-XXXX');
	$('.ccexp').attr('data-value','');
	$('.ccexp').attr('placeholder','XX/XXXX');
	$('.money').attr('data-value','');
	$('.money').attr('placeholder','$0.00');




	// BASIC FUNCTIONS


	// limit characters in field
	function limitText(field, maxChar){
		var ref = $(field),
		val = ref.val();
		if ( val.length >= maxChar ){
			ref.val(function() {
				console.log(val.substr(0, maxChar))
				return val.substr(0, maxChar);       
			});
		}
	}


	// email validation
	function validateEmail( email ) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		return emailReg.test( email );
	}


	

	// FORMATTING DATA FIELDS
	 
	
	// telephone number [type="tel"]
	$('input[type="tel"]').on( "keyup", function( e ) {

		// only allow numbers and -
		this.value = this.value.replace(/[^0-9\-]/g,'');

		limitText(this,12);
		var val = this.value.replace(/\D/g, '');
		var curLength = val.length;

		var newVal = '';
		for( i=0; i<2; i++ ){
			if (val.length > 3 && i<7) {
				newVal += val.substr(0, 3) + '-';
				val = val.substr(3);
			}
			else {
				newVal += val.substr(0, 3);
				val = val.substr(3);
			}
		}
		
		newVal += val;

		actualVal  = newVal.replace(/\D/g, '');
		$(this).attr('data-value',actualVal);

		this.value = newVal;

	});


	// credit card number [class="ccnum"]
	$('.ccnum').on( "keyup", function( e ) {

		// only allow numbers and -
		this.value = this.value.replace(/[^0-9\-]/g,'');

		limitText(this,19);
		var fVal = this.value;
		var val = this.value.replace(/\D/g, '');
		var curLength = val.length;
		
		var newVal = '';
		for( i=0; i<4; i++){
			if (val.length > 4 && i<20) {
				newVal += val.substr(0, 4) + '-';
				val = val.substr(4);
			}
			else {
				newVal += val.substr(0, 4);
				val = val.substr(4);
			}
		}

		newVal += val;

		actualVal  = newVal.replace(/\D/g, '');
		$(this).attr('data-value',actualVal);
		
		this.value = newVal;

	});


	// credit card expiration date [class="ccexp"]
	$('.ccexp').on( "keyup", function( e ) {

		// only allow numbers and /
		this.value = this.value.replace(/[^0-9\/]/g,'');

		limitText(this,7);

		var fVal = this.value;
		var aVal= this.value.replace(/\D/g, '');
		var curLength = aVal.length;
		
		$(this).attr('data-value',aVal);
		
		var newVal = '';
			
		if ( curLength == 2 ) {
			newVal += aVal.substr(0, 2) + '/';
		}
		else {
			newVal = fVal;
		}

		actualVal  = newVal.replace(/\D/g, '');
		$(this).attr('data-value',actualVal);

		this.value = newVal;

	});


	// money [class="money"]
	$('.money').on( "keyup", function( e ) {

		// only allow numbers and -
		this.value = this.value.replace(/[^0-9\.\$]/g,'');

		var fVal = this.value;
		var aVal= this.value.replace(/\D/g, '');
		var curLength = aVal.length;
		
		var newVal = '';
			
		if ( curLength <= 2 ) {
			newVal += '$ .' + aVal;
		}
		else {
			sliceChars = curLength-2;
			dolAmount = aVal.substr(0,sliceChars);
			decAmount = aVal.substr(-2);
			newVal = '$ ' + dolAmount + '.' + decAmount;
		}

		actualVal  = newVal.replace("$ ", '');
		$(this).attr('data-value',actualVal);

		this.value = newVal;

	});




	// FORM VALIDATION
	$('.forms input[type="submit"]').click( function( e ) {		

		// prevent default
		e.preventDefault();


		// identify the current form
		var theForm = $(this).closest('form');



		// set validation vars
		var formError=false;
		var formFields = theForm.find(':input');
		var required = theForm.find('.required');
		var email = theForm.find('.email');
		var messageBox = theForm.find('.simpleval-message');
		var passwordMatch = true
		

		// clear out prior error classes
		required.removeClass('form-error');


		// transfer data values from formatted fields
		formFields.each(function(index,item){   
			 if( $(item).attr('data-value')>0 ){
			 	newVal = $(item).attr('data-value');
			 	$(item).val(newVal);
			 }
		});


		// validate required fields
		required.each(function(index,item){   

		   // field is empty - (text, textarea, email, select)
		    if( $(item).val().length === 0 ){
		        $(item).addClass('form-error');
		        $(item).attr("placeholder", "This field is required.");
		        formError=true;
		    }

		    // checkbox is not checked
		    if($(item).attr('type')=='checkbox' && $(item).is(':checked')==false ){
		    	formError=true;
		    	$(item).addClass('form-error');
		    }

		    // email field incorrectly formatted
		    if($(item).val().length !=0 && $(item).attr('type')=='email'){
		    	var emailAddress =  $(item).val();
			if( !validateEmail( emailAddress ) ){
				formError=true;
				$(item).val('');
				$(item).attr("placeholder", "Please enter a valid email address");
				$(item).addClass('form-error');
			}
		    }

		});


		// radio buttons only check that there is selected option
		$("input:radio").each(function(){
			var name = $(this).attr("name");
			if($("input:radio[name="+name+"]:checked").length == 0){
				formError=true;
				$(this).addClass('form-error');
			}
		});


		// password confirmation
		if( $('.password').val() !== $('.password-match').val() ){
			formError=true;
			passwordMatch = false;
		}


		// final processing
		if( formError===true ){
			messageBox.addClass('error');
			messageBox.html('You have left some required fields blank.');
			if( passwordMatch==false ){ messageBox.append('* Passwords must match.'); }
			messageBox.show();
			$("html, body").delay(2000).animate({
			        scrollTop: messageBox.offset().top 
			}, 2000);
		} else {
			theForm.submit();
		}

	});

});