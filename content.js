try {
    // Remove sign in overlay
    var signIn_overlay = document.getElementsByClassName("css-5x99bu");
    signIn_overlay[0].parentNode.removeChild(signIn_overlay[0]);
    // Remove The black gradient overlay
    var black_gradient = document.getElementsByClassName("css-gx5sib");
    black_gradient[0].parentNode.removeChild(black_gradient[0]);
    // make it so that it can scroll
    var scroll_element = document.getElementsByClassName("css-mcm29f");
    scroll_element[0].className = "";
}
catch(err) {
    console.log("err");
}