import postcss from 'postcss';
import sliderDecl from './lib/slider';

export default postcss.plugin('postcss-slideshow', opts => {
    opts = opts || {};

    return (root, result) => {
        root.walkDecls('display', sliderDecl(result));
        /*root.walkDecls('display', decl => {
            if (decl.value === 'slideshow') {
                decl.value = 'block';
                const rule = decl.parent;
                rule.parent.append(childrenRule(rule));
            }
        });*/
    };
});
