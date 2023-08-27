var attrArray = ['STUDIO','1_BED','2_BED','3_BED','4_BED'];
var joinArray = ['STATE_NUM','STUDIO','1_BED','2_BED','3_BED','4_BED'];

var viewArray = ['National', 'AL',
'AK','AZ','AR','CA','CO','CT',
'DE','DC','FL','GA','HI','ID','IL',
'IN','IA','KS','KY','LA','ME','MD',
'MA','MI','MN','MS','MO','MT','NC',
'ND','NE','NH','NJ','NM','NV','NY',
'OH','OK','OR','PA','RI','SC','SD',
'TN','TX','UT','VT','VA','WA','WV',
'WI','WY'];

const abbrNum = new Map([
    ['AL',1], 
    ['AK',2],
    ['AZ',4],
    ['AR',5],
    ['CA',6],
    ['CO',8],
    ['CT',9],
    ['DE',10],
    ['DC',11],
    ['FL',12],
    ['GA',13],
    ['HI',15],
    ['ID',16],
    ['IL',17],
    ['IN',18],
    ['IA',19],
    ['KS',20],
    ['KY',21],
    ['LA',22],
    ['ME',23],
    ['MD',24],
    ['MA',25],
    ['MI',26],
    ['MN',27],
    ['MS',28],
    ['MO',29],
    ['MT',30],
    ['NE',31],
    ['NV',32],
    ['NH',33],
    ['NJ',34],
    ['NM',35],
    ['NY',36],
    ['NC',37],
    ['ND',38],
    ['OH',39],
    ['OK',40],
    ['OR',41],
    ['PA',42],
    ['RI',44],
    ['SC',45],
    ['SD',46],
    ['TN',47],
    ['TX',48],
    ['UT',49],
    ['VT',50],
    ['VA',51],
    ['WA',53],
    ['WV',54],
    ['WI',55],
    ['WY',56]
]);

