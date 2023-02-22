const up = document.querySelector('#up');
const down = document.querySelector('#down');
const banner_spin = document.querySelector('.banner_spin');
const charecter = document.querySelector('#charecter');
const charecter_img = document.querySelector('#charecter_img');
const charecter_img_anim = document.querySelector('#charecter_img_anim');
const login_btn = document.querySelector('#login_btn');
const form_login = document.querySelector('#form_login');
const form_password = document.querySelector('#form_password');
const signup_a = document.querySelector('#signup_a');
const logout_a = document.querySelector('#logout_a');
const container = document.querySelector('.container');
const signin= document.querySelector('.signin');
const logo = document.querySelector('.logo');

/* login values */
const login = 'admin';
const password = 'admin';

const chr = {
    1 : './images/charecters/Character_Albedo_Wish.png',
    2 : './images/charecters/Character_Arataki_Itto_Wish.png',
    3 : './images/charecters/Character_Diluc_Wish.png',
    4 : './images/charecters/Character_Hu_Tao_Wish.png',
    5 : './images/charecters/Character_Jean_Wish.png',
    6 : './images/charecters/Character_Kaedehara_Kazuha_Wish.png',
    7 : './images/charecters/Character_Kamisato_Ayaka_Wish.png',
    8 : './images/charecters/Character_Kamisato_Ayato_Wish.png',
    9 : './images/charecters/Character_Keqing_Wish.png',
    10 : './images/charecters/Character_Klee_Wish.png',
    11 : './images/charecters/Character_Mona_Wish.png',
    12 : './images/charecters/Character_Qiqi_Wish.png',
    13 : './images/charecters/Character_Raiden_Shogun_Wish.png',
    14 : './images/charecters/Character_Sangonomiya_Kokomi_Wish.png',
    15 : './images/charecters/Character_Shenhe_Wish.png',
    16 : './images/charecters/Character_Tartaglia_Wish.png',
    17 : './images/charecters/Character_Venti_Wish.png',
    18 : './images/charecters/Character_Xiao_Wish.png',
    19 : './images/charecters/Character_Yae_Miko_Wish.png',
    20 : './images/charecters/Character_Yoimiya_Wish.png',
    21 : './images/charecters/Character_Zhongli_Wish.png'
}



/* login */
login_btn.addEventListener('click', function(){
    //if ((login == form_login.value)&&(password == form_password.value)){
        logout_a.setAttribute('class', '');
        signup_a.setAttribute('class', 'none');
        logo.setAttribute('class', 'logo');
        signin.setAttribute('class', 'signin none');
        container.setAttribute('class', 'container');
        console.log('Успешный вход');
   // }
    //else{
        signin.setAttribute('class','signin wrong');
        console.log('Логин или пароль не верны');
   // }
})



banner_spin.addEventListener('click', function(){
    let rnd = Math.floor(Math.random() * 21)+1;
    charecter_img.setAttribute('src', `${chr[rnd]}`)
    charecter.setAttribute('class', 'charecter');
    charecter_img.setAttribute('class', 'charecter_img');
    charecter.addEventListener('click',function(){
        charecter.setAttribute('class', 'charecter none');
        charecter_img.setAttribute('class', 'charecter_img none');
    })
})

