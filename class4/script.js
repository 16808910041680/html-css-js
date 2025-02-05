function hi() {
    var i;
    for (i=0; i<2; i++) {
        if (i = 2) {
            i = 0;
        }
        alert("here's an alert. Yay.")
        i++
        setTimeout(hi, 10000)
        alert("here's another alert. Yay.")
        i++
    }
}