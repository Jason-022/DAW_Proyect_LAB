var imagen = document.createElement("img");
var historia;
var li;
var li1;
var celebridad;
function ana() {
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 3){
                imagen.src = item.imagen;
                historia = "<p>" + item.infoh1 + "</p><br><p>" + item.infoh2 + "</p>";
                li = "<li>" + item.lm1 + "</li>";
                li += "<li>" + item.lm2 + "</li>";
                li += "<li>" + item.lm3 + "</li>";
                li += "<li>" + item.lm4 + "</li>";
                li += "<li>" + item.lm5 + "</li>";
                li += "<li>" + item.lm6 + "</li>";
                li += "<li>" + item.lm7 + "</li>";
                li += "<li>" + item.lm8 + "</li>";
                li += "<li>" + item.lm9 + "</li>";
                li += "<li>" + item.lm10 + "</li>";
                li += "<li>" + item.lm11 + "</li>";
                li += "<li>" + item.lm12 + "</li>";
                li += "<li>" + item.lm13 + "</li>";
                
                li1 = "<li>" + item.ll1 + "</li>";
                li1 += "<li>" + item.ll2 + "</li>";
                li1 += "<li>" + item.ll3 + "</li>";
                li1 += "<li>" + item.ll4 + "</li>";
                li1 += "<li>" + item.ll5 + "</li>";
                li1 += "<li>" + item.ll6 + "</li>";
                li1 += "<li>" + item.ll7 + "</li>";

                celebridad = "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img1 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad1 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info1p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img2 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad2 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info2p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";

                $("#imagen").html(imagen);
                $("#habitantes").html(item.habitantes);
                $("#extencion").html(item.extencion + '<sup>2</sup>');
                $("#historico").html(historia);
                $("#lm").html(li);
                $("#ll").html(li1);
                $("#celebridades").html(celebridad);
            }
        })
        
    })
}

function ahuchapan(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 1){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p><br><p>" + item.infoh2 + "</p><br><p>" + item.infoh3 + "</p>";
                li = "<li>" + item.lm1 + "</li>";
                li += "<li>" + item.lm2 + "</li>";
                li += "<li>" + item.lm3 + "</li>";
                li += "<li>" + item.lm4 + "</li>";
                li += "<li>" + item.lm5 + "</li>";
                li += "<li>" + item.lm6 + "</li>";
                li += "<li>" + item.lm7 + "</li>";
                li += "<li>" + item.lm8 + "</li>";
                li += "<li>" + item.lm9 + "</li>";
                li += "<li>" + item.lm10 + "</li>";
                li += "<li>" + item.lm11 + "</li>";
                li += "<li>" + item.lm12 + "</li>";
                
                li1 = "<li>" + item.ll1 + "</li>";
                li1 += "<li>" + item.ll2 + "</li>";
                li1 += "<li>" + item.ll3 + "</li>";
                li1 += "<li>" + item.ll4 + "</li>";

                celebridad = "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img1 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad1 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info1p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img2 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad2 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info2p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img3 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad3 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info3p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";

                $("#imagen").html(imagen);
                $("#habitantes").html(item.habitantes);
                $("#extencion").html(item.extencion + '<sup>2</sup>');
                $("#historico").html(historia);
                $("#lm").html(li);
                $("#ll").html(li1);
                $("#celebridades").html(celebridad);
            }
        })
        
    })
}
function cabañas(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 1){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p><br><p>" + item.infoh2 + "</p><br><p>" + item.infoh3 + "</p>";
                li = "<li>" + item.lm1 + "</li>";
                li += "<li>" + item.lm2 + "</li>";
                li += "<li>" + item.lm3 + "</li>";
                li += "<li>" + item.lm4 + "</li>";
                li += "<li>" + item.lm5 + "</li>";
                li += "<li>" + item.lm6 + "</li>";
                li += "<li>" + item.lm7 + "</li>";
                li += "<li>" + item.lm8 + "</li>";
                li += "<li>" + item.lm9 + "</li>";
                
                li1 += "<li>" + item.ll1 + "</li>";
                li1 += "<li>" + item.ll2 + "</li>";

                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img1 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad1 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info1p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";

                $("#imagen").html(imagen);
                $("#habitantes").html(item.habitantes);
                $("#extencion").html(item.extencion + '<sup>2</sup>');
                $("#historico").html(historia);
                $("#lm").html(li);
                $("#ll").html(li1);
                $("#celebridades").html(celebridad);
            }
        })
        
    })
}

