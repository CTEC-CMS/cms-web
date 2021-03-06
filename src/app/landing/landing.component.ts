import { Component, OnInit } from '@angular/core';
declare let $ : any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
    var flotSampleData4 = [
      [0,53.08330533680049],
      [1,50.33339517545416],
      [2,49.4029746664779],
      [3,47.791939081203566],
      [4,49.09471219192674],
      [5,50.66529743518582],
      [6,48.749718825997206],
      [7,48.84333276982059],
      [8,53.51394720398375],
      [9,52.93467940905747],
      [10,49.083909652316756],
      [11,50.27480737843102],
      [12,48.37957308101624],
      [13,44.84022012471776],
      [14,40.71830916489318],
      [15,41.24962375997834],
      [16,45.63889630450356],
      [17,44.66117259629492],
      [18,41.393918522372914],
      [19,38.20495807999945],
      [20,39.68970488580452],
      [21,41.02366924388095],
      [22,39.41137193753915],
      [23,35.66049049363585],
      [24,38.5316402746093],
      [25,38.536952802123125],
      [26,40.69853423533536],
      [27,38.79970643855877],
      [28,42.98845795943349],
      [29,46.360136088412915],
      [30,43.5528691841886],
      [31,40.65605934650181],
      [32,36.5040222131244],
      [33,31.79517009935011],
      [34,28.913911507798105],
      [35,29.681580006957674],
      [36,29.57017024157237],
      [37,33.13695968240512],
      [38,37.084637076369454],
      [39,35.86922272605444],
      [40,37.60007436604805],
      [41,39.6599902960551],
      [42,39.01855935146662],
      [43,34.101066517369006],
      [44,37.486228204869676],
      [45,39.29733687111992],
      [46,38.46411897069526],
      [47,37.71927995665536],
      [48,40.15208911247334],
      [49,35.897096450476575],
      [50,31.505997358944384],
      [51,31.816999110802946],
      [52,30.50460962834996],
      [53,25.741310049337464],
      [54,28.23602445151448],
      [55,28.48317685385772],
      [56,30.001070495921475],
      [57,32.164958534602505],
      [58,32.99295659942683],
      [59,37.68193430054417],
      [60,35.24212764591677],
      [61,39.18772362995824],
      [62,41.376347845481895],
      [63,41.45950716612605],
      [64,43.78985456358012],
      [65,39.416694565047884],
      [66,39.32972776309515],
      [67,43.80480524720717],
      [68,42.434410137245514],
      [69,43.67300580223356],
      [70,38.79887604059381],
      [71,43.570128406921526],
      [72,41.81988828932836],
      [73,44.829528785933896],
      [74,46.19223595854988],
      [75,47.69550173883899],
      [76,49.010522215031536],
      [77,46.40480781018069],
      [78,51.28051836395483],
      [79,50.158430192052556],
      [80,53.60466613842059],
      [81,56.08734803007076],
      [82,52.72459300615355],
      [83,56.601951946760394],
      [84,60.26245067204903],
      [85,58.36945168202019],
      [86,56.59491823723127],
      [87,55.755294545253776],
      [88,54.74810139653445],
      [89,54.27203682664068],
      [90,58.659985887413185],
      [91,57.00658547275452],
      [92,60.52029839853601],
      [93,57.6015284629649],
      [94,56.48890586246457],
      [95,55.10455188969404],
      [96,54.357265081931686],
      [97,52.394359471010326],
      [98,54.52899302331695],
      [99,54.16762513026156],
      [100,51.95657669321307],
      [101,51.19677107897459],
      [102,46.35100350085707],
      [103,48.33623433000422],
      [104,45.84986413510889],
      [105,48.22054173701362],
      [106,43.30402458869659],
      [107,45.823705773087944],
      [108,43.48498341409474],
      [109,41.32116785138174],
      [110,40.99342590634263],
      [111,38.496913606221845],
      [112,40.10010461807938],
      [113,44.861885054292394],
      [114,44.03401133327108],
      [115,41.41251651321317],
      [116,37.800397369625514],
      [117,39.295001424962734],
      [118,35.24310363081255],
      [119,32.125154958611844],
      [120,35.68772234352005],
      [121,38.00169527592055],
      [122,37.960866448524754],
      [123,38.702527394097245],
      [124,37.457771477588224],
      [125,37.51129389195443],
      [126,33.108727543689724],
      [127,35.09710598798716],
      [128,33.11742126933996],
      [129,31.873922447406848],
      [130,29.18642792871095],
      [131,31.91579925678714],
      [132,34.370661166914054],
      [133,32.91433174216821],
      [134,33.17197835246117],
      [135,37.16446574836367],
      [136,32.60291809386715],
      [137,36.94627368938524],
      [138,35.9869296328639],
      [139,38.12898104938889],
      [140,42.55368007736426],
      [141,41.57493569939069],
      [142,45.54394197350075],
      [143,46.30674824728742],
      [144,45.73213644396193],
      [145,45.42768540578047],
      [146,42.52964420434585],
      [147,44.44398524408891],
      [148,39.74894644038498],
      [149,44.71669577260144]
    ];
    
    
    
    var flotSampleData6 = [
      [0,52.0372905861701],
      [1,51.6784633777384],
      [2,50.93706057748914],
      [3,55.04861395738878],
      [4,52.445845968822006],
      [5,50.93681261537495],
      [6,55.41621667661467],
      [7,57.10873028593814],
      [8,54.09853093352003],
      [9,57.63062912168092],
      [10,61.76480188676403],
      [11,59.58083036192488],
      [12,63.457788916796034],
      [13,62.954499198759066],
      [14,59.19255443449066],
      [15,71.107062594673295],
      [16,71.797400811178974],
      [17,74.60795847250468],
      [18,64.94400805384853],
      [19,61.50219489844255],
      [20,61.93683013860428],
      [21,42.12178115474478],
      [22,44.02455260206408],
      [23,41.58732990833391],
      [24,63.551262643229364],
      [25,65.22361572255349],
      [26,60.441963794914685],
      [27,64.64029619252607],
      [28,62.426770751912244],
      [29,65.57029913775051]
    ];
    
    var flotSampleData7 = [
      [0,49.94286358017402],
      [1,54.75195271853288],
      [2,59.622053296327735],
      [3,60.738689215257594],
      [4,56.70698194695498],
      [5,57.52045722160073],
      [6,55.4934878455616],
      [7,58.43501666521898],
      [8,57.525488680182036],
      [9,55.80777569057727],
      [10,53.682652257555645],
      [11,54.81436164727582],
      [12,55.59622041652305],
      [13,56.550206500228064],
      [14,58.12076521746503],
      [15,59.03652643269743],
      [16,62.50683301850617],
      [17,59.48044106699237],
      [18,60.22405802611539],
      [19,55.75619342134348],
      [20,54.27524732322225],
      [21,49.460602930912856],
      [22,47.34020893802209],
      [23,50.1570575505057],
      [24,49.823374599769124],
      [25,50.42642956481375],
      [26,53.119011480591055],
      [27,54.465212016350385],
      [28,51.37591924922336],
      [29,49.66602279516306]
    ];
    
    var flotSampleData8 = [
      [0,51.35337906430415],
      [1,55.09767736474683],
      [2,56.11713418071085],
      [3,56.62830445362504],
      [4,58.374859207924956],
      [5,62.842829855606894],
      [6,63.69291962857514],
      [7,60.69251163731542],
      [8,61.650299044110085],
      [9,64.06410201262507],
      [10,67.43880456193354],
      [11,70.2095435826324],
      [12,73.01907211149363],
      [13,75.305867265774],
      [14,73.15232973097093],
      [15,75.67663616265044],
      [16,77.50025675637558],
      [17,74.56982822506586],
      [18,78.22708826685283],
      [19,75.88418124127114],
      [20,78.96304160187246],
      [21,83.19746269424613],
      [22,81.99514960164132],
      [23,80.34748479228385],
      [24,83.01785617267964],
      [25,80.47961270294873],
      [26,81.43180744942623],
      [27,80.54908115981],
      [28,80.89790184638714],
      [29,82.57585847055765]
    ];
    
    var flotSampleData9 = [
      [0,51.99566242992652],
      [1,56.40988734156261],
      [2,52.712016949483605],
      [3,52.13903665420402],
      [4,55.38856697356215],
      [5,56.51241090203006],
      [6,54.13065859506406],
      [7,54.52096980767574],
      [8,58.778974107485055],
      [9,55.51439929034389],
      [10,56.957814217917],
      [11,57.61073578735697],
      [12,59.7297766750641],
      [13,61.93295319184848],
      [14,62.50241769531192],
      [15,60.542234578733925],
      [16,58.29300184711166],
      [17,55.342699297074184],
      [18,58.10368017734648],
      [19,55.992767202287844],
      [20,59.85513950723005],
      [21,55.06877119665919],
      [22,54.32937925983862],
      [23,55.85921051952968],
      [24,55.51272173544296],
      [25,53.28302387501565],
      [26,49.99125994698088],
      [27,45.20738945047653],
      [28,46.435525588283454],
      [29,41.869140235144116]
    ];
    
    var flotSampleData10 = [
      [0,56.30265026531465],
      [1,54.65369685879262],
      [2,59.159497004318396],
      [3,61.52890228654445],
      [4,65.42115864654912],
      [5,70.17659339534826],
      [6,73.96323073101196],
      [7,74.9799695221578],
      [8,73.44264143602075],
      [9,69.096593751918],
      [10,73.93254876657517],
      [11,69.04685379865136],
      [12,73.34743744019225],
      [13,77.32268965816827],
      [14,72.32758104850645],
      [15,75.74676439307586],
      [16,71.02133074957086],
      [17,69.1420714301864],
      [18,67.38421380482295],
      [19,68.25200534621919],
      [20,67.64452676952739],
      [21,66.86973130150578],
      [22,61.93648092979845],
      [23,58.61497756300247],
      [24,56.55146918091553],
      [25,53.029935488894246],
      [26,52.44600163135212],
      [27,57.20889655681769],
      [28,59.636191788043945],
      [29,63.85312806354426],
      [30,60.04386094475659],
      [31,62.2538125564533],
      [32,64.59204959205982],
      [33,67.48303315626455],
      [34,66.52279556782956],
      [35,67.91455924692552],
      [36,71.05638683697502],
      [37,66.72457618335497],
      [38,64.2368446398455],
      [39,62.57701362369215],
      [40,66.34915956039481],
      [41,65.92124496694505],
      [42,62.80711501850641],
      [43,66.7197967332439],
      [44,63.3010169282898],
      [45,66.65701148334526],
      [46,64.17648367224142],
      [47,65.59358408684454],
      [48,69.01887774539038],
      [49,65.5916290145015],
      [50,69.30622431045381],
      [51,65.36388366769279],
      [52,68.85971422470584],
      [53,73.43083746573741],
      [54,71.7164115189851],
      [55,71.36090147065387],
      [56,75.60606020386383],
      [57,77.09189207721045],
      [58,81.79401314743293],
      [59,79.0135714357103],
      [60,76.06480727464617],
      [61,74.7692576621101],
      [62,75.6074434905874],
      [63,76.0736128539269],
      [64,78.06361318915312],
      [65,81.74368470683947],
      [66,82.9328380240206],
      [67,87.85966921603924],
      [68,85.23106037681157],
      [69,82.11378075638285],
      [70,82.01651870800575],
      [71,77.0287988653718],
      [72,80.34970120412052],
      [73,84.61941727966564],
      [74,83.98199644857034],
      [75,88.56888111947441],
      [76,89.75548290328453],
      [77,88.80767166533053],
      [78,83.85630479076563],
      [79,87.83276509161898],
      [80,85.55774605623898],
      [81,85.70223088952179],
      [82,90.33890157972317],
      [83,92.69926264237287],
      [84,97.63201173326506],
      [85,80],
      [86,82.45304715092216],
      [87,81.64397094909111],
      [88,84.19735416169136],
      [89,85.71802570566479],
      [90,90.63845353334818],
      [91,91.50786669397307],
      [92,90.18513939708971],
      [93,89.11333767424885],
      [94,86.13169895547603],
      [95,83.71642685988863],
      [96,82.53308667208871],
      [97,87.03202111687101],
      [98,85.80275250512847],
      [99,87.50661490640158],
      [100,82.94568964820422],
      [101,87.9133760526002],
      [102,86.3911423200192],
      [103,83.79442454428464],
      [104,84.61901232577792],
      [105,80.55092396236854],
      [106,79.514769277758],
      [107,78.30133774514849],
      [108,76.12798140610029],
      [109,79.01711099389404],
      [110,74.76408790118617],
      [111,77.44087400934131],
      [112,78.260017083701],
      [113,80.86067605373901],
      [114,77.42886467363506],
      [115,77.78073925389896],
      [116,76.08468600523165],
      [117,75.58351138198233],
      [118,76.99163028653041],
      [119,76.28846074258988],
      [120,71.78398785201554],
      [121,75.60986394070363],
      [122,71.26195146607357],
      [123,73.47598268366161],
      [124,71.6907716935556],
      [125,72.73874358328845],
      [126,73.86356688134639],
      [127,73.7770525507534],
      [128,75.5682997869134],
      [129,73.1630845932067],
      [130,77.27828980131197],
      [131,76.32774748166499],
      [132,71.6304650335553],
      [133,76.001962543172],
      [134,71.2306864813009],
      [135,67.7809120535992],
      [136,69.93749142887862],
      [137,65.21786790574946],
      [138,61.86750668240158],
      [139,58.998337266110376],
      [140,59.53982536229391],
      [141,55.64390968002628],
      [142,57.45505304780762],
      [143,58.588511338448896],
      [144,60.938984927001556],
      [145,64.52543413478776],
      [146,61.744812501883445],
      [147,63.90888496784042],
      [148,68.83286359079715],
      [149,71.22144807517391]
    ];
    
    var flotSampleData11 = [
      [0,40.42460652446133],
      [1,39.746131861430484],
      [2,35.95109348595284],
      [3,33.295567798337025],
      [4,28.87960054374564],
      [5,28.498853797438535],
      [6,24.44598918395687],
      [7,20.218403695742982],
      [8,17.498233218421312],
      [9,16.54060961040485],
      [10,19.002383747980975],
      [11,16.471725580977914],
      [12,13.155182881964787],
      [13,18.077483369454345],
      [14,17.938434631237822],
      [15,18.92413124205944],
      [16,18.461208995002494],
      [17,19.661876313219913],
      [18,18.042303047352455],
      [19,17.785290125636354],
      [20,20.151980264909543],
      [21,18.924923650083358],
      [22,17.088923942341232],
      [23,17.11745721938192],
      [24,15.703502004647063],
      [25,15.078540825575075],
      [26,14.510809401000387],
      [27,15.226574724712297],
      [28,18.01709489679379],
      [29,19.770761552221565],
      [30,23.670209769802682],
      [31,27.985742905483164],
      [32,30.80634374024116],
      [33,28.56215635604935],
      [34,29.459971127621614],
      [35,29.506514532069936],
      [36,27.289754685028775],
      [37,24.365568424856836],
      [38,22.893664052525622],
      [39,26.57527073377395],
      [40,28.04483981176638],
      [41,27.77031588135324],
      [42,30.245343380918406],
      [43,26.57479109054868],
      [44,22.18111812493286],
      [45,19.644777576179102],
      [46,16.745896664550347],
      [47,17.213789404459703],
      [48,20.056299583848645],
      [49,16.133489834808596],
      [50,12.954908672170685],
      [51,10.710124578123633],
      [52,7.99331653229623],
      [53,11.330824794029468],
      [54,15.366888531658518],
      [55,20.162146683566043],
      [56,22.56433862111984],
      [57,19.342499731952728],
      [58,18.325580989588303],
      [59,20.7511874504748],
      [60,17.099488390174667],
      [61,19.327912207799372],
      [62,18.31650048764758],
      [63,14.34889182281918],
      [64,9.939606691311928],
      [65,10.640765261408266],
      [66,6.184018402150329],
      [67,10.32603369640253],
      [68,12.800228260925913],
      [69,13.441825186707572],
      [70,18.356807970216398],
      [71,22.877870826719246],
      [72,22.265182194135164],
      [73,26.922230352208814],
      [74,22.50189449417149],
      [75,18.14060836488997],
      [76,19.06846754782137],
      [77,19.73961245162804],
      [78,18.82061647678131],
      [79,23.33852310774632],
      [80,20.4810751737507],
      [81,25.47004674625981],
      [82,28.842343230667943],
      [83,29.09658130355575],
      [84,27.714558649179516],
      [85,25.220943394214757],
      [86,25.43025835749838],
      [87,24.13072502126257],
      [88,20.020443915879174],
      [89,18.387986699568284],
      [90,18.307930265812836],
      [91,18.72058117598284],
      [92,22.46850401457292],
      [93,21.718447234477544],
      [94,26.488413058421976],
      [95,29.882771503348536],
      [96,26.94717052753741],
      [97,28.06481155716483],
      [98,30.40253552214977],
      [99,28.987765656899995],
      [100,30.13551373541587],
      [101,27.605418583328863],
      [102,30.214101672191696],
      [103,26.88133118194294],
      [104,25.727723710013045],
      [105,28.279900485071032],
      [106,27.89821646957165],
      [107,30.69854959893513],
      [108,31.4282872565538],
      [109,36.14975119379828],
      [110,32.0227980362552],
      [111,27.309945041337073],
      [112,29.51230564564233],
      [113,32.67035607222466],
      [114,28.82372957289023],
      [115,28.85242847072152],
      [116,29.63844624105993],
      [117,29.157219655397313],
      [118,27.90616896335908],
      [119,30.71160984027734],
      [120,28.026131698214115],
      [121,23.82439628518755],
      [122,18.83160453591808],
      [123,14.487027404093734],
      [124,11.761696821209515],
      [125,12.758521331246762],
      [126,11.367219794014758],
      [127,14.21423733022224],
      [128,11.602480291802959],
      [129,15.244397384751025],
      [130,13.050114582189945],
      [131,17.253378403411432],
      [132,18.506683542934038],
      [133,23.04087000728893],
      [134,21.87625260158983],
      [135,25.974296957094985],
      [136,22.463388750666468],
      [137,17.675052230498956],
      [138,14.806456821972226],
      [139,18.589538541056534],
      [140,20.005874168046084],
      [141,22.934846222699328],
      [142,25.155316598067426],
      [143,27.883126867602705],
      [144,27.76231130416712],
      [145,28.618896779193612],
      [146,26.413595554645298],
      [147,28.097785659338193],
      [148,29.502272077881898],
      [149,26.1165859635503]
    ];
    
    
    
    function getRandomData(totalPoints = 150, start = 50) {
      var data = [];
    
      // Do a random walk
      while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : start;
        var y = prev + Math.random() * 10 - 5;
    
        if(y < 0) { y = Math.random() * 10; }
        else if(y > 100) { y = 80; }
    
        data.push(y);
      }
    
      // Zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
      }
    
      return res;
    }



    $(function(){
       

      var plot = $.plot('#flotChart', [{
        data: flotSampleData10,
        color: '#80bdff',
        lines: {
          fillColor: { colors: [{ opacity: .6 }, { opacity: .4 }]}
        }
      },{
        data: flotSampleData4,
        color: '#007bff',
        lines: {
          fillColor: { colors: [{ opacity: .8 }, { opacity: .6 }]}
        }
      },{
        data: flotSampleData11,
        color: '#003d80',
        lines: {
          fillColor: { colors: [{ opacity: .9 }, { opacity: .7 }]}
        }
      }], {
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            lineWidth: 0,
            fill: true
          }
        },
        grid: {
          borderWidth: 0,
          aboveData: true
        },
        yaxis: {
          show: true,
          min: 0,
          max: 150,
          color: 'rgba(255,255,255,0.2)',
          ticks: [[0,''],[25,'$25,000'],[50,'$50,000'],[75,'$75,000'],[100,'$100,000']]
        },
        xaxis: {
          show: true,
          ticks: [[0,''],[8,'Jan'],[20,'Feb'],[32,'Mar'],[44,'Apr'],[56,'May'],[68,'Jun'],[80,'Jul'],[92,'Aug'],[104,'Sep'],[116,'Oct'],[128,'Nov'],[140,'Dec']],
          color: 'rgba(255,255,255,0.2)'
        }
      });

      $.plot('#flotChart1', [{
          data: flotSampleData6,
          color: '#70737c'
        }], {
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: { colors: [ { opacity: 0 }, { opacity: 0.1 } ] }
          }
        },
        grid: {
          borderWidth: 0,
          labelMargin: 0
        },
        yaxis: {
          show: false,
          min: 0,
          max: 120
        },
        xaxis: { show: false }
      });

      $.plot('#flotChart2', [{
          data: flotSampleData7,
          color: '#007bff'
        }], {
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: { colors: [ { opacity: 0 }, { opacity: 0.2 } ] }
          }
        },
        grid: {
          borderWidth: 0,
          labelMargin: 0
        },
        yaxis: {
          show: false,
          min: 0,
          max: 120
        },
        xaxis: { show: false }
      });
      
      $.plot('#flotChart5', [{
          data: flotSampleData6,
          color: '#70737c'
        }], {
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: { colors: [ { opacity: 0 }, { opacity: 0.1 } ] }
          }
        },
        grid: {
          borderWidth: 0,
          labelMargin: 0
        },
        yaxis: {
          show: false,
          min: 0,
          max: 120
        },
        xaxis: { show: false }
      });

      $.plot('#flotChart6', [{
          data: flotSampleData7,
          color: '#007bff'
        }], {
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: { colors: [ { opacity: 0 }, { opacity: 0.2 } ] }
          }
        },
        grid: {
          borderWidth: 0,
          labelMargin: 0
        },
        yaxis: {
          show: false,
          min: 0,
          max: 120
        },
        xaxis: { show: false }
      });

      $.plot('#flotChart3', [{
          data: flotSampleData8,
          color: '#fff'
        }], {
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: { colors: [ { opacity: 0 }, { opacity: 0.2 } ] }
          }
        },
        grid: {
          borderWidth: 0,
          labelMargin: 0
        },
        yaxis: {
          show: false,
          min: 0,
          max: 120
        },
        xaxis: { show: false }
      });

      $.plot('#flotChart4', [{
          data: flotSampleData9,
          color: '#fff'
        }], {
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            lineWidth: 2,
            fill: true,
            fillColor: { colors: [ { opacity: 0 }, { opacity: 0.2 } ] }
          }
        },
        grid: {
          borderWidth: 0,
          labelMargin: 0
        },
        yaxis: {
          show: false,
          min: 0,
          max: 120
        },
        xaxis: { show: false }
      });

      

      // Progress
      var prog1 = $('#progressBar1 .progress-bar:first-child');
      prog1.css('width','30%');
      prog1.attr('aria-valuenow','30');
      prog1.text('30%');

      var prog2 = $('#progressBar1 .progress-bar:last-child');
      prog2.css('width','53%');
      prog2.attr('aria-valuenow', '53');
      prog2.text('53%');

      // Progress
      var prog3 = $('#progressBar2 .progress-bar:first-child');
      prog3.css('width','35%');
      prog3.attr('aria-valuenow','35');
      prog3.text('35%');

      var prog4 = $('#progressBar2 .progress-bar:last-child');
      prog4.css('width','37%');
      prog4.attr('aria-valuenow', '37');
      prog4.text('37%');

    });
  }

}
