// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      badge = "https://img.shields.io/badge/license-MIT-green";
      break;
    case 'Apache':
      badge = "https://img.shields.io/badge/license-Apache-green";
      break;
    case 'GPL':
      badge = "https://img.shields.io/badge/license-GPL-green";
      break;
    case 'BSD-2-Clause':
      badge = "https://img.shields.io/badge/license-BSD--2--Clause-green";
      break;
    case 'BSD-3-Clause':
      badge = "https://img.shields.io/badge/license-BSD--3--Clause-green";
      break;
    case 'BSD-4-Clause':
      badge = "https://img.shields.io/badge/license-BSD--4--Clause-green";
      break;
  } return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {return "Your License Are Dumb"}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  renderLicenseSection(data.license);
  return `# ${data.title}

  ## Description

  ## Table of Contents
  
  [Description](#description)
  [Installation](#installation-instructions)
  [Usage](#usage)
  [Contributions](#contributions)
  [Tests](#tests)
  [License](#license)
  [Questions](#questions)
  
  ## Installation Instructions
  
  ${data.instructions}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributions
  
  ${data.contributing}
  
  ## Tests
  
  ${data.testing}
  
  ## License
  
  ${licenseSection}
  
  ## Questions
  
  ${data.userName}  
  ${data.userEmail}
`;
}

module.exports = generateMarkdown;
