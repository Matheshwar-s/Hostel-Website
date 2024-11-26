let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
        let io=n;
        let rate="";
        if(io== 1){
            rate="\<span\>&#9733;&#9734;&#9734;&#9734;&#9734;\</span\>";
        }else if(io==2){
            rate="\<span\>&#9733;&#9733;&#9734;&#9734;&#9734;\</span\>";
        }else if(io==3){
            rate="\<span\>&#9733;&#9733;&#9733;&#9734;&#9734;\</span\>";
        }else if(io==4){
            rate="\<span\>&#9733;&#9733;&#9733;&#9733;&#9734;\</span\>";
        }else if(io==5){
            rate="\<span\>&#9733;&#9733;&#9733;&#9733;&#9733;\</span\>";
        }
        document.getElementById("legend").innerHTML=rate;

    }
    output.innerText = "Rating is: " + n + "/5";
}
 
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}
function addfeedback(){
    let name= document.getElementById("username");
    var today = new Date();
    var displayDate = today.toLocaleDateString();
    let feed=document.getElementById("feedbackarea");
    let review=document.getElementById("legend").innerHTML;
    if (feed.value != null && feed.value.trim() != "") {
        console.log("New recommendation added");
        showPopup(true);
    }
    let element = document.createElement("div");
      element.setAttribute("class","feed");
      element.innerHTML ="\<span\>"+displayDate+"\<span\>\<br\>\<br\>\<span\>&#8220;\</span\>" + feed.value + "\<span\>&#8221;\</span\>- "+name.value+"\<br\>"+review;
                    document.getElementById("feedback").appendChild(element);
                    feed.value = ""; 
                    name.value="";
}
function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }