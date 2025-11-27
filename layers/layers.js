var wms_layers = [];

var format_temakortKrib0001hNytemakort_0 = new ol.format.GeoJSON();
var features_temakortKrib0001hNytemakort_0 = format_temakortKrib0001hNytemakort_0.readFeatures(json_temakortKrib0001hNytemakort_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temakortKrib0001hNytemakort_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temakortKrib0001hNytemakort_0.addFeatures(features_temakortKrib0001hNytemakort_0);
var lyr_temakortKrib0001hNytemakort_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temakortKrib0001hNytemakort_0, 
                style: style_temakortKrib0001hNytemakort_0,
                popuplayertitle: 'temakortKrib0001h — Nytemakort',
                interactive: true,
    title: 'temakortKrib0001h — Nytemakort<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_0.png" /> 001<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_1.png" /> 101-1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_2.png" /> 102<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_3.png" /> 103<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_4.png" /> 104<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_5.png" /> 105<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_6.png" /> 106<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_7.png" /> 108<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_8.png" /> 109-1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_9.png" /> 112<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_10.png" /> 115<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_11.png" /> 116<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_12.png" /> 118<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_13.png" /> 119<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_14.png" /> 120<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_15.png" /> 121<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_16.png" /> 122<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_17.png" /> 124<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_18.png" /> 126<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_19.png" /> 127<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_20.png" /> 128<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_21.png" /> 131<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_22.png" /> 132<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_23.png" /> 133<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_24.png" /> 134<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_25.png" /> 135<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_26.png" /> 137<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_27.png" /> 139<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_28.png" /> 140<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_29.png" /> 141<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_30.png" /> 142<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_31.png" /> 143<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_32.png" /> 144<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_33.png" /> 147<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_34.png" /> 148<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_35.png" /> 149<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_36.png" /> 150<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_37.png" /> 151<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_38.png" /> 152<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_39.png" /> 154<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_40.png" /> 202<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_41.png" /> 203<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_42.png" /> 206<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_43.png" /> 207<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_44.png" /> 208<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_45.png" /> 209<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_46.png" /> 210<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_47.png" /> 211<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_48.png" /> 216<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_49.png" /> 220<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_50.png" /> 221<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_51.png" /> 225<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_52.png" /> 226<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_53.png" /> 228<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_54.png" /> 229<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_55.png" /> 230<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_56.png" /> 231<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_57.png" /> 232<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_58.png" /> 233<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_59.png" /> 234<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_60.png" /> 236<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_61.png" /> 237<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_62.png" /> 238<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_63.png" /> 239<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_64.png" /> 240<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_65.png" /> 241<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_66.png" /> 301-1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_67.png" /> 303<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_68.png" /> 304<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_69.png" /> 305<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_70.png" /> 306<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_71.png" /> 313<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_72.png" /> 314<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_73.png" /> 316<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_74.png" /> 322<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_75.png" /> 323<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_76.png" /> 324<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_77.png" /> 325<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_78.png" /> 326<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_79.png" /> 327<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_80.png" /> 328<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_81.png" /> 329<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_82.png" /> 330<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_83.png" /> 331<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_84.png" /> 332<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_85.png" /> 335<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_86.png" /> 338<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_87.png" /> 339<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_88.png" /> 340<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_89.png" /> 341<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_90.png" /> 342<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_91.png" /> 343<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_92.png" /> 345<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_93.png" /> 403-1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_94.png" /> 404<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_95.png" /> 405<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_96.png" /> 407<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_97.png" /> 408<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_98.png" /> 409<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_99.png" /> 411<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_100.png" /> 412<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_101.png" /> 418<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_102.png" /> 423<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_103.png" /> 429<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_104.png" /> 432<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_105.png" /> 433<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_106.png" /> 440<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_107.png" /> 441<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_108.png" /> 447<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_109.png" /> 448<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_110.png" /> 452<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_111.png" /> 454<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_112.png" /> 455<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_113.png" /> 456<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_114.png" /> 457<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_115.png" /> 458<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_116.png" /> 459<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_117.png" /> 462<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_118.png" /> 463<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_119.png" /> 464<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_120.png" /> 466<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_121.png" /> 467<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_122.png" /> 468<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_123.png" /> 469<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_124.png" /> 470<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_125.png" /> 471<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_126.png" /> 472<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_127.png" /> 473<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_128.png" /> 475<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_129.png" /> 476<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_130.png" /> 504<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_131.png" /> 507<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_132.png" /> 508<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_133.png" /> 510<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_134.png" /> 511<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_135.png" /> 516<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_136.png" /> 518<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_137.png" /> 519<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_138.png" /> A1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_139.png" /> A10<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_140.png" /> A11<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_143.png" /> A13<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_144.png" /> A14<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_145.png" /> A15<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_146.png" /> A3<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_147.png" /> A5<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_148.png" /> A7<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_149.png" /> A8<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_151.png" /> B17<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_155.png" /> H10<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_157.png" /> H11<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_158.png" /> H12<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_159.png" /> H13<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_160.png" /> H14<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_161.png" /> H15<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_162.png" /> H16<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_163.png" /> H17<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_164.png" /> H18<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_165.png" /> H20<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_167.png" /> H3<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_168.png" /> H4<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_169.png" /> H5<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_170.png" /> H9<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/temakortKrib0001hNytemakort_0_172.png" /> <br />' });
