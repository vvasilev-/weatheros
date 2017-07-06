export default function() {
	return `
		*,
		*:before,
		*:after {
			box-sizing: inherit;
		}

		html {
			height: 100%;
			overflow-y: scroll;
			box-sizing: border-box;
		}

		body {
			font-family: 'Lato', sans-serif;
			font-size: 14px;
			color: #000;
			background: #f6f6f6;
		}
	`;
}
