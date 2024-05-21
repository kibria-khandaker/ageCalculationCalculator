document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const birthdate = new Date(document.getElementById('birthdate').value);
    const futuredateInput = document.getElementById('futuredate').value;

    let futuredate;
    if (futuredateInput) {
        futuredate = new Date(futuredateInput);
    } else {
        futuredate = new Date(); // Use current date if future date is not provided
    }

    // Calculate the year difference
    let years = futuredate.getFullYear() - birthdate.getFullYear();
    
    // Calculate the month difference
    let months = futuredate.getMonth() - birthdate.getMonth();
    if (months < 0 || (months === 0 && futuredate.getDate() < birthdate.getDate())) {
        years--;
        months += 12;
    }
    
    // Calculate the day difference
    let days = futuredate.getDate() - birthdate.getDate();
    if (days < 0) {
        months--;
        const lastMonth = new Date(futuredate.getFullYear(), futuredate.getMonth() - 1, birthdate.getDate());
        days += (new Date(futuredate.getFullYear(), futuredate.getMonth(), 0)).getDate();
    }

    let ageString;
    if (futuredateInput) {
        ageString = `On ${futuredate.toLocaleDateString()}, your age will be ${years} years, ${months} months, and ${days} days.`;
    } else {
        ageString = `As of today, your age is ${years} years, ${months} months, and ${days} days.`;
    }

    document.getElementById('result').textContent = ageString;
});
