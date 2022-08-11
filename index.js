/*let test1 = "asdfgh"
let test2 = 666
let test3 = true
var test4 = {
    property1: 1,
    property2: 2
}*/



function getResult() {
    let payment = document.getElementById("payment-type").value;
    let connection = document.getElementById("connection-area").value;
    let vpn = document.getElementById("vpn").value;
    let tiers = document.getElementById("tiers").value;
    let additional = document.getElementById("addi").value;
    let textbox = document.getElementById("textbox");

    // Just because //

    if (payment === "0" || connection === "0" || vpn === "0" || tiers === "0" || additional === "0") {

        switch (true) {
            case payment === "0":
                alert('"Payment Method" is missing, please select a valid option')
                break;
            case connection === "0":
                alert('"Connection Area" is missing, please select a valid option')
                break;
            case vpn === "0":
                alert('"VPN / Proxy Verification" is missing, please select a valid option')
                break;
            case tiers === "0":
                alert('"Verification Tiers" is missing, please select a valid option')
                break;
            case additional === "0":
                alert('"Additional Verification" is missing, please select a valid option')
                break;
        }
    }

    if (payment === "2") {
        textbox.innerHTML = "</br>No verification required."
    }
    else if (vpn === "2") {
        textbox.innerHTML = `</br>Hi, so it shows you ordered from a VPN/Proxy, Unfortunately, I cannot accept an order from a VPN/proxy/private connection. </br>
                            This can sometimes be a false flag, regardless I will need you to upload a picture of your internet bill showing your full address + name. </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification`
    }

    // GEOMATCH NOT LEAKED //

    else if (payment === "1" && connection === "1" && vpn === "1" && tiers === "2" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            A photo of the Credit/Debit card used beside your valid government ID. (You can censor the credit card number and just leave the name and last 4 digits visible).</br>
                            Here is an example: https://i.imgur.com/oZT7cjQ.png</br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification`
    }

    else if (payment === "1" && connection === "1" && vpn === "1" && tiers === "3" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            A photo of the Credit/Debit card used beside your valid government ID. (You can censor the credit card number and just leave the name and last 4 digits visible).</br>
                            Here is an example: https://i.imgur.com/oZT7cjQ.png</br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "1" && vpn === "1" && tiers === "4" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification. </br>
                            </br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            Lastly a photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>

                            Here are some examples:</br> 
        
                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>
        
                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>
        
                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>
        
                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "1" && vpn === "1" && tiers === "5" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification. </br>
                            </br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            A photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                            Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                            </br>
                            Here are some examples:</br> 

                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "1" && vpn === "1" && tiers === "6" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification. </br>
                            </br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            A photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                            Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                            </br>
                            Here are some examples:</br> 

                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }

    // NOT GEOMATCH NOT LEAKED//

    else if (payment === "1" && connection === "2" && vpn === "1" && tiers === "1" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            Also a photo of the Credit/Debit card used beside the ID. (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card, the exp date and last 4 digits.)</br>
                            Here is an example: https://prnt.sc/xc35bd https://prnt.sc/w66jii</br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification`
    }

    else if (payment === "1" && connection === "2" && vpn === "1" && tiers === "3" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            Also a photo of the Credit/Debit card used beside the ID. (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card, the exp date and last 4 digits.)</br>
                            Here is an example: https://prnt.sc/xc35bd https://prnt.sc/w66jii</br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "2" && vpn === "1" && tiers === "4" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            Also a photo of the Credit/Debit card used beside the ID. (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card, the exp date and last 4 digits.)</br>
                            Here is an example: https://prnt.sc/xc35bd https://prnt.sc/w66jii</br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification</br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            Lastly a photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>

                            Here are some examples:</br> 
        
                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>
        
                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>
        
                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>
        
                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "2" && vpn === "1" && tiers === "5" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            Also a photo of the Credit/Debit card used beside the ID. (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card, the exp date and last 4 digits.)</br>
                            Here is an example: https://prnt.sc/xc35bd https://prnt.sc/w66jii
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            A photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                            Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                            </br>
                            Here are some examples:</br> 

                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "2" && vpn === "1" && tiers === "6" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            Also a photo of the Credit/Debit card used beside the ID. (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card, the exp date and last 4 digits.)</br>
                            Here is an example: https://prnt.sc/xc35bd https://prnt.sc/w66jii
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            A photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                            Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                            </br>
                            Here are some examples:</br> 

                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }

    // GEOMATCH LEAKED //

    else if (payment === "1" && connection === "1" && vpn === "1" && tiers === "2" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            A photo of the Credit/Debit card used beside your valid government ID. (You can censor the credit card number and just leave the name and last 4 digits visible).</br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            Here is an example: https://i.imgur.com/oZT7cjQ.png</br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification`
    }

    else if (payment === "1" && connection === "1" && vpn === "1" && tiers === "3" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            A photo of the Credit/Debit card used beside your valid government ID. (You can censor the credit card number and just leave the name and last 4 digits visible).</br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            Here is an example: https://i.imgur.com/oZT7cjQ.png</br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "1" && vpn === "1" && tiers === "4" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification. </br>
                            </br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            Lastly a photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>

                            Here are some examples:</br> 
        
                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>
        
                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>
        
                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>
        
                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "1" && vpn === "1" && tiers === "5" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification. </br>
                            </br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            A photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                            Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                            </br>
                            Here are some examples:</br> 

                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "1" && vpn === "1" && tiers === "6" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification. </br>
                            </br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            A photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                            Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                            </br>
                            Here are some examples:</br> 

                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }

    // NOT GEOMATCH LEAKED //

    else if (payment === "1" && connection === "2" && vpn === "1" && tiers === "1" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            Also a photo of the Credit/Debit card used beside the ID. (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card, the exp date and last 4 digits.)</br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            Here is an example: https://prnt.sc/xc35bd https://prnt.sc/w66jii</br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification`
    }

    else if (payment === "1" && connection === "2" && vpn === "1" && tiers === "3" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            Also a photo of the Credit/Debit card used beside the ID. (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card, the exp date and last 4 digits.)</br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            Here is an example: https://prnt.sc/xc35bd https://prnt.sc/w66jii</br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "2" && vpn === "1" && tiers === "4" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            Also a photo of the Credit/Debit card used beside the ID. (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card, the exp date and last 4 digits.)</br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            Here is an example: https://prnt.sc/xc35bd https://prnt.sc/w66jii</br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification</br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            Lastly a photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>

                            Here are some examples:</br> 
        
                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>
        
                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>
        
                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>
        
                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "2" && vpn === "1" && tiers === "5" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            Also a photo of the Credit/Debit card used beside the ID. (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card, the exp date and last 4 digits.)</br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            Here is an example: https://prnt.sc/xc35bd https://prnt.sc/w66jii
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            A photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                            Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                            </br>
                            Here are some examples:</br> 

                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "1" && connection === "2" && vpn === "1" && tiers === "6" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with Credit/Debit we would just need some verification;</br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            Also a photo of the Credit/Debit card used beside the ID. (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card, the exp date and last 4 digits.)</br>
                            Here is an example: https://prnt.sc/xc35bd https://prnt.sc/w66jii
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            A photo of the credit card used on top of the written note (You can censor the card number and just leave the last 4 digits visible, Just need to see the name on the card and last 4 digits.)</br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                            Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                            </br>
                            Here are some examples:</br> 

                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }

    // iDEAL GEOMATCH NOT LEAKED //


    else if (payment === "3" && connection === "1" && vpn === "1" && tiers === "2" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with iDEAL we would just need some verification;</br>
                            A photo of your valid government ID.</br>
                            </br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification`
    }

    else if (payment === "3" && connection === "1" && vpn === "1" && tiers === "3" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with iDEAL we would just need some verification;</br>
                            A photo of your valid government ID.</br>
                            </br>
                            The photo can be uploaded here:https://chicksgold.com/customer-portal/verification</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "3" && connection === "1" && vpn === "1" && tiers === "4" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with iDEAL we would just need some verification. </br>
                            </br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>

                            Here are some examples:</br> 
        
                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>
        
                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>
        
                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>
        
                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "3" && connection === "1" && vpn === "1" && tiers === "5" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with iDEAL we would just need some verification. </br>
                            </br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                            Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                            </br>
                            Here are some examples:</br> 

                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "3" && connection === "1" && vpn === "1" && tiers === "6" && additional === "2") {
        textbox.innerHTML = `I see the order, since it was done with iDEAL we would just need some verification. </br>
                            </br>
                            We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                            </br>
                            We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                            As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                            </br>
                            ** Ensure to replace all CAPS words.</br>
                            </br>
                            </br>
                            The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                            Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                            </br>
                            Here are some examples:</br> 

                            https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                            https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                            https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                            Please check the examples to do the verification properly.</br>
                            </br>
                            We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email?`
    }

    // iDEAL GEOMATCH LEAKED  

    else if (payment === "3" && connection === "1" && vpn === "1" && tiers === "2" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with iDEAL we would just need some verification;</br>
                        A photo of your valid government ID.</br>
                        As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                        </br>
                        The photo can be uploaded here:https://chicksgold.com/customer-portal/verification`
    }

    else if (payment === "3" && connection === "1" && vpn === "1" && tiers === "3" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with iDEAL we would just need some verification;</br>
                        A photo of your valid government ID.</br>
                        As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                        </br>
                        The photo can be uploaded here:https://chicksgold.com/customer-portal/verification</br>
                        </br>
                        We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                        It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "3" && connection === "1" && vpn === "1" && tiers === "4" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with iDEAL we would just need some verification. </br>
                        </br>
                        We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                        </br>
                        We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                        As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                        </br>
                        ** Ensure to replace all CAPS words.</br>
                        </br>
                        </br>
                        The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>

                        Here are some examples:</br> 
    
                        https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>
    
                        https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>
    
                        https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>
    
                        Please check the examples to do the verification properly.</br>
                        </br>
                        We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                        It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "3" && connection === "1" && vpn === "1" && tiers === "5" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with iDEAL we would just need some verification. </br>
                        </br>
                        We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                        </br>
                        We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                        As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                        </br>
                        ** Ensure to replace all CAPS words.</br>
                        </br>
                        </br>
                        The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                        Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                        </br>
                        Here are some examples:</br> 

                        https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                        https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                        https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                        Please check the examples to do the verification properly.</br>
                        </br>
                        We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                        It only takes a minute, can you please let me know your email?`
    }
    else if (payment === "3" && connection === "1" && vpn === "1" && tiers === "6" && additional === "1") {
        textbox.innerHTML = `I see the order, since it was done with iDEAl we would just need some verification. </br>
                        </br>
                        We need a photo of ID held in front of the computer screen with this full webpage visible. (Front and back of the ID.)</br>
                        </br>
                        We also need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an account on ORDER ID from www.chicksgold.com on DATE" Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please). </br>
                        As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                        </br>
                        ** Ensure to replace all CAPS words.</br>
                        </br>
                        </br>
                        The photos can be uploaded here: https://chicksgold.com/customer-portal/verification</br>
                        Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                        </br>
                        Here are some examples:</br> 

                        https://chicksgold.gyazo.com/e4ba52c18033d1b27be3317360362e6f</br>

                        https://chicksgold.gyazo.com/049d8a708ee42369db5af34cf7ca9766</br>

                        https://chicksgold.gyazo.com/875f060b1059ae9d1602b797f016ba95</br>

                        Please check the examples to do the verification properly.</br>
                        </br>
                        We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                        It only takes a minute, can you please let me know your email?`
    }

    // BANK TRANSFER GEOMATCH NOT LEAKED //

    else if (payment === "4" && connection === "1" && vpn === "1" && tiers === "2" && additional === "2") {
        textbox.innerHTML = `In order to accept your order, we'd need to verify your account and this is what we need in order to do so: </br>
                                </br>
                                Clear photos of the front and back of your ID held in front of the screen with this full-page visible.</br>
                                </br>
                                We need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an accout from www.chicksgold.com on DATE". Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please).</br>
                                </br>
                                **Ensure to replace all CAPS words.</br>
                                </br>
                                The photos can be uploaded here: https://chicksgold.com/customer-portal/verification.</br>
                                </br>
                                Here is an example:  https://prnt.sc/xc35bd  https://prnt.sc/w7vl85`
    }

    else if (payment === "4" && connection === "1" && vpn === "1" && tiers === "3" && additional === "2") {
        textbox.innerHTML = `In order to accept your order, we'd need to verify your account and this is what we need in order to do so: </br>
                               </br>
                               Clear photos of the front and back of your ID held in front of the screen with this full-page visible.</br>
                               </br>
                                We need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an accout from www.chicksgold.com on DATE". Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please).</br>
                               </br>
                               **Ensure to replace all CAPS words.</br>
                               </br>
                               The photos can be uploaded here: https://chicksgold.com/customer-portal/verification.</br>
                               </br>
                               Here is an example:  https://prnt.sc/xc35bd  https://prnt.sc/w7vl85`

    }
    else if (payment === "4" && connection === "1" && vpn === "1" && tiers === "4" && additional === "2") {
        textbox.innerHTML = `In order to accept your order, we'd need to verify your account and this is what we need in order to do so: </br>
                           </br>
                           Clear photos of the front and back of your ID held in front of the screen with this full-page visible.</br>
                           </br>
                           We need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an accout from www.chicksgold.com on DATE". Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please).</br>
                           </br>
                           **Ensure to replace all CAPS words.</br>
                           </br>
                           The photos can be uploaded here: https://chicksgold.com/customer-portal/verification.</br>
                           </br>
                           Here is an example:  https://prnt.sc/xc35bd  https://prnt.sc/w7vl85 </br>
                           </br>We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email`
    }

    else if (payment === "4" && connection === "1" && vpn === "1" && tiers === "5" && additional === "2") {
        textbox.innerHTML = `In order to accept your order, we'd need to verify your account and this is what we need in order to do so: </br>
                           </br>
                           Clear photos of the front and back of your ID held in front of the screen with this full-page visible.</br>
                           </br>
                            We need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an accout from www.chicksgold.com on DATE". Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please).</br>
                           </br>
                           **Ensure to replace all CAPS words.</br>
                           </br>Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                           </br>The photos can be uploaded here: https://chicksgold.com/customer-portal/verification.</br>
                           </br>
                           Here is an example:  https://prnt.sc/xc35bd  https://prnt.sc/w7vl85 </br>
                           </br>We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email`
    }

    else if (payment === "4" && connection === "1" && vpn === "1" && tiers === "6" && additional === "2") {
        textbox.innerHTML = `In order to accept your order, we'd need to verify your account and this is what we need in order to do so: </br>
                           </br>
                           Clear photos of the front and back of your ID held in front of the screen with this full-page visible.</br>
                           </br>
                           We need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an accout from www.chicksgold.com on DATE". Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please).</br>
                           </br>
                           As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                           **Ensure to replace all CAPS words.</br>
                           </br>Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                           </br>The photos can be uploaded here: https://chicksgold.com/customer-portal/verification.</br>
                           </br>
                           Here is an example:  https://prnt.sc/xc35bd  https://prnt.sc/w7vl85 </br>
                           </br>We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                            It only takes a minute, can you please let me know your email`
    }

    // BANK TRANSFER GEOMATCH LEAKED //

    else if (payment === "4" && connection === "1" && vpn === "1" && tiers === "2" && additional === "1") {
        textbox.innerHTML = `In order to accept your order, we'd need to verify your account and this is what we need in order to do so: </br>
                           </br>
                           Clear photos of the front and back of your ID held in front of the screen with this full-page visible.</br>
                           </br>
                           We need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an accout from www.chicksgold.com on DATE". Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please).</br>
                           </br>
                           **Ensure to replace all CAPS words.</br>
                           As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                           </br>
                           The photos can be uploaded here: https://chicksgold.com/customer-portal/verification.</br>
                           </br>
                           Here is an example:  https://prnt.sc/xc35bd  https://prnt.sc/w7vl85`
    }

    else if (payment === "4" && connection === "1" && vpn === "1" && tiers === "3" && additional === "1") {
        textbox.innerHTML = `In order to accept your order, we'd need to verify your account and this is what we need in order to do so: </br>
                          </br>
                          Clear photos of the front and back of your ID held in front of the screen with this full-page visible.</br>
                          </br>
                           We need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an accout from www.chicksgold.com on DATE". Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please).</br>
                          </br>
                          **Ensure to replace all CAPS words.</br>
                          As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                          </br>
                          The photos can be uploaded here: https://chicksgold.com/customer-portal/verification.</br>
                          </br>
                          Here is an example:  https://prnt.sc/xc35bd  https://prnt.sc/w7vl85`

    }
    else if (payment === "4" && connection === "1" && vpn === "1" && tiers === "4" && additional === "1") {
        textbox.innerHTML = `In order to accept your order, we'd need to verify your account and this is what we need in order to do so: </br>
                      </br>
                      Clear photos of the front and back of your ID held in front of the screen with this full-page visible.</br>
                      </br>
                      We need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an accout from www.chicksgold.com on DATE". Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please).</br>
                      </br>
                      **Ensure to replace all CAPS words.</br>
                      As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                      </br>
                      The photos can be uploaded here: https://chicksgold.com/customer-portal/verification.</br>
                      </br>
                      Here is an example:  https://prnt.sc/xc35bd  https://prnt.sc/w7vl85 </br>
                      </br>We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                       It only takes a minute, can you please let me know your email`
    }

    else if (payment === "4" && connection === "1" && vpn === "1" && tiers === "5" && additional === "1") {
        textbox.innerHTML = `In order to accept your order, we'd need to verify your account and this is what we need in order to do so: </br>
                      </br>
                      Clear photos of the front and back of your ID held in front of the screen with this full-page visible.</br>
                      </br>
                       We need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an accout from www.chicksgold.com on DATE". Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please).</br>
                      </br>
                      **Ensure to replace all CAPS words.</br>
                      As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                      </br>Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                      </br>The photos can be uploaded here: https://chicksgold.com/customer-portal/verification.</br>
                      </br>
                      Here is an example:  https://prnt.sc/xc35bd  https://prnt.sc/w7vl85 </br>
                      </br>We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                       It only takes a minute, can you please let me know your email`
    }

    else if (payment === "4" && connection === "1" && vpn === "1" && tiers === "6" && additional === "1") {
        textbox.innerHTML = `In order to accept your order, we'd need to verify your account and this is what we need in order to do so: </br>
                      </br>
                      Clear photos of the front and back of your ID held in front of the screen with this full-page visible.</br>
                      </br>
                      We need a selfie photo as clear as possible with you holding a Piece of paper or note that says "I NAME am buying an accout from www.chicksgold.com on DATE". Signed by you at the bottom. (Full face visible, no hats/hoods/headphones please).</br>
                      </br>
                      As well as a picture of you holding your ID with your whole face visible and nothing covering any part of your face. The ID must also clearly be visible in the picture. (Full face visible, no hats/hoods/headphones please)</br>
                      **Ensure to replace all CAPS words.</br>
                      </br>Lastly a photo of a utility bill or bank/credit statement dated in the last 60 days that was sent to you and displays your name and address.</br>
                      </br>The photos can be uploaded here: https://chicksgold.com/customer-portal/verification.</br>
                      </br>
                      Here is an example:  https://prnt.sc/xc35bd  https://prnt.sc/w7vl85 </br>
                      </br>We'd also be needing 2 more things, no photos, just an agreement, and email confirmation.</br>
                       It only takes a minute, can you please let me know your email`
    }


    let btnbox = document.getElementById("btnbox");
    if (textbox.innerHTML !== "") {
        btnbox.style.display = "block";
        textbox.style.display = "block";
    } else {
        btnbox.style.display = "none";
        textbox.style.display = "none";
    }

}

function getCopy() {
    let textbox = document.getElementById("textbox");
    console.log(textbox.innerText);
    navigator.clipboard.writeText(textbox.innerText);
    alert("Copied to clipboard!");
}

console.log(document.getElementById("payment-type"))

  //helloWorld();