const textCenter = {
	id: 'textCenter',
	beforeDatasetsDraw(chart: any, _args: any, _pluginOptions: any) {
		const { ctx, data } = chart;
		const dataset = chart.getDatasetMeta(0).data[0];
		const text = `${data.datasets[0].data[0]}%`;
		const fontSize = 22;
		const font = 'bold ' + fontSize + 'px sans-serif';
		ctx.save();

		// Set font for text measurement
		ctx.font = font;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillStyle = 'black';

		// Measure text width and height
		const textWidth = ctx.measureText(text).width;
		const textHeight = fontSize;

		// Calculate position
		const x = dataset.x;
		const y = dataset.y;

		// Draw white rectangle
		ctx.fillStyle = 'white';
		ctx.fillRect(x - textWidth / 2 - 4, y - textHeight / 2 - 2, textWidth + 8, textHeight + 4);

		// Draw text
		ctx.fillStyle = 'black';
		ctx.fillText(text, x, y);

		ctx.restore();
	},
};
