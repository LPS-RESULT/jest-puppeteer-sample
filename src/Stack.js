module.exports = function() {
    let items = [];
    this.push = (item) => {
        items.unshift(item);
        return;
    };
    this.pop = () => {
        if(items.length > 0) {
            return items.shift();
        }
        return;
    };
    this.top = () => {
        return items[0];
    };
    this.list = () => {
        return items;
    };
    this.clear = () => {
        items = [];
        return;
    };
};