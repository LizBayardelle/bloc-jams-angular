(function() {
    function AlbumCtrl() {
    	var album = this;

    	album.albumData = angular.copy(albumPicasso);

    	album.songs = [];
	    for (var i=0; i < 4; i++) {
	        album.songs.push(angular.copy(albumPicasso));
	    }
    }
 
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();