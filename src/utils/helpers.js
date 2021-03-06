 export function openTab(tabName) {

    console.log("[Helpers] openTab: " + tabName);

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // de-activating all tabs
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";

    // activating the button for selected tab
    var btn = document.getElementById("btn_" + tabName);
    btn.className += " active";
    
  }