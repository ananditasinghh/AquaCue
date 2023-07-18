// Define an object with the plant data
const plantData = {
    "Rose": {
        "name": "Rose",
        "species": "Rosa",
        "wateringFrequency": 2,
        "sunlightRequirement": 8,
        "growthStage": "Young"
    },
    "Lily": {
        "name": "Lily",
        "species": "Lilium",
        "wateringFrequency": 3,
        "sunlightRequirement": 6,
        "growthStage": "Growing"
    },
    "Sunflower": {
        "name": "Sunflower",
        "species": "Helianthus",
        "wateringFrequency": 1,
        "sunlightRequirement": 7,
        "growthStage": "Mature"
    },
    "Orchid": {
        "name": "Orchid",
        "species": "Orchidaceae",
        "wateringFrequency": 5,
        "sunlightRequirement": 5,
        "growthStage": "Young"
    },
    "Fern": {
        "name": "Fern",
        "species": "Polypodiopsida",
        "wateringFrequency": 4,
        "sunlightRequirement": 4,
        "growthStage": "Growing"
    },
    "Tulip": {
        "name": "Tulip",
        "species": "Tulipa",
        "wateringFrequency": 4,
        "sunlightRequirement": 6,
        "growthStage": "Growing"
    },
    "Daisy": {
        "name": "Daisy",
        "species": "Bellis perennis",
        "wateringFrequency": 2,
        "sunlightRequirement": 5,
        "growthStage": "Young"
    },
    "Lavender": {
        "name": "Lavender",
        "species": "Lavandula",
        "wateringFrequency": 3,
        "sunlightRequirement": 7,
        "growthStage": "Mature"
    },
    "Cactus": {
        "name": "Cactus",
        "species": "Cactaceae",
        "wateringFrequency": 5,
        "sunlightRequirement": 8,
        "growthStage": "Young"
    },
    "Ivy": {
        "name": "Ivy",
        "species": "Hedera",
        "wateringFrequency": 3,
        "sunlightRequirement": 4,
        "growthStage": "Growing"
    },
    "Begonia": {
        "name": "Begonia",
        "species": "Begonia",
        "wateringFrequency": 3,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    },
    "Ficus": {
        "name": "Ficus",
        "species": "Ficus",
        "wateringFrequency": 4,
        "sunlightRequirement": 6,
        "growthStage": "Young"
    },
    "Snake Plant": {
        "name": "Snake Plant",
        "species": "Sansevieria",
        "wateringFrequency": 2,
        "sunlightRequirement": 4,
        "growthStage": "Mature"
    },
    "Peace Lily": {
        "name": "Peace Lily",
        "species": "Spathiphyllum",
        "wateringFrequency": 2,
        "sunlightRequirement": 5,
        "growthStage": "Young"
    },
    "ZZ Plant": {
        "name": "ZZ Plant",
        "species": "Zamioculcas zamiifolia",
        "wateringFrequency": 3,
        "sunlightRequirement": 6,
        "growthStage": "Growing"
    },
    "Rosemary": {
        "name": "Rosemary",
        "species": "Rosmarinus officinalis",
        "wateringFrequency": 4,
        "sunlightRequirement": 6,
        "growthStage": "Mature"
    },
    "Peony": {
        "name": "Peony",
        "species": "Paeonia",
        "wateringFrequency": 3,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    },
    "Marigold": {
        "name": "Marigold",
        "species": "Tagetes",
        "wateringFrequency": 2,
        "sunlightRequirement": 5,
        "growthStage": "Young"
    },
    "Basil": {
        "name": "Basil",
        "species": "Ocimum basilicum",
        "wateringFrequency": 3,
        "sunlightRequirement": 6,
        "growthStage": "Mature"
    },
    "Hibiscus": {
        "name": "Hibiscus",
        "species": "Hibiscus",
        "wateringFrequency": 5,
        "sunlightRequirement": 7,
        "growthStage": "Growing"
    },
    "Succulent": {
        "name": "Succulent",
        "species": "Succulentus",
        "wateringFrequency": 2,
        "sunlightRequirement": 4,
        "growthStage": "Mature"
    },
    "Azalea": {
        "name": "Azalea",
        "species": "Rhododendron",
        "wateringFrequency": 4,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    },
    "Jasmine": {
        "name": "Jasmine",
        "species": "Jasminum",
        "wateringFrequency": 3,
        "sunlightRequirement": 6,
        "growthStage": "Young"
    },
    "Croton": {
        "name": "Croton",
        "species": "Codiaeum",
        "wateringFrequency": 2,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    },
    "Daffodil": {
        "name": "Daffodil",
        "species": "Narcissus",
        "wateringFrequency": 3,
        "sunlightRequirement": 6,
        "growthStage": "Young"
    },
    "Zinnia": {
        "name": "Zinnia",
        "species": "Zinnia",
        "wateringFrequency": 2,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    },
    "Morning Glory": {
        "name": "Morning Glory",
        "species": "Ipomoea",
        "wateringFrequency": 1,
        "sunlightRequirement": 6,
        "growthStage": "Young"
    },
    "Carnation": {
        "name": "Carnation",
        "species": "Dianthus",
        "wateringFrequency": 3,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    },
    "Peperomia": {
        "name": "Peperomia",
        "species": "Peperomia",
        "wateringFrequency": 4,
        "sunlightRequirement": 4,
        "growthStage": "Mature"
    },
    "Bird of Paradise": {
        "name": "Bird of Paradise",
        "species": "Strelitzia reginae",
        "wateringFrequency": 3,
        "sunlightRequirement": 6,
        "growthStage": "Young"
    },
    "Maidenhair Fern": {
        "name": "Maidenhair Fern",
        "species": "Adiantum",
        "wateringFrequency": 2,
        "sunlightRequirement": 4,
        "growthStage": "Growing"
    },
    "Spider Plant": {
        "name": "Spider Plant",
        "species": "Chlorophytum comosum",
        "wateringFrequency": 2,
        "sunlightRequirement": 6,
        "growthStage": "Young"
    },
    "Rubber Plant": {
        "name": "Rubber Plant",
        "species": "Ficus elastica",
        "wateringFrequency": 4,
        "sunlightRequirement": 6,
        "growthStage": "Mature"
    },
    "Money Tree": {
        "name": "Money Tree",
        "species": "Pachira aquatica",
        "wateringFrequency": 3,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    },
    "Aloe Vera": {
        "name": "Aloe Vera",
        "species": "Aloe vera",
        "wateringFrequency": 2,
        "sunlightRequirement": 5,
        "growthStage": "Young"
    },
    "Pothos": {
        "name": "Pothos",
        "species": "Epipremnum aureum",
        "wateringFrequency": 2,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    },
    "Chinese Evergreen": {
        "name": "Chinese Evergreen",
        "species": "Aglaonema",
        "wateringFrequency": 3,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    },
    "Snake Plant (Cylindrica)": {
        "name": "Snake Plant (Cylindrica)",
        "species": "Sansevieria cylindrica",
        "wateringFrequency": 2,
        "sunlightRequirement": 4,
        "growthStage": "Mature"
    },
    "Calathea": {
        "name": "Calathea",
        "species": "Calathea",
        "wateringFrequency": 3,
        "sunlightRequirement": 5,
        "growthStage": "Young"
    },
    "Hoya": {
        "name": "Hoya",
        "species": "Hoya",
        "wateringFrequency": 2,
        "sunlightRequirement": 4,
        "growthStage": "Mature"
    },
    "Fittonia": {
        "name": "Fittonia",
        "species": "Fittonia",
        "wateringFrequency": 2,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    },
    "Moth Orchid": {
        "name": "Moth Orchid",
        "species": "Phalaenopsis",
        "wateringFrequency": 5,
        "sunlightRequirement": 6,
        "growthStage": "Young"
    },
    "String of Pearls": {
        "name": "String of Pearls",
        "species": "Senecio rowleyanus",
        "wateringFrequency": 2,
        "sunlightRequirement": 6,
        "growthStage": "Growing"
    },
    "Boston Fern": {
        "name": "Boston Fern",
        "species": "Nephrolepis exaltata",
        "wateringFrequency": 3,
        "sunlightRequirement": 4,
        "growthStage": "Young"
    },
    "Bromeliad": {
        "name": "Bromeliad",
        "species": "Bromeliaceae",
        "wateringFrequency": 4,
        "sunlightRequirement": 5,
        "growthStage": "Growing"
    }
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
