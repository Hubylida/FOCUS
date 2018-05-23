var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var member_str = fs.readFileSync('members.json', {
    encoding: 'UTF-8'
  }),
  member = JSON.parse(member_str);
var event_str = fs.readFileSync('events.json', {
    encoding: 'UTF-8'
  }),
  event = JSON.parse(event_str);
var research_str = fs.readFileSync('researchs.json', {
    encoding: 'UTF-8'
  }),
  research = JSON.parse(research_str);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/members', function (req, res, next) {
  res.render('members');
});

router.get('/researchs', function (req, res, next) {
  res.render('researchs');
});

router.get('/events', function (req, res, next) {
  res.render('events');
});

router.get('/join', function (req, res, next) {
  res.render('join');
})

router.get('/about', function (req, res, next) {
  res.render('about');
});


for (let i = 0; i < 60; i++) {
  router.get('/members_' + (i + 1), function (req, res, next) {
    res.render('member', {
      "name": member[i].name,
      "title": member[i].title,
      "head_img": member[i].head_img,
      "intro": member[i].intro,
      "phone": member[i].phone,
      "Email": member[i].Email
    });
  });
}

for (let j = 0; j < 10; j++) {
  router.get('/events_' + (j + 1), function (req, res, next) {
    res.render('event', {
      "title": event[j].title,
      "head_img": event[j].head_img,
      "img_1": event[j].img_1,
      "img_2": event[j].img_2,
      "img_3": event[j].img_3,
      "img_4": event[j].img_4,
      "img_5": event[j].img_5,
      "img_6": event[j].img_6,
      "img_7": event[j].img_7,
      "img_8": event[j].img_8,
      "p_1": event[j].p_1,
      "p_2": event[j].p_2,
      "p_3": event[j].p_3,
      "p_4": event[j].p_4,
      "p_5": event[j].p_5,
      "p_6": event[j].p_6,
      "p_7": event[j].p_7,
      "p_8": event[j].p_8,
      "link_1": event[j].link_1,
      "link_1_name": event[j].link_1_name,
      "content_footer": event[j].content_footer
    })
  })
}

for (let k = 0; k < 10; k++) {
  router.get('/researchs_' + (k + 1), function (req, res, next) {
    res.render('research', {
      "name": research[k].name,
      "head_img": research[k].head_img,
      "img_1": research[k].img_1,
      "img_2": research[k].img_2,
      "img_3": research[k].img_3,
      "img_4": research[k].img_4,
      "img_5": research[k].img_5,
      "img_6": research[k].img_6,
      "p_1": research[k].p_1,
      "p_2": research[k].p_2,
      "p_3": research[k].p_3,
      "p_4": research[k].p_4,
      "p_5": research[k].p_5,
      "p_6": research[k].p_6,
      "developer": research[k].developer
    })
  })
}
module.exports = router;