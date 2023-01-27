 //country location
	var ip = "";
    var hostname = "";
    var city = "";
    var region = "";
    var country = "";
    var loc = "";
    var org = "";
 
    $.getJSON("https://ipinfo.io", function(data) {
        ip = data.ip 
        hostname = data.hostname
        city = data.city
        region = data.region
        country = data.country 
        loc = data.loc 
        org = data.org 
   
 
		
		if(country == "KR"){
            console.log(data);
			$("#kr").show();
			location.href="";
        }else if(country == "US"){
            console.log(data);
            $("#us").show();
			location.href="";
        }else if(country == "CN"){
            console.log(data);
            $("#cn").show();
			location.href="";
        }else if(country == "JP"){
            console.log(data);
            $("#jp").show();
			location.href="";
        }else if(country == "CA"){
            console.log(data);
            $("#ca").show();
			location.href="";
        }else {
            console.log(data);
            $("#other").show();
			location.href="";
        }

    });
 
