//Contour noir

var arrayCol1 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 93, 104, 105, 172, 185, 186, 266, 267, 251, 347, 427, 507, 587, 667, 92, 171, 250, 330, 410, 490, 570, 649, 650, 651, 652, 728, 808, 888, 968, 1049, 1050, 1051, 972, 892, 812, 813, 893, 973, 733, 734, 735, 815, 656, 657, 658, 659, 660, 661, 896, 977, 1058, 1059, 1060, 1061, 982, 902, 822, 742, 743, 744, 745, 746, 747, 748, 818, 819, 898, 899, 730, 810, 890, 970, 1130, 1210, 1290, 1370, 1373, 1374, 1375, 1376, 1377, 1450, 1530, 1053, 1133, 1134, 1135, 1056, 1136, 828, 908, 988, 1067, 1068, 1146, 1147, 1226, 1306, 1385, 1386, 1464, 1465, 1543, 1544, 1622, 1623, 1624, 1701, 1702, 1781, 1780, 1779, 1778, 1777, 1776, 1775, 1774, 1773, 1692, 1611, 1530, 1450, 1370, 1290, 1210, 1130, 1691, 1771, 1851, 1931, 1932, 2011, 2010, 2090, 2170, 2250, 2330, 2410, 2490, 2570, 2650, 2730, 2810, 2890, 2970, 3050, 3130, 3131, 3132, 3052, 2972, 2892, 2893, 2812, 2732, 2652, 2572, 2492, 2412, 2332, 2252, 2811, 2974, 2576, 2496, 2416, 2336, 2256, 2176, 2096, 2015, 2016, 2017, 1934, 1935, 1937, 1938, 1853, 1854, 1858, 1704, 1705, 1785, 1863, 1864, 1865, 1944, 1945, 2025, 2026, 2106, 2186, 2266, 2346, 2426, 2506, 2586, 2666, 2746, 2826, 2825, 2824, 2823, 2743, 2663, 2583, 2503, 2423, 2343, 2902, 2981, 2903, 2983, 3063, 3143, 3144, 3145, 3065, 3066, 2986, 2906, 2902, 3212, 3292, 3372, 3451, 3530, 3529, 3608, 3688, 3768, 3769, 3770, 3771, 3772, 3773, 3774, 3775, 3695, 3615, 3535, 3451, 3452, 3453, 3454, 3455, 3456, 3457, 3458, 3459, 3460, 3461, 3462, 3463, 3543, 3544, 3545, 3626, 3706, 3786, 3785, 3784, 3783, 3782, 3781, 3780, 3779, 3778, 3777, 3697, 3617, 3537, 3383, 3303, 3223, 3374, 3375, 3376, 3377, 3295, 3296, 3215];
var col1 = "rgba(0, 0, 0, 0.83)";

//Ombrages

var arrayCol2 = [94, 95, 96, 173, 174, 252, 253, 331, 332, 340, 411, 418, 419, 421, 491, 492, 571, 572, 573, 574, 577, 653, 654, 575, 655, 576, 495, 496, 497, 498, 499, 500, 501, 420, 731, 732, 736, 737, 738, 739, 811, 891, 897, 816, 817, 971, 1052, 1132, 1212, 1131, 1211, 1219, 1291, 1371, 1451, 1531, 1057, 1137, 1217, 1218, 1138, 1299, 1134, 1054, 974, 1384, 1304, 1305, 1453, 1533, 1536, 1537, 1457, 1225, 1145, 1065, 1066, 986, 987, 907, 3051, 2971, 2891, 2904, 2984, 3064];
var col2 = "#d28339";

//Bouc

 var arrayCol3 = [1293, 1294, 1295, 1296, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1452, 1454, 1455, 1456, 1532, 1612, 1458, 1538, 1618, 1698, 1535, 1615, 1213, 1214, 1215, 1216, 1613, 1614, 1616, 1617, 1693, 1694, 1695, 1696, 1697, 1292, 1297, 1298];
 var col3 = "#613115";

//Couleur peau

 var arrayCol4 = [97, 98, 99, 100, 101, 102, 103, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 333, 334, 335, 336, 337, 338, 339, 341, 342, 343, 344, 345, 346, 412, 413, 414, 415, 416, 417, 422, 423, 424, 425, 426, 493, 494, 502, 503, 504, 505, 506, 578, 579, 580, 581, 582, 583, 584, 585, 586, 662, 663, 664, 665, 666, 1534, 814, 823, 824, 825, 826, 827, 903, 904, 905, 906, 983, 984, 985, 894, 895, 975, 976, 1055, 1062, 1063, 1064, 1139, 1140, 1141, 1142, 1143, 1144, 1219, 1220, 1221, 1222, 1223, 1224, 1300, 1301, 1302, 1303, 1379, 1380, 1381, 1382, 1383, 1459, 1460, 1461, 1462, 1463, 1539, 1540, 1541, 1542, 1619, 1620, 1621, 1699, 1700, 2905, 2985];
 var col4 = "#FFE5A9"

//Ombrage 2

 var arrayCol5 = [740, 741, 820, 821, 900, 901, 978, 979, 980, 981];
 var col5 = "#FFBD83"

