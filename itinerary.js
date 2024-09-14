function formatNumberWithPunctuation(number) {
    let numStr = number.toString();
    let [integerPart] = numStr.split('.');
    let lastThree = integerPart.slice(-3);
    let otherParts = integerPart.slice(0, -3);
    if (otherParts !== '') {
        lastThree = ',' + lastThree;
    }
    let formatted = otherParts.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    return formatted;
}

const savedName = localStorage.getItem("savedName");
const savedDestination = localStorage.getItem("savedDestination")
const savedBudget = formatNumberWithPunctuation(localStorage.getItem("savedBudget"));
const savedstartDate = localStorage.getItem("savedStartDate");
const savedEndDate = localStorage.getItem("savedEndDate");

console.log(savedName);


document.getElementById("name-info").innerText = savedName;
document.getElementById("destination-info").innerText = savedDestination;
document.getElementById("budget-info").innerText = `₹${savedBudget}`;
document.getElementById("dates-info").innerText = `${savedstartDate} to ${savedEndDate}`

dayTable = {
    "day1": "<table><tr><th>TITLE</th><th>DESCRIPTION</th></tr><tr><td>Arrival</td><td>Reach Darjeeling by train or flight.</td></tr><tr><td>Accommodation</td><td>Check into your hotel.</td></tr><tr><td>Evening</td><td>Explore the local market and enjoy a relaxing evening.</td></tr></table>",

    "day2": "<table><tr><th>TITLE</th><th>DESCRIPTION</th></tr><tr><td>Morning</td><td>Visit Tiger Hill for sunrise views.</td></tr><tr><td>Late Morning</td><td>Explore Batasia Loop.</td></tr><tr><td>Afternoon</td><td>Visit War Memorial and Ghoom Monastery.</td></tr></table>",

    "day3": "<table><tr><th>TITLE</th><th>DESCRIPTION</th></tr><tr><td>Morning</td><td>Visit Happy Valley Tea Estate.</td></tr><tr><td>Activities</td><td>Tour the tea estate, learn about tea production, and enjoy a tea tasting session.</td></tr></table>",

    "day4": "<table><tr><th>TITLE</th><th>DESCRIPTION</th></tr><tr><td>Morning</td><td>Visit Padmaja Naidu Himalayan Zoological Park.</td></tr><tr><td>Afternoon</td><td>Explore the Himalayan Mountaineering Institute.</td></tr></table>",

    "day5": "<table><tr><th>TITLE</th><th>DESCRIPTION</th></tr><tr><td>Day Trip</td><td>Travel to Kalimpong.</td></tr><tr><td>Sightseeing</td><td>Visit Zang Dhok Palri Phodang Monastery and explore the local market.</td></tr></table>",

    "day6": "<table><tr><th>TITLE</th><th>DESCRIPTION</th></tr><tr><td>Day Trip</td><td>Travel to Mirik.</td></tr><tr><td>Activities</td><td>Enjoy boating on Mirik Lake and explore the local area.</td></tr></table>",

    "day7": "<table><tr><th>TITLE</th><th>DESCRIPTION</th></tr><tr><td>Day Trip</td><td>Travel to Pelling.</td></tr><tr><td>Sightseeing</td><td>Visit Pemayangtse Monastery and Khecheopalri Lake.</td></tr></table>",

    "day8": "<table><tr><th>TITLE</th><th>DESCRIPTION</th></tr><tr><td>Return</td><td>Head back to Darjeeling.</td></tr><tr><td>Relaxation</td><td>Enjoy local cuisine and relax.</td></tr></table>",

    "day9": "<table><tr><th>TITLE</th><th>DESCRIPTION</th></tr><tr><td>Morning</td><td>Ride the Darjeeling Ropeway.</td></tr><tr><td>Afternoon</td><td>Explore local markets and shops.</td></tr></table>",

    "day10": "<table><tr><th>TITLE</th><th>DESCRIPTION</th></tr><tr><td>Morning</td><td>Relax and do some last-minute shopping.</td></tr><tr><td>Departure</td><td>Check out and depart from Darjeeling.</td></tr></table>"
}

