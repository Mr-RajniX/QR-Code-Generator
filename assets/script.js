const wrapper = document.querySelector(".wrapper"),
qrIn = document.querySelector(".textContainer input"),
GenBtn = document.querySelector(".textContainer button"),
QRimg = document.querySelector(".qr-code img");


GenBtn.addEventListener("click", () => {
    let qrValue = qrIn.value;
    if(!qrValue) return; //For non input data
    GenBtn.innerText = "Generating QR Code...."
    QRimg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrValue}`;
    console.log(qrValue);
    QRimg.addEventListener("load", () =>{
        wrapper.classList.add("active");
        GenBtn.innerText = "Generate Now!"
    })
    wrapper.classList.add("active");
});

qrIn.addEventListener("keyup", () =>{
    if(!qrIn.value){
        wrapper.classList.remove("active");
    }
})