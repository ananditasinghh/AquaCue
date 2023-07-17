
  
const plantData = {
    "Rose": {"name": "Rose", "species": "Rosa", "wateringFrequency": 2, "sunlightRequirement": 8, "growthStage": "Young"},
    "Lily": {"name": "Lily", "species": "Lilium", "wateringFrequency": 3, "sunlightRequirement": 6, "growthStage": "Growing"},
    "Sunflower": {"name": "Sunflower", "species": "Helianthus", "wateringFrequency": 1, "sunlightRequirement": 7, "growthStage": "Mature"}
};

// Get references to the form and result container
const form = document.getElementById('plant-form');
const resultContainer = document.getElementById('result-container');

// Add event listener to form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const plantName = document.getElementById('plant-name').value;
    const daysSinceWatering = parseInt(document.getElementById('days-since-watering').value);
    const growthStage = document.getElementById('growth-stage').value;

    // Clear previous results
    resultContainer.innerHTML = '';

    // Display plant information
    const plantInfoTitle = document.createElement('h2');
    plantInfoTitle.textContent = 'Plant Information:';
    plantInfoTitle.classList.add('result-title');
    resultContainer.appendChild(plantInfoTitle);

    const plantInfoList = document.createElement('ul');
    resultContainer.appendChild(plantInfoList);

    const addPlantInfo = function(label, value) {
        const listItem = document.createElement('li');
        listItem.textContent = label + ': ' + value;
        listItem.classList.add('result-item');
        plantInfoList.appendChild(listItem);
    };

    if (plantData.hasOwnProperty(plantName)) {
        const plant = plantData[plantName];

        addPlantInfo('Name', plant.name);
        addPlantInfo('Species', plant.species);
        addPlantInfo('Watering Frequency', plant.wateringFrequency + ' days');
        addPlantInfo('Sunlight Requirement', plant.sunlightRequirement + ' hours');
        addPlantInfo('Growth Stage', plant.growthStage);

        // Provide care reminders
        const careRemindersTitle = document.createElement('h2');
        careRemindersTitle.textContent = 'Care Reminders:';
        careRemindersTitle.classList.add('result-title');
        resultContainer.appendChild(careRemindersTitle);

        const addCareReminder = function(text) {
            const careReminderItem = document.createElement('p');
            careReminderItem.textContent = text;
            careReminderItem.classList.add('result-item');
            resultContainer.appendChild(careReminderItem);
        };

        const daysUntilNextWatering = plant.wateringFrequency - daysSinceWatering;
        if (daysSinceWatering >= plant.wateringFrequency) {
            addCareReminder("It's time to water " + plantName + "!");
        } else if (daysUntilNextWatering > 0) {
            addCareReminder(plantName + " should be watered in " + daysUntilNextWatering + " day(s).");
        } else {
            addCareReminder("No watering needed for " + plantName + " right now.");
        }

        if (new Date().getHours() >= 6 && new Date().getHours() <= 18) {
            if (new Date().getHours() < plant.sunlightRequirement) {
                addCareReminder("Make sure " + plantName + " gets enough sunlight!");
            }
        } else {
            addCareReminder("It's nighttime. " + plantName + " should be in a dark environment.");
        }

        if (growthStage !== plant.growthStage) {
            addCareReminder("Consider updating the growth stage for " + plantName + ".");
        }
    } else {
        const plantNotFound = document.createElement('p');
        plantNotFound.textContent = 'Plant not found!';
        plantNotFound.classList.add('result-item');
        resultContainer.appendChild(plantNotFound);
    }

    // Scroll to the result container
    resultContainer.scrollIntoView({ behavior: 'smooth' });
});
