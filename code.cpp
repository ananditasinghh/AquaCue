#include <iostream>
#include <unordered_map>
#include <vector>
#include <ctime>

using namespace std;

struct Plant {
    string name;
    string species;
    int wateringFrequency; // in days
    int sunlightRequirement; // in hours
    string growthStage;
};

class PlantCareManager {
private:
    unordered_map<string, Plant> plantDatabase;

public:
    void addPlant(const Plant& plant) {
        plantDatabase[plant.name] = plant;
    }

    void displayPlantInformation(const string& plantName) {
        if (plantDatabase.find(plantName) != plantDatabase.end()) {
            const Plant& plant = plantDatabase[plantName];
            cout << "Name: " << plant.name << endl;
            cout << "Species: " << plant.species << endl;
            cout << "Watering Frequency: " << plant.wateringFrequency << " days" << endl;
            cout << "Sunlight Requirement: " << plant.sunlightRequirement << " hours" << endl;
            cout << "Growth Stage: " << plant.growthStage << endl;
        } else {
            cout << "Plant not found!" << endl;
        }
    }

    void setPlantGrowthStage(const string& plantName, const string& growthStage) {
        if (plantDatabase.find(plantName) != plantDatabase.end()) {
            plantDatabase[plantName].growthStage = growthStage;
            cout << "Growth stage updated successfully!" << endl;
        } else {
            cout << "Plant not found!" << endl;
        }
    }

    void provideCareReminders(const string& plantName, int daysSinceLastWatering, const string& currentGrowthStage) {
        if (plantDatabase.find(plantName) != plantDatabase.end()) {
            const Plant& plant = plantDatabase[plantName];
            time_t now = time(0);
            tm* currentTime = localtime(&now);

            // Check if watering is needed
            int daysUntilNextWatering = plant.wateringFrequency - daysSinceLastWatering;
            if (daysSinceLastWatering >= plant.wateringFrequency) {
                cout << "It's time to water " << plantName << "!" << endl;
            } else if (daysUntilNextWatering > 0) {
                cout << plantName << " should be watered in " << daysUntilNextWatering << " day(s)." << endl;
            } else {
                cout << "No watering needed for " << plantName << " right now." << endl;
            }

            // Check if sunlight is sufficient
            if (currentTime->tm_hour >= 6 && currentTime->tm_hour <= 18) {
                if (currentTime->tm_hour < plant.sunlightRequirement) {
                    cout << "Make sure " << plantName << " gets enough sunlight!" << endl;
                }
            } else {
                cout << "It's nighttime. " << plantName << " should be in a dark environment." << endl;
            }

            // Check if pruning is required
            if (plant.growthStage == "Mature") {
                cout << "Consider pruning " << plantName << " to maintain its shape." << endl;
            } else {
                cout << "No pruning needed for " << plantName << " right now." << endl;
            }

            // Check if growth stage needs updating
            if (currentGrowthStage != plant.growthStage) {
                setPlantGrowthStage(plantName, currentGrowthStage);
            }
        } else {
            cout << "Plant not found!" << endl;
        }
    }

    void displayAvailablePlants() {
        cout << "Available Plants:\n";
        for (const auto& entry : plantDatabase) {
            cout << entry.first << endl;
        }
    }
};

int main() {
    PlantCareManager plantManager;

    // Adding plants to the database
    Plant rose = {"Rose", "Rosa", 2, 8, "Young"};
    Plant lily = {"Lily", "Lilium", 3, 6, "Growing"};
    Plant sunflower = {"Sunflower", "Helianthus", 1, 7, "Mature"};
    Plant orchid = {"Orchid", "Orchidaceae", 5, 5, "Young"};
    Plant fern = {"Fern", "Polypodiopsida", 4, 4, "Growing"};

    plantManager.addPlant(rose);
    plantManager.addPlant(lily);
    plantManager.addPlant(sunflower);
    plantManager.addPlant(orchid);
    plantManager.addPlant(fern);

    // Display available plants
    plantManager.displayAvailablePlants();

    // Prompt the user for plant care reminders
    string plantName;
    int daysSinceLastWatering;
    string currentGrowthStage;
    char choice;

    do {
        cout << "\nEnter the name of the plant: ";
        cin >> plantName;

        cout << "Enter the number of days since the last watering: ";
        cin >> daysSinceLastWatering;

        cout << "Enter the current growth stage (Young, Growing, Mature): ";
        cin >> currentGrowthStage;

        // Display plant information
        cout << "\nPlant Information:\n";
        plantManager.displayPlantInformation(plantName);

        // Provide care reminders
        cout << "\nCare Reminders:\n";
        plantManager.provideCareReminders(plantName, daysSinceLastWatering, currentGrowthStage);

        cout << "\nDo you want to find information for another plant? (Y/N): ";
        cin >> choice;
    } while (choice == 'Y' || choice == 'y');

    cout << "Goodbye!" << endl;

    return 0;
}
