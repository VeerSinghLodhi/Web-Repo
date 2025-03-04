
function getLanguage() {
    backgroun_color = new Array("aqua", "teal", "black", "red", "yellow");

    fortext = new Array("C language is a Procedural language", "C++ language is Object Oriented Programming language", "Java is also a Object Oriented Programming Language", "Python is also a Programming Language");

    switch (languages.selectedIndex) {
        case 1:
            document.getElementById('display').style.backgroundColor = backgroun_color[0];
            document.getElementById('display').style.textAlign = "center";
            document.getElementById('display').style.color = "#000000";
            document.getElementById('display').innerHTML = "<p>" + fortext[0] + "</p>";
            break;
        case 2:
            document.getElementById('display').style.backgroundColor = backgroun_color[2];
            document.getElementById('display').style.textAlign = "right";
            document.getElementById('display').style.color = "#ffffff";
            document.getElementById('display').innerHTML = "<p>" + fortext[1] + "</p>";
            break;
        case 3:
            document.getElementById('display').style.backgroundColor = backgroun_color[4];
            document.getElementById('display').style.textAlign = "left";
            document.getElementById('display').style.color = "#333";
            document.getElementById('display').innerHTML = "<p>" + fortext[2] + "</p>";
            break;
        case 4:
            document.getElementById('display').style.backgroundColor = backgroun_color[3];
            document.getElementById('display').style.textAlign = "center";
            document.getElementById('display').style.color = "#ffffff";
            document.getElementById('display').innerHTML = "<p>" + fortext[3] + "</p>";
            break;
    }
}