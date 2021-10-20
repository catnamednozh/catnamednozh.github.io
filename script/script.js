function openAudio() {
    document.getElementById("audio_entry").style.display = "block";
    document.getElementById("save").style.display = "block";
};

function openVideo() {
    document.getElementById("video_entry").style.display = "block";
    document.getElementById("save").style.display = "block";
};
function openImage() {
    document.getElementById("image_entry").style.display = "block";
    document.getElementById("save").style.display = "block";
};

function openText() {
    document.getElementById("text_entry").style.display = "block";
    document.getElementById("save").style.display = "block";
};

function openChatRequest() {
    document.getElementById("notification").style.display = "block";
}

function closeChatRequest() {
    document.getElementById("notification").style.display = "none";
}

function readMessage() {
    document.getElementById("message").style.display = "none";
    document.getElementById("envelope").style.display = "block";
}

$(document).ready(function () {

    $("#save").click(function () {
        document.getElementById("date1").style.backgroundColor = "red";
    });

    document.addEventListener('keydown', (event) => {
        var name = event.key;

        if (name == '=') {
            document.getElementById("envelope").style.display = "none";
            document.getElementById("message").style.display = "block";
        }
      }, false);
});