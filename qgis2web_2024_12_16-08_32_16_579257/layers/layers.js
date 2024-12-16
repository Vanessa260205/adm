var wms_layers = [];

var format_admin_kec_blora_0 = new ol.format.GeoJSON();
var features_admin_kec_blora_0 = format_admin_kec_blora_0.readFeatures(json_admin_kec_blora_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_kec_blora_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_kec_blora_0.addFeatures(features_admin_kec_blora_0);
var lyr_admin_kec_blora_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admin_kec_blora_0, 
                style: style_admin_kec_blora_0,
                popuplayertitle: 'admin_kec_blora',
                interactive: true,
                title: '<img src="styles/legend/admin_kec_blora_0.png" /> admin_kec_blora'
            });

lyr_admin_kec_blora_0.setVisible(true);
var layersList = [lyr_admin_kec_blora_0];
lyr_admin_kec_blora_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_admin_kec_blora_0.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_admin_kec_blora_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_admin_kec_blora_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});