var format_Geokoding_Krha00021Biblioteker_1 = new ol.format.GeoJSON();
var features_Geokoding_Krha00021Biblioteker_1 = format_Geokoding_Krha00021Biblioteker_1.readFeatures(json_Geokoding_Krha00021Biblioteker_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geokoding_Krha00021Biblioteker_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geokoding_Krha00021Biblioteker_1.addFeatures(features_Geokoding_Krha00021Biblioteker_1);
var lyr_Geokoding_Krha00021Biblioteker_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geokoding_Krha00021Biblioteker_1, 
                style: style_Geokoding_Krha00021Biblioteker_1,
                popuplayertitle: 'Geokoding_Krha0002 (1) — Biblioteker',
                interactive: true,
                title: '<img src="styles/legend/Geokoding_Krha00021Biblioteker_1.png" /> Geokoding_Krha0002 (1) — Biblioteker'
            });
var format_Geokoding_Krha00021Brneinstitutioner_2 = new ol.format.GeoJSON();
var features_Geokoding_Krha00021Brneinstitutioner_2 = format_Geokoding_Krha00021Brneinstitutioner_2.readFeatures(json_Geokoding_Krha00021Brneinstitutioner_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geokoding_Krha00021Brneinstitutioner_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geokoding_Krha00021Brneinstitutioner_2.addFeatures(features_Geokoding_Krha00021Brneinstitutioner_2);
var lyr_Geokoding_Krha00021Brneinstitutioner_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geokoding_Krha00021Brneinstitutioner_2, 
                style: style_Geokoding_Krha00021Brneinstitutioner_2,
                popuplayertitle: 'Geokoding_Krha0002 (1) — Børneinstitutioner',
                interactive: true,
                title: '<img src="styles/legend/Geokoding_Krha00021Brneinstitutioner_2.png" /> Geokoding_Krha0002 (1) — Børneinstitutioner'
            });
var format_HvidovrekommuneFrededeomrder_3 = new ol.format.GeoJSON();
var features_HvidovrekommuneFrededeomrder_3 = format_HvidovrekommuneFrededeomrder_3.readFeatures(json_HvidovrekommuneFrededeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneFrededeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneFrededeomrder_3.addFeatures(features_HvidovrekommuneFrededeomrder_3);
var lyr_HvidovrekommuneFrededeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneFrededeomrder_3, 
                style: style_HvidovrekommuneFrededeomrder_3,
                popuplayertitle: 'Hvidovrekommune — Fredede områder',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneFrededeomrder_3.png" /> Hvidovrekommune — Fredede områder'
            });
var format_Hvidovrekommunefrededeomrder_4 = new ol.format.GeoJSON();
var features_Hvidovrekommunefrededeomrder_4 = format_Hvidovrekommunefrededeomrder_4.readFeatures(json_Hvidovrekommunefrededeomrder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovrekommunefrededeomrder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovrekommunefrededeomrder_4.addFeatures(features_Hvidovrekommunefrededeomrder_4);
var lyr_Hvidovrekommunefrededeomrder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovrekommunefrededeomrder_4, 
                style: style_Hvidovrekommunefrededeomrder_4,
                popuplayertitle: 'Hvidovrekommune — frededeområder',
                interactive: false,
    title: 'Hvidovrekommune — frededeområder<br />\
    <img src="styles/legend/Hvidovrekommunefrededeomrder_4_0.png" /> Damhuså<br />\
    <img src="styles/legend/Hvidovrekommunefrededeomrder_4_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Hvidovrekommunefrededeomrder_4_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Hvidovrekommunefrededeomrder_4_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Hvidovrekommunefrededeomrder_4_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Hvidovrekommunefrededeomrder_4_5.png" /> <br />' });
