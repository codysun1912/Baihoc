async function getPosts(){
    const reponse =await axios.get("http://localhost:3000/posts").then((response) => {console.log(response)}).catch((error) => {console.log(error)});

}
getPosts();
