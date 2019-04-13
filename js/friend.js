const data = [
    {
        name: 'Lucy',
        age: 30,
        gender: '女',
        relation: '高中同学',
        location: '北京市',
        words: '你好美',
        image: 'images/1.jpg'
    },
    {
        name: 'Lily',
        age: 32,
        gender: '女',
        relation: '高中同学',
        location: '上海市',
        words: '你好瘦',
        image: 'images/2.jpeg'
    },
    {
        name: 'Jane',
        age: 30,
        gender: '女',
        relation: '小学同学',
        location: '福州市',
        words: '你怎么吃都不会胖',
        image: 'images/3.jpeg'
    },
    {
        name: 'Michael',
        age: 30,
        gender: '女',
        relation: '大学同学',
        location: '上海市',
        words: '祝你一夜暴富',
        image: 'images/4.jpg'
    },
    {
        name: 'Zoe',
        age: 32,
        gender: '女',
        relation: '大学同学',
        location: '南京市',
        words: '平安喜乐',
        image: 'images/5.jpg'
    }
];
//迭代器
// function showMessage(msg) {
//     let nextIndex = 0;
//     return {
//         next() {
//             return nextIndex < msg.length ?
//                 { value: msg[nextIndex++], done: false } :
//                 { value: undefined, done: true }
//         }
//     }
// }
//generator生成器
function* showMessage() {
    yield data[0];
    yield data[1];
    yield data[2];
    yield data[3];
    yield data[4];
}
var showmsg = showMessage(data);
var btn = document.getElementById("next");
var content = document.getElementById("profileDisplay");
var img = document.getElementById("imageDisplay");
btn.addEventListener('click', addMsg);
addMsg();
function addMsg() {
    let obj = showmsg.next().value;
    if (obj !== undefined) {
        content.innerHTML = `姓名：${obj.name}<br>性别：${obj.gender}<br>年龄：${obj.age}<br>是你的:${obj.relation}<br/>目前在：${obj.location}<br/>对你的寄语：${obj.words}`;
        img.innerHTML = `<image src="${obj.image}">`
    } else {
        window.location.reload();
    }
}
