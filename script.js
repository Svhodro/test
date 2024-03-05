
// diclar all needed component and html element
let searchValue = document.querySelector("#input-value")
let searchBtn = document.querySelector("#Search")
let allSearch = document.querySelector(".add")
let mainCard = document.querySelector(".show")
let cont = document.querySelector(".conent")
let fatchData;

//inisial counters for looping
let count = 0;
let a=0;

//fetching all item data fungtion

//all main card data and function's
async function datafatch(all, valu) {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?${all + valu}`);
    let data = await res.json();
  
  
  
    allSearch.textContent = "";
    data.posts.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
  <div class="cerd flex lg:flex-row flex-col gap-8 bg-slate-200 lg:h-72 rounded-lg p-2">
  <div class="avtar ">
    <div class="avatar lg:w-20">
  
      <div class="w-24 rounded-xl">
        <img src="${item.image}" />
      </div>
      <div class="badge badge-success badge-sm ${item.isActive ? 'bg-green-500' : 'bg-red-500'} absolute right-[-5px] top-[-5px]"></div>
    </div>
  </div>
  <div class="Contents flex flex-col gap-4">
    <div class="headers flex gap-4 font-bold">
      <p># ${item.category}</p>
      <p>Author : ${item.author.name}</p>
    </div>
    <p class="font-bold text-xl ${count}">${item.title}</p>
    <p>It's one thing to subject yourself to ha Halloween costume mishap because, <br>
      hey that's your prerogative</p>
    <hr class="border-dashed bg-slate-500 ">
    <div class="flex  justify-between text-slate-500">
      <div class="flex gap-3">
        <p>
          <span> <i class="fa-regular fa-message"></i> </span>
          <span> ${item.comment_count}</span>
        </p>
        <p>
          <span> <i class="fa-regular fa-eye"></i></span>
          <span class="${count}" > ${item.view_count}</span>
        </p>
        <p>
          <span> <i class="fa-regular fa-clock"></i></span>
          <span>${item.posted_time}</span>
        </p>
      </div>
      <div class="tab ${count} ">
        <button class="btn btn-circle btn-success " >
          <i class="fa-solid fa-envelope-open "></i>
        </button>
      </div>
  
  
  
    </div>
  
  </div>
  </div>
  `
      allSearch.appendChild(div)
      count++
  
    });
    // console.log(data)
    // element creation
  }

 // letest data for card function

 const latestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    mainCard.innerHTML = "";
  
    data.forEach(item => {
  
      const div = document.createElement('div');
     
      div.innerHTML = `<div class="card  bg-base-300 shadow-xl">
            <figure class="p-4"><img src="${item.cover_image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="text-lg"><i class="fa-regular fa-calendar-check"></i> <span>${item.author.posted_date ? item.author.posted_date : 'No Publish date'}</span></h2>
              <p class="text-lg font-bold">${item.title}</p>
                <p>${item.description} </p>
              <div>
                <div class="flex m-3 gap-3">
                  <div class="avatar">
                    <div class="w-16 rounded-full">
                      <img src="${item.profile_image}" />
                    </div>
                  </div>
  
                  <div class="content flex flex-col">
                    <p class="font-bold">${item.author.name}</p>
                    <p>${item.author.designation ? item.author.designation : 'Unknown'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`
        ;
      mainCard.appendChild(div);
  
    });
  
  };
  
  // calling all fungtion
  

  datafatch()
  latestPost()

// btn event all for all 
searchBtn.addEventListener('click', async (all, valu) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?${all + valu}`);
    let fatch = await res.json();
  
    allSearch.textContent = "";
  
  
    fatch.posts.forEach(item => {
      let value=(String(searchValue.value))
      let catagory=(String(item.category))
      if ( value.toLowerCase()===catagory.toLowerCase()) {
  
  
  
        const div = document.createElement('div');
        
        div.innerHTML = `
        <div class="cerd flex lg:flex-row flex-col gap-8 bg-slate-200 lg:h-72 rounded-lg p-2">
        <div class="avtar ">
          <div class="avatar lg:w-20">
        
            <div class="w-24 rounded-xl">
              <img src="${item.image}" />
            </div>
            <div class="badge badge-success badge-sm ${item.isActive ? 'bg-green-500' : 'bg-red-500'} absolute right-[-5px] top-[-5px]"></div>
          </div>
        </div>
        <div class="Contents flex flex-col gap-4">
          <div class="headers flex gap-4 font-bold">
            <p># ${item.category}</p>
            <p>Author : ${item.author.name}</p>
          </div>
          <p class="font-bold text-xl ${count}">${item.title}</p>
          <p>It's one thing to subject yourself to ha Halloween costume mishap because, <br>
            hey that's your prerogative</p>
          <hr class="border-dashed bg-slate-500 ">
          <div class="flex  justify-between text-slate-500">
            <div class="flex gap-3">
              <p>
                <span> <i class="fa-regular fa-message"></i> </span>
                <span> ${item.comment_count}</span>
              </p>
              <p>
                <span> <i class="fa-regular fa-eye"></i></span>
                <span class="${count}" > ${item.view_count}</span>
              </p>
              <p>
                <span> <i class="fa-regular fa-clock"></i></span>
                <span>${item.posted_time}</span>
              </p>
            </div>
            <div class="tab ${count} ">
              <button class="btn btn-circle btn-success " >
                <i class="fa-solid fa-envelope-open "></i>
              </button>
            </div>
        
        
        
          </div>
        
        </div>
        </div>
        `
        allSearch.appendChild(div)
  
        
        
  
      }
    })
    setTimeout(() => {
      let btn = document.querySelectorAll(".tab")
      // console.log(btn);
     
      btn.forEach(item => {
        item.addEventListener('click', () => {
          let id = item.classList[1]
          let dataArray = document.getElementsByClassName(`${id}`)
          let title = dataArray[0].innerHTML;
          let see = dataArray[1].innerHTML;
          let div = document.createElement('div');
          div.innerHTML = `
            <div class="flex gap-3 bg-slate-50 rounded-lg p-3">
                  <div class="font-bold">
                    <p>${title}</p>
                  </div>
                  <div>
                    <p class="flex text-center gap-2"><i class="fa-regular fa-eye m-1"></i> <span>${see}</span></p>
      
                  </div>
      
                </div>
            `
          cont.appendChild(div);
          a++;
          let change=document.querySelector(".row");
          change.innerHTML=a;
        })
      })
    
    }, 2000)
  
  });

//btn for minimum search  
setTimeout(() => {
    let btn = document.querySelectorAll(".tab")
    // console.log(btn);
   
    btn.forEach(item => {
      item.addEventListener('click', () => {
        let id = item.classList[1]
        let dataArray = document.getElementsByClassName(`${id}`)
        let title = dataArray[0].innerHTML;
        let see = dataArray[1].innerHTML;
        let div = document.createElement('div');
        div.innerHTML = `
          <div class="flex gap-3 bg-slate-50 rounded-lg p-3">
                <div class="font-bold">
                  <p>${title}</p>
                </div>
                <div>
                  <p class="flex text-center gap-2"><i class="fa-regular fa-eye m-1"></i> <span>${see}</span></p>
    
                </div>
    
              </div>
          `
        cont.appendChild(div);
      a++;
      let change=document.querySelector(".row");
      change.innerHTML=a;
      })
    })
  
  }, 2000);