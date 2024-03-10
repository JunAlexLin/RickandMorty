

function About(){
    return(
        <>
        <div className = "home_container">
            <h2> What is this? </h2>
            <p>
            This application gets all its information from The Rick and Morty API, a REST(ish) and GraphQL API based on the eponymous television show. 
            Through the API, you will have access to thousands of characters, images, locations, episodes and more. 
            The Rick and Morty API is filled with canonical information as seen on the TV show. </p>
            
            <p>With this application, you can find click on each character to find more information about them. Furthermore if you find a character you like, you can add them
            to your list of favorite characters! Finally, the application comes with a short Cypress test suite to verify behavior.</p>
        </div>
        </>
    )
}

export default About