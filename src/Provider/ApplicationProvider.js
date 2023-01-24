import {createContext, useState} from "react";

export const ApplicationContext = createContext()

const ApplicationProvider = ({children}) => {
  const [appLoading, setAppLoading] = useState(false)

  return (
    <ApplicationContext.Provider
      value={{
        appLoading: appLoading,
        setAppLoading: setAppLoading
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationProvider;
