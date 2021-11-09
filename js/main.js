var imagen = document.createElement("img");
var historia;
var li;
var li1;
var celebridad;
var info;
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
            if(item.id === 2){
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
function sonsonate(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 4){
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
                li += "<li>" + item.lm13 + "</li>";
                li += "<li>" + item.lm14 + "</li>";
                li += "<li>" + item.lm15 + "</li>";
                li += "<li>" + item.lm16 + "</li>";
                
                li1= "<li>" + item.ll1 + "</li>";
                li1+= "<li>" + item.ll2 + "</li>";
                li1+= "<li>" + item.ll3 + "</li>";
                li1+= "<li>" + item.ll4 + "</li>";
                li1+= "<li>" + item.ll5 + "</li>";

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
function miguel(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 5){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p><br><p>" + item.infoh2 + "</p>";
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
                li += "<li>" + item.lm14 + "</li>";
                li += "<li>" + item.lm15 + "</li>";
                li += "<li>" + item.lm16 + "</li>";
                li += "<li>" + item.lm17 + "</li>";
                li += "<li>" + item.lm18 + "</li>";
                li += "<li>" + item.lm19 + "</li>";
                li += "<li>" + item.lm20 + "</li>";
                
                li1 = "<li>" + item.ll1 + "</li>";
                li1 += "<li>" + item.ll2 + "</li>";
                li1 += "<li>" + item.ll3 + "</li>";
                li1 += "<li>" + item.ll4 + "</li>";
                li1 += "<li>" + item.ll5 + "</li>";
                li1 += "<li>" + item.ll6 + "</li>";
                li1 += "<li>" + item.ll7 + "</li>";
                li1 += "<li>" + item.ll8 + "</li>";

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
function usulutan(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 6){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p><br><p>" + item.infoh2 + "</p>";

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
                li += "<li>" + item.lm14 + "</li>";
                li += "<li>" + item.lm15 + "</li>";
                li += "<li>" + item.lm16 + "</li>";
                li += "<li>" + item.lm17 + "</li>";
                li += "<li>" + item.lm18 + "</li>";
                li += "<li>" + item.lm19 + "</li>";
                li += "<li>" + item.lm20 + "</li>";
                li += "<li>" + item.lm21 + "</li>";
                li += "<li>" + item.lm22 + "</li>";
                li += "<li>" + item.lm23 + "</li>";
                
                li1= "<li>" + item.ll1 + "</li>";
                li1+= "<li>" + item.ll2 + "</li>";
                li1+= "<li>" + item.ll3 + "</li>";

                $("#imagen1").html(imagen);
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
function morazan(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 7){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p><br><p>" + item.infoh2 + "</p>";

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
                li += "<li>" + item.lm14 + "</li>";
                li += "<li>" + item.lm15 + "</li>";
                li += "<li>" + item.lm16 + "</li>";
                li += "<li>" + item.lm17 + "</li>";
                li += "<li>" + item.lm18 + "</li>";
                li += "<li>" + item.lm19 + "</li>";
                li += "<li>" + item.lm20 + "</li>";
                li += "<li>" + item.lm21 + "</li>";
                li += "<li>" + item.lm22 + "</li>";
                li += "<li>" + item.lm23 + "</li>";
                li += "<li>" + item.lm24 + "</li>";
                li += "<li>" + item.lm25 + "</li>";
                li += "<li>" + item.lm26 + "</li>";
                
                li1 = "<li>" + item.ll1 + "</li>";
                li1 += "<li>" + item.ll2 + "</li>";
                li1 += "<li>" + item.ll3 + "</li>";
                li1 += "<li>" + item.ll4 + "</li>";

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
function union(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 8){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p><br><p>" + item.infoh2 + "</p>";

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
                li += "<li>" + item.lm14 + "</li>";
                li += "<li>" + item.lm15 + "</li>";
                li += "<li>" + item.lm16 + "</li>";
                li += "<li>" + item.lm17 + "</li>";
                li += "<li>" + item.lm18 + "</li>";
                
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
                celebridad += "<p class='card-text'>" + item.info1+ "</p>";
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
                celebridad += "<p class='card-text'>" + item.info2+ "</p>";
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
                celebridad += "<p class='card-text'>" + item.info3+ "</p>";
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
function chalatenango() {
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 9){
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
                li += "<li>" + item.lm13 + "</li>";
                li += "<li>" + item.lm14 + "</li>";
                li += "<li>" + item.lm15 + "</li>";
                li += "<li>" + item.lm16 + "</li>";
                li += "<li>" + item.lm17 + "</li>";
                li += "<li>" + item.lm18 + "</li>";
                li += "<li>" + item.lm19 + "</li>";
                li += "<li>" + item.lm20 + "</li>";
                li += "<li>" + item.lm21 + "</li>";
                li += "<li>" + item.lm22 + "</li>";
                li += "<li>" + item.lm23 + "</li>";
                li += "<li>" + item.lm24 + "</li>";
                li += "<li>" + item.lm25 + "</li>";
                li += "<li>" + item.lm26 + "</li>";
                li += "<li>" + item.lm27 + "</li>";
                li += "<li>" + item.lm28 + "</li>";
                li += "<li>" + item.lm29 + "</li>";
                li += "<li>" + item.lm30 + "</li>";
                li += "<li>" + item.lm31 + "</li>";
                li += "<li>" + item.lm32 + "</li>";
                
                li1 = "<li>" + item.ll1 + "</li>";
                li1 += "<li>" + item.ll2 + "</li>";

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
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img4 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad4 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info4p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img5 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad5 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info5p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img6 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad6 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info6p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img7 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad7 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info7p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img8 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad8 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info8p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";

                $("#imagen1").html(imagen);
                $("#habitantes").html(item.habitantes);
                $("#extencion").html(item.extencion + '<sup>2</sup>');
                $("#historico").html(historia);
                $("#lm").html(li);
                $("#ll").html(li1);
                $("#celebridades").html(celebridad);
                $("#informacion").html(item.informacion)
            }
        })
        
    })
}  
function salvador() {
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 10){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p>";
                
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
                li += "<li>" + item.lm14 + "</li>";
                li += "<li>" + item.lm15 + "</li>";
                li += "<li>" + item.lm16 + "</li>";
                li += "<li>" + item.lm17 + "</li>";
                li += "<li>" + item.lm18 + "</li>";
                
                li1 = "<li>" + item.ll1 + "</li>";
                li1 += "<li>" + item.ll2 + "</li>";

                

                $("#imagen").html(imagen);
                $("#habitantes").html(item.habitantes);
                $("#extencion").html(item.extencion + '<sup>2</sup>');
                $("#historico").html(historia);
                $("#lm").html(li);
                $("#ll").html(li1);
                $("#celebridades").html(celebridad);
                $("#informacion").html(item.informacion)
            }
        })
        
    })
} 

