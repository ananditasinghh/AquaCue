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

// Adding plants to the database in the following format 
// Plant newPlant = {"Plant Name", "Plant Species", wateringFrequency, sunlightRequirement, "Growth Stage"};
   
   
    Plant rose = {"Rose", "Rosa", 2, 8, "Young"};
    Plant lily = {"Lily", "Lilium", 3, 6, "Growing"};
    Plant sunflower = {"Sunflower", "Helianthus", 1, 7, "Mature"};
    Plant orchid = {"Orchid", "Orchidaceae", 5, 5, "Young"};
    Plant fern = {"Fern", "Polypodiopsida", 4, 4, "Growing"};
    Plant tulip = {"Tulip", "Tulipa", 4, 6, "Growing"};
    Plant daisy = {"Daisy", "Bellis perennis", 2, 5, "Young"};
    Plant lavender = {"Lavender", "Lavandula", 3, 7, "Mature"};
    Plant cactus = {"Cactus", "Cactaceae", 5, 8, "Young"};
    Plant ivy = {"Ivy", "Hedera", 3, 4, "Growing"};
    Plant begonia = {"Begonia", "Begonia", 3, 5, "Growing"};
    Plant ficus = {"Ficus", "Ficus", 4, 6, "Young"};
    Plant snakePlant = {"Snake Plant", "Sansevieria", 2, 4, "Mature"};
    Plant peaceLily = {"Peace Lily", "Spathiphyllum", 2, 5, "Young"};
    Plant zzPlant = {"ZZ Plant", "Zamioculcas zamiifolia", 3, 6, "Growing"};
    Plant rosemary = {"Rosemary", "Rosmarinus officinalis", 4, 6, "Mature"};
    Plant peony = {"Peony", "Paeonia", 3, 5, "Growing"};
    Plant marigold = {"Marigold", "Tagetes", 2, 5, "Young"};
    Plant basil = {"Basil", "Ocimum basilicum", 3, 6, "Mature"};
    Plant hibiscus = {"Hibiscus", "Hibiscus", 5, 7, "Growing"};
    Plant succulent = {"Succulent", "Succulentus", 2, 4, "Mature"};
    Plant azalea = {"Azalea", "Rhododendron", 4, 5, "Growing"};
    Plant jasmine = {"Jasmine", "Jasminum", 3, 6, "Young"};
    Plant croton = {"Croton", "Codiaeum", 2, 5, "Growing"};
    Plant daffodil = {"Daffodil", "Narcissus", 3, 6, "Young"};
    Plant zinnia = {"Zinnia", "Zinnia", 2, 5, "Growing"};
    Plant morningGlory = {"Morning Glory", "Ipomoea", 1, 6, "Young"};
    Plant carnation = {"Carnation", "Dianthus", 3, 5, "Growing"};
    Plant peperomia = {"Peperomia", "Peperomia", 4, 4, "Mature"};
    Plant birdOfParadise = {"Bird of Paradise", "Strelitzia reginae", 3, 6, "Young"};
    Plant fernMaidenhair = {"Maidenhair Fern", "Adiantum", 2, 4, "Growing"};
    Plant spiderPlant = {"Spider Plant", "Chlorophytum comosum", 2, 6, "Young"};
    Plant rubberPlant = {"Rubber Plant", "Ficus elastica", 4, 6, "Mature"};
    Plant moneyTree = {"Money Tree", "Pachira aquatica", 3, 5, "Growing"};
    Plant aloeVera = {"Aloe Vera", "Aloe vera", 2, 5, "Young"};
    Plant pothos = {"Pothos", "Epipremnum aureum", 2, 5, "Growing"};
    Plant chineseEvergreen = {"Chinese Evergreen", "Aglaonema", 3, 5, "Growing"};
    Plant snakePlantCylindrica = {"Snake Plant (Cylindrica)", "Sansevieria cylindrica", 2, 4, "Mature"};
    Plant calathea = {"Calathea", "Calathea", 3, 5, "Young"};
    Plant hoya = {"Hoya", "Hoya", 2, 4, "Mature"};
    Plant fittonia = {"Fittonia", "Fittonia", 2, 5, "Growing"};
    Plant mothOrchid = {"Moth Orchid", "Phalaenopsis", 5, 6, "Young"};
    Plant stringOfPearls = {"String of Pearls", "Senecio rowleyanus", 2, 6, "Growing"};
    Plant bostonFern = {"Boston Fern", "Nephrolepis exaltata", 3, 4, "Young"};
    Plant bromeliad = {"Bromeliad", "Bromeliaceae", 4, 5, "Growing"};

    

    plantManager.addPlant(rose);
    plantManager.addPlant(lily);
    plantManager.addPlant(sunflower);
    plantManager.addPlant(orchid);
    plantManager.addPlant(fern);
    plantManager.addPlant(tulip);
    plantManager.addPlant(daisy);
    plantManager.addPlant(lavender);
    plantManager.addPlant(cactus);
    plantManager.addPlant(ivy);
    plantManager.addPlant(begonia);
    plantManager.addPlant(ficus);
    plantManager.addPlant(snakePlant);
    plantManager.addPlant(peaceLily);
    plantManager.addPlant(zzPlant);
    plantManager.addPlant(rosemary);
    plantManager.addPlant(peony);
    plantManager.addPlant(marigold);
    plantManager.addPlant(basil);
    plantManager.addPlant(hibiscus);
    plantManager.addPlant(succulent);
    plantManager.addPlant(azalea);
    plantManager.addPlant(jasmine);
    plantManager.addPlant(croton);
    plantManager.addPlant(daffodil);
    plantManager.addPlant(zinnia);
    plantManager.addPlant(morningGlory);
    plantManager.addPlant(carnation);
    plantManager.addPlant(peperomia);
    plantManager.addPlant(birdOfParadise);
    plantManager.addPlant(fernMaidenhair);
    plantManager.addPlant(spiderPlant);
    plantManager.addPlant(rubberPlant);
    plantManager.addPlant(moneyTree);
    plantManager.addPlant(aloeVera);
    plantManager.addPlant(pothos);
    plantManager.addPlant(chineseEvergreen);
    plantManager.addPlant(snakePlantCylindrica);
    plantManager.addPlant(calathea);
    plantManager.addPlant(hoya);
    plantManager.addPlant(fittonia);
    plantManager.addPlant(mothOrchid);
    plantManager.addPlant(stringOfPearls);
    plantManager.addPlant(bostonFern);
    plantManager.addPlant(bromeliad);


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
