function firstname() {
    console.log("yagnik");
}

function surname(callback) {
    setTimeout(() => {
        console.log("sid");
        callback()
    }, 3000);
}

// firstname(surname);
surname(firstname);