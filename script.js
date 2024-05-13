var stts = document.querySelector("h5")

var addFriend = document.querySelector("#add")


var flag = 0

addFriend.addEventListener("click", function(){
    if(flag == 0){
        stts.innerHTML = "Friends"
        addFriend.innerHTML = "Unfriend"
        flag = 1
        removeFriend.remove()
    }

    else{
        stts.innerHTML = "You have Unfriend Her"
        addFriend.innerHTML = "Add Friend"
        flag = 0
    }
})
