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

  app.directive('tabContact', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab-contact.html'
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
      details: "I'm a full-stack web developer and designer living in Wellington, New Zealand. I strive to create websites where good design and clean code work in harmony. I challenge myself to push the boundaries with new ideas.",
      email: "jacobafb@gmail.com",
      mobile: "+64 20 409 29632",
      github: "jakefb",
      githuburl: "https://github.com/jakefb",
      instagram: "jake.fb",
      instagramurl: "https://instagram.com/jake.fb",
      facebook: "jake.fultonbuckle",
      facebookurl: "https://www.facebook.com/jake.fultonbuckle",
      image: "img/jake-skating.jpg"
    },
  ]

  var sites = [
    {
      name: "Nelson Sambassadors",
      details: "Nelson Sambassadors are a community based percussion group, that bring the vibrant rhythms of Brazillian Samba to the Top of The South. I crafted their website to reflect their vibrant colours and funky beats.",
      url: "http://sambanelson.co.nz",
      image: "img/samba.jpg"
    },
    {
      name: "Intelligent Kids",
      details: "Intelligent Kids is a community project, aimed at improving the financial literacy of our future generations. I designed their website to look clean and make their educational content look good across all devices.",
      url: "http://intelligentkids.com.au",
      image: "img/intelligentkids.jpg"
    },
    {
      name: "Blue Sky Beekeeping",
      details: "Blue Sky Beekeeping specialise in breeding high quality Italian Queen bees. Their new website utilises the power of a custom eccommerce store, to sell their merchandise and encourage customers make contact.",
      url: "http://174.138.26.196",
      image: "img/blueskybeekeeping.jpg"
    },
    {
      name: "Dovedale",
      details: "Dovedale is the market leader in the baking of gluten free products. Their website was designed from the ground up and uses a custom ecommerce store to suit their needs.",
      url: "http://dovedale.nz",
      image: "img/dovedale.jpg"
    },
    {
      name: "Fastcast",
      details: "Fastcast is a lightning-fast streaming site, designed for streaming high quality content. It is based on a torrent client for the web.",
      url: "https://fastcast.nz",
      image: "img/fastcast.jpg"
    },
    {
      name: "Physical Culture",
      details: "Physical Culture have a passion for coaching, competing and helping others do the same. Their website was designed with Wordpress to showcase their articles, so that they can get their message across effectively.",
      url: "http://physicalculture.co.nz",
      image: "img/physicalculture.jpg"
    },
  ]
})()