const viewCenter = '{"coordinates":[' +
    '{"view": "National","lat":"39.83","long":"-92.58","zoom":"4.2","scale":"500"},' +
    '{"view":"AL","lat":"32.78","long":"-86.8","zoom":"7","scale":"2500"},' +
    '{"view":"AK","lat":"64.1","long":"-152.28","zoom":"4.2","scale":"300"},' +
    '{"view":"AR","lat":"34.89","long":"-92.44","zoom":"7.2","scale":"4000"},' +
    '{"view":"AZ","lat":"34.27","long":"-111.66","zoom":"6.5","scale":"2500"},' +
    '{"view":"CA","lat":"37.18","long":"-119.47","zoom":"5.5","scale":"1300"},' +
    '{"view":"CO","lat":"39.00","long":"-105.54","zoom":"7","scale":"2500"},' +
    '{"view":"CT","lat":"41.62","long":"-72.73","zoom":"8","scale":"10000"},' +
    '{"view":"DC","lat":"38.91","long":"-77.01","zoom":"11.2","scale":"50000"},' +
    '{"view":"DE","lat":"38.99","long":"-75.50","zoom":"8.3","scale":"10000"},' +
    '{"view":"FL","lat":"28.13","long":"-82.45","zoom":"6.5","scale":"1900"},' +
    '{"view":"GA","lat":"32.94","long":"-83.44","zoom":"7","scale":"2400"},' +
    '{"view":"HI","lat":"20.29","long":"-156.37","zoom":"7","scale":"2500"},' +
    '{"view":"IA","lat":"42.08","long":"-93.50","zoom":"7","scale":"2700"},' +
    '{"view":"ID","lat":"45.35","long":"-114.61","zoom":"6","scale":"1400"},' +
    '{"view":"IL","lat":"40.00","long":"-89.20","zoom":"6.6","scale":"1900"},' +
    '{"view":"IN","lat":"39.89","long":"-86.28","zoom":"7","scale":"2700"},' +
    '{"view":"KS","lat":"38.49","long":"-97.98","zoom":"7","scale":"2500"},' +
    '{"view":"KY","lat":"37.53","long":"-85.30","zoom":"7","scale":"2500"},' +
    '{"view":"LA","lat":"31.07","long":"-92.00","zoom":"7","scale":"2700"},' +
    '{"view":"MA","lat":"42.26","long":"-71.81","zoom":"7.5","scale":"4700"},' +
    '{"view":"MD","lat":"39.06","long":"-76.79","zoom":"7.5","scale":"4000"},' +
    '{"view":"ME","lat":"45.37","long":"-69.24","zoom":"6.9","scale":"2500"},' +
    '{"view":"MI","lat":"44.35","long":"-85.41","zoom":"6.2","scale":"1600"},' +
    '{"view":"MN","lat":"46.28","long":"-94.31","zoom":"6.2","scale":"1600"},' +
    '{"view":"MO","lat":"38.36","long":"-92.46","zoom":"6.9","scale":"2200"},' +
    '{"view":"MS","lat":"32.74","long":"-89.67","zoom":"6.9","scale":"2500"},' +
    '{"view":"MT","lat":"47.05","long":"-109.63","zoom":"6.2","scale":"1600"},' +
    '{"view":"NC","lat":"35.56","long":"-79.39","zoom":"6.8","scale":"2250"},' +
    '{"view":"ND","lat":"47.45","long":"-99.57","zoom":"7","scale":"2500"},' +
    '{"view":"NE","lat":"41.54","long":"-99.30","zoom":"6.8","scale":"2200"},' +
    '{"view":"NH","lat":"43.98","long":"-71.58","zoom":"7.3","scale":"3600"},' +
    '{"view":"NJ","lat":"40.19","long":"-74.67","zoom":"7.8","scale":"4500"},' +
    '{"view":"NM","lat":"34.41","long":"-106.11","zoom":"6.6","scale":"2300"},' +
    '{"view":"NV","lat":"38.77","long":"-116.63","zoom":"6.2","scale":"1600"},' +
    '{"view":"NY","lat":"42.95","long":"-75.53","zoom":"6.8","scale":"2200"},' +
    '{"view":"OH","lat":"40.29","long":"-82.79","zoom":"7","scale":"2800"},' +
    '{"view":"OK","lat":"35.59","long":"-98.49","zoom":"6.8","scale":"2350"},' +
    '{"view":"OR","lat":"44.43","long":"-120.56","zoom":"6.8","scale":"2200"},' +
    '{"view":"PA","lat":"40.88","long":"-77.20","zoom":"7.3","scale":"2900"},' +
    '{"view":"RI","lat":"41.68","long":"-71.56","zoom":"9","scale":"10000"},' +
    '{"view":"SC","lat":"33.92","long":"-80.90","zoom":"7.3","scale":"2900"},' +
    '{"view":"SD","lat":"44.44","long":"-99.95","zoom":"7","scale":"2500"},' +
    '{"view":"TN","lat":"35.86","long":"-85.85","zoom":"6.8","scale":"2350"},' +
    '{"view":"TX","lat":"31.48","long":"-99.33","zoom":"5.8","scale":"1000"},' +
    '{"view":"UT","lat":"39.81","long":"-111.67","zoom":"6.7","scale":"2100"},' +
    '{"view":"VA","lat":"37.52","long":"-79.36","zoom":"7","scale":"2500"},' +
    '{"view":"VT","lat":"44.07","long":"-72.67","zoom":"7.2","scale":"3700"},' +
    '{"view":"WA","lat":"47.38","long":"-120.45","zoom":"7","scale":"2500"},' +
    '{"view":"WI","lat":"44.87","long":"-89.99","zoom":"6.8","scale":"2200"},' +
    '{"view":"WV","lat":"38.94","long":"-80.12","zoom":"7.3","scale":"3300"},' +
    '{"view":"WY","lat":"43.00","long":"-107.55","zoom":"6.6","scale":"2400"}]}';

var expressed = attrArray[4];
var map;
var stateCenters;
var slippyLayer;

function loadContainer(){
    
    //create map instance 
    map = L.map('map-container').setView([39.83,-92.58],4.2)
    
    
    stateCenters = JSON.parse(viewCenter);

    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    });

    osm.addTo(map);

    loadMapData();
};

//load map data
function loadMapData(){

var promises = [d3.json("data/us_counties.topojson"),
                d3.csv("data/county_index.csv")
            ];

    Promise.all(promises).then(callback);
};


//process loaded data
function callback(data) {
    var county_topo = data[0],
        county_data = data[1]
    ;
    //default to $1000
    var lowerInput = 1000;
    var upperInput = 1300;
    var inputArray = [lowerInput, upperInput];

    //translate topoJSON to geoJSON
    var county_geo = convertTopoToGeo(county_topo);

    county_geo = joinData(county_geo,county_data);

    var colorScale = createColorScale(inputArray);

    createDropdowns(county_geo);
    
    loadSlippyMapLayer(county_geo, colorScale);
    
    //set deafult scale
    var scale = 500;
    view = 'National';

    loadSVGLayer(county_geo, colorScale, scale, view);
};

