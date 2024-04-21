# Web-Development-Assessment

## 1 - General Decription

This is the website of a made up company I called RocketCrypto, it is a simple single web page containing a currency converter.
Not all the currencies are not present, but we can add them easily to the form tag.
Thanks to the JS function used, the tag will be taken and automatically mapped to the corresponding cryptocurrency on the API used, so we do not need to modify the function the add a new currency.
The Navbar and the Footer are made using simple HTML and CSS code, making use of rows and columns.

## 2 - API Explanation

Before starting to explain, we need to note that this is the free version of an API, meaning it have some kind of limit on fetch request, I did tried it and it is inconsistant, sometime I do not wait bettwen fetch request, sometimes
it woudl last 30 sec and sometimes a minute, but it is the only free API i could find.

Now as to how it works, first we have 4 global varibles, the cryptoSelect and currencySelect are the 2 option selected from the forms by default they are Bitcoin and USD, the function will show how much 1 BTC is in USD, 
and any change in the options will be matched by a chnage in the displayed value (if we change USD to PHP the vaue of the BTC will change).The cryptoInput is a variable who takes the value of the big from box containing the amount to convert, now knowing the price, we simply multiply the variable by it and display the result.

## 3 - Video Deonstration

https://github.com/CoDeX50/Web-Development-Assessment/assets/76247970/b7df2690-30ee-41ec-b2de-1191c33329ce



