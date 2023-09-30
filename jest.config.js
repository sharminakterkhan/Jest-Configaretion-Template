module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['jest-localstorage-mock'],
    reporters: [
      'default', // Use the default reporter (console output)
      [
        'jest-junit', // Use the jest-junit reporter for XML output
        {
          outputDirectory: 'coverage', // Specify the directory for the output
          outputName: 'cover.xml', // Specify the name of the XML file
        },
      ],
    ],
  };
 