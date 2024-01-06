const user = document.getElementById("users")

const users = [
    {
        "id": 1,
        "kep": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "nev": "Szent Endre",
        "munka": "PHP FEJLESZTŐ",
        "leiras": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima. Magnam rem harum doloremque quibusdam. Placeat sapiente quae blanditiis eius facilis pariatur vero odio ullam, esse porro voluptate, id optio sed in quidem veniam rem."

    }
    ,
    {
        "id": 2,
        "kep": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "nev": "Nagy Zsanett",
       "munka": "MARKETING MENEDZSER",
        "leiras": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima."

    }
    ,
    {
        "id": 3,
        "kep": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "nev": "Török Bálint",
        "munka": "AUTOMATA TESZTELŐ",
        "leiras": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima."

    }
]

let currentIndex = 0


let output = "";

    output += `<div class='user'>
    <div class='img-container'>
    <img  src='${users[currentIndex].kep}' />
    </div>
    <p> <b> ${users[currentIndex].nev} </b></p>
    <p class='munka' > ${users[currentIndex].munka}</p>
    <p class='text'>${users[currentIndex].leiras}</p>
    </div>`


user.innerHTML = output

document.getElementById("back").addEventListener("click", function(){
    currentIndex = (currentIndex - 1 + users.length) % users.length; 
    output = ""
    output += `<div class='user'>
    <div class='img-container'>
    <img  src='${users[currentIndex].kep}' >
    </div>
    <p> <b> ${users[currentIndex].nev} </b></p>
    <p class='munka' > ${users[currentIndex].munka}</p>
    <p class='text'>${users[currentIndex].leiras}</p>
    </div>`

    user.innerHTML = output
    

   

})

document.getElementById("forward").addEventListener("click", function(){
    currentIndex = (currentIndex + 1) % users.length
    output = ""
    output += `<div class='user'>
    <div class='img-container'>
    <img  src='${users[currentIndex].kep}' >
    </div>
    <p> <b> ${users[currentIndex].nev} </b></p>
    <p class='munka' > ${users[currentIndex].munka}</p>
    <p class='text'>${users[currentIndex].leiras}</p>
    </div>`

    user.innerHTML = output

    
})