//load slippy map layer
function loadSlippyMapLayer(geoJSON, colorScale) {
    console.log('loading slippy map layer...')
    slippyLayer = L.geoJSON(geoJSON, {
        style: function(feature) {
            return styleSlippyLayer(feature.properties[expressed], colorScale);
        }
    })
    .addTo(map);
}

//style slippy layer
function styleSlippyLayer(feature_value, colorScale) {
    return {
        color: colorScale(feature_value),
        fillColor: colorScale(feature_value),
        weight: 1,
        opacity: 1,
        fillOpacity: 0.40
    };
};

//style slippy layer
function styleGreySlippyLayer() {
    return {
        color: '#eeeeee',
        fillColor: '#eeeeee',
        weight: .25,
        opacity: 1,
        fillOpacity: 0.5
    };
};

function loadSVGLayer(geoJSON, colorScale, scale, view){
    var width = 420;
    var height = 250;

    var projMap = d3.select('#projection-container')
        .append('svg')
        .attr('class', 'projection-map')
        .attr('width', width)
        .attr('height', height);
    
    var projection = d3.geoAlbersUsa()
        .scale(scale) //set here when moving between state and nation (800)
        .translate([width / 2, height / 2]);

    var path = d3.geoPath()
        .projection(projection); 

    drawCounties(geoJSON, projMap, path, colorScale, view);    
};

//create color scale
function createColorScale(inputArray){
    var colorClasses = ['#488f31',
        '#b1d081',
        '#e98057'
    ];

    var colorScale = d3.scaleThreshold().range(colorClasses);

    colorScale = colorScale.domain(inputArray);

    return colorScale;
};

//translate TOPOJSON to GEOJSON
function convertTopoToGeo(counties){
    console.log("converting to geoJSON...");
    var counties_topo = topojson.feature(counties, counties.objects.counties);
    var county_features = counties_topo.features;
    return county_features;
};

//join geoJSOn 
function joinData(geoJSON, data) {
    for (var i = 0; i < data.length; i++ ) {
        var csv = data[i];
        var csv_key = csv.GEO_ID;

        var key_found = false;

        for(var j = 0; j < geoJSON.length; j++) {
            var json = geoJSON[j].properties;
            var json_key = json.GEO_ID;
            

            if (csv_key == json_key) {
                key_found = true;
                joinArray.forEach(function(attr) {
                    var val = parseInt(csv[attr]);
                    json[attr] = val;
                })    
            } 

        };

        //log keys for which data is not found
        if (!key_found) {
            console.log("data for key " + csv_key + " NOT FOUND");
        };
    };

    return geoJSON;
};

function drawCounties(geoFeatures, map, path, colorScale, view) {
    console.log('drawing svg county...')
    var counties =  map.selectAll('.counties')
            .data(geoFeatures)
            .enter()
            .append("path")
            .attr('class', function(d) {
                return "counties " + d.properties.NAME + d.properties.STATE_NUM;
            })
            .attr('d', path)
            .style('fill', function(d) {
                if (view == 'National') {
                    return colorScale(d.properties[expressed]);
                } else {
                    var statNum = abbrNum.get(view);
                    if (d.properties['STATE_NUM'] == statNum ) {
                        return colorScale(d.properties[expressed]); 
                    } else {
                        return '#F8F0C6';
                    }
                }
            })
            .style('stroke', "#F8F0C6")
            .style('stroke-width', '.25')
            .on("mouseover", function(event, d){
              highlight(d.properties,view,colorScale);
            })
            .on("mouseout", function(event, d){
              dehighlight(d.properties);
            })
            .on("click", function(event, d){
                panTo(d);
            })
           .on("mousemove", moveLabel);
      }; 
    
    //function to create a dropdown menu for attribute selection
