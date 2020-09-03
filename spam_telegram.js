//spam telegram wkwk....lol
//caranya
//copy code ini
//open console ( Ctrl + Shift + J )
//pastekan
//execute the code 
//enter deh...wkwk
var message = ""; //pesan yang akan di kirim
var interval = 1  ; // detiknya brapaan
var count = 10 ; //jumlah pesan yang akan di kirim
var notifyInterval = 5 ; //notify 
var i = 0 ;
var timer = setInterval(function(){
	document.getElementsByClassName('composer_rich_textarea')[0].innerHTML = message;
	$('.im_submit').trigger('mousedown');	
	i++;
	if( i  == count )
	clearInterval(timer);
	if( i % notifyInterval == 0)
	console.log(i + ' MESSAGES SENT');
} , interval * 1000 ) ;
//jika di banned jangan salahkan saya yaw....wkwk