var format_HvidovrekommuneKommunegrnse_5 = new ol.format.GeoJSON();
var features_HvidovrekommuneKommunegrnse_5 = format_HvidovrekommuneKommunegrnse_5.readFeatures(json_HvidovrekommuneKommunegrnse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneKommunegrnse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneKommunegrnse_5.addFeatures(features_HvidovrekommuneKommunegrnse_5);
var lyr_HvidovrekommuneKommunegrnse_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneKommunegrnse_5, 
                style: style_HvidovrekommuneKommunegrnse_5,
                popuplayertitle: 'Hvidovrekommune — Kommunegrænse',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneKommunegrnse_5.png" /> Hvidovrekommune — Kommunegrænse'
            });
var format_Hvidovrekommunekommuneplan_6 = new ol.format.GeoJSON();
var features_Hvidovrekommunekommuneplan_6 = format_Hvidovrekommunekommuneplan_6.readFeatures(json_Hvidovrekommunekommuneplan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovrekommunekommuneplan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovrekommunekommuneplan_6.addFeatures(features_Hvidovrekommunekommuneplan_6);
var lyr_Hvidovrekommunekommuneplan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovrekommunekommuneplan_6, 
                style: style_Hvidovrekommunekommuneplan_6,
                popuplayertitle: 'Hvidovrekommune — kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Hvidovrekommunekommuneplan_6.png" /> Hvidovrekommune — kommuneplan'
            });
var format_HvidovrekommuneStrandbeskyttelse_7 = new ol.format.GeoJSON();
var features_HvidovrekommuneStrandbeskyttelse_7 = format_HvidovrekommuneStrandbeskyttelse_7.readFeatures(json_HvidovrekommuneStrandbeskyttelse_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneStrandbeskyttelse_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneStrandbeskyttelse_7.addFeatures(features_HvidovrekommuneStrandbeskyttelse_7);
var lyr_HvidovrekommuneStrandbeskyttelse_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneStrandbeskyttelse_7, 
                style: style_HvidovrekommuneStrandbeskyttelse_7,
                popuplayertitle: 'Hvidovrekommune — Strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/HvidovrekommuneStrandbeskyttelse_7.png" /> Hvidovrekommune — Strandbeskyttelse'
            });
var format_temakortKrib0001hOffenligbus_8 = new ol.format.GeoJSON();
var features_temakortKrib0001hOffenligbus_8 = format_temakortKrib0001hOffenligbus_8.readFeatures(json_temakortKrib0001hOffenligbus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temakortKrib0001hOffenligbus_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temakortKrib0001hOffenligbus_8.addFeatures(features_temakortKrib0001hOffenligbus_8);
var lyr_temakortKrib0001hOffenligbus_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temakortKrib0001hOffenligbus_8, 
                style: style_temakortKrib0001hOffenligbus_8,
                popuplayertitle: 'temakortKrib0001h — Offenlig bus',
                interactive: true,
                title: '<img src="styles/legend/temakortKrib0001hOffenligbus_8.png" /> temakortKrib0001h — Offenlig bus'
            });
var format_Geokoding_Krha00021Dagligvarer_9 = new ol.format.GeoJSON();
var features_Geokoding_Krha00021Dagligvarer_9 = format_Geokoding_Krha00021Dagligvarer_9.readFeatures(json_Geokoding_Krha00021Dagligvarer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geokoding_Krha00021Dagligvarer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geokoding_Krha00021Dagligvarer_9.addFeatures(features_Geokoding_Krha00021Dagligvarer_9);
var lyr_Geokoding_Krha00021Dagligvarer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geokoding_Krha00021Dagligvarer_9, 
                style: style_Geokoding_Krha00021Dagligvarer_9,
                popuplayertitle: 'Geokoding_Krha0002 (1) — Dagligvarer',
                interactive: true,
                title: '<img src="styles/legend/Geokoding_Krha00021Dagligvarer_9.png" /> Geokoding_Krha0002 (1) — Dagligvarer'
            });
