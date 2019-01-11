/* global $ */

// BELOW Update the songs array with four of your favorites songs.
// 
var songs = ["https://open.spotify.com/track/10VBBaul4zVD0reteuIHM2",
"Lavender and Velvet", "Best I Ever Had", "Work Out"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

var images_links = ["http://rumorfix.com/wp-content/uploads/2014/09/JheneAiko.gif", "https://images-na.ssl-images-amazon.com/images/I/510zyGKPy8L._SS500.jpg","http://d2lubch9d26anb.cloudfront.net/cdn/farfuture/ugHImp-w9e4MkhtHe15ysJhZd3dYq8Vym75PZC0YgWU/mtime:1529833628/sites/default/files/styles/album_artwork__300x300_/public/1200x630bb_351.jpg?itok=e40P-7oW", "https://i.scdn.co/image/bd940d8f4f83d7d6c001138cb66277c815101055"];
var artists= ["Drake, Jhene Aiko", "Alina Baraz", "Drake", "J. Cole"];
var songLengths= ["5:22", "3:49", "4:18", "3:54"];





    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
