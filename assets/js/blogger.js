function getData() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange =
        function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {     //If response is Okay
                var myArr = JSON.parse(xmlhttp.responseText);           //Parse response to JSON data
                myFunction(myArr);                                      //Call Function to write to document
            } else {
                document.getElementById('myDiv').innerHTML = "<strong>Waiting for server response...</strong>";
            }
        };
    xmlhttp.open("GET", "https://www.googleapis.com/blogger/v3/blogs/3513037851722797981/posts?key=AIzaSyDhWlM0FPbDaKtMbjL-mW8kfWsqZ5Mz6nE", true);
    xmlhttp.send();
    function myFunction(arr) {
        var i, data, name, title, content, date;
        data = arr;
        var myDiv = document.getElementById("myDiv");
        myDiv.innerHTML = '';
        for (i = 0; i < data.items.length; i++) {
            console.log(data.items[i]);
            name = data.items[i].author.displayName;
            title = data.items[i].title;
            content = data.items[i].content;
            date = data.items[i].published;
            myDiv.innerHTML += '<div class="blog-entry" id="blog-entry-' + i + '"><div class="title">' + title + '</div><div class="blog-content-wrapper">' + content + '</div><div id="blog-properties"><div id="name">Posted By: ' + name + '</div><div id="datePosted">' + date + '</div></div>';
        }
    }
}