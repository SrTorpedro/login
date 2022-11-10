var analise = ""


function click_0(){
    var frist_js = document.getElementById('frist')
    var last_js = document.getElementById('last')
    var email_js = document.getElementById('email')
    var pass_js = document.getElementById('password')

    var email_up = email_js.value
    email_up = email_up.toUpperCase(email_up)



    if (frist_js.value == ""){
        if (frist_na !== " "){
            document.getElementById('frist_na').innerText = ('')
            document.getElementById('frist_na').innerText += ('Frist Name cannot be empty')

            frist_js.style.borderColor = 'hsl(0, 100%, 74%)';
            frist_js.style.borderStyle = 'solid';
            frist_js.style.borderWidth = '2px';
        }
        else{
            document.getElementById('frist_na').innerText += ('Frist Name cannot be empty')
            frist_js.style.borderColor = 'hsl(0, 100%, 74%)';
            frist_js.style.borderStyle = 'solid';
            frist_js.style.borderWidth = '2px';
        }
    }

    else{
        if (frist_na !== " "){
            document.getElementById('frist_na').innerText = ('')
        }
    }




    if(last_js.value == ""){
        if (frist_na !== " "){
            document.getElementById('last_na').innerText = ('')
            document.getElementById('last_na').innerText += ('Last Name cannot be empty')

            last_js.style.borderColor = 'hsl(0, 100%, 74%)';
            last_js.style.borderStyle = 'solid';
            last_js.style.borderWidth = '2px';
        }
        else{
            document.getElementById('last_na').innerText += ('Last Name cannot be empty')

            last_js.style.borderColor = 'hsl(0, 100%, 74%)';
            last_js.style.borderStyle = 'solid';
            last_js.style.borderWidth = '2px';
        }
    }

    else{
        if (last_na !== " "){
            document.getElementById('last_na').innerText = ('')
        }
    }




    if(email_js.value == ""){
        if (frist_na !== " "){
            document.getElementById('email_na').innerText = ('')
            document.getElementById('email_na').innerText += ('Frist Name cannot be empty')

            email_js.style.borderColor = 'hsl(0, 100%, 74%)';
            email_js.style.borderStyle = 'solid';
            email_js.style.borderWidth = '2px';
        }
        else{
            document.getElementById('email_na').innerText += ('Frist Name cannot be empty')

            email_js.style.borderColor = 'hsl(0, 100%, 74%)';
            email_js.style.borderStyle = 'solid';
            email_js.style.borderWidth = '2px';
        }
    }

    else{
        if (email_na !== " "){
            document.getElementById('email_na').innerText = ('')
            if((email_up.includes('@') == false) || (email_up.includes('/') == true) || (email_up.length < 3)){
                document.getElementById('email_na').innerText = ('Looks Like this is not an email')

                email_js.style.borderWidth = '2px';
                email_js.style.borderColor = 'hsl(0, 100%, 74%)';
                email_js.style.borderStyle = 'solid';
                email_js.style.color = 'hsl(0, 100%, 74%)';
            }
        }
    }




    if(pass_js.value == ""){
        if (frist_na !== " "){
            document.getElementById('pass_na').innerText = ('')
            document.getElementById('pass_na').innerText += ('Passwor cannot be empty')

            pass_js.style.borderColor = 'hsl(0, 100%, 74%)';
            pass_js.style.borderStyle = 'solid';
            pass_js.style.borderWidth = '2px';
        }
        else{
            document.getElementById('pass_na').innerText += ('Password cannot be empty')

            pass_js.style.borderColor = 'hsl(0, 100%, 74%)';
            pass_js.style.borderStyle = 'solid';
            pass_js.style.borderWidth = '2px';
        }
    }

    else{
        if (pass_na !== " "){
            document.getElementById('pass_na').innerText = ('')
        }
    }
  }