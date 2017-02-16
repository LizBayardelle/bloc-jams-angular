(function() {
    function AlbumCtrl(Fixtures) {
    	var album = this;

    	album.albumData = Fixtures.getAlbum();

    	album.songs = [];
	    for (var i=0; i < 4; i++) {
	        album.songs.push(angular.copy(albumPicasso));
	    }
    }
 
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();