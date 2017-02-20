(function() {
    function AlbumCtrl(Fixtures, SongPlayer) {
    	var album = this;

    	album.albumData = Fixtures.getAlbum();
    	album.songPlayer = SongPlayer;

    }
 
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();