function throwTypeError(type) {
    throw new TypeError(`Param type error: ${type}. "rule" is needed.`);
}

export default function addSiblingRule(sibling) {
    return {
        toRule(rule) {
            if (!rule.type || rule.type !== 'rule') {
                throwTypeError(rule.type);
            }
            return rule.parent.append(sibling);
        }
    };
}
