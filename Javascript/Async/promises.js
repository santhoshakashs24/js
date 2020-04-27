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


function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            } else {
                reject('Error :Something went wrong');
            }
        },1000);
    });
}

// // async/await
// async function init(){
//     await createPost({title:'Look', body:'dook'});

//     getPosts();
// }

// init();


//async / await / fetch

async function fetchUsers() {
    const res = await fetch('URL');

    const data = await res.json();

    console.log(data);
}

fetchUsers();

// createPost({title:'Look', body:'dook'})
//     .then(getPosts);

// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'Goodbye!')
// );
// const promise4 =  

// Promise.all([promise1,promise2,promise3]).then(values => console.log(values));