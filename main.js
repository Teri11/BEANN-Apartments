 // Clone the images to create an infinite loop
 const imageMarquee = document.getElementById('imageMarquee');
 const images = imageMarquee.querySelectorAll('img');

 images.forEach((image) => {
   const clone = image.cloneNode(true);
   imageMarquee.appendChild(clone);
 });

//  houses
document.addEventListener("DOMContentLoaded", function () {
    // Sample house data (replace with your data)
    const housesData = [
      {
        image: "path/to/house1.jpg",
        title: "House 1",
        description: "Description of House 1.",
        detailsLink: "#"
      },
      {
        image: "path/to/house2.jpg",
        title: "House 2",
        description: "Description of House 2.",
        detailsLink: "#"
      },
      {
        image: "path/to/house3.jpg",
        title: "House 3",
        description: "Description of House 3.",
        detailsLink: "#"
      }
      // Add more houses as needed
    ];
  
    // Function to create a house card
    function createHouseCard(house) {
      const houseCard = document.createElement("div");
      houseCard.classList.add("col-md-4", "col-sm-6");
  
      houseCard.innerHTML = `
        <div class="house-card">
          <img src="${house.image}" alt="${house.title}" class="img-fluid house-image">
          <h3>${house.title}</h3>
          <p>${house.description}</p>
          <a href="${house.detailsLink}" class="btn btn-primary">View Details</a>
        </div>
      `;
  
      return houseCard;
    }
  
    // Get the house list container
    const houseList = document.getElementById("houseList");
  
    // Populate the house list
    housesData.forEach(house => {
      const houseCard = createHouseCard(house);
      houseList.appendChild(houseCard);
    });
  });