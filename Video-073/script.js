function createCard(title,cName, views, monthsOld, duration, thumbnail) {
let v = "0M Views"; 
    let y = "0 years ago";
    if (views<1000) {
        v = `${views}Views`;
    } else if (views < 100000) { 
 v = `${(views/1000).toFixed(2)}K Views`;
    }
    else if (views < 10000000) { 
 v = `${(views/100000).toFixed(2)}M Views`;
    }
    else if (views < 10000000000) { 
 v = `${(views/10000000).toFixed(2)}Cr Views`;
    }

if(monthsOld<12){
        y=`${monthsOld} months ago`
    }else {
        y=`${(monthsOld/12).toFixed(1)}years ago`
    }

    let cards = `
    <div class="cards">
    <div class="left">
      <img
        src="${thumbnail}"
        alt="Image Error!">
      <span class="time">${duration}</span>
    </div>
    <div class="right">
      <div class="title">${title}</div>
      <div class="vay">
       <div class="cname">${cName}</div>
        <div class="view">
          ${v}
        </div>
        <div class="year">
          ${y}
        </div>
      </div>
    </div>
    </div>`;

    document.querySelector(".container").insertAdjacentHTML("beforeend", cards);

}

createCard(
    "JavaScript Tutorial for Beginners | Sigma Web Dev Course Video #13",
    "CodeWithHarry",
    580000,
    4,
    "31:20",
    "https://i.ytimg.com/vi/CyRlWlaJnTY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1R2PKIPQMWoH2j-NKBuRSlJjFRw"
)

createCard(
    "JavaScript Tutorial for Beginners | Sigma Web Dev Course Video #13",
    "Carry Minati",
    58000000,
    45,
    "51:20",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Met_wGkMcwd1-a8nD455gwHaFj%3Fpid%3DApi&f=1&ipt=4326f4c263d48c4831571d482c6e65df10e6c3cd02ac0c000e37ab5ca1d007f5&ipo=images"
)
createCard(
    "Nature Logo Png Picture - Nature Png Logo,Nature Logo - free",
    "Nature",
    580000,
    25,
    "31:20",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.WjfqeUgspzxEzWUerg981gHaGO%3Fr%3D0%26pid%3DApi&f=1&ipt=feae54fc0b12a0b1b0aec3d65328b3f1cbb0f3bf7368e6eb4ce280c3f3271de4&ipo=images"
)




// function v(views) {
//     let v = "0 M Views"; 
//     let y = "0 years ago";
//     if (views<1000) {
//         v = `${views} Views`;
//     } else if (views < 100000) { 
//  v = `${(views/1000).toFixed(2)} K Views`;
//     }
//     else if (views < 10000000) { 
//  v = `${(views/100000).toFixed(2)} M Views`;
//     }
//     else if (views < 10000000000) { 
//  v = `${(views/10000000).toFixed(2)} Cr Views`;
//     }
// return v;
// }
// function y(year) {
//     let v = "0 M Views"; 
//     let y = "0 years ago";
//     if(year<12){
//         y=`${year} months ago`
//     }else {
//         y=`${(year/12).toFixed(1)} years ago`
//     }
// return y;
// }

// console.log(v(999999999));
// console.log(y(13));