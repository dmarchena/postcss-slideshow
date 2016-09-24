import postcss from 'postcss';
import addSiblingRule from './add-sibling-rule';

let result = undefined;

function childrenBaseRule(parent) {
    return postcss.parse(
`${parent.selector} > * {
    display: block;
    height: 100%;
    width: 100%;
}`);
}

function checkSliderSizeDecl(rule) {
    let sliderSizeDecl = undefined;
    rule.walkDecls('slider-size', decl => {
        sliderSizeDecl = decl;
    });
    if (!sliderSizeDecl) {
        rule.warn(result, 'slider-size declaration is needed.');
    }
    return sliderSizeDecl;
}

export default function sliderDecl(postcssResult) {
    result = postcssResult;
    return displayDecl => {
        if (displayDecl.value === 'slider') {
            displayDecl.value = 'block';

            const rule = displayDecl.parent;
            checkSliderSizeDecl(rule);
            addSiblingRule(childrenBaseRule(rule))
                .toRule(rule);
        }
    };
}
