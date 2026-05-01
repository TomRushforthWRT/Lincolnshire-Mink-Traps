var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Lincolnshire_1 = new ol.format.GeoJSON();
var features_Lincolnshire_1 = format_Lincolnshire_1.readFeatures(json_Lincolnshire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lincolnshire_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lincolnshire_1.addFeatures(features_Lincolnshire_1);
var lyr_Lincolnshire_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lincolnshire_1, 
                style: style_Lincolnshire_1,
                popuplayertitle: 'Lincolnshire',
                interactive: false,
                title: '<img src="styles/legend/Lincolnshire_1.png" /> Lincolnshire'
            });
var format_Inactivetraps2kmbuffer_2 = new ol.format.GeoJSON();
var features_Inactivetraps2kmbuffer_2 = format_Inactivetraps2kmbuffer_2.readFeatures(json_Inactivetraps2kmbuffer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inactivetraps2kmbuffer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inactivetraps2kmbuffer_2.addFeatures(features_Inactivetraps2kmbuffer_2);
var lyr_Inactivetraps2kmbuffer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inactivetraps2kmbuffer_2, 
                style: style_Inactivetraps2kmbuffer_2,
                popuplayertitle: 'Inactive traps 2km buffer',
                interactive: false,
                title: '<img src="styles/legend/Inactivetraps2kmbuffer_2.png" /> Inactive traps 2km buffer'
            });
var format_Activetraps2kmbuffer_3 = new ol.format.GeoJSON();
var features_Activetraps2kmbuffer_3 = format_Activetraps2kmbuffer_3.readFeatures(json_Activetraps2kmbuffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activetraps2kmbuffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activetraps2kmbuffer_3.addFeatures(features_Activetraps2kmbuffer_3);
var lyr_Activetraps2kmbuffer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activetraps2kmbuffer_3, 
                style: style_Activetraps2kmbuffer_3,
                popuplayertitle: 'Active traps 2km buffer',
                interactive: false,
                title: '<img src="styles/legend/Activetraps2kmbuffer_3.png" /> Active traps 2km buffer'
            });
var format_Watercourses_4 = new ol.format.GeoJSON();
var features_Watercourses_4 = format_Watercourses_4.readFeatures(json_Watercourses_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Watercourses_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watercourses_4.addFeatures(features_Watercourses_4);
var lyr_Watercourses_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Watercourses_4, 
                style: style_Watercourses_4,
                popuplayertitle: 'Watercourses',
                interactive: false,
                title: '<img src="styles/legend/Watercourses_4.png" /> Watercourses'
            });
var format_Emptytraps_5 = new ol.format.GeoJSON();
var features_Emptytraps_5 = format_Emptytraps_5.readFeatures(json_Emptytraps_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emptytraps_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emptytraps_5.addFeatures(features_Emptytraps_5);
var lyr_Emptytraps_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emptytraps_5, 
                style: style_Emptytraps_5,
                popuplayertitle: 'Empty traps',
                interactive: true,
                title: '<img src="styles/legend/Emptytraps_5.png" /> Empty traps'
            });
var format_INACTIVEtraps_6 = new ol.format.GeoJSON();
var features_INACTIVEtraps_6 = format_INACTIVEtraps_6.readFeatures(json_INACTIVEtraps_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INACTIVEtraps_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INACTIVEtraps_6.addFeatures(features_INACTIVEtraps_6);
var lyr_INACTIVEtraps_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INACTIVEtraps_6, 
                style: style_INACTIVEtraps_6,
                popuplayertitle: 'INACTIVE traps',
                interactive: true,
                title: '<img src="styles/legend/INACTIVEtraps_6.png" /> INACTIVE traps'
            });
var format_Activetraps_7 = new ol.format.GeoJSON();
var features_Activetraps_7 = format_Activetraps_7.readFeatures(json_Activetraps_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activetraps_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activetraps_7.addFeatures(features_Activetraps_7);
var lyr_Activetraps_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activetraps_7, 
                style: style_Activetraps_7,
                popuplayertitle: 'Active traps',
                interactive: true,
                title: '<img src="styles/legend/Activetraps_7.png" /> Active traps'
            });
var format_MINKJanJun2025_8 = new ol.format.GeoJSON();
var features_MINKJanJun2025_8 = format_MINKJanJun2025_8.readFeatures(json_MINKJanJun2025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINKJanJun2025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINKJanJun2025_8.addFeatures(features_MINKJanJun2025_8);
var lyr_MINKJanJun2025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINKJanJun2025_8, 
                style: style_MINKJanJun2025_8,
                popuplayertitle: 'MINK Jan - Jun 2025',
                interactive: true,
                title: '<img src="styles/legend/MINKJanJun2025_8.png" /> MINK Jan - Jun 2025'
            });
