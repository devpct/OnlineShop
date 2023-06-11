import FormProvider from './signupLogin/FormContext'
import HomeProvider from './home/HomeContext'

const Context = ({ children }) => {    
    
    return(
      <FormProvider>
      <HomeProvider>
        {children}
      </HomeProvider>
      </FormProvider>
    )

}

export default Context