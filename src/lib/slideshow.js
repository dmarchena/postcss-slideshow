import postcss from 'postcss';
import addSiblingRule from './add-sibling-rule';

function childrenBaseRule(parent) {
    return postcss.parse(
`${parent.selector} > * {
    display: block;
    height: 100%;
    width: 100%;
}`);
}

export default function slideshow(displayDecl) {
    if (displayDecl.value === 'slideshow') {
        displayDecl.value = 'block';

        const rule = displayDecl.parent;
        addSiblingRule(childrenBaseRule(rule))
            .toRule(rule);
    }
}
