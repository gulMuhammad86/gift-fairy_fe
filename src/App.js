import {Button, Container, Stack } from "@mui/material"
import { ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
// import Products from "./components/products";
import Promotions from "./components/promotions";
import theme from "./styles/theme";


function App(){
useEffect(()=>{
  document.title = "Gifts";
},[]);
return (
  
  <ThemeProvider theme={theme}>

  <Container 
     disableGutters
      maxWidth = "xl"
      sx ={{
        background:`#fff`
      }}
      >
      <Stack>
        <Appbar />
        <Banner />
        <Promotions />
        {/* <Products /> */}
        
    
      </Stack>
  </Container>
</ThemeProvider>
  )
}

export default App;