function libertad(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 11){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p><br><p>" + item.infoh2 + "</p>";
                
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
                li += "<li>" + item.lm14 + "</li>";
                li += "<li>" + item.lm15 + "</li>";
                li += "<li>" + item.lm16 + "</li>";
                li += "<li>" + item.lm17 + "</li>";
                li += "<li>" + item.lm18 + "</li>";
                li += "<li>" + item.lm19 + "</li>";
                li += "<li>" + item.lm20 + "</li>";
                li += "<li>" + item.lm21 + "</li>";
                li += "<li>" + item.lm22 + "</li>";
                
                li1 = "<li>" + item.ll1 + "</li>";
                li1 += "<li>" + item.ll2 + "</li>";
                li1 += "<li>" + item.ll3 + "</li>";
                li1 += "<li>" + item.ll4 + "</li>";
                li1 += "<li>" + item.ll5 + "</li>";
                li1 += "<li>" + item.ll6 + "</li>";

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
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img4 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad4 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info4p1 + "</p>";
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
                $("#informacion").html(item.informacion)
            }
        })
        
    })
} 
function cuscatlan(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 12){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p><br><p>" + item.infoh2 + "</p>";
                
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
                li += "<li>" + item.lm14 + "</li>";
                li += "<li>" + item.lm15 + "</li>";
                li += "<li>" + item.lm16 + "</li>";
                
                li1 = "<li>" + item.ll1 + "</li>";
                li1 += "<li>" + item.ll2 + "</li>";
                li1 += "<li>" + item.ll3 + "</li>";
                li1 += "<li>" + item.ll4 + "</li>";
                li1 += "<li>" + item.ll5 + "</li>";
                li1 += "<li>" + item.ll6 + "</li>";

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
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img4 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad4 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info4p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img5 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad5 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info5p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img6 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad6 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info6p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img7 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad7 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info7p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img8 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad8 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info8p1 + "</p>";
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
                $("#informacion").html(item.informacion)
            }
        })
        
    })
}
function paz(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 13){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p>";
                
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
                li += "<li>" + item.lm14 + "</li>";
                li += "<li>" + item.lm15 + "</li>";
                li += "<li>" + item.lm16 + "</li>";
                li += "<li>" + item.lm17 + "</li>";
                li += "<li>" + item.lm18 + "</li>";
                li += "<li>" + item.lm19 + "</li>";
                li += "<li>" + item.lm20 + "</li>";
                li += "<li>" + item.lm21 + "</li>";
                li += "<li>" + item.lm22 + "</li>";
                li += "<li>" + item.lm23 + "</li>";
                
                li1 = "<li>" + item.ll1 + "</li>";
                li1 += "<li>" + item.ll2 + "</li>";
                li1 += "<li>" + item.ll3 + "</li>";
                li1 += "<li>" + item.ll4 + "</li>";
                li1 += "<li>" + item.ll5 + "</li>";

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
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img4 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad4 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info4p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img5 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad5 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info5p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img6 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad6 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info6p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img7 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad7 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info7p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img8 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad8 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info8p1 + "</p>";
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
                $("#informacion").html(item.informacion)
            }
        })
        
    })
}

function vicente(){
    $.ajax({
        mehtod: "GET",
        url: "../json/DataInfo.json",
    }).then(function (data){

        data.forEach(function (item){
            console.log(item);
            if(item.id === 14){
                imagen.src = item.imagen;
                historia =  "<p>" + item.infoh1 + "</p>";
                
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
                li1+= "<li>" + item.ll2 + "</li>";
                li1+= "<li>" + item.ll3 + "</li>";
                li1+= "<li>" + item.ll4 + "</li>";
                li1+= "<li>" + item.ll5 + "</li>";

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
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img4 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad4 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info4p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img5 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad5 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info5p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img6 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad6 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info6p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img7 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad7 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info7p1 + "</p>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "</div>";
                celebridad += "<div class='card mb-3' style='max-width: 500px; margin: 2%;'>";
                celebridad += "<div class='row g-0'>";
                celebridad += "<div class='col-md-4'>";
                celebridad += "<img src='" + item.img8 + "' class='img-fluid rounded-start' alt='...'>";
                celebridad += "</div>";
                celebridad += "<div class='col-md-8'>";
                celebridad += "<div class='card-body'>";
                celebridad += "<h5 class='card-title'>" + item.celebridad8 + "</h5>";
                celebridad += "<p class='card-text'>" + item.info8p1 + "</p>";
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
                $("#informacion").html(item.informacion)
            }
        })
        
    })
}