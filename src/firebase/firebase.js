// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, getDoc, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKELI7i2nXSen-zPeHi2QJ0udZx72iLWg",
    authDomain: "ecommerce-guitarras-8665b.firebaseapp.com",
    projectId: "ecommerce-guitarras-8665b",
    storageBucket: "ecommerce-guitarras-8665b.firebasestorage.app",
    messagingSenderId: "1053851342555",
    appId: "1:1053851342555:web:c115775b7ad177b9be5efe",
    measurementId: "G-RPEYDRM5JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener un solo producto
export async function getSingleProduct(id) {
    const documentRef = doc(db, 'Productos', id);

    try {
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()) {
            return snapshot.data();
        } else {
            console.log('El documento no existe');
        }
    } catch (error) {
        console.error('Error al obtener el documento', error);
    }
}

// Obtener productos
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, 'Productos'));
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map((docu) => {
                return {
                    id: docu.id,
                    ...docu.data(),
                };
            });
            return productsList;
        } else {
            console.log('Colección vacía');
        }
    } catch (error) {
        console.error('Error al obtener la colección', error);
    }
}