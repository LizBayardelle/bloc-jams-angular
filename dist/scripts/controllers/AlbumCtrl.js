(function() {
    function AlbumCtrl(Fixtures) {
    	var album = this;

    	album.albumData = Fixtures.getAlbum();

    }
 
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();