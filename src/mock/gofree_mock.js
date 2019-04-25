import MockAdapter from 'axios-mock-adapter';
import axios from '../util/axios.js';

const gofree_mock = new MockAdapter(axios);

gofree_mock.onGet('/persona/getCandidatePlaces/3301/').reply(200, {
  code: 200,
  msg: '成功',
  result: [
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
  ],
});

gofree_mock.onPost('/persona/getFirstPreference').reply(200, {
  code: 200,
  msg: '提交成功',
});

gofree_mock.onGet('/get-trip').reply(config => new Promise(((resolve, reject) => {
  setTimeout(() => {
    resolve([200, {
      code: 200,
      msg: '',
      trips: [
        {
          day: '1',
          trip: ['西湖(10分钟)', '断桥残雪(20分钟)', '曲院风荷(1小时)', '楼外楼(孤山路店)(30分钟)', '汉庭酒店'],
        },
        {
          day: '2',
          trip: ['柳浪闻莺(1小时)', '雷峰塔(2小时)', '龙井村(2小时)', '九溪烟树(1.5小时)'],
        },
        {
          day: '3',
          trip: ['灵隐飞来峰(0.5小时)', '灵隐寺(1.5小时)', '三潭印月(1.5小时)', '吴山广场(2小时)', '河坊街(1小时)'],
        },
        {
          day: '4',
          trip: ['湿地公园(3-4小时)', '浙江大学玉泉校区(1小时)', '青芝坞(1小时)'],
        },
      ],
    },
    ]);
  }, 2000);
})));

