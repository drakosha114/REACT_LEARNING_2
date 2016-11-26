/**
 * Created by askrypai on 11/25/16.
 */
var Mathem = require('./mathematica.js');

var palette = {
    colors: ['Gainsboro', 'PeachPuff', 'Azure', 'LightSlateGray', 'SkyBlue', 'LightCyan', 'Gold', 'Burlywood', 'Orange', 'Seashell2', 'LemonChiffon1', 'Honeydew3', 'SlateGray3', 'Khaki2', 'Coral1'],
    getRandomColor: function () {
        return this.colors[Mathem.getRandomInteger(this.colors.length - 1, 0)];
    },
    getColorByName: function (name) {
        return this.colors.filter(x => x.toLowerCase() === name.toLowerCase()) || 'yellow';
    }
};

module.exports = palette;