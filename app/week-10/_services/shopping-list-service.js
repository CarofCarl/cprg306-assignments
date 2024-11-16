import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// getItems function - retrieves all items for a specific user
export async function getItems(userId) {
  const items = [];

  // Build the correct path: users/{userId}/items/
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id, // document id
        ...doc.data(), // document data (name, quantity, category)
      });
    });
    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
    throw error;
  }
}

// addItem function - adds a new item to user's shopping list
export async function addItem(userId, item) {
  try {
    // Ensure correct path: users/{userId}/items/
    const itemsRef = collection(db, "users", userId, "items");

    // Add new document to items subcollection
    const docRef = await addDoc(itemsRef, {
      name: item.name,
      quantity: item.quantity,
      category: item.category,
    });

    return docRef.id; // Return the newly created document ID
  } catch (error) {
    console.error("Error adding item: ", error);
    throw error;
  }
}
