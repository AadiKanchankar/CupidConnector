
const pickupLines = [
  "Are you French? Because Eiffel for you",
  "Do you have a name, or can I call you mine?",
  "Are you a magician? Because whenever I look at you, everyone else disappears",
  "Is your name Google? Because you have everything I’ve been searching for",
  "You must be made of copper and tellurium because you're Cu-Te",
  "Your smile must be a black hole, nothing can escape its pull",
  "If kisses were snowflakes, I'd send you a blizzard",
  "I must be a snowflake, because I've fallen for you",
  "Are you French? Because Eiffel for you",
  "You're like a dictionary; you add meaning to my life",
  "Are you made of stardust? Because you light up my universe",
  "Do you have a map? I keep getting lost in your eyes",
  "Your beauty blinds me; I'm going to need sunglasses around you",
  "You must be an artist, because you're painting smiles all over my face",
  "Are you a magician? Because every time I look at you, everyone else disappears",
  "Are you Wi-Fi? Because I'm feeling a connection",
  "Do you have a name or can I call you mine?",
  "You’re hotter than a jalapeño and twice as spicy",
  "I must be a snowflake because you just made me melt",
  "Are you a campfire? Because you’re hot and I want s’more",
  "On a scale from one to 10, you're a 9, and I'm the 1 you need",
  "I was blinded by your beauty… I’m going to need your name and number for insurance purposes",
  "Are you made of flames? Because you’re heating up my world",
  "If beauty were time, you'd be an eternity",
  "Is your name Google? Because you have everything I’ve been searching for",
  "Do you have a Band-Aid? Because I just scraped my knee falling for you",
  "Are we in the same CPU? Because we’re processing some serious chemistry",
  "You must be a time traveler because I see you in my future",
  "You had me at your impeccable use of semicolons",
  "I must be a battery because you’ve just charged me up",
  "Are you a black hole? Because you just sucked me in",
  "If I were to rewrite the periodic table, I’d put U and I together",
  "Are you a keyboard? Because you’re just my type",
  "Do you know why I'm like the Wi-Fi? Because I feel a strong connection when you’re near",
  "Are you made of candy? Because you’re sweet and I can’t resist",
  "Do you believe in love at first sight, or should I walk by again?",
  "Are you Netflix? Because I could watch you for hours",
  "If you were a fruit, you'd be a fineapple",
  "If looks could kill, you'd be a weapon of mass destruction",
  "Your lips look lonely. Would they like to meet mine?",
  "Do you have a mirror in your pocket? Because I can see myself in your pants",
  "Is your aura made of glitter? Because you light up my whole day",
  "Are you a parking ticket? Because you’ve got FINE written all over you",
  "Are you good at algebra? Because you just made my X disappear",
  "Are you a magician? Because whenever I look at you, everyone else disappears",
  "Your hand looks heavy—can I hold it for you?",
  "Do you have a sunburn, or are you always this hot?",
  "I didn’t know what perfect was until I met you",
  "If you were a vegetable, you’d be a cutecumber",
  "You’re like my morning coffee—hot and essential",
  "Are you a star? Because your beauty lights up the night",
  "Do you have a pencil? Because I want to erase your past and write our future",
  "If you were a flower, you’d be a sunflower, because you brighten up my day",
  "You make the stars look dim.",


  // Add more pickup lines or fetch them from CSV
];

document.getElementById("generate-button").addEventListener("click", generatePickupLine);

function generatePickupLine() {
  // Pick a random pickup line from the array
  const randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];

  // Clear the current text before typing out the new one
  document.getElementById("pickup-line").textContent = '';

  // Call the typewriter effect
  typewriterEffect(randomLine);
}

function typewriterEffect(line) {
  const element = document.getElementById("pickup-line");
  let index = 0;

  function type() {
    if (index < line.length) {
      element.textContent += line.charAt(index);
      index++;
      setTimeout(type, 40); // Adjust speed here (in milliseconds)
    }
  }

  type(); // Start the typing effect
}

