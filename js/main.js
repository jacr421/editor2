function getE(a) {
    return document.getElementById(a);
}

function getC(a) {
    return document.getElementsByClassName(a);

}
var editor = document.forms['editor'];

editor.btn_bold.onclick = function () { //жирність

    if (getE('text').style.fontWeight === '800')
        getE('text').style.fontWeight = '400';
    else
        getE('text').style.fontWeight = '800';
}
editor.btn_italic.onclick = function () { //курсив

    if (getE('text').style.fontStyle === 'italic')
        getE('text').style.fontStyle = 'normal';
    else
        getE('text').style.fontStyle = 'italic';
}
editor.btn_underline.onclick = function () { // підкреслення 

    if (getE('text').style.textDecoration === 'underline')
        getE('text').style.textDecoration = 'none';
    else
        getE('text').style.textDecoration = 'underline';
}
editor.fontSize.onchange = function () { //розмір шрифта
    for (var i = 0; i < editor.fontSize.length; i++) {
        if (editor.fontSize.options[i].selected)
            getE('text').style.fontSize = editor.fontSize.value;
    }
}
editor.fontFamily.onchange = function () { //шрифт
    for (var i = 0; i < editor.fontFamily.length; i++) {
        if (editor.fontSize.options[i].selected)
            getE('text').style.fontFamily = editor.fontFamily.value;
    }
}

editor.btn_bgc.onclick = function () { //вибір кольору
    getE('colors_wrap').style.display = 'block';
    getE('bgi_wrap').style.display = "none";
    getE('btn_bg').style.display = 'block'
    getE('colors').style.height = '200px';
    var colors = [
        'red',
        'blue',
        'orange',
        'black',
        'white',
        'yellow',
        'grey',
        'purple',
        'green'
    ]
    getE('colors').onclick = function () {
        for (let i = 0; i < getC('color').length; i++) {
            getC('color')[i].onclick = function () {
                getE('text').style.backgroundImage = '';
                getE('text').style.backgroundColor = colors[i];
                getE('colors_wrap').style.display = 'none';
            }
        }
    }

    //getC('color')[0].onclick = function () {
    //    getE('text').style.backgroundImage = '';
    //    getE('text').style.backgroundColor = 'red';
    //    getE('colors_wrap').style.display = 'none';
    //}
    //
    //getC('color')[1].onclick = function () {
    //    getE('text').style.backgroundImage = '';
    //    getE('text').style.backgroundColor = 'blue'
    //    getE('colors_wrap').style.display = 'none';
    //}
    //getC('color')[2].onclick = function () {
    //    getE('text').style.backgroundImage = '';
    //    getE('text').style.backgroundColor = 'orange'
    //    getE('colors_wrap').style.display = 'none';
    //}
    //getC('color')[3].onclick = function () {
    //    getE('text').style.backgroundImage = '';
    //    getE('text').style.backgroundColor = 'black'
    //    getE('colors_wrap').style.display = 'none';
    //}
    //getC('color')[4].onclick = function () {
    //    getE('text').style.backgroundImage = '';
    //    getE('text').style.backgroundColor = 'white'
    //    getE('colors_wrap').style.display = 'none';
    //}
    //getC('color')[5].onclick = function () {
    //    getE('text').style.backgroundImage = '';
    //    getE('text').style.backgroundColor = 'yellow'
    //    getE('colors_wrap').style.display = 'none';
    //}
    //getC('color')[6].onclick = function () {
    //    getE('text').style.backgroundImage = '';
    //    getE('text').style.backgroundColor = 'grey'
    //    getE('colors_wrap').style.display = 'none';
    //}
    //getC('color')[7].onclick = function () {
    //    getE('text').style.backgroundImage = '';
    //    getE('text').style.backgroundColor = 'purple'
    //    getE('colors_wrap').style.display = 'none';
    //}
    //getC('color')[8].onclick = function () {
    //    getE('text').style.backgroundImage = '';
    //    getE('text').style.backgroundColor = 'green'
    //    getE('colors_wrap').style.display = 'none';
    //}
}
getE("colors_wrap").onclick = function () { //blur для кольорів
    this.style.display = 'none';
}
editor.btn_c.onclick = function () { //вибір кольору
    getE('colors_wrap').style.display = 'block';
    getE('colors').style.height = '170px';
    getE('btn_bg').style.display = 'none'
    getE('bgi_wrap').style.display = "none";

    var colors = [
        'red',
        'blue',
        'orange',
        'black',
        'white',
        'yellow',
        'grey',
        'purple',
        'green'
    ]
    getE('colors').onclick = function () {
        for (let i = 0; i < getC('color').length; i++) {
            getC('color')[i].onclick = function () {
                getE('text').style.color = colors[i];
                getE('colors_wrap').style.display = 'none';
            }
        }
    }
    //    getC('color')[0].onclick = function () {
    //        getE('text').style.color = 'red'
    //        getE('colors_wrap').style.display = 'none';
    //    }
    //    getC('color')[1].onclick = function () {
    //        getE('text').style.color = 'blue'
    //        getE('colors_wrap').style.display = 'none';
    //    }
    //    getC('color')[2].onclick = function () {
    //        getE('text').style.color = 'orange'
    //        getE('colors_wrap').style.display = 'none';
    //    }
    //    getC('color')[3].onclick = function () {
    //        getE('text').style.color = 'black'
    //        getE('colors_wrap').style.display = 'none';
    //    }
    //    getC('color')[4].onclick = function () {
    //        getE('text').style.color = 'white'
    //        getE('colors_wrap').style.display = 'none';
    //    }
    //    getC('color')[5].onclick = function () {
    //        getE('text').style.color = 'yellow'
    //        getE('colors_wrap').style.display = 'none';
    //    }
    //    getC('color')[6].onclick = function () {
    //        getE('text').style.color = 'grey'
    //        getE('colors_wrap').style.display = 'none';
    //    }
    //    getC('color')[7].onclick = function () {
    //        getE('text').style.color = 'purple'
    //        getE('colors_wrap').style.display = 'none';
    //    }
    //    getC('color')[8].onclick = function () {
    //        getE('text').style.color = 'green'
    //        getE('colors_wrap').style.display = 'none';
    //    }
}

