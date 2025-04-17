const pages = [1,2,3,4,5];
const cities = ['Paris','Kyoto','New York City','Sydney','Rio De Janeiro','Amsterdam','Rome','Lisbon','Bangkok','Reykjavik','Prague','Marrakech','Cape Town','Barcelona','Istanbul','Belgrade','Moscow','Beijing','Washington DC','Ankara'];
const citiesDesc = [
  'Paris, the capital of France, is renowned for its romantic charm, world-class art, and iconic landmarks. The Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral are just a few of the citys famous sights. Known as “The City of Light,” Paris offers a rich blend of history, fashion, and café culture.',
  'Kyoto is a historic city in Japan, known for its well-preserved temples, traditional wooden houses, and beautiful gardens. Once the capital of Japan, Kyoto is home to iconic landmarks such as the Fushimi Inari Shrine, Kinkaku-ji (the Golden Pavilion), and Arashiyama Bamboo Grove. The city offers a unique blend of ancient culture and modern life, making it a popular destination for tourists seeking to experience traditional Japan.',
  'New York City is one of the most iconic cities in the world, known for its skyline, cultural diversity, and nonstop energy. Its home to famous landmarks like the Statue of Liberty, Times Square, Central Park, and the Empire State Building. Often called “The City That Never Sleeps,” NYC offers endless opportunities for entertainment, business, and exploration.',
  'Sydney is a vibrant coastal city in Australia, famous for its stunning harbor, beautiful beaches, and iconic landmarks. The Sydney Opera House and Sydney Harbour Bridge are among its most recognizable attractions. With a mix of modern architecture and natural beauty, Sydney offers a laid-back yet cosmopolitan lifestyle.',
  'Rio de Janeiro is a vibrant city in Brazil, known for its stunning beaches, lively carnival, and the famous Christ the Redeemer statue. The city is surrounded by breathtaking landscapes, including Sugarloaf Mountain and Tijuca Forest. Rio is a cultural hub, offering a blend of music, dance, and natural beauty, making it a top destination for travelers from around the world.',
  'Amsterdam is the capital city of the Netherlands, famous for its picturesque canals, historic buildings, and vibrant art scene. The city is home to world-renowned museums like the Rijksmuseum, Van Gogh Museum, and Anne Frank House. Amsterdam is also known for its cycling culture, beautiful parks, and lively neighborhoods, making it a popular destination for tourists and locals alike.',
  'Rome is the capital of Italy and one of the most historically significant cities in the world. Known as "The Eternal City," it boasts iconic landmarks such as the Colosseum, the Roman Forum, and the Vatican City. With its ancient ruins, beautiful piazzas, and vibrant culture, Rome offers a unique blend of history, art, and modern life.',
  'Lisbon is the capital and largest city of Portugal, known for its rich history, stunning architecture, and vibrant cultural scene. The city is famous for its historic neighborhoods, such as Alfama and Bairro Alto, as well as iconic landmarks like the Belém Tower and the Jerónimos Monastery. Lisbons mild climate, beautiful waterfront, and lively atmosphere make it a popular destination for travelers from all over the world.',
  'Bangkok, the capital city of Thailand, is known for its vibrant street life, ornate temples, and bustling markets. The city is home to the stunning Grand Palace and the Wat Pho temple, which houses the famous Reclining Buddha. With its lively nightlife, diverse cuisine, and rich cultural heritage, Bangkok attracts millions of tourists each year. The citys unique blend of modernity and tradition makes it a dynamic and exciting destination.',
  'Reykjavik, the capital of Iceland, is a small yet vibrant city known for its stunning natural beauty and unique cultural scene. It is surrounded by breathtaking landscapes, including volcanic mountains, hot springs, and glaciers. Reykjavik is famous for its colorful buildings, the striking Hallgrímskirkja church, and its lively music and arts scene. The city serves as a gateway to exploring Icelands incredible outdoor wonders, such as the Blue Lagoon and the Golden Circle. Despite its small size, Reykjavik offers a rich history, a thriving food culture, and a welcoming atmosphere.',
  'Prague, the capital city of the Czech Republic, is a picturesque and historic destination, often referred to as the "City of a Hundred Spires" due to its beautiful skyline dominated by gothic and baroque architecture. The citys most iconic landmark is the Prague Castle, which overlooks the Vltava River and is home to the stunning St. Vitus Cathedral. The Old Town, with its charming narrow streets, the Astronomical Clock, and the historic Charles Bridge, attracts visitors from around the world. Prague is known for its rich cultural heritage, vibrant arts scene, and world-famous beer, making it a must-visit for anyone interested in history, architecture, and European charm.',
  'Marrakech, one of Moroccos most famous cities, is a vibrant blend of tradition and modernity. Known for its bustling souks (markets), historic palaces, and beautiful gardens, Marrakech offers a sensory overload of colors, scents, and sounds. The citys iconic Jemaa el-Fnaa square comes alive with street performers, food stalls, and merchants, while the Koutoubia Mosque stands tall as a symbol of the city. Marrakech is also home to stunning architectural gems like the Bahia Palace and the Saadian Tombs. With its rich history, lively atmosphere, and diverse culture, Marrakech is an enchanting destination that captures the essence of Morocco.',
  'Cape Town, located on the southern tip of South Africa, is a stunning coastal city known for its breathtaking natural beauty and vibrant culture. It is dominated by the iconic Table Mountain, offering panoramic views of the city and surrounding areas. Cape Town is famous for its pristine beaches, such as Camps Bay and Boulders Beach, home to a colony of African penguins. The city also boasts historical sites like Robben Island, where Nelson Mandela was imprisoned, and the colorful Bo-Kaap neighborhood. With its thriving arts scene, diverse cuisine, and access to outdoor adventures, Cape Town is a must-visit destination for nature lovers and culture enthusiasts alike.',
  'Barcelona, the capital of Catalonia in Spain, is a vibrant city renowned for its unique blend of modernist architecture, rich history, and Mediterranean charm. It is home to the famous works of architect Antoni Gaudí, including the awe-inspiring Sagrada Família and the whimsical Park Güell. Barcelonas historic Gothic Quarter, with its narrow alleys and medieval buildings, contrasts beautifully with the modernist designs scattered throughout the city. The city also offers beautiful beaches along the Mediterranean coast, a bustling food scene, and lively nightlife. With its mix of culture, art, and stunning landscapes, Barcelona is a dynamic and exciting destination.',
  'Istanbul, Turkeys largest city, is a captivating blend of history, culture, and modernity. Straddling two continents, Europe and Asia, it has been a crossroads of civilizations for centuries. The citys most famous landmarks include the Hagia Sophia, a stunning architectural masterpiece that has served as a church, mosque, and museum, and the magnificent Topkapi Palace, home to Ottoman sultans. The Blue Mosque, the bustling Grand Bazaar, and the Bosphorus Strait are also key attractions. Istanbuls vibrant food scene, rich cultural heritage, and diverse neighborhoods make it a fascinating destination, where the past and present coexist in perfect harmony.',
  'Belgrade, the capital of Serbia, is a dynamic and historically rich city located at the confluence of the River Sava and Danube. Known for its vibrant nightlife, the city has a unique energy, with numerous bars, clubs, and music venues. Belgrades history is reflected in landmarks like the Belgrade Fortress, which offers panoramic views of the rivers, and the stunning St. Sava Temple, one of the largest Orthodox churches in the world. The city also boasts cultural attractions such as museums, galleries, and historic neighborhoods. With its mix of old and new, Belgrade is a city that combines tradition with modern flair, making it an exciting destination for travelers.',
  'Moscow, the capital of Russia, is a city of grandeur, known for its historic landmarks like the Red Square, the Kremlin, and St. Basils Cathedral. Its a cultural hub, with world-class museums, theaters, and vibrant nightlife. The city blends rich history with modern development, offering a unique experience.',
  'Beijing, the capital of China, is a city steeped in history and culture. Famous for landmarks like the Great Wall, the Forbidden City, and the Temple of Heaven, it combines ancient traditions with modern architecture. Beijing is also known for its vibrant arts scene and delicious cuisine.',
  'Washington, D.C., the capital of the United States, is home to iconic landmarks like the White House, the U.S. Capitol, and the Lincoln Memorial. The city is a center of American politics and history, with numerous museums, monuments, and the National Mall.',
  'Ankara, the capital of Turkey, is a city with a mix of modernity and history. Known for the impressive Atatürk Mausoleum (Antkabir), it is a political and cultural hub. Ankara also offers vibrant markets, museums, and a growing arts scene.'
];

