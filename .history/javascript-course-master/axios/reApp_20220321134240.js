async function getPosts(){
    try{
        const reponse =await axios.get("http://localhost:3000/posts")
        console.log(reponse.data)

    } catch (error)  {
       console.log(error)
    };
    // .then((response) => {console.log(response)}).catch((error) => {console.log(error)});

}
getPosts();



function addPosts(post){
    axios.post("http://localhost:3000/posts"){
    title: post.title,
    discription: post.discription,
    author: post.author
}

}
