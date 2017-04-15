(function() {
  var app = angular.module('argon', [])

  app.controller('ContentController', function() {
    this.items = people
    this.sites = sites
  })

  app.directive('contentTabs', function() {
    return {
      restrict: 'E',
      templateUrl: 'content-tabs.html',
      controller: function() {
        this.tab = 1
        this.isSet = function(checkTab) {
          return this.tab === checkTab
        }
        this.setTab = function(setTab) {
          this.tab = setTab
        }
      },
      controllerAs: 'tab'
    }
  })

  app.directive('tabHome', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab-home.html'
    }
  })

  app.directive('tabAbout', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab-about.html'
    }
  })

  app.directive('contentHome', function() {
    return {
      restrict: 'E',
      templateUrl: 'content-home.html'
    }
  })

  app.directive('contentAbout', function() {
    return {
      restrict: 'E',
      templateUrl: 'content-about.html'
    }
  })

  app.directive('contentContact', function() {
    return {
      restrict: 'E',
      templateUrl: 'content-contact.html'
    }
  })

  var people = [
    {
      name: "Jacob Fulton Buckle",
      details: "I'm a full-stack web developer and designer living in Wellington, New Zealand. I love designing beautiful websites and logos for my clients. I'm familiar with wide range of languages and frameworks and I enjoy learning new ones. The Web is constantly evolving and I do the same by challenging myself to push the boundaries with new ideas.",
      email: "jacobafb@gmail.com",
      mobile: "+64 20 409 29632",
      address: "45 Stansell Ave, Tahunanui, Nelson, 7011",
      github: "jakefb",
      githuburl: "https://github.com/jakefb",
      instagram: "jake.fb",
      instagramurl: "https://instagram.com/jake.fb",
      twitter: "TotalCodex",
      twitterurl: "https://twitter.com/TotalCodex",
      facebook: "jake.fultonbuckle",
      facebookurl: "https://www.facebook.com/jake.fultonbuckle",
      image: "img/jacob.jpg"
    },
  ]

  var sites = [
    {
      name: "Dovedale",
      details: "Dovedale is the market leader in the baking of breads, biscuits, crackers and cakes, which are all free of gluten, wheat, dairy and yeast.",
      url: "http://dovedale.nz",
      image: "img/dovedale.jpg"
    },
    {
      name: "Fastcast",
      details: "Fastcast is a lightning-fast streaming site, designed for streaming the content you love.",
      url: "https://fastcast.nz",
      image: "img/fastcast.jpg"
    },
    {
      name: "Physical Culture",
      details: "Physical Culture was started by Personal Trainer and Kettlebell Coach Heath Bowman in 2013. Joined by brother Jethro as Boxing Coach, they have a passion for coaching, competing and helping others do the same.",
      url: "http://physicalculture.co.nz",
      image: "img/physicalculture.jpg"
    },
  ]
})()
