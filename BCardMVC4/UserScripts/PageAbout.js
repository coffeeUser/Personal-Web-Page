window.onload = function () {
    document.getElementById("career").onclick = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/UserContent/Career.html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    document.getElementById("aContent").innerHTML = xhr.responseText;
                }
            }
        }
        xhr.send();
    }
    document.getElementById("education").onclick = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/UserContent/Education.html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    document.getElementById("aContent").innerHTML = xhr.responseText;
                }
            }
        }
        xhr.send();
    }
    document.getElementById("hobbies").onclick = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/UserContent/Hobbies.html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    document.getElementById("aContent").innerHTML = xhr.responseText;
                }
            }
        }
        xhr.send();
    }
}
