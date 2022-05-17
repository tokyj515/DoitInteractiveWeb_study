//자주쓰는 변수는 꼭 할당해두기
//const는 변하지 않는 값, let은 변할 수 있는 값

//실습1
// const frame = document.querySelector("#wrap");
// console.log(frame);


// const box1 = document.querySelector("#wrap .box1");
// console.log(box1);


// const items = document.querySelectorAll("#wrap article");
// for(let item of items){
//     console.log(item);
// }

// for(let i=0; i<items.length; i++){
//     console.log(items[i]);
// }



//실습2
// const list = document.querySelector(".list")
// const items = list.children;

// console.log(items);


// const item2 = document.querySelector(".item2");
// console.log(item2.parentElement);

// const item3 = document.querySelector(".item3");
// console.log(item3.previousElementSibling);
// console.log(item3.nextElementSibling);



//실습3
// const box = document.querySelector("#box");
// box.style.width = "10%";



//실습4
//변수명.addEventListener(이벤트이름, 함수);
//화살표함수(애로우펑션) ()=>{}
//e.preventDefault();  -> 링크기능을 강제로 막음
// const link = document.querySelector("a");
// link.addEventListener("click",(e)=>{
//     e.preventDefault(); 
//     console.log("링크를 클릭했습니다.");
// });



//실습5
// const box = document.querySelector("#box");
// box.addEventListener("mouseenter", ()=>{
//     box.style.backgroundColor = "hotpink";
// });
// box.addEventListener("mouseleave", ()=>{
//     box.style.backgroundColor = "aqua";
// });





//실습6
// const list = document.querySelectorAll(".list li");

// for(let el of list){
//     el.addEventListener("click", (e)=>{
//         e.preventDefault();
//         console.log(e.currentTarget.innerText);
//     });
// }





//실습7
// const btnPlus = document.querySelector(".btnPlus");
// const btnMinus = document.querySelector(".btnMinus");

// let num = 0;
// btnPlus.addEventListener("click", (e)=>{
//     e.preventDefault();
//     num++;
//     console.log(num);
// });
// btnMinus.addEventListener("click", (e)=>{
//     e.preventDefault();
//     num--;
//     console.log(num);
// });





//--그냥 실습(문자 안에 변수 삽입하기)
// const myName = "홍길동";
// console.log("내 이름은 "+myName+"입니다.")
// console.log(`내 이름은 ${myName}입니다.`);




//실습8
// const btnLeft = document.querySelector(".btnLeft");
// const btnRight = document.querySelector(".btnRight");
// const box = document.querySelector("#box");
// const deg = 45;
// let num = 0;

// btnLeft.addEventListener("click", (e)=>{
//     e.preventDefault();
//     num--;
//     box.style.transform = `rotate(${num*deg}deg)`;
// });

// btnRight.addEventListener("click", (e)=>{
//     e.preventDefault();
//     num++;
//     box.style.transform = `rotate(${num*deg}deg)`;
// });





//실습9
// const wrap = document.querySelector("#wrap");
// const box = document.querySelector("article");

// // wrap.addEventListener("click", ()=>{
// //    // box.style.backgroundColor = "hotpink";  //인라인스타일값 -> 좋은 변경 방법은 아님
// //    wrap.classList.add("on");
// // });

// wrap.addEventListener("click", ()=>{
//     let isOn = wrap.classList.contains("on");
//     console.log(isOn);
    
//     // if(isOn){
//     //     wrap.classList.remove("on");
//     // }else{
//     //     wrap.classList.add("on");
//     // }


//     // (isOn)? 
//     // wrap.classList.remove("on"):wrap.classList.add("on");



//     wrap.classList.toggle("on");
//  });







//실습10


 