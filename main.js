// Contact List (array of objects)
let contacts = [
  { name: "Leo Roy", phone: "123-456-7890" },
  { name: "Maya Singh", phone: "222-333-4444" },
  { name: "Arjun Kumar", phone: "555-666-7777" }
];

const contactList = document.getElementById("contactList");
const letterCounts = document.getElementById("letterCounts");
const searchBox = document.getElementById("searchBox");
const addContactForm = document.getElementById("addContactForm");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");

// Function: Display contacts
function displayContacts(list) {
  contactList.innerHTML = "";
  if (list.length === 0) {
    contactList.innerHTML = "<li>No contacts found</li>";
    return;
  }
  list.forEach(contact => {
    const li = document.createElement("li");
    li.textContent = `${contact.name} - ${contact.phone}`;
    contactList.appendChild(li);
  });
}

// Function: Search contacts (case-insensitive)
function searchContacts(query) {
  query = query.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(query)
  );
}

// Function: Count contacts by first letter
function countByFirstLetter(list) {
  let count = {};
  list.forEach(contact => {
    let firstLetter = contact.name[0].toUpperCase();
    count[firstLetter] = (count[firstLetter] || 0) + 1;
  });
  return count;
}

// Function: Display counts
function displayCounts(list) {
  letterCounts.innerHTML = "";
  const counts = countByFirstLetter(list);
  for (let letter in counts) {
    const li = document.createElement("li");
    li.textContent = `${letter}: ${counts[letter]}`;
    letterCounts.appendChild(li);
  }
}

// Add Contact
addContactForm.addEventListener("submit", e => {
  e.preventDefault();
  const newName = nameInput.value.trim();
  const newPhone = phoneInput.value.trim();
  if (newName && newPhone) {
    contacts.push({ name: newName, phone: newPhone });
    displayContacts(contacts);
    displayCounts(contacts);
    addContactForm.reset();
  }
});

// Search functionality
searchBox.addEventListener("input", e => {
  const query = e.target.value;
  const results = searchContacts(query);
  displayContacts(results);
  displayCounts(results);
});

// Initial display
displayContacts(contacts);
displayCounts(contacts);