getE('btn_bg').onclick = function () {
    getE('bgi_wrap').style.display = "block";
    getC('image')[0].onclick = function () {
        getE('text').style.backgroundImage = 'url(../img/1.jpg) ';
        getE('colors_wrap').style.display = 'none';
    }
    getC('image')[1].onclick = function () {
        getE('text').style.backgroundImage = 'url(../img/2.jpg) ';
        getE('colors_wrap').style.display = 'none';
    }

    getC('image')[2].onclick = function () {
        getE('text').style.backgroundImage = 'url(../img/3.jpg) ';
        getE('colors_wrap').style.display = 'none';
    }

    getC('image')[3].onclick = function () {
        getE('text').style.backgroundImage = 'url(../img/4.jpg) ';
        getE('colors_wrap').style.display = 'none';
    }

    getC('image')[4].onclick = function () {
        getE('text').style.backgroundImage = 'url(../img/5.jpg) ';
        getE('colors_wrap').style.display = 'none';
    }

    getC('image')[5].onclick = function () {
        getE('text').style.backgroundImage = 'url(../img/6.jpg) ';
        getE('colors_wrap').style.display = 'none';
    }

    getC('image')[6].onclick = function () {
        getE('text').style.backgroundImage = 'url(../img/7.jpg) ';
        getE('colors_wrap').style.display = 'none';
    }

    getC('image')[7].onclick = function () {
        getE('text').style.backgroundImage = 'url(../img/8.jpg) ';
        getE('colors_wrap').style.display = 'none';
    }

    getC('image')[8].onclick = function () {
        getE('text').style.backgroundImage = 'url(../img/9.jpeg) ';
        getE('colors_wrap').style.display = 'none';
    }


}

var textAlign = document.forms['texAlign'];

getC('texAlign')[0].onclick = function () {
    getE('text').style.textAlign = 'left';
}
getC('texAlign')[1].onclick = function () {
    getE('text').style.textAlign = 'center';
}
getC('texAlign')[2].onclick = function () {
    getE('text').style.textAlign = 'right';
}

getE("bgi_wrap").onclick = function () { //blur для background imange
    this.style.display = 'none';

}
getE('btn_file').onchange = function () {

    getE('text').style.backgroundImage = 'url' + '(' + URL.createObjectURL(event.target.files[0]) + ')';

}
editor.btn_edit.onclick = function () {
    getE('edit').style.display = 'block'
    getE('container').style.display = 'none'
    getE("textArea").value = getE('text').innerHTML;
}
var editor2 = document.forms['editor2'];
editor2.btn_ct.onclick = function () {
    getE('wrap_dataTable').style.display = 'block'
}
editor2.btn_save.onclick = function () {
    getE('edit').style.display = 'none'
    getE('container').style.display = 'block'
    getE('text').innerHTML = getE('textArea').value;
}
var form_table = document.forms['form_table'];
//створення таблиці
form_table.btn_create.onclick = function () {
    getE('wrap_dataTable').style.display = 'none';
    getE('textArea').value += '<table style=" border:' + form_table.thickness.value + 'px solid ' + form_table.borderColor.value + ';" > '
    for (var i = 0; i < form_table.row.value; i++) {
        getE('textArea').value += '<tr>'
        for (var j = 0; j < form_table.col.value; j++) {
            getE('textArea').value += '<td style=" width:' + form_table.width.value + 'px; height:' + form_table.height.value + 'px;border:' + form_table.thickness.value + 'px solid ' + form_table.borderColor.value + ';"></td>'
        }
        getE('textArea').value += '<tr>'
    }
    getE('textArea').value += '</table>'
}
//кнопка reset
form_table.btn_reset.onclick = function () {
    form_table.row.value = '';
    form_table.col.value = '';
    form_table.width.value = '';
    form_table.height.value = '';
    form_table.cellspace.value = '';
    form_table.thickness.value = '';
    form_table.borderColor.value = '';
}
editor2.btn_cl.onclick = function () {
    getE('wrap_dataList').style.display = 'block'
}
var form_list = document.forms['form_list'];
var typeList = form_list.typelist[0].value;
var listStyleType = 'circle';
form_list.typelist[1].onclick = function () {
    getE('ol').style.display = 'block';
    getE('ul').style.display = 'none';
    form_list.ol.onchange = function () {
        for (var i = 0; i < form_list.ol.length; i++) {
            if (form_list.ol.options[i].selected) {
                listStyleType = form_list.ol.options[i].value;
            }
        }
    }
}
form_list.typelist[0].onclick = function () {
    getE('ol').style.display = 'none';
    getE('ul').style.display = 'block';
    form_list.ul.onchange = function () {
        for (var i = 0; i < form_list.ol.length; i++) {
            if (form_list.ul.options[i].selected) {
                listStyleType = form_list.ul.options[i].value;
            }
        }
    }
}

form_list.btn_create.onclick = function () {
    getE('wrap_dataList').style.display = 'none';
    getE('textArea').value += '<' + typeList + ' style="list-style-type: ' + listStyleType + ';">'
    for (var i = 0; i < form_list.count.value; i++) {
        getE('textArea').value += '<li>some text</li>'
    }
    getE('textArea').value += '</' + typeList + '>'
}