var format_temakortKrib0001hOffenligtToilet_10 = new ol.format.GeoJSON();
var features_temakortKrib0001hOffenligtToilet_10 = format_temakortKrib0001hOffenligtToilet_10.readFeatures(json_temakortKrib0001hOffenligtToilet_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temakortKrib0001hOffenligtToilet_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temakortKrib0001hOffenligtToilet_10.addFeatures(features_temakortKrib0001hOffenligtToilet_10);
var lyr_temakortKrib0001hOffenligtToilet_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temakortKrib0001hOffenligtToilet_10, 
                style: style_temakortKrib0001hOffenligtToilet_10,
                popuplayertitle: 'temakortKrib0001h — Offenligt Toilet ',
                interactive: true,
                title: '<img src="styles/legend/temakortKrib0001hOffenligtToilet_10.png" /> temakortKrib0001h — Offenligt Toilet '
            });
var format_temakortKrib0001hrestauranter3_11 = new ol.format.GeoJSON();
var features_temakortKrib0001hrestauranter3_11 = format_temakortKrib0001hrestauranter3_11.readFeatures(json_temakortKrib0001hrestauranter3_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temakortKrib0001hrestauranter3_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temakortKrib0001hrestauranter3_11.addFeatures(features_temakortKrib0001hrestauranter3_11);
var lyr_temakortKrib0001hrestauranter3_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temakortKrib0001hrestauranter3_11, 
                style: style_temakortKrib0001hrestauranter3_11,
                popuplayertitle: 'temakortKrib0001h — restauranter3',
                interactive: true,
                title: '<img src="styles/legend/temakortKrib0001hrestauranter3_11.png" /> temakortKrib0001h — restauranter3'
            });
var format_HvidovrekommuneEllader_12 = new ol.format.GeoJSON();
var features_HvidovrekommuneEllader_12 = format_HvidovrekommuneEllader_12.readFeatures(json_HvidovrekommuneEllader_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneEllader_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneEllader_12.addFeatures(features_HvidovrekommuneEllader_12);
var lyr_HvidovrekommuneEllader_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneEllader_12, 
                style: style_HvidovrekommuneEllader_12,
                popuplayertitle: 'Hvidovrekommune — El-lader',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneEllader_12.png" /> Hvidovrekommune — El-lader'
            });
var format_HvidovrekommuneFitness_13 = new ol.format.GeoJSON();
var features_HvidovrekommuneFitness_13 = format_HvidovrekommuneFitness_13.readFeatures(json_HvidovrekommuneFitness_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneFitness_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneFitness_13.addFeatures(features_HvidovrekommuneFitness_13);
var lyr_HvidovrekommuneFitness_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneFitness_13, 
                style: style_HvidovrekommuneFitness_13,
                popuplayertitle: 'Hvidovrekommune — Fitness',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneFitness_13.png" /> Hvidovrekommune — Fitness'
            });
var format_Geokoding_Krha00021Folkeskoler_14 = new ol.format.GeoJSON();
var features_Geokoding_Krha00021Folkeskoler_14 = format_Geokoding_Krha00021Folkeskoler_14.readFeatures(json_Geokoding_Krha00021Folkeskoler_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geokoding_Krha00021Folkeskoler_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geokoding_Krha00021Folkeskoler_14.addFeatures(features_Geokoding_Krha00021Folkeskoler_14);
var lyr_Geokoding_Krha00021Folkeskoler_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geokoding_Krha00021Folkeskoler_14, 
                style: style_Geokoding_Krha00021Folkeskoler_14,
                popuplayertitle: 'Geokoding_Krha0002 (1) — Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Geokoding_Krha00021Folkeskoler_14.png" /> Geokoding_Krha0002 (1) — Folkeskoler'
            });
