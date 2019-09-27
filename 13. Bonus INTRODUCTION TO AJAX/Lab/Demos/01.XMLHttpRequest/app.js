function loadRepos() {
    const req = new XMLHttpRequest();

    //State  Description
    //0      The request is not initialized
    //1      The request has been set up
    //2      The request has been sent
    //3      The request is in process
    //4      The request is complete
    req.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById('res').textContent = this.responseText;
        }
    };

    //true is for async
    req.open("GET", "https://api.github.com/users/testnakov/repos", true);
    req.send();
}