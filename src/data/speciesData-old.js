// Mock data for endangered species in each province
// In a real application, this would come from APIs like NatureServe Explorer

export const SPECIES_DATA = {
  'AB': {
    species: [
      {
        name: 'Woodland Caribou',
        scientificName: 'Rangifer tarandus caribou',
        status: 'Threatened',
        description: 'The woodland caribou is a subspecies of caribou found in Alberta\'s boreal forests. Habitat loss and fragmentation are major threats to this species.',
        population: 'Declining',
        threats: ['Habitat loss', 'Climate change', 'Industrial development']
      },
      {
        name: 'Greater Sage-Grouse',
        scientificName: 'Centrocercus urophasianus',
        status: 'Endangered',
        description: 'This large grouse species has experienced significant population declines due to habitat loss and fragmentation in Alberta\'s grasslands.',
        population: 'Critically low',
        threats: ['Habitat loss', 'Energy development', 'Climate change']
      },
      {
        name: 'Swift Fox',
        scientificName: 'Vulpes velox',
        status: 'Endangered',
        description: 'The swift fox is North America\'s smallest wild dog. It was extirpated from Canada but has been reintroduced to parts of Alberta.',
        population: 'Recovering',
        threats: ['Habitat loss', 'Predation', 'Disease']
      },
      {
        name: 'Piping Plover',
        scientificName: 'Charadrius melodus',
        status: 'Endangered',
        description: 'A small shorebird that nests on sandy beaches and riverbanks. Very sensitive to human disturbance.',
        population: 'Stable',
        threats: ['Habitat disturbance', 'Predation', 'Climate change']
      },
      {
        name: 'Whooping Crane',
        scientificName: 'Grus americana',
        status: 'Endangered',
        description: 'One of North America\'s most endangered birds. Migrates through Alberta on its way to breeding grounds in Wood Buffalo National Park.',
        population: 'Recovering',
        threats: ['Habitat loss', 'Climate change', 'Collision with power lines']
      }
    ],
    trends: {
      overallDecline: -23,
      speciesAtRisk: 45,
      recoveryPrograms: 12,
      protectedAreas: 8.2
    }
  },
  'BC': {
    species: [
      {
        name: 'Spotted Owl',
        scientificName: 'Strix occidentalis caurina',
        status: 'Endangered',
        description: 'The northern spotted owl is critically endangered in British Columbia due to logging of old-growth forests.',
        population: 'Critically low',
        threats: ['Habitat loss', 'Logging', 'Climate change']
      },
      {
        name: 'Mountain Caribou',
        scientificName: 'Rangifer tarandus caribou',
        status: 'Endangered',
        description: 'A distinct ecotype of woodland caribou that inhabits high-elevation forests in British Columbia.',
        population: 'Declining',
        threats: ['Habitat loss', 'Climate change', 'Recreation']
      },
      {
        name: 'Orca (Southern Resident)',
        scientificName: 'Orcinus orca',
        status: 'Endangered',
        description: 'The southern resident killer whale population is critically endangered, with only about 75 individuals remaining.',
        population: 'Critically low',
        threats: ['Pollution', 'Noise', 'Prey availability']
      },
      {
        name: 'White Sturgeon',
        scientificName: 'Acipenser transmontanus',
        status: 'Endangered',
        description: 'The largest freshwater fish in North America, found in the Fraser and Columbia River systems.',
        population: 'Declining',
        threats: ['Habitat loss', 'Dams', 'Overfishing']
      },
      {
        name: 'Marbled Murrelet',
        scientificName: 'Brachyramphus marmoratus',
        status: 'Threatened',
        description: 'A seabird that nests in old-growth forests. Its nesting behavior was unknown until the 1970s.',
        population: 'Declining',
        threats: ['Logging', 'Climate change', 'Predation']
      }
    ],
    trends: {
      overallDecline: -31,
      speciesAtRisk: 78,
      recoveryPrograms: 18,
      protectedAreas: 12.5
    }
  },
  'ON': {
    species: [
      {
        name: 'Blanding\'s Turtle',
        scientificName: 'Emydoidea blandingii',
        status: 'Threatened',
        description: 'A medium-sized turtle with a distinctive yellow throat. Found in wetlands and shallow waters across Ontario.',
        population: 'Declining',
        threats: ['Habitat loss', 'Road mortality', 'Nest predation']
      },
      {
        name: 'Eastern Massasauga Rattlesnake',
        scientificName: 'Sistrurus catenatus catenatus',
        status: 'Threatened',
        description: 'Ontario\'s only venomous snake. Found in wetlands and grasslands in the southern part of the province.',
        population: 'Declining',
        threats: ['Habitat loss', 'Persecution', 'Road mortality']
      },
      {
        name: 'Piping Plover',
        scientificName: 'Charadrius melodus',
        status: 'Endangered',
        description: 'A small shorebird that nests on sandy beaches along the Great Lakes and Atlantic coast.',
        population: 'Stable',
        threats: ['Habitat disturbance', 'Predation', 'Climate change']
      },
      {
        name: 'American Eel',
        scientificName: 'Anguilla rostrata',
        status: 'Threatened',
        description: 'A catadromous fish that migrates from the Sargasso Sea to freshwater rivers and lakes.',
        population: 'Declining',
        threats: ['Dams', 'Pollution', 'Overfishing']
      },
      {
        name: 'Red-headed Woodpecker',
        scientificName: 'Melanerpes erythrocephalus',
        status: 'Threatened',
        description: 'A striking woodpecker with a bright red head. Declining due to habitat loss and competition.',
        population: 'Declining',
        threats: ['Habitat loss', 'Competition', 'Climate change']
      }
    ],
    trends: {
      overallDecline: -19,
      speciesAtRisk: 67,
      recoveryPrograms: 15,
      protectedAreas: 9.8
    }
  },
  'QC': {
    species: [
      {
        name: 'Beluga Whale',
        scientificName: 'Delphinapterus leucas',
        status: 'Endangered',
        description: 'The St. Lawrence beluga population is isolated and critically endangered due to pollution and habitat degradation.',
        population: 'Critically low',
        threats: ['Pollution', 'Noise', 'Climate change']
      },
      {
        name: 'Atlantic Walrus',
        scientificName: 'Odobenus rosmarus rosmarus',
        status: 'Endangered',
        description: 'Once abundant in the Gulf of St. Lawrence, now extirpated from Quebec waters.',
        population: 'Extirpated',
        threats: ['Overhunting', 'Climate change', 'Habitat loss']
      },
      {
        name: 'Wood Turtle',
        scientificName: 'Glyptemys insculpta',
        status: 'Threatened',
        description: 'A semi-aquatic turtle found in rivers and streams across southern Quebec.',
        population: 'Declining',
        threats: ['Habitat loss', 'Road mortality', 'Collection']
      },
      {
        name: 'Bicknell\'s Thrush',
        scientificName: 'Catharus bicknelli',
        status: 'Threatened',
        description: 'A high-elevation songbird that breeds in the mountains of Quebec and winters in the Caribbean.',
        population: 'Declining',
        threats: ['Climate change', 'Habitat loss', 'Acid rain']
      },
      {
        name: 'Rusty Blackbird',
        scientificName: 'Euphagus carolinus',
        status: 'Threatened',
        description: 'A migratory songbird that has experienced dramatic population declines across its range.',
        population: 'Declining',
        threats: ['Habitat loss', 'Climate change', 'Pesticides']
      }
    ],
    trends: {
      overallDecline: -27,
      speciesAtRisk: 52,
      recoveryPrograms: 11,
      protectedAreas: 7.9
    }
  }
};

// Default data for provinces not yet implemented
const defaultData = {
  species: [
    {
      name: 'Species Data Loading...',
      scientificName: 'Data not available',
      status: 'Unknown',
      description: 'Species data for this province is being loaded. Please check back later.',
      population: 'Unknown',
      threats: ['Data not available']
    }
  ],
  trends: {
    overallDecline: 0,
    speciesAtRisk: 0,
    recoveryPrograms: 0,
    protectedAreas: 0
  }
};

export const getSpeciesData = (provinceCode) => {
  return SPECIES_DATA[provinceCode] || defaultData;
};
