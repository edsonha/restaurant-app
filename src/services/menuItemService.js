import * as restaurantAPI from "./restaurantService";

const menuItems = [
  {
    _id: "5c342f74fc13ae4090000000",
    name: "Honey Mustard Chicken Kebab",
    price: 16.5,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000000",
      name: "The Burger Bar by Fatboy's Concepts (Boat Quay)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000001",
    name: "Swiss Shroom Burger",
    price: 13.8,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000000",
      name: "The Burger Bar by Fatboy's Concepts (Boat Quay)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000002",
    name: "Royale with Cheese Burger",
    price: 33,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000000",
      name: "The Burger Bar by Fatboy's Concepts (Boat Quay)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000003",
    name: "The Elvis Burger",
    price: 11.5,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000000",
      name: "The Burger Bar by Fatboy's Concepts (Boat Quay)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000004",
    name: "Jamacian Me Hungry Burger",
    price: 14,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000000",
      name: "The Burger Bar by Fatboy's Concepts (Boat Quay)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000005",
    name: "Tangy Tomato With Basil",
    price: 6.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000001",
      name: "The Soup Spoon (Tanjong Pagar Exchange)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000006",
    name: "Roasted Pumpkin",
    price: 6.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000001",
      name: "The Soup Spoon (Tanjong Pagar Exchange)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000007",
    name: "Meatless Minestrone",
    price: 7.3,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000001",
      name: "The Soup Spoon (Tanjong Pagar Exchange)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000008",
    name: "Beef Golash",
    price: 8.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000001",
      name: "The Soup Spoon (Tanjong Pagar Exchange)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000009",
    name: "Boston Clam Chowder",
    price: 8.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000001",
      name: "The Soup Spoon (Tanjong Pagar Exchange)"
    }
  },
  {
    _id: "5c342f74fc13ae409000000a",
    name: "Spicy Italian Sub",
    price: 7,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000002",
      name: "Subway (Chinatown Point)"
    }
  },
  {
    _id: "5c342f74fc13ae409000000b",
    name: "Egg Mayo Sub",
    price: 6.1,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000002",
      name: "Subway (Chinatown Point)"
    }
  },
  {
    _id: "5c342f74fc13ae409000000c",
    name: "Roasted Chicken Sub",
    price: 7,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000002",
      name: "Subway (Chinatown Point)"
    }
  },
  {
    _id: "5c342f74fc13ae409000000d",
    name: "Subway Melt Sub",
    price: 7.8,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000002",
      name: "Subway (Chinatown Point)"
    }
  },
  {
    _id: "5c342f74fc13ae409000000e",
    name: "Tuna Sub",
    price: 6.1,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000002",
      name: "Subway (Chinatown Point)"
    }
  },
  {
    _id: "5c342f74fc13ae409000000f",
    name: "Sapporo Special Miso Ramen",
    price: 16.9,
    restaurant: { _id: "5c342ac9fc13ae39f8000003", name: "Ramen Champion" }
  },
  {
    _id: "5c342f74fc13ae4090000010",
    name: "Special Tonkotsu White Ramen",
    price: 15.8,
    restaurant: { _id: "5c342ac9fc13ae39f8000003", name: "Ramen Champion" }
  },
  {
    _id: "5c342f74fc13ae4090000011",
    name: "Sapporo Spicy Miso Ramen",
    price: 15.8,
    restaurant: { _id: "5c342ac9fc13ae39f8000003", name: "Ramen Champion" }
  },
  {
    _id: "5c342f74fc13ae4090000012",
    name: "Karaage Curry Rice",
    price: 13.7,
    restaurant: { _id: "5c342ac9fc13ae39f8000003", name: "Ramen Champion" }
  },
  {
    _id: "5c342f74fc13ae4090000013",
    name: "Ebi Tendon Rice",
    price: 20.12,
    restaurant: { _id: "5c342ac9fc13ae39f8000003", name: "Ramen Champion" }
  },
  {
    _id: "5c342f74fc13ae4090000014",
    name: "Unagi Bento",
    price: 11.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000004",
      name: "Umi Sushi (One Raffles Place)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000015",
    name: "Yakiniku Beef Bento",
    price: 8.7,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000004",
      name: "Umi Sushi (One Raffles Place)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000016",
    name: "Tori Katsu Bento",
    price: 8.2,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000004",
      name: "Umi Sushi (One Raffles Place)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000017",
    name: "Tamago Sushi - 2pc",
    price: 2.5,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000004",
      name: "Umi Sushi (One Raffles Place)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000018",
    name: "Califonia Maki - 2pc",
    price: 4,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000004",
      name: "Umi Sushi (One Raffles Place)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000019",
    name: "Tom Yum Talay (Tom Yum Soup)",
    price: 10,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000005",
      name: "Aroy Dee Thai Kitchen (Boat Quay)"
    }
  },
  {
    _id: "5c342f74fc13ae409000001a",
    name: "Gang Dang Kai (Red Curry Chicken)",
    price: 12,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000005",
      name: "Aroy Dee Thai Kitchen (Boat Quay)"
    }
  },
  {
    _id: "5c342f74fc13ae409000001b",
    name: "Phoo Nim Pad Pit Tai Dam (Soft shell crab black pepper)",
    price: 15,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000005",
      name: "Aroy Dee Thai Kitchen (Boat Quay)"
    }
  },
  {
    _id: "5c342f74fc13ae409000001c",
    name: "Pad Thai (Thai fried noodle)",
    price: 8,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000005",
      name: "Aroy Dee Thai Kitchen (Boat Quay)"
    }
  },
  {
    _id: "5c342f74fc13ae409000001d",
    name: "Suki Pad (Thai Fried tang hoon)",
    price: 7.5,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000005",
      name: "Aroy Dee Thai Kitchen (Boat Quay)"
    }
  },
  {
    _id: "5c342f74fc13ae409000001e",
    name: "Basil Chicken Lunch Set",
    price: 8.5,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000006",
      name: "Basil & Mint Thai Street Eats"
    }
  },
  {
    _id: "5c342f74fc13ae409000001f",
    name: "Basil Beef Lunch Set",
    price: 9.5,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000006",
      name: "Basil & Mint Thai Street Eats"
    }
  },
  {
    _id: "5c342f74fc13ae4090000020",
    name: "Basil Fried Noodles",
    price: 5.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000006",
      name: "Basil & Mint Thai Street Eats"
    }
  },
  {
    _id: "5c342f74fc13ae4090000021",
    name: "Basil Fried Rice",
    price: 5.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000006",
      name: "Basil & Mint Thai Street Eats"
    }
  },
  {
    _id: "5c342f74fc13ae4090000022",
    name: "Holy Basil Rice Set",
    price: 7.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000006",
      name: "Basil & Mint Thai Street Eats"
    }
  },
  {
    _id: "5c342f74fc13ae4090000023",
    name: "Signature Lor Mee",
    price: 6,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000007",
      name: "Penang Kitchen (Amoy Street)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000024",
    name: "Big Prawn Noodle",
    price: 7,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000007",
      name: "Penang Kitchen (Amoy Street)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000025",
    name: "Crispy Marinated Popcorn Chicken with Thai Chili",
    price: 6.3,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000008",
      name: "Authentic Hock Lam Street Popular Beef"
    }
  },
  {
    _id: "5c342f74fc13ae4090000026",
    name: "Kai Lan with Garlic Oyster Sauce",
    price: 6.3,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000008",
      name: "Authentic Hock Lam Street Popular Beef"
    }
  },
  {
    _id: "5c342f74fc13ae4090000027",
    name: "Supreme Mixed Noodle Set",
    price: 11.6,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000008",
      name: "Authentic Hock Lam Street Popular Beef"
    }
  },
  {
    _id: "5c342f74fc13ae4090000028",
    name: "Sliced Beef and Brisket Noodle",
    price: 9.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000008",
      name: "Authentic Hock Lam Street Popular Beef"
    }
  },
  {
    _id: "5c342f74fc13ae4090000029",
    name: "Claypot Beef Brisket Set",
    price: 11.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000008",
      name: "Authentic Hock Lam Street Popular Beef"
    }
  },
  {
    _id: "5c342f74fc13ae409000002a",
    name: "Sliced Beef Noodle Set",
    price: 9.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000008",
      name: "Authentic Hock Lam Street Popular Beef"
    }
  },
  {
    _id: "5c342f74fc13ae409000002b",
    name: "Crispy Marinaed Popcorn Chicken Rice Set",
    price: 10.3,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000008",
      name: "Authentic Hock Lam Street Popular Beef"
    }
  },
  {
    _id: "5c342f74fc13ae409000002c",
    name: "Brisket and Tripe Noodle Set",
    price: 9.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000008",
      name: "Authentic Hock Lam Street Popular Beef"
    }
  },
  {
    _id: "5c342f74fc13ae409000002d",
    name: "Fried Crispy Eggplant",
    price: 12.8,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000009",
      name: "Peach Garden (Chinatown Point)"
    }
  },
  {
    _id: "5c342f74fc13ae409000002e",
    name: "Fried Carrot Cake",
    price: 13,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000009",
      name: "Peach Garden (Chinatown Point)"
    }
  },
  {
    _id: "5c342f74fc13ae409000002f",
    name: "Braised Sliced Fish",
    price: 25.6,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000009",
      name: "Peach Garden (Chinatown Point)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000030",
    name: "Signature Roasted Crispy Duck",
    price: 20.9,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000009",
      name: "Peach Garden (Chinatown Point)"
    }
  },
  {
    _id: "5c342f74fc13ae4090000031",
    name: "Sweet and Sour Chicken with Pineapple",
    price: 21.4,
    restaurant: {
      _id: "5c342ac9fc13ae39f8000009",
      name: "Peach Garden (Chinatown Point)"
    }
  }
];

export function getMenuItems() {
  return menuItems;
}

export function getMenuItem(itemId) {
  return menuItems.find(item => item._id == itemId);
}

export function getMenuItemsFor(restaurantId) {
  return menuItems.find(item => item.restaurant._id == restaurantId);
}

export function saveMenuItem(newItem) {
  const menuItem = menuItems.find(item => item._id === newItem._id) || {};
  menuItem.name = newItem.name;
  menuItem.restaurant = restaurantAPI
    .getRestaurants()
    .find(restaurant => restaurant._id === newItem.restaurantId);
  menuItem.price = newItem.price;

  if (!menuItem._id) {
    menuItem._id = Date.now();
    menuItems.push(menuItem);
  }
  return menuItem;
}

export function deleteMenuItem(menuItemId) {
  const menuItem = menuItems.find(item => item._id === menuItemId);
  menuItems.splice(menuItems.indexOf(menuItem), 1);
  return menuItem;
}