// 延迟2秒
gofree_mock.onGet('/get-line').reply(config => new Promise(((resolve, reject) => {
  setTimeout(() => {
    resolve([200, {
      code: 200,
      msg: '',
      /** 地图数据* */
      map: {
        /**
         * @param x 纬度
         * @param y 经度
         */
        centerP: [
              'x': 120.117768,
              'y': 30.2274,
        ],
        points: [
          [
            {
              x: 120.117768,
              y: 30.2274,
              placeId: 1,
              type: 0,
              name: '西湖风景区',
            },
            {
              x: 120.158169,
              y: 30.264563,
              placeId: 2,
              type: 1,
              name: '断桥残雪',
            },
            {
              x: 120.139927,
              y: 30.255807,
              placeId: 3,
              type: 2,
              name: '曲院风荷',
            },
            {
              x: 120.147227,
              y: 30.256825,
              placeId: 4,
              type: 0,
              name: '楼外楼(孤山路店)',
            },
            {
              x: 120.117137,
              y: 30.274968,
              placeId: 5,
              type: 0,
              name: '汉庭酒店',
            },
          ],
          [
            {
              x: 120.162605,
              y: 30.245792,
              placeId: 5,
              type: 0,
              name: '柳浪闻莺公园',
            },
            {
              x: 120.155358,
              y: 30.236839,
              placeId: 6,
              type: 0,
              name: '雷峰塔',
            },
            {
              x: 120.116337,
              y: 30.226336,
              placeId: 7,
              type: 0,
              name: '龙井村',
            },
            {
              x: 120.119643,
              y: 30.208948,
              placeId: 8,
              type: 0,
              name: '九溪烟树',
            },
          ],
          [
            {
              x: 120.117768,
              y: 30.2274,
              placeId: 1,
              type: 0,
              name: '西湖风景区',
            },
            {
              x: 120.158169,
              y: 30.264563,
              placeId: 2,
              type: 1,
              name: '断桥残雪',
            },
            {
              x: 120.157069,
              y: 30.263205,
              placeId: 3,
              type: 2,
              name: '白堤',
            },
            {
              x: 120.146286,
              y: 30.257394,
              placeId: 4,
              type: 0,
              name: '孤山公园',
            },
          ],
          [
            {
              x: 120.147227,
              y: 30.256825,
              placeId: 5,
              type: 0,
              name: '楼外楼(孤山路店)',
            },
            {
              x: 120.139927,
              y: 30.255807,
              placeId: 6,
              type: 0,
              name: '曲院风荷',
            },
            {
              x: 120.14437,
              y: 30.250088,
              placeId: 7,
              type: 0,
              name: '苏堤春晓',
            },
            {
              x: 120.146626,
              y: 30.236862,
              placeId: 8,
              type: 0,
              name: '花港观鱼',
            },
          ],
        ],
      },
      /** 总览信息* */
      id: 1,
      typeName: '民俗特色',
      destination: '杭州',
      start: '2017/12/05',
      end: '2017/12/15',
      price: 5780,
      /** 地点信息* */
      places: [
        [
          {
            placeId: 1,
            name: '西湖',
            score: 4.9,
            zanNum: 1321,
            tags: [
              '情侣出行',
              '风景名胜',
              '必去',
            ],
            description: '旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。',
            price: 320,
            imgs: [
              'https://i0.hippopx.com/photos/640/861/188/the-summer-palace-kunming-lake-beijing-preview.jpg',
              'https://i0.hippopx.com/photos/579/914/396/hangzhou-west-lake-ching-ming-ship-preview.jpg',
              'https://i0.hippopx.com/photos/66/390/567/west-lake-the-scenery-character-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 2,
            name: '断桥残雪',
            score: 5.0,
            zanNum: 123,
            tags: [
              '家庭出游',
              '冬天很美',
            ],
            description: '是《白蛇传》中许仙、白娘子的相会之地，也给这座长桥平添许多浪漫色彩。冬雪初下，桥的阳面冰雪消融，但阴面仍被残雪覆盖，从高处看桥似断非断，形成著名的“断桥残雪”。可以作为游玩西湖的起点。从断桥上白堤去孤山，依次游玩西湖周边的各个景点。',
            price: 120,
            imgs: [
              'https://i0.hippopx.com/photos/222/216/35/sunset-west-lake-hanoi-vietnam-preview.jpg',
              'https://i0.hippopx.com/photos/359/587/580/china-hangzhou-west-lake-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/496/893/91/west-lake-sunset-bridges-silhouette-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/767/79/618/northern-california-lake-mendocino-ducks-in-a-row-lake-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 3,
            name: '曲院风荷',
            score: 4.5,
            zanNum: 121,
            tags: [
              '荷花超美',
              '放松身心',
            ],
            description: '西湖十景之一，其所在的风荷公园内栽培了上百个品种的荷花，夏季显出分外迷人的吸引力。南宋时，此地有一座官家酿酒作坊，取金沙涧的溪水造曲酒。附近种有菱荷，每当夏日风起，酒香荷香沁人心脾，故称“曲院风荷”。 莲叶田田，菡萏妖娆。水面上架设了造型各异的小桥，人从桥上过，如在荷中行。',
            price: 80,
            imgs: [
              'https://i0.hippopx.com/photos/918/177/197/china-hangzhou-west-lake-preview.jpg',
              'https://i0.hippopx.com/photos/307/98/487/lake-hangzhou-the-scenery-preview.jpg',
              'https://i0.hippopx.com/photos/914/640/967/hangzhou-the-scenery-humanities-preview.jpg',
              'https://i0.hippopx.com/photos/581/364/879/hangzhou-the-landscape-between-scenery-botanical-garden-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 4,
            name: '楼外楼(孤山路店)',
            score: 4.7,
            zanNum: 116,
            tags: [
              '西湖醋鱼',
              '老字号',
              '农井虾仁',
            ],
            description: '杭帮菜老字号，古诗有云：“西湖醋鱼何处美，独数杭州楼外楼”',
            price: 180,
            imgs: [
              'https://i0.hippopx.com/photos/313/831/719/shrimp-seafood-mexican-food-preview.jpg',
              'https://i0.hippopx.com/photos/544/231/706/take-food-bowl-vegetables-preview.jpg',
              'https://i0.hippopx.com/photos/120/420/848/food-lip-delicious-food-preview.jpg',
            ],
            type: 2, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 5,
            name: '汉庭酒店',
            score: 4.9,
            zanNum: 239,
            tags: [
              '店员热情',
              '大床很舒服',
            ],
            description: '汉庭酒店是华住酒店集团的创始品牌。华住创始人季琦先生，在连续成功创办了“携程旅行网”(NASDAQ:CTRP)、“如家快捷酒店”(NASDAQ:HMIN) 两家纳斯达克上市公司之后，于2005年第三次创业，推出汉庭酒店，并曾一度以“汉庭”命名集团，后于2012年正式启用“华住”作为集团名称。',
            price: 250,
            imgs: [
              'https://i0.hippopx.com/photos/690/622/456/hotel-hallway-hotel-hallway-lights-preview.jpg',
              'https://i0.hippopx.com/photos/967/606/545/bed-double-bed-hotel-room-preview.jpg',
              'https://i0.hippopx.com/photos/337/289/143/hotel-podjavorn%C3%ADk-suite-preview.jpg',
              'https://i0.hippopx.com/photos/290/85/260/hotel-guest-room-new-preview.jpg',
            ],
            type: 1, // (0 景点  1 酒店 2 饭店)
          },
        ], [
          {
            placeId: 1,
            name: '柳浪闻莺',
            score: 4.8,
            zanNum: 230,
            tags: [
              '环境清幽',
              '休闲胜地',
            ],
            description: '柳浪闻莺是西湖十景之一，位于西湖东南岸，清波门处的大型公园，是人们放松身心的好地方。南宋时为帝王御花园，称聚景园，清代恢复柳浪闻莺旧景。园林布局开朗、清新、雅丽、朴实。柳丛衬托着紫楠、雪松、广玉兰及碧桃、海棠、月季等异木名花。是欣赏西子浓妆淡抹的观景佳地。 清幽的环境也很受老年人欢迎，往来的游客也会在此休憩。',
            price: 280,
            imgs: [
              'https://i0.hippopx.com/photos/645/975/619/willow-hiroshima-natural-summer-preview.jpg',
              'https://i0.hippopx.com/photos/962/123/630/weeping-willow-pasture-baumm-willow-tree-preview.jpg',
              'https://i0.hippopx.com/photos/268/946/404/willow-way-country-road-spring-preview.jpg',
              'https://i0.hippopx.com/photos/603/34/549/willow-lake-water-reflection-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 2,
            name: '雷峰塔',
            score: 5.0,
            zanNum: 2029,
            tags: [
              '经典名胜',
              '标志建筑',
            ],
            description: '是西湖的标志性景点，由吴越国王钱弘俶因为王妃生子而建，如今更多是因为《白蛇传》而闻名。“雷峰如老衲，保俶如美人”。雷峰塔与保俶塔隔湖相对，呈现“一湖映双塔，南北相对峙”的美景。每当夕阳西下，塔影横空，别有一番景色，故被称为“雷峰夕照”。',
            price: 70,
            imgs: [
              'https://i0.hippopx.com/photos/842/130/347/west-lake-in-summer-pagoda-hangzhou-pagoda-leifeng-pagoda-preview.jpg',
              'http://n2-q.mafengwo.net/s6/M00/90/F3/wKgB4lKbQL6AUh2NAAIYXevlHHU11.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100',
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556463778&di=f7ee1b43cbeddd47251ae90d618fbc3b&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161116%2Fe508e28a85db4e77bac3fca20b4e53a3_th.jpeg',
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555869059481&di=4840525cec01c9df6e3a4a233b4364f2&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171009%2F2c56944ffe1548bf93efaeaa5aa8cbc4.jpeg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 3,
            name: '龙井村',
            score: 4.5,
            zanNum: 280,
            tags: [
              '群山环抱',
              '云雾缭绕',
            ],
            description: '龙井村位于西湖风景名胜区西南面，四面群山环抱，呈北高南低的趋势，村内常住人口约800多人，拥有近800亩的高山茶园，村的西北面北高峰，狮子峰，天竺峰形成一道天然屏障，挡住 西北寒风的侵袭。南面为九溪，溪谷深广，直通钱塘江，春夏季的东南风易入山谷，通风通气的地理条件为龙井茶的生长提供了得天独厚的优势。这里出产的龙井茶位居“狮，龙，云，虎”之首。相传乾隆皇帝下江南时，曾到龙井村狮峰山下的胡公庙品尝西湖龙井茶。饮后赞不绝口，并将庙前十八棵茶树封为“御茶”。“茶乡第一村”——龙井村，因盛产顶级西湖龙井茶而闻名于世。东临西子湖，西依五云山，南靠滔滔东去的钱塘江水，北抵插入云端的南北高峰，四周群山叠翠，云雾环绕，就如一颗镶嵌在西子湖畔的翡翠宝石。',
            price: 20,
            imgs: [
              'https://i0.hippopx.com/photos/800/80/853/tour-tea-gardens-nature-preview.jpg',
              'https://i0.hippopx.com/photos/94/544/881/spring-alpine-tea-garden-preview.jpg',
              'https://i0.hippopx.com/photos/445/861/85/jeju-green-tea-plantation-nature-tea-plantation-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 4,
            name: '九溪烟树',
            score: 4.6,
            zanNum: 329,
            tags: [
              '西湖醋鱼',
              '老字号',
              '农井虾仁',
            ],
            description: '俗称“九溪十八涧”，是由众多小溪流汇合而成的“Y”字形溪涧，每逢雨后，附近八觉山上的树林烟雾升腾，满谷迷蒙，形成好看的“烟树”景观。九溪长约5.5公里，沿着溪流是葱茏的树木和大片的茶园，是绝佳的避暑圣地。有三个出入口，即“Y”字左上的龙井村、右上的杨梅岭，以及下方的九溪路。中间交汇的地方，叫做“溪中溪”，九溪烟树公园、理安寺、瀑布等景点都集中在这里。可以自行选择路线，但比较推荐的走法是九溪路-溪中溪-龙井村。除步行外，九溪路-溪中溪-杨梅岭路段可以自驾，景区内有停车场。',
            price: 110,
            imgs: [
              'https://i0.hippopx.com/photos/553/204/1015/river-water-streams-preview.jpg',
              'https://i0.hippopx.com/photos/9/707/743/waterfall-streams-mountain-forest-preview.jpg',
              'https://i0.hippopx.com/photos/209/673/97/sea-creeks-marseille-preview.jpg',
              'https://i0.hippopx.com/photos/378/690/435/forest-bach-trees-mountain-stream-preview.jpg',
            ],
            type: 2, // (0 景点  1 酒店 2 饭店)
          },
        ], [
          {
            placeId: 1,
            name: '西湖',
            score: 4.9,
            zanNum: 1321,
            tags: [
              '情侣出行',
              '风景名胜',
              '必去',
            ],
            description: '旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。',
            price: 320,
            imgs: [
              'https://i0.hippopx.com/photos/640/861/188/the-summer-palace-kunming-lake-beijing-preview.jpg',
              'https://i0.hippopx.com/photos/579/914/396/hangzhou-west-lake-ching-ming-ship-preview.jpg',
              'https://i0.hippopx.com/photos/66/390/567/west-lake-the-scenery-character-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 2,
            name: '断桥残雪',
            score: 5.0,
            zanNum: 123,
            tags: [
              '家庭出游',
              '冬天很美',
            ],
            description: '是《白蛇传》中许仙、白娘子的相会之地，也给这座长桥平添许多浪漫色彩。冬雪初下，桥的阳面冰雪消融，但阴面仍被残雪覆盖，从高处看桥似断非断，形成著名的“断桥残雪”。可以作为游玩西湖的起点。从断桥上白堤去孤山，依次游玩西湖周边的各个景点。',
            price: 120,
            imgs: [
              'https://i0.hippopx.com/photos/222/216/35/sunset-west-lake-hanoi-vietnam-preview.jpg',
              'https://i0.hippopx.com/photos/359/587/580/china-hangzhou-west-lake-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/496/893/91/west-lake-sunset-bridges-silhouette-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/767/79/618/northern-california-lake-mendocino-ducks-in-a-row-lake-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 3,
            name: '曲院风荷',
            score: 4.5,
            zanNum: 121,
            tags: [
              '荷花超美',
              '放松身心',
            ],
            description: '西湖十景之一，其所在的风荷公园内栽培了上百个品种的荷花，夏季显出分外迷人的吸引力。南宋时，此地有一座官家酿酒作坊，取金沙涧的溪水造曲酒。附近种有菱荷，每当夏日风起，酒香荷香沁人心脾，故称“曲院风荷”。 莲叶田田，菡萏妖娆。水面上架设了造型各异的小桥，人从桥上过，如在荷中行。',
            price: 80,
            imgs: [
              'https://i0.hippopx.com/photos/918/177/197/china-hangzhou-west-lake-preview.jpg',
              'https://i0.hippopx.com/photos/307/98/487/lake-hangzhou-the-scenery-preview.jpg',
              'https://i0.hippopx.com/photos/914/640/967/hangzhou-the-scenery-humanities-preview.jpg',
              'https://i0.hippopx.com/photos/581/364/879/hangzhou-the-landscape-between-scenery-botanical-garden-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 4,
            name: '楼外楼(孤山路店)',
            score: 4.7,
            zanNum: 116,
            tags: [
              '西湖醋鱼',
              '老字号',
              '农井虾仁',
            ],
            description: '杭帮菜老字号，古诗有云：“西湖醋鱼何处美，独数杭州楼外楼”',
            price: 180,
            imgs: [
              'https://i0.hippopx.com/photos/313/831/719/shrimp-seafood-mexican-food-preview.jpg',
              'https://i0.hippopx.com/photos/544/231/706/take-food-bowl-vegetables-preview.jpg',
              'https://i0.hippopx.com/photos/120/420/848/food-lip-delicious-food-preview.jpg',
            ],
            type: 2, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 5,
            name: '汉庭酒店',
            score: 4.9,
            zanNum: 239,
            tags: [
              '店员热情',
              '大床很舒服',
            ],
            description: '汉庭酒店是华住酒店集团的创始品牌。华住创始人季琦先生，在连续成功创办了“携程旅行网”(NASDAQ:CTRP)、“如家快捷酒店”(NASDAQ:HMIN) 两家纳斯达克上市公司之后，于2005年第三次创业，推出汉庭酒店，并曾一度以“汉庭”命名集团，后于2012年正式启用“华住”作为集团名称。',
            price: 250,
            imgs: [
              'https://i0.hippopx.com/photos/690/622/456/hotel-hallway-hotel-hallway-lights-preview.jpg',
              'https://i0.hippopx.com/photos/967/606/545/bed-double-bed-hotel-room-preview.jpg',
              'https://i0.hippopx.com/photos/337/289/143/hotel-podjavorn%C3%ADk-suite-preview.jpg',
              'https://i0.hippopx.com/photos/290/85/260/hotel-guest-room-new-preview.jpg',
            ],
            type: 1, // (0 景点  1 酒店 2 饭店)
          },
        ], [
          {
            placeId: 1,
            name: '西湖',
            score: 4.9,
            zanNum: 1321,
            tags: [
              '情侣出行',
              '风景名胜',
              '必去',
            ],
            description: '旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。',
            price: 320,
            imgs: [
              'https://i0.hippopx.com/photos/640/861/188/the-summer-palace-kunming-lake-beijing-preview.jpg',
              'https://i0.hippopx.com/photos/579/914/396/hangzhou-west-lake-ching-ming-ship-preview.jpg',
              'https://i0.hippopx.com/photos/66/390/567/west-lake-the-scenery-character-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 2,
            name: '断桥残雪',
            score: 5.0,
            zanNum: 123,
            tags: [
              '家庭出游',
              '冬天很美',
            ],
            description: '是《白蛇传》中许仙、白娘子的相会之地，也给这座长桥平添许多浪漫色彩。冬雪初下，桥的阳面冰雪消融，但阴面仍被残雪覆盖，从高处看桥似断非断，形成著名的“断桥残雪”。可以作为游玩西湖的起点。从断桥上白堤去孤山，依次游玩西湖周边的各个景点。',
            price: 120,
            imgs: [
              'https://i0.hippopx.com/photos/222/216/35/sunset-west-lake-hanoi-vietnam-preview.jpg',
              'https://i0.hippopx.com/photos/359/587/580/china-hangzhou-west-lake-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/496/893/91/west-lake-sunset-bridges-silhouette-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/767/79/618/northern-california-lake-mendocino-ducks-in-a-row-lake-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 3,
            name: '曲院风荷',
            score: 4.5,
            zanNum: 121,
            tags: [
              '荷花超美',
              '放松身心',
            ],
            description: '西湖十景之一，其所在的风荷公园内栽培了上百个品种的荷花，夏季显出分外迷人的吸引力。南宋时，此地有一座官家酿酒作坊，取金沙涧的溪水造曲酒。附近种有菱荷，每当夏日风起，酒香荷香沁人心脾，故称“曲院风荷”。 莲叶田田，菡萏妖娆。水面上架设了造型各异的小桥，人从桥上过，如在荷中行。',
            price: 80,
            imgs: [
              'https://i0.hippopx.com/photos/918/177/197/china-hangzhou-west-lake-preview.jpg',
              'https://i0.hippopx.com/photos/307/98/487/lake-hangzhou-the-scenery-preview.jpg',
              'https://i0.hippopx.com/photos/914/640/967/hangzhou-the-scenery-humanities-preview.jpg',
              'https://i0.hippopx.com/photos/581/364/879/hangzhou-the-landscape-between-scenery-botanical-garden-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 4,
            name: '楼外楼(孤山路店)',
            score: 4.7,
            zanNum: 116,
            tags: [
              '西湖醋鱼',
              '老字号',
              '农井虾仁',
            ],
            description: '杭帮菜老字号，古诗有云：“西湖醋鱼何处美，独数杭州楼外楼”',
            price: 180,
            imgs: [
              'https://i0.hippopx.com/photos/313/831/719/shrimp-seafood-mexican-food-preview.jpg',
              'https://i0.hippopx.com/photos/544/231/706/take-food-bowl-vegetables-preview.jpg',
              'https://i0.hippopx.com/photos/120/420/848/food-lip-delicious-food-preview.jpg',
            ],
            type: 2, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 5,
            name: '汉庭酒店',
            score: 4.9,
            zanNum: 239,
            tags: [
              '店员热情',
              '大床很舒服',
            ],
            description: '汉庭酒店是华住酒店集团的创始品牌。华住创始人季琦先生，在连续成功创办了“携程旅行网”(NASDAQ:CTRP)、“如家快捷酒店”(NASDAQ:HMIN) 两家纳斯达克上市公司之后，于2005年第三次创业，推出汉庭酒店，并曾一度以“汉庭”命名集团，后于2012年正式启用“华住”作为集团名称。',
            price: 250,
            imgs: [
              'https://i0.hippopx.com/photos/690/622/456/hotel-hallway-hotel-hallway-lights-preview.jpg',
              'https://i0.hippopx.com/photos/967/606/545/bed-double-bed-hotel-room-preview.jpg',
              'https://i0.hippopx.com/photos/337/289/143/hotel-podjavorn%C3%ADk-suite-preview.jpg',
              'https://i0.hippopx.com/photos/290/85/260/hotel-guest-room-new-preview.jpg',
            ],
            type: 1, // (0 景点  1 酒店 2 饭店)
          },
        ],
      ],
      /** 路线信息 地点数量-1* */
      lines: [
        [
          {
            fromToName: '西湖 - 断桥残雪',
            description: '驾车约30分钟，相距3.1公里',
            price: 45,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '断桥残雪 - 曲院风荷',
            description: '驾车约50分钟，相距4.7公里',
            price: 70,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '曲院风荷 - 楼外楼(孤山路店)',
            description: '步行约10分钟，相距1公里',
            price: 120,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '楼外楼(孤山路店) - 汉庭酒店',
            description: '公交约15分钟，相距3公里',
            price: 2,
            type: 1, // (0 驾车  1 公交 2 步行)
          },
        ], [
          {
            fromToName: '柳浪闻莺 - 雷峰塔',
            description: '驾车约30分钟，相距3.1公里',
            price: 27,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '雷峰塔 - 龙井村',
            description: '驾车约50分钟，相距4.7公里',
            price: 45,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '龙井村 - 九溪烟树',
            description: '步行约10分钟，相距1公里',
            price: 2,
            type: 2, // (0 驾车  1 公交 2 步行)
          },
          // {
          //   fromToName: '楼外楼(孤山路店) - 汉庭酒店',
          //   description: '公交约15分钟，相距3公里',
          //   price: 2,
          //   type: 1, // (0 驾车  1 公交 2 步行)
          // },
        ], [
          {
            fromToName: '西湖 - 断桥残雪',
            description: '驾车约30分钟，相距3.1公里',
            price: 27,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '断桥残雪 - 曲院风荷',
            description: '驾车约50分钟，相距4.7公里',
            price: 45,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '曲院风荷 - 楼外楼(孤山路店)',
            description: '步行约10分钟，相距1公里',
            price: 0,
            type: 2, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '楼外楼(孤山路店) - 汉庭酒店',
            description: '公交约15分钟，相距3公里',
            price: 2,
            type: 1, // (0 驾车  1 公交 2 步行)
          },
        ], [
          {
            fromToName: '西湖 - 断桥残雪',
            description: '驾车约30分钟，相距3.1公里',
            price: 27,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '断桥残雪 - 曲院风荷',
            description: '驾车约50分钟，相距4.7公里',
            price: 45,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '曲院风荷 - 楼外楼(孤山路店)',
            description: '步行约10分钟，相距1公里',
            price: 2,
            type: 2, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '楼外楼(孤山路店) - 汉庭酒店',
            description: '公交约15分钟，相距3公里',
            price: 2,
            type: 1, // (0 驾车  1 公交 2 步行)
          },
        ]],
    }]);
  }, 2000);
})));

gofree_mock.onGet('/get-more').reply(200, {
  code: 200,
  msg: '',
  places: [
    {
      placeId: 1,
      name: '云栖竹径',
      score: 4.5,
      zanNum: 1231,
      tags: [
        '适合拍照',
        '值得去',
      ],
      description: '云栖竹径是一座山坞里的公园，拥有西湖周遭最美的竹海。公园内仍可寻迹到古时云栖古寺的留存，还有回雁峰、宝刀陇、壁观峰等景点，以及千年枫香古树。竹径中央的青石板与两旁的卵石之间用黑砖相隔，相传清代康熙、乾隆二帝都来过云栖，当时以中央为御道，专供皇帝行走。小径旁有洗心、三聚等凉亭。竹径尽头古树成行，有亭可憩，有茶室可小坐品茗。',
      price: 324,
      imgs: [
        'https://i0.hippopx.com/photos/740/494/464/bamboo-bamboo-grove-bamboos-preview.jpg',
        'https://i0.hippopx.com/photos/366/730/554/forest-forest-way-tour-preview.jpg',
        'https://i0.hippopx.com/photos/40/533/317/autumn-forest-autumn-forest-preview.jpg',
        'https://i0.hippopx.com/photos/913/601/78/mangroves-forest-colombia-trees-preview.jpg',
      ],
      type: 0,
    },
    {
      placeId: 2,
      name: '岳墓栖霞',
      score: 4.6,
      zanNum: 245,
      tags: [
        '交通方便',
        '游客较多',
        '金牌景点',
      ],
      description: '岳王庙位于西湖西北角，是为纪念民族英雄岳飞而建。岳王庙始建于南宋嘉定十四年(1221年)，明景泰年间改称“忠烈庙”，经历了元、明、清、民国时兴时废，代代相传一直留存到现在。每年入秋，庙背后的栖霞岭上红枫似火，望之如霞。每当夕阳西下时，岳墓上便有了一道道霞光，非常绚美。',
      price: 230,
      imgs: [
        'https://p1-q.mafengwo.net/s7/M00/DB/BE/wKgB6lPoHZuAKpD2ABIJRwyEl1E25.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100',
        'https://i0.hippopx.com/photos/916/811/752/attic-ancient-architecture-trees-flowers-preview.jpg',
        'https://i0.hippopx.com/photos/668/694/512/leipzig-southern-cemetery-mausoleum-columnar-preview.jpg',
        'https://i0.hippopx.com/photos/894/718/499/delhi-humayung-tomb-pollution-monument-preview.jpg',
      ],
      type: 0,
    },
    {
      placeId: 3,
      name: '杭州植物园',
      score: 4.7,
      zanNum: 248,
      tags: [
        '适合孩子',
        '西湖边',
      ],
      description: '杭州植物园位于西湖西北，设有经济植物、观赏植物、树木、山水园林等九个展览区和四个实验区。植物园四季都有景色可看，最值得一看的要数灵峰探梅，每年早春时节将在此举办大型花展。百草园里种植了包括“浙八味”在内的一千多种药用植物，科普性极强。玉泉的泉池里游满了肥硕的青鱼和红黄鲤鱼，是小憩的好地方，深得小朋友的欢心。',
      price: 390,
      imgs: [
        'https://i0.hippopx.com/photos/208/658/369/plants-succulent-botanical-preview.jpg',
        'https://i0.hippopx.com/photos/332/17/266/arboretum-winter-garden-nature-preview.jpg',
        'https://i0.hippopx.com/photos/379/352/892/cape-town-south-africa-botanical-preview.jpg',
        'https://i0.hippopx.com/photos/302/796/962/botanical-garden-raindrops-flowers-preview.jpg',
      ],
      type: 0,
    },
    {
      placeId: 4,
      name: '龙井问茶',
      score: 4.8,
      zanNum: 450,
      tags: [
        '步行圣地',
        '值得参观',
      ],
      description: '龙井问茶是新西湖十景之一，有名列西湖三大名泉的龙井泉，龙井泉水冲泡的龙井茶绝对是一绝。龙井分为老龙井和下龙井，下龙井经改造后，已成为统一农居点，有许多农家乐，是度假休闲圣地。老龙井有龙井泉和已经废弃的龙井寺，还有乾隆下江南时采过的“十八棵御茶”。每年清明前后，都会有游客慕名而来，访茶、饮茶、问茶，是一个非常“杭州”的体验。',
      price: 100,
      imgs: [
        'https://i0.hippopx.com/photos/123/135/597/spring-alpine-tea-garden-preview.jpg',
        'https://i0.hippopx.com/photos/865/1/260/tea-plantation-tea-garden-mountain-garden-preview.jpg',
        'https://i0.hippopx.com/photos/800/80/853/tour-tea-gardens-nature-preview.jpg',
        'https://i0.hippopx.com/photos/445/861/85/jeju-green-tea-plantation-nature-tea-plantation-preview.jpg',
      ],
      type: 0,
    },
    {
      placeId: 5,
      name: '西溪湿地',
      score: 4.4,
      zanNum: 243,
      tags: [
        '环境清幽',
        '坐船游玩',
      ],
      description: '西溪国家湿地公园位于市区西面，这里环境清幽、水道纵横，是城市中少有的天然湿地，有“杭州之肾”之称。杭州标志性旅游胜地之一，因冯小刚的《非诚勿扰》而名声大噪。坐船漫游芦苇荡、寻迹《非诚勿扰》取景处，或是探访隐于林中的秋雪庵、梅竹山庄等古迹，都是非常享受的体验',
      price: 160,
      imgs: [
        'http://b4-q.mafengwo.net/s13/M00/E7/5E/wKgEaVxvoQOAZIF2AADq1fFX-ag57.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b2-q.mafengwo.net/s12/M00/D7/09/wKgED1xWchuAJmnZAAR8o80U04858.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b2-q.mafengwo.net/s13/M00/AD/98/wKgEaVxuWuWAHPaFAAJOawyO6-M79.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b2-q.mafengwo.net/s13/M00/B1/03/wKgEaVxuXHaAZhidAARSaxUvbT881.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
      ],
      type: 0,
    },
    {
      placeId: 6,
      name: '河坊街',
      score: 4.5,
      zanNum: 149,
      tags: [
        '历史精髓',
        '购物圣地',
      ],
      description: '人说，杭州的精髓，不在别处，就在那一条条的老街上。如果去老街，首推河坊街。位于吴山脚下的河坊街，是清河坊的一部分，是杭州老城区一条有名的复古街道，可以说是最能体现杭州历史文化风貌的街道。这里不是太长，却很有市井文化感，有特色小吃、古玩字画、茶楼和老字号，还能买到各种旅游纪念品和民俗小玩意，无论是本地人还是游客都很喜欢光顾。夜晚的河坊街更有韵味，不妨夜游一场哟。',
      price: 80,
      imgs: [
        'http://b2-q.mafengwo.net/s9/M00/C9/FA/wKgBs1aAk6uAYZ5GAAnOAbioceE36.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b3-q.mafengwo.net/s8/M00/DC/A2/wKgBpVX1N5eAX1_QAA9v3ueVeqc67.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://p2-q.mafengwo.net/s10/M00/7E/9A/wKgBZ1i2q4SARPvhAAL0p_2eqJ475.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://n3-q.mafengwo.net/s10/M00/72/6E/wKgBZ1iAtlyAOYvWAA1Vv7gFyG073.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
      ],
      type: 0,
    },
    {
      placeId: 7,
      name: '双峰插云',
      score: 4.8,
      zanNum: 343,
      tags: [
        '仙气十足',
        '流连忘返',
      ],
      description: '清朝以后，双峰之巅已无塔影，赏景位置成为一桩疑案；如今灵隐路洪春桥畔尽管建有“双峰插云”的景碑亭，但游人到此只见林木葱蔚，‘双峰’连影子也无觅处。南宋时文人主张从凤凰山上望之，方可得其神采；所谓“试向凤凰山上望，南高天近北烟低”。明代的李流芳提出到苏堤的第三桥望山桥上观赏此景，他在《西湖臣游图题跋。两峰罢雾图》中写道：“三桥龙王堂，望湖西诸山，颇尽其胜。烟林雾障，蚋带层叠，淡描浓抹，顷刻百态，非董巨妙笔，不足以发其气韵。”',
      price: 30,
      imgs: [
        'http://p1-q.mafengwo.net/s10/M00/75/51/wKgBZ1nq122AZuAKAAh2s5rgQ5o94.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b3-q.mafengwo.net/s13/M00/EF/9D/wKgEaVyQ8niAcsH5AA8XLvPHr9Q06.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b3-q.mafengwo.net/s13/M00/EF/9D/wKgEaVyQ8niAcsH5AA8XLvPHr9Q06.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b4-q.mafengwo.net/s13/M00/48/F5/wKgEaVxk3FiAbSv8AAi-0xCmjBs38.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
      ],
      type: 0,
    },
    {
      placeId: 8,
      name: '平湖秋月',
      score: 4.7,
      zanNum: 423,
      tags: [
        '帝皇陵墓',
        '荷花很美',
      ],
      description: '自古以来，吟诵西湖的诗文何止上千。最脍炙人口的大概是苏东坡的《饮湖上初晴后雨》：“水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，淡妆浓抹总相宜。”而我更喜欢白居易的《钱塘湖春行》：“孤山寺北贾亭西，水面初平云脚低。几处早莺争暖树，谁家新燕啄春泥。乱花渐欲迷人眼，浅草才能没马蹄。最爱湖东行不足，绿杨阴里白沙堤。”如果说，苏东坡的诗像幅水墨画，寥寥数笔，就把“晴湖”和“雨湖”的美都说到了；那么白香山的这首诗就是一幅工笔画，有诸多细节，把湖畔的初春描绘得惟妙惟肖。',
      price: 40,
      imgs: [
        'http://n4-q.mafengwo.net/s13/M00/88/32/wKgEaVx_f5SAVAeVAAKXoyIy_W818.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b4-q.mafengwo.net/s13/M00/06/FF/wKgEaVxpa12AYh1jAAfFA5fy_dw41.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://n2-q.mafengwo.net/s13/M00/3E/12/wKgEaVxk1qKAfH4SAA3dCgdH4zU64.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://n2-q.mafengwo.net/s13/M00/F0/25/wKgEaVyQ8ruAG0TBABKl67JgGo463.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
      ],
      type: 0,
    },
    {
      placeId: 9,
      name: '小冰岛',
      score: 4.6,
      zanNum: 251,
      tags: [
        '时髦前卫',
        '创意特色',
      ],
      description: '隐藏于凤凰创意园区的小冰岛，其实是园区内最深处的一面山，山前会有一片翠绿的湖水。不知道从什么时候开始，这个地方吸引了很多文艺青年前来拍照打卡。除了山和水，还有一些很有创意的黄白相间的铁架，很容易拍出至身冰岛的感觉。',
      price: 50,
      imgs: [
        'http://n1-q.mafengwo.net/s13/M00/67/B3/wKgEaVyvSCmAQWVSAA03Uz77nOE25.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b3-q.mafengwo.net/s13/M00/6A/B4/wKgEaVyvSISASetjABGEEn5zi-s78.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b2-q.mafengwo.net/s13/M00/6A/CF/wKgEaVyvSIeANtfJAAsGB1IbCQ848.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b4-q.mafengwo.net/s13/M00/6A/DF/wKgEaVyvSImAJ3kkAAwv8uMiP3w49.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
      ],
      type: 0,
    },
    {
      placeId: 10,
      name: '千岛湖',
      score: 4.7,
      zanNum: 233,
      tags: [
        '绝美之境',
        '鸟语花香',
      ],
      description: '千岛湖位于浙江省杭州西郊的淳安县境内，拥有1078座岛屿号称世界之最。这里山清水秀、悠然静美，是放松身心的绝佳选择。当你驱车驶向这片纯美之地，满目尽是青翠色，山林传来鸟语鸣，还未到达，便已爱上这里。',
      price: 20,
      imgs: [
        'http://p4-q.mafengwo.net/s11/M00/FF/07/wKgBEFseIj-AZArfAAeXsC2ds-U10.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b1-q.mafengwo.net/s11/M00/16/8E/wKgBEFseJ7yAU63ZAARt46L4X0074.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://b1-q.mafengwo.net/s11/M00/14/20/wKgBEFseJyqAbCTGAATu53QAg0s04.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
        'http://p2-q.mafengwo.net/s11/M00/1F/68/wKgBEFseKc2AVzFyAAS49-OgxPg78.jpeg?imageView2%2F2%2Fw%2F1360%2Fq%2F90',
      ],
      type: 0,
    },
  ],
  /* 与places索引对应 */
  map_data: [
    {
      x: 116.376979,
      y: 39.921198,
      placeId: 1,
      type: 2,
    },
    {
      x: 116.376979,
      y: 39.921198,
      placeId: 1,
      type: 2,
    },
    {
      x: 116.376979,
      y: 39.921198,
      placeId: 1,
      type: 2,
    },
    {
      x: 116.376979,
      y: 39.921198,
      placeId: 1,
      type: 2,
    },
  ],
});


gofree_mock.onPost('/select-replace').reply(200, {
  code: 200,
  msg: '',
  relate_lines: [
    {
      fromToName: '西湖 - 杭州酒家(延安路店)ss',
      description: '公交约20分钟，相距3.1公里',
      price: 2,
    },
    {
      fromToName: '西湖 - 杭州酒家(延安路店)sss',
      description: '公交约20分钟，相距3.1公里',
      price: 2,
    },
  ],
});

gofree_mock.onPost('/refresh-all').reply(200, {
  code: 200,
  msg: '',
  /** 地图数据* */
  map: {
    centerP: [
      'x': 116.404,
      'y': 39.915,
    ],
    points: [
      {
        x: 116.301934,
        y: 39.977552,
        placeId: 1,
        type: 1,
      },
      {
        x: 116.353407,
        y: 39.978723,
        placeId: 2,
        type: 1,
      },
      {
        x: 116.451143,
        y: 39.970761,
        placeId: 3,
        type: 1,
      },
      {
        x: 116.50832,
        y: 39.919141,
        placeId: 4,
        type: 1,
      },
    ],
  },
  /** 总览信息* */
  id: 2,
  typeName: '民俗特色',
  destination: '杭州',
  start: '2017/12/05',
  end: '2017/12/15',
  price: 2002,
  /** 地点信息* */
  places: [
    {
      placeId: 1,
      name: '西湖',
      score: 4.9,
      zanNum: 2233,
      tags: [
        '情侣出行',
        '风景名胜',
        '必去',
      ],
      description: '好地方啊好地方！！！！',
      price: 10,
      imgs: [
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
      ],
      type: 0, // (0 景点  1 酒店 2 饭店)
    },
    {
      placeId: 2,
      name: '西湖',
      score: 4.9,
      zanNum: 2233,
      tags: [
        '情侣出行',
        '风景名胜',
        '必去',
      ],
      description: '好地方啊好地方！！！！',
      price: 10,
      imgs: [
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
      ],
      type: 1, // (0 景点  1 酒店 2 饭店)
    },
    {
      placeId: 3,
      name: '西湖',
      score: 4.9,
      zanNum: 2233,
      tags: [
        '情侣出行',
        '风景名胜',
        '必去',
      ],
      description: '好地方啊好地方！！！！',
      price: 10,
      imgs: [
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
      ],
      type: 2, // (0 景点  1 酒店 2 饭店)
    },
    {
      placeId: 4,
      name: '西湖',
      score: 4.9,
      zanNum: 2233,
      tags: [
        '情侣出行',
        '风景名胜',
        '必去',
      ],
      description: '好地方啊好地方！！！！',
      price: 10,
      imgs: [
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
      ],
      type: 0, // (0 景点  1 酒店 2 饭店)
    },
  ],
  /** 路线信息 地点数量-1* */
  lines: [
    {
      fromToName: '西湖 - 杭州酒家(延安路店)',
      description: '公交约20分钟，相距3.1公里',
      price: 2,
    },
    {
      fromToName: '西湖 - 杭州酒家(延安路店)',
      description: '公交约20分钟，相距3.1公里',
      price: 2,
    },
    {
      fromToName: '西湖 - 杭州酒家(延安路店)',
      description: '公交约20分钟，相距3.1公里',
      price: 2,
    },
  ],
});

// 获取短信验证码
gofree_mock.onGet('/account/veri_sms/api').reply(200, {
  code: 200,
  msg: '发送成功',
  result: [],
});

// 注册
gofree_mock.onPost('/account/register/api').reply(200, {
  code: 200,
  msg: '注册成功',
  result: { id: 1 },
});

// 登录
gofree_mock.onPost('/account/login/api').reply(200, {
  code: 200,
  msg: '登录成功',
  result: [],
});


// 注销
gofree_mock.onGet('/account/logout/api').reply(200, {
  code: 200,
  msg: '账号已注销',
  result: [],
});


export default gofree_mock;
