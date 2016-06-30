var g, G, Class;

Class = require('class');
G = Class.create();
g = module.exports = new G;
g.G = G;

G.fn.map = (arr, key, value) => {
    var map = {};
    arr.forEach((data) => {
        value ?
            // 存在value时
            map[data[key]] = data[value]:
            // 不存在value时，返回data自身
            map[data[key]] = data;
    })
    return map;
}
