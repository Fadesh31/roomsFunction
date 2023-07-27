import LargeRoom from "./roomsFunction.js";

function createAndDisplayRoom(
  name,
  length,
  width,
  height,
  windows,
  doorSize,
  doorType,
  floorType,
  doorClosed,
  wallColor
) {
  // Create a LargeRoom instance
  const room = new LargeRoom(
    name,
    length,
    width,
    height,
    windows,
    doorSize,
    doorType,
    floorType,
    doorClosed,
    wallColor
  );

  // Modify properties of the room instance
  room.toggleDoor(false); // Open the door
  room.setNewFloorType("Hardwood"); // Change the floor type

  // Display room information on the web page
  const content = `
    <h1 class="largeroom__name">${room.name}</h1>
    <ul class="largeroom__features">
      <li class="largeroom__length">Length:<span> ${room.length}m</span></li>
      <li class="largeroom__width">Width:<span> ${room.width}m</span></li>
      <li class="largeroom__height">Height:<span> ${room.height}m</span></li>
      <li class="largeroom__windows">Windows:<span> ${room.windows}</span></li>
      <li class="largeroom__door">Door size:<span> ${room.door.Size} inches</span></li>
      <li class="largeroom__type">Door Type:<span> ${room.door.Type}</span></li>
      <li class="largeroom__floor">Floor type:<span> ${room.floorType}</span></li>
      <li class="largeroom__door">Door status:<span> ${room.doorClosed}</span></li>
      <li class="largeroom__wall">Wall Color:<span> ${room.wallColor}</span></li>
    </ul>
  `;

  const main = document.querySelector(".maincontent");

  const newArticle = document.createElement("article");
  newArticle.classList.add("largeroom");
  newArticle.setAttribute(
    "id",
    `room_${name.replace(/\s+/g, "").toLowerCase()}`
  ); // Create a unique ID based on the room name
  newArticle.innerHTML = content;

  main.append(newArticle);

  // Return the modified LargeRoom instance
  return room;
}

// Create and display the first room
const room1 = createAndDisplayRoom(
  "Living Room",
  20,
  15,
  10,
  3,
  8,
  "wooden",
  "carpet",
  true,
  "beige"
);

// Create and display the second room
const room2 = createAndDisplayRoom(
  "Bedroom",
  18,
  12,
  8,
  2,
  7,
  "wooden",
  "carpet",
  false,
  "light blue"
);

// Create and display the third room
const room3 = createAndDisplayRoom(
  "Kitchen",
  15,
  10,
  9,
  1,
  6,
  "wooden",
  "tile",
  true,
  "white"
);

// Accessing room information
console.log(room1);
console.log(room2);
console.log(room3);
