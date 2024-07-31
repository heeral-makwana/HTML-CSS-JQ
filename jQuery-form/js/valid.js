

  
    $().ready(function() {
        jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
            phone_number = phone_number.replace(/\s+/g, "");
            return this.optional(element) || phone_number.length > 9 && 
            phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
        }, "Please enter valid MobileNumber."); 
    jQuery.validator.addMethod("lettersonlys", function(value, element) {
            return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
        }, "Alphabet-Letters only please");
    $("#form1").validate({
                 rules:{
                         fname:{
                                 required:true,
                                 minlength: 3,
                                 lettersonlys :true
                         },
                         lname:{
                            required:true,
                            minlength: 3,
                            lettersonlys :true
                         },
                         mobile:{
                            required: true,
                            phoneUS:true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    gen:{
                        required:true
                },
                
                messages: {
                    fname:"Please enter a firstname",
                    lname: {
                        required: "Please enter a lastname",
                        minlength: "Your firstname must consist of at least 3 characters"
                    } ,
                    mobile:{
                        required: "Please enter a MobileNumber"
                        },
                    email:{
                        required: "Please enter a Email",
                        email:"Enetr  Valid Email."
                    },
                    'gender[]':{
                        required: "Please choose a gender",
                       
                    }
                }
            }
         });
    });
    $("input[name='yesno']").change(function(){

        if($(this).val() == "Married")
        {
            $("#sname").show();
        }else{
            $("#sname").hide();
        }
    });
    $(document).ready(function () {
          $("#btn").click(function () {
            
            var fname = $("#fname").val();
            localStorage.setItem("txt1",fname)
            var lname = $("#lname").val();
            localStorage.setItem("txt2",lname)
            var mobile = $("#mobile").val();
            localStorage.setItem("txt3",mobile)
            var mail = $("#email").val();
            localStorage.setItem("txt4",mail)
            var gender = $('input[name="gen"]:checked').val();
            localStorage.setItem("txt5",gender)
            var msg = $("#msg").val();
            localStorage.setItem("txt6",msg)
            
        });
    });