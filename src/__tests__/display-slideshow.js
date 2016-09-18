import test    from 'ava';
import * as postcssTest from './postcss-test';

test('Recognizes display slideshow and inserts children\' basic style', t => {
    return postcssTest.regex(t,
        '.slideshow { display: slideshow; }',
        /\.slideshow \{ display: block; \}\n\.slideshow > \* {[^\}]*}/);
});
