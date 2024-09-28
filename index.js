var btn = document.getElementById("btn");
var text;
var counter=1;
btn.addEventListener("click",function(){
     text = document.getElementById("screen").value;
     if(text.trim() === ""){
        alert("Please Enter Some Text!");
     }
     else{
     var h1 = document.createElement('h1');
     h1.id="newText";
     var btn1= document.createElement('button');
     btn1.id="delete-btn";
     btn1.textContent="Remove";
    h1.textContent=` ${counter}: ${text}`;
    document.getElementById("parent-div").append(h1,btn1);
    document.getElementById("screen").value = "";
}
    btn1.addEventListener("click",function(){
        h1.remove();
        btn1.remove();
        counter=1;
    })
    counter++;
})