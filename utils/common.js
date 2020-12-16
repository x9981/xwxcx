//模拟新闻数据
const news = [{
    id: '264698',
    title: '6G中国方案，北邮人在行动',
    poster: '../../utils/images/1.jpg',
    content: ' 本网讯（校出版社）5G的商用刚刚步入正轨，6G的研发就已经悄然萌芽。北邮人再一次站在了时代的风口，为祖国科技发展贡献自己的一份力。相信每一个北邮人看到新华社的报道时，心中那份家国情怀的自豪感油然而生。 ',
    add_date: '2020.11.19'
  },
  {
    id: '304083',
    title: '学脉相连，全国67所高校联合公祭侵华日军南京大屠杀遇难同胞',
    poster: '../../utils/images/2.jpg',
    content: ' 本网讯 （校出版社）12月13日，山河肃穆，草木含悲。勿忘国殇，砥砺前行。2020年，北京邮电大学全体学子向南京大屠杀死难者和所有在日本帝国主义侵华战争期间惨遭日本侵略者杀戮的死难者同胞致哀。 ',
    add_date: '2020-12-13'
  },
  {
    id: '305670',
    title: '喜讯连连！我校四项科技成果荣获2020年度中国通信学会科学技术奖一等奖',
    poster: '../../utils/images/3.jpg',
    content: '本网讯（校出版社）2020年12月4-6日，2020（第三届）中国信息通信大会在成都召开，大会主题为“新基建新动能”。会上，颁发了2020年度中国通信学会科学技术奖获奖项目名单。我校共有四项科技成果荣获2020年度中国通信学会科学技术奖一等奖。其中：主持完成两项，参加完成两项。',
    add_date: '2020-12-9'
  }
];

//获取新闻列表
function getNewsList() {
  let list = [];
  for (var i = 0; i < news.length; i++) {
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list; //返回新闻列表
}

//获取新闻内容
function getNewsDetail(newsID) {
  let msg = {
    code: '404', //没有对应的新闻
    news: {}
  };
  for (var i = 0; i < news.length; i++) {
    if (newsID == news[i].id) { //匹配新闻id编号
      msg.code = '200'; //成功
      msg.news = news[i]; //更新当前新闻内容
      break;
    }
  }
  return msg; //返回查找结果
}

/*
 * 对外暴露接口
 */
module.exports = {
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail
}

//module.export.getNewsDetail = getNewsDetail