const jam = document.getElementById('jam');

function showTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    

    const amPm = h >= 12 ? 'PM' : 'AM';
    

    h = h % 12 || 12;
    
    // Output Time
    jam.innerHTML = `${h}<span> : </span>${addZero(m)}<span> : </span>${addZero(s)} ${amPm}`;
    
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

setInterval(showTime, 1000);