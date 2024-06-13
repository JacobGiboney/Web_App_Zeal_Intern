var buttonUnlocker
function unlockButtons1() {
    buttonUnlocker = 1;

    unlockcheck()
} //when the number is iterated this will allow another js function to unlock the button on the mainpage

function unlockcheck() {
    // Get the buttons to be unlocked
    if(buttonUnlocker > 0){
        var button1 = document.getElementById("chal2");
        // Enable the buttons
        button1.disabled = false;
    }
}