const imgNames = formatCities(cities);
let currPage = 1;

window.onload = function(){
  if(localStorage.getItem('currPage')){
    document.getElementsByTagName('button')[localStorage.getItem('currPage')].classList.add('active');
  }else{
    document.getElementsByTagName('button')[currPage].classList.add('active');
    localStorage.setItem('currPage', currPage);
  }
  generate();
}

function changePage(page){
  for(let i = 1; i<pages.length+1; i++){
    document.getElementsByTagName('button')[i].classList.remove('active');
  }
  document.getElementsByTagName('button')[page].classList.add('active');
  currPage = page;
  localStorage.setItem('currPage', currPage);
  generate();
}

function back(){
  for(let i = 0; i<pages.length+1; i++){
    document.getElementsByTagName('button')[i].classList.remove('active');
  }
  currPage = localStorage.getItem('currPage');
  currPage--;
  if(currPage<1){
    currPage = pages.length;
  }
  document.getElementsByTagName('button')[currPage].classList.add('active');
  localStorage.setItem('currPage', currPage);
  generate();
}

function next(){
  for(let i = 0; i<pages.length+1; i++){
    document.getElementsByTagName('button')[i].classList.remove('active');
  }
  currPage = localStorage.getItem('currPage');
  currPage++;
  if(currPage>5){
    currPage = 1;
  }
  document.getElementsByTagName('button')[currPage].classList.add('active');
  localStorage.setItem('currPage', currPage);
  generate();
}

