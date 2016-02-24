Library = function() {}
Library.resources = {};
Library.releaseResource = function(name) {
    this.resources[name].lock = false;
    console.log("Book '" + name + "' is returned to library");
}

Library.acquireResource = function(name) {
    if (!this.resources[name]) {
        this.resources[name] = new Book(name);
        console.log("Book '" +  name + "' is bought");
    } else {
        if (!this.resources[name].lock) {
            this.resources[name].lock = true;
            console.log("Book '" + name + "' is borrowed.");
        } else {
            console.log("Book '" + name + "' is not available");
        }
    }
}