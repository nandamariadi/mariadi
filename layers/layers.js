var wms_layers = [];

var lyr_slopekemiringanTripatekstur_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "slope kemiringan Tripa tekstur",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/slopekemiringanTripatekstur_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [10721506.700577, 426968.649031, 10857908.582168, 478745.194198]
                            })
                        });
var lyr_slopekemiringanTripawarna_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "slope kemiringan Tripa warna",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/slopekemiringanTripawarna_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [10721506.700577, 426968.649031, 10857908.582168, 478745.194198]
                            })
                        });
var format_Channels_2 = new ol.format.GeoJSON();
var features_Channels_2 = format_Channels_2.readFeatures(json_Channels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Channels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Channels_2.addFeatures(features_Channels_2);
var lyr_Channels_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Channels_2, 
                style: style_Channels_2,
                interactive: true,
                title: '<img src="styles/legend/Channels_2.png" /> Channels'
            });

lyr_slopekemiringanTripatekstur_0.setVisible(true);lyr_slopekemiringanTripawarna_1.setVisible(true);lyr_Channels_2.setVisible(true);
var layersList = [lyr_slopekemiringanTripatekstur_0,lyr_slopekemiringanTripawarna_1,lyr_Channels_2];
lyr_Channels_2.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_Channels_2.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_Channels_2.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_Channels_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});