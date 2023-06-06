import FormProvider from './signupLogin/FormContext'

const Context = ({ children }) => {    
    
    return(
      <FormProvider>
        {children}
      </FormProvider>
    )

}

export default Context