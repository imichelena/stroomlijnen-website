// The local search plugin translates its placeholder but hardcodes both inputs'
// accessible names. Use the same locale key for both until upstream supports it.
module.exports = {
  presets: [require.resolve('@docusaurus/babel/preset')],
  overrides: [{
    test: /[\\/]@easyops-cn[\\/]docusaurus-search-local[\\/].*[\\/](SearchBar|SearchPage)\.jsx$/,
    plugins: [function localizeSearchAccessibleName({types, template}) {
      return {
        visitor: {
          JSXAttribute({node}) {
            if (node.name.name === 'aria-label' && types.isStringLiteral(node.value, {value: 'Search'})) {
              node.value = types.jsxExpressionContainer(template.expression.ast(
                'translate({id: "theme.SearchBar.label", message: "Search"})'
              ));
            }
          },
        },
      };
    }],
  }],
};
