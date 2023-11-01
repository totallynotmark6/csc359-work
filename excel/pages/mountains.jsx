import Table from '../components/Table';
import React from 'react';

function Header({ title }) {
  return <h1 className="text-3xl font-bold underline text-center">{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const headers = ['Name', 'Height (m)', 'Prominence (m)', 'Range', 'Country']
  const data = [
    [
      "Mount Everest, Sagarmatha, Chomolungma",
      "8,849",
      "8,849",
      "Mahalangur Himalaya",
      "Nepal - China"
    ],
    [
      "K2",
      "8,611",
      "4,020",
      "BaltoroKarakoram",
      "Pakistan, China"
    ],
    [
      "Kangchenjunga",
      "8,586",
      "3,922",
      "Kangchenjunga Himalaya",
      "Nepal - India"
    ],
    [
      "Lhotse",
      "8,516",
      "610",
      "Mahalangur Himalaya",
      "China - Nepal"
    ],
    [
      "Makalu",
      "8,485",
      "2,378",
      "MahalangurHimalaya",
      "- Nepal    - China\r"
    ],
    [
      "Cho Oyu",
      "8,188",
      "2,340",
      "MahalangurHimalaya",
      "- China    - Nepal\r"
    ],
    [
      "Dhaulagiri I",
      "8,167",
      "3,357",
      "Dhaulagiri Himalaya",
      "Nepal\r"
    ],
    [
      "Manaslu",
      "8,163",
      "3,092",
      "Manaslu Himalaya",
      "Nepal\r"
    ],
    [
      "Nanga Parbat",
      "8,126",
      "4,608",
      "Nanga Parbat Himalaya",
      "Pakistan\r"
    ],
    [
      "Annapurna I",
      "8,091",
      "2,984",
      "Annapurna Himalaya",
      "Nepal\r"
    ],
    [
      "- Gasherbrum I    - Hidden Peak    - K5",
      "8,080",
      "2,155",
      "Baltoro Karakoram",
      "Pakistan, China\r"
    ],
    [
      "Broad Peak",
      "8,051",
      "1,701",
      "Baltoro Karakoram",
      "Pakistan, China\r"
    ],
    [
      "- Gasherbrum II    - K4",
      "8,035",
      "1,524",
      "Baltoro Karakoram",
      "Pakistan, China\r"
    ],
    [
      "- Shishapangma    - Gosainthan",
      "8,027",
      "2,897",
      "Jugal Himalaya",
      "China\r"
    ],
    [
      "Gyachung Kang",
      "7,952",
      "672",
      "Mahalangur Himalaya",
      "- Nepal    - China\r"
    ],
    [
      "- Gasherbrum III    - K3a",
      "7,946",
      "355",
      "Baltoro Karakoram",
      "Pakistan, China\r"
    ],
    [
      "Annapurna II",
      "7,937",
      "2,437",
      "Annapurna Himalaya",
      "Nepal\r"
    ],
    [
      "- Gasherbrum IV    - K3",
      "7,932",
      "712",
      "Baltoro Karakoram",
      "Pakistan\r"
    ],
    [
      "Himalchuli",
      "7,893",
      "1,633",
      "Manaslu Himalaya",
      "Nepal\r"
    ],
    [
      "Distaghil Sar",
      "7,884",
      "2,525",
      "Hispar Karakoram",
      "Pakistan\r"
    ],
    [
      "Ngadi Chuli",
      "7,871",
      "1,011",
      "Manaslu Himalaya",
      "Nepal\r"
    ],
    [
      "Nuptse",
      "7,864",
      "305",
      "Mahalangur Himalaya",
      "Nepal\r"
    ],
    [
      "Khunyang Chhish",
      "7,823",
      "1,765",
      "Hispar Karakoram",
      "Pakistan\r"
    ],
    [
      "- Masherbrum    - K1",
      "7,821",
      "2,457",
      "Masherbrum Karakoram",
      "Pakistan\r"
    ],
    [
      "Nanda Devi",
      "7,816",
      "3,139",
      "Garhwal Himalaya",
      "India\r"
    ],
    [
      "Chomo Lonzo",
      "7,804",
      "590",
      "Mahalangur Himalaya",
      "China\r"
    ],
    [
      "Batura Sar",
      "7,795",
      "3,118",
      "Batura Karakoram",
      "Pakistan\r"
    ],
    [
      "Rakaposhi",
      "7,788",
      "2,818",
      "Rakaposhi-HaramoshKarakoram",
      "Pakistan\r"
    ],
    [
      "Namcha Barwa",
      "7,782",
      "4,106",
      "AssamHimalaya",
      "China\r"
    ],
    [
      "Kanjut Sar",
      "7,760",
      "1,660",
      "HisparKarakoram",
      "Pakistan\r"
    ],
    [
      "Kamet",
      "7,756",
      "2,825",
      "GarhwalHimalaya",
      "India\r"
    ],
    [
      "Dhaulagiri II",
      "7,751",
      "2,397",
      "DhaulagiriHimalaya",
      "Nepal\r"
    ],
    [
      "- Saltoro Kangri    - K10",
      "7,742",
      "2,160",
      "SaltoroKarakoram",
      "Pakistan, India\r"
    ],
    [
      "- Kumbhakarna    - Jannu",
      "7,711",
      "1,036",
      "KangchenjungaHimalaya",
      "Nepal\r"
    ],
    [
      "Tirich Mir",
      "7,708",
      "3,910",
      "Hindu Kush",
      "Pakistan\r"
    ],
    [
      "Molamenqing",
      "7,703",
      "433",
      "LangtangHimalaya",
      "China\r"
    ],
    [
      "Gurla Mandhata",
      "7,694",
      "2,788",
      "NalakankarHimalaya",
      "China\r"
    ],
    [
      "- Saser Kangri I    - K22",
      "7,672",
      "2,304",
      "SaserKarakoram",
      "India\r"
    ],
    [
      "Chogolisa",
      "7,665",
      "1,624",
      "MasherbrumKarakoram",
      "Pakistan\r"
    ],
    [
      "Dhaulagiri IV",
      "7,661",
      "469",
      "DhaulagiriHimalaya",
      "Nepal\r"
    ],
    [
      "Kongur Tagh",
      "7,649",
      "3,585",
      "Kongur Shan (Eastern Pamirs)",
      "China\r"
    ],
    [
      "Dhaulagiri V",
      "7,618",
      "340",
      "DhaulagiriHimalaya",
      "Nepal\r"
    ],
    [
      "Shispare",
      "7,611",
      "1,240",
      "BaturaKarakoram",
      "Pakistan\r"
    ],
    [
      "Trivor",
      "7,577",
      "997",
      "HisparKarakoram",
      "Pakistan\r"
    ],
    [
      "Gangkhar Puensum",
      "7,570",
      "2,995",
      "Kula KangriHimalaya",
      "- Bhutan    - China\r"
    ],
    [
      "- Gongga Shan    - Minya Konka",
      "7,556",
      "3,642",
      "Daxue Mountains (Hengduan Shan)",
      "China\r"
    ],
    [
      "Annapurna III",
      "7,555",
      "703",
      "AnnapurnaHimalaya",
      "Nepal\r"
    ],
    [
      "Skyang Kangri",
      "7,545",
      "1,085",
      "BaltoroKarakoram",
      "Pakistan, China\r"
    ],
    [
      "Changtse",
      "7,543",
      "514",
      "MahalangurHimalaya",
      "China\r"
    ],
    [
      "Kula Kangri",
      "7,538",
      "1,654",
      "Kula KangriHimalaya",
      "- China    - Bhutan  [dp 10]\r"
    ],
    [
      "Kongur Tiube",
      "7,530",
      "840",
      "Kongur Shan (Eastern Pamirs)",
      "China\r"
    ],
    [
      "Annapurna IV",
      "7,525",
      "255",
      "AnnapurnaHimalaya",
      "Nepal\r"
    ],
    [
      "Mamostong Kangri",
      "7,516",
      "1,803",
      "RimoKarakoram",
      "India\r"
    ],
    [
      "Saser Kangri II E",
      "7,513",
      "1,458",
      "SaserKarakoram",
      "India\r"
    ],
    [
      "Muztagh Ata",
      "7,509",
      "2,698",
      "Muztagata (Eastern Pamirs)",
      "China\r"
    ],
    [
      "Ismoil Somoni Peak",
      "7,495",
      "3,402",
      "Pamir (Academy of Sciences Range)",
      "Tajikistan\r"
    ],
    [
      "Saser Kangri III",
      "7,495",
      "835",
      "SaserKarakoram",
      "India'[dp 12]\r"
    ],
    [
      "Noshaq",
      "7,492",
      "2,024",
      "Hindu Kush",
      "- Afghanistan    - Pakistan\r"
    ],
    [
      "Pumari Chhish",
      "7,492",
      "884",
      "HisparKarakoram",
      "Pakistan\r"
    ],
    [
      "Passu Sar",
      "7,476",
      "647",
      "BaturaKarakoram",
      "Pakistan\r"
    ],
    [
      "Yukshin Gardan Sar",
      "7,469",
      "1,374",
      "HisparKarakoram",
      "Pakistan\r"
    ],
    [
      "Teram Kangri I",
      "7,462",
      "1,703",
      "SiachenKarakoram",
      "- China    - India  [dp 13][dp 14]'[dp 12]\r"
    ],
    [
      "Jongsong Peak",
      "7,462",
      "1,298",
      "KangchenjungaHimalaya",
      "- India    - China    - Nepal\r"
    ],
    [
      "Malubiting",
      "7,458",
      "2,193",
      "Rakaposhi-HaramoshKarakoram",
      "Pakistan\r"
    ],
    [
      "Gangapurna",
      "7,455",
      "563",
      "AnnapurnaHimalaya",
      "Nepal\r"
    ],
    [
      "- Jengish Chokusu    - Tömür    - Pik Pobedy",
      "7,439",
      "4,148",
      "Tian Shan",
      "- Kyrgyzstan    - China\r"
    ],
    [
      "- Sunanda Devi    - Nanda Devi East",
      "7,434",
      "229",
      "GarhwalHimalaya",
      "India\r"
    ],
    [
      "K12",
      "7,428",
      "1,978",
      "SaltoroKarakoram",
      "- Pakistan, India\r"
    ],
    [
      "- Yangra    - Ganesh I",
      "7,422",
      "2,352",
      "GaneshHimalaya",
      "- China    - Nepal\r"
    ],
    [
      "Sia Kangri",
      "7,422",
      "642",
      "SiachenKarakoram",
      "- Pakistan    - China\r"
    ],
    [
      "Momhil Sar",
      "7,414",
      "907",
      "HisparKarakoram",
      "Pakistan\r"
    ],
    [
      "Kabru N",
      "7,412",
      "720",
      "KangchenjungaHimalaya",
      "- India    - Nepal\r"
    ],
    [
      "Skil Brum",
      "7,410",
      "1,152",
      "BaltoroKarakoram",
      "Pakistan\r"
    ],
    [
      "Haramosh Peak",
      "7,409",
      "2,277",
      "Rakaposhi-HaramoshKarakoram",
      "Pakistan\r"
    ],
    [
      "Istor-o-Nal",
      "7,403",
      "1,043",
      "Hindu Kush",
      "Pakistan\r"
    ],
    [
      "Ghent Kangri",
      "7,401",
      "1,493",
      "SaltoroKarakoram",
      "- Pakistan, India\r"
    ],
    [
      "Ultar",
      "7,388",
      "688",
      "BaturaKarakoram",
      "Pakistan\r"
    ],
    [
      "Rimo I",
      "7,385",
      "1,428",
      "RimoKarakoram",
      "India\r"
    ],
    [
      "Churen Himal",
      "7,385",
      "650",
      "DhaulagiriHimalaya",
      "Nepal\r"
    ],
    [
      "Teram Kangri III",
      "7,382",
      "520",
      "SiachenKarakoram",
      "- India    - China  [dp 13][dp 14]'[dp 12]\r"
    ],
    [
      "Sherpi Kangri",
      "7,380",
      "1,320",
      "SaltoroKarakoram",
      "- Pakistan\r"
    ],
    [
      "Labuche Kang",
      "7,367",
      "1,957",
      "Labuche Himalaya",
      "China\r"
    ],
    [
      "Kirat Chuli",
      "7,362",
      "1,168",
      "KangchenjungaHimalaya",
      "- Nepal    - India\r"
    ],
    [
      "Abi Gamin",
      "7,355",
      "217",
      "GarhwalHimalaya",
      "- India    - China\r"
    ],
    [
      "- Gimmigela Chuli    - The Twins",
      "7,350",
      "432",
      "KangchenjungaHimalaya",
      "- India    - Nepal\r"
    ],
    [
      "Nangpai Gosum",
      "7,350",
      "427",
      "MahalangurHimalaya",
      "- Nepal    - China\r"
    ],
    [
      "Saraghrar",
      "7,349",
      "1,979",
      "Hindu Kush",
      "Pakistan\r"
    ],
    [
      "Talung",
      "7,349",
      "366",
      "KangchenjungaHimalaya",
      "- Nepal    - India\r"
    ],
    [
      "- Jomolhari    - Chomo Lhari",
      "7,326",
      "2,341",
      "JomolhariHimalaya",
      "- Bhutan    - China\r"
    ],
    [
      "Chamlang",
      "7,321",
      "1,241",
      "MahalangurHimalaya",
      "Nepal\r"
    ],
    [
      "Chongtar",
      "7,315",
      "1,295",
      "BaltoroKarakoram",
      "China[dp 13]\r"
    ],
    [
      "Baltoro Kangri",
      "7,312",
      "1,140",
      "MasherbrumKarakoram",
      "Pakistan\r"
    ],
    [
      "Siguang Ri",
      "7,309",
      "669",
      "MahalangurHimalaya",
      "China\r"
    ],
    [
      "- The Crown    - Huang Guan Shan",
      "7,295",
      "1,919",
      "YengisogatKarakoram",
      "China[dp 13]\r"
    ],
    [
      "Gyala Peri",
      "7,294",
      "2,942",
      "AssamHimalaya",
      "China\r"
    ],
    [
      "Porong Ri",
      "7,292",
      "512",
      "LangtangHimalaya",
      "China\r"
    ],
    [
      "- Baintha Brakk    - The Ogre",
      "7,285",
      "1,891",
      "PanmahKarakoram",
      "Pakistan\r"
    ],
    [
      "Yutmaru Sar",
      "7,283",
      "680",
      "HisparKarakoram",
      "Pakistan\r"
    ],
    [
      "- K6    - Baltistan Peak",
      "7,282",
      "1,962",
      "MasherbrumKarakoram",
      "Pakistan\r"
    ],
    [
      "- Kangpenqing    - Gang Benchhen",
      "7,281",
      "1,345",
      "BaikuHimalaya",
      "China\r"
    ],
    [
      "Muztagh Tower",
      "7,276",
      "1,710",
      "BaltoroKarakoram",
      "- Pakistan, China\r"
    ],
    [
      "Mana Peak",
      "7,272",
      "732",
      "GarhwalHimalaya",
      "India\r"
    ],
    [
      "Dhaulagiri VI",
      "7,268",
      "488",
      "DhaulagiriHimalaya",
      "Nepal\r"
    ],
    [
      "Diran",
      "7,266",
      "1,329",
      "Rakaposhi-HaramoshKarakoram",
      "Pakistan\r"
    ],
    [
      "- Labuche Kang III    - Labuche Kang East",
      "7,250",
      "570",
      "Labuche Himalaya",
      "China\r"
    ],
    [
      "Putha Hiunchuli",
      "7,246",
      "1,151",
      "DhaulagiriHimalaya",
      "Nepal\r"
    ],
    [
      "Apsarasas Kangri",
      "7,245",
      "607",
      "SiachenKarakoram",
      "- India    - China  [dp 13][dp 14]'[dp 12]\r"
    ],
    [
      "Mukut Parbat",
      "7,242",
      "683",
      "GarhwalHimalaya",
      "- India    - China\r"
    ],
    [
      "Rimo III",
      "7,233",
      "613",
      "RimoKarakoram",
      "India[dp 16]'[dp 12]\r"
    ],
    [
      "Langtang Lirung",
      "7,227",
      "1,534",
      "LangtangHimalaya",
      "Nepal\r"
    ],
    [
      "Karjiang",
      "7,221",
      "895",
      "Kula KangriHimalaya",
      "China\r"
    ],
    [
      "Annapurna Dakshin (Annapurna South)",
      "7,219",
      "769",
      "AnnapurnaHimalaya",
      "Nepal\r"
    ],
    [
      "Khartaphu",
      "7,213",
      "712",
      "MahalangurHimalaya",
      "China\r"
    ],
    [
      "Tongshanjiabu[20]",
      "7,207",
      "1,757",
      "LunanaHimalaya",
      "- Bhutan    - China  [dp 17]\r"
    ],
    [
      "Malangutti Sar",
      "7,207",
      "507",
      "HisparKarakoram",
      "Pakistan[dp 18]\r"
    ],
    [
      "- Noijin Kangsang    - Norin Kang",
      "7,206",
      "2,160",
      "NagarzeHimalaya",
      "China\r"
    ],
    [
      "Langtang Ri",
      "7,205",
      "665",
      "LangtangHimalaya",
      "- Nepal    - China\r"
    ],
    [
      "- Kangphu Kang    - Shimokangri",
      "7,204",
      "1,244",
      "LunanaHimalaya",
      "- Bhutan    - China[dp 17]\r"
    ],
    [
      "Singhi Kangri",
      "7,202",
      "730",
      "SiachenKarakoram",
      "- India    - China  [dp 13][dp 14]'[dp 12]\r"
    ],
    [
      "Lupghar Sar",
      "7,200",
      "730",
      "HisparKarakoram",
      "Pakistan[dp 18]"
    ]
  ]  
  return (
    <div>
      <React.StrictMode>
        <Header title="mountains!" />
        <Table headers={headers} initalData={data}/>
      </React.StrictMode>
    </div>
  );
} 