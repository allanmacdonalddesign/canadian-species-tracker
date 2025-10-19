# Canadian Endangered Species Tracker

A modern web application for exploring endangered species and conservation trends across Canada's provinces and territories.

## Features

- **Province Selection**: Choose from all 13 Canadian provinces and territories
- **Top 5 Endangered Species**: View the most at-risk species in each region
- **Conservation Trends**: Learn about population changes, recovery programs, and protected areas
- **Detailed Species Information**: Scientific names, conservation status, threats, and population trends
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Data Sources

This application integrates data from multiple authoritative sources:

- **COSEWIC** (Committee on the Status of Endangered Wildlife in Canada)
- **Canadian Species at Risk Act (SARA)**
- **NatureServe Explorer API**
- **Provincial Conservation Data Centres**
- **Canadian Species Index**

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd canadian-species-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## API Integration

The application is designed to integrate with real APIs for live data:

### NatureServe Explorer API
- **Base URL**: `https://explorer.natureserve.org/api/v1/`
- **Endpoints**: 
  - `/taxonomy/search` - Search for species
  - `/conservation-status` - Get conservation status
  - `/distribution` - Get species distribution data

### Implementation Example
```javascript
// Example API integration
const fetchSpeciesData = async (provinceCode) => {
  const response = await fetch(
    `https://explorer.natureserve.org/api/v1/taxonomy/search?criteriaType=species&criteria=conservationStatus&location=CA-${provinceCode}`
  );
  return response.json();
};
```

## Project Structure

```
src/
├── components/
│   ├── ProvinceSelector.jsx    # Province dropdown component
│   ├── SpeciesCard.jsx         # Individual species display
├── data/
│   ├── provinces.js           # Province/territory data
│   └── speciesData.js         # Mock species data
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles
```

## Customization

### Adding New Provinces
Edit `src/data/provinces.js` to add new provinces or territories.

### Modifying Species Data
Update `src/data/speciesData.js` to add or modify species information for specific provinces.

### Styling
The application uses CSS custom properties and can be easily themed by modifying `src/index.css`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please open an issue in the repository.

## Future Enhancements

- Real-time API integration
- Interactive maps showing species distribution
- User accounts for saving favorite species
- Conservation action recommendations
- Photo galleries for each species
- Mobile app version