function createDropdowns(county_geo){
    console.log("creating dropdowns...");

    //add select element
    var dropdown = d3.select("#select-size-container")
        .append("select")
        .attr("class", "dropdown")
        .on("change", function(){
            updateApartmentSize(this.value)
        });

    //add initial option
    var titleOption = dropdown.append("option")
        .attr("class", "titleOption")
        .attr("disabled", "true")
        .text("Select...");

    //add attribute name options
    var attrOptions = dropdown.selectAll("attrOptions")
        .data(attrArray)
        .enter()
        .append("option")
        .attr("value", function(d){ return d })
        .text(function(d){ return d });

    var viewDropdown = d3.select("#select-view-container")
        .append("select")
        .attr("class", "dropdown")
        .attr("id", "select-view-dropdown")
        .on("change", function(){
             updateView(this.value,county_geo)
        });

    //add initial option
    var viewTitleOption = viewDropdown.append("option")
        .attr("class", "titleOption")
        .attr("disabled", "true")
        .text("Select...");

    //add attribute name options
    var viewAttrOptions = viewDropdown.selectAll("viewAttrOptions")
        .data(viewArray)
        .enter()
        .append("option")
        .attr("value", function(d){ return d })
        .text(function(d){ return d });
    
};

function updateApartmentSize(value) {
    console.log("updating view...");
    //update expressed attribute
    expressed = value;

     //get update range
     var lowerInput = document.getElementById('lower-input').value;
     var upperInput = document.getElementById('upper-input').value;

     var view = document.getElementById('select-view-dropdown').value;

     var inputArray = [lowerInput, upperInput];
 
     //recreate color scale
     var colorScale = createColorScale(inputArray);
 
     //recolor enumeration units
     var counties = d3.selectAll(".counties")
         .transition()
         .duration(1000)
         .style("fill", function (d) {
            if (view == 'National') {
                return colorScale(d.properties[expressed]);
            } else {
                var statNum = abbrNum.get(view);
                if (d.properties['STATE_NUM'] == statNum ) {
                    return colorScale(d.properties[expressed]); 
                } else {
                    return '#F8F0C6';
                }
            }
     });
 
    //restyle slippy map
    slippyLayer.eachLayer(function(layer) {
        console.log('updating slippy view...');
        var expressedValue = layer.feature.properties[expressed];
        if (view == 'National') {
           layer.setStyle(styleSlippyLayer(expressedValue, colorScale));
        } else {
           var statNum = abbrNum.get(view);
    
           if (layer.feature.properties['STATE_NUM'] == statNum ) {
            
                layer.setStyle(styleSlippyLayer(expressedValue, colorScale));
           } else {
               layer.setStyle(styleGreySlippyLayer);
           }
        }
     });
};

function updateView(value, county_geo){
    console.log("updating view..." + value);

    d3.selectAll("#projection-container > *")
    .remove();

    //redraw projected inset map
    var width = 420;
    var height = 250;

    var lowerInput = document.getElementById('lower-input').value;;
    var upperInput = document.getElementById('upper-input').value;
    var inputArray = [lowerInput, upperInput];

    var coords = stateCenters.coordinates.find(({ view }) => view === value);
    console.log(coords);

    //recreate color scale
    var colorScale = createColorScale(inputArray);
    var scale = coords.scale;
    var centerLat = coords.lat;
    var centerLong = coords.long;
    var zoom = coords.zoom;
    
    var projMap = d3.select('#projection-container')
        .append('svg')
        .attr('class', 'projection-map')
        .attr('width', width)
        .attr('height', height);
    
    
    var projection;
    
    if (value == 'National') {
        projection = d3.geoAlbersUsa()
            .scale(scale) //set here when moving between state (2000) and nation (500)
            .translate([width / 2, height / 2]);
    } else {
        console.log("using mercator projection...")
        projection = d3.geoMercator()
            .scale(scale) 
            .center([centerLong,centerLat])
             .translate([width / 2, height / 2]);
    }
    
    var path = d3.geoPath()
        .projection(projection); 

    drawCounties(county_geo, projMap, path, colorScale, value); 
    
    map.flyTo([centerLat,centerLong],zoom);

    slippyLayer.eachLayer(function(layer) {
        console.log('slippy layer restyle in view update')
        var expressedValue = layer.feature.properties[expressed];
        if (value == 'National') {
           layer.setStyle(styleSlippyLayer(expressedValue, colorScale));
        } else {
           var statNum = abbrNum.get(value);
            console.log(statNum);
            console.log(layer.feature.properties['STATE_NUM']);
           if (layer.feature.properties['STATE_NUM'] == statNum ) {
                console.log('coloring state in view')
                layer.setStyle(styleSlippyLayer(expressedValue, colorScale));
           } else {
                console.log('greying out state outside view')
                layer.setStyle(styleGreySlippyLayer());
           }
        }
     });
};

