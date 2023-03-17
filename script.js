const input = document.querySelector("input")
const qrCode = document.querySelector("#qrcode")

document.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        genQRCode()
    }
})

function genQRCode() {
    if (!input.value) return
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
}