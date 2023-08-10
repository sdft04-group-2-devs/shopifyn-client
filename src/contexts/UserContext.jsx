// import React, { createContext, useContext, useEffect, useState } from 'react';

// const UserContext = createContext();

// export function UserProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const fetchCurrentUser = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/logged_in'); // Change this URL to the appropriate endpoint
//         if (response.ok) {
//           const user = await response.json();
//           setCurrentUser(user);
//           sessionStorage.setItem("user", JSON.stringify(user));
//         } else {
//           console.error('Failed to fetch current user');
//         }
//       } catch (error) {
//         console.error('Error fetching current user:', error);
//       }
//     };

//     fetchCurrentUser();
//   }, []);

//   return (
//     <UserContext.Provider value={currentUser}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// export function useUser() {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error('User must be used within a UserProvider');
//   }
//   return context;
// }
