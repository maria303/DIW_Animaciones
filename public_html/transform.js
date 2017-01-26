/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var transform = {
    rotate: false,
    skew: false,
    scale: false
};

function modalToView() {
    var transformStyle = "";
    if (transform.rotate === true) {
        transformStyle += "rotate(50deg)";
    }
    if (transform.skew === true) {
        transformStyle += "skew(20deg,10deg)";
    }
    if (transform.scale === true) {
        transformStyle += "scale(0.5, 0.5)";
    }

    document.getElementById("imagen").style.transform = transformStyle;
}

function rotateScale() {
    transform.rotate = true;
    transform.scale = true;
    modalToView();
}

function rotate() {
    transform.rotate = true;
    modalToView();
}

function resetRotate() {
    transform.rotate = false;
    modalToView();
}

function skew() {
    transform.skew = true;
    modalToView();
}

function resetSkew() {
    transform.skew = false;
    modalToView();
}

function scale() {
    transform.scale = true;
    modalToView();
}

function resetScale() {
    transform.scale = false;
    modalToView();
}