//Ombrages combinaison

var arrayCol6 = [1772, 1852, 1933, 2012, 2013, 2014, 2091, 2092, 2093, 2094, 2095, 2171, 2172, 2173, 2174, 2175, 2251, 2253, 2254, 2331, 2333, 2334, 2411, 2413, 2491, 2493, 2571, 2651, 2653, 2573, 2731, 2097, 2177, 2257, 2337, 2417, 2497, 2018, 2098, 2178, 2258, 2338, 1859, 1939, 2019, 2099, 2179, 2259, 1860, 1940, 2020, 2100, 2180, 1861, 1941, 2021, 2101, 1782, 1862, 1942, 1943, 2022, 1703, 1783, 1784];
var col6 = "#FDD601";

//Couleur cou

var arrayCol7 = [1855, 1856, 1857, 1936];
var col7 = "#F7C088";

//Couleur combinaison

var arrayCol8 = [2255, 2335, 2414, 2415, 2494, 2495, 2574, 2575, 2654, 2655, 2733, 2734, 2735, 2736, 2813, 2814, 2815, 2894, 2895, 2973, 2975, 3053, 3054, 3055, 3133, 3134, 3135, 3213, 3214, 3293, 3294, 3373, 2656, 2816, 2896, 2976, 3056, 3136, 3216, 2577, 2657, 2737, 2817, 2897, 2977, 3057, 3137, 3217, 3297, 2418, 2498, 2578, 2658, 2738, 2818, 2898, 2978, 3058, 3138, 3218, 3298, 3378, 2339, 2419, 2499, 2579, 2659, 2739, 2819, 2899, 2979, 3059, 3139, 3219, 3299, 3379, 2260, 2340, 2420, 2500, 2580, 2660, 2740, 2820, 2900, 2980, 3060, 3140, 3220, 3300, 3380, 2181, 2261, 2341, 2421, 2501, 2581, 2661, 2741, 2821, 2901, 3061, 3141, 3221, 3301, 3381, 2102, 2182, 2262, 2342, 2422, 2502, 2582, 2662, 2742, 2822, 2982, 3062, 3142, 3222, 3302, 3382, 2023, 2024, 2104, 2184, 2264, 2344, 2424, 2504, 2584, 2664, 2744, 2103, 2105, 2183, 2185, 2265, 2345, 2425, 2505, 2585, 2263, 2665, 2745];
var col8 = "#FEFE28";


//Couleur chaussures

var arrayCol9 = [3531, 3532, 3533, 3534, 3609, 3610, 3611, 3612, 3613, 3614, 3689, 3690, 3691, 3692, 3693, 3694, 3538, 3539, 3540, 3541, 3542, 3618, 3619, 3620, 3621, 3622, 3623, 3624, 3625, 3698, 3699, 3700, 3701, 3702, 3703, 3704, 3705];
var col9 = "#003C99";

function drawCanvas(varWidth, varHeight, canvas) {

var idCanvas = document.getElementById(canvas);
var ctx = idCanvas.getContext("2d");
var nbCel = (varWidth * varHeight) /100;
  for (i = 1; i <= nbCel; i++) {
    if (arrayCol1.indexOf(i) !== -1) {
        realDrawCanvas(varWidth, i, ctx, col1);
       }else if (arrayCol2.indexOf(i) !== -1) {
         realDrawCanvas(varWidth, i, ctx, col2);
       }else if (arrayCol3.indexOf(i) !== -1) {
         realDrawCanvas(varWidth, i, ctx, col3);
       }else if (arrayCol4.indexOf(i) !== -1) {
         realDrawCanvas(varWidth, i, ctx, col4);
       }else if (arrayCol5.indexOf(i) !== -1) {
         realDrawCanvas(varWidth, i, ctx, col5);
       }else if (arrayCol6.indexOf(i) !== -1) {
         realDrawCanvas(varWidth, i, ctx, col6);
       }else if (arrayCol7.indexOf(i) !== -1) {
         realDrawCanvas(varWidth, i, ctx, col7);
       }else if (arrayCol8.indexOf(i) !== -1) {
         realDrawCanvas(varWidth, i, ctx, col8);
       }else if (arrayCol9.indexOf(i) !== -1) {
         realDrawCanvas(varWidth, i, ctx, col9);

      }
    }
  }

  function realDrawCanvas(varWidth, i, ctx,colorpx) {
    var x = i % (varWidth /10) +1;
    var y = Math.floor(i / (varWidth / 10));
    ctx.fillStyle = colorpx;
    ctx.fillRect(x * 10, y * 10, 10, 10);
  }




