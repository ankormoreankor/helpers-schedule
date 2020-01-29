// Core
import ImageminWebpackPlugin from 'imagemin-webpack';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import TerserPlugin from 'terser-webpack-plugin';

export const optimizeBuild = () => ({
	optimization: {
		nodeEnv: 'production',

		minimize: false,
		minimizer: [ new TerserPlugin() ],

		noEmitOnErrors: true,

		removeEmptyChunks: true,

		mergeDuplicateChunks: true,

		removeAvailableModules: true,

		occurenceOrder: true,

		concatenateModules: true,

		providedExports: true,
		usedExports: true,

		sideEffects: true,

		namedModules: false,
		moduleIds: false,
		
		namedChunks: false,
		chunkIds: false,
	}
});

// 1. коммерческие решения
// 2. оптимизация webpack
export const optimizeImages = () => ({
    plugins: [
        new ImageminWebpackPlugin({
            imageminOptions: {
                plugins: [
                    imageminMozjpeg({
                        progressive: true,
                        quality:     60,
                    }),
                    imageminPngquant({
                        quality: 60,
                    }),
                    imageminSvgo(),
                ],
            },
        }),
    ],
});
