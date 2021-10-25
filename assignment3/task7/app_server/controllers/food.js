const foodlist = function (req, res) {
  res.render("foodlist", {
    title: "Punjabi Tadka, Authentic Vegetarian Resturant - List",
    title_content: "Food List",
    tagline: "Here is a list of food we are serving today",
    foodArray: [
      {
        name: "Dal Makhani",
        type: "Lunch",
        price: "3.25",
        rating: 4,
        image: '/images/dal.jpeg',
        description: "Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils (known as Urad dal or Kaali Dal in Hindi) and Kidney Beans (known as Rajma in Hindi)"
      },
      {
        name: "Gobi Parantha",
        type: "Breakfast",
        price: "2.25",
        rating: 5,
        image: '/images/parantha.jpeg',
        description: "This delicious Gobi Paratha is a recipe that you will make again and again. Also known as Cauliflower paratha, these unleavened whole wheat flatbreads are stuffed with a savory, spiced grated cauliflower filling. Being one of the most popular Punjabi paratha recipes, Gobi paratha is loved by many folks. "
      },
      {
        name: "Chole Bhature",
        type: "Breakfast",
        price: "1.25",
        rating: 4,
        image: '/images/bhature.jpeg',
        description: "Chole Bhature also known as Chana Bhatura is one of the most popular Punjabi dish liked almost all over India. Chole stands for a spiced tangy chickpea curry and Bhatura is a soft and fluffy fried leavened bread."
      },
      {
        name: "Kadai Paneer",
        type: "Lunch",
        price: "3.25",
        rating: 4,
        image: '/images/kadai-paneer.jpeg',
        description: "Kadai Paneer is a popular paneer recipe where paneer and bell peppers are cooked in a spicy masala. It is one of the most popular paneer recipes. It’s there on the menu in almost all Indian restaurants. I remember always ordering it when we ate out."
      },
      {
        name: "Chana Masala",
        type: "Dinner",
        price: "3.25",
        rating: 5,
        image: '/images/chana-masala.jpeg',
        description: "It’s a popular dish throughout India and Pakistan, with recipes varying by region. And it’s also gained popularity around the world. The following is our inspired version resembling what we’ve tasted in restaurants."
      },
      {
        name: "Palak Paneer",
        type: "Dinner",
        price: "3.00",
        rating: 5,
        image: '/images/palak-paneer.jpeg',
        description: "Palak Paneer is one of the most popular paneer dishes. Paneer (Indian cottage cheese) is cooked with spinach and spices in this creamy and flavorful curry."
      },
    ]
  });
};

const favouriteFood = function (req, res) {
  res.render("favourite-food", {
    title: "Punjabi Tadka, Authentic Vegetarian Resturant - Favourite",
    title_content: "Favourite Food",
    favourite: {
      food: "Kadai Paneer",
      image: "/images/kadai-paneer.jpeg"
    },
    reviews:[
      {
          author: 'Yashasvi kadam',
          rating: 5,
          timestamp: '22 September 2021',
          reviewText: 'love the recipe. Yum'
      },
      {
          author: 'Natasha Roman',
          rating: 4,
          timestamp: '10 September 2021',
          reviewText: 'yummy....... I liked it so much. Thanq mam for this yummy recepie.'
      },
      {
          author: 'Joe',
          rating: 5,
          timestamp: '10 September 2021',
          reviewText: 'A very tasty gravy. I substituted the paneer with mixed vegetables and that also tastes amazing.'
      },
      {
          author: 'Baljit',
          rating: 4,
          timestamp: '10 September 2021',
          reviewText: 'This is an aromatic dish, with rich spicy flavour and taste. I loved taking in the flavours of the spice as I was cooking it. The ingredients complement Paneer beautifully, except for Cardamom which I thought overshadowed the flavour of the dhania powder and the garam masala. This could, of course, be attributed to personal choice. But I would give cardamom a miss the next time. Overall, this fragrant dish is true to the spirit of Indian cuisine - spicy and rich, yet fairly simple to cook!'
      },

  ]
  });
};

module.exports = {
  foodlist,
  favouriteFood,
};
