function toggleNote(id) {
    var note = document.getElementById(id);

    if (note.style.display === "block") {
        note.style.display = "none";
    } else {
        note.style.display = "block";
    }
}