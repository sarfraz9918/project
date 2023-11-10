function calculateAge() {
    const dobInput = document.getElementById('dob');
    const resultElement = document.getElementById('result');

    const dob = new Date(dobInput.value);
    const today = new Date();

    if (dob >= today) {
        resultElement.textContent = "Please enter a valid Date of Birth.";
        return;
    }

    const ageInMilliseconds = today - dob;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = ageInDays / 365.25;

    const fullYears = Math.floor(ageInYears);
    const remainingDays = Math.floor((ageInYears - fullYears) * 365.25);
    resultElement.textContent = `You are ${fullYears} Years and ${remainingDays} days old.`;
}