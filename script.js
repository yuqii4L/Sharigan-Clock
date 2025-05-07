function updateClock() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2,'0');
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let seconds =String(now.getSeconds()).padStart(2,'0');
    
    let ampm = hours <= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;     

    const timeString =`${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;

}

setInterval(updateClock, 1000);

updateClock();

