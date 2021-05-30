import './index.less';

console.log('index1')
console.log('process.env.NODE_ENV', process.env.NODE_ENV)

document.body.onclick = function(){
    document.getElementById('box').style.height = '300px'
}
