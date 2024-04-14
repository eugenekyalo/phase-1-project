// Function to handle shaking the Magic 8 Ball
function shakeBall(age) {
    handlePreferences(age);
}

// Function to determine if the user is a fan of comics
function isComicFan() {
    // You can implement your logic here to determine if the user is a fan of comics
    // For demonstration purposes, let's assume a variable called isComicFan which is true if the user is a fan, false otherwise
    const isComicFan = true; // Change this based on your actual logic
    return isComicFan;
}

// Function to determine if the user is above 16 years old
function isAbove16(age) {
    return age > 16;
}

// Function to determine the century the user is living in
function getCentury() {
    const currentYear = new Date().getFullYear();
    if (currentYear >= 2000) {
        return 21; // 21st century
    } else if (currentYear >= 1800 && currentYear < 1900) {
        return 19; // 19th century
    } else {
        return null; // Unknown century
    }
}

// Function to handle redirection based on user preferences
function handlePreferences(age) {
    if (isComicFan()) {
        if (isAbove16(age)) {
            const century = getCentury();
            if (century === 21) {
                window.location.href = 'games.html'; // Redirect to games page for 21st century comic fans above 16
            } else if (century === 19) {
                // Show the image of comics
                document.getElementById('answerImage').src = 'commics and games/DC-Comics-Superheroes.webp,commics and games/clean.jpg';
                document.getElementById('answerImage').style.display = 'block';
            }
        } else {
            window.location.href = 'games.html'; // Redirect to games page for comic fans below 16
        }
    } else {
        // Show the image of games
        document.getElementById('answerImage').src = 'commics and games/sHHrkGc5ImNq1yfh9yRyEbyUD7runrmF.webp,commics and games/avengers_title_hero_art_1920x1080.jpg';
        document.getElementById('answerImage').style.display = 'block';
    }
}
