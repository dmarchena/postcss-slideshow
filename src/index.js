import postcss from 'postcss';
import slideshow from './lib/slideshow';

export default postcss.plugin('postcss-slideshow', opts => {
    opts = opts || {};

    return (root, result) => {
        root.walkDecls('display', slideshow);
        /*root.walkDecls('display', decl => {
            if (decl.value === 'slideshow') {
                decl.value = 'block';
                const rule = decl.parent;
                rule.parent.append(childrenRule(rule));
            }
        });*/
    };
});