var format_HvidovrekommuneFritidsaktiviteter_15 = new ol.format.GeoJSON();
var features_HvidovrekommuneFritidsaktiviteter_15 = format_HvidovrekommuneFritidsaktiviteter_15.readFeatures(json_HvidovrekommuneFritidsaktiviteter_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneFritidsaktiviteter_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneFritidsaktiviteter_15.addFeatures(features_HvidovrekommuneFritidsaktiviteter_15);
var lyr_HvidovrekommuneFritidsaktiviteter_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneFritidsaktiviteter_15, 
                style: style_HvidovrekommuneFritidsaktiviteter_15,
                popuplayertitle: 'Hvidovrekommune — Fritidsaktiviteter',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneFritidsaktiviteter_15.png" /> Hvidovrekommune — Fritidsaktiviteter'
            });
var format_HvidovrekommuneHospital_16 = new ol.format.GeoJSON();
var features_HvidovrekommuneHospital_16 = format_HvidovrekommuneHospital_16.readFeatures(json_HvidovrekommuneHospital_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneHospital_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneHospital_16.addFeatures(features_HvidovrekommuneHospital_16);
var lyr_HvidovrekommuneHospital_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneHospital_16, 
                style: style_HvidovrekommuneHospital_16,
                popuplayertitle: 'Hvidovrekommune — Hospital',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneHospital_16.png" /> Hvidovrekommune — Hospital'
            });
var format_HvidovrekommuneKirker_17 = new ol.format.GeoJSON();
var features_HvidovrekommuneKirker_17 = format_HvidovrekommuneKirker_17.readFeatures(json_HvidovrekommuneKirker_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneKirker_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneKirker_17.addFeatures(features_HvidovrekommuneKirker_17);
var lyr_HvidovrekommuneKirker_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneKirker_17, 
                style: style_HvidovrekommuneKirker_17,
                popuplayertitle: 'Hvidovrekommune — Kirker',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneKirker_17.png" /> Hvidovrekommune — Kirker'
            });
var format_HvidovrekommuneLge_18 = new ol.format.GeoJSON();
var features_HvidovrekommuneLge_18 = format_HvidovrekommuneLge_18.readFeatures(json_HvidovrekommuneLge_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneLge_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneLge_18.addFeatures(features_HvidovrekommuneLge_18);
var lyr_HvidovrekommuneLge_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneLge_18, 
                style: style_HvidovrekommuneLge_18,
                popuplayertitle: 'Hvidovrekommune — Læge',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneLge_18.png" /> Hvidovrekommune — Læge'
            });
var format_HvidovrekommuneMoskeer_19 = new ol.format.GeoJSON();
var features_HvidovrekommuneMoskeer_19 = format_HvidovrekommuneMoskeer_19.readFeatures(json_HvidovrekommuneMoskeer_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneMoskeer_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneMoskeer_19.addFeatures(features_HvidovrekommuneMoskeer_19);
var lyr_HvidovrekommuneMoskeer_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneMoskeer_19, 
                style: style_HvidovrekommuneMoskeer_19,
                popuplayertitle: 'Hvidovrekommune — Moskeer',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneMoskeer_19.png" /> Hvidovrekommune — Moskeer'
            });
var format_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20 = new ol.format.GeoJSON();
var features_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20 = format_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20.readFeatures(json_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20.addFeatures(features_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20);
var lyr_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20, 
                style: style_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20,
                popuplayertitle: 'Hvidovrekommune — Parkernaturområder (1) — Parker/naturområder',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneParkernaturomrder1Parkernaturomrder_20.png" /> Hvidovrekommune — Parkernaturområder (1) — Parker/naturområder'
            });
var format_HvidovrekommuneParking_21 = new ol.format.GeoJSON();
var features_HvidovrekommuneParking_21 = format_HvidovrekommuneParking_21.readFeatures(json_HvidovrekommuneParking_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneParking_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneParking_21.addFeatures(features_HvidovrekommuneParking_21);
var lyr_HvidovrekommuneParking_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneParking_21, 
                style: style_HvidovrekommuneParking_21,
                popuplayertitle: 'Hvidovrekommune — Parking',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneParking_21.png" /> Hvidovrekommune — Parking'
            });
var format_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22 = new ol.format.GeoJSON();
var features_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22 = format_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22.readFeatures(json_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22.addFeatures(features_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22);
var lyr_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22, 
                style: style_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22,
                popuplayertitle: 'Hvidovrekommune — ShelterQuark naturcenter — Shelter/Quark naturcenter',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22.png" /> Hvidovrekommune — ShelterQuark naturcenter — Shelter/Quark naturcenter'
            });
