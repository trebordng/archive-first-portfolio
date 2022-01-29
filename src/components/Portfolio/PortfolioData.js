let portfolios = [
  {
    name: "Rethink: Plastic",
    id: 1,
    subtitle:
      "A mission of Da Nang Department of Tourism to improve people awareness about plastic.",
    description:
      "Da Nang is a city of Tourism. Therefore, keeping it clean and environment friendly is a must in order to attract tourists. In this mission, I was working mainly as a designer, using Photoshop in order to make design for banner, signature bin and catalogue. ",
    image1: require("./rethinkplastic/rethink1.png"),
    image2: require("./rethinkplastic/rethink2.png"),
    image3: require("./rethinkplastic/rethink3.png"),
    company: "Company: Da Nang Zero Waste Alliance, Vietnam.",
    time: "April 2018 - June 2019.",
  },
  {
    name: "Food Photography Portfolio",
    id: 2,
    subtitle:
      "Diep Tran Photography wants to expand their food photography section.",
    description:
      "Diep Tran Photography is a company at Nha Trang, Vietnam, which focuses on taking scenery photo. The food photography website is for them to upload their work of taking photo of food, drink, action and lifestyle. They also wants a blog, recipe section to share their experience. The website is done with Wix so it is easy for them to upload and maintain their work.",
    image1: require("./tranfoodphotography/tranfood1.png"),
    image2: require("./tranfoodphotography/tranfood2.png"),
    image3: require("./tranfoodphotography/tranfood3.png"),
    company: "Company: Diep Tran Photography, tranfoodphotography.com",
    time: "February 2021 - March 2021.",
  },
  {
    name: "React Project: Portfolio",
    id: 3,
    subtitle:
      "I want to make myself a portfolio website so it will fit best to what I am looking for.",
    description:
      "This website is made with React, HTML, CSS and React-Bootstrap.",
    image1: require("./selfportfolio/1.png"),
    image2: require("./selfportfolio/2.png"),
    image3: require("./selfportfolio/3.png"),
    company: "Self Portfolio",
    time: "January 2022 - January 2022.",
  },
  {
    name: "Centra Company",
    id: 4,
    subtitle:
      "Centra company was founded with the goal of supporting Australia's organizations to solve their IT challenges.",
    description:
      "During the time working at the company, I helped improve their service ticket template, referral webpage and design marketing catalogue as well as some internal-used banner.",
    image1: require("./centra/c1.png"),
    image2: require("./centra/c2.png"),
    image3: require("./centra/c3.png"),
    company: "Centra",
    time: "November 2021 - February 2021.",
  },
  
];

export function getPortfolios() {
  return portfolios;
}

export function getPortfolio(id) {
  return portfolios.find((portfolio) => portfolio.id === id);
}
