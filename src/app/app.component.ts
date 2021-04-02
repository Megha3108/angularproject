import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { eventTarget } from '@amcharts/amcharts4/.internal/core/utils/DOM';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //private chart: am4charts.XYChart;
  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
title:any
event:any
selectedCountry:string='';
CountryCapital:string='';
CountryCurrency:string='';
imageUrl:string='';
 

 
 
   
selectCountry(event){
  //this.selectedCountry=event.target.value;
 console.log(this.selectedCountry);
  switch(this.selectedCountry){
    case "India":
      this.CountryCapital="New Delhi";
      this.CountryCurrency="Indian Rupee"; 
      this.imageUrl="./assets/indian flag.png";
       
            break;
      case "Sweden":
        this.CountryCapital="Stockholm";
    this.CountryCurrency="Swedish Krona"; 
    this.imageUrl="./assets/sweden flag.png";
    break;
    case "United States" :
      this.CountryCapital="Washington, D.C.";
      this.CountryCurrency="United States Dollar";
      this.imageUrl="./assets/usa flag.png";
      break;
      case "Canada":
        this.CountryCapital="Ottawa";
    this.CountryCurrency="Canadian Dollar";
    this.imageUrl="./assets/canada flag.png";
    break;
    case  "France":
      this.CountryCapital="Paris";
    this.CountryCurrency="Euro, CFP franc";
    this.imageUrl="./assets/france.png";
    break;
    case "Italy":
      this.CountryCapital="Rome";
      this.CountryCurrency="Euro";
      this.imageUrl="./assets/italy.png";
      break;
      case "Switzerland":
        this.CountryCapital="Bern";
        this.CountryCurrency="Franc";
        this.imageUrl="./assets/switzerland.png";
        break;
        case  "Russia":
          this.CountryCapital="Moscow";
          this.CountryCurrency="Russian ruble";
          this.imageUrl="./assets/russian flag.png";
          break; 
          case "Australia":
            this.CountryCapital="Canberra";
            this.CountryCurrency="Australian dollar";
            this.imageUrl="./assets/australia.png";
            break;
            case "China":
              this.CountryCapital="Beijing";
              this.CountryCurrency="Renminbi";
              this.imageUrl="./assets/china.png";
              break;
                          
  }
   // Chart code goes in here
   this.browserOnly(() => {
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    
    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Exclude Antartica
    polygonSeries.exclude = ["AQ"];
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    chart.exporting.menu = new am4core.ExportMenu();
    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.polygon.fillOpacity = 0.6;
    
    let groupData=[
      
      {
        "name":"highlighted countries",
        "color":"#FECD17",
      "data":[
        {
     
      "title":"India",
      "id":"IN",

    }
      ]},
  {
    "color":"blue",
    data:[
      {
    "title":"Sweden",
    "id":"SE"
  }]},{
    
    "color":"green",
    data:[
      {
    "title":"Canada",
    "id":"CA"
  }]},{
    
    "color":"red",
    data:[
      {
    "title":"United States",
    "id":"US"
  }]},{
    
    "color":"grey",
    data:[
      {
    "title":"Australia",
    "id":"AU"
  }]},{
    "color":"purple",
    data:[
      {
    "title":"Russia",
    "id":"RU"
  }]},
{
  
  "color":"black",
  data:[
    {
  "title":"Switzerland",
  "id":"CH"
}]},{
  
  "color":"cyan",
  data:[
    {
  "title":"China",
  "id":"CN"
}]},{
  
  "color":"pink",
  data:[
    {
  "title":"France",
  "id":"FR"
}]},{
  
  "color":"#363E48",
  data:[
    {
  "title":"Italy",
  "id":"IT"
}]
}
      ];
   
      let includedCountries = []; 
      switch(this.selectedCountry){
        case "India":
          includedCountries.push("IN");
          am4core.useTheme(am4themes_animated);
          break;
          case "Sweden":
            includedCountries.push("SE");  
            break;
            case "Canada":
              includedCountries.push("CA"); 
              break;
              case "United States":
                includedCountries.push("US"); 
              break; 
              case "Australia":
                includedCountries.push("AU"); 
              break; 
              case "Russia":
                includedCountries.push("RU"); 
              break; 
              case "Switzerland":
                includedCountries.push("CH"); 
              break; 
              case "China":
                includedCountries.push("CN"); 
              break; 
              case "Italy":
                includedCountries.push("IT"); 
              break; 
              case "France":
                includedCountries.push("FR"); 
              break; 
      }
   
       
      let excludedCountries = [];
 
    let series = chart.series.push(new am4maps.MapPolygonSeries());
    //series.name = group.name;
    series.useGeodata = true;
     
     
      
      excludedCountries.push("AQ");
    
    series.include = includedCountries;
  
    series.fill = am4core.color("red") ;
  
    // By creating a hover state and setting setStateOnChildren to true, when we
    // hover over the series itself, it will trigger the hover SpriteState of all
    // its countries (provided those countries have a hover SpriteState, too!).
   
    // Country shape properties & behaviors
    let mapPolygonTemplate = series.mapPolygons.template;
    // Instead of our custom title, we could also use {name} which comes from geodata  
   mapPolygonTemplate.fill = am4core.color("#FECC00") ;
    mapPolygonTemplate.fillOpacity = 0.8;
    mapPolygonTemplate.nonScalingStroke = true;
    mapPolygonTemplate.tooltipPosition = "fixed"
    event.target.series.chart.zoomToMapObject(this.selectedCountry);
    chart.zoomControl = new am4maps.ZoomControl();
  
    
  
    // States  
    let countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
    let countryPolygon = countrySeries.mapPolygons.template;
    countrySeries.setStateOnChildren = true;
    countrySeries.calculateVisualCenter = true;
  
    countryPolygon.events.on("over", function(event) {
      countrySeries.mapPolygons.each(function(mapPolygon) {
        mapPolygon.isHover = true;
      })
      event.target.isHover = false;
      event.target.isHover = true;
    })
   
    
  
    countryPolygon.events.on("out", function(event) {
      countrySeries.mapPolygons.each(function(mapPolygon) {
        mapPolygon.isHover = false;
      })
    })
    let hoverState = countryPolygon.states.create("hover");
    hoverState.properties.fill = chart.colors.getIndex(9);
     
  
    // Tooltip
    countryPolygon.tooltipText = "india"; // enables tooltip
    // series.tooltip.getFillFromObject = false; // prevents default colorization, which would make all tooltips red on hover
    // series.tooltip.background.fill = am4core.color(group.color);
  
    // MapPolygonSeries will mutate the data assigned to it, 
    // we make and provide a copy of the original data array to leave it untouched.
    // (This method of copying works only for simple objects, e.g. it will not work
    //  as predictably for deep copying custom Classes.)
   //series.data = JSON.parse(JSON.stringify(includedCountries));
   
  
 
  
  // The rest of the world.
  let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
  let worldSeriesName = "world";
  //worldSeries.name = worldSeriesName;
  worldSeries.useGeodata = true;
  worldSeries.exclude = excludedCountries;
  worldSeries.fillOpacity = 0.8;
  worldSeries.hiddenInLegend = true;
  worldSeries.mapPolygons.template.nonScalingStroke = true;
  let worldPolygon = worldSeries.mapPolygons.template;
   
});
    


 

 
  
}

}


 

  // Run the function only in the browser