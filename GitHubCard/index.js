/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cardContainer = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/indiMjc")
  .then(response => {
    const newUser = CardMaker;
    cardContainer.appendChild(newUser(response.data));
})
.catch(error => {
  console.log("The data was not returned", error);
});
// //stretch
axios
  .get("https://api.github.com/users/indiMjc/followers")
  .then(response => {
    response.data.forEach(async (user) => {
      const userResponse = await axios.get(user.url);
      const newUser = CardMaker;
      cardContainer.appendChild(newUser(userResponse.data));
    })
    
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

// const followersArray = ["https://api.github.com/users/JChartier001", "https://api.github.com/users/cjogles", "https://api.github.com/users/AMC-ai", "https://api.github.com/users/tetondan", "https://api.github.com/users/dustinmyers"];

// followersArray.map(ele => {
//   axios
//   .get(ele)
//   .then(response => {
//     const newUser = CardMaker;
//     cardContainer.appendChild(newUser(response.data));
//   })
// })
// .catch(error => {
//   console.log("The data was not returned", error);
// });

// const followersArray = ["JChartier001", "cjogles", "AMC-ai", "tetondan", "dustinmyers"];

// axios.defaults.baseURL = 'https://api.github.com/users/';

// followersArray.map(ele => {
//   axios
//   .get(ele)
//   .then(response => {
//     const newUser = CardMaker;
//     cardContainer.appendChild(newUser(response.data));
//   })
// })
// .catch(error => {
//   console.log("The data was not returned", error);
// });

function CardMaker (userData) {
  //create elements
  let card = document.createElement("div");
  let userImg = document.createElement("img");
  let cardInfo = document.createElement("div");
  let user = document.createElement("h3");
  let userName = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let profileLink = document.createElement("a");
  let follower = document.createElement("p");
  let followingCount = document.createElement("p");
  let bio = document.createElement("p");
  //classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  user.classList.add("name")
  userName.classList.add("username");
  //populate
  userImg.src = userData.avatar_url;
  user.textContent = userData.name;
  userName.textContent = userData.login;
  location.textContent = `Location: ${userData.location}`;
  profile.textContent = `Profile: `;
  profileLink.textContent = userData.html_url;
  profileLink.href = userData.hrml_url;
  follower.textContent = `Followers: ${userData.followers}`;
  followingCount.textContent = `Following: ${userData.following}`;
  bio.textContent = `Bio: ${userData.bio}`;
  //structure
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(user);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(follower);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(bio);

  return card;
};

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github users and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="user">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/




/* List of LS Instructors Github user's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
