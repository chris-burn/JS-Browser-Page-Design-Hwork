var catsArray = [
{name: "Name: Boba", favFood: "Favourite Food: Sock Fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" },
{name: "Name: Barnaby", favFood: "Favourite Food: Tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg" },
{name: "Name: Max", favFood: "Favourite Food: Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg" },
{name: "Name: Jeff", favFood: "Favourite Food: Grapes", image: "http://static.boredpanda.com/blog/wp-content/uploads/2015/03/weird-cats-eaiting-human-food-71__700.jpg" },
{name: "Name: General Ginger Beefy", favFood: "Favourite Food: BERGERS", image: "http://static.boredpanda.com/blog/wp-content/uploads/2015/03/weird-cats-eaiting-human-food2__700.jpg" },
{name: "Name: Battlecat", favFood: "Favourite Food: Clawful. COME GET A TASTE...", image: "http://img.cinemablend.com/cb/0/e/9/8/2/4/0e9824afa73216283537019cc282426a02609b6ffa48fccd5cb5484c427d03dd.jpg" },
{name: "Name: Baxter", favFood: "Favourite Food: Wheels of cheese", image: "https://cdn.theatlantic.com/assets/media/img/upload/wire/2013/12/17/Screen_Shot_2013_12_17_at_9.51.27_AM/lead_large.png?1473195202" }
];


var catMania = function(details){
  var catUl = document.createElement("ul")
  catUl.classList.add("cat");

  var list1 = document.createElement("li");
  list1.innerText = details.name;

  var list2 = document.createElement("li");
  list2.innerText = details.favFood;

  var pic = document.createElement("li");
  var image = document.createElement("img");
  image.src = details.image;
  image.width = 500; 

  pic.appendChild(image);
  catUl.appendChild(list1);
  catUl.appendChild(list2);
  catUl.appendChild(pic);

  var catList = document.getElementById("cats");
  catList.appendChild(catUl);

};


var app = function(){
  catsArray.forEach(catMania);
};

window.onload = app;