// var c = document.getElementById("mon_canvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
//
// // ctx.lineWidth = 1;
// ctx.stroke();
// console.log(ctx);
//
// //cote gauche
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(41, 40, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(31, 49, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(22, 59, 10, 10);
//
// // 1 pixel
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(22, 69, 10, 10);
//
// // 2 pixel
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(22, 79, 10, 10);
//
// // 3 pixel
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(22, 89, 10, 10);
//
// // 4 pixel
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(22, 99, 10, 10);
//
// // 5 pixel
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(22, 109, 10, 10);
//
//
//
// //interieur cote gauche (haut de la tete)
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(32, 59, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(40, 50, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(50, 40, 10, 10);
//
// // cote droit
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(170, 39, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(180, 48, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(190, 57, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(190, 66, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(190, 120, 10, 10);
//
// //1 pixel
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(190, 76, 10, 10);
//
// //2 pixels
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(190, 86, 10, 10);
//
// //3 pixels
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(190, 96, 10, 10);
//
// //4 pixels
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(190, 106, 10, 10);
//
// //interieur cote droit
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(160, 39, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(170, 48, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(180, 57, 10, 10);
//
// //1ere ligne de pixels (haut de la tete)
//
// //1
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(50, 30, 10, 10);
//
// //2
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(0, 0, 0, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(60, 30, 10, 10);
//
// //3
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(0, 0, 0, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(70, 30, 10, 10);
//
// //4
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(0, 0, 0, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(80, 30, 10, 10);
//
// //5
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(0, 0, 0, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(90, 30, 10, 10);
//
// //6
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(0, 0, 0, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(100, 30, 10, 10);
//
// //7
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(110, 30, 10, 10);
//
// //8
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(120, 30, 10, 10);
//
// //9
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(130, 30, 10, 10);
//
// //10
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(140, 30, 10, 10);
//
// //11
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(150, 30, 10, 10);
//
// //12
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(160, 30, 10, 10);
//
// // lunettes (cote droit)
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(22, 119, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(190, 116, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// // 1
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(12, 119, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// // 2
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(2, 128, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// // 3
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(2, 138, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(2, 148, 10, 10);
//
// // 4
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(2, 158, 10, 10);
//
// //5
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(32, 119, 10, 10);
//
// //6
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(42, 119, 10, 10);
//
// // lunettes (cote gauche)
//
// // 1
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(82, 120, 10, 10);
//
// // 2
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(92, 120, 10, 10);
//
// // 3
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(102, 120, 10, 10);
//
//
// // 4
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(112, 120, 10, 10);
//
// // 5
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(122, 120, 10, 10);
//
// // 6
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(132, 120, 10, 10);
//
// // 7
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(142, 130, 10, 10);
//
// // 8
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(142, 140, 10, 10);
//
// // 9
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(142, 150, 10, 10);
//
// // 10
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(142, 160, 10, 10);
//
// // 11
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(133, 170, 10, 10);
//
//
// // 12
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(123, 170, 10, 10);
//
// // 13
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(113, 170, 10, 10);
//
// // 14
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(103, 170, 10, 10);
//
// // 15
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(93, 161, 10, 10);
//
// // 16
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(84, 151, 10, 10);
//
// // 17
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(74, 142, 10, 10);
//
// // 18
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(74, 135, 10, 10);
//
// // lunettes (branche)
//
// // 1
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(152, 130, 10, 10);
//
// // 2
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(162, 130, 10, 10);
//
// // 3
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(172, 130, 10, 10);
//
// // 4
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(182, 130, 10, 10);
//
// // 5
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(192, 130, 10, 10);
//
// // oreille
//
// // 1
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(202, 130, 10, 10);
//
// // 2
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(202, 140, 10, 10);
//
// // 3
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(202, 150, 10, 10);
//
// // 4
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(202, 160, 10, 10);
//
// // 5
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(202, 170, 10, 10);
//
// // 6
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(192, 170, 10, 10);
//
// // machoire
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(192, 180, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(182, 180, 10, 10);
//
// // 1
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(182, 190, 10, 10);
//
// // 2
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(182, 200, 10, 10);
//
// // 3
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(182, 210, 10, 10);
//
// //////
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(172, 210, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(172, 220, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(162, 220, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(162, 230, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(162, 239, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(152, 239, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(152, 229, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(142, 239, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(142, 248, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(132, 248, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(132, 258, 10, 10);
//
//
// // lunettes (milieu)
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(52, 128, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(62, 128, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(72, 128, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(74, 128, 10, 10);
//
// // lunettes (bas)
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(11, 168, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(21, 168, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(31, 168, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(41, 168, 10, 10);
//
// // oeil droit
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(41, 158, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(41, 148, 10, 10);
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(41, 138, 10, 10);
//
// // nez
//
// // 1
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(51, 138, 10, 10);
//
// // 2
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(51, 148, 10, 10);
//
// // 3
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(51, 158, 10, 10);
//
// // 4
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(51, 168, 10, 10);
//
// // 5
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(51, 178, 10, 10);
//
// // 6
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(51, 188, 10, 10);
//
// // nez (bas)
//
// // 1
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(61, 188, 10, 10);
//
// // 2
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(71, 188, 10, 10);
//
// // 3
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// ctx.fillRect(81, 188, 10, 10);
//
// // 4
//
// ctx.rect(100,110,10,10,Math.PI*2);
// ctx.strokeStyle = "rgba(254, 254, 254, 0.78)";
//
// ctx.fillStyle = "#2a2a2a";
// // ctx.fillRect(81, 178, 10, 10);