var format_HvidovrekommuneSkoler_23 = new ol.format.GeoJSON();
var features_HvidovrekommuneSkoler_23 = format_HvidovrekommuneSkoler_23.readFeatures(json_HvidovrekommuneSkoler_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneSkoler_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneSkoler_23.addFeatures(features_HvidovrekommuneSkoler_23);
var lyr_HvidovrekommuneSkoler_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneSkoler_23, 
                style: style_HvidovrekommuneSkoler_23,
                popuplayertitle: 'Hvidovrekommune — Skoler',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneSkoler_23.png" /> Hvidovrekommune — Skoler'
            });
var format_HvidovrekommuneTogstationer_24 = new ol.format.GeoJSON();
var features_HvidovrekommuneTogstationer_24 = format_HvidovrekommuneTogstationer_24.readFeatures(json_HvidovrekommuneTogstationer_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovrekommuneTogstationer_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovrekommuneTogstationer_24.addFeatures(features_HvidovrekommuneTogstationer_24);
var lyr_HvidovrekommuneTogstationer_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovrekommuneTogstationer_24, 
                style: style_HvidovrekommuneTogstationer_24,
                popuplayertitle: 'Hvidovrekommune — Togstationer',
                interactive: true,
                title: '<img src="styles/legend/HvidovrekommuneTogstationer_24.png" /> Hvidovrekommune — Togstationer'
            });

