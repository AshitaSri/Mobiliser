import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg  from"../assets/pic--5.webp"; 


function Home(){

    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImage={HomeImg}
        title="Choose Yout Career"
        
        buttonText="Register"
        url="/"
        btnClass="show"
        />
        </>
        
    )

    
    
    
    
    
}

export default Home;