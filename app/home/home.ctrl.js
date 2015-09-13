class HomeCtrl {

  constructor(photoService) {
    this.photoService = photoService;
    this.grid = [];

    photoService.all().then(photos => this.grid = getGrid(photos));
  }
    
}

function getGrid(photos){
  var grid = [];

  var layouts = [
    { rs: 2, cs: 2},
    { rs: 1, cs: 2},
    { rs: 1, cs: 2}
  ];

  for(var i = 0; i < photos.length; i++) {
    var photo = photos[i];
    var layout = layouts[i] ? layouts[i] : { rs: 1, cs: 1};
    var title = photo.title.split(' ').slice(0, 3).join(' ');
    var gridTitle = {
      rowSpan: layout.rs,
      colSpan: layout.cs,
      imageUrl: photo.thumbnailUrl,
      title: title,
      id: photo.id
    };

    grid.push(gridTitle);
  }
}

export default HomeCtrl;