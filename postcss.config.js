import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';

const isProduction = process.env.NODE_ENV === 'production';

export default {
    plugins: [
        autoprefixer(),
        cssnano({ preset: 'default' }),
        isProduction && purgecss({
            content: ['./src/**/*.jsx', './src/**/*.tsx', './index.html'],
            defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
    ].filter(Boolean),
};
