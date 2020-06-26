!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=375)}({0:function(e,t){var o=e.exports={version:"2.6.0"};"number"==typeof __e&&(__e=o)},23:function(e,t,o){e.exports={default:o(24),__esModule:!0}},24:function(e,t,o){var a=o(0),n=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},375:function(e,t,o){e.exports=o(376)},376:function(e,t,o){"use strict";var a,n=o(23),r=(a=n)&&a.__esModule?a:{default:a};!function(e){e.fn.tkVectorWorldMapGDP=function(){if(this.length){var e=window.jVectorMapGdpData;void 0!==e&&this.vectorMap({map:"world_mill_en",zoomOnScroll:!1,backgroundColor:"#fff",series:{regions:[{values:e,scale:[settings.colors.primary[500],settings.colors.success[500]],normalizeFunction:"polynomial"}]},onLabelShow:function(t,o,a){o.html(o.html()+" (GDP - "+e[a]+")")}})}},e.fn.tkVectorWorldMapMarkers=function(){this.length&&this.vectorMap({map:"world_mill_en",regionStyle:{initial:{fill:settings.colors.gray[300]}},zoomOnScroll:!1,normalizeFunction:"polynomial",hoverOpacity:.7,hoverColor:!1,markerStyle:{initial:{fill:settings.colors.primary[500],stroke:"#fff"}},backgroundColor:"#fff",markers:[{latLng:[41.9,12.45],name:"Vatican City"},{latLng:[43.73,7.41],name:"Monaco"},{latLng:[-.52,166.93],name:"Nauru"},{latLng:[-8.51,179.21],name:"Tuvalu"},{latLng:[43.93,12.46],name:"San Marino"},{latLng:[47.14,9.52],name:"Liechtenstein"},{latLng:[7.11,171.06],name:"Marshall Islands"},{latLng:[17.3,-62.73],name:"Saint Kitts and Nevis"},{latLng:[3.2,73.22],name:"Maldives"},{latLng:[35.88,14.5],name:"Malta"},{latLng:[12.05,-61.75],name:"Grenada"},{latLng:[13.16,-61.23],name:"Saint Vincent and the Grenadines"},{latLng:[13.16,-59.55],name:"Barbados"},{latLng:[17.11,-61.85],name:"Antigua and Barbuda"},{latLng:[-4.61,55.45],name:"Seychelles"},{latLng:[7.35,134.46],name:"Palau"},{latLng:[42.5,1.51],name:"Andorra"},{latLng:[14.01,-60.98],name:"Saint Lucia"},{latLng:[6.91,158.18],name:"Federated States of Micronesia"},{latLng:[1.3,103.8],name:"Singapore"},{latLng:[1.46,173.03],name:"Kiribati"},{latLng:[-21.13,-175.2],name:"Tonga"},{latLng:[15.3,-61.38],name:"Dominica"},{latLng:[-20.2,57.5],name:"Mauritius"},{latLng:[26.02,50.55],name:"Bahrain"},{latLng:[.33,6.73],name:"So Tom and Prncipe"}]})},e.fn.tkVectorUSAUnemployment=function(){if(this.length){var t=this;e.getJSON("assets/data/vector-maps/data/us-unemployment.json",function(e){var o=jvm.values.apply({},jvm.values(e.states)),a=Array.prototype.concat.apply([],jvm.values(e.metro.population)),n=Array.prototype.concat.apply([],jvm.values(e.metro.unemployment));t.vectorMap({map:"us_aea_en",markers:e.metro.coords,backgroundColor:"#fff",zoomOnScroll:!1,series:{markers:[{attribute:"fill",scale:[settings.colors.primary[300]],values:e.metro.unemployment[2009],min:jvm.min(n),max:jvm.max(n)},{attribute:"r",scale:[5,20],values:e.metro.population[2009],min:jvm.min(a),max:jvm.max(a)}],regions:[{scale:[settings.colors.primary[500],settings.colors.success[500]],attribute:"fill",values:e.states[2009],min:jvm.min(o),max:jvm.max(o)}]},onMarkerLabelShow:function(t,o,a){o.html("<b>"+e.metro.names[a]+"</b><br/><b>Population: </b>"+e.metro.population[2009][a]+"</br><b>Unemployment rate: </b>"+e.metro.unemployment[2009][a]+"%")},onRegionLabelShow:function(t,o,a){o.html("<b>"+o.html()+"</b></br><b>Unemployment rate: </b>"+e.states[2009][a]+"%")}})})}},e.fn.tkVectorRegionSelection=function(){if(this.length){var e=new jvm.Map({container:this,map:"de_merc_en",regionsSelectable:!0,markersSelectable:!0,backgroundColor:"#fff",zoomOnScroll:!1,markers:[{latLng:[52.5,13.39],name:"Berlin"},{latLng:[53.56,10],name:"Hamburg"},{latLng:[48.13,11.56],name:"Munich"},{latLng:[50.95,6.96],name:"Cologne"},{latLng:[50.11,8.68],name:"Frankfurt am Main"},{latLng:[48.77,9.17],name:"Stuttgart"},{latLng:[51.23,6.78],name:"Dusseldorf"},{latLng:[51.51,7.46],name:"Dortmund"},{latLng:[51.45,7.01],name:"Essen"},{latLng:[53.07,8.8],name:"Bremen"}],markerStyle:{initial:{fill:settings.colors.primary[300]},selected:{fill:settings.colors.success[500]}},regionStyle:{initial:{fill:settings.colors.primary[500]},selected:{fill:settings.colors.gray[700]}},series:{markers:[{attribute:"r",scale:[5,15],values:[887.7,755.16,310.69,405.17,248.31,207.35,217.22,280.71,210.32,325.42]}]},onRegionSelected:function(){window.localStorage&&window.localStorage.setItem("jvectormap-selected-regions",(0,r.default)(e.getSelectedRegions()))},onMarkerSelected:function(){window.localStorage&&window.localStorage.setItem("jvectormap-selected-markers",(0,r.default)(e.getSelectedMarkers()))}});e.setSelectedRegions(JSON.parse(window.localStorage.getItem("jvectormap-selected-regions")||"[]")),e.setSelectedMarkers(JSON.parse(window.localStorage.getItem("jvectormap-selected-markers")||"[]"))}},e.fn.tkVectorFranceElections=function(){this.length&&e.getJSON("assets/data/vector-maps/data/france-elections.json",function(t){new jvm.Map({map:"fr_merc_en",backgroundColor:"#fff",container:e("#france-2007"),zoomOnScroll:!1,series:{regions:[{scale:{1:settings.colors.primary[500],2:settings.colors.primary[300]},attribute:"fill",values:t.year2007.results}]}}),new jvm.Map({map:"fr_merc_en",container:e("#france-2012"),backgroundColor:"#fff",zoomOnScroll:!1,series:{regions:[{scale:{1:settings.colors.primary[500],2:settings.colors.primary[300]},attribute:"fill",values:t.year2012.results}]}})})};var t,o=[settings.colors.primary[300],settings.colors.primary[500],settings.colors.success[500],settings.colors.gray[300],settings.colors.success[500],settings.colors.success[600]],a=function(){var e,a={};for(e in t.regions)a[e]=o[Math.floor(Math.random()*o.length)];return a};e.fn.tkVectorRandomColors=function(){this.length&&((t=new jvm.Map({map:"es_merc_en",backgroundColor:"#fff",container:this,zoomOnScroll:!1,series:{regions:[{attribute:"fill"}]}})).series.regions[0].setValues(a()),e("#update-colors-button").click(function(e){e.preventDefault(),t.series.regions[0].setValues(a())}))},e.fn.tkVectorMallMap=function(){this.length&&this.vectorMap({map:"mall",backgroundColor:"#fff",zoomOnScroll:!1,markers:[{coords:[60,110],name:"Escalator 1",style:{fill:settings.colors.primary[300],stroke:"#fff"}},{coords:[260,95],name:"Escalator 2",style:{fill:settings.colors.primary[300],stroke:"#fff"}},{coords:[434,95],name:"Escalator 3",style:{fill:settings.colors.primary[300],stroke:"#fff"}},{coords:[634,110],name:"Escalator 4",style:{fill:settings.colors.primary[300],stroke:"#fff"}}],series:{regions:[{values:{F102:"SPORTS & OUTDOOR",F103:"HOME DECOR",F105:"FASHION",F106:"OTHER",F108:"BEAUTY & SPA",F109:"FASHION",F110:"BEAUTY & SPA",F111:"URBAN FAVORITES",F114:"SERVICES",F166:"DINING",F167:"FASHION",F169:"DINING",F170:"ENTERTAINMENT",F172:"DINING",F174:"DINING",F115:"KIDS STUFF",F117:"LIFESTYLE",F118:"URBAN FAVORITES",F119:"FASHION",F120:"FASHION",F122:"KIDS STUFF",F124:"KIDS STUFF",F125:"KIDS STUFF",F126:"KIDS STUFF",F128:"KIDS STUFF",F129:"LIFESTYLE",F130:"HOME DECOR",F132:"DINING",F133:"SPORTS & OUTDOOR",F134:"KIDS STUFF",F135:"LIFESTYLE",F136:"LIFESTYLE",F139:"KIDS STUFF",F153:"DINING",F155:"FASHION",F156:"URBAN FAVORITES",F157:"URBAN FAVORITES",F158:"LINGERIE & UNDERWEAR",F159:"FASHION",F160:"FASHION",F162:"FASHION",F164:"FASHION",F165:"FASHION",FR01:"REST ROOMS",FR02:"REST ROOMS",FR03:"REST ROOMS",FR04:"REST ROOMS",FFC:"DINING"},scale:{FASHION:"#2761ad","LINGERIE & UNDERWEAR":"#d58aa3","BEAUTY & SPA":settings.colors.success[500],"URBAN FAVORITES":settings.colors.primary[900],"SPORTS & OUTDOOR":settings.colors.success[500],"KIDS STUFF":settings.colors.success[300],ENTERTAINMENT:settings.colors.success[500],"HOME DECOR":settings.colors.gray[400],LIFESTYLE:settings.colors.gray[300],DINING:settings.colors.success[500],"REST ROOMS":settings.colors.gray[700],SERVICES:settings.colors.gray[300],OTHER:settings.colors.gray[500]}}]},onRegionLabelShow:function(e,t,o){""===t.html()&&e.preventDefault()}})},e.fn.tkVectorProjectionMap=function(){if(this.length){var t,o=0,a={};(t=new jvm.Map({map:"us_lcc_en",zoomOnScroll:!1,regionStyle:{initial:{fill:settings.colors.primary[500]}},backgroundColor:"#fff",markerStyle:{initial:{fill:"red"}},container:this,onMarkerLabelShow:function(e,o,n){t.label.text(a[n].lat.toFixed(2)+", "+a[n].lng.toFixed(2))},onMarkerClick:function(e,o){t.removeMarkers([o]),t.label.hide()}})).container.click(function(n){var r=t.pointToLatLng(n.offsetX,n.offsetY),s=e(n.target).attr("class");r&&(!s||s&&-1===e(n.target).attr("class").indexOf("jvectormap-marker"))&&(a[o]=r,t.addMarker(o,{latLng:[r.lat,r.lng]}),o+=1)})}},e('[data-toggle="vector-world-map-gdp"]').tkVectorWorldMapGDP(),e('[data-toggle="vector-world-map-markers"]').tkVectorWorldMapMarkers(),e('[data-toggle="vector-usa-unemployment"]').tkVectorUSAUnemployment(),e('[data-toggle="vector-region-selection"]').tkVectorRegionSelection(),e('[data-toggle="vector-france-elections"]').tkVectorFranceElections(),e('[data-toggle="vector-random-colors"]').tkVectorRandomColors(),e('[data-toggle="vector-mall-map"]').tkVectorMallMap(),e('[data-toggle="vector-projection-map"]').tkVectorProjectionMap()}(jQuery)}});