lyr_temakortKrib0001hNytemakort_0.setVisible(true);lyr_Geokoding_Krha00021Biblioteker_1.setVisible(true);lyr_Geokoding_Krha00021Brneinstitutioner_2.setVisible(true);lyr_HvidovrekommuneFrededeomrder_3.setVisible(true);lyr_Hvidovrekommunefrededeomrder_4.setVisible(true);lyr_HvidovrekommuneKommunegrnse_5.setVisible(true);lyr_Hvidovrekommunekommuneplan_6.setVisible(true);lyr_HvidovrekommuneStrandbeskyttelse_7.setVisible(true);lyr_temakortKrib0001hOffenligbus_8.setVisible(true);lyr_Geokoding_Krha00021Dagligvarer_9.setVisible(true);lyr_temakortKrib0001hOffenligtToilet_10.setVisible(true);lyr_temakortKrib0001hrestauranter3_11.setVisible(true);lyr_HvidovrekommuneEllader_12.setVisible(true);lyr_HvidovrekommuneFitness_13.setVisible(true);lyr_Geokoding_Krha00021Folkeskoler_14.setVisible(true);lyr_HvidovrekommuneFritidsaktiviteter_15.setVisible(true);lyr_HvidovrekommuneHospital_16.setVisible(true);lyr_HvidovrekommuneKirker_17.setVisible(true);lyr_HvidovrekommuneLge_18.setVisible(true);lyr_HvidovrekommuneMoskeer_19.setVisible(true);lyr_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20.setVisible(true);lyr_HvidovrekommuneParking_21.setVisible(true);lyr_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22.setVisible(true);lyr_HvidovrekommuneSkoler_23.setVisible(true);lyr_HvidovrekommuneTogstationer_24.setVisible(true);
var layersList = [lyr_temakortKrib0001hNytemakort_0,lyr_Geokoding_Krha00021Biblioteker_1,lyr_Geokoding_Krha00021Brneinstitutioner_2,lyr_HvidovrekommuneFrededeomrder_3,lyr_Hvidovrekommunefrededeomrder_4,lyr_HvidovrekommuneKommunegrnse_5,lyr_Hvidovrekommunekommuneplan_6,lyr_HvidovrekommuneStrandbeskyttelse_7,lyr_temakortKrib0001hOffenligbus_8,lyr_Geokoding_Krha00021Dagligvarer_9,lyr_temakortKrib0001hOffenligtToilet_10,lyr_temakortKrib0001hrestauranter3_11,lyr_HvidovrekommuneEllader_12,lyr_HvidovrekommuneFitness_13,lyr_Geokoding_Krha00021Folkeskoler_14,lyr_HvidovrekommuneFritidsaktiviteter_15,lyr_HvidovrekommuneHospital_16,lyr_HvidovrekommuneKirker_17,lyr_HvidovrekommuneLge_18,lyr_HvidovrekommuneMoskeer_19,lyr_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20,lyr_HvidovrekommuneParking_21,lyr_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22,lyr_HvidovrekommuneSkoler_23,lyr_HvidovrekommuneTogstationer_24];
lyr_temakortKrib0001hNytemakort_0.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Geokoding_Krha00021Biblioteker_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Geokoding_Krha00021Brneinstitutioner_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneFrededeomrder_3.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Hvidovrekommunefrededeomrder_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_HvidovrekommuneKommunegrnse_5.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Hvidovrekommunekommuneplan_6.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_HvidovrekommuneStrandbeskyttelse_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_temakortKrib0001hOffenligbus_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Geokoding_Krha00021Dagligvarer_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_temakortKrib0001hOffenligtToilet_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_temakortKrib0001hrestauranter3_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneEllader_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneFitness_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Geokoding_Krha00021Folkeskoler_14.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'adresse': 'adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HvidovrekommuneFritidsaktiviteter_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneHospital_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneKirker_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneLge_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneMoskeer_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneParking_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovrekommuneSkoler_23.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HvidovrekommuneTogstationer_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_temakortKrib0001hNytemakort_0.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Geokoding_Krha00021Biblioteker_1.set('fieldImages', {'fid': '', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Geokoding_Krha00021Brneinstitutioner_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovrekommuneFrededeomrder_3.set('fieldImages', {'fid': '', 'Temakode': '', 'Temanavn': '', 'Objekt_id': '', 'Version_id': '', 'Systid_fra': '', 'Systid_til': '', 'Oprettet': '', 'Oprindkode': '', 'Oprindelse': '', 'Statuskode': '', 'Status': '', 'Off_kode': '', 'Offentlig': '', 'CVR_kode': '', 'CVR_navn': '', 'Bruger_id': '', 'Link': '', 'Shape_area': '', 'Shape_length': '', 'Fred_tkode': '', 'Fred_tnavn': '', 'Reg_nr': '', 'Fred_navn': '', 'Aendr_kode': '', 'Aendrbegr': '', 'Aar_fredn': '', 'Gyldig_fra': '', 'Gyldig_til': '', });
lyr_Hvidovrekommunefrededeomrder_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Fred_tkode': 'Range', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'Range', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'Range', 'Gyldig_fra': 'DateTime', 'Gyldig_til': 'DateTime', });
lyr_HvidovrekommuneKommunegrnse_5.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Hvidovrekommunekommuneplan_6.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_HvidovrekommuneStrandbeskyttelse_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_temakortKrib0001hOffenligbus_8.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Geokoding_Krha00021Dagligvarer_9.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_temakortKrib0001hOffenligtToilet_10.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_temakortKrib0001hrestauranter3_11.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_HvidovrekommuneEllader_12.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovrekommuneFitness_13.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Geokoding_Krha00021Folkeskoler_14.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_HvidovrekommuneFritidsaktiviteter_15.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovrekommuneHospital_16.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovrekommuneKirker_17.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovrekommuneLge_18.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovrekommuneMoskeer_19.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovrekommuneParking_21.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovrekommuneSkoler_23.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_HvidovrekommuneTogstationer_24.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_temakortKrib0001hNytemakort_0.set('fieldLabels', {'fid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Geokoding_Krha00021Biblioteker_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Geokoding_Krha00021Brneinstitutioner_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneFrededeomrder_3.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Hvidovrekommunefrededeomrder_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_HvidovrekommuneKommunegrnse_5.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'no label', });
lyr_Hvidovrekommunekommuneplan_6.set('fieldLabels', {'fid': 'no label', 'oid': 'inline label - always visible', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_HvidovrekommuneStrandbeskyttelse_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_temakortKrib0001hOffenligbus_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Geokoding_Krha00021Dagligvarer_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_temakortKrib0001hOffenligtToilet_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_temakortKrib0001hrestauranter3_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneEllader_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneFitness_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Geokoding_Krha00021Folkeskoler_14.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'inline label - always visible', 'adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_HvidovrekommuneFritidsaktiviteter_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneHospital_16.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneKirker_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneLge_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneMoskeer_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneParkernaturomrder1Parkernaturomrder_20.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneParking_21.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneShelterQuarknaturcenterShelterQuarknaturcenter_22.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovrekommuneSkoler_23.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_HvidovrekommuneTogstationer_24.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_HvidovrekommuneTogstationer_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});