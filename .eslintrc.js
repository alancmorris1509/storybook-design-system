module.exports = {
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'babel'
    ],
    'rules': {
        'react/prop-types': 'off',
        'comma-dangle': [
            'error',
            'never'
        ],
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'allowTemplateLiterals': 0,
        'semi': [
            'error',
            'never'
        ],
        'space-before-function-paren': [
            'error',
            'always'
        ],
        'space-before-blocks': [
            'error',
            'always'
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'no-console': 'off',
        'no-trailing-spaces': 'error',
        'space-infix-ops': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'template-curly-spacing': 'off'
    }
}