var format_MINKJulyDec2025_9 = new ol.format.GeoJSON();
var features_MINKJulyDec2025_9 = format_MINKJulyDec2025_9.readFeatures(json_MINKJulyDec2025_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINKJulyDec2025_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINKJulyDec2025_9.addFeatures(features_MINKJulyDec2025_9);
var lyr_MINKJulyDec2025_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINKJulyDec2025_9, 
                style: style_MINKJulyDec2025_9,
                popuplayertitle: 'MINK July - Dec 2025',
                interactive: true,
                title: '<img src="styles/legend/MINKJulyDec2025_9.png" /> MINK July - Dec 2025'
            });
var format_MINK2026_10 = new ol.format.GeoJSON();
var features_MINK2026_10 = format_MINK2026_10.readFeatures(json_MINK2026_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINK2026_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINK2026_10.addFeatures(features_MINK2026_10);
var lyr_MINK2026_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINK2026_10, 
                style: style_MINK2026_10,
                popuplayertitle: 'MINK 2026',
                interactive: true,
                title: '<img src="styles/legend/MINK2026_10.png" /> MINK 2026'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Lincolnshire_1.setVisible(true);lyr_Inactivetraps2kmbuffer_2.setVisible(false);lyr_Activetraps2kmbuffer_3.setVisible(false);lyr_Watercourses_4.setVisible(true);lyr_Emptytraps_5.setVisible(false);lyr_INACTIVEtraps_6.setVisible(true);lyr_Activetraps_7.setVisible(true);lyr_MINKJanJun2025_8.setVisible(false);lyr_MINKJulyDec2025_9.setVisible(false);lyr_MINK2026_10.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_Lincolnshire_1,lyr_Inactivetraps2kmbuffer_2,lyr_Activetraps2kmbuffer_3,lyr_Watercourses_4,lyr_Emptytraps_5,lyr_INACTIVEtraps_6,lyr_Activetraps_7,lyr_MINKJanJun2025_8,lyr_MINKJulyDec2025_9,lyr_MINK2026_10];
