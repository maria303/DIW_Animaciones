/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $('.girar').on('click', function () {
        //toggleClass
        $(".imagen").addClass("rotar");
    });
    
    $('.reset').on('click', function(){
        $('.imagen').removeClass('rotar');
    });
    
    $('.btnSkew').on('click', function(){
        $('.imagen').addClass('skew');
    });
    
    $('.resetSkew').on('click', function(){
        $('.imagen').removeClass('skew');
    });
    
    $('.btnScale').on('click', function(){
        $('.imagen').addClass('scale');
    });
    
    $('.btnResetScale').on('click', function(){
        $('.imagen').removeClass('scale');
    });
    
    $('.btnRotate3D').on('click', function(){
        $('.imagen').addClass('rotate3D');
    });
    
    $('.btnResetRotate3D').on('click', function(){
        $('.imagen').removeClass('rotate3D');
    });
    
});