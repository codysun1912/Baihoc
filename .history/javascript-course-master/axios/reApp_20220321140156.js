// async function getPosts(){
//     try{
//         const reponse =await axios.get("http://localhost:3000/posts")
//         console.log(reponse.data)

//     } catch (error)  {
//        console.log(error)
//     };
//     // .then((response) => {console.log(response)}).catch((error) => {console.log(error)});

// }
// getPosts();



// function addPosts(post){
//     axios
//     .post("http://localhost:3000/posts", {
//     title: post.title,
//     description: post.description,
//     author: post.author

// }).then(function (response) {
//     console.log(response);
// })
// .catch(function (err) {
//     console.log(err)
// })

// }

// addPosts({title:"front-end",description:"helllo0", author:"nhut"})


// function updatePost(id){
//     axios.put(`http://localhost:3000/posts/${id}` , {
//         title:"codysun1912",
//         description:"minh nhut"
//     }).then(function (response) {
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log(err)
//     })
// }

// updatePost(2);

function deletePost(id){
    axios.delete(`http://localhost:3000/posts/${id}`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err)
    })
}

deletePost(5);

async function getAllData(){
    const data =  await axios.all([
        axios.get("http://localhost:3000/posts"),
        axios.get(" http://localhost:3000/comments")

    ]);
}