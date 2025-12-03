/**
 * lint-staged configuration
 * @see https://github.com/okonet/lint-staged
 */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,json,css,scss,md,yml,yaml}': ['prettier --write'],
};
