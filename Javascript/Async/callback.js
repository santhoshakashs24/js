const posts = [
    { title: 'Book', body: 'cook'},
    { title: 'Cook', body: 'look'}
];

function getPosts(){
    setTimeout(()=>{
    let output = '';
    posts.forEach((post) => {
        output += '<li>'+post.title+'</li>';
    });
    document.body.innerHTML = output;
    },1000);
}


function createPost(post, callback){
    setTimeout(()=> {
    posts.push(post);
    callback();
    },2000);
}

createPost({title:'Look', body:'dook'},getPosts);