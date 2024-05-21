let dataLikes = [1, 0, 0];
let dataTexts = ["life is wonderful!", "today is a great day", "omg, look at these mountains"] 
let dataImgs = ["https://e2k9ube.cloudimg.io/v7/https://edienetlive.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/2/full_42489.jpg?width=856&height=482&func=crop", "https://img.freepik.com/free-photo/sunlight-dead-flowers_23-2148095982.jpg", "https://akshitphotography.com/wp-content/uploads/2021/08/Nature-Photography-105.jpg"] 
 
let korobkaPostov = document.getElementById("postsBox"); 
let originalPost = document.getElementById("firstPost"); 


function likePost() {
    var likesElement = document.getElementById("numberOfLikes");
    var currentLikes = parseInt(likesElement.textContent.trim());
    currentLikes += 1;
    likesElement.textContent = currentLikes;
}

for(let i = 0; i < 100; i++){ 
    let newPost = originalPost.cloneNode(true); 
 
    let img = newPost.getElementsByClassName("img")[0]; 
    img.setAttribute("src", dataImgs[i%3]); 
 
    let numberOfLikes = newPost.getElementsByClassName("numberOfLikes")[0] 
    numberOfLikes.innerHTML = dataLikes[i%3]; 
 
    let postText = newPost.getElementsByClassName("postText")[0] 
    postText.innerHTML = dataTexts[i%3]; 
 
    let likeBtn = newPost.getElementsByClassName("likeBtn")[0] 
    likeBtn.setAttribute("onclick", "likes(" + i + ")") 
 
    korobkaPostov.appendChild(newPost); 
    
    
} 
function addComment() {
    
    var commentInput = document.getElementById("commentInput");
    var commentText = commentInput.value.trim();

    if (commentText) {
    
        var commentList = document.getElementById("commentList");
        var newComment = document.createElement("li");
        newComment.textContent = commentText;
       
        commentList.appendChild(newComment);
        
        commentInput.value = "";
    }
}

function like(){ 
     
}

