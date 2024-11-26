// Parent container for the menu
const ul = document.querySelector('.UL');
// alert("sddf")
// Create the first level of list items
const home = document.createElement('li');
const aboutUs = document.createElement('li');
const astrologyServices = document.createElement('li');
const locations = document.createElement('li');
const astrologerCanada = document.createElement('li');
const astrologerUsa = document.createElement('li');
const contact = document.createElement('li');

// Create anchor elements for each list item
const homeLink = document.createElement('a');
homeLink.href = 'index.html';
homeLink.textContent = 'Home';
home.appendChild(homeLink);

const aboutUsLink = document.createElement('a');
aboutUsLink.href = 'about-pandit-vijay.html';
aboutUsLink.textContent = 'About Us';
aboutUs.appendChild(aboutUsLink);

const astrologyServicesLink = document.createElement('a');
astrologyServicesLink.href = '#';
astrologyServicesLink.textContent = 'Astrology Services';
astrologyServices.appendChild(astrologyServicesLink);

const locationsLink = document.createElement('a');
locationsLink.href = '#';
locationsLink.textContent = 'Locations';
locations.appendChild(locationsLink);

const astrologerCanadaLink = document.createElement('a');
astrologerCanadaLink.href = '#';
astrologerCanadaLink.textContent = 'Astrologer Canada';
astrologerCanada.appendChild(astrologerCanadaLink);

const astrologerUsaLink = document.createElement('a');
astrologerUsaLink.href = '#';
astrologerUsaLink.textContent = 'Astrologer USA';
astrologerUsa.appendChild(astrologerUsaLink);

const contactLink = document.createElement('a');
contactLink.href = 'contact-us.html';
contactLink.textContent = 'Contact';
contact.appendChild(contactLink);

// Append first level list items to the main ul
ul.appendChild(home);
ul.appendChild(aboutUs);
ul.appendChild(astrologyServices);
ul.appendChild(locations);
ul.appendChild(astrologerCanada);
ul.appendChild(astrologerUsa);
ul.appendChild(contact);

// Create nested ul for Astrology Services
const astrologyServicesUl = document.createElement('ul');
astrologyServices.appendChild(astrologyServicesUl);

// Nested list items under Astrology Services
const astrologyItems = [
    { href: 'get-your-ex-back.html', text: 'Get Your Ex Back' },
    { href: 'remove-black-magic.html', text: 'Remove Black Magic' },
    { href: 'psychic-reader.html', text: 'Psychic Reader' },
    { href: 'evil-energy-removal.html', text: 'Evil Energy Removal' },
    { href: 'love-psychic.html', text: 'Love Psychic' },
    { href: 'indian-astrologer.html', text: 'Indian Astrologer' },
    { href: 'spiritual-healer.html', text: 'Spiritual Healer' },
    { href: 'vashikaran-specialist.html', text: 'Vashikaran Specialist' },
    { href: 'face-reader.html', text: 'Face Reader' },
    { href: 'palm-reading.html', text: 'Palm Reading' },
    { href: 'horoscope-reading.html', text: 'Horoscope Reading' },
    { href: 'lotto-max-prediction.html', text: 'Lotto Max Prediction' },
    { href: 'job-and-career-solution.html', text: 'Job And Career' },
    { href: 'childless-couples-solution.html', text: 'Childless Couples' },
    { href: 'marriage-problem-solution.html', text: 'Marriage Problem' }
];

astrologyItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    astrologyServicesUl.appendChild(li);
});

// Create nested ul for Locations
const locationsUl = document.createElement('ul');
locations.appendChild(locationsUl);

const locationItems = [
  "India", "Australia", "Fiji", "UK", "USA", "Canada", "New Zealand", "South Africa", 
  "Trinidad and Tobago", "Guyana", "Kenya", "Mauritius", "Bahamas", "Grenada", "Sweden",
  "Singapore", "Jamaica", "St Lucia", "Dominican Republic", "Barbados", "Denmark", "Surinam", 
  "Malaysia", "Philippines", "Guadeloupe", "St Vincent and the Grenadines", "Martinique", 
  "Curaçao", "Belize", "Sint Maarten", "French Guiana", "Sri Lanka", "Italy", "Greece", 
  "Chile", "Mexico", "Venezuela", "Saint Martin", "Panama"
];

locationItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    locationsUl.appendChild(li);
});

// Create nested ul for Astrologer Canada
const astrologerCanadaUl = document.createElement('ul');
astrologerCanada.appendChild(astrologerCanadaUl);

const canadaItems =  [
  { name: "Ontario", href: "Astrologer-in-Ontario-Canada.html" },
  { name: "Toronto", href: "Astrologer-in-Toronto-Ontario-Canada.html" },
  { name: "Markham", href: "Astrologer-in-Markham-Ontario-Canada.html" },
  { name: "Brampton", href: "Astrologer-in-Brampton-Ontario-Canada.html" },
  { name: "Edmonton", href: "Astrologer-in-Edmonton-Alberta-Canada.html" },
  { name: "Vancouver", href: "Astrologer-in-Vancouver-British-Columbia-Canada.html" },
  { name: "Montreal", href: "Astrologer-in-Montreal-Quedec-Canada.html.html" },
  { name: "Quebec", href: "Astrologer-in-Quebec-Canada.html" },
  { name: "Calgary", href: "Astrologer-in-Calgary-Alberta-Canada.html.html" },
  { name: "Alberta", href: "Astrologer-in-Alberta-Canada.html" },
  { name: "British Columbia", href: "Astrologer-in-British-Columbia-Canada.html" },
  { name: "Victoria", href: "Astrologer-in-Victoria-British-Columbia-Canada.html" },
  { name: "Winnipeg", href: "Astrologer-in-Winnipeg-Manitoba-Canada.html" },
  { name: "East York", href: "Astrologer-in-East-york-Ontario-Canada.html" },
  { name: "Etobicoke", href: "Astrologer-in-Etobicoke-Ontario-Canada.html" },
  { name: "Kitchener", href: "Astrologer-in-Kitchener-Ontario-Canada.html" },
  { name: "Mississauga", href: "Astrologer-in-Mississauga-Ontario-Canada.html" },
  { name: "North York", href: "Astrologer-in-North-York-Ontario-Canada.html" },
  { name: "Hamilton", href: "Astrologer-in-Hamilton-Ontario-Canada.html" },
  { name: "Ottawa", href: "Astrologer-in-Ottawa-Ontario-Canada.html" },
  { name: "Scarborough", href: "Astrologer-in-Scarborough-Ontario-Canada.html" },
  { name: "Windsor", href: "Astrologer-in-Windsor-Ontario-Canada.html" }
];

canadaItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = "#";
    a.textContent = item.name;
    li.appendChild(a);
    astrologerCanadaUl.appendChild(li);
});

// Create nested ul for Astrologer USA
const astrologerUsaUl = document.createElement('ul');
astrologerUsa.appendChild(astrologerUsaUl);

const usaItems = [
  
    { name: "Arizona", link: "Astrologer-in-Arizona-Usa.html" },
    { name: "Arkansas", link: "Astrologer-in-Arkansas-Usa.html" },
    { name: "California", link: "Astrologer-in-California-Usa.html" },
    { name: "Colorado", link: "Astrologer-in-Colorado-Usa.html" },
    { name: "Connecticut", link: "Astrologer-in-Connecticut-Usa.html" },
    { name: "Delaware", link: "Astrologer-in-Delaware-Usa.html" },
    { name: "Florida", link: "Astrologer-in-Florida-Usa.html" },
    { name: "Georgia", link: "Astrologer-in-Georgia-Usa.html" },
    { name: "Hawaii", link: "Astrologer-in-Hawaii-Usa.html" },
    { name: "Idaho", link: "Astrologer-in-Idaho-Usa.html" },
    { name: "Illinois", link: "Astrologer-in-Illinois-Usa.html" },
    { name: "Indiana", link: "Astrologer-in-Indiana-Usa.html" },
    { name: "Iowa", link: "Astrologer-in-Iowa-Usa.html" },
    { name: "Kansas", link: "Astrologer-in-Kansas-Usa.html" },
    { name: "Kentucky", link: "Astrologer-in-Kentucky-Usa.html" },
    { name: "Louisiana", link: "Astrologer-in-Louisiana-Usa.html" },
    { name: "Maine", link: "Astrologer-in-Maine-Usa.html" },
    { name: "Maryland", link: "Astrologer-in-Maryland-Usa.html" },
    // Add more states as needed
]

usaItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.name;
    li.appendChild(a);
    astrologerUsaUl.appendChild(li);
});

// Add other astrologerUsa items here

  
searchbarsection();


function searchbarsection() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Sample data for suggestions (with image URLs and titles)
  const suggestions = [
      { url: 'https://mastervijayram.blogspot.com/2023/07/blog-post_25.html', title: 'Embrace Healing', image: 'https://via.placeholder.com/50' },
      { url: 'https://mastervijayram.blogspot.com/2023/07/blog-post_31.html', title: 'Encounter the transformative power ', image: 'https://via.placeholder.com/50' },
      { url: 'https://mastervijayram.blogspot.com/2023/08/blog-post.html', title: 'Best Indian Astrologer in Toronto: Unlock Cosmic Wisdom with Vijay Ram', image: 'https://via.placeholder.com/50' },
      { url: 'https://mastervijayram.blogspot.com/2023/07/Expert%20Astrologer%20in%20North%20York.html', title: 'Astrology services north-york', image: 'https://via.placeholder.com/50' },
      { url: 'https://mastervijayram.blogspot.com/2022/10/black-magic-removal-specialist-services.html', title: 'Black magic', image: 'https://via.placeholder.com/50' },
  ];

  // Initially hide the search results
  searchResults.style.display = 'none';
    

  function ShowSomeDefaultItem(){
    // alert("dd")
    searchResults.innerHTML = '';
      
      suggestions.slice(0, 3).forEach(suggestion => {
          const li = document.createElement('li');
          li.classList.add('list-group-item', 'd-flex', 'align-items-center');
         
          // Create and add image
          const img = document.createElement('img');
          img.src = suggestion.image;
          img.alt = suggestion.title;
          img.style.width = '50px';
          img.style.marginRight = '10px';
        
          // Create and add title
          const span = document.createElement('span');
          span.textContent = suggestion.title;
        
          // Append image and title to the list item
          li.appendChild(img);
          li.appendChild(span);
        
          // Add click event listener to each list item
          li.addEventListener('click', () => {
              const clickedValue = suggestion.url; // Get the clicked value
              gotoBlog(clickedValue); // Pass it to your function
          });
        
          searchResults.appendChild(li);
          searchResults.style.display = 'flex';
          searchResults.style.flexDirection = 'column';
          li.style.cursor = 'pointer';
          li.style.display = 'flex';
          li.style.justifyContent = 'space-between';
          li.style.padding = '2px%'
      });
  }

  searchInput.onfocus = () => {
    // alert("ss") 
    ShowSomeDefaultItem()
    document.querySelector('i').style.display = 'none'
 
  };

  searchInput.addEventListener("blur", () => {
      setTimeout(() => {
        searchResults.innerHTML = '';
        searchInput.value = '';
            document.querySelector('i').style.display = 'block'
      }, 500); // Delay to allow clicking on an item
  });

  searchInput.addEventListener('input', () => {
    console.log(searchInput.value);
    
    const query = searchInput.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.title.toLowerCase().startsWith(query));
     
      if (filteredSuggestions.length > 0) {
          searchResults.style.display = 'block';
          searchResults.innerHTML = '';
          filteredSuggestions.forEach(suggestion => {
              const li = document.createElement('li');
              li.classList.add('list-group-item', 'd-flex', 'align-items-center');
            
              // Create and add image
              const img = document.createElement('img');
              img.src = suggestion.image;
              img.alt = suggestion.title;
              img.style.width = '50px';
              img.style.marginRight = '10px';
            
              // Create and add title
              const span = document.createElement('span');
              span.textContent = suggestion.title;
            
              // Append image and title to the list item
              li.appendChild(img);
              li.appendChild(span);
            
              // Add click event listener to each list item
              li.addEventListener('click', () => {
                  const clickedValue = suggestion.url; // Get the clicked value
                  gotoBlog(clickedValue); // Pass it to your function
              });
            
              searchResults.appendChild(li);
          });
      } else {
          searchResults.style.display = 'none';
      }

      if(searchInput.value == ""){
        console.log("empty")
        ShowSomeDefaultItem();
      }
     
      
  });
  
}  




  function gotoBlog(tg) {
    // alert("you are redirecting to latest blogs..."+tg );

    window.location.href = tg;
  } 
  

