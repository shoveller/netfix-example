module.exports = {
  '**/*.ts': [() => 'tsc --skipLibCheck --noEmit'],
  '**/*.{js,jsx,cjs,json,ts,tsx}': ['eslint --cache --fix', 'prettier --write'],
  '**/*.': ['stylelint --fix'],
}
