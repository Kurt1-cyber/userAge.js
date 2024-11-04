function categorizeAge(age) {
    if (age < 0) {
        return "Invalid age";
    } else if (age > 0 && age <= 5) {
        return "Toddler";
    } else if (age >= 6 && age <= 12) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teenager";
    } else if (age >= 20 && age <= 35) {
        return "Young Adult";
    } else if (age >= 36 && age <= 60) {
        return "Middle Age";
    } else {
        return "Senior";
    }
}

const ages = [2, 7, 15, 25, 40, 70, -1];
ages.forEach(age => {
    const category = categorizeAge(age);
    console.log(`Age ${age} falls under the category: ${category}`);
});
