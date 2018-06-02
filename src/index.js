const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

import App from "./App";
import style from "./css/main.scss";

console.log("helo")

dragElement(document.getElementById("maytinh"));

let GHIM_TOGGLE = true;
let SHOW_MAYTINH_TOGGLE = true;

let WIDTH_MY_DIV = 400;
let MARGIN = 0;

function dragElement(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let header = element.id + "header";
    // let header = "maytinhheader";
    if (document.getElementById(header)) {
        document.getElementById(header).onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;

        if (GHIM_TOGGLE == true) {
            document.onmouseup = closeDragElementWithGhim;
        } else {
            document.onmouseup = closeDragElementWithoutGhim;
        }

        document.onmousemove = elementDrag;
        nangcaoPositionHandle();
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
        nangcaoPositionHandle();
    }

    function closeDragElementWithGhim() {
        let width = window.innerWidth;
        let left = element.offsetLeft + element.offsetWidth / 2;
        // console.log(`Toa do cua element: 
        //             top: ${element.offsetTop}
        //             left: ${element.offsetLeft + WIDTH_MY_DIV / 2}`)

        if (left <= width / 2) {
            element.style.left = "0px";
        } else {
            element.style.left = (width - element.offsetWidth - MARGIN) + "px";
        }
        checkWidthHeight();
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function closeDragElementWithoutGhim() {
        checkWidthHeight();
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function checkWidthHeight() {
        // element.offsetTop: toạ độ phía trên máy tính 
        // element.offsetLeft: toạ độ bên trái của máy tính 
        let top = element.offsetTop;
        let left = element.offsetLeft;

        if (top < MARGIN) {
            element.style.top = "0px";

        } else if (top + element.offsetHeight + MARGIN > window.innerHeight) {
            // toạ độ trên + tổng chiều cao của máy tính + 10 so với chiều cao của browser 
            // thì toạ độ trên của máy tính = (chiều cao của sổ - chiều cao máy tinh - margin)
            element.style.top = (window.innerHeight - element.offsetHeight - MARGIN) + "px";
        }

        if (left < MARGIN) {
            element.style.left = "0px";
        } else if (left + element.offsetWidth + MARGIN > window.innerWidth) {
            // toạ độ trái + tổng chiều dài của máy tính + 10 so với chiều dài của browser 
            // thì toạ độ trái = (chiều dài của sổ - chiều dài máy tính - margin)
            element.style.left = (window.innerWidth - element.offsetWidth - MARGIN) + "px";
        }
        nangcaoPositionHandle();
    }

}

function checkWidthHeight_outsize(element) {
    // element.offsetTop: toạ độ phía trên máy tính 
    // element.offsetLeft: toạ độ bên trái của máy tính 
    let top = element.offsetTop;
    let left = element.offsetLeft;

    let width = window.innerWidth;
    let left_check = element.offsetLeft + element.offsetWidth / 2;
    if (left_check <= width / 2) {
        element.style.left = "0px";
    } else {
        element.style.left = (width - element.offsetWidth - MARGIN) + "px";
    }

    console.log(element.offsetWidth, element.offsetHeight)
    if (top < MARGIN) {
        element.style.top = "0px";
    } else if (top + element.offsetHeight + MARGIN > window.innerHeight) {
        // toạ độ trên + tổng chiều cao của máy tính + 10 so với chiều cao của browser 
        // thì toạ độ trên của máy tính = (chiều cao của sổ - chiều cao máy tinh - margin)
        element.style.top = (window.innerHeight - element.offsetHeight - MARGIN) + "px";
    }

    if (left < MARGIN) {
        element.style.left = "0px";
    } else if (left + element.offsetWidth + MARGIN > window.innerWidth) {
        // toạ độ trái + tổng chiều dài của máy tính + 10 so với chiều dài của browser 
        // thì toạ độ trái = (chiều dài của sổ - chiều dài máy tính - margin)
        element.style.left = (window.innerWidth - element.offsetWidth - MARGIN) + "px";
    }
    nangcaoPositionHandle();
}

/**
 * tất cả nangcao sẽ đi theo maytinh:
 * 1. maytinh bên trái thì nangcao bên phải 
 * 2. maytinh bên phải thì nangcao bên trái 
 * 3. maytinh bên dưới thì nangcao bên trên (với chiều ngang hẹp)
 * 4. maytinh bên trên thì nangcao bên dưới (với chiều ngang hẹp)
 */
function nangcaoPositionHandle() {
    let maytinh = document.getElementById("maytinh");
    let nangcao = document.getElementById("nangcao");

    // Kiểm tra maytinh trái, phải, trên, dưới để đặt nangcao;
    let mt_left = maytinh.offsetLeft;
    let mt_top = maytinh.offsetTop;
    let mt_width = maytinh.offsetWidth;
    let mt_height = maytinh.offsetHeight;
    let mt_where_width = mt_left + mt_width / 2;
    let mt_where_height = mt_top + mt_height / 2;
    let nc_heifht = nangcao.offsetHeight;

    // console.log("mt top: " + mt_top, "mt top: " + mt_left)
    // console.log("mt width: " + mt_width, "mt height: " + mt_height);

    // trường hợp width của browser quá nhỏ
    if (window.innerWidth > 767.98) {
        // trường hợp > 767.98 - medium size 
        nangcao.style.top = mt_top + "px";
        if (mt_where_width <= window.innerWidth / 2) {
            nangcao.style.left = mt_left + mt_width + "px";
            // console.log("left");
        } else {
            nangcao.style.left = mt_left - mt_width + "px";
            // console.log("right")
        }
    } else {
        // trường hợp <= 767.98 - medium size 
        nangcao.style.left = mt_left + "px";
        if (mt_where_height <= window.innerHeight / 2) {
            nangcao.style.top = mt_top + mt_height + "px";
            // console.log("May tinh on top")
        } else {
            nangcao.style.top = mt_top - nc_heifht + "px";
            // console.log("May tinh on bottom")
        }
    }
}