function updateRentBounds() {
    console.log("updating bounds...");
    
    //get update range
    var lowerInput = document.getElementById('lower-input').value;;
    var upperInput = document.getElementById('upper-input').value;
    var inputArray = [lowerInput, upperInput];

    var view = document.getElementById('select-view-dropdown').value;
    if (view == 'Select...') {
        view = 'National'
    };

    //recreate color scale
    var colorScale = createColorScale(inputArray);

    //recolor enumeration units
    var counties = d3.selectAll(".counties")
        .transition()
        .duration(1000)
        .style("fill", function (d) {
            if (view == 'National') {
                return colorScale(d.properties[expressed]);
            } else {
                var statNum = abbrNum.get(view);
                if (d.properties['STATE'] == statNum ) {
                    return colorScale(d.properties[expressed]); 
                } else {
                    return '#F8F0C6';
                }
            }
        });
    

    //restyle slippy map
    slippyLayer.eachLayer(function(layer) {
        var expressedValue = layer.feature.properties[expressed];
        console.log("restyling slippy in rent update...")
        if (view == 'National') {
           layer.setStyle(styleSlippyLayer(expressedValue, colorScale));
        } else {
           var statNum = abbrNum.get(view);
            console.log(layer.feature.properties)
            console.log(statNum)
           if (layer.feature.properties['STATE'] == statNum ) {
                layer.setStyle(styleSlippyLayer(expressedValue, colorScale));
           } else {
               layer.setStyle(styleGreySlippyLayer());
           }
        }
     });
};

function highlight(props, view, colorScale){
    //change stroke
    var selected = d3.selectAll("." + props.NAME + props.STATE_NUM)
        .style("stroke", function() {
            if (view == "National") {
                return "orange";
            } else {
                if (props.STATE_NUM == abbrNum.get(view)){
                    return "orange"
                } else {
                    return "#F8F0C6"
                }
            }
        })
        .style("stroke-width", function() {
            if (view == "National") {
                return "5";
            } else {
                if (props.STATE_NUM == abbrNum.get(view)){
                    return "5"
                } else {
                    return "0"
                }
            }
        })

    setLabel(props, colorScale);
};

function dehighlight(props){
    var selected = d3.selectAll("." + props.NAME + props.STATE_NUM)
        .style("stroke", "#F8F0C6")
        .style("stroke-width", ".25");

    d3.select(".infolabel")
        .remove();
};

//function to create dynamic label
function setLabel(props, colorScale){
    console.log("creating labels...")

    var color = colorScale(props[expressed]);

    //label content
    var labelAttribute ='<h1>'
    + props.NAME +
       '</h1>' +'<h1 style="color:' + color + '";>$'
       + props[expressed] +
        "</h1>";

    //create info label div
    var infolabel = d3.select("body")
        .append("div")
        .attr("class", "infolabel")
        .attr("id", props.NAME + "_label")
        .html(labelAttribute);

    var stateName = infolabel.append("div")
        .attr("class", "labelname")
};  

function moveLabel(){
    //get width of label
    var labelWidth = d3.select(".infolabel")
        .node()
        .getBoundingClientRect()
        .width;

    //use coordinates of mousemove event to set label coordinates
    var x1 = event.clientX + 10,
        y1 = event.clientY - 75,
        x2 = event.clientX - labelWidth - 10,
        y2 = event.clientY + 25;

    //horizontal label coordinate, testing for overflow
    var x = event.clientX > window.innerWidth - labelWidth - 20 ? x2 : x1; 
    //vertical label coordinate, testing for overflow
    var y = event.clientY < 75 ? y2 : y1; 

    d3.select(".infolabel")
        .style("left", x + "px")
        .style("top", y + "px");
};

function panTo(geo_feature){
    var polygon = L.polygon(geo_feature.geometry.coordinates)
    var bounds = polygon.getBounds();
    var correctedNECorner = L.latLng([bounds._northEast.lng, bounds._northEast.lat]);
    var correctedSWCorner = L.latLng([bounds._southWest.lng,bounds._southWest.lat]);
    var correctedBounds = L.latLngBounds(correctedNECorner,correctedSWCorner)
    map.fitBounds(correctedBounds);

     //restyle slippy map
     slippyLayer.eachLayer(function(layer) {
        var county_ID = geo_feature.properties.GEO_ID;
        var layer_ID = layer.feature.properties.GEO_ID;
        if (layer_ID == county_ID) {
            layer.setStyle({
                weight: 5
            })
        }
     });


};

document.addEventListener('DOMContentLoaded', loadContainer);