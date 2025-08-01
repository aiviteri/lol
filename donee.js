const doneeBaskets = [
  {
    title: "Food Basket",
    items: ["Rice (1 kg)", "Pasta (500 g)", "Canned vegetables", "Soup", "Peanut butter", "Noodles", "Crackers", "Tea/Coffee", "Shelf milk", "Granola bars", "Canned fruit", "Oatmeal", "Oil"],
    message: "Food baskets are in high demand in your area. Thank you for helping fight hunger!"
  },
  {
    title: "Hygiene Basket",
    items: ["Soap", "Toothpaste", "Toothbrushes", "Shampoo", "Conditioner", "Deodorant", "Wipes", "Sanitizer", "Feminine products", "Comb", "Face masks", "Nail clippers", "Lotion"],
    message: "Hygiene products are urgently needed in local shelters. Your donation makes a difference!"
  },
  {
    title: "Medicine Basket",
    items: ["First aid kit", "Pain relievers", "Thermometer", "Cough drops", "Vitamins", "Antiseptic cream", "Swabs", "Sanitizer", "Hot/cold pack", "Allergy medicine", "Gloves", "Face masks", "Contact card"],
    message: "Medicine baskets are critical for families without easy access to healthcare. Your support can make a real difference in emergencies."
  },
  {
    title: "Baby Care Basket",
    items: ["Diapers", "Baby wipes", "Baby lotion", "Baby shampoo", "Baby food", "Formula", "Pacifier", "Blanket", "Outfit", "Toy", "Burp cloths", "Changing pads"],
    message: "Baby care items are highly requested by new parents in shelters. Your basket will bring comfort to both babies and caregivers."
  },
  {
    title: "Customizable Basket",
    items: ["Mix of food, hygiene, medicine, baby care items"],
    message: "Consider adding hygiene and medicine items — these are among the most requested by community centers this month."
  }
];

const doneeContainer = document.getElementById('donee-baskets');

function renderDoneeBaskets() {
  doneeBaskets.forEach((b, index) => {
    const card = document.createElement('div');
    card.className = 'basket-card';
    card.innerHTML = `
      <img src="https://via.placeholder.com/300x150" alt="Basket">
      <h3>${b.title}</h3>
      <ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>
      <button onclick="selectDoneeBasket(${index})">Select Basket</button>
    `;
    doneeContainer.appendChild(card);
  });
}

function selectDoneeBasket(index) {
  const basket = doneeBaskets[index];
  document.getElementById('confirmation').textContent = "Thank you! Your basket will bring hope to someone in need.";
  document.getElementById('confirmation').style.display = 'block';
  document.getElementById('aiMessage').textContent = `AI Suggestion: ${basket.message}`;
  document.getElementById('aiMessage').style.display = 'block';
}

renderDoneeBaskets();
