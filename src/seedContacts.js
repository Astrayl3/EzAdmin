import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";
import { mockDataContacts } from "./data/mockDataForSeed.js";

async function seedContacts() {
  const contactsCollection = collection(db, "contacts");

  try {
    for (const contact of mockDataContacts) {
      await addDoc(contactsCollection, contact);
      console.log(`✅ Added: ${contact.name}`);
    }
    console.log("🎉 Done seeding Firestore!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  }
}

seedContacts();
