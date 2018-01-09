/*****************************************************************************
 * FILE:    MAP JS
 * DATE:    27 December 2017
 * AUTHOR: Sarva Pulla
 * COPYRIGHT: (c) SERVIR GLOBAL 2017
 * LICENSE: BSD 2-Clause
 *****************************************************************************/

/*****************************************************************************
 *                      LIBRARY WRAPPER
 *****************************************************************************/

var LIBRARY_OBJECT = (function() {
    // Wrap the library in a package function
    "use strict"; // And enable strict mode for this library

    /************************************************************************
     *                      MODULE LEVEL / GLOBAL VARIABLES
     *************************************************************************/
    var layers,
        map,
        public_interface,
        sidebar;



    /************************************************************************
     *                    PRIVATE FUNCTION DECLARATIONS
     *************************************************************************/

    var init_all,
        init_events,
        init_vars,
        init_map;

    /************************************************************************
     *                    PRIVATE FUNCTION IMPLEMENTATIONS
     *************************************************************************/

    init_vars = function(){

    };

    init_map = function(){
var style = new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.6)'
        }),
        stroke: new ol.style.Stroke({
          color: '#319FD3',
          width: 1
        }),
        text: new ol.style.Text()
      });

        var sample_vector_layer = new ol.layer.Vector({
            name:'Vector Layer',
            title: "Sample Layer",
            displayInLayerSwitcher: true,
            renderMode: 'image',
            source: new ol.source.Vector({
              url: 'https://openlayers.org/en/v4.6.4/examples/data/geojson/countries.geojson',
              format: new ol.format.GeoJSON()
            }),
            style: function(feature) {
              style.getText().setText(feature.get('name'));
              return style;
            }
          });
        var attribution = new ol.Attribution({
            html: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/">ArcGIS</a>'
        });

        var base_map = new ol.layer.Tile({
            name:'Base Map 1',
            crossOrigin: 'anonymous',
            source: new ol.source.XYZ({
                attributions: [attribution],
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/' +
                'World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            }),
            baseLayer:true,
            title: "Light Gray"

        });

        var base_map2 = new ol.layer.Tile({
            name:'Base Map 2',
            source: new ol.source.BingMaps({
                key: '5TC0yID7CYaqv3nVQLKe~xWVt4aXWMJq2Ed72cO4xsA~ApdeyQwHyH_btMjQS1NJ7OHKY8BK-W-EMQMrIavoQUMYXeZIQOUURnKGBOC7UCt4',
                imagerySet: 'AerialWithLabels' // Options 'Aerial', 'AerialWithLabels', 'Road'
            }),
            baseLayer:true,
            visible:false,
            title:"Bing"
        });
        var base_map3 = new ol.layer.Tile({
            name:'Base Map 3',
            crossOrigin: 'anonymous',
            source: new ol.source.XYZ({
                attributions: [attribution],
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer' +
                '/tile/{z}/{y}/{x}'
            }),
            baseLayer:true,
            visible:false,
            title: "World Imagery"

        });

        var base_map4 = new ol.layer.Tile({
            name:'Base Map 4',
            crossOrigin: 'anonymous',
            source: new ol.source.XYZ({
                attributions: [attribution],
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer' +
                '/tile/{z}/{y}/{x}'
            }),
            baseLayer:true,
            visible:false,
            title: "World Topo"

        });

        var base_map5 = new ol.layer.Tile({
            name:'Base Map 5',
            crossOrigin: 'anonymous',
            source: new ol.source.XYZ({
                attributions: [attribution],
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer' +
                '/tile/{z}/{y}/{x}'
            }),
            baseLayer:true,
            visible:false,
            title: "World Shaded Relief"

        });

        var base_map6 = new ol.layer.Tile({
            name:'Base Map 6',
            crossOrigin: 'anonymous',
            source: new ol.source.OSM(),
            baseLayer:true,
            visible:false,
            title: "Open Street Map"

        });

        layers = [base_map,base_map2,base_map3,base_map4,base_map5,base_map6,sample_vector_layer];
        map = new ol.Map({
            controls : ol.control.defaults({
                attribution : false,
                zoom : false
            }),
            target: 'map',
            layers: layers,
            view: new ol.View({
                center: ol.proj.fromLonLat([0,0]),
                zoom: 3
            })
        });

        var switcher = new ol.control.LayerSwitcher();

        map.addControl(switcher);

        var lego = new ol.filter.Lego({ brickSize:20, img:'brick' });
		map.addFilter(lego);

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

    Highcharts.chart('plotter', {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'USD to EUR exchange rate over time'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
});
    };


    init_events = init_events = function() {
        (function () {
            var target, observer, config;
            // select the target node
            target = $('#app-content-wrapper')[0];

            observer = new MutationObserver(function () {
                window.setTimeout(function () {
                    map.updateSize();
                }, 350);
            });
            $(window).on('resize', function () {
                map.updateSize();
            });

            config = {attributes: true};

            observer.observe(target, config);
        }());



    };

    init_all = function(){
        init_vars();
        init_map();
        init_events();
    };


    /************************************************************************
     *                        DEFINE PUBLIC INTERFACE
     *************************************************************************/
    /*
     * Library object that contains public facing functions of the package.
     * This is the object that is returned by the library wrapper function.
     * See below.
     * NOTE: The functions in the public interface have access to the private
     * functions of the library because of JavaScript function scope.
     */
    public_interface = {

    };

    /************************************************************************
     *                  INITIALIZATION / CONSTRUCTOR
     *************************************************************************/

    // Initialization: jQuery function that gets called when
    // the DOM tree finishes loading

    $(function() {
        init_all();


    });

    return public_interface;

}()); // End of package wrapper
// NOTE: that the call operator (open-closed parenthesis) is used to invoke the library wrapper
// function immediately after being parsed.