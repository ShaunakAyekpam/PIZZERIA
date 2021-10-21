menu_list_array = ["Veg Margherita Pizza","Veg Pizza","Paneer Pizza","Pepperoni Pizza","Farm House","Garlic Bread","White sauce pasta"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ '<li>' +menu_list_array[i] + '</li>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<div class="card">' +'<img src="pizzaImg.png" style="width: 100px; height: 100px"/>' + menu_list_array[i] + '</div>'
        }
        htmldata=htmldata+"</section>"
        document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
