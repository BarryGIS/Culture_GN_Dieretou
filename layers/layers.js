var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Prefectures_1 = new ol.format.GeoJSON();
var features_Prefectures_1 = format_Prefectures_1.readFeatures(json_Prefectures_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prefectures_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prefectures_1.addFeatures(features_Prefectures_1);
var lyr_Prefectures_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prefectures_1, 
                style: style_Prefectures_1,
                interactive: true,
    title: 'Prefectures<br />\
    <img src="styles/legend/Prefectures_1_0.png" /> Basse Guinée<br />\
    <img src="styles/legend/Prefectures_1_1.png" /> Guinée Forestière<br />\
    <img src="styles/legend/Prefectures_1_2.png" /> Haute Guinée<br />\
    <img src="styles/legend/Prefectures_1_3.png" /> Moyenne Guinée<br />'
        });
var format_Villes_2 = new ol.format.GeoJSON();
var features_Villes_2 = format_Villes_2.readFeatures(json_Villes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villes_2.addFeatures(features_Villes_2);
var lyr_Villes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Villes_2, 
                style: style_Villes_2,
                interactive: true,
    title: 'Villes<br />\
    <img src="styles/legend/Villes_2_0.png" /> Evènement culturel<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Prefectures_1.setVisible(true);lyr_Villes_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Prefectures_1,lyr_Villes_2];
lyr_Prefectures_1.set('fieldAliases', {'Object_1': 'Object_1', 'Object_2': 'Object_2', 'Prefecture': 'Prefecture', });
lyr_Villes_2.set('fieldAliases', {'Prefecture': 'Prefecture', 'Lieu': 'Lieu', 'Evenement': 'Evenement', 'Date': 'Date', 'Activités': 'Activités', 'Culture': 'Culture', });
lyr_Prefectures_1.set('fieldImages', {'Object_1': 'TextEdit', 'Object_2': 'TextEdit', 'Prefecture': 'TextEdit', });
lyr_Villes_2.set('fieldImages', {'Prefecture': 'TextEdit', 'Lieu': 'TextEdit', 'Evenement': 'TextEdit', 'Date': 'TextEdit', 'Activités': '', 'Culture': 'TextEdit', });
lyr_Prefectures_1.set('fieldLabels', {'Object_1': 'no label', 'Object_2': 'no label', 'Prefecture': 'inline label', });
lyr_Villes_2.set('fieldLabels', {'Prefecture': 'inline label', 'Lieu': 'inline label', 'Evenement': 'header label', 'Date': 'inline label', 'Activités': 'header label', 'Culture': 'no label', });
lyr_Villes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});