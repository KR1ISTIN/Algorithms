// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

const mostSongsInPlaylist = function(arr) {
 
    const sortArr = arr.sort();
    // need something to keep track of number of songs
    let totalSongs = 0;
    // need to keep track of total minutes thats being added
    let totalMins = 0;
  
    for(let i = 0; i <= sortArr.length; i++) {
      //current song for ea loop
      const currSong = sortArr[i];
      //console.log(currSong);
  
      // if current song or num iplus the updated total is less than 60...
      if (currSong + totalMins <= 60) {
        console.log(currSong, totalMins)
        totalMins += currSong;
        totalSongs++;
      } else {
        return console.log(totalSongs, 'total songs')
      }
    }
  };
  
  mostSongsInPlaylist([2,3,4,2,5,6,2,3,40]);