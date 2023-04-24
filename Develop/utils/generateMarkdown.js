// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else if (license === "MIT") {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    // } else if (license === "Boost") {
    //   return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/Apache-2.0)]`
    // }
  }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) { }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) { }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(answers) {
    return `
# ${answers.title}

## Description

${answers.description}

# Table Of Content

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${renderLicenseBadge(answers.license)}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

For any questions please reach me at ${answers.email}

`};

  module.exports = generateMarkdown;
}
