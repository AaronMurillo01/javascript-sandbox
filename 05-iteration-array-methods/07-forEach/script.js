const socials = ["Twitter", "Linkedin", "Facebook", "Instagram"];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//     console.log(item);
// });

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
  console.log(social);
}

// socials.forEach(logSocials);

const socialObj = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Linkedin", url: "https://linkedin.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Instagram", url: "https://instagram.com" },
];

socialObj.forEach((item) => console.log(item));