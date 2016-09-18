export default function addSiblingRule(sibling) {
    return {
        toRule: function(rule) {
            if (rule.type && rule.type === 'rule') {
                return rule.parent.append(sibling);
            } else {
                throw new Error(`Param type error: ${rule.type}. "rule" is needed.`);
            }
        }
    }
};
