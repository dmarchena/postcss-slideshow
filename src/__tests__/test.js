import postcss from 'postcss';
import test    from 'ava';
import plugin  from '../';

function run(t, input, assertion, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            assertion(result);
            t.deepEqual(result.warnings().length, 0);
        });
}

/* function runDeepEqual(t, input, output) {
    return run(t, input, result => {
        t.deepEqual(result.css, output);
    });
}*/

function runRegex(t, input, regex) {
    return run(t, input, result => {
        t.regex(result.css, regex);
    });
}

test('Recognizes display slideshow and inserts children\' basic style', t => {
    return runRegex(t,
        '.slideshow { display: slideshow; }',
        /\.slideshow \{ display: block; \}\n\.slideshow > \* {[^\}]*}/);
});
