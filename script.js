function toggleMenu(){
    document.getElementById("nav").classList.toggle("show");
}

function showImages() {
    document.getElementById("image-gallery").style.display = "flex";
    document.getElementById("video-gallery").style.display = "none";
}

function showVideos() {
    document.getElementById("image-gallery").style.display = "none";
    document.getElementById("video-gallery").style.display = "flex";
}
