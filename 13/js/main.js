
const btns = document.querySelectorAll("main ul li");
const frame = "section";
const box = "article";
const speed = "0.5s";
const activeClass = "on";
let grid;


//페이지 로드 이벤트
window.addEventListener("load", ()=>{
    init();
    filter(btns);

});




function init(){
    grid = new Isotope(frame, { //배치할 요소를 감싸고 있는 부모 요소명
        itemSelector: box, //배치할 요소명
        columnWidth: box, //너빗값을 구할 요소명
        transitionDuration: speed //화면 재배치 시 요소가 움직이는 속도
    });
}

function filter(arr){
    for(let el of arr){
        el.addEventListener("click", (e)=>{
            e.preventDefault();

            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter:sort
            });

            for(let el of btns){
                el.classList.remove(on);
            }

            e.currentTarget.classList.add("on");
        });
    }
}











///////////////////////////////////////////////////////////////////////////////////

//페이지 로드 이벤트
// window.addEventListener("load", ()=>{
//     const grid = new Isotope("section", { //배치할 요소를 감싸고 있는 부모 요소명
//         itemSelector: "article", //배치할 요소명
//         columnWidth: "article", //너빗값을 구할 요소명
//         transitionDuration: "0.5s" //화면 재배치 시 요소가 움직이는 속도
//     });



//     for(let el of btns){
//         el.addEventListener("click", (e)=>{
//             e.preventDefault();

//             const sort = e.currentTarget.querySelector("a").getAttribute("href");

//             grid.arrange({
//                 filter:sort
//             });

//             for(let el of btns){
//                 el.classList.remove(on);
//             }

//             e.currentTarget.classList.add("on");


//         });
//     }


// });