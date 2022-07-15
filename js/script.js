// header
Vue.component("header-el",{
    data : () => {
        return {
            menuList :[
                ["About", "./about.html"],
                ["Movie", "./movie.html"],
                ["Artist", "./artist.html"],
                ["Audition", "./audition.html"],
                ["Community", "./community.html"],
            ]
        }
    },
    template : `
        <header>
            <div class="wrap">
                <div class="logo">
                    <a href="">
                        <img src="./img/logo_fm.png" alt="로고">
                    </a>
                </div>
                <nav>
                    <ul>
                        <li v-for="list of menuList">
                            <a :href="list[1]">{{list[0]}}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    `
});

Vue.component("banner-el",{
    data : () => {
        return {
            slide_img : [
                "visual.png",
                "visual_02.png",
                "visual_03.png",
                "visual_04.png",
            ]
        }
    },
    template : `
        <div id="slider">
            <div class="slide_frame">
                <div class="slide" v-for="list in slide_img">
                    <div class="bgImg" :style="'background-image:url(./img/'+list+')'"></div>
                    <div class="dark"></div>
                </div>
            </div>
            <div class="wrap">
                <div class="text_part">
                    <h2>지금부터 당신의 영화가 시작됩니다.</h2>
                    <a href="#">오디션 참가</a>
                </div>
            </div>
        </div>

    `
});

Vue.component("cont01-el",{
    data : () => {
        return {
            movieList : [
                {
                    img:"cont_01.png",
                    title : "죄 많은 소녀(blablablabla blabla 2021.09)",
                },
                {
                    img:"cont_02.jpeg",
                    title : "죄 많은 소공녀(hahahahaha blabla 2020.09)",
                },
                {
                    img:"cont_03.jpg",
                    title : "죄 많은 벌새(noooooooo blabla 2051.09)",
                },
            ]
        }
    },
    template : `  
        <div id="movie">
            <div class="wrap">
                <h2>Today's Movie</h2>
                <div class="content">
                    <div class="box" v-for="list in movieList">
                        <div class="movie_item" :style="'background-image:url(./img/'+list.img+')'">
                            <img src="./img/play_icon.png" alt="">
                        </div>
                        <h3>{{list.title}}</h3>
                    </div>
                </div>
            </div>
        </div>
    `
});

new Vue({
    el : "#app"
});

// 제이쿼리 영역 (가동시점은 구조가 완성된 다음에 진행되어야 함)
$(document).ready(function(){
    $("#slider .slide_frame").slick({
        isFinite : true,
        autoplay : true,
        // slick 의 기본 베이스 방향은 
        // horizontal (좌우방향 이동)
        // vertical : true -> 수직방향 슬라이드로 변경
        fade : true,
        cssEase : "linear"
    });
})