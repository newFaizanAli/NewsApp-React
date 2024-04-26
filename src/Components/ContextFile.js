import { createContext, useState } from 'react';

const UserRoleContext = createContext();

export const UserRoleProvider = ({ children }) => {
 
  const [Categ, setCateg] = useState('')
  const [Fetch, setFetch] = useState('')

  const contextValue = {
     Categ,
     setCateg,
     Fetch,
     setFetch
  };

  return (
    <UserRoleContext.Provider value={contextValue}>
      {children}
    </UserRoleContext.Provider>
  );
};

export { UserRoleContext }