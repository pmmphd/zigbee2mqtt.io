"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37157],{294588:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-3f79b50e","path":"/devices/TS0601_temperature_humidity_sensor_2.html","title":"TuYa TS0601_temperature_humidity_sensor_2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_temperature_humidity_sensor_2 control via MQTT","description":"Integrate your TuYa TS0601_temperature_humidity_sensor_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-01T08:16:21.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Battery state (enum)","slug":"battery-state-enum","link":"#battery-state-enum","children":[]},{"level":3,"title":"Temperature unit (enum)","slug":"temperature-unit-enum","link":"#temperature-unit-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1699558504000},"filePathRelative":"devices/TS0601_temperature_humidity_sensor_2.md"}')},130969:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var a=i(166252);const r=(0,a._)("h1",{id:"tuya-ts0601-temperature-humidity-sensor-2",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#tuya-ts0601-temperature-humidity-sensor-2","aria-hidden":"true"},"#"),(0,a.Uk)(" TuYa TS0601_temperature_humidity_sensor_2")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),o=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"TS0601_temperature_humidity_sensor_2")],-1),u=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Temperature and humidity sensor")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"temperature, humidity, battery_state, temperature_unit, linkquality")],-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_temperature_humidity_sensor_2.jpg",alt:"TuYa TS0601_temperature_humidity_sensor_2"})])],-1),c=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),h=(0,a._)("h3",{id:"pairing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,a.Uk)(" Pairing")],-1),m=(0,a._)("p",null,"Press and hold the pairing button on top for 5 seconds. When the signal icon flashes fast, release the button. It will search 20 seconds for network. The signal icon will stay once connected to indicate successful connection",-1),p=(0,a._)("p",null,"Pressing more than 10 secons cancels the pairing.",-1),_=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),f=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-state-enum" tabindex="-1"><a class="header-anchor" href="#battery-state-enum" aria-hidden="true">#</a> Battery state (enum)</h3><p>State of the battery. Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="temperature-unit-enum" tabindex="-1"><a class="header-anchor" href="#temperature-unit-enum" aria-hidden="true">#</a> Temperature unit (enum)</h3><p>Temperature unit. Value can be found in the published state on the <code>temperature_unit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_unit&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),b={},y=(0,i(983744).Z)(b,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[n,(0,a._)("tbody",null,[o,(0,a._)("tr",null,[u,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=TuYa"},{default:(0,a.w5)((()=>[(0,a.Uk)("TuYa")])),_:1})])]),d,s,l])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,h,m,p,(0,a.kq)(" Notes END: Do not edit below this line "),_,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),f])}]])}}]);