/**
 * Created by askrypai on 11/25/16.
 */
var Mathem = {
    getRandomInteger: function(end, start) {
        if (!start) {
            start = 0;
        }
        if (!end) {
            return 0;
        }
        return Math.floor(start + Math.random() * (end - start));

    }
};


module.exports = Mathem;