lyr_Lincolnshire_1.set('fieldAliases', {'id': 'id', });
lyr_Inactivetraps2kmbuffer_2.set('fieldAliases', {'fid': 'fid', 'Station Name': 'Station Name', 'Current Status': 'Current Status', 'Current Coordinator': 'Current Coordinator', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Grid Reference': 'Grid Reference', 'X': 'X', 'Y': 'Y', });
lyr_Activetraps2kmbuffer_3.set('fieldAliases', {'fid': 'fid', 'Station Name': 'Station Name', 'Current Status': 'Current Status', 'Current Coordinator': 'Current Coordinator', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Grid Reference': 'Grid Reference', 'X': 'X', 'Y': 'Y', });
lyr_Watercourses_4.set('fieldAliases', {'fid': 'fid', 'name1': 'name1', 'identifier': 'identifier', 'startNode': 'startNode', 'endNode': 'endNode', 'form': 'form', 'flow': 'flow', 'fictitious': 'fictitious', 'length': 'length', 'name2': 'name2', });
lyr_Emptytraps_5.set('fieldAliases', {'fid': 'fid', 'Station Name': 'Station Name', 'Current Status': 'Current Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Grid Reference': 'Grid Reference', 'X': 'X', 'Y': 'Y', });
lyr_INACTIVEtraps_6.set('fieldAliases', {'fid': 'fid', 'Station Name': 'Station Name', 'Current Status': 'Current Status', 'Current Coordinator': 'Current Coordinator', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Grid Reference': 'Grid Reference', 'X': 'X', 'Y': 'Y', });
lyr_Activetraps_7.set('fieldAliases', {'fid': 'fid', 'Station Name': 'Station Name', 'Current Status': 'Current Status', 'Current Coordinator': 'Current Coordinator', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Grid Reference': 'Grid Reference', 'X': 'X', 'Y': 'Y', });
lyr_MINKJanJun2025_8.set('fieldAliases', {'fid': 'fid', 'Carcass Code': 'Carcass Code', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Record Date': 'Record Date', 'Station/Location': 'Station/Location', 'Station Coordinator': 'Station Coordinator', 'Grid Reference': 'Grid Reference', });
lyr_MINKJulyDec2025_9.set('fieldAliases', {'fid': 'fid', 'Carcass Code': 'Carcass Code', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Record Date': 'Record Date', 'Station/Location': 'Station/Location', 'Station Coordinator': 'Station Coordinator', 'Grid Reference': 'Grid Reference', });
lyr_MINK2026_10.set('fieldAliases', {'fid': 'fid', 'Carcass Code': 'Carcass Code', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Record Date': 'Record Date', 'Station/Location': 'Station/Location', 'Station Coordinator': 'Station Coordinator', 'Grid Reference': 'Grid Reference', });
lyr_Lincolnshire_1.set('fieldImages', {'id': '', });
lyr_Inactivetraps2kmbuffer_2.set('fieldImages', {'fid': 'TextEdit', 'Station Name': 'TextEdit', 'Current Status': 'TextEdit', 'Current Coordinator': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Grid Reference': 'TextEdit', 'X': 'Range', 'Y': 'Range', });
lyr_Activetraps2kmbuffer_3.set('fieldImages', {'fid': 'TextEdit', 'Station Name': 'TextEdit', 'Current Status': 'TextEdit', 'Current Coordinator': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Grid Reference': 'TextEdit', 'X': 'Range', 'Y': 'Range', });
lyr_Watercourses_4.set('fieldImages', {'fid': 'TextEdit', 'name1': 'TextEdit', 'identifier': 'TextEdit', 'startNode': 'TextEdit', 'endNode': 'TextEdit', 'form': 'TextEdit', 'flow': 'TextEdit', 'fictitious': 'TextEdit', 'length': 'Range', 'name2': 'TextEdit', });
lyr_Emptytraps_5.set('fieldImages', {'fid': 'TextEdit', 'Station Name': 'TextEdit', 'Current Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Grid Reference': 'TextEdit', 'X': 'Range', 'Y': 'Range', });
lyr_INACTIVEtraps_6.set('fieldImages', {'fid': '', 'Station Name': 'TextEdit', 'Current Status': 'TextEdit', 'Current Coordinator': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Grid Reference': 'TextEdit', 'X': 'Range', 'Y': 'Range', });
lyr_Activetraps_7.set('fieldImages', {'fid': 'TextEdit', 'Station Name': 'TextEdit', 'Current Status': 'TextEdit', 'Current Coordinator': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Grid Reference': 'TextEdit', 'X': 'Range', 'Y': 'Range', });
lyr_MINKJanJun2025_8.set('fieldImages', {'fid': '', 'Carcass Code': '', 'Latitude': '', 'Longitude': '', 'Record Date': '', 'Station/Location': '', 'Station Coordinator': '', 'Grid Reference': '', });
lyr_MINKJulyDec2025_9.set('fieldImages', {'fid': '', 'Carcass Code': '', 'Latitude': '', 'Longitude': '', 'Record Date': '', 'Station/Location': '', 'Station Coordinator': '', 'Grid Reference': '', });
lyr_MINK2026_10.set('fieldImages', {'fid': 'TextEdit', 'Carcass Code': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Record Date': 'TextEdit', 'Station/Location': 'TextEdit', 'Station Coordinator': 'TextEdit', 'Grid Reference': 'TextEdit', });
lyr_Lincolnshire_1.set('fieldLabels', {'id': 'no label', });
lyr_Inactivetraps2kmbuffer_2.set('fieldLabels', {'fid': 'no label', 'Station Name': 'no label', 'Current Status': 'no label', 'Current Coordinator': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Grid Reference': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Activetraps2kmbuffer_3.set('fieldLabels', {'fid': 'no label', 'Station Name': 'no label', 'Current Status': 'no label', 'Current Coordinator': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Grid Reference': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Watercourses_4.set('fieldLabels', {'fid': 'no label', 'name1': 'no label', 'identifier': 'no label', 'startNode': 'no label', 'endNode': 'no label', 'form': 'no label', 'flow': 'no label', 'fictitious': 'no label', 'length': 'no label', 'name2': 'no label', });
lyr_Emptytraps_5.set('fieldLabels', {'fid': 'hidden field', 'Station Name': 'no label', 'Current Status': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Grid Reference': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_INACTIVEtraps_6.set('fieldLabels', {'fid': 'hidden field', 'Station Name': 'no label', 'Current Status': 'no label', 'Current Coordinator': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Grid Reference': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Activetraps_7.set('fieldLabels', {'fid': 'hidden field', 'Station Name': 'no label', 'Current Status': 'hidden field', 'Current Coordinator': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Grid Reference': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_MINKJanJun2025_8.set('fieldLabels', {'fid': 'hidden field', 'Carcass Code': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Record Date': 'no label', 'Station/Location': 'no label', 'Station Coordinator': 'no label', 'Grid Reference': 'hidden field', });
lyr_MINKJulyDec2025_9.set('fieldLabels', {'fid': 'hidden field', 'Carcass Code': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Record Date': 'no label', 'Station/Location': 'no label', 'Station Coordinator': 'no label', 'Grid Reference': 'hidden field', });
lyr_MINK2026_10.set('fieldLabels', {'fid': 'hidden field', 'Carcass Code': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Record Date': 'no label', 'Station/Location': 'no label', 'Station Coordinator': 'no label', 'Grid Reference': 'hidden field', });
lyr_MINK2026_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});