function generate(){
  const container = document.getElementById('container');
  container.innerHTML = '';

  let startIndex = 0;
  let endIndex = 0;

  if(localStorage.getItem('currPage') === '1'){
    startIndex = 0;
    endIndex = 4;
  }else if(localStorage.getItem('currPage') === '2'){
    startIndex = 4;
    endIndex = 8;
  }else if(localStorage.getItem('currPage') === '3'){
    startIndex = 8;
    endIndex = 12;
  }else if(localStorage.getItem('currPage') === '4'){
    startIndex = 12;
    endIndex = 16;
  }else if(localStorage.getItem('currPage') === '5'){
    startIndex = 16;
    endIndex = 20;
  }

  for(let j = startIndex; j<endIndex; j++){
    const citiesDiv = document.createElement('div');
    citiesDiv.classList.add('cities');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-div');

    const txtArea = document.createElement('div');
    txtArea.classList.add('txt-area');

    let img = document.createElement('img');
    img.src = `images/${imgNames[j]}.jpg`;
    img.alt = `${imgNames[j]}`;

    let cityHeader = document.createElement('p');
    cityHeader.classList.add('city-header');
    cityHeader.textContent = cities[j];

    let cityDesc = document.createElement('p');
    cityDesc.classList.add('city-desc');
    cityDesc.textContent = citiesDesc[j];

    imgDiv.appendChild(img);

    txtArea.appendChild(cityHeader);
    txtArea.appendChild(cityDesc);

    citiesDiv.appendChild(imgDiv);
    citiesDiv.appendChild(txtArea);

    container.appendChild(citiesDiv);
  } 
}

function formatCities(arr) {
  return arr.map(city => {
    const words = city.split(" ");
    if (words.length === 1) {
      return words[0].toLowerCase();
    }
    return words.map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join("");
  });
}