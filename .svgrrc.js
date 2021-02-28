module.exports = {
	dimensions: false,
	expandProps: false,
	svgProps: {
		width: "{props.size ?? 16}",
		height: "{props.size ?? 16}",
		fill: "{props.color}",
	},
	replaceAttrValues: {
		"#000": "{props.color}",
		"#000000": "{props.color}",
	},
	template(
		{ template },
		opts,
		{ imports, componentName, props, jsx, exports }
	) {
		const typeScriptTpl = template.smart({
			plugins: ["typescript"],
			preserveComments: true,
		})
		return typeScriptTpl.ast`
		// THIS IS AUTO GENERATED
		import * as React from 'react';
		import { IconProps } from "..";
		
		/**
		 * Creates an SVG icon based on the provided name.
		 */
		const ${componentName} = (props: IconProps): JSX.Element => ${jsx};
		
		export default ${componentName};
	`
	},
}
