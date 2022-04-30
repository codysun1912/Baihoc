function getPosts(){
    axios.get("http://localhost:3000/posts").then((response) => {console.log(response)});

}