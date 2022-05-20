module.exports = {
  extends: '@istanbuljs/nyc-config-typescript',
  include: [
    'src/app/models',
    'src/app/services',
    'src/app/controllers',
  ],
  reporter: [
    'text',
    'text-summary',
    'json-summary',
    'html',
    'lcov',
  ],
};
