var jam = {
    "packages": [
        {
            "name": "jade",
            "location": "libs/jade",
            "main": "index.js"
        },
        {
            "name": "domReady",
            "location": "libs/domReady",
            "main": "domReady.js"
        },
        {
            "name": "underscore",
            "location": "libs/underscore",
            "main": "underscore.js"
        },
        {
            "name": "text",
            "location": "libs/text",
            "main": "text.js"
        },
        {
            "name": "bootstrap",
            "location": "libs/bootstrap"
        },
        {
            "name": "jquery",
            "location": "libs/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "backbone",
            "location": "libs/backbone",
            "main": "backbone.js"
        }
    ],
    "version": "0.2.15",
    "shim": {
        "underscore": {
            "exports": "_"
        },
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "jade",
            "location": "libs/jade",
            "main": "index.js"
        },
        {
            "name": "domReady",
            "location": "libs/domReady",
            "main": "domReady.js"
        },
        {
            "name": "underscore",
            "location": "libs/underscore",
            "main": "underscore.js"
        },
        {
            "name": "text",
            "location": "libs/text",
            "main": "text.js"
        },
        {
            "name": "bootstrap",
            "location": "libs/bootstrap"
        },
        {
            "name": "jquery",
            "location": "libs/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "backbone",
            "location": "libs/backbone",
            "main": "backbone.js"
        }
    ],
    "shim": {
        "underscore": {
            "exports": "_"
        },
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "jade",
            "location": "libs/jade",
            "main": "index.js"
        },
        {
            "name": "domReady",
            "location": "libs/domReady",
            "main": "domReady.js"
        },
        {
            "name": "underscore",
            "location": "libs/underscore",
            "main": "underscore.js"
        },
        {
            "name": "text",
            "location": "libs/text",
            "main": "text.js"
        },
        {
            "name": "bootstrap",
            "location": "libs/bootstrap"
        },
        {
            "name": "jquery",
            "location": "libs/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "backbone",
            "location": "libs/backbone",
            "main": "backbone.js"
        }
    ],
    "shim": {
        "underscore": {
            "exports": "_"
        },
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}