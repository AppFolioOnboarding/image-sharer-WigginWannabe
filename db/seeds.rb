urls = [
  'http://i.imgur.com/Wz7d2Hy.jpg',
  'https://image.pbs.org/video-assets/x1WLcZn-asset-mezzanine-16x9-6kkb4dA.jpg',
  'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1379783002i/440146.jpg',
  'https://cdn.shopify.com/s/files/1/0818/6325/products/heart-shaped-diamond-2_1024x1024.jpg?v=1435164063',
  'https://www.gia.edu/images/polished-emerald-gem.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Geschliffener_blauer_Saphir.jpg/170px-Geschliffener_blauer_Saphir.jpg',
  'https://www.kerbalspaceprogram.com/wp-content/uploads/2019/08/Mercury_title_WebsiteBanners.jpg',
  'https://www.azonano.com/images/Article_Images/ImageForArticle_4983(1).jpg',
  'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/07/screen-shot-2019-07-09-at-3.15.31-pm.png',
  'https://natgeo.imgix.net/subjects/headers/shutterstock_276228476.jpg?auto=compress,format&w=1920&h=960&fit=crop',
  'https://twistedsifter.files.wordpress.com/2019/04/mystical-by-nei-burnell-2.jpg?w=800',
  'https://scx1.b-cdn.net/csz/news/800/2019/computation.jpg',
  'https://cdn.mos.cms.futurecdn.net/qqQFZdAYCDxMvVmyPGSubk.jpg',
  'https://i.ytimg.com/vi/jvR4h6NJsFU/hqdefault.jpg',
  'https://www.vippng.com/png/detail/300-3004094_killua-hunter-x-hunter-killua.png',
  'https://imgix.ranker.com/user_node_img/50089/1001774888/original/they-make-me-sick-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
  'https://i.pinimg.com/originals/65/f9/17/65f917b1d0cda8257e14af3a3338f6cb.jpg',
  'https://ib3.hulu.com/user/v3/artwork/9c91ffa3-dc20-48bf-8bc5-692e37c76d88?base_image_bucket_name=image_manager&base_image=d13c235d-7145-45ff-adaa-b99f79254521&size=400x600&format=jpeg',
  'https://thegodabovegod.com/wp-content/uploads/2016/03/gnostic-jesus-on-attack-on-titan.jpg',
  'https://i.ytimg.com/vi/0ipIm2wPOds/maxresdefault.jpg',
  'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/EchoLake_Huey_4000x2200.jpg?crop=0,0,4000,2200&wid=4000&hei=2200&scl=1.0',
  'https://www.smartfirefighting.com/wp-content/uploads/2016/09/Data-and-Computation_updated-2400x1799.jpg'
].each do |url|
  Image.create(url: url)
end