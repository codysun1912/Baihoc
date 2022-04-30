async function getPosts(){
    try{
        const reponse =await axios.get("http://localhost:3000/posts")
        console.log(reponse.data)

    } catch ((err) => {

    });

    
    
    // .then((response) => {console.log(response)}).catch((error) => {console.log(error)});

}
getPosts();
