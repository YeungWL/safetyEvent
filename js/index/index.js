(function ($) {
  $(document).ready(function (){
      hechar();
  });

function hechar(){
  index_echar_data();
  usability_echar_data();
  // 窗口自适应
  window.onresize = function(){
      for(var i = 0; i < mycharts.length; i++){
          mycharts[i].resize();
      }
  };
}

var mycharts = [];    
// 指标异常网站数量 start
function index_echar_data(){
  $.ajax({
      type: 'get',
      url: './js/data/gjtj_echar.json',//请求数据的地址
      dataType: "json",        //返回数据形式为json
      success: function (data) {
          if(data!=null){
            index_option.xAxis[0].data=data.xAxis;
            index_option.series[0].data=data.seriesList[0].dataNumber;
            index_option.series[1].data=data.seriesList[1].dataNumber;
            index_option.series[2].data=data.seriesList[2].dataNumber;
            index_option.series[3].data=data.seriesList[3].dataNumber;
            index_echar.setOption(index_option);
          }
      },
      error: function (errorMsg) {
          //请求失败时执行该函数
          console.log("图表请求数据失败!");
      }
  });
}
var index_echar = echarts.init(document.getElementById('index-echar'),'macarons');
index_option = {
  tooltip : {
      trigger: 'axis',
  },
  grid: {
    x:10,
    y:15,
    x2:20,
    y2:30,
    containLabel: true,
    borderWidth:0
  },
  legend: {
    data:['DNS监控','篡改','挂马','敏感词'],
    textStyle:{
        color: '#fff'
    },
    align:'right',
    right:10
  },
  xAxis : [
      {
        splitLine:{show: false},
        splitArea : {show : false},//保留网格区域
          type : 'category',
          boundaryGap: false,
          data : [],
          axisLabel:{
            textStyle: {
              color: '#fff'
            }
          },
          axisLine:{
            lineStyle:{
                color:'#fff'
            }
          }
      },
  ],
  yAxis :{
    splitLine:{show: false},
    splitArea : {show : false},//保留网格区域
      type : 'value',
      axisLabel:{
        textStyle: {
          color: '#fff'
        }
      },
      axisLine:{
        lineStyle:{
            color:'#fff'
        }
      } 
    },
  series : [
      {
          name:'DNS监控',
          type:'line',
          itemStyle : {  
            normal : {  
                lineStyle:{  
                    color:'#CF097B'  
                }  
            }  
          },  
          data:[]
      },
      {
          name:'篡改',
          type:'line',
          itemStyle : {  
            normal : {  
                lineStyle:{  
                    color:'#F8C360'  
                }  
            }  
          },
          data:[]
      },
      {
        name:'挂马',
        type:'line',
        itemStyle : {  
          normal : {  
              lineStyle:{  
                  color:'#00B7DC'  
              }  
          }  
        },
        data:[]
      },
      {
        name:'敏感词',
        type:'line',
        itemStyle : {  
          normal : {  
              lineStyle:{  
                  color:'#007BF5'  
              }  
          }  
        },
        data:[]
      }
  ]
}
mycharts.push(index_echar);
// 指标异常网站数量 end

// 可用性告警数量统计 
function usability_echar_data(){
  $.ajax({
      type: 'get',
      url: './js/data/gjtj_echar.json',//请求数据的地址
      dataType: "json",        //返回数据形式为json
      success: function (data) {
          if(data!=null){
            // usability_option.xAxis[0].data=data.xAxis;
            // usability_option.series[0].data=data.seriesList[0].dataNumber;
            usability_echar.setOption(usability_option);
          }
      },
      error: function (errorMsg) {
          //请求失败时执行该函数
          console.log("图表请求数据失败!");
      }
  });
}
var usability_echar = echarts.init(document.getElementById('usability-echar'),'macarons');
var usability_option = {
  color: ['#3398DB'],
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    x:40,
    y:15,
    x2:20,
    y2:30,
    // containLabel: true,
    borderWidth:0
  },
  xAxis : [
      {
        splitLine:{show: false},
        splitArea : {show : false},//保留网格区域
          type : 'category',
          data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel:{
            textStyle: {
              color: '#f7f7f7'
            }
          },
          axisLine:{
            lineStyle:{
                color:'#f7f7f7'
            }
          }
      },
  ],
  yAxis :[
    {
      splitLine:{show: false},
      splitArea : {show : false},//保留网格区域
      type : 'value',
      axisLabel:{
        textStyle: {
          color: '#f7f7f7'
        }
      },
      axisLine:{
        lineStyle:{
            color:'#f7f7f7'
        }
      } 
    }
  ],
    series : [
        {
        name:'直接访问',
        type:'bar',
        data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
}
mycharts.push(usability_echar);
// 可用性告警数量统计 

// 地图 S
// var mapChart = echarts.init(document.getElementById('map-echar'));
// var option = {
//   tooltip: {
//       // show: false //不显示提示标签
//       formatter: '{b}', //提示标签格式
//       backgroundColor:"#333333",//提示标签背景颜色
//       textStyle:{color:"#fff"} //提示标签字体颜色
//   },
//   series: [{
//       type: 'map',
//     // type:'series',
//       mapType: 'china',
//       label: {
//           normal: {
//               show: true,//显示省份标签
//               textStyle:{color:"#c71585"}//省份标签字体颜色
//           },    
//           emphasis: {//对应的鼠标悬浮效果
//               show: true,
//               textStyle:{color:"#800080"}
//           } 
//       },
//       itemStyle: {
//           normal: {
//               borderWidth: .5,//区域边框宽度
//               borderColor: '#009fe8',//区域边框颜色
//               areaStyle:{color:"#090E24"},//区域颜色
//           },
//           emphasis: {
//               borderWidth: .5,
//               borderColor: '#4b0082',
//               areaColor:"#090E24",
//           }
//       },
//       data:[
//         {name: '海门', value: [121.15, 31.89, 90]},
//         {name: '鄂尔多斯', value: [109.781327, 39.608266, 120]},
//         {name: '招远', value: [120.38, 37.35, 142]},
//         {name: '舟山', value: [122.207216, 29.985295, 123]}
//       ]
//   }],


// };

// mapChart.setOption(option);
// mapChart.on('mouseover', function (params) {
//   var dataIndex = params.dataIndex;
// });

// mycharts.push(usability_echar);
// 地图 E


})(jQuery);