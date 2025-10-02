const fs = require('fs');
const path = require('path');

const readDirectoryRecursive = (dirPath, currentLevel = 0, maxLevel = 2) => {
  // Stop recursion if we've reached the max level
  if (currentLevel >= maxLevel) {
    return [];
  }

  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  const folders = [];

  items.forEach(item => {
    if (item.isDirectory()) {
      const fullPath = path.join(dirPath, item.name);
      
      let folderData = {};
      if (currentLevel === 0) {
        folderData = {
          environment: item.name
        };
      } else {
        folderData = {
          reportName: item.name
        };
      }

      // Only add children if we haven't reached max level yet
      if (currentLevel < maxLevel - 1) {
        const reports = readDirectoryRecursive(fullPath, currentLevel + 1, maxLevel);
        if (reports.length > 0) {
          folderData.reports = reports;
        }
      }

      folders.push(folderData);
    }
  });

  return folders;
};

const generateReportsList = () => {
  const assetsPath = path.join(__dirname, '../src/assets');
  const reportsPath = path.join(__dirname, '../public/reports');

  
  try {
    const reports = readDirectoryRecursive(reportsPath, 0, 2);
    
    // Write to a JSON file in public directory
    fs.writeFileSync(
      path.join(assetsPath, 'reports.json'),
      JSON.stringify(reports, null, 2)
    );

    console.log(`✓ Generated reports list`);
  } catch (error) {
    console.error('Error generating reports list:', error);
    process.exit(1);
  }
};

generateReportsList();