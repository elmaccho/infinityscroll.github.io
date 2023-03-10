const pCounters = document.querySelectorAll('.count')
const imgs = document.querySelectorAll('img')
const search = document.querySelector('.search')
const mainContainer = document.querySelector('.mainContainer')
const loadingBox = document.querySelector('.loadingBox')
const postMenuLists = document.querySelectorAll('.postMenuList')
const reload = document.querySelector('.reload')
const topBtn = document.querySelector('.topBtn')
const navBox = document.querySelector('.navBox')
let postMenuBtns
let deletePostBtns


const createPost = () => {
    const postBox = document.createElement('div')
    const postImg = document.createElement('img')
    const postInfo = document.createElement('div')
    const postCounter = document.createElement('div')
    const postPCount = document.createElement('p')
    const postComment = document.createElement('div')
    


    postBox.append(postImg)
    postBox.append(postInfo)
    postCounter.append(postPCount)
    postBox.append(postCounter)
    postBox.append(postComment)
    
    postCounter.classList.add('counter')
    postBox.classList.add('postBox')
    postPCount.classList.add('count')
    postComment.classList.add('commentBox')
    postInfo.classList.add('postInfo')
    
    postPCount.textContent =  Math.floor(Math.random() * 10000) + " polubień"
    postInfo.innerHTML = `                
    <button>
    <i class="fa-regular fa-heart"></i>
    </button>
    <button>
    <i class="fa-regular fa-comment"></i>
    </button>
    <button>
    <i class="fa-regular fa-paper-plane"></i>
    </button>
    
                    <div class="postMenu">
                    <button id="postMenuBtn" class="postMenuBtn">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>

                    <div id="postMenuList" class="postMenuList hideMenu">
                        <ul>
                            <li>
                                <button class="deletePostBtn"><i class="fa-solid fa-caret-right"></i>Usuń post</button>
                            </li>
                            <li>
                                <button><i class="fa-solid fa-caret-right"></i>Edytuj</button>
                            </li>
                        </ul>
                    </div>
                </div>
    
    `
    postComment.innerHTML = `<i class="fa-regular fa-user"></i> <input type="text" name="" id="" placeholder="Dodaj komentarz...">`
    


    let randId = Math.floor(Math.random()*1000+1)
    postImg.setAttribute('src', `https://picsum.photos/680/500?random=${randId}`)


    mainContainer.append(postBox)

    postInfo.querySelector('.postMenuBtn').addEventListener('click', postMenuToggle);
    mainContainer.append(postBox);

    postInfo.querySelector('.deletePostBtn').addEventListener('click', deletePost);
    mainContainer.append(postBox);


    reloadPostsBtn()
    window.addEventListener('click', closeMenu)
}

for(let i=0; i<pCounters.length; i++){
    for(const counter of pCounters){
        let likes = Math.floor(Math.random() * 10000)
        counter.textContent = `${likes} polubień`
    }
}

const loadingDots = () => {
    document.body.style.overflow = "hidden"
    loadingBox.classList.add("show")
    topBtn.style.display = "none"
}

const postMenuToggle = (e) => {
    const closestMenuList = e.target.closest('.postMenu').querySelector('.postMenuList')
    closestMenuList.classList.toggle("hideMenu")
}

const deletePost = (e) => {
    e.target.closest(('.postBox')).remove()

    reloadPostsBtn()
}

const reloadPostsBtn = () => {
    const allPosts = document.querySelectorAll('.postBox')
    if(allPosts.length === 0){
        reload.style.display = "block"
    }
    else if (allPosts.length <= 1){
        createPost()
        createPost()
    }
}

const reloadPostFunc = () => {
    createPost()
    createPost()
    reload.style.display = "none"
}

const goUp = () => {
    window.scrollTo(0, window.scrollY );
}

const closeMenu = (e) => {
    if (!document.getElementById('postMenuList').contains(e.target) && !document.getElementById('postMenuBtn').contains(e.target)){
        document.getElementById('postMenuList').classList.add('hideMenu')
    }
}

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
	// console.log( { scrollTop, scrollHeight, clientHeight });
	
	if(clientHeight + scrollTop >= scrollHeight - 5) {
        
        
        // loadingDots()
        // mainContainer.style.filter = "grayscale(90%) blur(3px)"
        
        // setTimeout(() => {
            createPost()
                createPost()
            //     document.body.style.overflowY = "scroll"
            //     loadingBox.classList.remove("show")
            //     mainContainer.style.filter = "grayscale(0) blur(0)"
            //     topBtn.style.display = "block"
            // }, 1000);
	}
})

window.addEventListener("scroll", () => {
    const topBtn = document.querySelector('.topBtn')
    topBtn.classList.toggle("showGoUpBtn", window.scrollY > 500)
})

reload.addEventListener('click', reloadPostFunc)
document.addEventListener('DOMContentLoaded', reloadPostsBtn)
topBtn.addEventListener('click', goUp)
