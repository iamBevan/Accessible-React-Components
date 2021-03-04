module.exports = {
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"prettier",
	],
	plugins: ["react", "react-hooks", "@typescript-eslint", "jsx-a11y", "prettier"],
	rules: {
		"react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
		"import/extensions": "off",
		"react/prop-types": "off",
		"jsx-a11y/anchor-is-valid": "off",
		"react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"react/no-unescaped-entities": "off",
		"import/no-cycle": [0, { ignoreExternal: true }],
		"prefer-const": "off",
		"react/react-in-jsx-scope": "off",
		// needed because of https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use & https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
		"no-use-before-define": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: false, variables: true }],
	},
};
