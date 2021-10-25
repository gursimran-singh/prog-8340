const homePage = function(req, res){
  res.render('index', {
    title: "HomePage",
    welcome: "Welcome to BlockBuster Movie store",
    content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis lectus vitae purus cursus porta. Nam eget ligula arcu. Nullam risus diam, tempus vitae condimentum vel, porttitor nec quam. Ut ornare, libero in tempor consectetur, purus nisl aliquam ex, vel interdum orci magna vitae erat. Donec laoreet ante venenatis ultrices euismod. Suspendisse eu ullamcorper lacus. Nullam ullamcorper nec mi vel convallis. Praesent quis diam vel enim tempus luctus. Proin hendrerit hendrerit lacus eu posuere. Curabitur accumsan sapien vitae turpis fermentum aliquam. Donec laoreet pretium orci laoreet scelerisque.</p>
    <p>Morbi ullamcorper lacus sed arcu facilisis dictum. Nunc at commodo odio. Mauris blandit mauris finibus arcu vestibulum, id ullamcorper metus pretium. Nunc imperdiet tincidunt accumsan. Integer a fringilla nisi, sed elementum turpis. Nam dictum malesuada tincidunt. Quisque congue tristique urna, quis suscipit justo semper vel. Integer id neque dui. Duis quis est ac nunc vulputate ullamcorper.</p>
    <p>Phasellus ex metus, finibus sit amet volutpat a, luctus a lectus. Proin neque nunc, ultricies a felis et, tempus tempor sem. Curabitur non scelerisque sapien, sit amet luctus nunc. Praesent at mi rhoncus, mattis ligula sit amet, auctor felis. Etiam sit amet vestibulum tortor, interdum lacinia purus. Aliquam fermentum vel metus fringilla vehicula. Nullam volutpat, dolor sit amet euismod lobortis, lacus sem cursus nisi, eget sodales lacus magna sed arcu. Proin vel velit sodales, tempor tortor in, vehicula mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`
  });
};

const aboutPage = function (req, res) {
  res.render("about.pug", {
    title: "About the site!!",
    about1: {
      h1: "Enjoy on your TV.",
      h2: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: "about1.png"
    },
    about2: {
      h1: "Download your shows to watch offline.",
      h2: "Save your favorites easily and always have something to watch.",
      image: "about2.jpeg"
    },
    about3: {
      h1: "Watch everywhere.",
      h2: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
      image: "about3.png"
    },
  });
};

module.exports = {
  aboutPage,
  homePage
};
