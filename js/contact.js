let contactFunc = async function() {
    let qqBtn = document.getElementsByClassName("link-btn")[0];
    let qqImg = document.getElementById("link-qq-img");
    qqBtn.addEventListener('mouseover', e => {
        qqImg.style.display="block";
    });
    qqBtn.addEventListener('mouseout', e => {
        qqImg.style.display="none";
    });

    let weixinBtn = document.getElementsByClassName("link-btn")[1];
    let weixinImg = document.getElementById("link-weixin-img");
    weixinBtn.addEventListener('mouseover', e => {
        weixinImg.style.display="block";
    });
    weixinBtn.addEventListener('mouseout', e => {
        weixinImg.style.display="none";
    });
};
contactFunc();

