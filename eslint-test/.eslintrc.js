module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": { 
        semi: ["error", "always"], // 세미콜론을 안찍으면 문제가 생김
    }
}
